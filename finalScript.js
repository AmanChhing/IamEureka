var outputYou = document.querySelector('.output-you');
var outputBot = document.querySelector('.output-bot');
//const songpickedhtml = document.querySelector('.song-picked');
var url = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/4cd5f898-0879-4a56-bf96-4220a1c0654e?verbose=true&timezoneOffset=0&subscription-key=51f106d2672240958a1f931a8d02eae3&q="
var topscoringintent = ""
var songpicked = ""
var youtubeoplist = ""
var inputarray = [];

var rltdvidModal = document.getElementById("rltdvidModal");
var rltdquesModal = document.getElementById("rltdquesModal");
var addrltdques = document.getElementById("RltdQuesdiv");
// Get the button that opens the modal
var rltdvidbtn = document.getElementById("rltdvid");
var rltdquesbtn = document.getElementById("rltdques");
// Get the <span> element that closes the modal
var rltdvidspan = document.getElementsByClassName("close")[0];
var rltdquesspan = document.getElementsByClassName("close")[1];




var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
//say("Hi there, i am Jarvis music. tell me to play anything and i will do so.")

document.querySelector('button').addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('speechstart', () => {
  console.log('Speech has been detected.');
});

recognition.addEventListener('result', (e) => {
  console.log('Result has been detected.');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;
  

  document.getElementById("InputText").value = text;
  getjsonfile();
  console.log('Confidence: ' + e.results[0][0].confidence);
});

recognition.addEventListener('speechend', () => {
  recognition.stop();
});

recognition.addEventListener('error', (e) => {
  outputBot.textContent = 'Error: ' + e.error;
});

function synthVoice(text) {
  var synth = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
}

function getjsonfile() 
{
	removeIFrame();
	if(document.getElementById("InputText").value === "")
	{
		alert("Oophs! seems your input value is empty, Please enter something or use the mic to say something!");
	}
	else
	{
		AddToInputList(document.getElementById("InputText").value);
		$.getJSON(url+document.getElementById("InputText").value, function(data) {
    		window.topscoringintent = data.topScoringIntent.intent.toString();
		playsongornot(data)
		});
	}
}

function playsongornot(data)
{
	
	if(window.topscoringintent.toLowerCase() === "play")
	{

		for(var i = 0; i < data.entities.length ; i++)
		{
			window.songpicked += data["entities"][i].entity.toString() + " "
		}
		if(window.songpicked != "")
		{
			outputBot.textContent = "Sure, Playing : " + window.songpicked;
			say("Sure, Playing : " + window.songpicked);
			gapi.load('client', playsong)
			
		}
		else
		{
		outputBot.textContent = "I'm sorry, i couldn't hear what you want me to play, please repeat again using keywords like play."
		say("I'm sorry, i couldn't hear what you want me to play, please repeat again using keywords like play, music,start song etc..")
		}
		
	}
	else if(window.topscoringintent.toLowerCase() === "googlesearch")
	{
		StartSearch(data.query)
	}
	else
	{
	outputBot.textContent = "I'm sorry, i don't have it's answer right now. but i'm always learning"
	say("I'm sorry, i don't have it's answer right now.but i'm always learning")
		
	}
	
}



