
let textarea = document.querySelector(".textArea");
let countBtn = document.querySelector(".countbtn");
let result = document.querySelector(".result");

countBtn.addEventListener("click", () => {
	let inputText = textarea.value;
	if (inputText === "") {
		alert("Please write or Paste text ");
	} else {
		let countWord = inputText.split(" ");
		let word = countWord.length;
		result.innerHTML = `Total words ${word}`;
	}
});
