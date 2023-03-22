// variables
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeout

const body = document.querySelector('body')
const main = document.querySelector('main')
const sunButton = document.querySelector('#sun-button')
const moonButton = document.querySelector('#moon-button')


const buttonPlay = document.querySelector('.play')
const playColor = document.querySelector('.play-path')

const buttonStop = document.querySelector('.stop')
const stopColor = document.querySelector('.stop-path')

const buttonPlusFive = document.querySelector('.plus-five')
const plusColor = document.querySelector('.plus-path')

const buttonMinusFive = document.querySelector('.minus-five')
const minusColor = document.querySelector('.minus-path')


const forest = document.querySelector('.forest')
const forestColor = document.querySelector('#button-forest-color')
const forestPathColor = document.querySelector('.forest svg #button-place-color')
const audioForest = new Audio('assets/Floresta.wav')
const volumeSliderForest = document.querySelector('.volume-slider-forest')
const darkVolumeSliderForest = document.querySelector('.dark-volume-slider-forest')

const rainy = document.querySelector('.rainy')
const rainyColor = document.querySelector('#button-rainy-color')
const rainyPathColor = document.querySelector('.rainy svg #button-place-color')
const audioRainy = new Audio('assets/Chuva.wav')
const volumeSliderRainy = document.querySelector('.volume-slider-rainy')
const darkVolumeSliderRainy = document.querySelector('.dark-volume-slider-rainy')

const coffee = document.querySelector('.coffee')
const coffeeColor = document.querySelector('#button-coffee-color')
const coffeePathColor = document.querySelector('.coffee svg #button-place-color')
const audioCoffee = new Audio('assets/Cafeteria.wav')
const volumeSliderCoffee = document.querySelector('.volume-slider-coffee')
const darkVolumeSliderCoffee = document.querySelector('.dark-volume-slider-coffee')

const fireplace = document.querySelector('.fireplace')
const fireplaceColor = document.querySelector('#button-fireplace-color')
const fireplacePathColor = document.querySelector('.fireplace svg #button-place-color')
const audioFireplace = new Audio('assets/Lareira.wav')
const volumeSliderFireplace = document.querySelector('.volume-slider-fireplace')
const darkVolumeSliderFireplace = document.querySelector('.dark-volume-slider-fireplace')



// functions
function play() {
  
  if(moonButton.classList.contains('hide')) {
    playColor.classList.add('button-active')
    stopColor.classList.remove('button-active')
  }

  else if(sunButton.classList.contains('hide')) {
    playColor.classList.add('dark-button-active')
    stopColor.classList.remove('dark-button-active')
  }

  countdown()
}

function stop() {
  
  if(moonButton.classList.contains('hide')) {
    playColor.classList.remove('button-active')
    stopColor.classList.add('button-active')
  }

  else if(sunButton.classList.contains('hide')) {
    playColor.classList.remove('dark-button-active')
    stopColor.classList.add('dark-button-active')
  }

  stopTimer()
}

function resetTimer() {

  minutesDisplay.textContent = String('00')
  secondsDisplay.textContent = String('00')

  if(moonButton.classList.contains('hide')) {
    playColor.classList.remove('button-active')
    stopColor.classList.remove('button-active')
  }

  else if(sunButton.classList.contains('hide')) {
    playColor.classList.remove('dark-button-active')
    stopColor.classList.remove('dark-button-active')
  }
}

function plusFive() {
  
  if(moonButton.classList.contains('hide')) {
    plusColor.classList.add('button-active')
  }

  else if(sunButton.classList.contains('hide')) {
    plusColor.classList.add('dark-button-active')
  }

  setInterval(function() {
    if(moonButton.classList.contains('hide')) {
      plusColor.classList.remove('button-active')
    }
    else if(sunButton.classList.contains('hide')) {
      plusColor.classList.remove('dark-button-active')
    }
  }, 500)
  
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
}

function minusFive() {

  if(moonButton.classList.contains('hide')) {
    minusColor.classList.add('button-active')
  }

  else if(sunButton.classList.contains('hide')) {
    minusColor.classList.add('dark-button-active')
  }

  setInterval(function() {
    if(moonButton.classList.contains('hide')) {
      minusColor.classList.remove('button-active')
    }
    else if(sunButton.classList.contains('hide')) {
      minusColor.classList.remove('dark-button-active')
    }
  }, 500)

  let minutes = Number(minutesDisplay.textContent)
  minutes = minutes <= 4 ? resetTimer() : (minutesDisplay.textContent = String(minutes - 5).padStart(2, "0"))
}

