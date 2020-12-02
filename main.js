var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start()
{
document.getElementById("TextBox").innerHTML = "";
recognition.start();
}

recognition.onresult = function (event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("TextBox").innerHTML = Content;
    if (Content = "take my selfie---") {
        console.log("Taking selfie---");
        Speak();
    }
}

function Speak()
{
    var synth = window.speechSynthesis;
    Speak_Data = "Taking your selfie in 10 seconds"
    var UtterThis = new SpeechSynthesisUtterance(Speak_Data);
    synth.speak(UtterThis);
    Webcam.attach(Camera);
    setTimeout(function(){
        Take_Snapshot();
        Save();
    } , 10000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
   });
   Camera = document.getElementById("Camera");


   function Take_Snapshot()
   {
       Webcam.snap(function(data_url){
           document.getElementById("Result").innerHTML = '<img id = "Selfie_Image" src = "'+data_url+'" >';
       });
   }

   function Save()
   {
       link = document.getElementById("link");
       Image = document.getElementById("Selfie_Image").src;
       link.href = Image;
       link.click();
   }