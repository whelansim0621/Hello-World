var menuView2;

//var menuView2BG = Ti.UI.createView({width:320,height:148,bottom:0,backgroundImage:"Pictures/drawer-bg-secondary.png"})
//menuView2.add(menuView2BG);

var active1 = false;
var active2 = false;
var active3 = false;

//|******************************************************************************|//
//|                              SECONDARY MENU  BOTTOM                          |//
//|------------------------------------------------------------------------------|//
//|******************************************************************************|//
var button_2_1;
var button_2_2;
var button_2_3;
var button_2_4;
var button_2_5;
var button_2_6;

var button_2_7;
var button_2_8;
var button_2_9;
var button_2_10;
var button_2_11;
var button_2_12;

exports.createLandscapeMenu = function(navGroup, isChinese){
var data = [];

// ---------------------- button ----------------------------- //
button_2_1 = Ti.UI.createDashboardItem({
		image:"Pictures/Menu/myAccount.png",
		selectedImage:"Pictures/Menu/myAccount2.png",
		//label:I('startup.labelCountry')
		label:'myAccount'
});
if(isChinese === true){
	button_2_1.image = "Pictures/Menu/myAccount_c.png";
	button_2_1.selectedImage = "Pictures/Menu/myAccount_c2.png";
}
button_2_1.addEventListener("click", function(){
	Ti.API.info('button_2_1 is clicked');
	Ti.App.fireEvent("app:member");
	closeAllMenu();
});
data.push(button_2_1);

button_2_2 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/iHoliday.png",
	selectedImage:"Pictures/Menu/iHoliday2.png",
	label:'iHoliday'
});
button_2_2.addEventListener("click", function(){
	Ti.API.info('button_2_2 is clicked');
	Ti.App.fireEvent("app:iHoliday");
	closeAllMenu();
});
data.push(button_2_2);

button_2_3 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/highlights.png",
	selectedImage:"Pictures/Menu/highlights2.png",
	label:'Highlights'
});
if(isChinese === true){
	button_2_3.image = "Pictures/Menu/highlights_c.png";
	button_2_3.selectedImage = "Pictures/Menu/highlights_c2.png";
}
button_2_3.addEventListener("click", function(){
	Ti.API.info('button_2_3 is clicked');
	Ti.App.fireEvent("app:highlight");
	closeAllMenu();
});
data.push(button_2_3);

button_2_4 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/social.png",
	selectedImage:"Pictures/Menu/social2.png",
	label:'Social'
});
if(isChinese === true){
	button_2_4.image = "Pictures/Menu/social_c.png";
	button_2_4.selectedImage = "Pictures/Menu/social_c2.png";
}

button_2_4.addEventListener("click", function(){
	Ti.API.info('button_2_4 is clicked');
	Ti.App.fireEvent("app:social");
	closeAllMenu();
});
data.push(button_2_4);

button_2_5 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/myPlanner.png",
	selectedImage:"Pictures/Menu/myPlanner2.png",
	label:'My Planner'
});
if(isChinese === true){
	button_2_5.image = "Pictures/Menu/myPlanner_c.png";
	button_2_5.selectedImage = "Pictures/Menu/myPlanner_c2.png";
}

button_2_5.addEventListener("click", function(){
	Ti.API.info('button_2_5 is clicked');
	Ti.App.fireEvent("app:myPlanner");
	closeAllMenu();
});
data.push(button_2_5);

button_2_6 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/shows.png",
	selectedImage:"Pictures/Menu/shows2.png",
	label:'Shows & Events'
});
if(isChinese === true){
	button_2_6.image = "Pictures/Menu/shows_c.png";
	button_2_6.selectedImage = "Pictures/Menu/shows_c2.png";
}
button_2_6.addEventListener("click", function(){
	Ti.API.info('button_2_6 is clicked');
	Ti.App.fireEvent("app:shows");
	closeAllMenu();
});
data.push(button_2_6);

var buttonEmpty = Ti.UI.createDashboardItem({image:""});
data.push(buttonEmpty);
data.push(buttonEmpty);
data.push(buttonEmpty);

// --------------- 2nd page button ---------------------- //

button_2_7 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/hotel.png",
	selectedImage:"Pictures/Menu/hotel2.png",
	label:'Hotel'
});
if(isChinese === true){
	button_2_7.image = "Pictures/Menu/hotel_c.png";
	button_2_7.selectedImage = "Pictures/Menu/hotel_c2.png";
}

button_2_7.addEventListener("click", function(){
	Ti.API.info('button_2_7 is clicked');
	Ti.App.fireEvent("app:hotel");
	closeAllMenu();
});
data.push(button_2_7);

