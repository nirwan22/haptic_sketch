var canvas;
var canvasTools;
var canvasColors;

var canvasDiv;
var canvasToolsDiv;
var canvasColorsDiv;


var interfaceType="canvas";
var context;
var contextOld;
var contextTools;
var contextColors;

var scaleFactor =vmax(100)/1900;
var scaleFactorM =vmax(100)/1900;
var scaleFactorH =vh(100)/1200;
if (scaleFactorM*700>vh(100)){scaleFactorM=vh(100)/900;}
//if (scaleFactorM>1.3){scaleFactorM=1;}

var myScreenOrientation = window.screen.orientation;


var orient="landscape";
if(window.innerHeight > window.innerWidth){
    orient="portrait";
    myScreenOrientation.lock("portrait");

}
else{
    myScreenOrientation.lock("landscape");

}
console.log("orient="+orient);


var toolWidth = 400*scaleFactorM;
var toolHeight = 800*scaleFactorM;
var canvasX = toolWidth+0;
var canvasY= 0;

var windowWidth= $(this).innerWidth();
var windowHeight= $(this).innerHeight();
var canvasWidth = window.innerWidth-toolWidth;
var canvasHeight = $(this).innerHeight()-10;//-vmin(3.7);



var markerX=400;
var markerX2=400*scaleFactor;
var padding = 25;
var lineWidth = 8;
var colorPurple = "#333333";
var colorGreen = "#659b41";
var colorYellow = "#aa6644";
var colorBrown = "#e9bf9a";
var colorTree1 = "tree1";
var colorTree2 = "tree2";
var colorTree3 = "tree3";
var colorTree4 = "tree4";
var colorFur1 = "fur1";
var colorFur2 = "fur2";
var colorFur3 = "fur3";
var colorFur4 = "fur4";
var colorLeaves1 = "leaves1";
var colorLeaves2 = "leaves2";
var colorLeaves3 = "leaves3";
var colorLeaves4 = "leaves4";
var colorScales1 = "scales1";
var colorScales2 = "scales2";
var colorScales3 = "scales3";
var colorScales4 = "scales4";
var colorBee = "bee";
var colorStones3 = "stones3";
var colorStones4 = "stones4";
var colorSand = "sand";
var colorLava = "lava";
var colorWater = "water";

var color1 = "Black";
var color2 = "DimGray";
var color3 = "DarkGray";
var color4 = "LightGray";
var color5 = "SeaShell";
var color6 = "White";
var color7 = "Aqua";
var color8 = "AquaMArine";
var color9 = "Turquoise";
var color10 = "SeaGreen";
var color11 = "YellowGreen";
var color12 = "Yellow";
var color13 = "Tomato";
var color14 = "FireBrick";
var color15 = "Maroon";
var color16 = "Pink";
var color17 = "Chocolate";
var color18 = "Sienna";
var color19 = "SkyBlue";
var color20 = "SteelBlue";
var color21 = "DarkSlateGray";

var logoImage = new Image();
var colorPickerImage = new Image();
var crayonImage = new Image();
var eraserImage = new Image();
var hapticsImage = new Image();
var hapticCrayonImage = new Image();
var colourPickerImage = new Image();

var crayonOnImage = new Image();
var eraserOnImage = new Image();
var hapticsOnImage = new Image();
var hapticCrayonOnImage = new Image();

var crayonTextureImagePink = new Image();
var crayonTextureImageGreen = new Image();
var crayonTextureImageYellow = new Image();
var crayonTextureImageTree1 = new Image();
var crayonTextureImageTree2 = new Image();
var crayonTextureImageTree3 = new Image();
var crayonTextureImageTree4 = new Image();

var crayonTextureImageScales1 = new Image();
var crayonTextureImageScales2 = new Image();
var crayonTextureImageScales3 = new Image();
var crayonTextureImageScales4 = new Image();

var crayonTextureImageFur1 = new Image();
var crayonTextureImageFur2 = new Image();
var crayonTextureImageFur3 = new Image();
var crayonTextureImageFur4 = new Image();

var crayonTextureImageBee = new Image();
var crayonTextureImageWater = new Image();
var crayonTextureImageStones3 = new Image();
var crayonTextureImageStones4 = new Image();
var crayonTextureImageSand = new Image();

var crayonTextureImageLeaves1 = new Image();
var crayonTextureImageLeaves2 = new Image();
var crayonTextureImageLeaves3 = new Image();
var crayonTextureImageLeaves4 = new Image();
var crayonTextureImageLava = new Image();

var backgroundImage= new Image();

var crayonPattern;
var clickX = new Array();
var clickY = new Array();
var clickColor = new Array();
var clickTool = new Array();
var clickSize = new Array();
var clickDrag = new Array();

var pixelTexture = {};
for (let i=0; i<windowWidth+200; i++){
	pixelTexture[i]={};
}

var paint = false;
var curTex = colorStones3;
var curColor = color1;

var curTool = "haptic-crayon";
var curSize = "normal";
var col1X = 0;
var col2X = 140;
var col3X = 230;
var col4X = 320;
var col6X = 360;
var row1Y = 500;
var row2Y = 640;
var row3Y = 780;
var row4Y = 920;
var row5Y = 660;



var mediumImageWidth = 140;
var mediumImageHeight = 140;
var drawingAreaX = 10;
var drawingAreaY = 10;
var drawingAreaWidth = canvasWidth-20;
var drawingAreaHeight = canvasHeight-20;


var toolHotspotStartY = 330*scaleFactorM;
var toolHotspotHeight = 60*scaleFactorM;
var sizeHotspotStartX = 10*scaleFactorM;
var sizeHotspotStartY = 100*scaleFactorM;
var sizeHotspotHeight = 156*scaleFactorM;
var sizeHotspotWidthObject = new Object();

sizeHotspotWidthObject.huge = 56*scaleFactorM;
sizeHotspotWidthObject.large = 40*scaleFactorM;
sizeHotspotWidthObject.normal = 30*scaleFactorM;
sizeHotspotWidthObject.small = 30*scaleFactorM;
var totalLoadResources = 13;
var curLoadResNum = 0;


var treeBark1 = new Audio('audio/Tree bark 2 lr.mp4');
treeBark1.load();
treeBark1.loop=true;
var playTreeBark1=0;

var treeBark2 = new Audio('audio/Tree bark 10 lr.mp4');
treeBark2.load();
treeBark2.loop=true;
var playTreeBark2=0;

var treeBark3 = new Audio('audio/Tree bark 1 lr.mp4');
treeBark3.load();
treeBark3.loop=true;
var playTreeBark3=0;

var treeBark4 = new Audio('audio/Tree bark 4 lr.mp4');
treeBark4.load();
treeBark4.loop=true;
var playTreeBark4=0;

var lava = new Audio('audio/fire.mp4');
lava.load();
lava.loop=true;
var playLava=0;

var fur1 = new Audio('audio/fur1.mp4');
fur1.load();
fur1.loop=true;
var playFur1=0;
var fur2 = new Audio('audio/fur2.mp4');
fur2.load();
fur2.loop=true;
var playFur2=0;
var fur3 = new Audio('audio/fur3.mp4');
fur3.load();
fur3.loop=true;
var playFur3=0;
var fur4 = new Audio('audio/fur4.mp4');
fur4.load();
fur4.loop=true;
var playFur4=0;
var leaves = new Audio('audio/leaves1.mp4');
leaves.load();
leaves.loop=true;
var playLeaves=0;
var sand = new Audio('audio/sand.mp4');
sand.load();
sand.loop=true;
var playSand=0;
var water1 = new Audio('audio/water1.mp4');
water1.load();
water1.loop=true;
var playWater1=0;
var bee = new Audio('audio/bumblebee.mp4');
bee.load();
bee.loop=true;
var playBee=0;
var stones1 = new Audio('audio/gravel1.mp4');
stones1.load();
stones1.loop=true;
var playStones1=0;
var stones2 = new Audio('audio/stones1.mp4');
stones2.load();
stones2.loop=true;
var playStones2=0;
var crocScales = new Audio('audio/croc-scales.mp4');
crocScales.load();
crocScales.loop=true;
var playCrocScales=0;
var scales = new Audio('audio/Velvet lr.mp4');
scales.load();
scales.loop=true;
var playScales=0;

