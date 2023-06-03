require('dotenv').config()


let encryptedList = [
  {'a': process.env.CARACTER_1},
  {'b': process.env.CARACTER_2},
  {'c': process.env.CARACTER_3},
  {'d': process.env.CARACTER_4},
  {'e': process.env.CARACTER_5},
  {'f': process.env.CARACTER_6},
  {'g': process.env.CARACTER_7},
  {'h': process.env.CARACTER_8},
  {'i': process.env.CARACTER_9},
  {'j': process.env.CARACTER_10},
  {'k': process.env.CARACTER_11},
  {'l': process.env.CARACTER_12},
  {'m': process.env.CARACTER_13},
  {'n': process.env.CARACTER_14},
  {'o': process.env.CARACTER_15},
  {'p': process.env.CARACTER_16},
  {'q': process.env.CARACTER_17},
  {'r': process.env.CARACTER_18},
  {'s': process.env.CARACTER_19},
  {'t': process.env.CARACTER_20},
  {'u': process.env.CARACTER_21},
  {'v': process.env.CARACTER_22},
  {'w': process.env.CARACTER_23},
  {'x': process.env.CARACTER_24},
  {'y': process.env.CARACTER_25},
  {'z': process.env.CARACTER_26},
  {'0': process.env.CARACTER_27},
  {'1': process.env.CARACTER_28},
  {'2': process.env.CARACTER_29},
  {'3': process.env.CARACTER_30},
  {'4': process.env.CARACTER_31},
  {'5': process.env.CARACTER_32},
  {'6': process.env.CARACTER_33},
  {'7': process.env.CARACTER_34},
  {'8': process.env.CARACTER_35},
  {'9': process.env.CARACTER_36}
];
/*
let encryptedList = {
  'a': "%",
  'b': "@",
  'c': "#",
  'd': "$",
  'e': "&",
  'f': "*",
  'g': "!",
  'h': "?",
  'i': "+",
  'j': "-",
  'k': "(",
  'l': ")",
  'm': "[",
  'n': "]",
  'o': "{",
  'p': "}",
  'q': "<",
  'r': ">",
  's': ":",
  't': ";",
  'u': ".",
  'v': ",",
  'w': "'",
  'x': "\"",
  'y': "/",
  'z': "\\",
  '0': "~",
  '1': "`",
  '2': "|",
  '3': "^",
  '4': "_",
  '5': "€",
  '6': "£",
  '7': "¥",
  '8': "¢",
  '9': "§"
}
*/
function encrypt() {
  let messageUser = document.getElementById('message').value.replace(/\s/g, '')
  let messageContainer = document.querySelector('.message')
  let encryptedMessage = ''
  
  for(let i = 0; i < messageUser.length; i++) {
    let verify = encryptedList[messageUser[i]]
    encryptedMessage += verify
  }

  messageContainer.innerHTML = `<div class="p-3">${encryptedMessage}</div>`
}