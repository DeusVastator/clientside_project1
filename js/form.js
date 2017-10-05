

//function validateForm() {
//    var x = document.forms["price_sheet"]["s1"].value;
//    if (x == "") {
//        alert("All fields must be filled out");
//        return false;
//    }
//}

function success() {
//   var x = parseInt(document.querySelector("[class='question1']").checked);
//    var userInput = [];
    

    
    
    jQuery(document).ready(function ($) {
    var sum = 0;
    $('#questionOne :checkbox').click(function() {
        sum = 0;
        $('#questionOne :checkbox:checked').each(function(idx, elm) {
            sum += parseInt(elm.value, 10);
        });
        
        $('#sum').html(sum);
    
    });
    
});
    

    
    
    
    

}





$(function worker(){
    
    $.ajaxSetup ({
        cache: false
    });
    var ajax_load = "sum";
    
 
    var loadUrl = "index.html";
    
    $("#result").html(ajax_load).load(loadUrl);


});