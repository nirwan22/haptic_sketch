var canvas;
var canvasColors;

var canvasDiv;
var canvasColorsDiv;


var interfaceType="canvas";
var context;
var contextColors;
var scaleFactor =vmax(100)/1200;
var scaleFactorM =vmax(100)/1200;
var scaleFactorH =vh(100)/1000;
if (scaleFactorM*700>vh(100)){scaleFactorM=vh(100)/900;}
//if (scaleFactorM>1.3){scaleFactorM=1;}

var myScreenOrientation = window.screen.orientation;


var orient="landscape";


var toolWidth = 300*scaleFactorM;
var toolHeight = 800*scaleFactorM;
var canvasX = 0;
var canvasY= 0;

var windowWidth= $(this).innerWidth();
var windowHeight= $(this).innerHeight();
var canvasWidth = $(this).innerWidth()-10;
var canvasHeight = $(this).innerHeight();//-vmin(3.7);

var markerX=400;
var markerX2=400*scaleFactor;
var padding = 25;
var lineWidth = 8;


var colorFur3 = "fur3";
var colorFur2 = "fur2";
var colorScales1 = "scales1";
var colorSand = "sand";

var logoImage = new Image();
var bbImage = new Image();
var bbImageEye1 = new Image();
var bbImageEye2 = new Image();


var crayonPattern;
var clickX = new Array();
var clickY = new Array();
var clickColor = new Array();
var clickTool = new Array();
var clickSize = new Array();
var clickDrag = new Array();

var pixelTexture = {};
for (let i=0; i<canvasWidth; i++){
    pixelTexture[i]={};

}




var paint = false;
var curTex = "null";


var curTool = "haptics";



var drawingAreaX = 10+canvasX;
var drawingAreaY = 10;
var drawingAreaWidth = canvasWidth-10;
var drawingAreaHeight = canvasHeight-20;

var totalLoadResources = 13;
var curLoadResNum = 0;


var fur2 = new Audio('audio/fur2.mp4');
fur2.load();
fur2.loop=true;
var playFur2=0;

var fur3 = new Audio('audio/fur3.mp4');
fur3.load();
fur3.loop=true;
var playFur3=0;

var sand = new Audio('audio/sand.mp4');
sand.load();
sand.loop=true;
var playSand=0;

var scales = new Audio('audio/Velvet lr.mp4');
//var scales = new Audio('audio/fire.mp4');
scales.load();
scales.loop=true;
var playScales=0;

/**
* Calls the redraw function after all neccessary resources are loaded.
*/
function resourceLoaded()
{
//	if(++curLoadResNum >= totalLoadResources){
		redrawInterface(interfaceType);
//	}
}


function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, $(this).innerHeight() || 0);
  return (percent * h) / 100;
}

function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, $(this).innerWidth() || 0);
  return (percent * w) / 100;
}

function vmin(percent) {
  return Math.min(vh(percent), vw(percent));
}

