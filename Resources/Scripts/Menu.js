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

exports.createSecondaryMenu = function(navGroup, isChinese){
var data = [];

// ---------------------- button ----------------------------- //
button_2_1 = Ti.UI.createDashboardItem({
		image:"Pictures2/about.png",
		selectedImage:"Pictures2/about_selected.png",
});
if(isChinese === true){
	button_2_1.image = "Pictures2/about.png";
	button_2_1.selectedImage = "Pictures2/about_selected.png";
}
button_2_1.addEventListener("click", function(){
	Ti.API.info('button_2_1 is clicked');
	Ti.App.fireEvent("app:member");
	closeAllMenu();
});
data.push(button_2_1);

button_2_2 = Ti.UI.createDashboardItem({
	image:"Pictures2/project.png",
	selectedImage:"Pictures2/project_selected.png",
	label:'iHoliday'
});
button_2_2.addEventListener("click", function(){
	Ti.API.info('button_2_2 is clicked');
	Ti.App.fireEvent("app:hotel");
	closeAllMenu();
});
data.push(button_2_2);

button_2_3 = Ti.UI.createDashboardItem({
	image:"Pictures2/latestnew.png",
	selectedImage:"Pictures2/latestnew_selected.png",
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
	image:"Pictures2/contact.png",
	selectedImage:"Pictures2/contact_selected.png",
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
	image:"Pictures2/setting.png",
	selectedImage:"Pictures2/setting_selected.png",
	label:'My Planner'
});
if(isChinese === true){
	button_2_5.image = "Pictures/Menu/myPlanner_c.png";
	button_2_5.selectedImage = "Pictures/Menu/myPlanner_c2.png";
}

button_2_5.addEventListener("click", function(){
	Ti.API.info('button_2_5 is clicked');
	//Ti.App.fireEvent("app:myPlanner");
	closeAllMenu();
});
data.push(button_2_5);

// -------------------------- end of button -------------------------- //

// -------------------------- CREATE DASHBOARD -------------------------- //
// create one view to hold dashboard view so we can control its placement. Workaround to clear bottom empty space
menuView2 = Ti.UI.createView({
	width:320,
	height:250,
	bottom:0,
});

var dashboard = Titanium.UI.createDashboardView({
	width:320,
	height:250,
	top:26,
	data:data,
	editable:false,
	backgroundImage:"Pictures2/1b_menu_tab_1.png"
});
menuView2.add(dashboard);

// cover up the dashboard bottom dot space, avoid programmatically slide
var cover = Ti.UI.createView({
	width:320,
	height:18,
	backgroundColor:'transparent',
	//opacity:0.3,
	bottom:0
});
menuView2.add(cover);
// -------------------------- END OF DASHBOARD -------------------------- //

var secondaryTab = Ti.UI.createView({width:97,height:26,top:0,zIndex:6,
	backgroundImage:"Pictures2/1b_menu_tab_2.png"
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
