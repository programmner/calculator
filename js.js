var input=document.querySelector("input")
var button=document.querySelector("button")
button.addEventListener("click",function(){
	input.value=eval(input.value)
})