"use strict";

$(document).ready(function() {

    function handleError(message) {
        $("#errorMessage").text(message);
        $("#domoMessage").animate({width:'toggle'},350);
    }
    
    function sendAjax(action, data) {
		console.log(action + "    " + data);
		
        $.ajax({
            cache: false,
            type: "POST",
            url: action,
            data: data,
            dataType: "json",
            success: function(result, status, xhr) {
                $("#domoMessage").animate({width:'hide'},350);
				
				console.log(result.redirect);
                window.location = result.redirect;
            },
            error: function(xhr, status, error) {
                var messageObj = JSON.parse(xhr.responseText);
            
				console.log("error");
			
                handleError(messageObj.error);
            }
        });
    }
    
    $("#makeDomoSubmit").on("click", function(e) {
        e.preventDefault();
		
		console.log("click");
    
        $("#domoMessage").animate({width:'hide'},350);
    
        if($("#valA").val() == '' || $("#valB").val() == '') {
            handleError("RAWR! All fields are required");
            return false;
        }

        sendAjax($("#domoForm").attr("action"), $("#domoForm").serialize());
        
        return false;
    });
    
});