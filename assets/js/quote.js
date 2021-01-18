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
    $("#final-price").val("$" + finalPrice);
    $("#installation-fees").val("$" + elevatorCost * installationFees).toFixed(2);
  });

  //Commercial Form Calcs
  $('#commercial-elevator-cages').on('keyup', function() {
    //Commercial Form Variables
    if ($("input[type='radio'][name='tier-selected']:checked").val() === "7565") {
      var installationFees = 0.1
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "12345") {
      var installationFees = 0.13
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "15400") {
      var installationFees = 0.16
    };
    var commercialElevatorCages = $("#commercial-elevator-cages").val();
    //Calculations
    var elevatorCost = commercialElevatorCages * $("input[type='radio'][name='tier-selected']:checked").val();
    var finalPrice = elevatorCost + (elevatorCost * installationFees);
    //Setting output fields
    $("#elevator-amount").val(commercialElevatorCages + " Elevators");
    $("#elevator-total-price").val("$" + elevatorCost);
    $("#final-price").val("$" + finalPrice);
    $("#installation-fees").val("$" + elevatorCost * installationFees).toFixed(2);
  });

  //Corporate Form Calcs
  $('#corporate-floor-number, #corporate-basement-number, #corporate-people-floor').on('keyup', function() {
    //Commercial Form Variables
    if ($("input[type='radio'][name='tier-selected']:checked").val() === "7565") {
      var installationFees = 0.1
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "12345") {
      var installationFees = 0.13
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "15400") {
      var installationFees = 0.16
    };
    var corporatePeopleFloor = $("#corporate-people-floor").val();
    var corporateFloorNumber = $("#corporate-floor-number").val();
    var corporateBasementNumber = $("#corporate-basement-number").val();
    //Calculations
    var totalOccupants = corporatePeopleFloor * (Number(corporateFloorNumber) + Number(corporateBasementNumber));
    var elevators = totalOccupants / 1000;
    var columns = (Number(corporateFloorNumber) + Number(corporateBasementNumber)) / 20;
    var elevatorsPerColumn = Math.ceil(elevators) / columns;
    var totalElevators = Math.ceil(elevatorsPerColumn) * Math.ceil(columns);
    var elevatorCost = totalElevators * $("input[type='radio'][name='tier-selected']:checked").val();
    var finalPrice = elevatorCost + (elevatorCost * installationFees);
    //Setting output fields
    $("#elevator-amount").val(totalElevators + " Elevators");
    $("#elevator-total-price").val("$" + elevatorCost);
    $("#final-price").val("$" + finalPrice);
    $("#installation-fees").val("$" + elevatorCost * installationFees).toFixed(2);
  });

  //Corporate Form Calcs
  $('#hybrid-floor-number, #hybrid-basement-number, #hybrid-people-floor').on('keyup', function() {
    //Commercial Form Variables
    if ($("input[type='radio'][name='tier-selected']:checked").val() === "7565") {
      var installationFees = 0.1
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "12345") {
      var installationFees = 0.13
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "15400") {
      var installationFees = 0.16
    };
    var hybridPeopleFloor = $("#hybrid-people-floor").val();
    var hybridFloorNumber = $("#hybrid-floor-number").val();
    var hybridBasementNumber = $("#hybrid-basement-number").val();
    //Calculations
    var totalOccupants = hybridPeopleFloor * (Number(hybridFloorNumber) + Number(hybridBasementNumber));
    var elevators = totalOccupants / 1000;
    var columns = (Number(hybridFloorNumber) + Number(hybridBasementNumber)) / 20;
    var elevatorsPerColumn = Math.ceil(elevators) / columns;
    var totalElevators = Math.ceil(elevatorsPerColumn) * Math.ceil(columns);
    var elevatorCost = totalElevators * $("input[type='radio'][name='tier-selected']:checked").val();
    var finalPrice = elevatorCost + (elevatorCost * installationFees);
    //Setting output fields
    $("#elevator-amount").val(totalElevators + " Elevators");
    $("#elevator-total-price").val("$" + elevatorCost);
    $("#final-price").val("$" + finalPrice);
    $("#installation-fees").val("$" + elevatorCost * installationFees).toFixed(2);
  });
});
