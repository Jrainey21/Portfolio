$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

/*--------THIS CODE WAS FOR THE POSITION TAB: jQuery----------------------------------*/


var qbButton=document.getElementById("qbButton")
var rbButton=document.getElementById("rbButton")
var wrButton=document.getElementById("wrButton")
var teButton=document.getElementById("teButton")
var dButton=document.getElementById("dButton")
var kButton=document.getElementById("kButton")

var qblist=document.getElementById("qbs")
var rblist=document.getElementById("rbs")
var wrlist=document.getElementById('wrs')
var telist=document.getElementById('te')
var deflist=document.getElementById('def')
var klist=document.getElementById('k')

var submitQb=document.getElementById('submitQb')
var submitRb=document.getElementById('submitRb')
var submitWr=document.getElementById('submitWr')
var submitTe=document.getElementById('submitTe')
var submitDef=document.getElementById('submitDef')
var submitK=document.getElementById('submitKicker')

var qbG= document.getElementById("qbgroup")
var picks= document.getElementsByClassName('picks')
var rbG=document.getElementById("rbGroup")
var wrG=document.getElementById('wrGroup')
var teG=document.getElementById('teGroup')
var defG=document.getElementById('defGroup')
var kG=document.getElementById('kGroup')
var teamName=document.getElementsByClassName('teamName')
var teamPick=document.getElementById('whosePick')
var teamPicks=document.getElementById('whosePicks')

var first=document.getElementById('team1')
var second=document.getElementById('team2')
var third=document.getElementById('team3')
var fourth=document.getElementById('team4')
var fifth=document.getElementById('team5')
var seventh=document.getElementById('team7')
var eighth=document.getElementById('team8')
var ninth=document.getElementById('team9')
var tenth=document.getElementById('team10')
var sixth=document.getElementById('team6')

/*--------THIS CODE WAS FOR THE SPAN ELEMENT, IN THE LIGHT BLUE BANNER IN THE BOTTOM RIGHT PORTION OF THE SCREEN, TO CHANGE WITH EVERY PICK...TO SIGNIFY WHOSE TURN IT IS-------------------------------------------*/

function nextPick(){
		switch(teamPick.textContent){
			case first.textContent:
			teamPick.textContent=second.textContent;
			break;
			case second.textContent:
			teamPick.textContent=third.textContent;
			break;
			case third.textContent:
			teamPick.textContent=fourth.textContent;
			break;
			case fourth.textContent:
			teamPick.textContent=fifth.textContent;
			break;
			case fifth.textContent:
			teamPick.textContent=sixth.textContent;
			break;
			case sixth.textContent:
			teamPick.textContent=seventh.textContent;
			break;
			case "":
			teamPick.textContent=second.textContent;
			break;
			case seventh.textContent:
			teamPick.textContent=eighth.textContent;
			break;
			case eighth.textContent:
			teamPick.textContent=ninth.textContent;
			break;
			case ninth.textContent:
			teamPick.textContent=tenth.textContent;
			break;
			case tenth.textContent:
			teamPick.textContent=first.textContent;
			break;
			default:
			teamPick.textContent="Who is picking";
			break;
		}

		
	}




/*--------THE FOLLOWING FUNCTIONS WERE TO INSERT THE VALUES OF THE SELECT ELEMENTS INTO THE DRAFT BOARD-----IF ONE OF THE QB OPTIONS WERE SELECTED AND THE NEXT AVAILABLE DRAFT SLOT WAS EMPTY, THEN INSERT THAT OPTION'S VALUE-----------------------------*/



function qbpick(){

for(var i=0; i<qbG.length;i++){ for(var j=0; j<picks.length;j++){
    if(qbG[i].selected && picks[j].textContent==""){
		picks[j].textContent=qbG[i].value;    /*-ADDING THE VALUE OF OPTION ELEMENT TO DRAFTBOARD--*/
		qbG[i].remove();                      /*-REMOVING THE PLAYER FROM DROPDOWN MENU--*/
		picks[j].classList.remove('pick2nd'); /*-REMOVING THE YELLOW HIGHLIGHT ANIMATION ,ITS NO LONGER THAT PERSONS TURN--*/
		picks[j].style.background="red";      /*-ADDING BACKGROUND COLOR RED TO ALL QBS TAKEN ON DRAFTBOARD--*/
		picks[j+1].classList.add('pick2nd');  /*-ADDING HIGHLIGHT ANIMATION TO SIGNIFY NEXT PICK--*/
		break;
}}

}}

