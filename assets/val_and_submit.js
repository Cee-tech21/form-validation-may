// validate the form using jquery validate
// submit the form

//console.log("this is from the validation script")

$('#profile-form').validate({  
    rules: {  
        first_name: {required: true, minlength: 2},
        mid_name: {required: false, minlength: 2}, 
        last_name: {required: true, minlength: 2}, 
        dob: {required: true, maxlength: 10},
        gender: 'required',
        country_el: {required: true, minlength: 3},
        phone_el: {required: true, digits: true},
        state_el: 'required',
        lg_el: 'required',          
        
    },
    messages: {  
         
        gender: 'select a gender',          
        psword: {  
          minlength: 'Password must be at least 8 characters long'  
        }  
      },
    errorClass: "text-danger",

})


$("#profile-form").on("click", function(e){
    //e.preventDefault
    console.log("hello")
    if(e.target.id === "submit-btn"){
      confirmAllFields()
      // populate datatable
      // console.log("FirstName", firstName)

    }
})



// function confirmAllFields(){
//   // return true if all fields entered
//     if ( $("#state-el").val() !==  "Choose..." &&
//          $("#lg-el").val() !== "Choose LG" && 
//          $("#first-name-el").val().length > 1 &&
//          $("#last-name-el").val().length > 1 &&
//          $("#dob-el").val().length === 10 &&
//          $("#country-el").val().length > 2 &&
//          $("#phone-el").val().length === 11 &&
//          $("input[name*='gender']:checked") )
//     {
//           console.log("state and lg selected")         
//         
//     } 
//     else{alert("Some fields have not been entered")}
// }

 $(document).ready( function () {
    $('#table_id').DataTable();
 } );

