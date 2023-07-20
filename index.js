window.addEventListener('load', function() {
  var upload = document.getElementById('fileInput');
  var gloResult = {};

  // Make sure the DOM element exists
  if (upload) 
  {
    upload.addEventListener('change', function() {
      // Make sure a file was selected
      if (upload.files.length > 0) 
      {
        var reader = new FileReader(); // File reader to read the file 
        
        // This event listener will happen when the reader has read the file
        reader.addEventListener('load', function() {
          var result = JSON.parse(reader.result); // Parse the result into an object
          var submit = document.getElementById("submit") ;
          gloResult =result;
          // console.log(gloResult);
          submit.addEventListener("click", function () {
            var carNumber = document.getElementById("carNumber").value;
            var size = Object.keys(gloResult).length;
            // for (let i = 0; i < size; i++) { 
            //  console.log(gloResult.MODEL1);
            //          }
            for( var key in gloResult ) {
  var value = gloResult[key];
  if(value[0]===carNumber) {

    var helloBl= document.getElementsByTagName("p")[0];
  helloBl.innerHTML="номер машины :" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + value[0];
  var brandCar =document.getElementsByTagName("p")[1];
  brandCar.innerHTML ="марка машины :" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " +  "\"" + value[2] +"\"";
  var colorCar = document.getElementsByTagName("p")[2];
  colorCar.innerHTML = "цвет машины :" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + "\""  +value[1] + "\"";
  var carInfo=  document.getElementsByClassName("carInfo")[0];
  var imgCar = carInfo.getElementsByTagName('img')[0];
  imgCar.src =value[3];
  console.log(value[2]);}
}

               // event.preventDefault();
               console.log(gloResult);
               console.log(size);
               // console.log(carNumber);

          });
        // console.log(submit);

  //         var helloBl= document.getElementsByTagName("p")[0];
  // helloBl.innerHTML="номер машины :" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + result.MODEL1[0];
  // var brandCar =document.getElementsByTagName("p")[1];
  // brandCar.innerHTML ="марка машины :" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " +  "\"" + result.MODEL1[2] +"\"";
  // var colorCar = document.getElementsByTagName("p")[2];
  // colorCar.innerHTML = "цвет машины :" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + "\"" +result.MODEL1[1] + "\"";
    // var carInfo=  document.getElementsByClassName("carInfo")[0];
    console.log(carInfo);
    // var imgCar = carInfo.getElementsByTagName('img')[0];
  // const imgCar =document.createElement(img);
  // console.log("imgCar");
  // imgCar.src =result.MODEL1[3];
          console.log(result);
          console.log(result.MODEL1[0]);
          console.log(result.MODEL1[1]);
          console.log(result.MODEL1[2]);
          console.log(result.MODEL1[3]);



        });
        
        reader.readAsText(upload.files[0]); // Read the uploaded file
      }
    });
  }
});


// function getData() {

//     event.preventDefault();
//     console.log(gloResult);
//   }