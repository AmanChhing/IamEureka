#rltdbtn
{
	width: 50%;
	height: 20%;
	position:absolute;
	left: 1%;
	padding-top: 1%;
	font-size: 25px;
}

#RltdQuesdiv
{
	font-size: 20px;
	margin: -60px 20px 20px 20px;
	width: 90%;
}


* {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #2196f3;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: #2196f3;
  color: white;
}

.header-right {
  float: right;
}


#EurekaLogo
{
	width: 31%;
	float: left;
}

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}








.output-bot
{
	color:blue;
	font-size: 1.9vw;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  color: white;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.9); /* Black w/opacity/see-through */
   
}

/*#Eureka { color: #d54d7b; font-family: "Great Vibes", cursive; font-size: 135px; line-height: 160px; font-weight: normal; margin-bottom: 0px; margin-top: 0px; text-align: center; text-shadow: 0 1px 1px #fff; }
*/
/* Modal Content */
.modal-content {
  border: 1px solid #888;
  margin: -60px 20px 50px 20px;
  width: 90%;
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 48px;
  font-weight: bold;
  margin-right: 4%;
}

.close:hover,
.close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
.Footimg1
{
	top: 80vh;
	position: absolute;
}
.mainfoot
{
	width: 100vw;
	height: 20vh;
}
Foot
{
	width: 100%;
	height: 100%;
	position: relative;
}
input[type="submit"] {
    float:right;
    width: 3vw;
    height: 3vh;
    color: black;
    background-color: #82e2ee;
    font-size:larger;
    font: xx-large;
   }

