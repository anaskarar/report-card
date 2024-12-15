
// function generateresult() {
// // get values from input field
// var name = document.getElementById("name").Value;
// var fname = document.getElementById("fname").Value; 
// var Rollno = document.getElementById("Rollno").Value;
// var Institutename = document.getElementById("Institutename").Value;
// var eng = document.getElementById("box").Value;
// var box = document.getElementById("box").Value;
// var box = document.getElementById("box").Value;
// var box = document.getElementById("box").Value;
// var box = document.getElementById("box").Value;
// var Result = document.getElementById("res").Value;
// var res = document.getElementById("res").Value;
// var res = document.getElementById("res").Value;

// // check if any field is empty


// eng = Number

// // calculate total and percentage
// var total = box+box+box+box+box;
// var percentage = (total/500)*100;

// // determine grade and status
// var grade ;
// var status;
// if (percentage >=90) {
//     grade="A+";
//     status=Pass;
// } else if (percentage >=80) {
//     grade="A";
//     status=Pass;
// } else if (percentage >=70) {
//     grade="B";
//     status=Pass;
// } else if (percentage >=60) {
//     grade="C";
//     status=Pass;
// } else if (percentage >=50) {
//     grade="D";
//     status=Pass;
// } else {
//     grade="F";
//     status=Fail;
// }

// //  show result
// var resultDiv = document.getElementById("result");resultDiv.innerHTML <br>
// "<p> Student Name : " + name + "</p>";
// "<p> Total Marks : " + Total + "/500 </p>"
// "<p> Percentage : "  + percentage.toFixed(2) +" % </p>"
// "<p> Grade : "    + grade + "</p>"
// "<p class="  + (status === "Pass?" + "Pass" + "Fail") + "> status :"  + status +  "</p>"
// }



function generateresult() {
    // Get values from input fields
    var name = document.getElementById("Name").value;
    var rollno = document.getElementById("Rollno").value;
    var fname = document.getElementById("Fname").value;
    var institutename = document.getElementById("Institutename").value;
  
    // Get marks for 5 subjects and convert to numbers
    var box1 = Number(document.getElementById("box1").value);
    var box2 = Number(document.getElementById("box2").value);
    var box3 = Number(document.getElementById("box3").value);
    var box4 = Number(document.getElementById("box4").value);
    var box5 = Number(document.getElementById("box5").value);
  
    // Check if any field is empty or invalid
    if (!name || !rollno || !fname || !institutename || isNaN(box1) || isNaN(box2) || isNaN(box3) || isNaN(box4) || isNaN(box5)) {
      alert("Please fill all the fields correctly.");
      return;
    }
  
    // Calculate total and percentage
    var total = box1 + box2 + box3 + box4 + box5;
    var percentage = (total / 500) * 100;
  
    // Determine grade and status
    var grade, status;
    if (percentage >= 90) {
      grade = "A+";
      status = "Pass";
    } else if (percentage >= 80) {
      grade = "A";
      status = "Pass";
    } else if (percentage >= 70) {
      grade = "B";
      status = "Pass";
    } else if (percentage >= 60) {
      grade = "C";
      status = "Pass";
    } else if (percentage >= 50) {
      grade = "D";
      status = "Pass";
    } else {
      grade = "F";
      status = "Fail";
    }
  
    // Show result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p><strong>Student Name:</strong> ${name}</p>
      <p><strong>Father's Name:</strong> ${fname}</p>
      <p><strong>Roll Number:</strong> ${rollno}</p>
      <p><strong>Institute Name:</strong> ${institutename}</p>
      <p><strong>Total Marks:</strong> ${total} / 500</p>
      <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
      <p><strong>Grade:</strong> ${grade}</p>
      <p class="${status === "Pass" ? "pass" : "fail"}"><strong>Status:</strong> ${status}</p>
    `;
  }
  