function countdown() {
  timerTimeout = setInterval(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds == 0
    
    if(isFinished) {
      stopTimer()
      resetTimer()    
      return
    }

    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(--minutes).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
  }, 1000)
}

function stopTimer() {
  clearInterval(timerTimeout)
}

/* setInterval() --- o ciclo fica em loop até que algo mande parar
   setTimeout() --- o ciclo só faz 1 vez; pra fazer mais, tem que transformar a função em recursiva (ela se auto-chamando);
                    pra virar recursiva --- pôr ela se chamando no fim da declaração;
                    ex: countdown()
   clearInterval() --- usada pra parar o tempo de "setInterval()"
   clearTimeout() --- impede que "setTimeout()" execute
*/

function volumeForest() {
  audioForest.volume = volumeSliderForest.value / 100
}

function volumeForest_to_darkForest() {
  darkVolumeSliderForest.value = volumeSliderForest.value
}

function volumeDarkForest() {
  audioForest.volume = darkVolumeSliderForest.value / 100
}

function volumeDarkForest_to_forest() {
  volumeSliderForest.value = darkVolumeSliderForest.value
}



function volumeRainy() {
  audioRainy.volume = volumeSliderRainy.value / 100
}

function volumeRainy_to_darkRainy() {
  darkVolumeSliderRainy.value = volumeSliderRainy.value
}

function volumeDarkRainy() {
  audioRainy.volume = darkVolumeSliderRainy.value / 100
}

function volumeDarkRainy_to_rainy() {
  volumeSliderRainy.value = darkVolumeSliderRainy.value
}



function volumeCoffee() {
  audioCoffee.volume = volumeSliderCoffee.value / 100
}

function volumeCoffee_to_darkCoffee() {
  darkVolumeSliderCoffee.value = volumeSliderCoffee.value
}

function volumeDarkCoffee() {
  audioCoffee.volume = darkVolumeSliderCoffee.value / 100
}

function volumeDarkCoffee_to_coffee() {
  volumeSliderCoffee.value = darkVolumeSliderCoffee.value
}



function volumeFireplace() {
  audioFireplace.volume = volumeSliderFireplace.value / 100
}
function volumeFireplace_to_darkFireplace() {
  darkVolumeSliderFireplace.value = volumeSliderFireplace.value
}

function volumeDarkFireplace() {
  audioFireplace.volume = darkVolumeSliderFireplace.value / 100
}

function volumeDarkFireplace_to_fireplace() {
  volumeSliderFireplace.value = darkVolumeSliderFireplace.value
}