/**
* Calls the redraw function after all neccessary resources are loaded.
*/
function resourceLoaded()
{
	if(++curLoadResNum >= totalLoadResources){
		redrawInterface(interfaceType);
	}
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
    scaleFactor =vmax(100)/1200;
//        scaleFactor =1;
    scaleFactorM =vmax(100)/1200;
    scaleFactorH =vh(100)/1000;
    if (scaleFactorM*700>vh(100)){scaleFactorM=vh(100)/900;}
    //if (scaleFactorM>1.3){scaleFactorM=1;}
    toolWidth = 340*scaleFactor;
    if (toolWidth < 450) {toolWidth=450};
    toolHeight = 800*scaleFactorM;    
canvasX = toolWidth+0;
    windowWidth= $(this).innerWidth()-10;
    windowHeight= $(this).innerHeight()-10;
    canvasWidth = window.innerWidth-toolWidth;
    canvasHeight = $(this).innerHeight()-10;//-vmin(3.7);

    markerX2=400*scaleFactor;
    col1X = 0;
    col2X = 100;
    col3X = 200;
    col4X = 300;
    col5X = 400;
    col6X = 500;

    yUnit=toolHeight/10;
    row1Y = 100+yUnit*2;
    row2Y = 200+yUnit*2;
    row3Y = 300+yUnit*2;
    row4Y = 400+yUnit*2;
    row5Y = 500+yUnit*2;
    row6Y = 600+yUnit*2;
    row7Y = 700+yUnit*2;
 
    mediumImageWidth = 100*scaleFactorM;
    mediumImageHeight = 100*scaleFactorM;
    drawingAreaX = 10;
    drawingAreaY = 10;
    drawingAreaWidth = canvasWidth-20;
    drawingAreaHeight = canvasHeight-20;

 

    
    toolHotspotStartY = 330*scaleFactorM;
    toolHotspotHeight = 60*scaleFactorM;
    sizeHotspotStartX = 10*scaleFactorM;
    sizeHotspotStartY = 700*scaleFactorM;
    sizeHotspotHeight = 156*scaleFactorM;
    sizeHotspotWidthObject = new Object();

    sizeHotspotWidthObject.huge = 56*scaleFactorM;
    sizeHotspotWidthObject.large = 40*scaleFactorM;
    sizeHotspotWidthObject.normal = 30*scaleFactorM;
    sizeHotspotWidthObject.small = 30*scaleFactorM;
    // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
    canvasDiv = document.getElementById('canvasDiv');
    canvasToolsDiv = document.getElementById('toolsDiv');
    canvasColorsDiv = document.getElementById('colorMenuDiv');
    canvasColorsDiv.style.width = '100%';
    canvasToolsDiv.style.width = toolWidth+'px';

    canvasDiv.style.width = canvasWidth +'px';
    canvasDiv.style.height = '100%';


    canvasTools = document.createElement('canvas');
    canvasTools.setAttribute('width', toolWidth);
    canvasTools.setAttribute('height', windowHeight);
    canvasTools.setAttribute('id', 'canvasTools');
    canvasToolsDiv.appendChild(canvasTools);

    canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', windowHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);


    canvasColors = document.createElement('canvas');
    canvasColors.setAttribute('width', 1200*scaleFactor);
    canvasColors.setAttribute('height', scaleFactor*800);
    canvasColors.setAttribute('id', 'canvasColors');
    canvasColorsDiv.appendChild(canvasColors);

    console.log("toolwidth="+toolWidth + "; canvaswidth="+canvasWidth);
    console.log("toolheight="+toolHeight + "; canvasheight="+canvasHeight);
console.log(window.innerWidth);

// This will log the width of the frame viewport within a frameset
console.log(self.innerWidth);

// This will log the width of the viewport of the closest frameset
console.log(parent.innerWidth);

// This will log the width of the viewport of the outermost frameset
console.log(top.innerWidth);
    
    if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
	canvasColors = G_vmlCanvasManager.initElement(canvasColors);
	canvasTools = G_vmlCanvasManager.initElement(canvasTools);
    }
    context = canvas.getContext("2d"); // Grab the 2d canvas context
