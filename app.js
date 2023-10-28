// chapter 38- 42--------------------------

// 1
const power = (a, b) => {
  return a ** b;
}
alert(power(2,3))

// 2

let year = +prompt(`ENTER ANY YEAR`)

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      alert(`leap year`)
    } else {
      alert(`not leap year`)
    }
  } else {
   alert(`leap year`)
  }
} else {
  alert(`not leap year`)
}

//  3
const triangleArea = (a, b, c) => {
  let s = (a + b + c) / 2;
  return (s * (s - a) * (s - b) * (s - c)) ** (1 / 2)
}
alert(triangleArea(3, 4, 5))

// 4
const average = (x, n) => {
  return x / n
}
const percentage = (x,n) => {
  return (x / n)*100;
  }
const mainFunction = (a, b, c) => {
  let sum = a + b + c;
  let totalMarks = 300;
  alert(average(sum, 3))
  alert(percentage(sum,totalMarks))
}
mainFunction(50,70,50)

//  5
const array = [1,2,3,4,5,6,7,8,9,10]
const fruits = [`apple`,`orange`,`banana`,`grapes`]
const Indexof = (ele,array) => {
  for(index in array) {
    if(ele === array[index]){
      return index;
    }
  }
}
alert(Indexof(`orange`,fruits))

// 6
const sentence = prompt(`ENTER ANY SENTENCE`)
const vowelDeleter = (input) => {
const regex= /[aeiou]/gi
const noVowelSentence = input.replace(regex,"")
alert(noVowelSentence)
}
vowelDeleter(sentence)

// 7
const sentence = prompt(`ENTER ANY SENTENCE`)
const vowels = ['a',`e`,`i`,`o`,`u`,`A`,`E`,`I`,`O`,`U`]
const succesiveVowelDetector = (input) => {
let succesiveVowels = [];
for(let i=0;i<input.length;i++){
  switch(vowels.includes(input[i]))  {
    case true :
      if(vowels.includes(input[i+1]))
        succesiveVowels.push(input.slice(i,i+2))
      break;
    case false :
      break;
  }
}
alert(succesiveVowels)
}
succesiveVowelDetector(sentence)

// 8
let distance = prompt(`Enter distance between cities`)
const inMeters = (dist) => {
  return dist*1000
}
const inCentiMeters = (dist) => {
  return dist*100000
}
const inFeet = (dist) => {
  return dist*3281
}
const inInches = (dist) => {
  return dist*39370.1 
}

document.write(`${distance} km = ${inMeters(distance)} m <br>`)
document.write(`${distance} km = ${inCentiMeters(distance)} cm <br>`)
document.write(`${distance} km = ${inFeet(distance)} ft <br>`)
document.write(`${distance} km = ${inInches(distance)} inches <br>`)

// 9
let hrs = prompt(`Enter hours you have worked`)
const overTimePay = (hrs) => {
  let l = hrs - 40;
  if(hrs > 40 ){
    document.write(`You have earned ${l*12} rupees for ${l} extra hours`)
  }
  else alert(`No extra payment`)
}
overTimePay(hrs)

// 10
let amount = +prompt(`Enter your amount`)
const ATM = (amount) => {
const notesAvailable = [100,50,10]
const notes = [];
while(amount>0) {
  for(note of notesAvailable) {
        while(amount>=note) {
          amount -= note;
          notes.push(note)
  }
}
}
  const notesObj = {};
  for(ele of notes) {
    notesObj[ele] = (notesObj[ele] || 0) +1 ;
  }
  
document.write(`you will have ${notesObj[100] || `no`} hundred note(s), ${notesObj[50] || `no`} fifty note(s) and ${notesObj[10] || `no`} ten note(s)`)
  
}

ATM(amount);
  // const tens = notes.filter(ele => ele ===10).length
  // const fifties = notes.filter(ele => ele ===50).length
  // const hundreds = notes.filter(ele => ele ===100).length
