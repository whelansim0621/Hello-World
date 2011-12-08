var Menu = require('Scripts/Menu'), Hotel = require('Scripts/Hotel'), 
Social = require('Scripts/Social'), Setting = require('Scripts/Setting'),
Member = require('Scripts/Member');

exports.Main = function(){
var main = Ti.UI.createWindow();

var win1 = Ti.UI.createWindow({
	backgroundColor:"white",
	barImage:"Pictures/genting_nav.png",
	zIndex:0
});

var navGroup = Ti.UI.iPhone.createNavigationGroup({window:win1});

main.add(navGroup);
main.open();

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
splashScreen.addEventListener("focus", function(){
	splashScreen.add(animatedLogo);
	animatedLogo.start();
});

// animated logo
var logoSequence = [];
for(var i = 1; i < 50; i++){
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
			splashScreen.close();
		});
	},1000)
});
// ------------------- End Splash Screen Animation ------------------- //


// -------------- Landing Page ---------------- //
var scrollView = Ti.UI.createScrollView({
	contentWidth:'auto',
	contentHeight:'auto',
	layout:"vertical",
	showVerticalScrollIndicator:true,
	backgroundImage:'Pictures/genting_bgd.png',
	top:0
});
var gap = 15;

var filter1 = Ti.UI.createImageView({image:'Pictures/menu_filter.png',width:320,height:190,top:0});
var filter2 = Ti.UI.createImageView({image:'Pictures/menu_filter.png',width:320,height:190,top:0});
var filter3 = Ti.UI.createImageView({image:'Pictures/menu_filter.png',width:320,height:190,top:0});
var filter4 = Ti.UI.createImageView({image:'Pictures/menu_filter.png',width:320,height:190,top:0});
var filter5 = Ti.UI.createImageView({image:'Pictures/menu_filter.png',width:320,height:190,top:0});

var promo1View = Ti.UI.createView({
	width:298,
	height:190,
	top:0,
});
var promo1 = Ti.UI.createImageView({
	width:298,
	height:130,
	top:0,
	image:"Pictures/p1.png",
});
promo1View.add(promo1);
promo1View.add(filter1);
promo1View.addEventListener('click', function(){
	var view = Ti.UI.createWindow({
		backgroundImage:'Pictures/wristband.jpg'
	});
	navGroup.open(view);
});

var promo2 = Ti.UI.createImageView({
	width:298,
	height:130,
	top:gap,
	image:"Pictures/p2.png",
});
var promo2View = Ti.UI.createView({
	width:298,
	height:190,
	top:0,
});
promo2View.add(promo2);
promo2View.add(filter2);

var promo3 = Ti.UI.createImageView({
	width:298,
	height:130,
	top:gap,
	image:"Pictures/p3.png",
});
var promo3View = Ti.UI.createView({
	width:298,
	height:190,
	top:0,
});
promo3View.add(promo3);
promo3View.add(filter3);

var promo4 = Ti.UI.createImageView({
	width:300,
	height:130,
	top:gap,
	image:"Pictures/p1.png",
});
var promo4View = Ti.UI.createView({
	width:298,
	height:190,
	top:0,
});
promo4View.add(promo4);
promo4View.add(filter4);


var promo5 = Ti.UI.createImageView({
	width:300,
	height:130,
	top:gap,
	image:"Pictures/p2.png",
});
var promo5View = Ti.UI.createView({
	width:298,
	height:190,
	top:0,
});
promo5View.add(promo5);
promo5View.add(filter5);
scrollView.add(promo1View);
scrollView.add(promo2View);
scrollView.add(promo3View);
scrollView.add(promo4View);
scrollView.add(promo5View);

win1.add(scrollView);

// Set up different window
var hotel = Hotel.createHotelWindow(navGroup);
var social = Social.createSocialWindow(navGroup);
var setting = Setting.createSettingWindow(navGroup);
var member = Member.createMemberWindow(navGroup);
//---------------------- NAVIGATION MANAGER BY APP EVENT --------------------- //
// open member window
Ti.App.addEventListener("app:member", function(e){
	Ti.API.warn('heard app:member');
	Ti.API.warn(Hotel.currentState());
	navGroup.open(member);
	Hotel.putStateActive();
	Ti.API.warn(Hotel.currentState());
});

// open hotel window
Ti.App.addEventListener("app:hotel", function(e){
	Ti.API.warn('heard app:hotel');
	navGroup.open(hotel);
	//win1.add(hotel);
	//hotel.open();
});

// open social window
Ti.App.addEventListener("app:social", function(e){
	Ti.API.warn('heard app:social');
	navGroup.open(social);
});

// open Setting window
Ti.App.addEventListener("app:setting", function(e){
	Ti.API.warn('heard app:setting');
	navGroup.open(setting);
});

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
	var moreButton = Ti.UI.createButton({
		title:'More',
		width:50,
		height:30,
		top:6,
		right:5,
		font:{fontSize:15, fontWeight:'bold'},
		backgroundImage:'Pictures/genting_ic_h.png',
		backgroundSelectedImage:'Pictures/genting_ic_n.png'
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
var secondaryMenu = Menu.createSecondaryMenu(navGroup);
var primaryMenu = Menu.createPrimaryMenu(navGroup);
navGroup.add(secondaryMenu);
navGroup.add(primaryMenu);
return main;
}
