//Building Type Selection
$("#building-type").on("change", function() {
    console.log("change",$(this).val())
    $(".sub-form").hide()
    $("#" + $(this).val()).show();
  });

//Residential Form Variables
var residentailApartmentNumber = $("#residential-apartment-number");
var residentialFloorNumber = $("#residential-floor-number");
var residentialBasementNumber = $("#residential-basement-number");

//Residential Form Calcs
$('#residential-apartment-number').on('keyup',function(){
    $('#total').val( $('#qty').val() * $('#price').val());
});

$("#qty").keyup(function(){
    total = $("#qty").val()* $("#price").val();
    $("#total").val(total);
 });