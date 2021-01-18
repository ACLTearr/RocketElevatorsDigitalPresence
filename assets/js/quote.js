$(document).ready(function() {
  //Building Type Selection
  $("#building-type").on("change", function() {
      console.log("change",$(this).val())
      $(".sub-form").hide()
      $("#" + $(this).val()).show();
    });

  //Set default tier cost
    $("#elevator-unit-price").val("$" + $("input[type='radio'][name='tier-selected']:checked").val());
  
  //Tier Selection Cost Setting (Price per unit output)
  $("input[type='radio'][name='tier-selected']").on("change", function() {
    $("#elevator-unit-price").val($("input[type='radio'][name='tier-selected']:checked").val());
  });
    
  //Residential Form Calcs
  $('#residential-apartment-number, #residential-floor-number, #residential-basement-number').on('keyup', function() {
    //Residential Form Variables
    if ($("input[type='radio'][name='tier-selected']:checked").val() === "7565") {
      var installationFees = 0.1
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "12345") {
      var installationFees = 0.13
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "15400") {
      var installationFees = 0.16
    };
    var residentailApartmentNumber = $("#residential-apartment-number").val();
    var residentialFloorNumber = $("#residential-floor-number").val();
    var residentialBasementNumber = $("#residential-basement-number").val();
    //Calculations
    var averageDoors = residentailApartmentNumber / residentialFloorNumber;
    var numberOfElevators = averageDoors / 6;
    var numberOfColumns = residentialFloorNumber / 20;
    var totalElevators = Math.ceil(numberOfColumns) * Math.ceil(numberOfElevators);
    var elevatorCost = totalElevators * $("input[type='radio'][name='tier-selected']:checked").val();
    var finalPrice = elevatorCost + (elevatorCost * installationFees);
    //Setting output fields
    $("#elevator-amount").val(totalElevators + " Elevators");
    $("#elevator-total-price").val("$" + elevatorCost);
    $("#installation-fees").val("$" + elevatorCost * installationFees);
    $("#final-price").val("$" + finalPrice);
  });

  /* Moving around comment (delete before final push)
  
  */
});
