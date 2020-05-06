var arrayInfor = new Array();
var numberPagging = 0;
var page;
var maxPage;
var arrayEmp = new Array();
var numberEmp;

$(document).on(
	"click",
	".editInfor",
	function () {
		var arrayEditInfor = new Array();
		$("#inforEmployee tbody").each(function (i0) {
			var arrTemp = new Array();
			$(this).find("td").each(function (i1) {

				arrTemp[i1] = $(this).html();

			});
			arrayEditInfor.push(arrayInfor[0]["employeeId"]);
			arrayEditInfor.push(arrTemp);
		});
		if (arrayInfor[0]["employeeId"] != arrayEditInfor[0]
			|| arrayInfor[0]["userEmp"] != arrayEditInfor[1][0]
			|| arrayInfor[0]["dateOfBirth"] != arrayEditInfor[1][1]
			|| arrayInfor[0]["sex"] != arrayEditInfor[1][2]
			|| arrayInfor[0]["phoneNumber"] != arrayEditInfor[1][3]
			|| arrayInfor[0]["emailAddress"] != arrayEditInfor[1][4]
			|| arrayInfor[0]["addressEmp"] != arrayEditInfor[1][5]) {
			$
				.ajax({
					url: "editInfor",
					type: "post",
					data: {
						employeeId: arrayEditInfor[0],
						userEmp: arrayEditInfor[1][0],
						dateOfBirth: arrayEditInfor[1][1],
						sex: arrayEditInfor[1][2],
						phoneNumber: arrayEditInfor[1][3],
						emailAddress: arrayEditInfor[1][4],
						addressEmp: arrayEditInfor[1][5],
					},
					success: function (data) {
						if (checkClick == 0) {
							localStorage.setItem("swal", swal({
								title: "Success!",
								text: "Message sent",
								type: "success",
								timer: 800,
								showConfirmButton: false
							}));
							window.setTimeout(function () {
								location.reload();
							}, 800);
						}
					},
					error: function () {
						swal("Error", "Your imaginary file is safe ??",
							"error");
					}

				});
		}

	});
function pagging(index) {
	var offset = (index - 1) * 5;
	page = index;
	$("#listEmployee").html("");
	$(".active").removeClass("active");
	$(".page-number").each(function () {
		if ($(this).html() == index) {
			$(this).parent().addClass("active");
		}
	});
	$
		.ajax({
			url: "listEmp",
			type: "get",
			data: {
				numberpagging: offset,
			},
			success: function (res) {

				var employee = '';
				for (var i = 0; i < res.length; i++) {
					arrayEmp[i] = {
						"employeeId": res[i].employeeId,
						"employeeName": res[i].employeeName,
						"department": res[i].department
					};
				}
				for (var i = 0; i < res.length; i++) {
					employee += "<tr ><td >"
						+ res[i].employeeId
						+ "</td><td class='data-edit regis-date' contenteditable='true'>"
						+ res[i].employeeName
						+ "</td><td>"
						+ res[i].department
						+ "</td><td>"
						+ "<a class='delete1' title='Delete1' data-target='#popupDelete' onclick='getIdEmp()'  class='btn btn-info btn-lg'  data-toggle='modal'><i class=' fas fa-trash' style='color: red;' /></a></td><td>"
						+ "<a  id='update-employee' class='btn btn-lg' onclick='functionEditEmp()'><i class='fas fa-pencil-alt'></i></a></td></tr><hr>";

				}
				$("#listEmployee").append(employee);
				$('#tableEmp').excelTableFilter();
			},
			error: function () {
				alert("error");
			}
		});

}
$(document).on("click", ".page-number", function () {
	$(".dropdown-filter-dropdown").each(function () {
		$(this).remove();
	});
	page = $(this).html();
	pagging(page);
});

$(document).on("click", ".previous", function () {
	if (page - 1 > 0) {
		$(".dropdown-filter-dropdown").each(function () {
			$(this).remove();
		});
		page--;
		pagging(page);
	}
});
$(document).on("click", ".next", function () {
	if (page < maxPage) {
		$(".dropdown-filter-dropdown").each(function () {
			$(this).remove();
		});
		page++;
		pagging(page);
	}
});

// Delete employee
function getIdEmp() {
	var table = document.getElementById('tableEmployee');
	for (var i = 1; i < table.rows.length; i++) {
		table.rows[i].onclick = function name() {
			var valueID = this.cells[0].innerHTML;
			var valueName = this.cells[1].innerHTML;
			document.getElementById('employeeId').value = valueID.trim();
			$('#titleDelete').html("bạn có muốn xóa " + valueName);

		};
	}

};