function playsong()
{
	//gapi.load('466240921973-3ig72n53f5p11fluka1ev4f5el3qm4ca.apps.googleusercontent.com', search)
	var searchTerm = window.songpicked
 	var apiKey = "AIzaSyAymbD4C8RpXxAYNuUMvIl47nQY5hahEg4"
  	gapi.client.init
	({
    		'apiKey': apiKey, 
    		'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  	}).then(function()
	{
    		return gapi.client.youtube.search.list
		({
      			q: searchTerm,
      			part: 'snippet'
    		});
  	}).then(function(response) 
		{
		
		var searchResult = response.result;
    		var firstVideo = searchResult.items[0]
		var url = "https://www.youtube.com/embed/"+(firstVideo.id.videoId).toString()+"?autoplay=1&enablejsapi=1&list=RD"+(firstVideo.id.videoId).toString()+"&start_radio=1"	
		var iDiv = document.getElementById('block')
		var ifrm = document.createElement("iframe")
        ifrm.setAttribute("src", url)
		ifrm.setAttribute("id", "target")
		ifrm.className = 'iframeclass';
		ifrm.setAttribute("allow","autoplay")
		ifrm.setAttribute("frameborder","0")
		ifrm.setAttribute('allowFullScreen', '')
		ifrm.setAttribute('picture-in-picture', '')
		$("<style>").text("#target { position: absolute; top: 0px; left: 0px; width: 80%; height: 60%; }").appendTo("head");
		iDiv.appendChild(ifrm);
		//sheet.insertRule("@media only screen and (max-width : 768px) { #target { position: absolute; width: 90%; height: 60%; } }");
		var divFirst = document.getElementById("target")
		divFirst.scrollIntoView(false)
		
  		});

}

function removeIFrame() {
	window.songpicked = "";
	outputBot.textContent = "...";
	document.getElementById("block").innerHTML ="";
	document.getElementById("EurekaOutput").innerHTML ="";
	addrltdques.innerHTML ="";
        //frame.parentNode.removeChild(div);
	//document.getElementById("block").removeChild(target);
	//frame.innerHTML = "";
    }

function say(m) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  //msg.voice = voices[10];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 0.95;
  msg.pitch = 1;
  msg.text = m;
  msg.lang = 'hi-EN';
  speechSynthesis.speak(msg);
}

function AddToInputList(text)
{
	//alert(text);
	if(window.inputarray.length < 10)
	{
		//alert(text);
		if(!window.inputarray.includes(text))
		{
		window.inputarray.push(text);
		}
	}
	var mycars = new Array();
//Create and append the options
	for (var i = 0; i < window.inputarray.length; i++) {
    	mycars[i]= window.inputarray[i];
	}

  	var options = '';
  	for(var i = 0; i < mycars.length; i++)
    	options += '<option value="'+mycars[i]+'" />';

  	document.getElementById('cars').innerHTML = options;
}
var input = document.getElementById("InputText");
input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        getjsonfile();

    }
});




function StartSearch(querytosearch)
{
	var MyQuery = querytosearch.toString();
	var mylocation = "";
	$.get("https://ipinfo.io?token=d5ab99a99519fb", function(response) {
  	mylocation = response.city+","+response.region+",India";
  	StartTheSearch(MyQuery,mylocation);
	});
	
}