//    contextOld=context;
    context.globalAlpha = 1; // No IE support
    contextColors = canvasColors.getContext("2d"); // Grab the 2d canvas context
    contextTools = canvasTools.getContext("2d"); // Grab the 2d canvas context



    contextColors.scale(scaleFactor,scaleFactor);
    console.log("SCALE="+scaleFactor + "vw/vh=" + vw(100) + "/" + vh(100));
    // Note: The above code is a workaround for IE 8 and lower. Otherwise we could have used:
    //     context = document.getElementById('canvas').getContext("2d");
    
    // Load images
    // -----------
    backgroundImage.onload = function() { resourceLoaded();    };
    backgroundImage.src = "images/seaside.png";


    
    logoImage.onload = function() { resourceLoaded();    };
    logoImage.src = "images/sense-logo3.png";

    colorPickerImage.onload = function() { resourceLoaded();    };
    colorPickerImage.src = "images/color-picker.png";
    
    eraserImage.onload = function() { resourceLoaded();    };
    eraserImage.src = "images/undo-off.png";
    eraserOnImage.onload = function() { resourceLoaded();  };
    eraserOnImage.src = "images/undo-on.png";

    hapticsImage.onload = function() { resourceLoaded();   };
    hapticsImage.src = "images/haptics-off.png";
    hapticsOnImage.onload = function() { resourceLoaded();   };
    hapticsOnImage.src = "images/haptics-on.png";	
    
    crayonImage.onload = function() { resourceLoaded();     };
    crayonImage.src = "images/crayon-off.png";
    crayonOnImage.onload = function() { resourceLoaded();     };
    crayonOnImage.src = "images/crayon-on.png";
    
    hapticCrayonImage.onload = function() { resourceLoaded(); };
    hapticCrayonImage.src = "images/haptic-crayon-off.png";

    hapticCrayonOnImage.onload = function() { resourceLoaded(); };
    hapticCrayonOnImage.src = "images/haptic-crayon-on.png";

    crayonTextureImageTree1.onload = function() { resourceLoaded(); 
						};
    crayonTextureImageTree1.src = "images/crayon-tree-bark1.png";
    
    crayonTextureImageTree2.onload = function() { resourceLoaded(); 
						};
    crayonTextureImageTree2.src = "images/crayon-tree-bark2.jpg";
    
    crayonTextureImageTree3.onload = function() { resourceLoaded(); 
						};
    crayonTextureImageTree3.src = "images/crayon-tree-bark3.jpg";
    
    crayonTextureImageTree4.onload = function() { resourceLoaded(); 
						};
    crayonTextureImageTree4.src = "images/crayon-tree-bark4.jpg";

    crayonTextureImageFur1.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur1.src = "images/fur1.jpg";
    
    crayonTextureImageFur2.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur2.src = "images/fur2.jpg";
    
    crayonTextureImageFur3.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur3.src = "images/crayon-fur3.jpg";
    
    crayonTextureImageFur4.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur4.src = "images/crayon-fur4.jpg";
    
    crayonTextureImageFur1.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur1.src = "images/fur1.jpg";
    
    crayonTextureImageFur2.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur2.src = "images/fur2.jpg";
    
    crayonTextureImageFur3.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur3.src = "images/crayon-fur3.jpg";
    
    crayonTextureImageFur4.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageFur4.src = "images/crayon-fur4.jpg";
    
    crayonTextureImageScales1.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageScales1.src = "images/crayon-scales0.jpg";
    
    crayonTextureImageScales2.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageScales2.src = "images/crayon-scales2.jpg";
    
    crayonTextureImageScales3.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageScales3.src = "images/crayon-scales3.jpg";
    
    crayonTextureImageScales4.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageScales4.src = "images/crayon-scales4.jpg";
    
    crayonTextureImageLeaves1.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageLeaves1.src = "images/crayon-leaves1.png";
    
    crayonTextureImageLeaves2.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageLeaves2.src = "images/crayon-leaves4.jpg";
    
    crayonTextureImageLeaves3.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageLeaves3.src = "images/crayon-leaves3.jpg";
    
    crayonTextureImageLeaves4.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageLeaves4.src = "images/lava.png";
    crayonTextureImageLava.onload = function() { resourceLoaded(); 
						   };
    crayonTextureImageLava.src = "images/lava.png";
    
    crayonTextureImageBee.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageBee.src = "images/crayon-bumble.jpg";
    
    crayonTextureImageWater.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageWater.src = "images/water2.jpg";

    crayonTextureImageStones3.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageStones3.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageStones3.src = "images/crayon-stones3.jpg";
    
    crayonTextureImageStones4.onload = function() { resourceLoaded(); 
						  };
    crayonTextureImageStones4.src = "images/crayon-stones4.jpg";
    crayonTextureImageSand.onload = function() { resourceLoaded(); 
					       };
    crayonTextureImageSand.src = "images/crayon-sand.jpg";

    var erase=0;
   
    // Add mouse events
    // ----------------
    $('#canvas').on("pointerdown", function(e){
	// Mouse down location
	var  rect = e.target.getBoundingClientRect();
	var mouseX = Math.round(e.pageX - rect.left + document.documentElement.scrollLeft);
	var mouseY = Math.round(e.pageY - rect.top + document.documentElement.scrollTop);
	console.log("Canvas touched="+mouseX+"; "+mouseY+"; orientation="+orient);
	if(interfaceType=="canvas"){
	    
	    if(orient=="landscape"){
		//check clicks in toolbar
		
		// Mouse down location
		
		
		{
		    // Mouse click location on drawing area
		    if((curTool=="haptics" && mouseX in pixelTexture && mouseY in pixelTexture[mouseX])|| curTool=="haptic-crayon"){
			var t=curTex;
			if(curTool=="haptics") {t=pixelTexture[mouseX][mouseY];}
			console.log("tex="+t+" startaudio");
			closeAudios(t);
	  		if (t==colorTree1){
			    if (playTreeBark1 == 0) { treeBark1.play(); playTreeBark1 = 1; };
	    		}
			else if (t==colorTree2){
			    if (playTreeBark2 == 0) { treeBark2.play(); playTreeBark2 = 1; };
	    		}
			else if (t==colorTree3){
			    if (playTreeBark3 == 0) { treeBark3.play(); playTreeBark3 = 1; };
	    		}
			else if (t==colorTree4){
			    if (playTreeBark4 == 0) { treeBark4.play(); playTreeBark4 = 1; };
	    		}
			else if (t==colorLeaves2||t==colorLeaves3||t==colorLeaves4){
			    if (playLeaves == 0) { leaves.play(); playLeaves = 1; };
	    		}
			else if (t==colorLeaves1){
			    if (playFur4 == 0) { fur4.play(); playFur4 = 1; };
	    		}
			else if (t==colorLava){
			    if (playLava == 0) { lava.play(); playLava = 1; };
	    		}
			else if (t==colorSand){
			    if (playSand == 0) { sand.play(); playSand = 1; };
	    		}
			else if (t==colorStones4){
			    if (playStones2 == 0) { stones2.play(); playStones2 = 1; };
	    		}
			else if (t==colorBee){
			    if (playBee == 0) { bee.play(); playBee = 1; };
	    		}
			else if (t==colorWater){
			    if (playWater1 == 0) { water1.play(); playWater1 = 1; };
	    		}
			else if (t==colorStones3){
			    if (playStones2 == 0) { stones2.play(); playStones2 = 1; };
	    		}
			else if (t==colorScales1){
			    if (playScales == 0) { scales.play(); playScales = 1; };
	    		}
			else if (t==colorScales2){
			    if (playScales == 0) { scales.play(); playScales = 1; };
	    		}
			else if (t==colorScales3){
			    if (playScales == 0) { scales.play(); playScales = 1; };
	    		}
			else if (t==colorScales4){
			    if (playCrocScales == 0) { crocScales.play(); playCrocScales = 1; };
	    		}
			else if (t==colorFur1){
			    if (playFur1 == 0) { fur1.play(); playFur1 = 1; };
	    		}
			else if (t==colorFur2){
			    if (playFur2 == 0) { fur2.play(); playFur2 = 1; };
	    		}
			else if (t==colorFur3){
			    if (playFur3 == 0) { fur3.play(); playFur3 = 1; };
	    		}
			else if (t==colorFur4){
			    if (playFur4 == 0) { fur4.play(); playFur4 = 1; };
	    		}
		    }
		}
	    }
	
	    if (curTool!="haptics"){
		paint = true;
		addClick(mouseX, mouseY, false);
		updateCanvas();
	    }
	}

			
    });

    $('#canvasTools').on("pointerdown", function(e){

	// Mouse down location
	var mouseX = Math.round(e.pageX - this.offsetLeft);
	var mouseY = Math.round(e.pageY - this.offsetTop);
	var yUnit=toolHeight/10;

	console.log("CanvasTools touched");
	if(interfaceType=="canvas"||interfaceType=="toolpicker"){
	    
	    if(orient=="landscape"){
		//check clicks in toolbar
		
		// Mouse down location
		if(mouseX<canvasX) // Left of the drawing area
		    console.log("X,Y="+mouseX+", "+mouseY);
		{
		    var sel="";
		    
		    if(mouseY>yUnit*3.5){//texture picker
			if(mouseX < col1X+mediumImageWidth)
			{//column 1
			    if(mouseY > row1Y && mouseY < row1Y + mediumImageHeight){
				if(sel!=colorStones3){
				    pauseAll();
				    stones2.play();
				}
				curTex = colorStones3;
			    }
  			    else if(mouseY > row2Y && mouseY < row2Y + mediumImageHeight){
				if(sel!=colorLeaves1){
				    pauseAll();
				    fur1.play();
				}
				curTex = colorLeaves1;
			    }
			    else if(mouseY > row3Y && mouseY < row3Y + mediumImageHeight){
				if(sel!=colorScales3){
				    pauseAll();
				    scales.play();
				}
				curTex = colorScales3;
			    }
			    else if(mouseY > row4Y && mouseY < row4Y + mediumImageHeight){
				if(sel!=colorTree4){
				    pauseAll();
				    treeBark4.play();
				}
				curTex = colorTree4;
			    }
			}
			else if(mouseX < col2X+mediumImageWidth)
			{//column 2
			    if(mouseY > row1Y && mouseY < row1Y + mediumImageHeight){
				if(sel!=colorSand){
				    pauseAll();
				    sand.play();
				}
				curTex = colorSand;
			    }
  			    else if(mouseY > row2Y && mouseY < row2Y + mediumImageHeight){
				if(sel!=colorLeaves3){
				    pauseAll();
				    leaves.play();
				}
				curTex = colorLeaves3;
			    }
			    else if(mouseY > row3Y && mouseY < row3Y + mediumImageHeight){
				if(sel!=colorScales4){
				    pauseAll();
				    crocScales.play();
				}
				curTex = colorScales4;
			    }
			    else if(mouseY > row4Y && mouseY < row4Y + mediumImageHeight){
				if(sel!=colorFur1){
				    pauseAll();
				    fur1.play();
				}
				curTex = colorFur1;
			    }
			    
			}
			else if(mouseX < col3X+mediumImageWidth)
			{//column 3
			    if(mouseY > row1Y && mouseY < row1Y + mediumImageHeight){
				if(sel!=colorLava){
				    pauseAll();
				    lava.play();
				}
				curTex = colorLava;
			    }
  			    else if(mouseY > row2Y && mouseY < row2Y + mediumImageHeight){
				if(sel!=colorScales1){
				    pauseAll();
				    scales.play();
								}
				curTex = colorScales1;
			    }
			    else if(mouseY > row3Y && mouseY < row3Y + mediumImageHeight){
				if(sel!=colorTree2){
				    pauseAll();
				    treeBark2.play();
				}
				curTex = colorTree2;
			    }
			    else if(mouseY > row4Y && mouseY < row4Y + mediumImageHeight){
				if(sel!=colorFur2){
				    pauseAll();
				    fur2.play();
				}
				curTex = colorFur2;
			    }

			}
			else if(mouseX < col4X+mediumImageWidth)
			{//column4
			    if(mouseY > row1Y && mouseY < row1Y + mediumImageHeight){
				if(sel!=colorWater){
				    pauseAll();
				    water1.play();
				}
				curTex = colorWater;
			    }
  			    else if(mouseY > row2Y && mouseY < row2Y + mediumImageHeight){
				if(sel!=colorBee){
				    pauseAll();
				    bee.play();
				}
				curTex = colorBee;
			    }
			    else if(mouseY > row3Y && mouseY < row3Y + mediumImageHeight){

				if(sel!=colorTree3){
				    pauseAll();
				    treeBark3.play();
				}
				curTex = colorTree3;
			    }
			    else if(mouseY > row4Y && mouseY < row4Y + mediumImageHeight){
				if(sel!=colorFur4){
				    pauseAll();
				    fur4.play();
				}
				curTex = colorFur4;
			    }

			}
			else if(mouseX < col5X+mediumImageWidth)
			{//column 5
			    console.log("col1x="+col1X+" mhI="+mediumImageHeight + " mX=" +markerX);
			    console.log(col1X+mediumImageHeight +markerX);
			    if(mouseY > row1Y && mouseY < row1Y + mediumImageHeight){
				if(sel!=colorWater){
				    pauseAll();
				    water1.play();
				}
				curTex = colorWater;
			    }
  			    else if(mouseY > row2Y && mouseY < row2Y + mediumImageHeight){
				if(sel!=colorBee){
				    pauseAll();
				    bee.play();
				}
				curTex = colorBee;
			    }
			    else if(mouseY > row3Y && mouseY < row3Y + mediumImageHeight){
				if(sel!=colorTree3){
				    pauseAll();
				    treeBark3.play();
				}
				curTex = colorTree3;
			    }
			    else if(mouseY > row4Y && mouseY < row4Y + mediumImageHeight){
				if(sel!=colorFur4){
				    pauseAll();
				    fur4.play();
								}
				curTex = colorFur4;
			    }
			    else if(mouseY > row5Y && mouseY < row5Y + mediumImageHeight){
				curTex = color5;
			    }
			    else if(mouseY > row6Y && mouseY < row6Y + mediumImageHeight){
				curTex = color17;
			    }
			}
			
		    }
		    

		    else if(mouseY > yUnit*2.6 && mouseY < yUnit*3.4){
			pauseAll();
			
			if(mouseX < sizeHotspotStartX + sizeHotspotWidthObject.huge){
			    curSize = "huge";
			}else if(mouseX < sizeHotspotStartX + sizeHotspotWidthObject.large + sizeHotspotWidthObject.huge){
			    curSize = "large";
			}else if(mouseX < sizeHotspotStartX + sizeHotspotWidthObject.normal + sizeHotspotWidthObject.large + sizeHotspotWidthObject.huge){
			    curSize = "normal";
			}else if(mouseX < sizeHotspotStartX + sizeHotspotWidthObject.small + sizeHotspotWidthObject.normal + sizeHotspotWidthObject.large + sizeHotspotWidthObject.huge){
			    curSize = "small";						
			}
		    }
		    else
		    {
			pauseAll();
			if(mouseY > yUnit*1.6 && mouseY < yUnit*2.4){
			    if (mouseX <120*scaleFactorM){
				curTool = "haptic-crayon";
			    }
			    else if(mouseX < 255*scaleFactorM){
				curTool = "crayon";
				
			    }else if(mouseX <330*scaleFactorM){
				curTool = "haptics";
				console.log("Haptics " + mouseX)
				console.log("SFM= " + 350*scaleFactorM)
			    }
			    else if(mouseX <433*scaleFactorM){
				contextTools.drawImage(eraserOnImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);
			    console.log("Undo")
				undo();
				erase=1;
			    }
			}
			
		    }
		    
		    if(erase<1){ 	    redrawTools();}
//		    redrawInterface("canvas");
		}
		
	    }
	}
	
    });

    
	
    $('#canvas').on("pointermove", function(e){

	if(e.buttons>0){
	    var  rect = e.target.getBoundingClientRect();
	    var mouseX = Math.round(e.pageX - rect.left + document.documentElement.scrollLeft);
	    var mouseY = Math.round(e.pageY - rect.top + document.documentElement.scrollTop);
	    if((curTool=="haptics" && mouseX in pixelTexture && mouseY in pixelTexture[mouseX])|| curTool=="haptic-crayon"){
	    var t=curTex;
		if(curTool=="haptics") {t=pixelTexture[mouseX][mouseY];}
		console.log("touchmove=" + t);
		closeAudios(t);
		if (t=="tree1"){
		    if (playTreeBark1 == 0) { treeBark1.play(); playTreeBark1 = 1; };
		}
		else if (t=="tree2"){
		    if (playTreeBark2 == 0) { treeBark2.play(); playTreeBark2 = 1; };
		}
		else if (t=="tree3"){
		    if (playTreeBark3 == 0) { treeBark3.play(); playTreeBark3 = 1; };
		}
		else if (t=="tree4"){
		    if (playTreeBark4 == 0) { treeBark4.play(); playTreeBark4 = 1; };
		}
		else if (t=="leaves2"||t=="leaves3"||t=="leaves4"){
		    if (playLeaves == 0) { leaves.play(); playLeaves = 1; };
		}
		else if (t=="leaves1"){
		    if (playFur4 == 0) { fur4.play(); playFur4 = 1; };
		}
		else if (t=="lava"){
		    if (playLava == 0) { lava.play(); playLava = 1; };
		}
		else if (t=="sand"){
		if (playSand == 0) { sand.play(); playSand = 1; };
		}
		else if (t=="bee"){
		    if (playBee == 0) { bee.play(); playBee = 1; };
		}
		else if (t=="water"){
		    if (playWater1 == 0) { water1.play(); playWater1 = 1; };
		}
		else if (t=="stones3"){
		    if (playStones2 == 0) { stones2.play(); playStones2 = 1; };
		}
		else if (t=="stones4"){
		    if (playSand == 0) { sand.play(); playSand = 1; };
		}
		else if (t=="scales1"){
		    if (playScales == 0) { scales.play(); playScales = 1; };
		}
		else if (t=="scales2"){
		    if (playScales == 0) { scales.play(); playScales = 1; };
		}
		else if (t=="scales3"){
		    if (playScales == 0) { scales.play(); playScales = 1; };
		}
		else if (t=="scales4"){
		    if (playCrocScales == 0) { crocScales.play(); playCrocScales = 1; };
		}
		else if (t=="fur1"){
		    if (playFur1 == 0) { fur1.play(); playFur1 = 1; };
		}
		else if (t=="fur2"){
		    if (playFur2 == 0) { fur2.play(); playFur2 = 1; };
		}
		else if (t=="fur3"){
		    if (playFur3 == 0) { fur3.play(); playFur3 = 1; };
		}
		else if (t=="fur4"){
		    if (playFur4 == 0) { fur4.play(); playFur4 = 1; };
		}
	    }
	
	    else{
		console.log("close audios2");
		closeAudios("null");
	    }
	}
	    
	if(paint==true){

	    addClick(mouseX,mouseY, true);
	    updateCanvas();
	}
    });


    $('#canvasTools').on("pointerup", function(e){
	paint = false;
	context.globalAlpha=1;
	console.log("pauseAll on pointerup");
	pauseAll();
	if(erase==1){
	    contextTools.drawImage(eraserImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);
	    erase=0;}

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

}


function closeAudios(t)
{

    if (t!="tree1"){
	if (playTreeBark1 == 1) { treeBark1.pause(); playTreeBark1 = 0; };
    }
    if (t!="tree2"){
	if (playTreeBark2 == 1) { treeBark2.pause(); playTreeBark2 = 0; };
    }
    if (t!="tree3"){
	if (playTreeBark3 == 1) { treeBark3.pause(); playTreeBark3 = 0; };
    }
    if (t!="tree4"){
	if (playTreeBark4 == 1) { treeBark4.pause(); playTreeBark4 = 0; };
    }
    if (t!="leaves1"){
	if (playFur4 == 1) { fur4.pause(); playFur4 = 0; };
    }
    if (t!="leaves2"&&t!="leaves3"&&t!="leaves4"){
	if (playLeaves == 1) { leaves.pause(); playLeaves = 0; };
    }
    if (t!="lava"){
	if (playLava == 1) { lava.pause(); playLava = 0; };
    }
    if (t!="sand"){
	if (playSand == 1) { sand.pause(); playSand = 0; };
    }
    if (t!="bee"){
	if (playBee == 1) { bee.pause(); playBee = 0; };
    }
    if (t!="water"){
	if (playWater1 == 1) { water1.pause(); playWater1 = 0; };
    }
    if (t!="stones3"){
	if (playStones2 == 1) { stones2.pause(); playStones2 = 0; };
    }
    if (t!="stones4"){
	if (playSand == 1) { sand.pause(); playSand = 0; };
    }
    if (t!="scales1"){
	if (playScales == 1) { scales.pause(); playScales = 0; };
    }
    if (t!="scales2"){
	if (playScales == 1) { scales.pause(); playScales = 0; };
    }
    if (t!="scales3"){
	if (playScales == 1) { scales.pause(); playScales = 0; };
    }
    if (t!="scales4"){
	if (playCrocScales == 1) { crocScales.pause(); playCrocScales = 0; };
    }
    if (t!="bee"){
	if (playBee == 1) { bee.pause(); playBee = 0; };
    }
    if (t!="fur1"){
	if (playFur1 == 1) { fur1.pause(); playFur1 = 0; };
    }
    if (t!="fur2"){
	if (playFur2 == 1) { fur2.pause(); playFur2 = 0; };
    }
    if (t!="fur3"){
	if (playFur3 == 1) { fur3.pause(); playFur3 = 0; };
    }
    if (t!="fur4"){
	if (playFur4 == 1) { fur4.pause(); playFur4 = 0; };
	    	           }
}

function pauseAll(){

treeBark1.pause();
treeBark2.pause();
treeBark3.pause();
treeBark4.pause();
fur4.pause(); 
leaves.pause(); 
lava.pause(); 
sand.pause(); 
bee.pause(); 
water1.pause(); 
stones2.pause();
sand.pause(); 
scales.pause(); 
crocScales.pause();
fur1.pause(); 
fur2.pause(); 
fur3.pause(); 
}

/**
* Adds a point to the drawing array.
* @param x
* @param y
* @param dragging
*/
function addClick(x, y, dragging)
{
    clickX.push(x);
    clickY.push(y);
    clickTool.push(curTool);
    if(curTool=="crayon"||curTool=="haptic-crayon"){
	clickColor.push(curTex);
    }	
    else {
	clickColor.push(curColor);
    }
    clickSize.push(curSize);
    clickDrag.push(dragging);
    
    var size=5;
    if(curSize=="small"){
	size=Math.round(sizeHotspotWidthObject.small/3);
    }
    else if(curSize=="medium"){
	size=Math.round(sizeHotspotWidthObject.normal/1.5);
    }
    else if(curSize=="large"){
	size=Math.round(sizeHotspotWidthObject.large);
    }
    else if(curSize=="huge"){
	size=Math.round(sizeHotspotWidthObject.huge);
    }
    if (curTool=="marker"){
	size2 = Math.round(size/2);
	for (let i=x-size2; i<=x+size2;i++){
	    
   	    for (let j=y-size2; j<=y+size2;j++){
		if(i>drawingAreaX && j>drawingAreaY &&pixelTexture[i]){
		    pixelTexture[i][j] = "treeBark1";
		}
		else{
		    pixelTexture[i]={};
		    pixelTexture[i][j] = "treeBark1";
		}

	    }
	}	
    }
    else if (curTool=="crayon"||curTool == "haptic-crayon"){
	var tex="treeBark1";
	if(curTex==colorTree1){tex="tree1";}
	else if(curTex==colorTree2){tex="tree2";}
	else if(curTex==colorTree3){tex="tree3";}
	else if(curTex==colorTree4){tex="tree4";}
	
	else if(curTex==colorLeaves1){tex="leaves1";}
	else if(curTex==colorLeaves2){tex="leaves2";}
	else if(curTex==colorLeaves3){tex="leaves3";}
	else if(curTex==colorLeaves4){tex="leaves4";}
	else if(curTex==colorLava){tex="lava";}
	
	else if(curTex==colorFur1){tex="fur1";}	
	else if(curTex==colorFur2){tex="fur2";}	
	else if(curTex==colorFur3){tex="fur3";}	
	else if(curTex==colorFur4){tex="fur4";}	
	
	else if(curTex==colorBee){tex="bee";}
	else if(curTex==colorWater){tex="water";}
	else if(curTex==colorStones3){tex="stones3";}
	else if(curTex==colorStones4){tex="stones4";}
	else if(curTex==colorSand){tex="sand";}

	else if(curTex==colorScales1){tex="scales1";}
	else if(curTex==colorScales2){tex="scales2";}
	else if(curTex==colorScales3){tex="scales3";}
	else if(curTex==colorScales4){tex="scales4";}

	for (let i=x-size; i<=x+size;i++){
   	    for (let j=y-size; j<=y+size;j++){
		if(i>drawingAreaX && j>drawingAreaY &&pixelTexture[i]){
		    pixelTexture[i][j] = tex;

		}
		else{
		    pixelTexture[i]={};
		    pixelTexture[i][j] = tex;

		}
	    }
	}	
    }
    else if (curTool=="eraser"){
	for (let i=x-size; i<=x+size;i++){
	    
   	    for (let j=y-size; j<=y+size;j++){
		if(i>drawingAreaX && j>drawingAreaY &&pixelTexture[i]){pixelTexture[i][j] = ""}
		else{
		    pixelTexture[i]={};
		    pixelTexture[i][j] = "";
		}
	    }
	}	
    }

}

/**
* Clears the canvas.
*/
function clearCanvas()
{
//    context=contextOld;
    context.globalAlpha=1;
    context.clearRect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
    context.strokeStyle = '#70ba5d';
    context.lineWidth   = 10;
    context.fillStyle = "#fff"; 
    context.beginPath();
    context.rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
    context.strokeRect(5,5, canvasWidth-10, canvasHeight-10);
    context.closePath();
    context.clip();
    context.drawImage(backgroundImage, drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
   
}


function undo()
{
    console.log("undo points");
    var i = clickX.length-10;
    var j = clickX.length;
    var x =0;
    var y=0;
    if(i<0){i=0;}
    for(; i < j; i++)
    {
	
	x=clickX.pop();
	y=clickY .pop();
	clickColor.pop();
	clickTool.pop(); 
	clickSize.pop(); 
	clickDrag.pop();
	pixelTexture[x][y]="";
    }

    redrawCanvas();
}


function clearTools()
{
    contextTools.clearRect(0, 0, toolWidth, canvasHeight);
}

function newCanvas()
{
   
    pixelTexture = {};
    clickX = [];
    clickY = [];
    clickColor = [];
    clickTool = [];
    clickSize = [];
    clickDrag = [];

    for (let i=0; i<windowWidth+200; i++){
	pixelTexture[i]={};
    }
    console.log("new canvas");
    redrawInterface("canvas");
}

/**
* Redraws the interface.
*/
function redrawInterface(intType)
{
    interfaceType=intType;
    context.globalAlpha = 1; // No IE support
    contextTools.globalAlpha = 1; // No IE support

    console.log("redrawing interface: inttype=" + interfaceType +" curtool="+curTool) ;	


    clearTools();

    var locX;
    var locY;
    if(interfaceType=="canvas"||interfaceType=="toolpicker"){

	if (orient=="landscape"){
	    var yUnit=toolHeight/10;
	    //draw toolbar
	    contextTools.strokeStyle = '#001935';
	    contextTools.drawImage(logoImage, 10, 10, toolWidth-10,toolWidth*0.25-20);
	    contextTools.strokeRect(10,10, toolWidth-10, toolWidth*0.25-20);

	    if(curTool == "crayon"){
		contextTools.drawImage(hapticCrayonImage, 10*scaleFactorM, yUnit*1.8,  110*scaleFactorM,31*scaleFactorM);
		contextTools.drawImage(crayonOnImage, 135*scaleFactorM, yUnit*1.8,  100*scaleFactorM,29*scaleFactorM);
	
		contextTools.drawImage(hapticsImage, 245*scaleFactorM, yUnit*1.7,  75*scaleFactorM,60*scaleFactorM);
		contextTools.drawImage(eraserImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);
	    }
	    else if(curTool == "haptic-crayon"){
		contextTools.drawImage(hapticCrayonOnImage, 10*scaleFactorM, yUnit*1.8,  110*scaleFactorM,31*scaleFactorM);
		contextTools.drawImage(crayonImage, 135*scaleFactorM, yUnit*1.8,  100*scaleFactorM,29*scaleFactorM);

		contextTools.drawImage(hapticsImage, 245*scaleFactorM, yUnit*1.7,  75*scaleFactorM,60*scaleFactorM);
		contextTools.drawImage(eraserImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);

	    }
	    
	    else if(curTool == "haptics"){
		contextTools.drawImage(hapticCrayonImage, 10*scaleFactorM, yUnit*1.8,  110*scaleFactorM,31*scaleFactorM);
		contextTools.drawImage(crayonImage, 135*scaleFactorM, yUnit*1.8,  100*scaleFactorM,29*scaleFactorM);
		contextTools.drawImage(hapticsOnImage, 245*scaleFactorM, yUnit*1.7,  75*scaleFactorM,60*scaleFactorM);
		contextTools.drawImage(eraserImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);
	    }	

	    
	    
	    var crayonPattern=curTex;
	    if(curTex==colorBee){
		crayonPattern=contextTools.createPattern(crayonTextureImageBee,"repeat");
	    }
	    else if(curTex==colorWater){
		    crayonPattern=contextTools.createPattern(crayonTextureImageWater,"repeat");
	    }
	    else if(curTex==colorStones3){
		crayonPattern=contextTools.createPattern(crayonTextureImageStones3,"repeat");
	    }
	    else if(curTex==colorStones4){
		crayonPattern=contextTools.createPattern(crayonTextureImageStones4,"repeat");
	    }
	    else if(curTex==colorLava){
		crayonPattern=contextTools.createPattern(crayonTextureImageLava,"repeat");
	    }
	    else if(curTex==colorSand){
		crayonPattern=contextTools.createPattern(crayonTextureImageSand,"repeat");
	    }
	    else if(curTex==colorLeaves1){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves1,"repeat");
	    }
	    else if(curTex==colorLeaves2){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves2,"repeat");
		}
	    else if(curTex==colorLeaves3){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves3,"repeat");
	    }
	    else if(curTex==colorLeaves4){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves4,"repeat");
	    }
	    else if(curTex==colorScales1){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales1,"repeat");
	    }
	    else if(curTex==colorScales2){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales2,"repeat");
	    }
	    else if(curTex==colorScales3){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales3,"repeat");
	    }
	    else if(curTex==colorScales4){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales4,"repeat");
	    }
	    else if(curTex==colorTree1){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree1,"repeat");
	    }
	    else if(curTex==colorTree2){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree2,"repeat");
	    }
	    else if(curTex==colorTree3){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree3,"repeat");
	    }
	    else if(curTex==colorTree4){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree4,"repeat");
	    }
	    else if(curTex==colorFur1){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur1,"repeat");
	    }
	    else if(curTex==colorFur2){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur2,"repeat");
	    }
	    else if(curTex==colorFur3){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur3,"repeat");
	    }
	    else if(curTex==colorFur4){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur4,"repeat");
	    }
	    contextTools.fillStyle=crayonPattern;
	
	    locX = 265*scaleFactorM;
	    locY = yUnit*2.8;
	    radius=30*scaleFactorM;
	    contextTools.strokeStyle= '#70bc5d';
	    contextTools.fillRect(locX, locY, 88*scaleFactorM,60*scaleFactorM);
	    contextTools.strokeRect(locX, locY, 88*scaleFactorM,60*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*2.98, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.10, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.22, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.34, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.46, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*2.86, 18*scaleFactorM,0.5*scaleFactorM);

	    //hline
	    contextTools.fillStyle = '#001935';
	    contextTools.fillRect(10, yUnit*2.5, toolWidth-20,2*scaleFactorM);
	    //hline
	    contextTools.fillStyle = '#001935';
	    contextTools.fillRect(10, yUnit*3.75, toolWidth-20,2*scaleFactorM);	    

	    var fontSize=Math.round(18*scaleFactorM);
	    contextTools.font = "600 "+fontSize+"px Arial";
	    contextTools.fillStyle = '#001935';
	    contextTools.strokeStyle = '#001935';
	    contextTools.fillText("Brush Size", 50*scaleFactorM, yUnit*3.6);
	    contextTools.fillText("Current", 190*scaleFactorM, yUnit*3.0);
	    contextTools.fillText("Texture", 190*scaleFactorM, yUnit*3.3);

	    
	    contextTools.strokeStyle = '#001935';
	    contextTools.fillStyle = '#001935';
	    locX = 160*scaleFactorM;
	    locY = yUnit*3;
	    radius=8*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    locX = 130*scaleFactorM;
	    radius=13*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    locX = 90*scaleFactorM;
	    radius=20*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    locX = 40*scaleFactorM;
	    radius=28*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    
	    var radius=20;
	    if(curSize == "small"){
		locX = 160*scaleFactorM;
		radius=8*scaleFactorM;
	    }else if(curSize == "normal"){
		locX = 130*scaleFactorM;
		radius=13*scaleFactorM;
	    }else if(curSize == "large"){
		locX = 90*scaleFactorM;
		radius=20*scaleFactorM;
	    }else if(curSize == "huge"){
		locX = 40*scaleFactorM;
		radius=28*scaleFactorM;
	    }

	    
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fillStyle = '#70bc5d';
	    contextTools.fill();	
	    contextTools.strokeStyle = '#001935';
	    contextTools.lineWidth   = 4;
	    contextTools.stroke();

 //color picker

