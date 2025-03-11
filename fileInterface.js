var idbKeyval = function(e) {
    "use strict";
    class t {
        constructor(e="keyval-store", t="keyval") {
            this.storeName = t,
            this._dbp = new Promise((r,n)=>{
                const o = indexedDB.open(e, 1);
                o.onerror = ()=>n(o.error),
                o.onsuccess = ()=>r(o.result),
                o.onupgradeneeded = ()=>{
                    o.result.createObjectStore(t)
                }
            }
				   )
        }
        _withIDBStore(e, t) {
            return this._dbp.then(r=>new Promise((n,o)=>{
                const s = r.transaction(this.storeName, e);
                s.oncomplete = ()=>n(),
                s.onabort = s.onerror = ()=>o(s.error),
                t(s.objectStore(this.storeName))
            }
						))
        }
    }
    let r;
    function n() {
        return r || (r = new t),
        r
    }
    return e.Store = t,
    e.get = function(e, t=n()) {
        let r;
        return t._withIDBStore("readonly", t=>{
            r = t.get(e)
        }
			      ).then(()=>r.result)
    }
    ,
    e.set = function(e, t, r=n()) {
        return r._withIDBStore("readwrite", r=>{
            r.put(t, e)
        }
			      )
    }
    ,
    e.del = function(e, t=n()) {
        return t._withIDBStore("readwrite", t=>{
            t.delete(e)
        }
			      )
    }
    ,
    e.clear = function(e=n()) {
        return e._withIDBStore("readwrite", e=>{
            e.clear()
        }
			      )
    }
    ,
    e.keys = function(e=n()) {
        const t = [];
        return e._withIDBStore("readonly", e=>{
            (e.openKeyCursor || e.openCursor).call(e).onsuccess = function() {
                this.result && (t.push(this.result.key),
				this.result.continue())
            }
        }
			      ).then(()=>t)
    }
    ,
    e
}({});

"use strict";
function gaEvent(n, e, t, a, o) {
    if ("localhost" === location.hostname)
        return;
    const i = {
        eventCategory: n,
        eventAction: e
    };
    t && (i.eventLabel = t),
    a && (i.eventValue = a),
    o && (i.nonInteraction = !0),
    window.ga && window.ga("send", "event", i)
}
function gaTiming(n, e, t, a) {
    t = parseInt(t, 10),
    "localhost" !== location.hostname && window.ga && window.ga("send", "timing", n, e, t, a)
}
window.addEventListener("load", ()=>{
    setTimeout(()=>{
        let n = "browser";
        !0 === window.navigator.standalone ? n = "standalone-ios" : !0 === matchMedia("(display-mode: standalone)").matches && (n = "standalone"),
        gaEvent("Window Style", n, null, null, !0)
    }
               , 3100)
}
		       ),
window.addEventListener("load", ()=>{
    if ("performance"in window) {
        gaTiming("Start", "window-load", Math.round(performance.now())),
        setTimeout(()=>{
            const n = performance.getEntriesByType("paint");
            n && n.length > 0 && n.forEach(n=>{
                gaTiming("Start", n.name, Math.round(n.startTime + n.duration))
            }
                        )
        }
                   , 3e3)
    }
}
		       ),
window.addEventListener("DOMContentLoaded", ()=>{
    if ("performance"in window) {
        gaTiming("Start", "dom-content-loaded", Math.round(performance.now()))
    }
    window.ga && window.ga("send", "pageview", "/")
}
		       ),
window.addEventListener("load", ()=>{
    gaEvent("App Version", "0.0.13", null, null, !0)
}
		       ),
document.addEventListener("visibilitychange", n=>{
    gaEvent("Page Visibility", !0 === document.hidden ? "hidden" : "visible", null, null, !0)
}
			 );

"use strict";
const app = {
    appName: "Text Editor",
    file: {
        handle: null,
        name: null,
        isModified: !1
    },
    options: {
        captureTabs: !0,
        fontSize: 14,
        monoSpace: !1,
        wordWrap: !0
    },
    hasFSAccess: "chooseFileSystemEntries"in window || "showOpenFilePicker"in window,
    isMac: navigator.userAgent.includes("Mac OS X")
};

app.hasFSAccess ? (document.getElementById("not-supported").classList.add("hidden"),
		   gaEvent("File System APIs", "FSAccess")) : (document.getElementById("lblLegacyFS").classList.toggle("hidden", !1),
							       document.getElementById("butSave").classList.toggle("hidden", !0),
							       gaEvent("File System APIs", "Legacy")),