function StartTheSearch(MyQuery,MyLocation)
{
//alert(MyQuery)
//alert(MyLocation)
	var Eurekaoutput = document.getElementById("EurekaOutput");
	var EurekaText = ""
	if(MyQuery.toLowerCase().includes("gold") && (MyQuery.toLowerCase().includes("price") || MyQuery.toLowerCase().includes("value") || MyQuery.toLowerCase().includes("rate") || MyQuery.toLowerCase().includes("gram")))
	{
	   MyLocation = "New York,New York,United States";
	}
try{
$.getJSON("https://api.serpwow.com/live/search?api_key=ED9FF3B028DB4F02A7CEB801B4DFB32E&q="+MyQuery+"&location="+MyLocation+"&hl=en", function(data)
{
	if((data.search_parameters.q.toString()).toLowerCase().includes("synonym") || (data.search_parameters.q.toString()).toLowerCase().includes("antonym"))
	{
		EurekaText = "i'm sorry, i couldn't find the exact answers, Please refer to the Related Questions for more information";
		Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
		say("i'm sorry, i couldn't find exact answers");
		document.getElementById("block").innerHTML = createFrame("Dictionary.jpg");
		related_Questions(data);
	}
	else if(data.answer_box)
	{
		if(data.answer_box.answers)
		{
			if(data.answer_box.answers[0].conversion_type)
			{
				EurekaText = ""+data.answer_box.answers[0].original.value +" "+data.answer_box.answers[0].original.unit +"is equal to "+data.answer_box.answers[0].converted.value+" "+data.answer_box.answers[0].converted.unit+".";
				say(EurekaText);
				Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
				document.getElementById("block").innerHTML = "<h2>" + data.answer_box.answers[0].converted.value + "</h2>";
				//have to show the data.answer_box.answers[0].converted.value to div
			}
			else if(data.answer_box.answers[0].steps)
			{
				EurekaText = "Here's the List i found: ";
				var listtoadd = "<list id='blocktable'>";
				for(var x in (data.answer_box.answers[0].steps))
  				{
  					var listitem = data.answer_box.answers[0].steps[x];
					//var iDiv = document.getElementById('block');
					listtoadd += "<li>" + listitem + "</li>";
					EurekaText += ", "+listitem;
  				}
				say(EurekaText);
				document.getElementById("block").innerHTML = listtoadd +'</list>';
				Eurekaoutput.innerHTML = "<b> Here's the List i found: />";
				if(data.answer_box.answers[0].source)
				{
					Eurekaoutput.innerHTML += "<br> Source: "+data.answer_box.answers[0].source.title+"<br>"
					Eurekaoutput.innerHTML += "link: <a href="+data.answer_box.answers[0].source.link+" target= '_blank'>"+data.answer_box.answers[0].source.link+"</a>"
				}	
			}
			else if(data.answer_box.answers[0].type)
			{
				if(data.answer_box.answers[0].type == "calculator")
				{
				EurekaText = ""+data.answer_box.answers[0].formula +"  "+data.answer_box.answers[0].answer+".";
				document.getElementById("block").innerHTML = createFrame("Calculator.PNG");
				document.getElementById("block").innerHTML += "<h3 id='blockh3'>" + data.answer_box.answers[0].answer + "</h3>";
				say(EurekaText);
				Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
				}
				if(data.answer_box.answers[0].type == "translation")
				{
				EurekaText = ""+data.answer_box.answers[0].original.text +" is written in "+data.answer_box.answers[0].converted.language +" as "+data.answer_box.answers[0].converted.text+".";
				document.getElementById("block").innerHTML ="<h3 id='blockh3'>" + data.answer_box.answers[0].converted.text + "</h3>";
				say(EurekaText);
				Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
				//have to show the data.answer_box.answers[0].converted.text to div
				}
				if(data.answer_box.answers[0].type == "list")
				{
					if(data.answer_box.answers[0].rows)
					{
						EurekaText = "Here's the List i found: ";
						var listtoadd = "<list id='blocktable'>";
						for(var x in (data.answer_box.answers[0].rows))
  						{
  							var listitem = data.answer_box.answers[0].rows[x];
							//var iDiv = document.getElementById('block');
							listtoadd += "<li>" + listitem + "</li>";
							EurekaText += ", "+listitem;
  						}
						say(EurekaText);
						document.getElementById("block").innerHTML = listtoadd +'</list>';
						Eurekaoutput.innerHTML = "<b> Here's the List i found: />";
						if(data.answer_box.answers[0].source)
						{
							Eurekaoutput.innerHTML += "<br> Source: "+data.answer_box.answers[0].source.title+"<br>"
							Eurekaoutput.innerHTML += "link: <a href="+data.answer_box.answers[0].source.link+" target= '_blank'>"+data.answer_box.answers[0].source.link+"</a>"
						}
						//alert(data.answer_box.answers[0].rows)//have to show it to div
					}
					
				}
				if(data.answer_box.answers[0].type == "table")
				{
			
					var stable = '<table id="blocktable">';
  					var values = ""
					EurekaText = "Here's something i found: ";
  					for(var x in (data.answer_box.answers[0].rows))
  					{
					var trvalue = '<tr>';
					//outputBot.textContent = (x+1)+":- ";
					if(data.answer_box.answers[0].columns)
					{
						for(var h in data.answer_box.answers[0].columns)
						{
						trvalue = trvalue + '<th>'+(data.answer_box.answers[0].columns[h])+'</th>';
						//outputBot.textContent += data.answer_box.answers[0].rows[x][y] +", ";
						}
						trvalue = trvalue+'</tr>'
					}
					for(var y in data.answer_box.answers[0].rows[x])
					{
						trvalue = trvalue + '<td>'+(data.answer_box.answers[0].rows[x][y])+'</td>';
						//outputBot.textContent += data.answer_box.answers[0].rows[x][y] +", ";
					}
					trvalue = trvalue+'</tr>'
					values += trvalue;
  					}
  					stable = stable+values+'</table>'
					document.getElementById("block").innerHTML = stable;
					Eurekaoutput.innerHTML = "<b>"+EurekaText+"</b>";
					say(EurekaText);
					if(data.answer_box.answers[0].source)
					{
						Eurekaoutput.innerHTML += "<br> Source: "+data.answer_box.answers[0].source.title+"<br>"
						Eurekaoutput.innerHTML += "link: <a href="+data.answer_box.answers[0].source.link+" target= '_blank'>"+data.answer_box.answers[0].source.link+"</a>"
					}
					//alert("Came here")
					//alert(data.answer_box.answers[0].rows) //have to show it to div.
				}
				if(data.answer_box.answers[0].type == "route")
				{
					EurekaText = "it's "+data.answer_box.answers[0].routes[0].distance + " and will take "+data.answer_box.answers[0].routes[0].time + " "+data.answer_box.answers[0].routes[0].name;
					Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
					document.getElementById("block").innerHTML = createFrame("KM.jpg");
					document.getElementById("block").innerHTML += "<h3 id='blockroad'>" + data.answer_box.answers[0].routes[0].distance + "</h3>";
					say(EurekaText);
				}
			}
			else if(data.answer_box.answers[0].answer == "Lyrics")
			{
				Eurekaoutput.innerHTML = "<br> Title: "+data.organic_results[0].title+"<br>";
				Eurekaoutput.innerHTML += "link: <a href="+data.organic_results[0].link+" target= '_blank'>"+data.organic_results[0].link+"</a>";
				window.open(data.organic_results[0].link);
				//outputBot.textContent = "Title: "+data.organic_results[0].title;
				//outputBot.textContent += ", Link: "+data.organic_results[0].link;
				document.getElementById("block").innerHTML = "<h3 id='blockh3'>" + document.getElementById("InputText").value + "</h3>";
				say("Do you want me to play the song "+document.getElementById("InputText").value+" i have found one link for the same, let me open it");
			}
			else if (data.answer_box.answers[0].classification)
			{
				if((data.answer_box.answers[0].classification.toString()).includes("title") || (data.answer_box.answers[0].classification.toString()).includes("recording_cluster"))
				{
				Eurekaoutput.innerHTML = "<br Title: "+data.organic_results[0].title+"<br>";
				Eurekaoutput.innerHTML += "link: <a href="+data.organic_results[0].link+" target= '_blank'>"+data.organic_results[0].link+"</a>";
				window.open(data.organic_results[0].link);
				//outputBot.textContent = "Title: "+data.organic_results[0].title;
				//outputBot.textContent += ", Link: "+data.organic_results[0].link;
				document.getElementById("block").innerHTML = "<h3 id='blockh3'>" + document.getElementById("InputText").value + "</h3>";
				say("Do you want me to play the song "+document.getElementById("InputText").value+" i have found one link for the same, let me open it");
				}					
				else
				{
					if(data.knowledge_graph)
					{
						Knowledge_Graph(data);
					}
					else
					{
						if(data.answer_box.answers[0].category)
						{
						EurekaText = data.answer_box.answers[0].category + " is ";
						}
						EurekaText += " "+data.answer_box.answers[0].answer;
						Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
						say(EurekaText);
						if(data.answer_box.answers[0].images)
						{
						//alert("Image = "+data.answer_box.answers[0].images[0]) //have to show it to the div
						document.getElementById("block").innerHTML = createFrame(data.answer_box.answers[0].images[0]);
						}
						else
						{
						document.getElementById("block").innerHTML = "<h3 id='blockh3'>" + data.answer_box.answers[0].answer + "</h3>";
						}
					}
				}
			}
			else
			{
				if(data.knowledge_graph)
				{
					Knowledge_Graph(data);
				}
				else
				{
					EurekaText = ""+data.answer_box.answers[0].answer+".";
					say(EurekaText);
					Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
					if(data.answer_box.answers[0].images)
					{
				//alert("Image = "+data.answer_box.answers[0].images[0]) //have to show it to the div
					document.getElementById("block").innerHTML = createFrame(data.answer_box.answers[0].images[0]);
					}
					else
					{
					document.getElementById("block").innerHTML = "<h3 id='blockh3'>" + data.answer_box.answers[0].answer + "</h3>";
					}
					if(data.answer_box.answers[0].source)
					{
						Eurekaoutput.innerHTML += "<br> Source: <a href="+data.answer_box.answers[0].source.link+" target= '_blank'>"+data.answer_box.answers[0].source.link+"</a>"

					//outputBot.textContent += ", Source: "+data.answer_box.answers[0].source.link;
					}
				}
			}
		}
		
	}
	else if(data.weather_box)
	{
		EurekaText = "The weather in "+data.weather_box.location+" is "+data.weather_box.summary;
		if(data.weather_box.current)
		{
			if(data.weather_box.current.image)
			{
			//alert("Image ="+data.weather_box.current.image) //have to show it to div
				document.getElementById("block").innerHTML = createFrame(data.weather_box.current.image);
			}
			else
			{
				document.getElementById("block").innerHTML = "<h3 id='blockh3'>" + data.weather_box.current.temperature[1].value + "</h3>";
			}
			EurekaText += ", there is a "+data.weather_box.current.precipitation.value +" Percent Chance of Rain today";
			EurekaText += ", humidity is "+data.weather_box.current.humidity.value +" Percent";
			EurekaText += " and the temperature is "+data.weather_box.current.temperature[1].value +" degree "+data.weather_box.current.temperature[1].unit +" Right now";
		}
		say(EurekaText);
		Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>"
	}
	else if(data.local_map)
	{
		Eurekaoutput.innerHTML = "<p> Here's Something i found, Opening it now. />"
		Eurekaoutput.innerHTML += "<br> Link: <a href="+data.local_map.link+" target= '_blank'>"+data.local_map.link+"</a>"
		//outputBot.textContent = ", Link: "+data.local_map.link;
		
		say("Here's Something i found, Opening it now.");
		window.open(data.local_map.link);
	}
	else if(data.knowledge_graph)
	{
		Knowledge_Graph(data);
	}
	else
	{
		organic_Result(data);
	}

});
function Knowledge_Graph(data)
{
	if(data.knowledge_graph.description)
		{
			EurekaText = ""+data.knowledge_graph.description+".";
			say(EurekaText);
			Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
		}
		if(data.knowledge_graph.images)
		{
			//alert("Image = "+data.knowledge_graph.images[0]) //need to show it to div
			document.getElementById("block").innerHTML = createFrame(data.knowledge_graph.images[0]);
		}
		if(data.knowledge_graph.source)
		{
			//outputBot.textContent += "Source: "+data.knowledge_graph.source.name;
			//outputBot.textContent += ", link: "+data.knowledge_graph.source.link;
			
			Eurekaoutput.innerHTML += "<br Source: "+data.knowledge_graph.source.name+"<br>";
			Eurekaoutput.innerHTML += "link: <a href="+data.knowledge_graph.source.link+" target= '_blank'>"+data.knowledge_graph.source.link+"</a>";
				
		}
		if(data.knowledge_graph.known_attributes)
		{
			Eurekaoutput.innerHTML += "<br>"+data.knowledge_graph.known_attributes[0].name + " = "+data.knowledge_graph.known_attributes[0].value;
		}
		//say("Please refer to Related Questions for more information.");
		related_Questions(data);
		
}
function organic_Result(data)
{
	if(data.organic_results[0].domain.toLowerCase().includes("bookmyshow") || data.organic_results[1].domain.toLowerCase().includes("bookmyshow"))
	{
		window.open(data.organic_results[0].link);
	}
	else
	{
	   
		EurekaText = ""+data.organic_results[0].snippet+".";
		say(EurekaText);
		Eurekaoutput.innerHTML = "<p>"+EurekaText+"</p>";
		//outputBot.textContent += ", Link: " +data.organic_results[0].link;
		Eurekaoutput.innerHTML += "<br> link: <a href="+data.organic_results[0].link+" target= '_blank'>"+data.organic_results[0].link+"</a>";

		if(data.organic_results[0].rich_snippet)
		{
			Eurekaoutput.innerHTML += "<br>"+data.organic_results[0].rich_snippet.top.extensions;
			document.getElementById("block").innerHTML = "<h2>" + data.organic_results[0].rich_snippet.top.extensions + "</h2>";
		//say(data.organic_results[0].rich_snippet.top.extensions);
		}
		Eurekaoutput.innerHTML +=  "<br>"+"<b>Alternate Result: </b>"
		Eurekaoutput.innerHTML += "<br>"+data.organic_results[1].snippet;
		Eurekaoutput.innerHTML += "<br> link: <a href="+data.organic_results[1].link+" target= '_blank'>"+data.organic_results[1].link+"</a>";
	
		related_Questions(data);
	}
}
/*function related_Searches(data)
{
	if(data.related_searches)
	{
	alert("Related Searches 1")
	alert("Query = "+data.related_searches[0].query)
	alert("Answer = "+data.related_searches[0].link)
	alert("Related Searches 2")
	alert("Query = "+data.related_searches[1].query)
	alert("Answer = "+data.related_searches[1].link)
	related_Questions(data)
	}
}*/
function related_Questions(data)
{
	if(data.related_questions)
	{
	say("Please refer to Related Questions for more information.");
	Eurekaoutput.innerHTML += '<input type="submit" id="rltdbtn" class="w3-border w3-round-large" value="Related Ques." onclick="openrelatedQues();">';
	
	addrltdques.innerHTML = "<h4 Related Questions 1: /><br>";
	//alert("Related Questions 1")
	addrltdques.innerHTML += "<b>question: "+data.related_questions[0].question+"</b>";
	//alert("question = "+data.related_questions[0].question)
	addrltdques.innerHTML += "<p>Answer: "+data.related_questions[0].answer+"</p>";
	//alert("Answer = "+data.related_questions[0].answer)
	addrltdques.innerHTML += "<h4 Related Questions 2: /><br>";
	//alert("Related Questions 1")
	addrltdques.innerHTML += "<b>question: "+data.related_questions[1].question+"</b>";
	//alert("question = "+data.related_questions[0].question)
	addrltdques.innerHTML += "<p>Answer: "+data.related_questions[1].answer+"</p>";
	//alert("Answer = "+data.related_questions[0].answer)
	}
}

}
catch(e){

}
}

