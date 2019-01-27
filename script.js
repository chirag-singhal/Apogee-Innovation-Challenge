var n, c = 0;
function navigate(n){
	if(hamCheck == 0)
	{
		var menu = document.getElementsByClassName("links")[0];
		menu.style.transform = "translateX(-100vw)";
		setTimeout(function(){
			var menu = document.getElementsByClassName("links")[0];
			document.getElementsByClassName("hamburger")[0].style.display = "block";
		}, 480);
		goHome();
	}
	if(n!=c)
	{
		var home = document.getElementsByClassName("home")[0];
		var rules = document.getElementsByClassName("rules")[0];
		var contacts = document.getElementsByClassName("contacts")[0];
		switch(n){
			case 0:
			{
				probcheck = 0;
				if(c == 1){
					rules.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 2){
					contacts.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				// setTimeout(function(){
				// rules.style.display = "none";
				// contacts.style.display = "none";
				// }, 400);
				setTimeout(function(){
				// home.style.display = "flex";
				home.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 0;
				break;
			}
			case 1:
			{
				probcheck = 0;
				if(c == 0){
				home.style.animation = "closeRegContainer 0.2s ease 1 forwards";
				}
				if(c == 2){
					contacts.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				// setTimeout(function(){
				// home.style.display = "none";
				// contacts.style.display = "none";
				// }, 400);
				setTimeout(function(){
				// rules.style.display = "block";
				rules.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 1;
				break;
			}
			case 2:
			{
				probcheck = 0;
				if(c == 1){
					rules.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 0){
					home.style.animation = "closeRegContainer 0.2s ease 1 forwards";
				}
				// setTimeout(function(){
				// home.style.display = "none";
				// rules.style.display = "none";
				// }, 400);
				setTimeout(function(){
				// contacts.style.display = "block";
				contacts.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
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
	if(x==1)
	{
		document.getElementsByClassName("regButton")[1].style.opacity = 1;
		document.getElementsByClassName("regButton")[1].disabled = false;
	}
	if(x==3)
	{
		document.getElementsByClassName("regButton")[0].style.opacity = 0.5;
		document.getElementsByClassName("regButton")[0].disabled = true;
	}
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

function removeMember(){
	x--;
	if(x==0)
	{
		document.getElementsByClassName("regButton")[1].style.opacity = 0.5;
		document.getElementsByClassName("regButton")[1].disabled = true;
	}
	if(x==2)
	{
		document.getElementsByClassName("regButton")[0].style.opacity = 1;
		document.getElementsByClassName("regButton")[0].disabled = false;
	}
	if(x>=0)
	{
		var parent = document.getElementsByClassName("members")[0];
		parent.removeChild(parent.lastChild);
		parent.removeChild(parent.lastChild);
		parent.removeChild(parent.lastChild);
		parent.removeChild(parent.lastChild);
		parent.removeChild(parent.lastChild);
		parent.removeChild(parent.lastChild);
	}
}

function openReg(){
	var elem1 = document.getElementsByClassName("regContainer")[0];
	var elem2 = document.getElementsByClassName("register")[0];
	elem1.style.display = "block";
	elem2.style.animation = "openReg 0.5s ease 1 forwards";
	elem1.style.animation = "openRegContainer 0.5s ease 1 forwards";
}

function closeReg(){
	var elem1 = document.getElementsByClassName("regContainer")[0];
	var elem2 = document.getElementsByClassName("register")[0];
	elem2.style.animation = "closeReg 0.5s ease 1 forwards";
	elem1.style.animation = "closeRegContainer 0.5s ease 1 forwards";
	setTimeout(function(){
		elem1.style.display = "none";
	}, 1000);
}

var prob = 0;
function nextProblem() {
		
	if(prob < 4)
	{
		prob++;
		probChange();
	}
	else
	{
		prob = 0;
		probChange();
	}
}
function prevProblem() {
		
	if(prob > 0)
	{
		prob--;
		probChange();
	}
	else
	{
		prob = 4;
		probChange();
	}
}

function probLoad(){
	
	window.addEventListener("keyup", function(e){
		if(e.key == "ArrowRight" | e.key == "ArrowUp")
			nextProblem();
		if(e.key == "ArrowDown" | e.key == "ArrowLeft")
			prevProblem();
	});


	var head1 = document.getElementsByClassName("heading1")[0];
	var head2 = document.getElementsByClassName("heading2")[0];
	var content = document.getElementsByClassName("content")[0];
	var img = document.getElementsByClassName("main")[0];


	
	var h1 = document.createElement("H1");
	var t1 = document.createTextNode(problem.head1[prob]);
	h1.appendChild(t1);
	head1.innerHTML = "";
	head1.appendChild(h1);
	

	var h2 = document.createElement("H1");
	var t2 = document.createTextNode(problem.head2[prob]);
	h2.appendChild(t2);
	head2.innerHTML = "";
	head2.appendChild(h2);
	
	var r1 = document.createElement("h6");
	var rt = document.createTextNode(problem.rewards[prob]);
	r1.appendChild(rt);
	var p1 = document.createElement("p");
	var t3 = document.createTextNode(problem.content[prob]);
	p1.appendChild(t3);
	content.innerHTML = "";
	content.appendChild(r1);
	content.appendChild(p1);


	img.src = problem.img[prob];

}
function probChange(){
	var head1 = document.getElementsByClassName("heading1")[0];
	var head2 = document.getElementsByClassName("heading2")[0];
	var content = document.getElementsByClassName("content")[0];
	var img = document.getElementsByClassName("main")[0];


	
	head1.style.animation = "closeRegContainer 0.5s ease 1 forwards";
	setTimeout(function(){
		var h1 = document.createElement("H1");
		var t1 = document.createTextNode(problem.head1[prob]);
		h1.appendChild(t1);
		head1.innerHTML = "";
		head1.appendChild(h1);
		head1.style.animation = "openRegContainer 0.5s ease 1 forwards";
	}, 500);


	head2.style.animation = "closeRegContainer 0.5s ease 1 forwards";
	setTimeout(function(){
		var h2 = document.createElement("H1");
		var t2 = document.createTextNode(problem.head2[prob]);
		h2.appendChild(t2);
		head2.innerHTML = "";
		head2.appendChild(h2);
		head2.style.animation = "openRegContainer 0.5s ease 1 forwards";
	}, 500);	


	content.firstElementChild.style.animation = "closeReg 0.5s ease 1 forwards";
	content.lastElementChild.style.animation = "closeReg 0.5s ease 1 forwards";
	setTimeout(function(){
		var r1 = document.createElement("h6");
		var rt = document.createTextNode(problem.rewards[prob]);
		r1.appendChild(rt);
		var p1 = document.createElement("p");
		var t3 = document.createTextNode(problem.content[prob]);
		p1.appendChild(t3);
		content.innerHTML = "";
		content.appendChild(r1);
		content.appendChild(p1);
	content.firstElementChild.style.animation = "openReg 0.5s ease 1 forwards";
	content.lastElementChild.style.animation = "openReg 0.5s ease 1 forwards";
	}, 500);	


	img.style.animation = "closeProb 0.5s ease 1 forwards";
	setTimeout(function(){
		img.src = problem.img[prob];
	img.style.animation = "openProb 0.5s ease 1 forwards";
	}, 500);
}
var problem = 
{
    head1: ["REFLEXIS ", "ZU", "ANT S", "GE HEA", "NETS"],
    head2: [" SYSTEMS", "LIP", "TUDIO", "LTHCARE", "KOPE"],
    rewards: ["Rs.50,000/- + Summer Internships", "Rs.40,000/-", "Rs.30,000/- + Summer Internships", "Summer Internships", "Rs.1,00,000/-"],
    content: [
    "Reflexis is the leading provider of real-time store operations solutions having been selected by more than 250 global retailers to simplify store operations, optimize labor spend, and improve store execution. The Reflexis ONE real-time work platform helps retailers drive simplification for stores and improved line-of-sight for field management resulting in significant time savings, precise execution, and superior customer experience.",
    "Zulip, a GSoC company from past 3 years. Zulip deals with creating the perfect hybrid of online group chat and email threading model. A 100% open source software, Zulip works on latest technologies and thus has a high-quality code base.",
    "A miscellany of Architecture, Nature, and Technology inspired by teamwork and intelligence of Ants, the Ant Studio works with a motive to bridge the gap between craft and machinery, hence pushing for designs that go beyond functional and aesthetic concern to concoct an affiliation between the built and natural.",
    "GE Healthcare is an American multinational conglomerate incorporated in New York and headquartered in Chicago, Illinois. As of 2017, the company is a manufacturer and distributor of diagnostic imaging agents and radiopharmaceuticals for imaging modalities that are used in medical imaging procedures. The company offers dyes that are used in magnetic-resonance-imaging procedures. GE Healthcare also manufactures medical diagnostic equipment including CT image machines.",
    "Netskope, Inc. is an American software company founded in 2012 that helps companies protect data and protect against threats in cloud applications, cloud infrastructure, and the web. Netskope is in a category of technology classified by Gartner as cloud access security brokers. Netskope is recognized as a leader in the Gartner Magic Quadrant for Cloud Access Security Brokers."
    ],
    img: ["svg/reflexis.jpg", "svg/zulip.jpg", "svg/antstudio.jpg", "svg/GE_Healthcare.jpg", "svg/netskope.jpg"]
}
var probcheck = 0;
function viewProblem(){
	probcheck = 1;
	var probElem = document.getElementsByClassName("prob")[0];
	var home = document.getElementsByClassName("home")[0];
	var rules = document.getElementsByClassName("rules")[0];
	var contacts = document.getElementsByClassName("contacts")[0];
	// var logo = document.getElementsByClassName('logo')[0];
	// logo.style.display = "none";
	// probElem.style.display = "block";
	// var circle = document.getElementsByClassName("circle")[0];
	// circle.style.display = "none";
	probElem.style.animation = "openProb 0.5s cubic-bezier(.05,.75,.19,.93) forwards";
	probLoad();
	setTimeout(function(){
	if(c == 1){
		rules.style.animation = "closeRegContainer 0.5s ease 1 forwards";
	}
	if(c == 0){
		home.style.animation = "closeRegContainer 0.2s ease 1 forwards";
	}
	if(c == 2){
		contacts.style.animation = "closeRegContainer 0.5s ease 1 forwards";
	}
	},100)
}
function goHome(){
	var probElem = document.getElementsByClassName("prob")[0];
	var home = document.getElementsByClassName("home")[0];
	var rules = document.getElementsByClassName("rules")[0];
	var contacts = document.getElementsByClassName("contacts")[0];
	if(probcheck == 1){
		probElem.style.animation = "closeProb 0.5s ease-in forwards";
	}
	if(c == 1){
		rules.style.animation = "openRegContainer 0.5s ease 1 forwards";
	}
	if(c == 0){
		home.style.animation = "openRegContainer 0.2s ease 1 forwards";
	}
	if(c == 2){
		contacts.style.animation = "openRegContainer 0.5s ease 1 forwards";
	}
	probcheck = 0;
	// var circle = document.getElementsByClassName("circle")[0];
	// circle.style.display = "block";
	// setTimeout(function(){
	// 	probElem.style.display = "none";
	// }, 500);
}

var hamCheck = 1;
function openMenu(){
	var menu = document.getElementsByClassName("links")[0];
	menu.style.display = "flex";
	setTimeout(function(){
		menu.style.transform = "translateX(0)";
	},10);
	document.getElementsByClassName("hamburger")[0].style.display = "none";
	hamCheck = 0;
}
function closeMenu(){
	  var menu = document.getElementsByClassName("links")[0];
	  menu.style.transition = "0.5s cubic-beizer(.6,.15,.89,.53)";
	menu.style.transform = "translateX(-100vw)";
	setTimeout(function(){
		document.getElementsByClassName("hamburger")[0].style.display = "block";
	}, 150);
}
