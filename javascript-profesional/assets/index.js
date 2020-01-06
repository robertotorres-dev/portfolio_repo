import MediaPlayer from './mediaPlayer.js'

//Constantes para el manejo del selector del player y el eleento button
const PLAYER_SELECTOR = document.querySelector('video')
const BUTTON_SELECTOR = document.querySelector('button')

//Se genera la instancia del objeto MediaPlayer
const MEDIA_PLAYER_INSTANCE = new MediaPlayer({player: PLAYER_SELECTOR})

//Se asigna un método tooglePlay al button correspondiente
BUTTON_SELECTOR.addEventListener('click', () => MEDIA_PLAYER_INSTANCE.tooglePlay())
