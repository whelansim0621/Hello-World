var Menu = require('Scripts/Menu'), Hotel = require('Scripts/Hotel'), 
Social = require('Scripts/Social'), Setting = require('Scripts/Setting'),
Member = require('Scripts/Member'), Highlight = require('Scripts/Highlight'),
Shows = require('Scripts/Shows'), Dining = require('Scripts/Dining'),
MyPlanner = require('Scripts/MyPlanner'), ThemePark = require('Scripts/ThemePark'),
Getting = require('Scripts/Getting'), More = require('Scripts/More'),
Weather = require('Scripts/Weather'),IHoliday = require('Scripts/iHoliday'),
Menu2 = require('Scripts/Menu2');

Titanium.include('vendor/json.i18n.js');

var main = Ti.UI.createWindow();

var leftNavBtn = Ti.UI.createButton({width:22,height:22,backgroundImage:'Pictures/gt_ic_back.png'});

var win1 = Ti.UI.createWindow({
	backgroundColor:"white",
	barImage:"Pictures2/1b_nav.png",
	zIndex:0,
	leftNavButton:leftNavBtn
});

var navGroup = Ti.UI.iPhone.createNavigationGroup({window:win1});

main.add(navGroup);
main.open();

var leftNavBtn = Ti.UI.createButton({width:22,height:22,backgroundImage:'gt_ic_back.png'});
win1.leftNavButton = leftNavBtn;

// ------------------- Splash Screen Animation ------------------- //
var splashScreen = Ti.UI.createWindow({
	navBarHidden:true,
	backgroundColor:"white"
});

// duplicate Default.png
var view = Ti.UI.createView({
	backgroundImage:"Pictures/Default.png"
});
splashScreen.add(view);
splashScreen.open();

var logo = Ti.UI.createView({opacity:0,width:320, height:480, backgroundImage:'Pictures2/1b_loading_page.png'});
splashScreen.add(logo);
	
splashScreen.addEventListener("focus", function(){
	//alert("Now is replaced by test.png splash screen without top 20pixel\n Click to enter");
	//splashScreen.add(animatedLogo);
	//animatedLogo.start();
	animation();
});

function animation(){
	var a = Ti.UI.createAnimation({duration:2000,opacity:1.0});
	logo.animate(a);
	a.addEventListener('complete', function(){
		setTimeout(function(){
		var a = Ti.UI.createAnimation({
			opacity:0.0,
			duration:500
		});
		splashScreen.animate(a);
		a.addEventListener("complete", function(){
			splashScreen.close()
		});
	},1000)
	});
}

/*
// animated logo
var logoSequence = [];
for(var i = 1; i < 5; i++){
	if(i<10){
		logoSequence.push("Pictures/SplashScreen/SplashScreen000"+[i]+".png");
	}else
	{
		logoSequence.push("Pictures/SplashScreen/SplashScreen00"+[i]+".png");
	}
	
}

var animatedLogo = Ti.UI.createImageView({
	images:logoSequence,
	width:320,
	height:88,
	duration:50,
	repeatCount:1
});
animatedLogo.addEventListener("stop", function(){
	setTimeout(function(){
		var a = Ti.UI.createAnimation({
			opacity:0.0,
			duration:350
		});
		splashScreen.animate(a);
		a.addEventListener("complete", function(){
			splashScreen.close()
		});
	},10)
});
*/
// ------------------- End Splash Screen Animation ------------------- //


// -------------- Landing Page ---------------- //
var mainView = Ti.UI.createView({
	width:320,
	height:436,
	backgroundImage:'Pictures2/1b_landing_bgd.png',
	top:0,
});

// create a timer
var timer;

// ---------------------- MEDIA GALLERY ------------------------- //
// this view will hold the video & photo
var promo1View = Ti.UI.createView({
	width:320,
	height:180,
	top:0,
});
mainView.add(promo1View);

// photo section
var img1 = Ti.UI.createView({
	width:320,
	height:180,
	left:0,
	top:0,
	backgroundImage:'Pictures2/1b_landing_img1.png'
});

var img2 = Ti.UI.createView({
	width:320,
	height:180,
	left:320,
	top:0,
	backgroundImage:'Pictures2/1b_landing_img2.png'
});

var img3 = Ti.UI.createView({
	width:320,
	height:180,
	left:640,
	top:0,
	backgroundImage:'Pictures2/1b_landing_img3.png'
});
promo1View.add(img1);
promo1View.add(img2);
promo1View.add(img3);

var imgPos = 0;

timer = setInterval(moveGallery,5000);

function moveGallery(){
	// scroll to next banner by adding another 320 pixel
	imgPos = imgPos - 320;
	// if last one banner is shown, then go back to the 1st banner
	if(imgPos<-640){
		imgPos = 0;
	}
	promo1View.animate({top:0,left:imgPos, duration:250});
}
// ---------------------- End of MEDIA GALLERY ------------------------- //


