
let textarea = document.querySelector(".textArea");
let countBtn = document.querySelector(".countbtn");
let result = document.querySelector(".result");

countBtn.addEventListener("click", () => {
	let inputText = textarea.value;
	if (inputText === "") {
		alert("Please write or Paste text ");
	} else {
        let countChar = inputText.split("");
        let char = countChar.length;
		result.innerHTML = `Total Characters ${char}`;
	}
});
