function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("mainlayout").style.marginLeft = "0";
}
$(document).ready(function () {
	$.ajax({
		url: "menu",
		type: "Get",
		contentType: "application/json",
		success: function (res) {
			var url = '';
			for (var i = 0; i < res.length; i++) {
				url += "<a href='" + res[i].menuUrl + "' >" + res[i].menuName + "</a>";

			}
			url += "<a href='logout'>Đăng xuất</a>";
			$("#divMenu").append(url);
		},
		error: function () {
			//alert("error");
		}
	});
});
