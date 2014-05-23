// PRACTICE BOOTSTRAP FIRST! Then try making something yourself from scratch.

// <script src="jquery-1.11.1.js" ></script>

//var element = document.getElementById('wrapper');
//alert(element);
//element.style.display='none';

// putting your jquery inside this document/function wrapper makes sure it loads and runs when your html page loads. 
$(document).ready(function() {

// write javascript in the console first, since it will tell you your syntax errors. 
	
// means find and apply to all objects named btnSlideUp.  $('.my_div') would find and apply all objects to my_div classes.
// note jquery returns everything in arrays. DOM is your html structure.
	$('#btnSlideUp').click(function() 
			{
			    $('#slideMe').slideToggle();
			});

			$('#btnSlideDown').click(function() 
			{
			    $('#slideMe').slideDown(); 
			});

			$('#btnSlideToggle').click(function() 
			{
			    $('#slideMe').slideToggle();
			});

})


function script7() 
{
	var element = document.getElementById('balcony');
	var crawlerstring = "It's called Crawler's Ledge. Luckily, the trail at this point was dry, the weather sunny, and the wind mild. But a two-foot wide trail with a steep, rocky drop almost straight down several hundred feet into a watery grave made me cling to the side of the mountain and briefly hike sideways. This was February, the off-season. I don't know how anybody got through here when it was actually crowded. The good news: Crawler's Ledge took less than five minutes to cross.";
	// alert(element);
	// alert("It's called Crawler\'s Ledge.")
	alert(crawlerstring);
	element.style.display='none';
}

function script9()
{
	var redhillstring = "This is Red Hill. The bad news: a steep decline in Mile 9 tested muscles in my knees I didn\'t know I had. I lost count of how many times I uttered \"Motherfu--er, my knees are tired.\” Chet couldn\'t help laughing. His knees didn\'t hurt at all since he was used to these kinds of hikes.";
	alert(redhillstring);
}
