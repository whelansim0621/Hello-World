var controller;
exports.createShowsWindow = function(navGroup){
	controller = navGroup;
	var win = Ti.UI.createWindow({width:100b,height:436,top:43,backgroundImage:'Pictures/genting_bgd.png',zIndex:0});
	/*
	var backButton = Ti.UI.createButton({width:22,height:22,backgroundImage:'Pictures/gt_ic_back.png'});
	backButton.addEventListener('click', function(){Ti.API.info('close highlight');Ti.App.fireEvent('app:remove back btn',{id:6});Ti.App.fireEvent('app:pop');navGroup.close(win)});
	win.leftNavButton = backButton;
	*/
	var data =[];
	
	// create a customized header view
	var header0 = Ti.UI.createView({width:320, height:40,backgroundImage:"Pictures/gt_list_bgd_1.png"});
	var headerLabel0 = Ti.UI.createLabel({text:'October 2011',font:{fontSize:15, fontWeight:'bold'},width:'auto',color:'white'});
	header0.add(headerLabel0);
	
	// create a table section to keep contain header & row together
	var section0 = Ti.UI.createTableViewSection();
	section0.headerView = header0;
	// put the section into data array, so table view will contain the header & row
	data[0] = section0;
	section0.add(Ti.UI.createTableViewRow({title:'Show 1',font:{fontSize:12, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_2.png'}));
	section0.add(Ti.UI.createTableViewRow({title:'Show 2',font:{fontSize:12, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	section0.add(Ti.UI.createTableViewRow({title:'Show 3',font:{fontSize:12, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	
	var header1 = Ti.UI.createView({width:320, height:40,backgroundImage:"Pictures/gt_list_bgd_1.png"});
	var headerLabel1 = Ti.UI.createLabel({text:'November 2011',font:{fontSize:15, fontWeight:'bold'},width:'auto',color:'white'});
	header1.add(headerLabel1);
	
	var section1 = Ti.UI.createTableViewSection();
	section1.headerView = header1;
	data[1] = section1;
	section1.add(Ti.UI.createTableViewRow({title:'Show 4',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_2.png'}));
	section1.add(Ti.UI.createTableViewRow({title:'Show 5',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	section1.add(Ti.UI.createTableViewRow({title:'Show 6',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	
	var header2 = Ti.UI.createView({width:320, height:40,backgroundImage:"Pictures/gt_list_bgd_1.png"});
	var headerLabel2 = Ti.UI.createLabel({text:'December 2011',font:{fontSize:15, fontWeight:'bold'},width:'auto',color:'white'});
	header2.add(headerLabel2);
	
	var section2 = Ti.UI.createTableViewSection();
	section2.headerView = header2;
	data[2] = section2;
	section2.add(Ti.UI.createTableViewRow({title:'Show 7',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_2.png'}));
	section2.add(Ti.UI.createTableViewRow({title:'Show 8',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	section2.add(Ti.UI.createTableViewRow({title:'Show 9',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	
	/*
	// custom table view
	var customData = [
	 {pic:'Pictures/hotel_maxims.png', name:'Show 1', desc:'we extend the highest', hasChild:true, border:true},
	 {pic:'Pictures/hotel_themePark.png', name:'Show 2', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Show 3', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Show 4', desc:'we extend the highest', hasChild:true, border:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Show 5', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Show 6', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Show 7', desc:'we extend the highest', hasChild:true, border:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Show 8', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Show 9', desc:'we extend the highest', hasChild:true},];
	
	// we have to manually design for each role. Manually put the image, its position, text etc
	for(var i = 0; i < customData.length; i++) {
		var row = Ti.UI.createTableViewRow();
				
		// define the name of the hotel
		var name = Ti.UI.createLabel({text:customData[i].name,textAlign:'left',font:{fontSize:15, fontWeight:'bold'},
			width:'auto',color:'white',left:145,height:20});
		
		if(customData[i].border === true){
			Ti.API.info(i);
			if(i === 0){
				row.header = 'October 2011';
			}
			else if(i === 3){
				row.header = 'November 2011';
			}
			else if(i === 6){
				row.header = 'December 2011';
			}
		}
		
		// add those customized data to row
		row.add(name);
		row.hasChild = customData[i].hasChild;
		//row.backgroundImage = "Pictures/shows_bgd.png";
		row.backgroundColor = '#D10808';
		row.height = 40;
		row.className = "shows_row";
		
		// add event listener to 1st object for prototype
		if(i === 0){
			row.addEventListener('click', function(){
				Ti.API.info('click');
				//showHotelDetail();
			});
		}	
		// after set up the row, push it into data
		data.push(row);
	};
	*/
	var headerView = Ti.UI.createView({width:320, height:30,backgroundImage:"Pictures/gt_rss_bgd_1.png"});
	var lbl1 = Ti.UI.createLabel({
			text:'Shows & Events',
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
		separatorStyle:"transparent",
		headerView:headerView,
	});
	
	table.addEventListener('click', function(e){
		var index = e.index;
		if(index === 0){
			showShowsDetail();
		}
	});
	
	win.add(table);

	return win;
};

function showShowsDetail(){
	var detailWindow = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
	});
				
	var label0 = Ti.UI.createLabel({
		text:'Tsai Chin Live in Genting',
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
		text:'If you missed her performance earlier this year, fret not! Tsai Chin will be returning to Resorts World Genting this November!\n\n Having made her mark in the Chinese pop culture scene since the 1980s, Tsai Chin has gamered a multitude of fans in and out of Taiwan. With more than 50 albums released throughout her singing career and with hit songs such as The Forgotten Time',
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
	
	var lbl3 = Ti.UI.createLabel({text:'Seat Plan', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	lbl3.addEventListener('click', function(){alert('Call Seat Plan screen');});
	scrollView.add(lbl3);
	var line3 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line3);
	
	var lbl6 = Ti.UI.createLabel({text:'Price', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	lbl6.addEventListener('click', function(){});
	scrollView.add(lbl6);
	var line6 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line6);
	
	var lbl4 = Ti.UI.createLabel({text:'Call to book', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	lbl4.addEventListener('click', function(){alert('Make Phone Call');});
	scrollView.add(lbl4);
	var line4 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line4);
	
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
	controller.open(detailWindow);
}
