exports.createiHolidayWindow = function(navGroup){
	var win = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
	});
	
	var webview = Ti.UI.createWebView({url:'https://book.rwgenting.com/ver2.0/index.aspx'});
	win.add(webview);
	
	return win;
};
