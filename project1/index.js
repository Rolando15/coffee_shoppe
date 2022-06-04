


function myFunction() {
    var x = document.getElementById("Submit1");
    x.addEventListener("click", function(){
       var skullResin = document.getElementById("myNumber").value
    var total1 = document.getElementById("total1")
    total1.value= skullResin*12

    console.log(total1);

    
    })
}
myFunction();


    function myFunction2() {
        var y = document.getElementById("Submit2");
        y.addEventListener("click", function(){
           var julyStar = document.getElementById("myNumber2").value
        var total2 = document.getElementById("total2")
        total2.value= julyStar*10 
    
        console.log(total2);
  
        })
        
    }
    myFunction2();








// Start of grand total





        function myGrandTotal(){
            
            var total1 = document.getElementById("total1");
            var total2 = document.getElementById("total2");
            
            var total= document.getElementById("total");
           

                // function1

            var x = document.getElementById("Submit1");
            x.addEventListener("click", function(){
               var skullResin = document.getElementById("myNumber").value
            var total1 = document.getElementById("total1")
            total1.value= skullResin*12
        });



                // function2
           
                  var y = document.getElementById("Submit2");
                    y.addEventListener("click", function(){
                       var julyStar = document.getElementById("myNumber2").value
                    var total2 = document.getElementById("total2")
                    total2.value= julyStar*10 
                    })


                    


            var total= document.getElementById("total");
            total.value= total1+total2; 
            console.log(total)
         

        }
 myGrandTotal();
    


