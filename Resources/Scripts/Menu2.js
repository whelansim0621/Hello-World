// 1st make a normal view, then the normal view will add another scrollable view as child
var menuView2 = Ti.UI.createView({width:480,height:106,bottom:-80,zIndex:5});
// because the scrollable view will eat up 10 pixel, u can't put pic below it. So we need to add the background directly to menuView2.
// if not u will see bottom 10 pixel able to see through , very ugly
var menuView2BG = Ti.UI.createView({width:480,height:80,bottom:0,backgroundImage:"Pictures/drawer-bg-secondary.png"})
menuView2.add(menuView2BG);

menuView2.addEventListener('click', function(){
	Ti.API.info('menuview2');
});

var active1 = false;
var active2 = false;
var active3 = false;


//|******************************************************************************|//
//|                              SECONDARY MENU  BOTTOM                          |//
//|------------------------------------------------------------------------------|//
//|******************************************************************************|//
exports.createSecondaryMenu = function(navGroup){
var secondaryView = Ti.UI.createScrollableView({width:480,height:75,bottom:0,zIndex:10,
	maxZoomScale:2.0,
	pagingControlHeight:10,
	pagingControlColor:'transparent',
	showPagingControl:true,
	currentPage:0,
});
var btnHighlight = Ti.UI.createView({backgroundImage:"Pictures/genting_ic_n.png", width:84,height:60, opacity:0.5, top:5});
secondaryView.addEventListener('click', function(e){
	Ti.API.info('click: secondaryView');
	var a = Math.floor(e.x/96);
	var fullPath = a + secondaryView.currentPage*5 + 1;
	Ti.API.info('a: ' + a + '  currentPage:' + secondaryView.currentPage + '  fullPath:' + fullPath);
	btnHighlight.left = a * 96 + (10 - a - a*0.7);
	secondaryView.add(btnHighlight);
});

// check selection
secondaryView.addEventListener('touchend', function(e){
	Ti.API.info('touchend');
	var a = Math.floor(e.x/96);
	var fullPath = a + secondaryView.currentPage*5 + 1;
	Ti.API.info('a: ' + a + '  currentPage:' + secondaryView.currentPage + '  fullPath: ' + fullPath);
	secondaryView.remove(btnHighlight);
});

secondaryView.addEventListener('touchmove', function(){
	secondaryView.remove(btnHighlight);
});

var secondaryBG = Ti.UI.createView({width:480,height:75,top:0,layout:"horizontal"})

// ---------------------- button ----------------------------- //
var btnWidth = 84;
var button_2_1 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_1 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'My Account',
});
button_2_1.add(label_2_1);
button_2_1.addEventListener("touchmove", function(){
	Ti.API.info('button_2_1 is clicked');
	Ti.App.fireEvent("app:member");
	//Ti.App.fireEvent('app:explore');
	closeAllMenu();
});
secondaryBG.add(button_2_1);

var button_2_2 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var icon2 = Ti.UI.createView({width:55,height:55, top:0, backgroundImage:""});
button_2_2.add(icon2);
var label_2_2 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'iHoliday',
});
button_2_2.add(label_2_2);
button_2_2.addEventListener("click", function(){
	Ti.API.info('button_2_2 is clicked');
	Ti.App.fireEvent("app:iHoliday");
});
secondaryBG.add(button_2_2);

var button_2_3 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_3 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Highlights',
});
button_2_3.add(label_2_3);
button_2_3.addEventListener("click", function(){
	Ti.API.info('button_2_3 is clicked');
	Ti.App.fireEvent("app:highlight");
	closeAllMenu();
});
secondaryBG.add(button_2_3);

var button_2_4 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
secondaryBG.add(button_2_4);
var icon4 = Ti.UI.createView({width:55,height:55, top:0, backgroundImage:"Pictures/internet_ic.png"});
button_2_4.add(icon4);
var label_2_4 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Social',
});
button_2_4.addEventListener("click", function(){
	Ti.API.info('button_2_3 is clicked');
	Ti.App.fireEvent("app:social");
	closeAllMenu();
});
button_2_4.add(label_2_4);

var button_2_5 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_5 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'My Planner',
});
button_2_5.add(label_2_5);
button_2_5.addEventListener("click", function(){
	Ti.API.info('button_2_3 is clicked');
	Ti.App.fireEvent("app:myPlanner");
	closeAllMenu();
});
secondaryBG.add(button_2_5);

// --------------- 2nd page button ---------------------- //
var secondaryBG2 = Ti.UI.createView({width:480,height:75,top:0,layout:"horizontal"})

var button_2_6 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_6 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Shows & Events',
});
button_2_6.addEventListener("click", function(){
	Ti.API.info('button_2_6 is clicked');
	Ti.App.fireEvent("app:shows");
	closeAllMenu();
});
button_2_6.add(label_2_6);
secondaryBG2.add(button_2_6);