{
	{
	    
	    contextTools.font = "30px Arial";
	    contextTools.fillStyle = '#001935';
	    
	    // Row1
	    locX = 55;
	    locY =128+yUnit*2.5;
	    var radius=48;
	    console.log("SF="+scaleFactor+"; SFM="+scaleFactorM+"; SFH="+scaleFactorH);
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageStones3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorStones3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;

		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
		}
	    
	
	    locX = 160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageSand,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorSand){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }

	    locX = 265;

		
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageLava,"repeat");;
	    contextTools.fill();	
	    if(curTex == colorLava){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    locX = 370;

   
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageWater,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorWater){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    
	    //Row 2
	    
	    locX = 55;
	    locY = 227+yUnit*2.5;;
	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageLeaves1,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorLeaves1){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    

	    locX =160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageLeaves3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorLeaves3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Row 3
	    locX = 265;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageScales1,"repeat");;
	    contextTools.fill();	
	    
		if(curTex == colorScales1){
		    contextTools.strokeStyle = '#70ba5d';
		    contextTools.lineWidth   = 10;
		    contextTools.stroke();
		    contextTools.strokeStyle = '#ffffff';
		    contextTools.lineWidth   = 2;
		    contextTools.stroke();
		}
	    
	    // Green
	    locX = 370;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageBee,"repeat");;
	    contextTools.fill();	
	    
		if(curTex == colorBee){
		    contextTools.strokeStyle = '#70ba5d';
		    contextTools.lineWidth   = 10;
		    contextTools.stroke();
		    contextTools.strokeStyle = '#ffffff';
		    contextTools.lineWidth   = 2;
		    contextTools.stroke();
		}
	    
	    // Yellow
	    locX = 55;
	    locY =326+yUnit*2.5;;
	    
	    contextTools.beginPath();
	    
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageScales3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorScales3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Yellow
	    locX = 160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageScales4,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorScales4){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    // Row 4

	    locX = 265;
	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageTree2,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorTree2){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Yellow
	    locX = 370;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageTree3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorTree3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Yellow
	    locX = 55;
	    locY = 425+yUnit*2.5;;
	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageTree4,"repeat");;
	    contextTools.fill();	

	    if(curTex == colorTree4){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }

	    // Row 5
	    locX = 160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageFur1,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorFur1){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Green
	    locX = 265;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageFur2,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorFur2){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
		
	    // Yellow

	    locX = 370;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageFur4,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorFur4){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }

	}
	
    }
	    
	    //end toolbar
	    contextTools.restore();
	    contextTools.save();
	    
	}
        
    }
    
    if(interfaceType=="canvas"){redrawCanvas();}

}