// ---------------------- 3rd POSTER SELECTOR ------------------------- //
// create horizontal scrolling view
var posterView = Ti.UI.createCoverFlowView({
	width:320,
	height:217,
	top:200,	//210 - 10
	images:['Pictures2/1b_landing_imgb5.png','Pictures2/1b_landing_imgb6.png','Pictures2/1b_landing_imgb7.png','Pictures2/1b_landing_imgb8.png'],
	backgroundColor:'transparent'
});
mainView.add(posterView);
/*
posterView.addEventListener('click', function(e){
	Ti.API.info('image click: ' + e.index);
	var view = Ti.UI.createWindow({
		backgroundImage:'Pictures/feiyuching01.jpg'	
	});
	navGroup.open(view);
});
*/
// ---------------------- END POSTER SELECTOR ------------------------- //


win1.add(mainView);

// Set up different window
var hotel = Hotel.createHotelWindow(navGroup);
var social = Social.createSocialWindow(navGroup);
var setting = Setting.createSettingWindow(navGroup);
var member = Member.createMemberWindow(navGroup);
var highlight = Highlight.createHighlightWindow(navGroup);
var shows = Shows.createShowsWindow(navGroup);
var dining = Dining.createDiningWindow(navGroup);
var myPlanner = MyPlanner.createMyPlannerWindow(navGroup);
var themePark = ThemePark.createThemeParkWindow(navGroup);
var getting = Getting.createGettingWindow(navGroup);
var moreOption = More.createMoreWindow(navGroup);
var weatherWin = Weather.createWeatherWindow(navGroup);
var iHoliday = IHoliday.createiHolidayWindow(navGroup);
//---------------------- NAVIGATION MANAGER BY APP EVENT --------------------- //
// open member window
Ti.App.addEventListener("app:member", function(e){Ti.API.warn('heard app:member');navGroup.open(member);});

// open hotel window
Ti.App.addEventListener("app:hotel", function(e){Ti.API.warn('heard app:hotel');navGroup.open(hotel);});

// open social window
Ti.App.addEventListener("app:social", function(e){Ti.API.warn('heard app:social');navGroup.open(social);});

// open Setting window
Ti.App.addEventListener("app:setting", function(e){Ti.API.warn('heard app:setting');navGroup.open(setting);});

// open Highlight window
Ti.App.addEventListener("app:highlight", function(e){Ti.API.warn('heard app:highlight');navGroup.open(highlight);});

// open Shows window
Ti.App.addEventListener("app:shows", function(e){Ti.API.warn('heard app:show');navGroup.open(shows);});

// open Dining window
Ti.App.addEventListener("app:dining", function(e){Ti.API.warn('heard app:dining');navGroup.open(dining);});

// open MyPlanner window
Ti.App.addEventListener("app:myPlanner", function(e){Ti.API.warn('heard app:myPlanner');navGroup.open(myPlanner);});

// open Theme Park window
Ti.App.addEventListener("app:themePark", function(e){Ti.API.warn('heard app:themePark');navGroup.open(themePark);});

// open Getting There window
Ti.App.addEventListener("app:getting", function(e){Ti.API.warn('heard app:getting');navGroup.open(getting);});

// open More window
Ti.App.addEventListener("app:moreOption", function(e){Ti.API.warn('heard app:moreOption');navGroup.open(moreOption);});

// open Getting There window
Ti.App.addEventListener("app:weather", function(){navGroup.open(weatherWin)});

// open Getting There window
Ti.App.addEventListener("app:iHoliday", function(){navGroup.open(iHoliday)});


//---------------------------- POP UP 6 BUTTONS MENU --------------------------- //
var speed = 50;
var t0 = Ti.UI.create2DMatrix().scale(0);
var t11 = Ti.UI.create2DMatrix().scale(1.1);
var t1 = Ti.UI.create2DMatrix().scale(1.0);
var a0 = Ti.UI.createAnimation({duration:150, transform:t0});
var a1 = Ti.UI.createAnimation({duration:150, transform:t11});
var a2 = Ti.UI.createAnimation({duration:250, transform:t1});
var b1 = Ti.UI.createAnimation({duration:150+speed*2, transform:t11});
var b2 = Ti.UI.createAnimation({duration:250, transform:t1});
var c1 = Ti.UI.createAnimation({duration:150+speed*3, transform:t11});
var c2 = Ti.UI.createAnimation({duration:250, transform:t1});

var d1 = Ti.UI.createAnimation({duration:150+speed*4, transform:t11});
var d2 = Ti.UI.createAnimation({duration:250, transform:t1});
var e1 = Ti.UI.createAnimation({duration:150+speed*5, transform:t11});
var e2 = Ti.UI.createAnimation({duration:250, transform:t1});
var f1 = Ti.UI.createAnimation({duration:150+speed*6, transform:t11});
var f2 = Ti.UI.createAnimation({duration:250, transform:t1});

