exports.createDiningWindow = function(navGroup){
	var win = Ti.UI.createWindow({width:320,height:436,top:43,backgroundImage:'Pictures/genting_bgd.png',zIndex:0});
	
	// custom table view
	var customData = [
	 {pic:'Pictures/hotel_maxims.png', name:'Oriental', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_themePark.png', name:'Continental', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Buffet', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Local Favourite', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Cafe', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Night Entertainment', desc:'we extend the highest', hasChild:true},];

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
				showDiningList();
			});
		}	
		// after set up the row, push it into data
		data.push(row);
	};
	
	var headerView = Ti.UI.createView({width:320, height:30,backgroundImage:"Pictures/gt_rss_bgd_1.png"});
	var lbl1 = Ti.UI.createLabel({
			text:'Dining Category',
			font:{fontSize:13, fontWeight:'bold'},
			width:'auto',
			color:'white',
			height:20,
		});
	headerView.add(lbl1);
	var table = Ti.UI.createTableView({
		data:data,
		backgroundColor:'transparent',
		separatorStyle:'transparent',
		headerView:headerView,
	});
	
	win.add(table);

	return win;
};

function showDiningList(){
	var win = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
		zIndex:0
	});
	
	var customData = [{pic:'Pictures/gt_hotel_maxims_dining.png', name:'Starbucks Coffee', desc:'we extend the highest', hasChild:false}];
	var data =[];
	
	// we have to manually design for each role. Manually put the image, its position, text etc
	for(var i = 0; i < customData.length; i++) {
		var row = Ti.UI.createTableViewRow();
		
		// set up hotel picture
		var pic = Ti.UI.createImageView({image:customData[i].pic,width:136,height:85,left:0,top:0});
		
		// define the name of the hotel
		var name = Ti.UI.createLabel({text:customData[i].name,textAlign:'left',font:{fontSize:15, fontWeight:'bold'},
			width:'auto',color:'white',top:10,left:145,height:20,});
		
		// define the name of the hotel
		var description = Ti.UI.createLabel({text:customData[i].desc,textAlign:'left',font:{fontSize:12},
			width:'auto',color:'white',top:30,left:145,height:20,});
		
		// add those customized data to row
		row.add(pic);
		row.add(name);
		row.add(description);
		row.hasChild = customData[i].hasChild;
		row.backgroundImage = "Pictures/get_list_bgd.png";
		row.selectedBackgroundImage = "Pictures/get_list_bgd_selected.png";
		row.height = 85;
		row.className = "hotel_row";
		
		// add event listener to 1st object for prototype
		if(i === 0){
			row.addEventListener('click', function(){
				showDiningDetail();
			});
		}	
		// after set up the row, push it into data
		data.push(row);
	};
	
	var headerView = Ti.UI.createView({width:320, height:30,backgroundImage:"Pictures/gt_rss_bgd_1.png"});
	var lbl1 = Ti.UI.createLabel({textAlign:'center',font:{fontSize:13, fontWeight:'bold'},width:'auto',color:'white',height:20,
								  text:'Genting Dining List',});
	headerView.add(lbl1);
	var table = Ti.UI.createTableView({data:data,backgroundColor:'transparent',separatorColor:"transparent",headerView:headerView});
	
	win.add(table);
	
	navGroup.open(win);
}

function showDiningDetail(){
	var detailWindow = Ti.UI.createWindow({width:320,height:436,top:43,backgroundImage:'Pictures/genting_bgd.png'});
				
	var label0 = Ti.UI.createLabel({text:'Starbucks Cafe',width:320,height:30,top:0,
	color:'white',textAlign:'center',font:{fontSize:16, fontWeight:'bold',fontFamily:'Helvetica Neue'},backgroundImage:"Pictures/gt_rss_bgd_1.png"});
	detailWindow.add(label0);
	
	var coverFlow = Ti.UI.createCoverFlowView({width:320,height:150,top:30,backgroundColor:'black',
		images:['Pictures/gt_hotel_maxims_dining1.png','Pictures/room2b.jpg','Pictures/gt_hotel_maxims_dining2.png']});
	detailWindow.add(coverFlow);
				
	var scrollView = Ti.UI.createScrollView({top:180,contentWidth:320,contentHeight:'auto',layout:"vertical",showVerticalScrollIndicator:true});
	var label = Ti.UI.createLabel({
		text:'Furnished with all modern amenities expected of an exquisite club of global dimensions. We ensure you maximum comfort during your well-deserved stay with us.\n\nStarting at 337 square feet for a Premier Room to 700 square feet for a Maxims Suite and 2,100 square feet for a Signature Suite. All our rooms / suites are fully equipped and tastefully styled in an impeccable decor to meet both your leisure and business needs.',
		top:22,left:10,width:280,height:'auto',color:'white',font:{fontSize:12, fontFamily:'Helvetica Neue'}});				
	scrollView.add(label);
				
	detailWindow.add(scrollView);
	
	// open hotel detail
	navGroup.open(detailWindow);
}
