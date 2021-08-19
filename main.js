objects=[];
status="";

function preload(){
    video=createVideo('video.mp4');
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Objects";
}

function modelLoaded(){
    console.log("model loaded!")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResults(error,results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}