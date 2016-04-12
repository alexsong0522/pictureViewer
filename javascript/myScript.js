//alert("hi");

var imagePicData = new Array(6);
var locationData = new Array(6);
var captionData = new Array(6);


var fButtonListener;
var bButtonListener;

var whichPic;

imagePicData[0] = "images/p0.jpg";
imagePicData[1] = "images/p1.jpg";
imagePicData[2] = "images/p2.jpg";
imagePicData[3] = "images/p3.jpg";
imagePicData[4] = "images/p4.jpg";
imagePicData[5] = "images/p5.jpg";

locationData[0] = "Location: Shanghai";
locationData[1] = "Location: Shanghai";
locationData[2] = "Location: Shanghai";
locationData[3] = "Location: Shanghai";
locationData[4] = "Location: Shanghai";
locationData[5] = "Location: Shanghai";

captionData[0] = "tall buildings....";
captionData[1] = "more tall buildings....";
captionData[2] = "wide boulivards....";
captionData[3] = "Oriental Pearl TV Tower....";
captionData[4] = "Shopping malls....";
captionData[5] = "More shopping malls....";




window.onload = function() {
	alert("onLoad");


	whichPic = 0;

	document.getElementById("picImgBox").src = imagePicData[whichPic];
	
	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");
	


	fButtonListener.addEventListener('click', function(event) {
			alert("In top of fbuttonwhichPic is " + whichPic);
		++whichPic;
		if(whichPic >= imagePicData.length ){
			whichPic = 0;
		}
		document.getElementById("locationStation").innerHTML = locationData[whichPic];

		document.getElementById("picImgBox").src = imagePicData[whichPic];
		document.getElementById("captionLoc").innerHTML = captionData[whichPic];
	});

	bButtonListener.addEventListener('click', function(event) {

		whichPic = whichPic - 1;
		if( whichPic < 0 ){
			whichPic = imagePicData.length - 1;
		}
		document.getElementById("locationStation").innerHTML = locationData[whichPic];
		document.getElementById("picImgBox").src = imagePicData[whichPic];
		document.getElementById("captionLoc").innerHTML = captionData[whichPic];
	});


};