button {
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 12vw;
  height: 20vh;
  border: 0;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  background: linear-gradient(180deg, #39C2C9 0%, #3FC8C9 80%, #3FC8C9 100%);
  box-shadow: 2px 5px 30px rgba(63, 200, 201, .4);
  position: absolute;
  left: 44vw;
  bottom: 0.2vw;
  will-change: transform, filter;
  transition: all 0.3s ease-out;
}
button .fa {
    font-size: 8.5vw;
    line-height: 4vh;
    left: 3.3vw;
    margin: 0;
    position:absolute;
    text-shadow: 1px 2px 2px #2a8b90;
	}
button:hover {
  transform: scale(.92);
}
button:active {
  filter: brightness(.8);
}
button:focus {
  outline: 0;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-github::before {
    content: "\f09b";
}

#block 
{ 
	position: absolute; 
    padding-bottom: 43.65vw;
	width: 58vw;
	top: 26%;
	left: 25%;  
}
#YouSaid
{
position: absolute;
bottom: 5vh;
left: 3vw;
height: 70vh;
width: 20vw;  
}
#EurekaReplied
{
position: absolute;
bottom: 20vh;
right: 3vw;
height: 55vh;
width: 24vw;
overflow-y: scroll; 
}
#InputText
{
	height: 30px;
	width: 80%;
	position: absolute;
	box-sizing: border-box;
	font-size: 25px;
	color: blue;
	font-family:-webkit-pictograph;
	font-style:italic;
}
#InputText
{
	height: 2.5vw;
	font-size: 2.5vw;
}
input[type="submit"]
{
		height: 2.8vw;
		font-size: 1.6vw;
}
#You,#Bot
	{
	font-size: 2.5vw;
	color: blueviolet
	}
@media screen and (max-width: 3840px) {
	iframe
	{
	position:absolute;
	margin-left: 10%;
	}
	.header a {
  	font-size: 3vw;
  	font-weight: bold;
  	position:absolute;
  	right: 0.5vw;
  	top: 4.3vw;
	}
	#YouSaid
	{
	width: 15vw;
	}
	#block 
	{ 
	left: 18.2vw;  
	}
	#EurekaReplied
	{
		left: 76.3vw;
	}
	.header {
		height: 11.5vw;
	}
	#Blockimage
	{
	width: 70%;
	height: 60%;
	position:absolute;
	left: 15%;
	top: 1%;
	}
	#rltdbtn
	{
	width: 60%;
	height: 15%;
	font-size: 60px;
	}
	
	@media screen and (max-height: 700px) {
	button {
     width: 6vw;
     height: 8vw;
     left: 47vw;
     bottom: 1vh;
	}
	button .fa {
    font-size: 5vw;
    line-height: 3vh;
    left: 1.5vw;
	}

	}
}

@media screen and (max-width: 1366px) {
	#rltdbtn
	{
	width: 65%;
	height: 15%;
	font-size: 25px;
	}
	#Blockimage
	{
	width: 70%;
	height: 60%;
	position:absolute;
	left: 15%;
	top: 1%;
	}

}

@media screen and (max-width: 1024px) {
	.header {
		height: 17vw;
	}
	input[type="submit"]
	{
	font-size: 1.4vw;
	}
	#YouSaid
	{
	position: absolute;
	top: 15vh;
	left: 17vw;
	height: 7.5vh;
	width: 38vw;  
	}
	#EurekaReplied
	{
	position: absolute;
	bottom: 17.5vh;
	left: 17vw;
	height: 20vh;
	width: 69vw;
	overflow-y: scroll;
	}
	#InputText
	{
	width: 45vw;
	height: 3.5vw;
	font-size: 3.1vw;
	}
	input[type="submit"]
	{
	font-size: 2.3vw;
	width: 8vw;
	height: 3.5vw;
	position:absolute;
	left: 45vw;
	}
	#rltdbtn
	{
	width: 35%;
	height: 25%;
	font-size: 25px;
	}
	#Blockimage
	{
	top: 15%;
	}
}

@media screen and (max-width: 768px) {
	#rltdbtn
	{
	width: 45%;
	height: 35%;
	font-size: 25px;
	}
	.output-bot
	{
	color:blue;
	font-size: 3vw;
	}
	iframe
	{
	position:absolute;
	margin-top: 6vh;
	}
    .mainfoot
    {
       max-width: 100vw;
	   max-height: 90px;	/* The width is 100%, when the viewport is 800px or smaller */
    }
    .Footimg1
	{
	top: 93vh;
	position: absolute;
	}
	#block
	{
	position: absolute;
	box-sizing: border-box;
	padding-right: 99vw;
	margin-left: -18vw;
	height: 41vh;
	top: 23.5vh;
	}
	button {
     width: 14vw;
     height: 17vw;
	}
	button .fa {
    font-size: 13vw;
    line-height: 2vh;
    left: 2.7vw;
	}
	#YouSaid
	{
	position: absolute;
	top: 15vh;
	left: 12vw;
	height: 7.5vh;
	width: 38vw;  
	}
	#EurekaReplied
	{
	position: absolute;
	bottom: 17.5vh;
	left: 12vw;
	height: 20vh;
	width: 69vw;
	overflow-y: scroll;
	}
	.header {
		height: 17vw;
	}
	
	#You, #Bot
	{
	font-size: 3.5vw;
	color: blueviolet
	}
	#InputText
	{
	width: 45vw;
	height: 3.5vw;
	font-size: 3.1vw;
	}
	input[type="submit"]
	{
	font-size: 2.3vw;
	width: 8vw;
	height: 3.5vw;
	position:absolute;
	left: 45vw;
	}
	#EurekaLogo
	{
	width: 41%;
	float: left;
	}
	.header a {
  	font-size: 5vw;
	}
	@media screen and (max-height: 1100px) {
	.Footimg1
	{
	top: 91vh;
	}
	}
	@media screen and (max-height: 850px) {
	.Footimg1
	{
	top: 89vh;
	}
	#block
	{
	top: 24.5vh;
	}
	}

}
@media screen and (max-width: 680px) {
	input[type="submit"]
	{
		width: 7.4vw;
		height: 4vw;
		font-size: 2.5vw;
	}
}
@media screen and (max-width: 600px) {
	.output-bot
	{
	color:blue;
	font-size: 3.5vw;
	}
	#You,#Bot
	{
	font-size: 4.5vw;
	color: blueviolet
	}
	.header {
		height: 19vw;
	}
	@media screen and (max-height: 760px) {
		.Footimg1
		{
		top: 85vh;
		}
	}
}
@media screen and (max-width: 550px) {
	#rltdbtn
	{
	width: 55%;
	font-size: 23px;
	}
	input[type="submit"]
	{
		font-size: 2.7vw;
	}
	#YouSaid
	{
	position: absolute;
	top: 13vh; 
	}
	#block
	{
	top: 23vh;
	}
	#EurekaReplied
	{
	bottom: 17vh;
	}
	@media screen and (max-height: 850px) {
	#block
	{
	top: 24.5vh;
	}
	}

}
@media screen and (max-width: 500px) {
	.output-bot
	{
	color:blue;
	font-size: 4.3vw;
	}
	input[type="submit"]
	{
		height: 4.8vw;
		font-size: 3vw;
		width: 9vw;
	}
	#InputText
	{
	width: 45vw;
	height: 4.5vw;
	font-size: 3.1vw;
	}
	button {
     width: 14vw;
     height: 19vw;
	}
	button .fa {
    font-size: 13vw;
    line-height: 2vh;
    left: 3vw;
	}
	
	#You,#Bot
	{
	font-size: 5.5vw;
	color: blueviolet
	}
	@media screen and (max-height: 800px) {
		button {
     left: 43vw;
	}
	}

}
@media screen and (max-width: 450px) {
	.header {
		height: 23vw;
	}
	#InputText
	{
	height: 5.5vw;
	font-size: 4.2vw;
	}
	input[type="submit"]
	{
		width: 11.4vw;
		height: 6vw;
		font-size: 3.5vw;
	}
	#block
	{
	top: 23.5vh;
	}
	#EurekaReplied
	{
	width: 75vw;
	}
	@media screen and (max-height: 700px) {
	.header {
		height: 21vw;
	}
	#block
	{
	top: 24.5vh;
	}
	}
}
@media screen and (max-width: 400px) {
	.output-bot
	{
	color:blue;
	font-size: 4.5vw;
	}
	#rltdbtn
	{
	font-size: 18px;
	}

}
@media screen and (max-width: 360px) {
	button {
     width: 14vw;
     height: 21vw;
     bottom: 1vh;
	}
	#InputText
	{
	height: 6.5vw;
	font-size: 5.2vw;
	}
	input[type="submit"]
	{
		width: 11.4vw;
		height: 6.8vw;
		font-size: 3.9vw;
	}
	#block
	{
		top: 24vh;
	}
	.header {
		height: 24vw;
	}
	@media screen and (max-height: 580px) {
		iframe
		{
		position:absolute;
		margin-top: 3vh;
		}
		.Footimg1
		{
		top: 83vh;
		}
		#block
		{
		position: absolute;
		box-sizing: border-box;
		padding-right: 75vw;
		margin-left: -12vw;
		height: 35vh;
		top: 25vh;
		}
		#EurekaReplied
		{
		position: absolute;
		bottom: 23vh;
		}
	}
}
@media screen and (max-width: 320px) {
	input[type="submit"]
	{
		width: 9vw;
		height: 6vw;
		font-size: 3.5vw;
	}
	.header {
		height: 22vw;
	}
	#rltdbtn
	{
	font-size: 14px;
	}
	
	
}
@media screen and (max-width: 260px) {
	
}
#EurekaReplied
{
overflow-y: scroll; 
}
table {
  border-collapse: collapse;
}
th {
  background-color: #4CAF50;
  color: white;
}
th, td {
  border-bottom: 1px solid #ddd;
   padding-left: 23px;
  text-align: left;
 padding-top: 5%;
}
tr:nth-child(even) {background-color: #f2f2f2;}
tr:hover {background-color: #f5f5f5;}


