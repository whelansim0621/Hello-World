exports.createThemeParkWindow = function(navGroup){
	var win = Ti.UI.createWindow({width:320,height:436,top:43,backgroundImage:'Pictures/genting_bgd.png',zIndex:0});

	var data =[];
	
	// create a customized header view
	var header0 = Ti.UI.createView({width:320, height:40,backgroundImage:"Pictures/gt_list_bgd_1.png"});
	var headerLabel0 = Ti.UI.createLabel({text:'Indoor',font:{fontSize:15, fontWeight:'bold'},width:'auto',color:'white'});
	header0.add(headerLabel0);
	
	// create a table section to keep contain header & row together
	var section0 = Ti.UI.createTableViewSection();
	section0.headerView = header0;
	// put the section into data array, so table view will contain the header & row
	data[0] = section0;
	section0.add(Ti.UI.createTableViewRow({title:'Ride 1',font:{fontSize:12, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_2.png'}));
	section0.add(Ti.UI.createTableViewRow({title:'Ride 2',font:{fontSize:12, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	section0.add(Ti.UI.createTableViewRow({title:'Ride 3',font:{fontSize:12, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	
	var header1 = Ti.UI.createView({width:320, height:40,backgroundImage:"Pictures/gt_list_bgd_1.png"});
	var headerLabel1 = Ti.UI.createLabel({text:'Outdoor',font:{fontSize:15, fontWeight:'bold'},width:'auto',color:'white'});
	header1.add(headerLabel1);
	
	var section1 = Ti.UI.createTableViewSection();
	section1.headerView = header1;
	data[1] = section1;
	section1.add(Ti.UI.createTableViewRow({title:'Ride 1',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_2.png'}));
	section1.add(Ti.UI.createTableViewRow({title:'Ride 2',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	section1.add(Ti.UI.createTableViewRow({title:'Ride 3',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	
	var header2 = Ti.UI.createView({width:320, height:40,backgroundImage:"Pictures/gt_list_bgd_1.png"});
	var headerLabel2 = Ti.UI.createLabel({text:'Water Park',font:{fontSize:15, fontWeight:'bold'},width:'auto',color:'white'});
	header2.add(headerLabel2);
	
	var section2 = Ti.UI.createTableViewSection();
	section2.headerView = header2;
	data[2] = section2;
	section2.add(Ti.UI.createTableViewRow({title:'Ride 1',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_2.png'}));
	section2.add(Ti.UI.createTableViewRow({title:'Ride 2',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	section2.add(Ti.UI.createTableViewRow({title:'Ride 3',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	
	var header3 = Ti.UI.createView({width:320, height:40,backgroundImage:"Pictures/gt_list_bgd_1.png"});
	var headerLabel3 = Ti.UI.createLabel({text:'Signature Attraction',font:{fontSize:15, fontWeight:'bold'},width:'auto',color:'white'});
	header3.add(headerLabel3);
	
	var section3 = Ti.UI.createTableViewSection();
	section3.headerView = header3;
	data[3] = section3;
	section3.add(Ti.UI.createTableViewRow({title:'Ride 1',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_2.png'}));
	section3.add(Ti.UI.createTableViewRow({title:'Ride 2',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	section3.add(Ti.UI.createTableViewRow({title:'Ride 3',font:{fontSize:15, fontWeight:'bold'},height:40,width:'auto',color:'white',backgroundImage:'Pictures/gt_list_bgd_3.png'}));
	
	/*
	// custom table view
	var customData = [
	 {pic:'Pictures/hotel_maxims.png', name:'Ride 1', desc:'we extend the highest', hasChild:true, border:true},
	 {pic:'Pictures/hotel_themePark.png', name:'Ride 2', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 3', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 4', desc:'we extend the highest', hasChild:true, border:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 5', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 6', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 7', desc:'we extend the highest', hasChild:true, border:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 8', desc:'we extend the highest', hasChild:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 7', desc:'we extend the highest', hasChild:true, border:true},
	 {pic:'Pictures/hotel_firstWorld.png', name:'Ride 9', desc:'we extend the highest', hasChild:true}
	];
	
	// we have to manually design for each role. Manually put the image, its position, text etc
	for(var i = 0; i < customData.length; i++){
		var row = Ti.UI.createTableViewRow();
				
		// define the name of the hotel
		var name = Ti.UI.createLabel({text:customData[i].name,textAlign:'left',font:{fontSize:15, fontWeight:'bold'},
			width:'auto',color:'white',left:145,height:20});
		
		if(customData[i].border === true){
			Ti.API.info(i);
			if(i === 0){
				row.header = 'Indoor';
			}
			else if(i === 3){
				row.header = 'Outdoor';
			}
			else if(i === 6){
				row.header = 'Waterpark';
			}
			else if(i === 8){
				row.header = 'Signature Attraction';
			}
		}
		
		// add those customized data to row
		row.add(name);
		row.hasChild = customData[i].hasChild;
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
			text:'List of Theme Park',
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
		headerView:headerView,
		separatorStyle:'transparent'
		/*
		 * the below code fail to remove the separator, used 'none' or 'transparent' instead
		 * separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE 
		 */
	});
	
	table.addEventListener('click', function(e){
		var index = e.index;
		if(index === 0){
			showThemeParkDetail();
		}
	});
	
	win.add(table);

	return win;
};

function showThemeParkDetail(){
	var detailWindow = Ti.UI.createWindow({
		width:320,
		height:436,
		top:43,
		backgroundImage:'Pictures/genting_bgd.png',
	});
				
	var label0 = Ti.UI.createLabel({
		text:'Theme Park',
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
	
	
	var lbl3 = Ti.UI.createLabel({text:'Map', font:{fontSize:15, fontWeight:'bold'},color:'white',top:0, left:10, width:320, height:40});
	lbl3.addEventListener('click', function(){alert('Call Theme Park Map screen');});
	scrollView.add(lbl3);
	var line3 = Ti.UI.createView({width:320,height:2,top:0,backgroundImage:"Pictures/line2.png"});
	scrollView.add(line3);
	
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
