const input = document.querySelector("#favchamp");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
li.textContent = input.value;
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";

list.appendChild(li);

input.focus();