var button_2_7 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_7 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Hotel',
});
button_2_7.add(label_2_7);
button_2_7.addEventListener("click", function(){
	Ti.API.info('button_2_7 is clicked');
	Ti.App.fireEvent("app:hotel");
	closeAllMenu();
});
secondaryBG2.add(button_2_7);

var button_2_8 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_8 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Dining',
});
button_2_8.addEventListener("click", function(){
	Ti.API.info('button_2_8 is clicked');
	Ti.App.fireEvent("app:dining");
	closeAllMenu();
});
button_2_8.add(label_2_8);
secondaryBG2.add(button_2_8);

var button_2_9 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_9 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Theme Park',
});
button_2_9.addEventListener("click", function(){
	Ti.API.info('button_2_9 is clicked');
	Ti.App.fireEvent("app:themePark");
	closeAllMenu();
});
button_2_9.add(label_2_9);
secondaryBG2.add(button_2_9);

var button_2_10 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_10 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Getting There',
});
button_2_10.addEventListener("click", function(){
	Ti.API.info('button_2_10 is clicked');
	Ti.App.fireEvent("app:getting");
	closeAllMenu();
});
button_2_10.add(label_2_10);
secondaryBG2.add(button_2_10);

// --------------- 3rd page button ---------------------- //
var secondaryBG3 = Ti.UI.createView({width:480,height:75,top:0,layout:"horizontal"})

var button_2_11 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_11 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'Weather',
});
button_2_11.addEventListener("click", function(){
	Ti.API.info('button_2_11 is clicked');
	Ti.App.fireEvent("app:weather");
	closeAllMenu();
});
button_2_11.add(label_2_11);
secondaryBG3.add(button_2_11);

var button_2_12 = Ti.UI.createButton({width:btnWidth,height:60,top:5,left:10,
	backgroundImage:"Pictures/genting_ic_h.png",
	backgroundSelectedImage:"Pictures/genting_ic_n.png"
});
var label_2_12 = Ti.UI.createLabel({width:'auto',height:'auto',color:'white',bottom:5,font:{fontSize:13, fontWeight:'bold', fontFamily:'Helvetica Neue'},
	text:'More',
});
button_2_12.addEventListener("click", function(){
	Ti.API.info('button_2_12 is clicked');
	Ti.App.fireEvent("app:moreOption");
	closeAllMenu();
});
button_2_12.add(label_2_12);
secondaryBG3.add(button_2_12);
// -------------------------- end of button -------------------------- //

var secondaryTab = Ti.UI.createView({width:97,height:26,top:0,zIndex:6,
	backgroundImage:"Pictures/drawer-tab_2.png"
});
secondaryTab.addEventListener("click", function(){
	(!active2)?open():close();
});

secondaryView.addView(secondaryBG);
secondaryView.addView(secondaryBG2);
secondaryView.addView(secondaryBG3);
menuView2.add(secondaryView);
menuView2.add(secondaryTab);

button_2_1.touchEnabled = false;
button_2_2.touchEnabled = false;
button_2_3.touchEnabled = false;
button_2_4.touchEnabled = false;
button_2_5.touchEnabled = false;
button_2_6.touchEnabled = false;
button_2_7.touchEnabled = false;
button_2_8.touchEnabled = false;
button_2_9.touchEnabled = false;
button_2_10.touchEnabled = false;
button_2_11.touchEnabled = false;
button_2_12.touchEnabled = false;
// -------------------- End of Secondary Menu -------------------------- //

//----------------------- animation set up --------------------//
var slideIn = Ti.UI.createAnimation({
	bottom:0,
	duration:250
});

var slideOut = Ti.UI.createAnimation({
	bottom:-80,
	duration:250
});
//------------------- end of animation set up --------------------//

// open & close
var open = function(){
	Ti.API.warn("Opening Secondary Menu");
	active2 = true;
	menuView2.animate(slideIn);
}

var close = function(){
	Ti.API.warn("Closing Secondary Menu");
	active2 = false;
	menuView2.animate(slideOut);
}

// chain animation: close secondary first. when complete, open primary
var close_open = function(){
	Ti.API.warn("Closing open");
	active2 = false;
	// this one, if use animation object "slideOut", the menuView1.open won't be called
	// if use animation object, need addEventListener to allow callback.
	// to save removing event listener, rather use this instead
	menuView2.animate({bottom:-80,duration:250},menuView1.open);
}

// export method. So it can be called outside through object create from this class
menuView2.open = open;
menuView2.close = close;
menuView2.close_open = close_open;

return menuView2;
};

// close all the menu & fadeout dark screen
function closeAllMenu(){
	//menuView1.close();
	menuView2.close();
	//darkScreen.fadeOut();
}

Ti.App.addEventListener('app:close menu', function(){
	closeAllMenu();
});
