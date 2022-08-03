
try
{
	let preloader = document.getElementById("preloader");

	document.body.onload = function()
	{
		setTimeout(() => {
			preloader.style.display = "none";
		}, 1000);
	}

	document.getElementById("back").onclick = function()
	{
		 window.history.back(); 
	}

}
catch(error){}