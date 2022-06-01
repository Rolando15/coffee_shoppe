function myFunction() {
    var x = document.getElementById("Submit1");
    x.addEventListener("click", function(){
       var skullResin = document.getElementById("myNumber").value
    var total = document.getElementById("total")
    total.value= skullResin*12

    console.log(total);


    })


    }
    
    myFunction();
    // var defaultVal = x.defaultValue;
    // var currentVal = x.value;
    
    // if (defaultVal == currentVal) {
    //   document.getElementById("demo").innerHTML = "Default value and current value is the same: "
    //   + x.defaultValue + " and " + x.value;
    // } else {
    //   document.getElementById("demo").innerHTML = "The default value was: " + defaultVal
    //    + currentVal;
    // }}
