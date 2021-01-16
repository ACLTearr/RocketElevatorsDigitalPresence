//Building Type Selection
$("#building-type").on("change", function() {
    console.log("change",$(this).val())
    $(".sub-form").hide()
    $("#" + $(this).val()).show();
  });


  var tierCost = "";
//Tier Selection Cost Setting
$("#tier-selection input").on("change", function() {
    alert($("input[name=tier-selected]:checked").val());
  });

//Independant Variables

//Residential Form Variables
var residentailApartmentNumber = $("#residential-apartment-number");
var residentialFloorNumber = $("#residential-floor-number");
var residentialBasementNumber = $("#residential-basement-number");

//Residential Form Calcs
$('#residential-apartment-number').on('keyup',function(){
    averageDoors = $("#residential-apartment-number").val() / $("#residential-floor-number").val();
    numberOfElevators = averageDoors / 6;
    numberOfColumns = $("#residential-floor-number").val() / 20;
    totalElevators = numberOfColumns * numberOfElevators;
    elevatorCost = totalElevators * tierCost
    $('#total').val( $('#qty').val() * $('#price').val());
});

//Unspecified Calcs