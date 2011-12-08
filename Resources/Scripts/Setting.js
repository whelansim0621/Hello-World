exports.createSettingWindow = function(navGroup){
	var win = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
	});
	
	var lbl1 = Ti.UI.createLabel({width:'auto',height:30,top:0,color:'white',
		font:{fontSize:16, fontWeight:'bold'},
		text:'Setting'});
	win.add(lbl1);
	
	var lbl2 = Ti.UI.createLabel({width:'auto',height:30,top:50,left:30,color:'white',
		font:{fontSize:16, fontWeight:'bold'},
		text:'International'});
	win.add(lbl2);
	var langButton = Ti.UI.createButton({
		title:'Language:                     English',
		width:250,
		height:37,
		top:80,
		left:30
	});
	var index = 0;
	langButton.addEventListener('click', function(){
		index = index + 1;
		((index % 2)===1)?langButton.title = 'Language:                     简体中文':langButton.title = 'Language:                     English';
		Ti.App.fireEvent('app:change locale');
	});
	win.add(langButton);
	
	var lbl3 = Ti.UI.createLabel({width:'auto',height:30,top:150,left:30,color:'white',
		font:{fontSize:16, fontWeight:'bold'},
		text:'Sharing'});
	win.add(lbl3);
	
	var FBlbl = Ti.UI.createLabel({width:250,height:30,top:185,left:30,color:'black',
		font:{fontSize:16, fontWeight:'bold'},backgroundColor:'white', borderRadius:5,
		text:'   Facebook'});
	var fb = Ti.UI.createView({width:66,height:22,right:10,backgroundImage:'Pictures/facebook.png'});
	FBlbl.add(fb);
	win.add(FBlbl);
	
	var TWlbl = Ti.UI.createLabel({width:250,height:30,top:225,left:30,color:'black',
		font:{fontSize:16, fontWeight:'bold'},backgroundColor:'white', borderRadius:5,
		text:'   Twitter'});
	var tw = Ti.UI.createView({width:66,height:22,right:10,backgroundImage:'Pictures/twitter.png'});
	TWlbl.add(tw);
	win.add(TWlbl);
	
	var FSlbl = Ti.UI.createLabel({width:250,height:30,top:265,left:30,color:'black',
		font:{fontSize:16, fontWeight:'bold'},backgroundColor:'white', borderRadius:5,
		text:'   Foursquare'});
	var fs = Ti.UI.createView({width:80,height:35,right:5,backgroundImage:'Pictures/foursquare.png'});
	FSlbl.add(fs);
	//win.add(FSlbl);
	
	return win;
};
