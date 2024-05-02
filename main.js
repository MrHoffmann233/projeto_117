//https://teachablemachine.withgoogle.com/models/fb32tjqKT/*

function startClassification()
{
    let options = { probabilitythreshold: 0.7};
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fb32tjqKT/model.json', modelReady, options);
}

function modelReady()
{
    console.log('Modelo carregado');~
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
      return;
    }
  
    console.log('Resultado obtido:', results);
  
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
  
    let soundCount = document.getElementById('sound-count');
    let soundName = document.getElementById('sound-name');
    let image = document.getElementById('animal-image');
  
    soundCount.innerText = `Cachorro: ${dog}, Gato: ${cat}`;
  
    soundName.innerText = results[0].label;
  
    soundCount.style.color = `rgb(${red}, ${green}, ${blue})`;
    soundName.style.color = `rgb(${red}, ${green}, ${blue})`;
  
    if (results[0].label === 'Latido') {
      image.src = 'cachorro.gif';
      dog += 1;
    } else if (results[0].label === 'Miado') {
      image.src = 'gato.gif';
      cat += 1;
    } else {
      image.src = 'listen.gif';
    }
  }
  
