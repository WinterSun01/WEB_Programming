// JavaScript source code

let dom = document.querySelector("#dom");
console.log(dom);
if (dom)
{
	dom.before('before()');
	dom.after('after()');
	console.log(dom.outerHTML);
	console.log(dom.innerText);
	let counter = document.getElementById("number");
	console.log(counter.style.cssText);
	counter.style.cssText += "background-color:darkblue;color:white;";
	dom.replaceWith(counter);
}

//append() - добавляет значение после содержимого элемента;
//prepend()- добавляет значение перед содержимым элемента;
//before() - добавляет значение перед открывающим дескриптором;
//after()  - добавляет значение после закрывающего дескриптора;
//replaceWith()