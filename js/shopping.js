'use sticts;'
let mytable = document.querySelector("#itemslist")
mytable.innerHTML=''


function onAdd(){
	let input = document.querySelector("#items")
	let tr = document.createElement("tr")
	let td = document.createElement("td")
	td.innerHTML = input.value
	tr.appendChild(td)
	mytable.appendChild(tr)
}