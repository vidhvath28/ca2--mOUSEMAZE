document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  // 0 - dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const squares = []

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)


      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
      }
    }
  }
  createBoard()
let mouseindex = 490
  squares[mouseindex].classList.add('man')
  
  function movemouse(e) {
    squares[mouseindex].classList.remove('man')
    switch(e.keyCode) {
      case 37:
        if(
          mouseindex % width !== 0 &&
          !squares[mouseindex -1].classList.contains('wall') &&
          !squares[mouseindex -1].classList.contains('ghost-lair')
          )
        mouseindex -= 1
        if (squares[mouseindex -1] === squares[363]) {
        }
        break
      case 38:
        if(
          mouseindex - width >= 0 &&
          !squares[mouseindex -width].classList.contains('wall') &&
          !squares[mouseindex -width].classList.contains('ghost-lair')
          ) 
        mouseindex -= width
        break
      case 39:
        if(
          mouseindex % width < width - 1 &&
          !squares[mouseindex +1].classList.contains('wall') &&
          !squares[mouseindex +1].classList.contains('ghost-lair')
        )
        mouseindex += 1
        if (squares[mouseindex +1] === squares[392]) {
          mouseindex = 364
        }
        break
      case 40:
        if (
          mouseindex + width < width * width &&
          !squares[mouseindex +width].classList.contains('wall') &&
          !squares[mouseindex +width].classList.contains('ghost-lair')
        )
        mouseindex += width
        break
    }
    squares[mouseindex].classList.add('man')
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }
  document.addEventListener('keyup', movemouse)

  function pacDotEaten() {
    if (squares[mouseindex].classList.contains('pac-dot')) {
      score++
      scoreDisplay.innerHTML = score
      squares[mouseindex].classList.remove('pac-dot')
    }
  }

  function powerPelletEaten() {
    if (squares[mouseindex].classList.contains('power-pellet')) {
      score +=10
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      squares[mouseindex].classList.remove('power-pellet')
    }
  }

  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }

  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }

  ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
    ]

  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })

  ghosts.forEach(ghost => moveGhost(ghost))

  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      if(ghost.isScared && squares[ghost.currentIndex].classList.contains('man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
    checkForGameOver()
    }, ghost.speed)
  }

  function checkForGameOver() {
    if (squares[mouseindex].classList.contains('ghost') &&
      !squares[mouseindex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movemouse)
      setTimeout(function(){ alert("Game Over"); }, 500)
    }
  }
  function checkForWin() {
    if (score === 274) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movemouse)
      setTimeout(function(){ alert("You have WON!"); }, 500)
    }
  }
})
document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
    
  ]
function updateScore() {
    scoreDisplay.innerHTML = score
  }
 function pacDotEaten() {
    if (squares[mouseindex].classList.contains('pac-dot')) {
      score++
      updateScore() 
      squares[mouseindex].classList.remove('pac-dot')
    }
  }
function powerPelletEaten() {
    if (squares[mouseindex].classList.contains('power-pellet')) {
      score += 10
      updateScore() 
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      squares[mouseindex].classList.remove('power-pellet')
    }
  }
function checkForGameOver() {
    if (squares[mouseindex].classList.contains('ghost') &&
      !squares[mouseindex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movemouse)
      showmodal("Game Over! Your score is: " + score)
    }
  }
function checkForWin() {
    if (score === 274) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movemouse)
      showModal("You have WON! Your score is: " + score)
    }
  }
})
document.addEventListener('DOMContentLoaded', () => {
  const pauseButton = document.getElementById('pauseButton');
  const quitButton = document.getElementById('quitButton');
  pauseButton.addEventListener('click', () => {
    
    showModal('Game Paused'); 
  });
  quitButton.addEventListener('click', () => {
  
    showModal('Game Quit'); 
  });
});
function checkForGameOver() {
  if (squares[mouseindex].classList.contains('ghost') &&
    !squares[mouseindex].classList.contains('scared-ghost')) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId));
    document.removeEventListener('keyup', movemouse);

   
    showModal("Game Over! Your score is: " + score);
  }
}
function checkForWin() {
  if (score === 274) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId));
    document.removeEventListener('keyup', movemouse);

   
    showModal("You have WON! Your score is: " + score);
  }
}
function showModal(message) {
  const modal = document.getElementById('myModal');
  const modalText = document.getElementById('modal-text');
  modalText.innerHTML = message;

  const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
  };
window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  modal.style.display = "block";
}
