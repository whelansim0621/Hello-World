exports.createSocialWindow = function(navGroup){
	var win = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures2/1b_bgd_460px.png',
	});
	
	var headerView = Ti.UI.createView({width:320, height:30,top:0,backgroundImage:"Pictures2/1b_banner.png"});
	var lbl1 = Ti.UI.createLabel({text:'Contact Us',textAlign:'center',font:{fontSize:13, fontWeight:'bold'},width:'auto',color:'white',height:20});
	headerView.add(lbl1);
	win.add(headerView);
	
	var logo = Ti.UI.createView({width:320, height:386,top:30,backgroundImage:"Pictures2/contactPage.png"});
	win.add(logo);
	
	return win;
};
