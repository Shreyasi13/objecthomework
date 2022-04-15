video= "";
objects=[]
status1= "";

    
function setup(){
    canvas= createCanvas(540,340);
    canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  
}
finder="";
function draw(){
    image(video,0,0,480,380);
    r = random(225)
    g = random(225)
    b= random(225)
    document.getElementById("object").value = finder;
    if(status1 !=""){
objectDetector.detect(video,gotResult);

   for (i=0; i<objects.length; i++){
       document.getElementById("detected").innerHTML= "Status: Objects Detected";
       document.getElementById("number_of_object").innerHTML = "Number of objects detected are:" + objects.length;
   }
       if (objects[i].label == finder){
           speak()
        textSize(24)
        fill(r,g,b);
        percent= floor(objects[i].confidence *100);
        text(objects[i].label + " "+ percent+ "%", objects[i].x+15, objects[i].y+ 15)
    noFill();
    stroke(r,g,b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       } 
    }
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("detected").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
video.loop();
video.speed(1);
video.volume(0);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects= results;
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data =  finder+"found";

    var utter = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utter);

}