function forestActive() {
  audioForest.loop = true

  if(moonButton.classList.contains('hide')) {
    if(audioForest.paused) {

      audioForest.play()
      audioRainy.pause()
      audioCoffee.pause()
      audioFireplace.pause()

      volumeSliderForest.classList.add('slider-active')
      volumeSliderRainy.classList.remove('slider-active')
      volumeSliderCoffee.classList.remove('slider-active')
      volumeSliderFireplace.classList.remove('slider-active')

      forestColor.classList.add('forest-color-active')
      forestColor.classList.remove('dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      forestPathColor.classList.add('button-place-color-active')
      forestPathColor.classList.remove('dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
  
    else if(audioForest.played) {

      audioForest.pause()

      volumeSliderForest.classList.remove('slider-active')
      volumeSliderRainy.classList.remove('slider-active')
      volumeSliderCoffee.classList.remove('slider-active')
      volumeSliderFireplace.classList.remove('slider-active')

      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')
      
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
  }

  else if(sunButton.classList.contains('hide')) {
    if(audioForest.paused) {

      audioForest.play()
      audioRainy.pause()
      audioCoffee.pause()
      audioFireplace.pause()

      darkVolumeSliderForest.classList.add('slider-dark-forest')
      darkVolumeSliderRainy.classList.remove('slider-dark-rainy')
      darkVolumeSliderCoffee.classList.remove('slider-dark-coffee')
      darkVolumeSliderFireplace.classList.remove('slider-dark-fireplace')
  
      forestColor.classList.add('dark-forest-color-active')
      forestColor.classList.remove('forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')
  
      forestPathColor.classList.add('dark-forest-path-active')
      forestPathColor.classList.remove('button-place-color-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
    
    else if(audioForest.played) {
  
      audioForest.pause()

      darkVolumeSliderForest.classList.remove('slider-dark-forest')
      darkVolumeSliderRainy.classList.remove('slider-dark-rainy')
      darkVolumeSliderCoffee.classList.remove('slider-dark-coffee')
      darkVolumeSliderFireplace.classList.remove('slider-dark-fireplace')
       
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')
      
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
  }
}

function rainyActive() {
  audioRainy.loop = true

  if(moonButton.classList.contains('hide')) {
    if(audioRainy.paused) {

      audioRainy.play()
      audioForest.pause()
      audioCoffee.pause()
      audioFireplace.pause()

      volumeSliderRainy.classList.add('slider-active')
      volumeSliderForest.classList.remove('slider-active')
      volumeSliderCoffee.classList.remove('slider-active')
      volumeSliderFireplace.classList.remove('slider-active')
    
      rainyColor.classList.add('rainy-color-active')
      rainyColor.classList.remove('dark-rainy-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      rainyPathColor.classList.add('button-place-color-active')
      rainyPathColor.classList.remove('dark-rainy-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }

    else if(audioRainy.played) {
      
      audioRainy.pause()
    
      volumeSliderRainy.classList.remove('slider-active')
      volumeSliderForest.classList.remove('slider-active')
      volumeSliderCoffee.classList.remove('slider-active')
      volumeSliderFireplace.classList.remove('slider-active')
      
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
  }

  else if(sunButton.classList.contains('hide')) {
    if(audioRainy.paused) {

      audioRainy.play()
      audioForest.pause()
      audioCoffee.pause()
      audioFireplace.pause()

      darkVolumeSliderRainy.classList.add('slider-dark-rainy')
      darkVolumeSliderForest.classList.remove('slider-dark-forest')
      darkVolumeSliderCoffee.classList.remove('slider-dark-coffee')
      darkVolumeSliderFireplace.classList.remove('slider-dark-fireplace')
    
      rainyColor.classList.add('dark-rainy-color-active')
      rainyColor.classList.remove('rainy-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      rainyPathColor.classList.add('dark-rainy-path-active')
      rainyPathColor.classList.remove('button-place-color-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }

    else if(audioRainy.played) {
      
      audioRainy.pause()
      
      darkVolumeSliderRainy.classList.remove('slider-dark-rainy')
      darkVolumeSliderForest.classList.remove('slider-dark-forest')
      darkVolumeSliderCoffee.classList.remove('slider-dark-coffee')
      darkVolumeSliderFireplace.classList.remove('slider-dark-fireplace')
      
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
  }
}

function coffeeActive() {
  audioCoffee.loop = true
  
  if(moonButton.classList.contains('hide')) {
    if(audioCoffee.paused) {
      
      audioCoffee.play()
      audioForest.pause()
      audioRainy.pause()
      audioFireplace.pause()

      volumeSliderCoffee.classList.add('slider-active')
      volumeSliderForest.classList.remove('slider-active')
      volumeSliderRainy.classList.remove('slider-active')
      volumeSliderFireplace.classList.remove('slider-active')

      coffeeColor.classList.add('coffee-color-active')
      coffeeColor.classList.remove('dark-coffee-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      coffeePathColor.classList.add('button-place-color-active')
      coffeePathColor.classList.remove('dark-coffee-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }

    else if(audioCoffee.played) {
      
      audioCoffee.pause()

      volumeSliderCoffee.classList.remove('slider-active')
      volumeSliderForest.classList.remove('slider-active')
      volumeSliderRainy.classList.remove('slider-active')
      volumeSliderFireplace.classList.remove('slider-active')
      
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
  }

  else if(sunButton.classList.contains('hide')) {
    if(audioCoffee.paused) {
      
      audioCoffee.play()
      audioForest.pause()
      audioRainy.pause()
      audioFireplace.pause()

      darkVolumeSliderCoffee.classList.add('slider-dark-coffee')
      darkVolumeSliderForest.classList.remove('slider-dark-forest')
      darkVolumeSliderRainy.classList.remove('slider-dark-rainy')
      darkVolumeSliderFireplace.classList.remove('slider-dark-fireplace')

      coffeeColor.classList.add('dark-coffee-color-active')
      coffeeColor.classList.remove('coffee-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      coffeePathColor.classList.add('dark-coffee-path-active')
      coffeePathColor.classList.remove('button-place-color-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }

    else if(audioCoffee.played) {
      
      audioCoffee.pause()

      darkVolumeSliderCoffee.classList.remove('slider-dark-coffee')
      darkVolumeSliderForest.classList.remove('slider-dark-forest')
      darkVolumeSliderRainy.classList.remove('slider-dark-rainy')
      darkVolumeSliderFireplace.classList.remove('slider-dark-fireplace')
      
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')

      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
    }
  }
}

function fireplaceActive() {
  audioFireplace.loop = true
  
  if(moonButton.classList.contains('hide')) {
    if(audioFireplace.paused) {
      
      audioFireplace.play()
      audioForest.pause()
      audioRainy.pause()
      audioCoffee.pause()

      volumeSliderFireplace.classList.add('slider-active')
      volumeSliderForest.classList.remove('slider-active')
      volumeSliderRainy.classList.remove('slider-active')
      volumeSliderCoffee.classList.remove('slider-active')
      
      fireplaceColor.classList.add('fireplace-color-active')
      fireplaceColor.classList.remove('dark-fireplace-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
    
      fireplacePathColor.classList.add('button-place-color-active')
      fireplacePathColor.classList.remove('dark-fireplace-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')  
    }

    else if(audioFireplace.played) {
      
      audioFireplace.pause()

      volumeSliderFireplace.classList.remove('slider-active')
      volumeSliderForest.classList.remove('slider-active')
      volumeSliderRainy.classList.remove('slider-active')
      volumeSliderCoffee.classList.remove('slider-active')
            
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
    
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')  
    }
  }

  else if(sunButton.classList.contains('hide')) {
    if(audioFireplace.paused) {
      
      audioFireplace.play()
      audioForest.pause()
      audioRainy.pause()
      audioCoffee.pause()

      darkVolumeSliderFireplace.classList.add('slider-dark-fireplace')
      darkVolumeSliderForest.classList.remove('slider-dark-forest')
      darkVolumeSliderRainy.classList.remove('slider-dark-rainy')
      darkVolumeSliderCoffee.classList.remove('slider-dark-coffee')
      
      fireplaceColor.classList.add('dark-fireplace-color-active')
      fireplaceColor.classList.remove('fireplace-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
    
      fireplacePathColor.classList.add('dark-fireplace-path-active')
      fireplacePathColor.classList.remove('button-place-color-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')  
    }

    else if(audioFireplace.played) {
      
      audioFireplace.pause()

      darkVolumeSliderFireplace.classList.remove('slider-dark-fireplace')
      darkVolumeSliderForest.classList.remove('slider-dark-forest')
      darkVolumeSliderRainy.classList.remove('slider-dark-rainy')
      darkVolumeSliderCoffee.classList.remove('slider-dark-coffee')
            
      fireplaceColor.classList.remove('fireplace-color-active', 'dark-fireplace-color-active')
      forestColor.classList.remove('forest-color-active', 'dark-forest-color-active')
      rainyColor.classList.remove('rainy-color-active', 'dark-rainy-color-active')
      coffeeColor.classList.remove('coffee-color-active', 'dark-coffee-color-active')
    
      fireplacePathColor.classList.remove('button-place-color-active', 'dark-fireplace-path-active')
      forestPathColor.classList.remove('button-place-color-active', 'dark-forest-path-active')
      rainyPathColor.classList.remove('button-place-color-active', 'dark-rainy-path-active')
      coffeePathColor.classList.remove('button-place-color-active', 'dark-coffee-path-active')  
    }
  }
}

// constName.classList.contains('className') --- Method .contains verifica se a classe "x" existe na variável

/* .played --- Property booleano que identifica se o estado do audio/video está tocando (true - pausado é false)
   .paused --- Property booleano que identifica se o estado do audio/video está pausado (true - tocando é false)
   .play --- Method que dá comando ao audio/video de tocar
   .pause --- Method que dá comando ao audio/video de pausar
*/

function whiteMode() {
  sunButton.classList.remove('hide')
  moonButton.classList.add('hide')

  body.classList.remove('dark-bg')
  main.classList.remove('dark-mode-timer')

  playColor.classList.remove('dark-play-path')
  stopColor.classList.remove('dark-stop-path')
  plusColor.classList.remove('dark-plus-path')
  minusColor.classList.remove('dark-minus-path')

  forestColor.classList.remove('dark-items-color')
  forestPathColor.classList.remove('dark-items-path-color')
  volumeSliderForest.classList.remove('hide')
  darkVolumeSliderForest.classList.add('hide')

  rainyColor.classList.remove('dark-items-color')
  rainyPathColor.classList.remove('dark-items-path-color')
  volumeSliderRainy.classList.remove('hide')
  darkVolumeSliderRainy.classList.add('hide')

  coffeeColor.classList.remove('dark-items-color')
  coffeePathColor.classList.remove('dark-items-path-color')
  volumeSliderCoffee.classList.remove('hide')
  darkVolumeSliderCoffee.classList.add('hide')
  
  fireplaceColor.classList.remove('dark-items-color')
  fireplacePathColor.classList.remove('dark-items-path-color')
  volumeSliderFireplace.classList.remove('hide')
  darkVolumeSliderFireplace.classList.add('hide')
}

function darkMode() {
  sunButton.classList.add('hide')
  moonButton.classList.remove('hide')

  body.classList.add('dark-bg')
  main.classList.add('dark-mode-timer')

  playColor.classList.add('dark-play-path')
  stopColor.classList.add('dark-stop-path')
  plusColor.classList.add('dark-plus-path')
  minusColor.classList.add('dark-minus-path')

  forestColor.classList.add('dark-items-color')
  forestPathColor.classList.add('dark-items-path-color')
  volumeSliderForest.classList.add('hide')
  darkVolumeSliderForest.classList.remove('hide')

  rainyColor.classList.add('dark-items-color')
  rainyPathColor.classList.add('dark-items-path-color')
  volumeSliderRainy.classList.add('hide')
  darkVolumeSliderRainy.classList.remove('hide')

  coffeeColor.classList.add('dark-items-color')
  coffeePathColor.classList.add('dark-items-path-color')
  volumeSliderCoffee.classList.add('hide')
  darkVolumeSliderCoffee.classList.remove('hide')
  
  fireplaceColor.classList.add('dark-items-color')
  fireplacePathColor.classList.add('dark-items-path-color')
  volumeSliderFireplace.classList.add('hide')
  darkVolumeSliderFireplace.classList.remove('hide')
}

function switchButtons_DarkToWhiteMode() {

  if(playColor.classList.contains('dark-button-active')) {
    playColor.classList.add('button-active')
    playColor.classList.remove('dark-button-active')
  }

  else if(stopColor.classList.contains('dark-button-active')) {
    stopColor.classList.add('button-active')
    stopColor.classList.remove('dark-button-active')
  }

  else if(plusColor.classList.contains('dark-button-active')) {
    plusColor.classList.add('button-active')
    plusColor.classList.remove('dark-button-active')
  }

  else if(minusColor.classList.contains('dark-button-active')) {
    minusColor.classList.add('button-active')
    minusColor.classList.remove('dark-button-active')
  }
}

function switchButtons_WhiteToDarkMode() {

  if(playColor.classList.contains('button-active')) {
    playColor.classList.add('dark-button-active')
    playColor.classList.remove('button-active')
  }

  else if(stopColor.classList.contains('button-active')) {
    stopColor.classList.add('dark-button-active')
    stopColor.classList.remove('button-active')
  }

  else if(plusColor.classList.contains('button-active')) {
    plusColor.classList.add('dark-button-active')
    plusColor.classList.remove('button-active')
  }

  else if(minusColor.classList.contains('button-active')) {
    minusColor.classList.add('dark-button-active')
    minusColor.classList.remove('button-active')
  }
}

function switchPlaces_DarkToWhiteMode() {

  if(forestColor.classList.contains('dark-forest-color-active') && forestPathColor.classList.contains('dark-forest-path-active')) {
    
    volumeSliderForest.classList.add('slider-active')
    
    forestColor.classList.add('forest-color-active')
    forestColor.classList.remove('dark-forest-color-active')

    forestPathColor.classList.add('button-place-color-active')
    forestPathColor.classList.remove('dark-forest-path-active')
  }
  
  else if(rainyColor.classList.contains('dark-rainy-color-active') && rainyPathColor.classList.contains('dark-rainy-path-active')) {
    
    volumeSliderRainy.classList.add('slider-active')
    
    rainyColor.classList.add('rainy-color-active')
    rainyColor.classList.remove('dark-rainy-color-active')

    rainyPathColor.classList.add('button-place-color-active')
    rainyPathColor.classList.remove('dark-rainy-path-active')
  }

  else if(coffeeColor.classList.contains('dark-coffee-color-active') && coffeePathColor.classList.contains('dark-coffee-path-active')) {
    
    volumeSliderCoffee.classList.add('slider-active')
    
    coffeeColor.classList.add('coffee-color-active')
    coffeeColor.classList.remove('dark-coffee-color-active')

    coffeePathColor.classList.add('button-place-color-active')
    coffeePathColor.classList.remove('dark-coffee-path-active')
  }

  else if(fireplaceColor.classList.contains('dark-fireplace-color-active') && fireplacePathColor.classList.contains('dark-fireplace-path-active')) {
    
    volumeSliderFireplace.classList.add('slider-active')
    
    fireplaceColor.classList.add('fireplace-color-active')
    fireplaceColor.classList.remove('dark-fireplace-color-active')

    fireplacePathColor.classList.add('button-place-color-active')
    fireplacePathColor.classList.remove('dark-fireplace-path-active')
  }
}

function switchPlaces_WhiteToDarkMode() {

  if(forestColor.classList.contains('forest-color-active')) {
    
    darkVolumeSliderForest.classList.add('slider-dark-forest')
    
    forestColor.classList.add('dark-forest-color-active')
    forestColor.classList.remove('forest-color-active')

    forestPathColor.classList.add('dark-forest-path-active')
    forestPathColor.classList.remove('button-place-color-active')
  }
  
  else if(rainyColor.classList.contains('rainy-color-active')) {
    
    darkVolumeSliderRainy.classList.add('slider-dark-rainy')
    
    rainyColor.classList.add('dark-rainy-color-active')
    rainyColor.classList.remove('rainy-color-active')

    rainyPathColor.classList.add('dark-rainy-path-active')
    rainyPathColor.classList.remove('button-place-color-active')
  }

  else if(coffeeColor.classList.contains('coffee-color-active')) {
    
    darkVolumeSliderCoffee.classList.add('slider-dark-coffee')
    
    coffeeColor.classList.add('dark-coffee-color-active')
    coffeeColor.classList.remove('coffee-color-active')

    coffeePathColor.classList.add('dark-coffee-path-active')
    coffeePathColor.classList.remove('button-place-color-active')
  }

  else if(fireplaceColor.classList.contains('fireplace-color-active')) {
    
    darkVolumeSliderFireplace.classList.add('slider-dark-fireplace')
    
    fireplaceColor.classList.add('dark-fireplace-color-active')
    fireplaceColor.classList.remove('fireplace-color-active')

    fireplacePathColor.classList.add('dark-fireplace-path-active')
    fireplacePathColor.classList.remove('button-place-color-active')
  }
}



// events - timer
buttonPlay.addEventListener('click', function() {
  play()
})

buttonStop.addEventListener('click', function() {
  stop()
})

buttonStop.addEventListener('dblclick', function() {
  resetTimer()
})

buttonPlusFive.addEventListener('click', function() {
  plusFive()
})

buttonMinusFive.addEventListener('click', function() {
  minusFive()
})



// events - place buttons
forest.addEventListener('click', function() {
  forestActive()
})

rainy.addEventListener('click', function() {
  rainyActive()
})

coffee.addEventListener('click', function() {
  coffeeActive()
})

fireplace.addEventListener('click', function() {
  fireplaceActive()
})

sunButton.addEventListener('click', function() {
  darkMode()
  switchPlaces_WhiteToDarkMode()
  switchButtons_WhiteToDarkMode()
})

moonButton.addEventListener('click', function() {
  whiteMode()
  switchPlaces_DarkToWhiteMode()
  switchButtons_DarkToWhiteMode()
})



//events - volume
volumeSliderForest.addEventListener('input', function() {
  volumeForest()
  volumeForest_to_darkForest()
})

darkVolumeSliderForest.addEventListener('input', function() {
  volumeDarkForest()
  volumeDarkForest_to_forest()
})

volumeSliderRainy.addEventListener('input', function() {
  volumeRainy()
  volumeRainy_to_darkRainy()
})

darkVolumeSliderRainy.addEventListener('input', function() {
  volumeDarkRainy()
  volumeDarkRainy_to_rainy()
})

volumeSliderCoffee.addEventListener('input', function() {
  volumeCoffee()
  volumeCoffee_to_darkCoffee()
})

darkVolumeSliderCoffee.addEventListener('input', function() {
  volumeDarkCoffee()
  volumeDarkCoffee_to_coffee()
})

volumeSliderFireplace.addEventListener('input', function() {
  volumeFireplace()
  volumeFireplace_to_darkFireplace()
})

darkVolumeSliderFireplace.addEventListener('input', function() {
  volumeDarkFireplace()
  volumeDarkFireplace_to_fireplace()
})
