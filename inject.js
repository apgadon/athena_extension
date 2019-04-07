
(function() {
	/*
	const cssurl = chrome.runtime.getURL('\/stylesheet.css');
	alert(cssurl);
	doSomething(cssurl);
	function doSomething(desfile){
		alert(desfile);
		var css_link = document.createElement("SCRIPT");
		css_link.setAttribute("src", desfile);
		document.body.appendChild(css_link);
	}
	*/
	var cssvar_inj = document.createElement('style');
	cssvar_inj.textContent = ':root { --z: 99998; --z2: 99999;'
	    + '--color1: #efd5ff; --color2: #515ada; --color3: #3c3e50; --color4: #44495e;}'
		+ 'h1 { padding: 10px; font-family: "Segoe UI", Tahoma, sans-serif; font-weight: 200; }'
		+ '#mainextwindow * {color:#f2f2f2 !important}'	//selects all extension text
		;
	
	document.head.appendChild(cssvar_inj);

	//<meta charset="UTF-8">
	var encoding_inj = document.createElement('meta');
	encoding_inj.setAttribute("charset", "UTF-8");
	document.head.appendChild(encoding_inj);

	var div_inj = document.createElement('div');
	div_inj.setAttribute("style", "z-index: var(--z); position: fixed; top: 10px; right: 10px;  width: 357px; height: 357px; background: linear-gradient(90deg, var(--color3) 0%, var(--color4) 100%); border: 15px solid var(--color4); border-radius:1%; border-bottom-left-radius: 10%; border-bottom-color: var(--color3); border-left-color: var(--color3); background-color: var(--color4);");
	div_inj.setAttribute("id", "mainextwindow");
	document.body.appendChild(div_inj);
	//THESE (div_inj and extbtn_inj) HAVE TO BE NEXT TO EACH OTHER
	//exit button
	var extbtn_inj = document.createElement('button');
	extbtn_inj.textContent = '×';
	extbtn_inj.setAttribute("style", "z-index: var(--z2); position:absolute; border: 5px solid var(--color4); background-color:var(--color4); border-bottom-left-radius: 50%; border-bottom-color: var(--color3); border-left-color: var(--color3); top:-2%; left:90%; font-weight: bold;");
	extbtn_inj.setAttribute("id", "exit");
	div_inj.appendChild(extbtn_inj);

	//content
	var title_inj = document.createElement('h1');
	title_inj.textContent = "Here's a Title";
	title_inj.setAttribute("style", " padding: 10px; font-family: \"Segoe UI\", Tahoma, sans-serif; font-weight: 100;");
	div_inj.appendChild(title_inj);


	//listener for exit button, deletes window
	extbtn_inj.addEventListener("click", function(){
		var div_rm = document.getElementById("mainextwindow");
		div_rm.innerHTML = "";
		div_rm.setAttribute("style", "display:none;");
		var bluh = div_rm.parentNode;
		bluh.removeChild(div_rm);
	});

	



})();

/*TEMPLATE

var _inj = document.createElement('');
_inj.textContent = ;
_inj.setAttribute("style", "");
div_inj.appendChild(_inj);
*/