// delete row on add button click
function functionDeleteEmp() {
	var employeeId = document.getElementById("employeeId").value;
	var row;
	for (var i = 0; i < arrayEmp.length; i++) {
		if (employeeId == arrayEmp[i]["employeeId"]) {
			row = i;
		}
	}
	document.getElementById("tableEmployee").deleteRow(row + 1);
	arrayEmp.splice(row, 1);
	$.ajax({
		url: "/Admin/Home/deleteEmployee",
		type: "POST",
		data: {
			employeeId: employeeId,
		},
		success: function (data) {
			numberEmp--;
			numberPage(numberEmp);
			window.setTimeout(function () {
				localStorage.setItem("swal", swal({
					title: "Success!",
					text: "Message sent",
					type: "success",
					timer: 800,
					showConfirmButton: false
				}));
			}, 800);

		},
		error: function () {
			swal("Error", "Your imaginary file is safe ??", "error");
		}
	});
}
function numberPage(res) {
	$("#numberPagging").html("");
	if (Math.floor(res / 5) * 5 == res) {
		numberPagging = Math.floor(res / 5);
	} else
		numberPagging = Math.floor(res / 5) + 1;
	maxPage = numberPagging;
	listNumberPagging = '';
	listNumberPagging += "<li class='page-item previous'><a class='page-link ' >Previous</a></li>";
	for (var i = 1; i <= numberPagging; i++) {
		if (i == 1)
			listNumberPagging += "<li class='page-item '><a class='page-link page-number' >"
				+ i + "</a></li>";
		else
			listNumberPagging += "<li class='page-item'><a class='page-link page-number' >"
				+ i + "</a></li>";
	}
	listNumberPagging += "<li class='page-item next'><a class='page-link' >Next</a></li>";
	$("#numberPagging").append(listNumberPagging);
	pagging(1);
}

function functionEditEmp(employeeId) {
	$.ajax({
		url: '/Admin/Home/getEmpForUpdate' + '?employeeId=' + employeeId,
		type: "Get",
		data: '',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function (data) {
			$("#employeeID").val(data.Employee_ID);
			$("#employeeName").val(data.Employee_Name);
			$("#userEmp").val(data.User_emp);
			$("#department").val(data.Department);
			$("#dateOfBirth").val(data.Date_Of_Birth);
			$("#sex").val(data.Sex);
			$("#addressEmp").val(data.Address_emp);
			$("#emailAddress").val(data.Email_Address);
			$("#phoneNumber").val(data.Phone_Number);
			$("#optionRoles").val(data.roleName == 'Admin' ? 1 : 2);
			$("#prev-img").attr("src", data.images);
		},
		error: function () {
			swal("Error", "Get Information Employee Faile ??",
				"error");
		}
	});
};

function ListRoleName() {
	$.ajax({
		url: "getAllRoleName",
		type: "Get",
		contentType: "application/json",

		success: function (res) {
			var data = "";
			for (var i = 0; i < res.length; i++) {
				data += "<option value='" + res[i].roleId + "'>"
					+ res[i].roleName + "</option>";
			}
			$('#optionRoles').html(data);
		},
		error: function () {
			alert("error");
		}
	});
}

$(document).on("click", "#add-employee", function () {
	$("#employeeID").val("");
	$("#employeeName").val("");
	$("#userEmp").val("");
	$("#passwordEmp").val("");
	$("#department").val("");
	$("#dateOfBirth").val("");
	$("#sex").val("Nam");
	$("#addressEmp").val("");
	$("#emailAddress").val("");
	$("#phoneNumber").val("");
	$("#optionRoles").val(1);
	$(".for-update").each(function () {
		$(this).addClass("hide");
	});
	$(".for-add").each(function () {
		$(this).removeClass("hide");
	});
	$("#myModal-update").modal("show");
});

$(document).on("click", "#update-employee", function () {
	$(".for-add").each(function () {
		$(this).addClass("hide");
	});
	$(".for-update").each(function () {
		$(this).removeClass("hide");
	});
	$("#myModal-update").modal("show");
});
//choose images
$(document).on("click", "#prev-img", function () {
	$("#choose-file").click();

});
//display image
$("#choose-file").change(function () {
	$("#btn-upload").click();
});

//image-defaul
$("#sex").change(function () {
	if ($(this).val() == "Nam") {
		$("#prev-img").attr("src", $("#male-src").html());
	} else {
		$("#prev-img").attr("src", $("#female-src").html());
	}
});

