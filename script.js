const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const slider = document.getElementById("slider");
const rangeReading = document.getElementById("rangeReading");
const generateBtn = document.getElementById("generate-btn");
const passwordA = document.getElementById("password1");
const passwordB = document.getElementById("password2");
const passwordABtn = document.getElementById("btnPasswordA");
const passwordBBtn = document.getElementById("btnPasswordB");

slider.oninput = () => {
  rangeReading.textContent = slider.value;
};

rangeReading.textContent = slider.value;

function randomCharacter() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function generatePassword() {
  let passwordLength = Number(slider.value);
  let passwordA = "";
  let passwordB = "";

  for (let i = 0; i < passwordLength; i++) {
    passwordA += randomCharacter();
    passwordB += randomCharacter();
  }
  password1.textContent = passwordA;
  password2.textContent = passwordB;
}

generateBtn.addEventListener("click", generatePassword);

function copyText() {
  const text = document.getElementById("password1").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("text is copied");
    })
    .catch((err) => {
      console.log("failed to copy");
    });
}

function copyText(elementToCopy, button) {
  let chosenElement = document.getElementById(elementToCopy);
  let text = chosenElement.innerText;

  navigator.clipboard.writeText(text).then(function () {
    let originalText = button.innerText;

    button.innerText = "Copied!";

    setTimeout(function () {
      button.innerText = originalText;
    }, 2000);
  });
}
