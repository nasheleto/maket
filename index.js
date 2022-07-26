const lines = [...document.querySelectorAll('.line')].sort((a, b) => +a.className.slice(9) - +b.className.slice(9))
const rotations = lines.map(_ => random(-15, 15) * 90)

const valid = {
  line1: [0, 180],
  line2: [0],
  line3: [0],
  line4: [0],
  line5: [0],
  line6: [0],
  line7: [0],
  line8: [0],
  line9: [0, 180],
  line10: [0, 180],
  line11: [0, 180],
  line12: [0, 180],
  line13: [0, 180],
  line14: [0, 180],
  line15: [0, 180],
  line16: [0]
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function checkWin() {
  for(let i = 0; i < rotations.length; i++) {
    const rotation = Math.abs(rotations[i] % 360)

    const line = valid[`line${i+1}`]

    if(!line.includes(rotation)) return false
  }

  return true
}

for(let i = 0; i < lines.length; i++){
  const line = lines[i]

  line.style.transform = `rotate(${rotations[i]}deg)`;

	line.onclick = function(e){
    rotations[i] += 90

    line.style.transform = `rotate(${rotations[i]}deg)`;

    const win = checkWin()

    if(win) {
      setTimeout(() => alert('You win!'), 500)
    }
  }
}

for(const line of lines) {
  line.style.transition = '500ms'
}