$(document).on("click", "#add-employee", function () {
	$("#employeeID").val("");
	$("#employeeName").val("");
	$("#userEmp").val("");
	$("#passwordEmp").val("");
	$("#department").val("");
	$("#dateOfBirth").val("");
	$("#sex").val("Nam");
	$("#addressEmp").val("");
	$("#emailAddress").val("");
	$("#phoneNumber").val("");
	$("#optionRoles").val(1);
	$("#prev-img").attr("src", $("#male-src").html());
	$(".for-update").each(function () {
		$(this).addClass("hide");
	});
	$(".for-add").each(function () {
		$(this).removeClass("hide");
	});
	$("#myModal-update").modal("show");
});
$(document).on("click", "#update-employee", function () {
	$(".for-add").each(function () {
		$(this).addClass("hide");
	});
	$(".for-update").each(function () {
		$(this).removeClass("hide");
	});
	$("#myModal-update").modal("show");
});
//choose images
$(document).on("click", "#prev-img", function () {
	$("#choose-file").click();

});
//display image
$("#choose-file").change(function () {
	$("#btn-upload").click();
});

//image-defaul
$("#sex").change(function () {
	if ($(this).val() == "Nam") {
		$("#prev-img").attr("src", $("#male-src").html());
	} else {
		$("#prev-img").attr("src", $("#female-src").html());
	}
});

//submit add
$(document).on("click", "#submit-add-btn", function () {
	var employeeName = document.getElementById("employeeName").value;
	var userEmp = document.getElementById("userEmp").value;
	var passwordEmp = document.getElementById("passwordEmp").value;
	var department = document.getElementById("department").value;
	var dateOfBirth = document.getElementById("dateOfBirth").value;
	var images = $("#prev-img").attr("src");
	var e = document.getElementById("sex");
	var sex = e.options[e.selectedIndex].value;

	var addressEmp = document.getElementById("addressEmp").value;
	var emailAddress = document.getElementById("emailAddress").value;
	var phoneNumber = document.getElementById("phoneNumber").value;

	var a = document.getElementById("optionRoles");
	var optionRoles = a.options[e.selectedIndex].value;
	$.ajax({
		url: "/Admin/Home/addEmployee",
		type: "post",
		data: {
			employeeName: employeeName,
			userEmp: userEmp,
			passwordEmp: passwordEmp,
			images: images,
			department: department,
			dateOfBirth: dateOfBirth,
			sex: sex,
			addressEmp: addressEmp,
			emailAddress: emailAddress,
			phoneNumber: phoneNumber,
			optionRoles: optionRoles,
		},
		success: function (data) {
			localStorage.setItem("swal",
				swal({
					title: "Success!",
					text: "Message sent",
					type: "success",
					timer: 800,
					showConfirmButton: false
				})
			);
			window.setTimeout(function () {
				location.reload();
			}, 800);
		},
		error: function () {
			swal("Error", "Your imaginary file is safe ??", "error");

		}

	});
});
//submit update
$(document).on("click", "#submit-update-btn", function () {
	var employeeID = document.getElementById("employeeID").value;
	var employeeName = document.getElementById("employeeName").value;
	var userEmp = document.getElementById("userEmp").value;
	var department = document.getElementById("department").value;
	var dateOfBirth = document.getElementById("dateOfBirth").value;
	var images = $("#prev-img").attr("src");
	var e = document.getElementById("sex");
	var sex = e.options[e.selectedIndex].value;

	var addressEmp = document.getElementById("addressEmp").value;
	var emailAddress = document.getElementById("emailAddress").value;
	var phoneNumber = document.getElementById("phoneNumber").value;

	var optionRoles = $("#optionRoles").val();
	$.ajax({
		url: '/Admin/Home/updateEmployee',
		type: 'Post',
		data: {
			employeeID: employeeID,
			employeeName: employeeName,
			userEmp: userEmp,
			images: images,
			department: department,
			dateOfBirth: dateOfBirth,
			sex: sex,
			addressEmp: addressEmp,
			emailAddress: emailAddress,
			phoneNumber: phoneNumber,
			optionRoles: optionRoles,
		},
		success: function (data) {
			localStorage.setItem("swal",
				swal({
					title: "Success!",
					text: "Edit Employee Configuration",
					type: "success",
					timer: 800,
					showConfirmButton: false
				})
			);
			window.setTimeout(function () {
				location.reload();
			}, 800);
		},
		error: function () {
			swal("Error", "Edit Employee faile ??", "error");

		}

	});
});
$(document).on("click", "#btn-upload", function () {
	console.log($("#form-upload")[0]);
	formData = new FormData($("#form-upload")[0]);
	$.ajax({
		url: "do-upload",
		method: "post",
		data: formData,
		contentType: false,
		processData: false,
		success: function (fileUrl) {
			$("#prev-img").attr("src", fileUrl);
			$("#ava-upload").val(fileUrl);
		}
	});
});

function exportExcelEmp() {
	$("#btn-download").parent().submit();
}
