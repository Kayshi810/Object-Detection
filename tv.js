img="";
status="";
function preload()
{
    img=loadImage('IMG-0368.jpg');
}

function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model is loaded");
    status= true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }

}