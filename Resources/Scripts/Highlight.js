exports.createHighlightWindow = function(navGroup){
	var win = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures2/1b_landing_bgd.png',
		zIndex:0
	});
	
	// custom table view
	var customData = [
	 {pic:'Pictures2/1b_project_img1.png', name:'1 Borneo Hypermall', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures2/1b_project_img2.png', name:'1 Likas', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures2/1b_project_img3.png', name:'1 Gate Way', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures2/1b_project_img4.png', name:'1 Sulaman', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures2/1b_project_img5.png', name:'Prince Tower', desc:'we extend', hasChild:true},
	// {pic:'Pictures/hotel_p6a.png', name:'Hotel GET', desc:'Royal Style', hasChild:true},
	 //{pic:'Pictures/hotel_p8a.png', name:'Hotel PAY', desc:'Supreme Executive', hasChild:true},
	// {pic:'Pictures/hotel_p9a.png', name:'Hotel XYZ', desc:'Privileged Stay', hasChild:true}
	 //{flag:'/GraphicIcon/134-viking.png', game:"Devil May Cry", trend:'/GraphicIcon/30-key.png', percent:'50%', hasChild:true}
	];

	var data =[];
	
	// we have to manually design for each role. Manually put the image, its position, text etc
	for(var i = 0; i < customData.length; i++) {
		var row = Ti.UI.createTableViewRow();
		
		// set up hotel picture
		var pic = Ti.UI.createImageView({
			image:customData[i].pic,
			width:125,
			height:75,
			left:5,
			top:5
		});
		
		// define the name of the hotel
		var name = Ti.UI.createLabel({
			text:customData[i].name,
			textAlign:'left',
			font:{fontSize:15, fontWeight:'bold'},
			width:'auto',
			color:'white',
			top:10,
			left:145,
			height:20,
		});
		
		// define the name of the hotel
		var description = Ti.UI.createLabel({
			text:customData[i].desc,
			textAlign:'left',
			font:{fontSize:12},
			width:'auto',
			color:'white',
			top:30,
			left:145,
			height:20,
		});
		
		// add those customized data to row
		row.add(pic);
		row.add(name);
		row.add(description);
		row.hasChild = customData[i].hasChild;
		row.backgroundImage = "Pictures2/1b_list.png";
		row.selectedBackgroundImage = "Pictures2/1b_list_select.png";
		row.height = 85;
		row.className = "hotel_row";
		
		// add event listener to 1st object for prototype
		if(i === 0){
			row.addEventListener('click', function(){
				//showHotelDetail();
			});
		}	
		// after set up the row, push it into data
		data.push(row);
	};
	
	var headerView = Ti.UI.createView({width:320, height:30,backgroundImage:"Pictures2/1b_banner.png"});
	var lbl1 = Ti.UI.createLabel({
			text:'Latest News',
			textAlign:'center',
			font:{fontSize:13, fontWeight:'bold'},
			width:'auto',
			color:'white',
			height:20,
		});
	headerView.add(lbl1);
	var table = Ti.UI.createTableView({
		data:data,
		backgroundColor:'transparent',
		separatorColor:"transparent",
		headerView:headerView,
		//separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
	});
	
	win.add(table);
	
	win.addEventListener('focus', function(){
		Ti.API.warn("i'm focused");
		//Ti.App.fireEvent('app:close more');
	});
	
	return win;
};

function showHighlightsDetail(){
	var detailWindow = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
	});
				
	var label0 = Ti.UI.createLabel({
		text:'Room Promotion',
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
		text:'Furnished with all modern amenities expected of an exquisite club of global dimensions. We ensure you maximum comfort during your well-deserved stay with us.\n\nStarting at 337 square feet for a Premier Room to 700 square feet for a Maxims Suite and 2,100 square feet for a Signature Suite. All our rooms / suites are fully equipped and tastefully styled in an impeccable decor to meet both your leisure and business needs.',
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
	var lbl1 = Ti.UI.createLabel({text:'Start/End Date', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	scrollView.add(lbl1);
	var line1 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line1);
	
	var lbl2 = Ti.UI.createLabel({text:'Time', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	lbl2.addEventListener('click', function(){});
	scrollView.add(lbl2);
	var line2 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line2);
		
	var lbl5 = Ti.UI.createLabel({text:'Website', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	scrollView.add(lbl5);
	lbl5.addEventListener('click', function(){alert('Website');});
			
	// add empty label to push content above a bit, cos bottom menu will block detection
	var labelX = Ti.UI.createLabel({
		height:20
	});
	scrollView.add(labelX);
				
	detailWindow.add(scrollView);
	
	// open hotel detail
	navGroup.open(detailWindow);
}