function rbpick(){

	for(var i=0; i<rbG.length;i++){ for(var j=0; j<picks.length;j++){
if(rbG[i].selected && picks[j].textContent==""){
		picks[j].textContent=rbG[i].value;
		rbG[i].remove();
		picks[j].classList.remove('pick2nd');
		picks[j].style.background='green';  /*-ADDING BACKGROUND COLOR GREEN TO ALL RBS TAKEN ON DRAFTBOARD--*/
		picks[j+1].classList.add('pick2nd');
		break;
}}

}}

function wrpick(){

	for(var i=0; i<wrG.length;i++){ for(var j=0; j<picks.length;j++){
if(wrG[i].selected && picks[j].textContent==""){
		picks[j].textContent=wrG[i].value;
		wrG[i].remove();
		picks[j].classList.remove('pick2nd');
		picks[j].style.background='blue';   /*-ADDING BACKGROUND COLOR BLUE TO ALL WRS TAKEN ON DRAFTBOARD--*/
		picks[j+1].classList.add('pick2nd');
		break;
}}

}}
function tepick(){

	for(var i=0; i<teG.length;i++){ for(var j=0; j<picks.length;j++){
if(teG[i].selected && picks[j].textContent==""){
		picks[j].textContent=teG[i].value;
		teG[i].remove();
		picks[j].classList.remove('pick2nd');
		picks[j].style.background='orange';    /*-ADDING BACKGROUND COLOR ORANGE TO ALL TES TAKEN ON DRAFTBOARD--*/
		picks[j+1].classList.add('pick2nd');
		break;
}}

}}
function defpick(){

	for(var i=0; i<defG.length;i++){ for(var j=0; j<picks.length;j++){
if(defG[i].selected && picks[j].textContent==""){
		picks[j].textContent=defG[i].value;
		defG[i].remove();
		picks[j].classList.remove('pick2nd');
		picks[j].style.background='brown';    /*-ADDING BACKGROUND COLOR BROWN TO ALL DEFENSES TAKEN ON DRAFTBOARD--*/
		picks[j+1].classList.add('pick2nd');
		break;
}}

}}
function kpick(){

	for(var i=0; i<kG.length;i++){ for(var j=0; j<picks.length;j++){
if(kG[i].selected && picks[j].textContent==""){
		picks[j].textContent=kG[i].value;
		kG[i].remove();
		picks[j].classList.remove('pick2nd');
		picks[j].style.background='pink';         /*-ADDING BACKGROUND COLOR PINK TO ALL KICKERS TAKEN ON DRAFTBOARD--*/
		picks[j+1].classList.add('pick2nd');
		break;
}}

}}

/*--------THIS CODE ACTIVATES THE SUBMIT BUTTONS FOR EACH POSITION WHEN ENTERING A NAME ONTO THE BOARD-----------------------------*/




submitQb.addEventListener('click',qbpick);
submitRb.addEventListener('click',rbpick);
submitWr.addEventListener('click',wrpick);
submitTe.addEventListener('click',tepick);
submitDef.addEventListener('click',defpick);
submitK.addEventListener('click',kpick);
submitQb.addEventListener('click',nextPick);
submitRb.addEventListener('click',nextPick);
submitWr.addEventListener('click',nextPick);
submitTe.addEventListener('click',nextPick);
submitDef.addEventListener('click',nextPick);
submitK.addEventListener('click',nextPick);


