
// getting all the required elements from html page
	const droparrowimg = document.querySelector("#droparrowimg")
	const searchbar = document.getElementById("search_bar")
	const floors = document.getElementById('floors')
	const arrows = document.getElementById('arrows')
	const currentposition = document.getElementById("current_position")
	const searchlist = document.getElementById("search_bar");
	const searchinput = document.getElementById("searchinput")
	const img = "src/assert/img/lib/img1.jpg" // img for main home page panoroma

 // urls for library
libimg=["src/assert/img/lib/img1.jpg","src/assert/img/lib/img2.jpg","src/assert/img/lib/img3.jpg","src/assert/img/lib/img4.jpg","src/assert/img/lib/img5.jpg","src/assert/img/lib/img6.jpg","src/assert/img/lib/img7.jpg","src/assert/img/lib/img8.jpg"]
// urls for poster Exhibition
peimg=[""]


// ojbconverter and searchTab function is used display the list of destination 

const objconverter=(object)=>{
	const flist = object.map((item)=>{
		return `
		<div onclick = "moveforward(${item.id})">
		<div id = "${item.id}">${item.room}</div>
		<div class = "teachname">${item.name}</div>
		</div>
		`
	}).join('');

	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
		document.getElementById("searchlistexist").innerHTML = flist;
	}else {
	const newhave = document.createElement('div');
	newhaveclassname = "center-align "+"container_list";
	newhave.setAttribute("class",newhaveclassname)
	newhave.setAttribute("id","searchlistexist")
	newhave.innerHTML = flist;
	searchlist.appendChild(newhave);}
}

const searchTab= ()=>{
	searchinput.addEventListener('keyup',(e)=>{
	const searchString = e.target.value.toLowerCase()
	const filteredlist = list.filter((item)=>{
		return(
			item.name.toLowerCase().includes(searchString)
			||item.room.toLowerCase().includes(searchString)

			);
	});
	objconverter(filteredlist);
});

}



// mainPage function is used to remove the welcome page 
const mainPage=()=>{
	const homepage = document.getElementById("homepage");
	homepage.setAttribute("style","opacity :0; visiblity:hidden");
	setTimeout(()=>{homepage.style.display = "none"; },200);
	backToHome(img);

}
// backToHome function sets the home page panoroma image.

const backToHome=(url)=>{new PhotoSphereViewer.Viewer({
	navbar:[
	{"visible":false}
	],
	panorama: url,
	container: 'panorama',
	caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
	loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
	defaultLat: 0.3,
	touchmoveTwoFingers: false,
	mousewheelCtrlKey: true,
  });
}

const searchlistrooms=()=>{

	let classname= "search_bar "+"fullpage"
	droparrowimg.setAttribute("class","droparrowimg")
	searchbar.className = classname;
	floors.style.display = "none";
	arrows.style.display = "none";
	currentposition.style.display = "none";
	objconverter(list)
}

const panorama = (imglist)=>{
	exisit_file = !!document.getElementsByClassName("psv-canvas-container");
	if (exisit_file == true){
	document.getElementById("panorama").innerHTML=""
	}
	var viewer = new PhotoSphereViewer.Viewer({
		container: 'panorama',
		touchmoveTwoFingers: false,
		mousewheelCtrlKey: true,
		defaultLong: '100deg',  // to set the default longitude of panoroma
		// initializing Plugins
		plugins    : [
		  PhotoSphereViewer.MarkersPlugin,
		  [PhotoSphereViewer.VirtualTourPlugin, {
			positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
			renderMode  : PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
		  }],]
		})
	// getting virtualtourplugin and assining it to new variable.
	var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
	//time to create nodes 
	const nodes = [{id      : '1',
		  panorama: imglist[1], //image path
		  name    : 'One', // image name 
		  links   : [	 //node arrow for next page 
			{ nodeId: '2' },
		  ],
		  position: [-80.156168, 25.666623, 2], //position of arrow in longitude latitude and altitude
  
];}
{id      : '2',
		  panorama: imglist[2], //image path
		  name    : 'Two', // image name 
		  links   : [	 //node arrow for next page 
			{ nodeId: '3' },
		  ],
		  position: [-80.156168, 25.666623, 2], //position of arrow in longitude latitude and altitude
  
];}
{id      : '3',
		  panorama: imglist[3], //image path
		  name    : 'Three', // image name 
		  links   : [	 //node arrow for next page 
			{ nodeId: '4' },
		  ],
		  position: [-80.156168, 25.666623, 2], //position of arrow in longitude latitude and altitude
  
];}
	virtualTour.setNodes(nodes) // this is where all the panoroma checkpoints are created 

}