function vmax(percent) {
  return Math.max(vh(percent), vw(percent));
}
 var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
};
/**
* Creates a canvas element, loads images, adds events, and draws the canvas for the first time.
*/
function prepareCanvas()
{

    // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
    canvasDiv = document.getElementById('canvasDiv');

    canvas = document.createElement('canvas');
    canvas.setAttribute('width', windowWidth);
    canvas.setAttribute('height', windowHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);

    if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d"); // Grab the 2d canvas context
    console.log("SCALE="+scaleFactor + "vw/vh=" + vw(100) + "/" + vh(100));
    // Note: The above code is a workaround for IE 8 and lower. Otherwise we could have used:
    //     context = document.getElementById('canvas').getContext("2d");
    
    // Load images
    // -----------
    logoImage.onload = function() { resourceLoaded();    };
    logoImage.src = "images/sense-logo0.png";

    bbImage.onload = function() { resourceLoaded();    };
    bbImage.src = "images/bumblebee-textures.png";
    bbImageEye1.onload = function() { resourceLoaded();    };
    bbImageEye1.src = "images/bb-eye1.png";
    bbImageEye2.onload = function() { resourceLoaded();    };
    bbImageEye2.src = "images/bb-eye2.png";
    
   
    // Add mouse events
    // ----------------
    $('#canvas').on("pointerdown", function(e){
//	openFullscreen();
	// Mouse down location
	var mouseX = Math.round(e.pageX - this.offsetLeft);
	var mouseY = Math.round(e.pageY - this.offsetTop);
//	var mouseX = Math.round(e.originalEvent.touches[0].pageX - this.offsetLeft);
//	var mouseY = Math.round(e.originalEvent.touches[0].pageY - this.offsetTop);
	console.log("Canvas touched");
	if(interfaceType=="canvas"){
	    
	    if(orient=="landscape"){
		//check clicks in toolbar
		
		// Mouse down location
				
		{
		    // Mouse click location on drawing area
		    if(curTool=="haptics"){
			var t="null";
			console.log("canvasX,canvasY="+canvasWidth+", "+canvasHeight);
			console.log("x,y="+mouseX+", "+mouseY);
			if (mouseX>700&&mouseX<870
			    &&mouseY>300 && mouseY<500){
			    t="scales1";
			    
			}
			else if (mouseX>320&&mouseX<432
				 &&mouseY>378 && mouseY<663){
			    t="sand";
			}
			else if (mouseX>145&&mouseX<884
			    &&mouseY>116 && mouseY<520){
			    t=colorFur2;
			}
			console.log("tex="+t+" startaudio");
			closeAudios(t);
			if (t==colorSand){
			    if (playSand == 0) { sand.play(); playSand = 1; };
	    		}
			else if (t==colorScales1){
			    if (playScales == 0) { scales.play(); playScales = 1; };
	    		}
			else if (t==colorFur2){
			    if (playFur2 == 0) { fur2.play(); playFur2 = 1; };
	    		}
			else if (t==colorFur3){
			    if (playFur3 == 0) { fur3.play(); playFur3 = 1; };
	    		}
			
		    }
		}
	    }

	}
    });


	
    $('#canvas').on("pointermove", function(e){
	if(e.buttons>0){
	    var mouseX = Math.round(e.pageX - this.offsetLeft);
	    var mouseY = Math.round(e.pageY - this.offsetTop);
	    //var mouseX = Math.round(e.originalEvent.touches[0].pageX - this.offsetLeft);
	    //var mouseY = Math.round(e.originalEvent.touches[0].pageY - this.offsetTop);
	    if(curTool=="haptics"){
		var t="null";
		if (mouseX>700&&mouseX<870
		    &&mouseY>300 && mouseY<500){
		    t="scales1";
		}
		else if (mouseX>320&&mouseX<432
		    &&mouseY>378 && mouseY<663){
		    t="sand";
		}
		else if (mouseX>145&&mouseX<884
		    &&mouseY>116 && mouseY<520){
		    t="fur2";
		}

		console.log("touchmove=" + t);
		closeAudios(t);

		if (t=="sand"){
		    if (playSand == 0) { sand.play(); playSand = 1; };
		}
		else if (t=="scales1"){
		    if (playScales == 0) { scales.play(); playScales = 1; };
		}
		else if (t=="fur2"){
		    if (playFur2 == 0) { fur2.play(); playFur2 = 1; };
		}
		else if (t=="fur3"){
		    if (playFur3 == 0) { fur3.play(); playFur3 = 1; };
		}
	    }
	
	    else{
		console.log("close audios");
		closeAudios("null");
	    }
	}
    });


    $('#canvas').on("pointerup", function(e){
		paint = false;
		closeAudios("null"); 
    });
    
    $('#canvas').on("pointercancel", function(e){
	closeAudios("null");
	paint = false;
    });
    $('#canvas').on("pointerout", function(e){
	closeAudios("null");
	paint = false;
    });
    $('#canvas').on("pointerleave", function(e){
	closeAudios("null");
	paint = false;
    });

    redrawInterface("canvas");
}


function closeAudios(t)
{

    if (t!="sand"){
	if (playSand == 1) { sand.pause(); playSand = 0; };
    }
    if (t!="scales1"){
	if (playScales == 1) { scales.pause(); playScales = 0; };
    }
    if (t!="fur2"){
	if (playFur2 == 1) { fur2.pause(); playFur2 = 0; };
    }
    if (t!="fur3"){
	if (playFur3 == 1) { fur3.pause(); playFur3 = 0; };
    }
}




/**
* Adds a point to the drawing array.
* @param x
* @param y
* @param dragging
*/



/**
* Clears the canvas.
*/


/**
* Redraws the interface.
*/
function redrawInterface(intType)
{
    interfaceType=intType;
    if(interfaceType=="canvas"){
	canvasDiv.style.visibility = 'visible';
    }


    console.log("redrawing interface: inttype=" + interfaceType +" curtool="+curTool) ;	

    

    var locX;
    var locY;
    if(interfaceType=="canvas"){

	var yUnit=toolHeight/10;
	//draw toolbar
	
	
	//end toolbar
	context.strokeStyle = '#70ba5d';
	context.lineWidth   = 10;
	context.fillStyle = "#fff";
	//draw canvas
	context.fillRect(canvasX+5,5, canvasWidth, canvasHeight-10);
	console.log("h="+canvasHeight+" w="+canvasWidth);
	context.drawImage(bbImage, 10, -20, canvasWidth-10,canvasHeight-20);

	context.strokeRect(canvasX+5,5, canvasWidth, canvasHeight-10);

	context.fillRect(10,10, 200,200);
	context.drawImage(logoImage, 10, 10, 200,200);

	context.drawImage(bbImageEye1, 400, 550, 300,200);
	context.drawImage(bbImageEye2, 700, 550, 300,200);
	
	console.log("draw logo: h="+canvasHeight+" w="+canvasWidth);
	
    }
    

//	redrawCanvas();
}

/**
* Redraws the canvas.
*/
function redrawCanvas()
{
//if(curLoadResNum < totalLoadResources){ return; }
//    context.beginPath();
//    context.rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
//    context.closePath();
//    context.clip();
    
}


/**/


/**
* Redraws the recent changes to canvas.
*/



