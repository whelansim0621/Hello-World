exports.createMoreWindow = function(navGroup){
	var win = Ti.UI.createWindow();
	
	// custom table view
	var customData = [
	 {pic:'Pictures/hotel_maxims.png', name:'Favourite', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_themePark.png', name:'Setting', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Contact us', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Website', desc:'we extend the highest', hasChild:true}];

	var data =[];
	
	// we have to manually design for each role. Manually put the image, its position, text etc
	for(var i = 0; i < customData.length; i++) {
		var row = Ti.UI.createTableViewRow();
				
		var name = Ti.UI.createLabel({text:customData[i].name,textAlign:'left',font:{fontSize:15, fontWeight:'bold'},
			width:'auto',color:'white', left:10, height:20});
		
		// add those customized data to row
		row.add(name);
		row.hasChild = customData[i].hasChild;
		row.backgroundImage = 'Pictures/gt_list_bgd_1.png';
		row.selectedBackgroundImage = 'Pictures/gt_list_bgd_3.png';
		row.height = 40;
		row.className = "shows_row";
		

		// after set up the row, push it into data
		data.push(row);
	};
	
	var headerView = Ti.UI.createView({width:320, height:30,backgroundImage:"Pictures/gt_rss_bgd_1.png"});
	var lbl1 = Ti.UI.createLabel({
			text:'More',
			font:{fontSize:13, fontWeight:'bold'},
			width:'auto',
			color:'white',
			height:20,
		});
	headerView.add(lbl1);
	var table = Ti.UI.createTableView({
		data:data,
		backgroundColor:'transparent',
		separatorStyle:"transparent",
		headerView:headerView,
	});
	
	table.addEventListener('click', function(e){
		var index = e.index;
	switch(index){
		case 0: break;
		case 1: Ti.App.fireEvent('app:setting');break;
		case 2: 
			createEmail();
			break;
		
		case 3: 
			Ti.API.info("Genting FB fan page");
			var webview = Ti.UI.createWebView({url:'http://www.rwgenting.com/'});
			var window = Ti.UI.createWindow({width:320,height:436,top:43});
			window.add(webview);
			navGroup.open(window);
			break;
		
		default: alert('unknown selection');break;
	}
	});
	
	win.add(table);
	
	return win;
};

function createEmail(){
	Ti.API.info('Creating Email');
	var emailDialog = Ti.UI.createEmailDialog();
			if(!emailDialog.isSupported()){
				Ti.UI.createAlertDialog({
					title:'Error',
					message:'Please set up your email on iphone'
				}).show();
				return
			}
			emailDialog.setSubject('Genting service request');
			emailDialog.setToRecipients(['customercare@genting.com ']);
			//emailDialog.setHtml(true);
			//emailDialog.setBarColor('#336699');
			
			//emailDialog.addAttachment(event.media);
			
			emailDialog.addEventListener('complete', function(e){
				if(e.result == emailDialog.SENT){
					alert('message was sent');
				}
				else
				{
					alert('message was not sent, because: ' + e.result);
				}
			});
	emailDialog.open();
}
