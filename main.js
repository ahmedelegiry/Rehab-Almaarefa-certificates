function myfunction(){
    var inputtext=form1.ID_number.value;
    document.getElementById("pdf_file").src=(inputtext);
    
    /*document.getElementById("link").href="unpaid.html"*/
    /*window.location.href = "unpaid.html"; */  
}
/*window.location.href = "https://www.example.com";   go to a hyperlink*/
function fun1(){

    var un=[];
    var paid=[];
    var inputtext=form1.ID_number.value;
    var i
    /*var unl=un.length;
    var paidl=paid.length;
    alert (paidl)*/
    for (i = 0; i <= un.length; i++) {

        if (inputtext == un[i]) {
            document.getElementById("link").href="unpaid.html"
            /*alert ("تم حجب الشهادة لعدم سداد جزء من أو كل الرسوم لمزيد من التفاصيل الرجاء الضغط على الرابط التالي \n" + "link");*/
            return true;
        }
    }

    for (i = 0; i <= paid.length; i++) {
        if (inputtext == paid[i]){
            document.getElementById("pdf_file").src=("1/"+ inputtext + ".jpg");
            document.getElementById("link1").href= "1/" + inputtext + ".jpg"
            document.getElementById('booking1').style.display = 'block';
            return true;
        }
    }
    if (inputtext == ""){
        alert ("Please Enter Student Resident Identity")
        return false;
    }
    if (isNaN( inputtext )){
        alert ("Please Enter Student Resident Identity in English Numbers Only")
        return false;
    }
alert ("Student Resident Identity Not Found")
return false;
}

function downloadFile() {
    const embedElement = document.getElementById("pdf_file");
    const sourceUrl = embedElement.getAttribute("src");
  
    const link = document.createElement("a");
    link.href = sourceUrl;
    link.download = "myfile.pdf";
    link.click();
  }

function downloadFile() {
    // Create a data URL (example)
    const dataUrl = "data:text/plain;charset=utf-8,Sample file content";
  
    // Create an anchor element
    const link = document.createElement("a");
    link.href = dataUrl;
  
    // Set the download attribute using the specified filename
    link.download = "1";
      // Trigger the click event programmatically
  link.click();
}
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", downloadFile);

function downloadImage() {
    const link = document.createElement('a');
    link.href = '2.jpg';
    link.download = 'image.jpg';
    link.click();
  }