button_2_8 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/dining.png",
	selectedImage:"Pictures/Menu/dining2.png",
	label:'Dining'
});
if(isChinese === true){
	button_2_8.image = "Pictures/Menu/dining_c.png";
	button_2_8.selectedImage = "Pictures/Menu/dining_c2.png";
}
button_2_8.addEventListener("click", function(){
	Ti.API.info('button_2_8 is clicked');
	Ti.App.fireEvent("app:dining");
	closeAllMenu();
});
data.push(button_2_8);

button_2_9 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/themePark.png",
	selectedImage:"Pictures/Menu/themePark2.png",
	label:'Theme Park'
});
if(isChinese === true){
	button_2_9.image = "Pictures/Menu/themePark_c.png";
	button_2_9.selectedImage = "Pictures/Menu/themePark_c2.png";
}
button_2_9.addEventListener("click", function(){
	Ti.API.info('button_2_9 is clicked');
	Ti.App.fireEvent("app:themePark");
	closeAllMenu();
});
data.push(button_2_9);

button_2_10 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/getting.png",
	selectedImage:"Pictures/Menu/getting2.png",
	label:'Getting There'
});
if(isChinese === true){
	button_2_10.image = "Pictures/Menu/getting_c.png";
	button_2_10.selectedImage = "Pictures/Menu/getting_c2.png";
}
button_2_10.addEventListener("click", function(){
	Ti.API.info('button_2_10 is clicked');
	Ti.App.fireEvent("app:getting");
	closeAllMenu();
});
data.push(button_2_10);

button_2_11 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/weather.png",
	selectedImage:"Pictures/Menu/weather2.png",
	label:'Weather'
});
if(isChinese === true){
	button_2_11.image = "Pictures/Menu/weather_c.png";
	button_2_11.selectedImage = "Pictures/Menu/weather_c2.png";
}
button_2_11.addEventListener("click", function(){
	Ti.API.info('button_2_11 is clicked');
	Ti.App.fireEvent("app:weather");
	closeAllMenu();
});
data.push(button_2_11);

button_2_12 = Ti.UI.createDashboardItem({
	image:"Pictures/Menu/more.png",
	selectedImage:"Pictures/Menu/more2.png",
	label:'More'
});
if(isChinese === true){
	button_2_12.image = "Pictures/Menu/more_c.png";
	button_2_12.selectedImage = "Pictures/Menu/more_c2.png";
}
button_2_12.addEventListener("click", function(){
	Ti.API.info('button_2_12 is clicked');
	Ti.App.fireEvent("app:moreOption");
	closeAllMenu();
});
data.push(button_2_12);
// -------------------------- end of button -------------------------- //

// -------------------------- CREATE DASHBOARD -------------------------- //
// create one view to hold dashboard view so we can control its placement. Workaround to clear bottom empty space
menuView2 = Ti.UI.createView({
	width:480,
	height:250,
	bottom:0,
});

var dashboard = Titanium.UI.createDashboardView({
	width:480,
	height:250,
	top:26,
	data:data,
	editable:false,
	backgroundImage:"Pictures/drawer-bg-secondary.png"
});
menuView2.add(dashboard);

// cover up the dashboard bottom 2 dot, avoid programmatically slide by pressing the dot
var cover = Ti.UI.createView({
	width:480,
	height:18,
	backgroundColor:'transparent',
	//opacity:0.3,
	bottom:0
});
menuView2.add(cover);
// -------------------------- END OF DASHBOARD -------------------------- //

var secondaryTab = Ti.UI.createView({width:97,height:26,top:0,zIndex:6,
	backgroundImage:"Pictures/drawer-tab_2.png"
});
secondaryTab.addEventListener("click", function(){
	(!active2)?open():close();
});

menuView2.add(secondaryTab);
// -------------------- End of Secondary Menu -------------------------- //

//----------------------- animation set up --------------------//
var slideIn = Ti.UI.createAnimation({
	bottom:0,
	duration:250
});

var slideOut = Ti.UI.createAnimation({
	bottom:-224,
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
	menuView2.animate({bottom:-148,duration:250},menuView1.open);
}

// export method. So it can be called outside through object create from this class
menuView2.open = open;
menuView2.close = close;
menuView2.close_open = close_open;

return menuView2;
};

// because it is graphic, so need to change from graphic
exports.changeButtonLocale = function(){
	Ti.API.info(dashboard.data.length);
	
	data[0].image = "Pictures/Menu/themePark_c.png";
	data[0].selectedImage = "Pictures/Menu/themePark_c2.png";
	var a = [];
	dashboard.data = a;
	//dashboard.data = data;
}

// close all the menu & fadeout dark screen
function closeAllMenu(){
	//menuView1.close();
	menuView2.close();
	//darkScreen.fadeOut();
}

Ti.App.addEventListener('app:close menu', function(){
	closeAllMenu();
});
