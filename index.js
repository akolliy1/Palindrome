const input = document.querySelector('#input');
const output = document.querySelector('#output');
const entry = document.querySelector('#entry');
const insertBtn = document.querySelector('#insert button');
const ulConatiner = document.querySelector('#display');
const output_H4 = document.querySelector('#output h4')
const output_H6 = document.querySelector('#output h6')

/**
 * @description is a palindrome
 * @function palindrome
 * @param {*} str
 * @returns {boolean} boolean
 */
function palindrome(str){
	let removewhiteSpace = str.replace(/\s/gi, '');
		removewhiteSpace = removewhiteSpace.replace(',', '');
        removewhiteSpace = removewhiteSpace.replace(';', '');
        removewhiteSpace = removewhiteSpace.replace('.', '');
	const strArr = removewhiteSpace.split('');
	const newStr = [];
	for(let i = strArr.length -1; i >= 0; i--){
		newStr.push(strArr[i]);
	}
	const convertStr = newStr.join('');
	if(convertStr === removewhiteSpace){
		return true
	}
	return false
}



/**
 * @description mould the html content
 * @function moulder
 * @param {*} word 
 * @param {*} appendParent 
 * @returns {void} htmlContent
 */
function moulder(word, appendParent) {
	const list_per_Chart = 0;

	for (let i = 0; i >= list_per_Chart; i--) {
		let listChild = document.createElement('li')
		listChild.innerHTML = word;
		appendParent.appendChild(listChild)
	}
	return appendParent;
}



/**
 * @description Display all context to browser
 * @function talkToClient
 * @param {*} word 
 * @borrows palindrome
 * @borrows moulder
 */
function talkToClient(word) {
	const wrong = 'Oh no!, that is not a palindrome';
	const right = 'Great!, It is a palindrome';

	const mould = moulder(word, ulConatiner);
	entry.appendChild(mould);

	const ispalindrome = palindrome(word);

	if (ispalindrome) {
		output_H4.innerHTML = right;
		output_H6.innerHTML = word;
	} else {
		output_H4.innerHTML = wrong;
		output_H6.innerHTML = word;
	}
}


input.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		const word = event.target.value;
		if (word == '') {
			return
		}

		talkToClient(word)
	}
})
insertBtn.addEventListener('click', function (event) {
	const word = input.value;
	if (word == '') {
		return
	}

	talkToClient(word)
})