function createFrame(src){
  return "<div>"+
            //"<a href='"+src+"' target='_blank'>"+
              "<img id='Blockimage' src='"+src+"' alt='Eureka Couldn't Find the image.'/>"+
            //"</a>"+
          "</div>";
}



// When the user clicks on the button, open the modal
function openrelatedQues() {
  rltdquesModal.style.display = "block";
  var element = document.getElementById("Foot");
   element.classList.add("blur");
}



// When the user clicks on <span> (x), close the modal
rltdquesspan.onclick = function() {
rltdquesModal.style.display = "none";
var element = document.getElementById("Foot");
element.classList.remove("blur"); 
}


/*function openrelatedVid()
{
  rltdvidModal.style.display = "block";
  var element = document.getElementById("Foot");
   element.classList.add("blur");
}
// When the user clicks on <span> (x), close the modal
function CloserelatedVid() {
 rltdvidModal.style.display = "none";
var element = document.getElementById("Foot");
element.classList.remove("blur");         
}*/


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
  if (event.target == rltdvidModal) 
  {
    	rltdvidModal.style.display = "none";
	var element = document.getElementById("Foot");
	element.classList.remove("blur");
  }
  if (event.target == rltdquesModal)
  {
    	rltdquesModal.style.display = "none";
	var element = document.getElementById("Foot");
	element.classList.remove("blur");
  }
}


/* For SideBar Panel i.e. Menu */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
    document.getElementById('footer').scrollIntoView(false);
});
