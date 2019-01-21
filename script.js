var n, c = 0;
function navigate(n){
	if(n!=c)
	{
		var home = document.getElementsByClassName("home")[0];
		var rules = document.getElementsByClassName("rules")[0];
		var contacts = document.getElementsByClassName("contacts")[0];
		home.style.display = "none";
		rules.style.display = "none";
		contacts.style.display = "none";
		switch(n){
			case 0:
			{
				home.style.display = "block";
				c = 0;
				break;
			}
			case 1:
			{
				rules.style.display = "block";
				c = 1;
				break;
			}
			case 2:
			{
				contacts.style.display = "block";
				c = 2;
				break;
			}
			default:
		}
	}
}

var x=0;
function addMember(){
	x++;
	if(x<=3)
	{
		var parent = document.getElementsByClassName("members")[0];
		parent.appendChild(document.createElement("br"));
		parent.innerHTML += "<h4>- Member "+x+"</h4>";
		parent.appendChild(document.createElement("br"));
		parent.appendChild(document.createTextNode("Email "));
		var txtBox = document.createElement("input");
		txtBox.setAttribute("type", "text");
		parent.appendChild(txtBox);
		parent.appendChild(document.createElement("br"));
	}
}

function openReg(){
	var elem1 = document.getElementsByClassName("regContainer")[0];
	var elem2 = document.getElementsByClassName("register")[0];
	elem1.style.display = "block";
	elem2.style.transform = "translateY(0)";
	setTimeout(function(){
		elem1.style.opacity = 1;
	}, 1);
}

function closeReg(){
	var elem1 = document.getElementsByClassName("regContainer")[0];
	var elem2 = document.getElementsByClassName("register")[0];
	elem1.style.display = "none";
	elem2.style.transform = "translateY(-50%)";
	elem1.style.opacity = 0;
}