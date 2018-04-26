$(document).ready(function() {
    $("#2show").hide();
    $("#3show").hide();
    
    $("#show1").click(function(){
        $("#1show").show();
        $("#2show").hide();
    	$("#3show").hide();
    });
    $("#show2").click(function(){
        $("#1show").hide();
        $("#2show").show();
    	$("#3show").hide();
    });
    $("#show3").click(function(){
        $("#1show").hide();
        $("#2show").hide();
    	$("#3show").show();
    });
    
    $("#p").click(function(){
        $("#b-navbar-fg").hide();
    });
});