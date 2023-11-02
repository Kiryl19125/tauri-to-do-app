const { invoke } = window.__TAURI__.tauri;

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  console.log("add task function!!!")
  if (inputBox.value === "") {
    alert("You must enter the value!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}


window.addEventListener("DOMContentLoaded", () => {
  // greetInputEl = document.querySelector("#greet-input");
  // greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#submit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });

});

// window.addEventListener("DOMContentLoaded", () => {
  // greetInputEl = document.querySelector("#greet-input");
  // greetMsgEl = document.querySelector("#greet-msg");
  // document.querySelector("#submit-form").addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   addTask();
  // });

// listContainer.addEventListener("click", function(e) {
//   if (e.targer.tagName === "LI") {
//     e.target.classList.toggle("checked");
//   } else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//   }
// },false);
// });
// listContainer.addEventListener("click", function(e) {
//   if (e.targer.tagName === "LI") {
//     e.target.classList.toggle("checked");
//   } else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//   }
// },false);




// let greetInputEl;
// let greetMsgEl;
//
// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }
//
// window.addEventListener("DOMContentLoaded", () => {
//   greetInputEl = document.querySelector("#greet-input");
//   greetMsgEl = document.querySelector("#greet-msg");
//   document.querySelector("#greet-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     greet();
//   });
// });
