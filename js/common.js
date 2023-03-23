$(document).ready(function(){
  $(".BNCrossbtn").click(function(){
    $(".BreakingN").remove();
  });
});

 $('#btn').hover(function () {
            $('#reveal', this).stop(true, true).slideDown("normal");
        }, function () {
            $('#reveal', this).stop(true, true).hide();
        });


// Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  //document.getElementById("main").style.marginLeft = "250px";
 // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("main").style.marginLeft= "0";
 // document.body.style.backgroundColor = "white";
}