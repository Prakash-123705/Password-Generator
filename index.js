const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "~`!@#$%^&*()_-+={[}]|:;<>,.?/";

const n1 = document.getElementById("name1");
const n2 = document.getElementById("name2");
const len = document.getElementById("length");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

function generate() {
    const length = Number(len.value);
    if (!length || length <= 0) {
        alert("Please enter a valid password length");
        return;
    }
    let characters = "";
    if (upper.checked) characters += upperChars;
    if (lower.checked) characters += lowerChars;
    if (number.checked) characters += numberChars;
    if (symbol.checked) characters += symbolChars;

    if (characters.length === 0) {
        alert("Select at least one character type");
        return;
    }

    n1.value = "";
    n2.value = "";

    for (let i = 0; i < len.value; i++) {
        n1.value += characters[Math.floor(Math.random() * characters.length)];
        n2.value += characters[Math.floor(Math.random() * characters.length)];
    }
}
function copyPassword(id) {
    const input = document.getElementById(id);
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    alert("password copied");
}