/*

qbButton.addEventListener('click', function(){
	qbButton.classList.add('selected');
	rbButton.classList.remove('selected');
	wrButton.classList.remove('selected');
	teButton.classList.remove('selected');
	dButton.classList.remove('selected');
	kButton.classList.remove('selected');
	qblist.classList.add('display');
	qblist.classList.remove('noDisplay');
	rblist.classList.remove('display');
	rblist.classList.add('noDisplay');
	wrlist.classList.remove('display');
	wrlist.classList.add('noDisplay');
	telist.classList.remove('display');
	telist.classList.add('noDisplay');
	deflist.classList.remove('display');
	deflist.classList.add('noDisplay');
	klist.classList.remove('display');
	klist.classList.add('noDisplay');

});

rbButton.addEventListener('click',function(){
	qbButton.classList.remove('selected');
	rbButton.classList.add('selected');
	wrButton.classList.remove('selected');
	teButton.classList.remove('selected');
	dButton.classList.remove('selected');
	kButton.classList.remove('selected');
	qblist.classList.remove('display');
	qblist.classList.add('noDisplay');
	rblist.classList.add('display');
	rblist.classList.remove('noDisplay')
	wrlist.classList.remove('display');
	wrlist.classList.add('noDisplay');
	telist.classList.remove('display');
	telist.classList.add('noDisplay');
	deflist.classList.remove('display');
	deflist.classList.add('noDisplay');
	klist.classList.remove('display');
	klist.classList.add('noDisplay');

});
wrButton.addEventListener('click',function(){
	qbButton.classList.remove('selected');
	rbButton.classList.remove('selected');
	wrButton.classList.add('selected');
	teButton.classList.remove('selected');
	dButton.classList.remove('selected');
	kButton.classList.remove('selected');
	qblist.classList.remove('display');
	qblist.classList.add('noDisplay');
	rblist.classList.add('noDisplay');
	rblist.classList.remove('display')
	wrlist.classList.remove('noDisplay');
	wrlist.classList.add('display');
	telist.classList.remove('display');
	telist.classList.add('noDisplay');
	deflist.classList.remove('display');
	deflist.classList.add('noDisplay');
	klist.classList.remove('display');
	klist.classList.add('noDisplay');

});
teButton.addEventListener('click',function(){
	qbButton.classList.remove('selected');
	rbButton.classList.remove('selected');
	wrButton.classList.remove('selected');
	teButton.classList.add('selected');
	dButton.classList.remove('selected');
	kButton.classList.remove('selected');
	qblist.classList.remove('display');
	qblist.classList.add('noDisplay');
	rblist.classList.add('noDisplay');
	rblist.classList.remove('display')
	wrlist.classList.add('noDisplay');
	wrlist.classList.remove('display');
	telist.classList.add('display');
	telist.classList.remove('noDisplay');
	deflist.classList.remove('display');
	deflist.classList.add('noDisplay');
	klist.classList.remove('display');
	klist.classList.add('noDisplay');

});
dButton.addEventListener('click',function(){
	qbButton.classList.remove('selected');
	rbButton.classList.remove('selected');
	wrButton.classList.remove('selected');
	teButton.classList.remove('selected');
	dButton.classList.add('selected');
	kButton.classList.remove('selected');
	qblist.classList.remove('display');
	qblist.classList.add('noDisplay');
	rblist.classList.add('noDisplay');
	rblist.classList.remove('display')
	wrlist.classList.add('noDisplay');
	wrlist.classList.remove('display');
	telist.classList.remove('display');
	telist.classList.add('noDisplay');
	deflist.classList.add('display');
	deflist.classList.remove('noDisplay');
	klist.classList.remove('display');
	klist.classList.add('noDisplay');

});
kButton.addEventListener('click',function(){
	qbButton.classList.remove('selected');
	rbButton.classList.remove('selected');
	wrButton.classList.remove('selected');
	teButton.classList.remove('selected');
	dButton.classList.remove('selected');
	kButton.classList.add('selected');
	qblist.classList.remove('display');
	qblist.classList.add('noDisplay');
	rblist.classList.add('noDisplay');
	rblist.classList.remove('display')
	wrlist.classList.add('noDisplay');
	wrlist.classList.remove('display');
	telist.classList.remove('display');
	telist.classList.add('noDisplay');
	deflist.classList.remove('display');
	deflist.classList.add('noDisplay');
	klist.classList.add('display');
	klist.classList.remove('noDisplay');

});

*/


//Perhaps write some code running the emptydraft slots in a for loop. If 
//the LI is empty then fill the box with a selection. if the box is filled.
//then move to the next box. 
//function isEmpty(val){
   // return ((val !== '') && (val !== undefined) && (val.length > 0) && (val !== null));}
//
//perhaps iterate thru each pick selection. if the pick slot is empty then put value there if not
//then go to the next slot. 
//need code that changes backgroud color of each pick selection. run the loop.
//if pick contains qb in value then change background color?
//actually try just adding it in the 
/*1. The draft board needs an h1 heading at the top////////2. Perhaps add a toggle button like in the color game
that has a couple buttons that indicate how many rounds you want and how many teams.
3. Maybe add an undo button that has you undo the last pick in case you make a mistake
4. MY board's margins and height and width need to be adjusted. I can throw in some bootstrap perhaps. to 
accomodate for scroll changes and screen sizes. 5. also add team names for players (superscript ) 
6. add more players in drop down menu . top 200 players

7. Add a banner on the right side. Add a loop. After every time you hit submit; that pick selection[i]
will display. It will say who is picking and what Round.
8. Add hilight of the selection box with each click of the submit button*/