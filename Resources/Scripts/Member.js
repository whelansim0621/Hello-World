exports.createMemberWindow = function(navGroup){
	var win = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures2/1b_bgd_460px.png',
	});
	
	var headerView = Ti.UI.createView({width:320, height:30,top:0,backgroundImage:"Pictures2/1b_banner.png"});
	var lbl1 = Ti.UI.createLabel({text:'About Us',textAlign:'center',font:{fontSize:13, fontWeight:'bold'},width:'auto',color:'white',height:20});
	headerView.add(lbl1);
	win.add(headerView);
	
	var promo1View = Ti.UI.createView({
	width:320,
	height:180,
	top:30,
	});
	win.add(promo1View);

	// photo section
	var img1 = Ti.UI.createView({width:320,height:180,left:0,top:0,backgroundImage:'Pictures2/1b_landing_img1.png'});
	promo1View.add(img1);
	
	var label = Ti.UI.createLabel({
		text:'This makes the condominium appealing to both working professional and students in,making it an attractive investment for investors who seek quality development and a ready catchment area. The local and international student population is estimated at 30,000 at any one time. It meets the key rules of property investment - potentially high capital appreciation and attractive rental yield supported by the ever-growing sustainable demand in prime location with established infrastructure and abundance amenities.',
		width:300,
		height:'auto',
		color:'white',
		font:{fontSize:12, fontFamily:'Helvetica Neue'},
		top:222,
		left:10,
		textAlign:'left'
	});
	win.add(label);		
	
	return win;
};
