var ad = document.createElement('ad');


function addElement(){
	var newDiv = document.createElement("div");
	var content = document.createTextNode("random ad");
	newDiv.appendChild(content);
	var button = document.createElement("BUTTON");
	var btext = document.createTextNode("X");
	button.appendChild(btext);
	wrapper.style.backgroundImage = "url('amazonMoney.jpg')";
	wrapper.style.backgroundSize = "100% 100%";
	wrapper.style.textShadow = "1px 1px"
	button.style.position = "absolute";
	button.style.right=0;
	button.style.top = 0;
	wrapper.style.height = "200px";
	wrapper.style.width = "40%";
	wrapper.style.border = "2px solid"
	wrapper.style.margin = "10% auto";
	wrapper.style.position = "relative";
	newDiv.style.textAlign= "center";
	newDiv.style.position = "relative";
	newDiv.style.top= "50%";
	newDiv.style.fontSize = "3em";
	var addingToDiv = document.getElementById("wrapper");
	addingToDiv.appendChild(newDiv);
	addingToDiv.appendChild(button);
	button.addEventListener('click',function(){
	wrapper.style.display = "none"
	})
}	
function startAd(){
	setTimeout(addElement,3000)
}

window.addEventListener("load",startAd);