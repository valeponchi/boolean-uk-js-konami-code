// // https://en.wikipedia.org/wiki/Konami_Code
// - Google for Konami code so you can check the sequence of keys that have to be pressed
// - Create a section after the logo with the code sequence inside as a reference for the User, You can come up with the style for it.
// - Listen for keyboard inputs, and keep track if the user is pressing the keys sequence in the right order. The code should reset if you make a mistake
// - If the User input the right sequence, make the logo spin

// Tips
// - Think about how you can keep track of the user inputs. 
// - HTML and CSS can be changed with Javascript

// Challenge
// Give users some feedback as they correctly press the keys of the sequence

// Challenge two
// Add a second sequence to the page, and give the user the choice of which one to play!

let current = 0
let current1 = 0
let win = false
let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
 console.log(pattern)
let pattern2 = ['a', 'b', 'c']


let keyHandler = function(event) {
  if (event.key === pattern[current]){
    console.log(pattern[current] + ` correct`)
    current++
    
    alert(`you are unlocking a secret pattern! what's the next one?`) //let the user know he is doing the right thing each step
    if ((pattern[current] === pattern[10]) && (win === false)) {
      win = true
      alert(`You opened the pandora box: 10 extra lives for you!!`)
    } 

  } else {
    current = 0
    console.log(`reset`)
    alert(`wrong sequence!`)
  } 
   
}



  document.addEventListener('keydown', keyHandler, false)






// if (pattern.includes(event.key)) {
// console.log(`presente`)
// } else {console.log(`non presente`)}

// if (pattern.indexOf(event.key) < 0) //if the key pressed is not in the array
// current = 0
// console.log(pattern.indexOf(event.key))







