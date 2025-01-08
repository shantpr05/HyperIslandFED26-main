
document.getElementById("button1").setAttribute("onclick", "handleButton1Click()");

function handleButton1Click() {
  alert("Button 1 clicked using Inline Event Handler!");
}
const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("Button 2 clicked using DOM Level 0 Event Handler!");
};

const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
  alert("Button 3 clicked using DOM Level 2 Event Listener!");
});

const buttonContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    if (target.id === "button4") {
      alert("Button 4 clicked using Event Delegation!");
    } else if (target.id === "button5") {
      alert("Button 5 clicked using Event Delegation!");
    }

    event.stopPropagation();
  }
});
const parentContainer = document.getElementById("buttonContainer");

parentContainer.addEventListener("click", () => {
  console.log("Parent container clicked!");
});