function redrawTools()
{
    context.globalAlpha = 1; // No IE support
    contextTools.globalAlpha = 1; // No IE support

    console.log("redrawing tools");

    clearTools();
    var locX;
    var locY;
  
	    var yUnit=toolHeight/10;
	    //draw toolbar
	    contextTools.strokeStyle = '#001935';
	    contextTools.drawImage(logoImage, 10, 10, toolWidth-10,toolWidth*0.25-20);
	    contextTools.strokeRect(10,10, toolWidth-10, toolWidth*0.25-20);

	    if(curTool == "crayon"){
		contextTools.drawImage(hapticCrayonImage, 10*scaleFactorM, yUnit*1.8,  110*scaleFactorM,31*scaleFactorM);
		contextTools.drawImage(crayonOnImage, 135*scaleFactorM, yUnit*1.8,  100*scaleFactorM,29*scaleFactorM);
	
		contextTools.drawImage(hapticsImage, 245*scaleFactorM, yUnit*1.7,  75*scaleFactorM,60*scaleFactorM);
		contextTools.drawImage(eraserImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);
	    }
	    else if(curTool == "haptic-crayon"){
		contextTools.drawImage(hapticCrayonOnImage, 10*scaleFactorM, yUnit*1.8,  110*scaleFactorM,31*scaleFactorM);
		contextTools.drawImage(crayonImage, 135*scaleFactorM, yUnit*1.8,  100*scaleFactorM,29*scaleFactorM);

		contextTools.drawImage(hapticsImage, 245*scaleFactorM, yUnit*1.7,  75*scaleFactorM,60*scaleFactorM);
		contextTools.drawImage(eraserImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);

	    }
	    
	    else if(curTool == "haptics"){
		contextTools.drawImage(hapticCrayonImage, 10*scaleFactorM, yUnit*1.8,  110*scaleFactorM,31*scaleFactorM);
		contextTools.drawImage(crayonImage, 135*scaleFactorM, yUnit*1.8,  100*scaleFactorM,29*scaleFactorM);
		contextTools.drawImage(hapticsOnImage, 245*scaleFactorM, yUnit*1.7,  75*scaleFactorM,60*scaleFactorM);
		contextTools.drawImage(eraserImage, 335*scaleFactorM, yUnit*1.8,  90*scaleFactorM,35*scaleFactorM);
	    }	

	    
	    
	    var crayonPattern=curTex;
	    if(curTex==colorBee){
		crayonPattern=contextTools.createPattern(crayonTextureImageBee,"repeat");
	    }
	    else if(curTex==colorWater){
		    crayonPattern=contextTools.createPattern(crayonTextureImageWater,"repeat");
	    }
	    else if(curTex==colorStones3){
		crayonPattern=contextTools.createPattern(crayonTextureImageStones3,"repeat");
	    }
	    else if(curTex==colorStones4){
		crayonPattern=contextTools.createPattern(crayonTextureImageStones4,"repeat");
	    }
	    else if(curTex==colorLava){
		crayonPattern=contextTools.createPattern(crayonTextureImageLava,"repeat");
	    }
	    else if(curTex==colorSand){
		crayonPattern=contextTools.createPattern(crayonTextureImageSand,"repeat");
	    }
	    else if(curTex==colorLeaves1){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves1,"repeat");
	    }
	    else if(curTex==colorLeaves2){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves2,"repeat");
		}
	    else if(curTex==colorLeaves3){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves3,"repeat");
	    }
	    else if(curTex==colorLeaves4){
		crayonPattern=contextTools.createPattern(crayonTextureImageLeaves4,"repeat");
	    }
	    else if(curTex==colorScales1){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales1,"repeat");
	    }
	    else if(curTex==colorScales2){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales2,"repeat");
	    }
	    else if(curTex==colorScales3){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales3,"repeat");
	    }
	    else if(curTex==colorScales4){
		crayonPattern=contextTools.createPattern(crayonTextureImageScales4,"repeat");
	    }
	    else if(curTex==colorTree1){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree1,"repeat");
	    }
	    else if(curTex==colorTree2){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree2,"repeat");
	    }
	    else if(curTex==colorTree3){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree3,"repeat");
	    }
	    else if(curTex==colorTree4){
		crayonPattern=contextTools.createPattern(crayonTextureImageTree4,"repeat");
	    }
	    else if(curTex==colorFur1){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur1,"repeat");
	    }
	    else if(curTex==colorFur2){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur2,"repeat");
	    }
	    else if(curTex==colorFur3){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur3,"repeat");
	    }
	    else if(curTex==colorFur4){
		crayonPattern=contextTools.createPattern(crayonTextureImageFur4,"repeat");
	    }
	    contextTools.fillStyle=crayonPattern;
	
	    locX = 265*scaleFactorM;
	    locY = yUnit*2.8;
	    radius=30*scaleFactorM;
	    contextTools.strokeStyle= '#70bc5d';
	    contextTools.fillRect(locX, locY, 88*scaleFactorM,60*scaleFactorM);
	    contextTools.strokeRect(locX, locY, 88*scaleFactorM,60*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*2.98, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.10, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.22, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.34, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*3.46, 18*scaleFactorM,0.5*scaleFactorM);
	    contextTools.strokeRect(locX+70*scaleFactorM, yUnit*2.86, 18*scaleFactorM,0.5*scaleFactorM);

	    //hline
	    contextTools.fillStyle = '#001935';
	    contextTools.fillRect(10, yUnit*2.5, toolWidth-20,2*scaleFactorM);
	    //hline
	    contextTools.fillStyle = '#001935';
	    contextTools.fillRect(10, yUnit*3.75, toolWidth-20,2*scaleFactorM);	    

	    var fontSize=Math.round(18*scaleFactorM);
	    contextTools.font = "600 "+fontSize+"px Arial";
	    contextTools.fillStyle = '#001935';
	    contextTools.strokeStyle = '#001935';
	    contextTools.fillText("Brush Size", 50*scaleFactorM, yUnit*3.6);
	    contextTools.fillText("Current", 190*scaleFactorM, yUnit*3.0);
	    contextTools.fillText("Texture", 190*scaleFactorM, yUnit*3.3);

	    
	    contextTools.strokeStyle = '#001935';
	    contextTools.fillStyle = '#001935';
	    locX = 160*scaleFactorM;
	    locY = yUnit*3;
	    radius=8*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    locX = 130*scaleFactorM;
	    radius=13*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    locX = 90*scaleFactorM;
	    radius=20*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    locX = 40*scaleFactorM;
	    radius=28*scaleFactorM;
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fill();	
	    
	    
	    var radius=20;
	    if(curSize == "small"){
		locX = 160*scaleFactorM;
		radius=8*scaleFactorM;
	    }else if(curSize == "normal"){
		locX = 130*scaleFactorM;
		radius=13*scaleFactorM;
	    }else if(curSize == "large"){
		locX = 90*scaleFactorM;
		radius=20*scaleFactorM;
	    }else if(curSize == "huge"){
		locX = 40*scaleFactorM;
		radius=28*scaleFactorM;
	    }

	    
	    contextTools.beginPath();
	    contextTools.arc(locX,locY,radius,0,2 * Math.PI);
	    contextTools.closePath();
	    contextTools.fillStyle = '#70bc5d';
	    contextTools.fill();	
	    contextTools.strokeStyle = '#001935';
	    contextTools.lineWidth   = 4;
	    contextTools.stroke();

 //color picker

