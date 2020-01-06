/**
 * Inicializando el objeto MediaPlayer
 * 
 * param {Object} config Configuracion general para el player
 */
function MediaPlayer(config = {}) {
    //Destructuración con validación
    const { player = ""} = config
    this.player = player ? document.querySelector('video') : ""
}

/**
 * Permite reproducir el video
 * 
 * return {void}
 */
MediaPlayer.prototype.play = function play() {
    const { player } = this
    if (player) {
        player.play()
    }
}

/**
 * Permite pausar el video
 * 
 * return {void}
 */
MediaPlayer.prototype.pause = function pause() {
    const { player } = this
    if (player) {
        player.pause()
    }
}

/**
 * Permite reproducir o pausar el video dependiendo del status
 * 
 * return {void}
 */
MediaPlayer.prototype.tooglePlay = function tooglePlay() {
    const { player } = this
    if (player) {
        if (player.paused) {
            player.play()
        } else {
            player.pause()
        }
    }
}

export default MediaPlayer