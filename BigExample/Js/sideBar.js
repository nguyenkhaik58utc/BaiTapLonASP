$(document).ready(function () {
	var heightSize = screen.height - 105;
	document.getElementById("leftMain").style.height = String(heightSize) + "px";
	document.getElementById("rightMain").style.height = String(heightSize) + "px";
	$("#hide-side-bar").on("click", function () {
		$("#sidebar-container").animate({ opacity: "0", width: "0" });
	})
});

function openNav() {
	$("#sidebar-container").animate({ opacity: "1", width: "14em" });
}