{
	{
	    
	    contextTools.font = "30px Arial";
	    contextTools.fillStyle = '#001935';

	    
	    // Row1
	    locX = 55;
	    locY =128+yUnit*2.5;
	    var radius=48;
	    console.log("SF="+scaleFactor+"; SFM="+scaleFactorM+"; SFH="+scaleFactorH);
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageStones3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorStones3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
		}
	    
	
	    locX = 160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageSand,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorSand){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }

	    locX = 265;

		
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageLava,"repeat");;
	    contextTools.fill();	
	    if(curTex == colorLava){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    locX = 370;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageWater,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorWater){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    
	    //Row 2
	    
	    locX = 55;
	    locY = 228+yUnit*2.5;;
	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageLeaves1,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorLeaves1){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    

	    locX =160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageLeaves3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorLeaves3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Row 3
	    locX = 265;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageScales1,"repeat");;
	    contextTools.fill();	
	    
		if(curTex == colorScales1){
		    contextTools.strokeStyle = '#70ba5d';
		    contextTools.lineWidth   = 10;
		    contextTools.stroke();
		    contextTools.strokeStyle = '#ffffff';
		    contextTools.lineWidth   = 2;
		    contextTools.stroke();
		}
	    
	    // Green
	    locX = 370;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageBee,"repeat");;
	    contextTools.fill();	
	    
		if(curTex == colorBee){
		    contextTools.strokeStyle = '#70ba5d';
		    contextTools.lineWidth   = 10;
		    contextTools.stroke();
		    contextTools.strokeStyle = '#ffffff';
		    contextTools.lineWidth   = 2;
		    contextTools.stroke();
		}
	    
	    // Yellow
	    locX = 55;
	    locY =325+yUnit*2.5;;
	    
	    contextTools.beginPath();
	    
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageScales3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorScales3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Yellow
	    locX = 160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageScales4,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorScales4){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    // Row 4

	    locX = 265;

	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageTree2,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorTree2){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Yellow
	    locX = 370;
  
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageTree3,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorTree3){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Yellow
	    locX = 55;
	    locY = 428+yUnit*2.5;;
	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageTree4,"repeat");;
	    contextTools.fill();	

	    if(curTex == colorTree4){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }

	    // Row 5
	    locX = 160;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageFur1,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorFur1){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
	    
	    // Green
	    locX = 265;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageFur2,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorFur2){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }
		

	    // Yellow
	    locX = 370;

	    
	    contextTools.beginPath();
	    contextTools.arc(locX, locY, radius, 0, 2 * Math.PI, false);
	    contextTools.closePath();
	    contextTools.fillStyle = contextTools.createPattern(crayonTextureImageFur4,"repeat");;
	    contextTools.fill();	
	    
	    if(curTex == colorFur4){
		contextTools.strokeStyle = '#70ba5d';
		contextTools.lineWidth   = 10;
		contextTools.stroke();
		contextTools.strokeStyle = '#ffffff';
		contextTools.lineWidth   = 2;
		contextTools.stroke();
	    }

	}



	
    }
	    
	    //end toolbar
	    contextTools.restore();
	    contextTools.save();
	
}

