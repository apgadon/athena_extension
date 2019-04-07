
(function(){
		var tab_text = "";
		//get every text element on page, tab_text
		var p_el = document.getElementsByTagName('p');
		for(var i = 0; i < p_el.length; i++){
			var hold = p_el;
			while(hold.childNodes != undefined){
				hold = hold.childNodes;
			}
			for(var j = 0; (j < hold.length && tab_text.length < 5120); j++){
				tab_text = tab_text + hold[j].innerHTML;
			}
		}

		getSentiment(tab_text);
		//call sentiment API
		function getSentiment(t_text) {
			t_text = t_text.substring(0, 2149);
		    var documents = { documents: [{ language: "en", id: "1", text: t_text }] };
		    var myJSON = JSON.stringify(documents);
		    var xhr = new XMLHttpRequest();
		    xhr.open("POST", "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment", true);
		    xhr.setRequestHeader("Content-Type", "application/json");
		    xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "694c5a135b204009a0bc44dbc7637e8d");
		    xhr.send(myJSON);

		    xhr.onreadystatechange = function () {
		        if (xhr.readyState == 4) {
		            var response = xhr.responseText;
		            var response = response.substring(response.lastIndexOf("score\":"), response.indexOf("}],"));
		            response = response.replace("score\":", "");
		            formatWindow(response);
		            
		        }
		    }
		}

	function formatWindow(res) {

	var perc = (res * 100);
	perc = perc - (perc % 1);
	//calculate colors #3c3e50	#44495e
	var c3a = 0x3c3e50 + (perc * 0xffff);
	c3a = "#" + c3a.toString(16);
	alert(c3a);
	var c4a = "#44495e";

	var cssvar_inj = document.createElement('style');
	cssvar_inj.textContent = ':root { --z: 99998; --z2: 99999;'
	    + '--color1:' + c3a + '; --color2:' + c4a + ';}'
		+ 'h1 { font-family: "Segoe UI", Tahoma, sans-serif;}'
		+ '#mainextwindow * {font-weight: 200 !important; color:#f2f2f2 !important; padding: 10px !important;}'	//selects all extension text
		;
	
	document.head.appendChild(cssvar_inj);

	//<meta charset="UTF-8">
	var encoding_inj = document.createElement('meta');
	encoding_inj.setAttribute("charset", "UTF-8");
	document.head.appendChild(encoding_inj);

	var div_inj = document.createElement('div');
	div_inj.setAttribute("style", "z-index: var(--z); position: fixed; top: 10px; right: 10px;  width: 357px; height: 357px; background: linear-gradient(90deg, var(--color1) 0%, var(--color2) 100%); border: 15px solid var(--color2); border-radius:1%; border-bottom-left-radius: 10%; border-bottom-color: var(--color1); border-left-color: var(--color1); background-color: var(--color2);");
	div_inj.setAttribute("id", "mainextwindow");
	document.body.appendChild(div_inj);
	//THESE (div_inj and extbtn_inj) HAVE TO BE NEXT TO EACH OTHER
	//exit button
	var extbtn_inj = document.createElement('button');
	extbtn_inj.textContent = '×';
	extbtn_inj.setAttribute("style", "z-index: var(--z2); position: absolute; border: 0px; background-color:var(--color2); top:1%; left:90%; font-weight: bold;");
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

	//LIST OF SOMETHING
	var p_inj = document.createElement('P');
	p_inj.textContent = "This page is " + perc + "% positively worded.";
	div_inj.appendChild(p_inj);	
	}
})();

/*TEMPLATE

var _inj = document.createElement('');
_inj.textContent = ;
_inj.setAttribute("style", "");
div_inj.appendChild(_inj);
*/