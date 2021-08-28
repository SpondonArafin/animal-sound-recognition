function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true}); //start the microphone
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O_Z4B3LC5//model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}



function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color =   
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')  

    if (results[0].label == "Dog") {
      img.src = 'aliens-01.gif';
    } else if (results[0].label == "Cat") {
      img.src = 'cat-silhouette.png';
    }
    else {
        img.src = 'ear_005';
    }
  }
}