/**
* Redraws the canvas.
*/
function redrawCanvas()
{
if(curLoadResNum < totalLoadResources){ return; }

    clearCanvas();
    var radius;
    var i = 0;

    for(; i < clickX.length; i++)
    {
	if(clickSize[i] == "small"){
	    //radius = 2;
	    radius=Math.round(sizeHotspotWidthObject.small/6);
	}else if(clickSize[i] == "normal"){
	    //	    radius = 5;
	    radius=Math.round(sizeHotspotWidthObject.normal/3);
	}else if(clickSize[i] == "large"){
	    //radius = 10;
	    radius=Math.round(sizeHotspotWidthObject.large/2);
	}else if(clickSize[i] == "huge"){
	    //radius = 20;
	    radius=Math.round(sizeHotspotWidthObject.huge/2);
	}else{
	    alert("Error: Radius is zero for click " + i);
	    radius = 0;	
	}
		

	context.strokeStyle = clickColor[i];


	if(clickTool[i] == "crayon"||clickTool[i] == "haptic-crayon"){
	    var crayonPattern=context.strokeStyle;
	    if(clickColor[i]==colorBee){
		crayonPattern=context.createPattern(crayonTextureImageBee,"repeat");
	    }
	    if(clickColor[i]==colorWater){
		crayonPattern=context.createPattern(crayonTextureImageWater,"repeat");
	    }
	    else if(clickColor[i]==colorStones3){
		crayonPattern=context.createPattern(crayonTextureImageStones3,"repeat");
	    }
	    else if(clickColor[i]==colorStones4){
		crayonPattern=context.createPattern(crayonTextureImageStones4,"repeat");
	    }
	    else if(clickColor[i]==colorLava){
		crayonPattern=context.createPattern(crayonTextureImageLava,"repeat");
	    }
	    else if(clickColor[i]==colorSand){
		crayonPattern=context.createPattern(crayonTextureImageSand,"repeat");
	    }
	    else if(clickColor[i]==colorLeaves1){
		crayonPattern=context.createPattern(crayonTextureImageLeaves1,"repeat");
	    }
	    else if(clickColor[i]==colorLeaves2){
		crayonPattern=context.createPattern(crayonTextureImageLeaves2,"repeat");
	    }
	    else if(clickColor[i]==colorLeaves3){
		crayonPattern=context.createPattern(crayonTextureImageLeaves3,"repeat");
	    }
	    else if(clickColor[i]==colorLeaves4){
		crayonPattern=context.createPattern(crayonTextureImageLeaves4,"repeat");
	    }
	    else if(clickColor[i]==colorScales1){
		crayonPattern=context.createPattern(crayonTextureImageScales1,"repeat");
	    }
	    else if(clickColor[i]==colorScales2){
		crayonPattern=context.createPattern(crayonTextureImageScales2,"repeat");
	    }
	    else if(clickColor[i]==colorScales3){
		crayonPattern=context.createPattern(crayonTextureImageScales3,"repeat");
	    }
	    else if(clickColor[i]==colorScales4){
		crayonPattern=context.createPattern(crayonTextureImageScales4,"repeat");
	    }
	    else if(clickColor[i]==colorTree1){
		crayonPattern=context.createPattern(crayonTextureImageTree1,"repeat");
	    }
	    else if(clickColor[i]==colorTree2){
		crayonPattern=context.createPattern(crayonTextureImageTree2,"repeat");
	    }
	    else if(clickColor[i]==colorTree3){
		crayonPattern=context.createPattern(crayonTextureImageTree3,"repeat");
	    }
	    else if(clickColor[i]==colorTree4){
		crayonPattern=context.createPattern(crayonTextureImageTree4,"repeat");
	    }
	    else if(clickColor[i]==colorFur1){
		crayonPattern=context.createPattern(crayonTextureImageFur1,"repeat");
	    }
	    else if(clickColor[i]==colorFur2){
		crayonPattern=context.createPattern(crayonTextureImageFur2,"repeat");
	    }
	    else if(clickColor[i]==colorFur3){
		crayonPattern=context.createPattern(crayonTextureImageFur3,"repeat");
	    }
	    else if(clickColor[i]==colorFur4){
		crayonPattern=context.createPattern(crayonTextureImageFur4,"repeat");
	    }
	    context.fillStyle=crayonPattern;
	}
	else{
	    context.fillStyle=context.strokeStyle;
	}

	context.globalAlpha = 0.14; // No IE support	
	context.beginPath();
	context.lineWidth=1;
	if(clickDrag[i] && i>1){
	    context.moveTo(clickX[i-1]-radius, clickY[i-1]-radius);
	    context.lineTo(clickX[i]-radius, clickY[i]-radius);
	    context.lineTo(clickX[i]+radius, clickY[i]+radius);
	    context.lineTo(clickX[i-1]+radius, clickY[i-1]+radius);
	    context.lineTo(clickX[i-1]-radius, clickY[i-1]-radius);	
	    context.fill();
	    context.moveTo(clickX[i-1]-radius, clickY[i-1]+radius);
	    context.lineTo(clickX[i]-radius, clickY[i]+radius);
	    context.lineTo(clickX[i]+radius, clickY[i]-radius);
	    context.lineTo(clickX[i-1]+radius, clickY[i-1]-radius);
	    context.lineTo(clickX[i-1]-radius, clickY[i-1]+radius);
	    context.fill();

	    context.arc(clickX[i],clickY[i],radius,0,2 * Math.PI);
	    
	}else{
	    context.moveTo(clickX[i], clickY[i]);
	    context.arc(clickX[i],clickY[i],radius,0,2 * Math.PI);
	}
	
	context.fill();	
	context.closePath();
	context.globalAlpha = 1; // No IE support	
	
    }
    context.globalAlpha = 1; // No IE support	        
   // context.restore();
    context.save();

}


