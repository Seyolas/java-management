var baseUrl = "http://localhost:8085/employee"
var updateEmployeeID = 0;

$(document).ready(function() {

	$("#addEmployeeForm").submit(function(e) {
		e.preventDefault();
	});
	
		$.ajax({
			url: baseUrl
		}).then(function(data) {
			if(data != undefined) {

				var populate = "";

				populate += "<div class='table-responsive'>"+
							"<table class='table table-striped table-hover table-sm caption-top'>"+
							"<caption>List of Employees</caption>"+
							"<thead class='table-dark'><tr>"+
							"<th scope='col'>Employee ID</th>"+
							"<th scope='col'>First Name</th>"+
							"<th scope='col'>Middle Name</th>"+
							"<th scope='col'>Last Name</th>"+
							"<th scope='col'>Address</th>"+
							"<th scope='col'>Department</th>"+
							"<th scope='col'>Contact No</th>"+
							"<th scope='col'></th>"+
							"<th scope='col'></th>"+
							"</tr></thead>";
				for ( var i in data ) {
					populate += "<tr>"+
								"<th scope='row'>" + data[i].id + "</th>"+
								"<td>" + data[i].firstName     + "</td>"+
								"<td>" + data[i].middleName    + "</td>"+
								"<td>" + data[i].lastName      + "</td>"+
								"<td>" + data[i].address       + "</td>"+
								"<td>" + data[i].department    + "</td>"+
								"<td>" + data[i].contactNumber + "</td>"+
								"<td>" + "<button type='button' class='btn btn-outline-primary' id='"+data[i].id+"' onClick='editEmployee("+ JSON.stringify(data[i]) +");'     >EDIT</button>" + "</td>"+
								"<td>" + "<button type='button' class='btn btn-outline-danger'  id='"+data[i].id+"' onClick='deleteEmployee(this.id);' >DELETE</button>" + "</td>"+
								"</tr>";
				}
				populate += "</table></div>";
				$("#displayBody").html(populate);
				}
			}, function(error){

			});
});

function editEmployee(employee) {
	document.getElementById("firstName").value = employee.firstName;
	document.getElementById("middleName").value = employee.middleName;
	document.getElementById("lastName").value = employee.lastName;
	document.getElementById("department").value = employee.department;
	document.getElementById("address").value = employee.address;
	document.getElementById("contactNumber").value = employee.contactNumber;
	document.getElementById("toggleButton").textContent = "EDIT EMPLOYEE DETAILS";

	var $target = $('html,body'); 
	$target.animate({scrollTop: $target.height()}, 200);

	updateEmployeeID = employee.id;
}

function deleteEmployee(employeeID) {
	$.ajax({
		type: "DELETE",
		url: baseUrl + "/" + employeeID
	}).then(function(data) {
		if(data != undefined) {
			console.log(data);
			location.reload();
		}
	}, function(error){
		console.log(error);
		location.reload();
	});
}

function addEmployee() {

	var request = {
		"firstName" : document.getElementById("firstName").value,
		"middleName" : document.getElementById("middleName").value,
		"lastName" : document.getElementById("lastName").value,
		"department" : document.getElementById("department").value,
		"address" : document.getElementById("address").value,
		"contactNumber" : document.getElementById("contactNumber").value,
	};

	var requestMethod = "POST";

	if(updateEmployeeID != 0) {
		request["id"] = updateEmployeeID;
		updateEmployeeID = 0;
		requestMethod = "PUT";
	}

	var xhr = new XMLHttpRequest();
	xhr.open(requestMethod, baseUrl, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	data=JSON.stringify(request);
	xhr.send(data);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json_data = xhr.responseText;
			console.log(json_data);
		} else {
			var err = xhr.err;
			console.log(err);
		}
	};
}
