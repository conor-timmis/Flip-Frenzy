/* jshint esversion: 11 */

let restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", restart);

function restart() {
    location.reload();
}