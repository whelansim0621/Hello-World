exports.createGettingWindow = function(navGroup){
	var win = Ti.UI.createWindow({width:320,height:436,top:43,backgroundImage:'Pictures/genting_bgd.png',zIndex:0});
	
	// custom table view
	var customData = [
	 {pic:'Pictures/hotel_maxims.png', name:'Skyway', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_themePark.png', name:'Bus', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Taxi', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Limousine', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Sky Van', desc:'we extend the highest', hasChild:true}];

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
		
		// add event listener to 1st object for prototype
		if(i === 0){
			row.addEventListener('click', function(){
				Ti.API.info('click');
				showGettingThereDetail();
			});
		}	
		// after set up the row, push it into data
		data.push(row);
	};
	
	var headerView = Ti.UI.createView({width:320, height:30,backgroundImage:"Pictures/gt_rss_bgd_1.png"});
	var lbl1 = Ti.UI.createLabel({
			text:'Getting There',
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
	
	win.add(table);

	return win;
};

function showGettingThereDetail(){
	var detailWindow = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
	});
				
	var label0 = Ti.UI.createLabel({
		text:'Getting There',
		width:320,
		height:30,
		color:'white',
		textAlign:'center',
		font:{fontSize:16, fontWeight:'bold',fontFamily:'Helvetica Neue'},
		backgroundImage:"Pictures/gt_rss_bgd_1.png",
		top:0
	});
	detailWindow.add(label0);
	
	var coverFlow = Ti.UI.createCoverFlowView({
		width:320,
		height:150,
		top:30,
		images:['Pictures/gt_hotel_maxims_primier_1.png','Pictures/room2b.jpg','Pictures/gt_hotel_maxims_primier_2.png'],
		//backgroundImage:'Pictures/genting_bgd.png',
		backgroundColor:'black'
	});
	detailWindow.add(coverFlow);
				
	var scrollView = Ti.UI.createScrollView({
		contentWidth:320,
		contentHeight:'auto',
		layout:"vertical",
		showVerticalScrollIndicator:true,
		top:180
	});
	var label = Ti.UI.createLabel({
		text:'The cool mountain air makes it an exhilarating experience to enjoy the many rides at the Outdoor Theme Park. Whether taking leisure drives in the Antique car or experiencing the adrenaline pumping Space Shot, it is a magical adventure of fun and excitement for the whole family!',
		width:280,
		height:'auto',
		color:'white',
		font:{fontSize:12, fontFamily:'Helvetica Neue'},
		top:22,
		left:10
	});				
	scrollView.add(label);
	
	var line0 = Ti.UI.createView({width:320,height:2,top:15,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line0);
	var lbl1 = Ti.UI.createLabel({text:'Operation Hour', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	scrollView.add(lbl1);
	var line1 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line1);
	
	
	var lbl3 = Ti.UI.createLabel({text:'Price', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	lbl3.addEventListener('click', function(){});
	scrollView.add(lbl3);
	var line3 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line3);
	
	var lbl5 = Ti.UI.createLabel({text:'Schedule', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	scrollView.add(lbl5);
	lbl5.addEventListener('click', function(){alert('Call schedule screen');});
			
	// add empty label to push content above a bit, cos bottom menu will block detection
	var labelX = Ti.UI.createLabel({
		height:20
	});
	scrollView.add(labelX);
				
	detailWindow.add(scrollView);
	
	// open hotel detail
	navGroup.open(detailWindow);
}