app.newFile = ()=>{
    app.confirmDiscard() && (app.setText(),
			     app.setFile(),
			     app.setModified(!1),
			     app.setFocus(!0),
			     gaEvent("FileAction", "New"))
}
,
app.openFile = async e=>{
    if (!app.confirmDiscard())
        return;
    if (!app.hasFSAccess) {
        gaEvent("FileAction", "Open", "Legacy");
        const e = await app.getFileLegacy();
        return void (e && app.readFile(e))
    }
    if (e) {
        if (gaEvent("FileAction", "OpenRecent", "FSAccess"),
            !1 === await verifyPermission(e, !0))
            return
    } else {
        gaEvent("FileAction", "Open", "FSAccess");
        try {
            e = await getFileHandle()
        } catch (e) {
            if ("AbortError" === e.name)
                return;
            gaEvent("Error", "FileOpen", e.name),
            alert("An error occured trying to open the file.")
        }
    }
    if (!e)
        return;
    const a = await e.getFile();
    app.readFile(a, e)
}
,
app.readFile = async(e,a)=>{
    try {
        app.setText(await readFile(e)),
        app.setFile(a || e.name),
        app.setModified(!1),
        app.setFocus(!0)
    } catch (e) {
        gaEvent("Error", "FileRead", e.name);
                    const a = `An error occured reading ${app.fileName}`;
        alert(a)
    }
}
,
app.saveFile = async()=>{
    try {
        if (!app.file.handle)
            return await app.saveFileAs();
        gaEvent("FileAction", "Save"),
        await writeFile(app.file.handle, app.getText()),
        app.setModified(!1)
    } catch (e) {
        gaEvent("Error", "FileSave", e.name),
        alert("Unable to save file")
    }
    app.setFocus()
}
,
app.saveFileAs = async()=>{
    if (!app.hasFSAccess)
        return gaEvent("FileAction", "Save As", "Legacy"),
    app.saveAsLegacy(app.file.name, app.getText()),
    void app.setFocus();
    let e;
    gaEvent("FileAction", "Save As", "FSAccess");
    try {
        e = await getNewFileHandle()
    } catch (e) {
        if ("AbortError" === e.name)
            return;
        return gaEvent("Error", "FileSaveAs1", e.name),
                    void alert("An error occured trying to open the file.")
    }
    try {
        await writeFile(e, app.getText()),
        app.setFile(e),
        app.setModified(!1)
    } catch (e) {
        return gaEvent("Error", "FileSaveAs2", e.name),
        alert("Unable to save file."),
        void gaEvent("Error", "Unable to write file", "FSAccess")
    }
    app.setFocus()
}
,
app.quitApp = ()=>{
    app.confirmDiscard() && (gaEvent("FileAction", "Quit"),
			     window.close())
}
;

"use strict";
const myMenus = {
    setup: e=>{
        const t = e.querySelector("button.menuTop");
        t.addEventListener("click", ()=>{
            myMenus._toggle(t)
        }
			  )
    }
    ,
    
    hide: e=>{
        e.querySelector(".menuTop").setAttribute("aria-expanded", !1);
        const t = e.querySelector(".menuItemContainer");
        t && t.classList.toggle("hidden", !0)
    }
    ,
    show: e=>{
        myMenus.hideAll(),
        e.querySelector(".menuTop").setAttribute("aria-expanded", !0);
        const t = e.querySelector(".menuItemContainer");
        t.classList.toggle("hidden", !1);
        const n = t.querySelector("button");
        if (!n)
            return myMenus.hideAll(),
        void app.setFocus();
        n.focus()
    }
    ,
    createButton: e=>{
        const t = document.createElement("button");
        return t.innerText = e,
        t.setAttribute("type", "button"),
        t.setAttribute("role", "menuitem"),
        t
    }
    ,
    addElement: (e,t)=>{
        e.querySelector(".menuItemContainer").appendChild(t)
    }
    ,
    clearMenu: e=>{
        e.querySelector(".menuItemContainer").innerHTML = ""
    }
    ,
    _toggle: e=>{
        const t = e.parentElement;
        "true" === e.getAttribute("aria-expanded") ? myMenus.hide(t) : myMenus.show(t)
    }
};
app.isMac || (window.addEventListener("keydown", e=>{
    !0 === e.altKey && "Alt" === e.key && document.body.classList.toggle("altKey", !0)
}
				     ),
              window.addEventListener("keyup", e=>{
                  "Alt" === e.key && document.body.classList.toggle("altKey", !1)
              }
				     ));



function getFileHandle() {
    return "showOpenFilePicker"in window ? window.showOpenFilePicker().then(e=>e[0]) : window.chooseFileSystemEntries()
}
function getNewFileHandle() {
    if ("showSaveFilePicker"in window) {
        const e = {
            types: [{
                description: "Text file",
                accept: {
                    "text/plain": [".txt"]
                }
            }]
        };
        return window.showSaveFilePicker(e)
    }
    return window.chooseFileSystemEntries({
        type: "save-file",
        accepts: [{
            description: "Text file",
            extensions: [".txt"],
            mimeTypes: ["text/plain"]
        }]
    })
}

function readFile(e) {
    return e.text ? e.text() : _readFileLegacy(e)
}

function _readFileLegacy(e) {
    return new Promise(t=>{
        const i = new FileReader;
        i.addEventListener("loadend", e=>{
            const i = e.srcElement.result;
            t(i)
        }
			  ),
        i.readAsText(e)
    }
                      )
}

async function writeFile(e, t) {
    if (e.createWriter) {
        const i = await e.createWriter();
        return await i.write(0, t),
        void await i.close()
    }
    const i = await e.createWritable();
    await i.write(t),
    await i.close()
}

async function verifyPermission(e, t) {
    const i = {};
    return t && (i.writable = !0,
                 i.mode = "readwrite"),
    "granted" === await e.queryPermission(i) || "granted" === await e.requestPermission(i)
}


!function(e) {
    const t = document.getElementById("menuFile");
    myMenus.setup(t),
    document.getElementById("butNew").addEventListener("click", ()=>{
        myMenus.hide(t),
        e.newFile()
    }
						      ),
    document.getElementById("butOpen").addEventListener("click", ()=>{
        myMenus.hide(t),
        e.openFile()
    }
						       ),
    document.getElementById("butSave").addEventListener("click", ()=>{
        myMenus.hide(t),
        e.saveFile()
    }
						       ),
    document.getElementById("butSaveAs").addEventListener("click", ()=>{
        myMenus.hide(t),
        e.saveFileAs()
    }
							 )
}(app);