var btn1 = Ti.UI.createButton({title:'Hotel',width:96,height:60,top:5,left:10,zIndex:10,transform:t0,backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png",font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'}});
btn1.addEventListener('click', function(){
	//Ti.App.fireEvent('app:hotel');
	//Ti.App.fireEvent('app:close menu');
	closeButton();
});
var btn2 = Ti.UI.createButton({title:'Social',width:96,height:60,top:5,left:110,zIndex:10,transform:t0,backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png",font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'}});
var btn3 = Ti.UI.createButton({title:'Dining',width:96,height:60,top:5,left:210,zIndex:10,transform:t0,backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png",font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'}});

var btn4 = Ti.UI.createButton({title:'button4',width:96,height:60,top:70,left:10,zIndex:10,transform:t0,backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png",font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'}});
var btn5 = Ti.UI.createButton({title:'button5',width:96,height:60,top:70,left:110,zIndex:10,transform:t0,backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png",font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'}});
var btn6 = Ti.UI.createButton({title:'button6',width:96,height:60,top:70,left:210,zIndex:10,transform:t0,backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png",font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'}});

// click to close all button
var closeBtn = Ti.UI.createButton({title:'Cancel',width:50,height:30,top:6,right:5,visible:false,
font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
backgroundImage:'Pictures/genting_ic_h.png',backgroundSelectedImage:'Pictures/genting_ic_n.png'});
closeBtn.addEventListener('click', function(){
	closeButton();
});

function closeButton(){
	btn1.animate(a0);
	btn2.animate(a0);
	btn3.animate(a0);
	btn4.animate(a0);
	btn5.animate(a0);
	btn6.animate(a0);
	closeBtn.visible = false;
	darkScreen.fadeOut();
}

// a view to hold all 6 buttons
var buttonView = Ti.UI.createView({top:0,width:320, height:150});
buttonView.add(btn1);buttonView.add(btn2);buttonView.add(btn3);buttonView.add(btn4);buttonView.add(btn5);buttonView.add(btn6);main.add(closeBtn);
mainView.add(buttonView);

// Create a dark screen that will fade out everything at the background
var darkScreen = Ti.UI.createView({
	backgroundColor:"black",
	width:320,
	height:436,
	top:0,
	opacity:0.0,
	zIndex:0
});
buttonView.add(darkScreen);
darkScreen.fadeIn = function(){
	Ti.API.info('Dark Screen: show FADE IN');
	darkScreen.animate({opacity:0.85,duration:150});
	
}
darkScreen.fadeOut = function(){
	Ti.API.info('Dark Screen: show FADE OUT');
	var a = Ti.UI.createAnimation({opacity:0.0,duration:150});
	darkScreen.animate(a);
	
	// here we use animation, because navGroup.remove()got parameter inside
	// normal callback won't allow u to pass function with parameter
}
// listen for event to activate
Ti.App.addEventListener('app:debug', function(e){
	Ti.API.warn('heard app:explore');
	closeBtn.visible = true;
	// create first transform to go beyond normal size
	btn1.animate(a1);
	a1.addEventListener('complete', function(){btn1.animate(a2);});
	
	btn2.animate(b1);
	b1.addEventListener('complete', function(){btn2.animate(b2);});
	
	btn3.animate(c1);
	c1.addEventListener('complete', function(){btn3.animate(c2);});
	
	btn4.animate(d1);
	d1.addEventListener('complete', function(){btn4.animate(d2);});
	
	btn5.animate(e1);
	e1.addEventListener('complete', function(){btn5.animate(e2);});
	
	btn6.animate(f1);
	f1.addEventListener('complete', function(){btn6.animate(f2);});
	
	// show the half transparent view to darken out all behind
	darkScreen.fadeIn();
	
	//btn.animate(1);
	//1.addEventListener('complete', function(){btn.animate(2);});
});
// --------------------- END OF POP UP BUTTON ---------------------- //


// contain all more button
var more = Ti.UI.createView({width:96,height:120,top:0,right:0});
var moreActive = false;	// check if more button is active
// remove the more button and the rest
Ti.App.addEventListener('app:close more', function(e){
	more.animate({opacity:0.0, duration:250}, function(){
		more.visible = false;
		moreActive = false;
		dropDown.visible = false;
		more.opacity=1.0;
	});
});
var dropDown = Ti.UI.createView({
		backgroundImage:'Pictures/genting_ic_n.png',
		width:96,
		height:87,
		top:45,
		opacity:0.85,
		right:0,
		visible:false,
});
// add right nav for "more" button
Ti.App.addEventListener('app:more', function(e){
	more.visible = true;
	var moreButton = Ti.UI.createView({
		width:22,
		height:22,
		top:9,
		right:10,
		font:{fontSize:15, fontWeight:'bold'},
		backgroundImage:'Pictures/gt_ic_star.png',
		backgroundSelectedImage:'Pictures/gt_ic_star.png'
	});
	
	var shareButton = Ti.UI.createButton({
		title:'Share',
		width:80,
		height:30,
		top:5,
		left:10,
		font:{fontSize:15, fontWeight:'bold'},
		backgroundImage:'Pictures/genting_ic_h.png',
		backgroundSelectedImage:'Pictures/genting_ic_n.png'
	});
	
	var favButton = Ti.UI.createButton({
		title:'Favourite',
		width:80,
		height:30,
		top:45,
		left:10,
		font:{fontSize:15, fontWeight:'bold'},
		backgroundImage:'Pictures/genting_ic_h.png',
		backgroundSelectedImage:'Pictures/genting_ic_n.png'
	});
	dropDown.add(shareButton);
	dropDown.add(favButton);
	moreButton.addEventListener('click', function(){
		if(!moreActive)
		{
			moreActive = true;
			dropDown.visible = true;
		}
		else{
			moreActive = false;
			dropDown.visible = false;
		}
	});
	more.add(moreButton);
	more.add(dropDown);
	main.add(more);
});
//---------------------- End of navigation event --------------------- //

//---------------------- Generate Menu --------------------- //
// bottom menu
var secondaryMenu = Menu.createSecondaryMenu(navGroup);
secondaryMenu.open();
navGroup.add(secondaryMenu);

// add the debug button to change locale
var localeIndex = 0;
var locales = [{country:'MY', language:'zh'},{ country: 'US', language: 'en'}];

var switchLocaleBtn = Ti.UI.createButton({title:'switch', top:0, height:30, width:100});
	switchLocaleBtn.addEventListener('click', function(){
		//var locale = locales[localeIndex++ % locales.length];
		//i18n.forceNewLocale(locale.language,locale.country);
		//Menu.changeButtonLocale();
	});
//main.add(switchLocaleBtn);

Ti.App.addEventListener('app:change locale',function(){
	// ----- change the main menu button image to chinese image ----- //
		navGroup.remove(secondaryMenu);
		
		localeIndex = localeIndex + 1;
		
		if((localeIndex % 2) === 1){
			var newMenu = Menu.createSecondaryMenu(navGroup,true);
			secondaryMenu = newMenu;
			secondaryMenu.open();
			navGroup.add(secondaryMenu);
		}
		else{
			var newMenu = Menu.createSecondaryMenu(navGroup);
			secondaryMenu = newMenu;
			secondaryMenu.open();
			navGroup.add(secondaryMenu);
		}
	// ----- End of change main menu image ----- //
});

//---------------------- Orientation --------------------- //
main.orientationModes = [
	Ti.UI.PORTRAIT,
	//Ti.UI.UPSIDE_PORTRAIT,
	//Ti.UI.LANDSCAPE_LEFT,
	//Ti.UI.LANDSCAPE_RIGHT,
];
/*
Ti.Gesture.addEventListener('orientationchange',function(e)
{
	// get orienation from event object
	var orientation = getOrientation(e.orientation);
	Titanium.API.info("orientation changed = "+orientation+", is portrait?"+e.source.isPortrait()+", orientation = "+Ti.Gesture.orientation + " is landscape?"+e.source.isLandscape());
	
	switch(e.orientation){
		case 1: // Portrait
			navGroup.remove(secondaryMenu);
			var newMenu = Menu.createSecondaryMenu(navGroup);
			secondaryMenu = newMenu;
			secondaryMenu.open();
			navGroup.add(secondaryMenu);
			break;
		case 4:	// Landscape Left
			isLandscape();
			break;
	}
});

function isLandscape(){
	navGroup.remove(secondaryMenu);
	var newMenu = Menu2.createSecondaryMenu(navGroup);
	secondaryMenu = newMenu;
	secondaryMenu.open();
	navGroup.add(secondaryMenu);
}
*/

function getOrientation(o)
{
	switch (o)
	{
		case Titanium.UI.PORTRAIT:
			return 'portrait';
		case Titanium.UI.UPSIDE_PORTRAIT:
			return 'reverse portrait';
		case Titanium.UI.LANDSCAPE_LEFT:
			return 'landscape';
		case Titanium.UI.LANDSCAPE_RIGHT:
			return 'reverse landscape';
		case Titanium.UI.FACE_UP:
			return 'face up';
		case Titanium.UI.FACE_DOWN:
			return 'face down';
		case Titanium.UI.UNKNOWN:
			return 'unknown';
	}
}

//---------------------- End of Orientation --------------------- //
