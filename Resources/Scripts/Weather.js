exports.createWeatherWindow = function(navGroup){
	var win = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
	});
	
	var headerView = Ti.UI.createView({width:320, height:30,top:0,backgroundImage:"Pictures/gt_rss_bgd_1.png"});
	var lbl1 = Ti.UI.createLabel({text:'Weather',textAlign:'center',font:{fontSize:13, fontWeight:'bold'},width:'auto',color:'white',height:20,});
	headerView.add(lbl1);
	win.add(headerView);
	
	var weatherView = Ti.UI.createView({width:281, height:344.5, top:40, backgroundImage:'Pictures/gt_weather.png'});

	win.add(weatherView);
	return win;
};
