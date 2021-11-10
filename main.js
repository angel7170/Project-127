song = "";
song2 = "";

function preload()
{
    song = loadSound("Home.mp3");
    song2 = loadSound("wolves.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,800,600);
}

function play()
{
    song.play();
}





