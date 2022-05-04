/*
Zhou Pengke
Bill
The first function of my JavaScript is to achieve the slide before and after switching, 
the second function is to achieve the third page in the form of the input data type of
 the restriction and error function.
*/
var slideIndex = 1;
        showDivs(slideIndex);
        
        function plusDivs(n) {
          showDivs(slideIndex += n);
        }
        
        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "block";  
        }

        function validateform(){  
          var firstname=document.myform.firstname.value;  
          var lastname=document.myform.lastname.value; 
          var Email=document.myform.Email.value;  
          var Telephone=document.myform.Telephone.value;
          var password=document.myform.password.value;   
            
          if (firstname==null || firstname==""){  
            alert("firstname can't be blank");  
            return false;  
          }
          if (lastname==null || lastname==""){  
            alert("lastname can't be blank");  
            return false;  
          }
          if (Email==null || Email==""){  
            alert("Email can't be blank");  
            return false;  
          }
          if (Telephone==null || Telephone==""){  
            alert("Telephone can't be blank");  
            return false;  
          }
          else if(isNaN(Telephone)){
            alert("Telephone must be a number")
            return false;
          }
          if(password.length<6){  
            alert("password must be at least 6 characters long.");  
            return false;  
            }  
          }  
         
         
