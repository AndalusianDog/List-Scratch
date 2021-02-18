// guardar datos
var myList = (JSON.parse(localStorage.getItem("myData")) || [])

// crear ideas
function createItem() {
	var newItem = {text:window.prompt("Tu nueva idea va aqui"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData", JSON.stringify(myList))
	printItem(newItem)
}

// print items
function printItem(item) {
	var p = document.createElement("p")
	p.innerHTML = item.text
	p.className = item.style
	p.onclick = function () {
		this.className = item.style = (this.className=="none") ? "strike" : "invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(p)
}

// loop y print lista
for (x=0; x < myList.length; x++) {printItem(myList[x])}