// 		  x: 1500,
//     	y: 780,
// 		  panoData: { poseHeading: 318 },
// const panorama=(imglist)=>{
// 	exisit_file = !!document.getElementsByClassName("psv-canvas-container")
// 	if (exisit_file == true){
// 		document.getElementById("panorama").innerHTML=""
// 	}

// 	var viewer = new PhotoSphereViewer.Viewer({
// 		container: 'panorama',
// 		loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
// 		touchmoveTwoFingers: false,
		// mousewheelCtrlKey: true,
// 		caption    : 'Cape Florida Light, Key Biscayne <b>&copy; Pixexid</b>',
		// defaultLong: '100deg',
// 		plugins    : [
// 		  PhotoSphereViewer.MarkersPlugin,
// 		  [PhotoSphereViewer.VirtualTourPlugin, {
// 			positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
// 			renderMode  : PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
// 		  }],
// 		],
// 		navbar: 'zoom move download nodesList caption fullscreen',
// 	  });
	  
// 	  var virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
	  
// 	  virtualTour.setNodes([
// 		{
// 		  id      : '0',
// 		  panorama: imglist[0],
// 		  thumbnail: imglist[0],
// 		  name    : 'One',
// 		  links   : [
// 			{ nodeId: '1' },
// 		  ],
// 		  markers: [
// 			{
// 			  id: 'marker-1',
// 			  image: 'https://photo-sphere-viewer.js.org/assets/pin-red.png',
// 			  tooltip: 'Cape Florida Light, Key Biscayne',
// 			  width    : 32,
// 			  height   : 32,
// 			  anchor   : 'bottom center',
// 			  longitude: '105deg',
// 			  latitude: '35deg',
// 			}
// 		  ],
// 		  position: [-80.156479, 25.666725, 2],
// 		  panoData: { poseHeading: 327 },
// 		},
// 		{
// 		  id      : '1',
// 		  panorama: imglist[1],
// 		  thumbnail: imglist[1],
// 		  name    : 'Two',
// 		  links   : [
// 			{ nodeId: '0' },
// 			{ nodeId: '2' },
// 		  ],
// 		  position: [-80.156168, 25.666623, 2],
// 		  panoData: { poseHeading: 318 },
// 		},
// 		{
// 		  id      : '2',
// 		  panorama: imglist[2],
// 		  thumbnail: imglist[2],
// 		  name    : 'Three',
// 		  links   : [
// 			{ nodeId: '1' },
// 			{ nodeId: '3' },

// 		  ],
// 		  position: [-80.155932, 25.666498, 2],
// 		  panoData: { poseHeading: 328 },
// 		},
// 		{
// 		  id      : '3',
// 		  panorama: imglist[3],
// 		  thumbnail: imglist[3],
// 		  name    : 'Four',
// 		  links   : [
// 			{ nodeId: '3' },
// 			{ nodeId: '5' },
// 		  ],
// 		  position: [-80.156089, 25.666357, 2],
// 		  panoData: { poseHeading: 78 },
// 		},
// 		{
// 		  id      : '4',
// 		  panorama: imglist[4],
// 		  thumbnail: imglist[4],
// 		  name    : 'Five',
// 		  links   : [
// 			{ nodeId: '3' },
// 			{ nodeId: '5' },
// 		  ],
// 		  position: [-80.156292, 25.666446, 2],
// 		  panoData: { poseHeading: 190 },
// 		},
// 		{
// 		  id      : '5',
// 		  panorama: imglist[5],
// 		  thumbnail: imglist[5],
// 		  name    : 'Six',
// 		  links   : [
// 			{ nodeId: '0' },
// 		  ],
// 		  position: [-80.156465, 25.666496, 2],
// 		  panoData: { poseHeading: 328 },
// 		},
// 	  ], '2');
// document.querySelector(".psv-markers-svg-container").style.display = "none";
// document.querySelector(".psv-markers").style.display = "none";
// document.querySelector(".psv-navbar").style.display="none";
// }

const moveforward = (url) =>{
	panorama(url);
	searchlist.style.display="none";
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
}

// calling functions 
searchTab()

const searchback=()=>{	
	const exist = !!document.getElementById("searchlistexist");
	if (exist === true){
	const classname= "search_bar";
	searchbar.className = classname;
	droparrowimg.setAttribute("class","")
	floors.style.display = "";
	arrows.style.display = "";
	currentposition.style.display = "";
	document.getElementById("searchlistexist").remove();

	}else{
		searchlistrooms()
	}
}
// making list of rooms 




// url is a list





const back=()=>{
	backToHome(img);
	searchbar.style.display="";
	searchbar.className = "search_bar";
	document.getElementById("searchlistexist").innerHTML = "";
	droparrowimg.setAttribute("class","");
}