/**/


/**
* Redraws the recent changes to canvas.
*/
function updateCanvas()
{
    if(curLoadResNum < totalLoadResources){ return; }

    var radius;
    var i = clickX.length-4;
    if(i<0){i=0;}
    for(; i < clickX.length; i++)
    {		
	if(clickSize[i] == "small"){
	    //radius = 2;
	    radius=Math.round(sizeHotspotWidthObject.small/6);
	}else if(clickSize[i] == "normal"){
	    //	    radius = 5;
	    radius=Math.round(sizeHotspotWidthObject.normal/3);
	}else if(clickSize[i] == "large"){
	    //radius = 10;
	    radius=Math.round(sizeHotspotWidthObject.large/2);
	}else if(clickSize[i] == "huge"){
	    //radius = 20;
	    radius=Math.round(sizeHotspotWidthObject.huge/2);
	}else{
	    alert("Error: Radius is zero for click " + i);
	    radius = 0;	
	}
		
	
	context.strokeStyle = clickColor[i];


	if(clickTool[i] == "crayon" || clickTool[i] == "haptic-crayon"){
	    var crayonPattern=context.strokeStyle;
	    if(clickColor[i]==colorBee){
		crayonPattern=context.createPattern(crayonTextureImageBee,"repeat");
	    }
	    else if(clickColor[i]==colorWater){
		    crayonPattern=context.createPattern(crayonTextureImageWater,"repeat");
	    }
	    else if(clickColor[i]==colorStones3){
		crayonPattern=context.createPattern(crayonTextureImageStones3,"repeat");
	    }
	    else if(clickColor[i]==colorStones4){
		crayonPattern=context.createPattern(crayonTextureImageStones4,"repeat");
	    }
	    else if(clickColor[i]==colorLava){
		crayonPattern=context.createPattern(crayonTextureImageLava,"repeat");
	    }
	    else if(clickColor[i]==colorSand){
		crayonPattern=context.createPattern(crayonTextureImageSand,"repeat");
	    }
	    else if(clickColor[i]==colorLeaves1){
		crayonPattern=context.createPattern(crayonTextureImageLeaves1,"repeat");
	    }
	    else if(clickColor[i]==colorLeaves2){
		crayonPattern=context.createPattern(crayonTextureImageLeaves2,"repeat");
		}
	    else if(clickColor[i]==colorLeaves3){
		crayonPattern=context.createPattern(crayonTextureImageLeaves3,"repeat");
	    }
	    else if(clickColor[i]==colorLeaves4){
		crayonPattern=context.createPattern(crayonTextureImageLeaves4,"repeat");
	    }
	    else if(clickColor[i]==colorScales1){
		crayonPattern=context.createPattern(crayonTextureImageScales1,"repeat");
	    }
	    else if(clickColor[i]==colorScales2){
		crayonPattern=context.createPattern(crayonTextureImageScales2,"repeat");
	    }
	    else if(clickColor[i]==colorScales3){
		crayonPattern=context.createPattern(crayonTextureImageScales3,"repeat");
	    }
	    else if(clickColor[i]==colorScales4){
		crayonPattern=context.createPattern(crayonTextureImageScales4,"repeat");
	    }
	    else if(clickColor[i]==colorTree1){
		crayonPattern=context.createPattern(crayonTextureImageTree1,"repeat");
	    }
	    else if(clickColor[i]==colorTree2){
		crayonPattern=context.createPattern(crayonTextureImageTree2,"repeat");
	    }
	    else if(clickColor[i]==colorTree3){
		crayonPattern=context.createPattern(crayonTextureImageTree3,"repeat");
	    }
	    else if(clickColor[i]==colorTree4){
		crayonPattern=context.createPattern(crayonTextureImageTree4,"repeat");
	    }
	    else if(clickColor[i]==colorFur1){
		crayonPattern=context.createPattern(crayonTextureImageFur1,"repeat");
	    }
	    else if(clickColor[i]==colorFur2){
		crayonPattern=context.createPattern(crayonTextureImageFur2,"repeat");
	    }
	    else if(clickColor[i]==colorFur3){
		crayonPattern=context.createPattern(crayonTextureImageFur3,"repeat");
	    }
	    else if(clickColor[i]==colorFur4){
		crayonPattern=context.createPattern(crayonTextureImageFur4,"repeat");
	    }
	    context.fillStyle=crayonPattern;
	}
	else{
	    context.fillStyle=context.strokeStyle;
	}
	
	context.globalAlpha = 0.03; // No IE support	
	context.beginPath();
	context.lineWidth=1;
	if(clickDrag[i] && i>0){
	    context.moveTo(clickX[i-1]-radius, clickY[i-1]-radius);
	    context.lineTo(clickX[i]-radius, clickY[i]-radius);
	    context.lineTo(clickX[i]+radius, clickY[i]+radius);
	    context.lineTo(clickX[i-1]+radius, clickY[i-1]+radius);
	    context.lineTo(clickX[i-1]-radius, clickY[i-1]-radius);	
	    context.fill();

	    context.moveTo(clickX[i-1]-radius, clickY[i-1]+radius);
	    context.lineTo(clickX[i]-radius, clickY[i]+radius);
	    context.lineTo(clickX[i]+radius, clickY[i]-radius);
	    context.lineTo(clickX[i-1]+radius, clickY[i-1]-radius);
	    context.lineTo(clickX[i-1]-radius, clickY[i-1]+radius);
	    context.fill();

	    context.arc(clickX[i],clickY[i],radius,0,2 * Math.PI);
	    
	}else{
	    context.moveTo(clickX[i], clickY[i]);
	    context.arc(clickX[i],clickY[i],radius,0,2 * Math.PI);
	}
	
	context.fill();	
	context.closePath();
	
    }
   
    context.restore();
    context.save();

   

}

function readFile() {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    const img=new Image();
    console.log("read file:" + file.name);
    const preview=document.querySelector("img");
    reader.addEventListener(
	"load",
	() => {
	    // convert image file to base64 string
	    //	    preview.src = reader.result;
	    console.log("loading img");
	    img.src=reader.result;
	    img.onload = () => {
		context.drawImage(img, 0, 0);
		context.beginPath();
		context.rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
		context.closePath();
		context.clip();

	    }


	},
    false
  );
    if (file) {
	reader.readAsDataURL(file);
	console.log("drawing image:"+preview.src);

    }


}




/**/
