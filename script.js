const showMessageButton = document.getElementById("showMessageButton");
const hiddenMessage = document.getElementById("hiddenMessage");

showMessageButton.addEventListener("click", () => {
    hiddenMessage.style.display = "block";
});
