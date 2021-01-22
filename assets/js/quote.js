$(document).ready(function() {
  //Building Type Selection
  $("#building-type").on("change", function() {
  
    console.log("change",$(this).val())
  
    $(".sub-form").hide()
  
    $("#" + $(this).val()).show();

    $("#elevator-amount").val("");
  
    $("#elevator-total-price").val("");
  
    $("#final-price").val("");
  
    $("#installation-fees").val("");
  
  });

  //Set default tier cost
  $("#elevator-unit-price").val("$7,565.00");
  
  //Tier Selection Cost Setting (Price per unit output)
  $("input[type='radio'][name='tier-selected']").on("change", function() {
  
    //Setting Price per unit form value
    if ($("input[type='radio'][name='tier-selected']:checked").val() === "7565") {
    
      $("#elevator-unit-price").val("$7,565.00");
    
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "12345") {
    
      $("#elevator-unit-price").val("$12,345.00");
    
    } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "15400") {
    
      $("#elevator-unit-price").val("$15,400.00");
    
    };
  
  });

  //Setting installation fees
  if ($("input[type='radio'][name='tier-selected']:checked").val() === "7565") {
    
    var installationFees = 0.1
  
  } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "12345") {
  
    var installationFees = 0.13
  
  } else if ($("input[type='radio'][name='tier-selected']:checked").val() === "15400") {
  
    var installationFees = 0.16
  
  };
    
  //Residential Form Calcs
  $(".residential-calculated-value, input[type='radio'][name='tier-selected']").on('keyup change', function() {
    
  //Residential Form Variables
    var residentailApartmentNumber = $("#residential-apartment-number").val();
  
    var residentialFloorNumber = $("#residential-floor-number").val();
  
    //Calculations
    if ($("#residential-floor-number").val() >= 1) {  
      
      if ($("#residential-apartment-number").val() >= 1) {
      
        var averageDoors = residentailApartmentNumber / residentialFloorNumber;
    
        var numberOfElevators = averageDoors / 6;
      
        var numberOfColumns = residentialFloorNumber / 20;
      
        var totalElevators = Math.ceil(numberOfColumns) * Math.ceil(numberOfElevators);
      
        var elevatorCost = totalElevators * $("input[type='radio'][name='tier-selected']:checked").val();
      
        var finalPrice = elevatorCost + (elevatorCost * installationFees);
      
        //Setting output fields

        $("#elevator-amount").val(totalElevators + " Elevators");
        
        $("#elevator-total-price").val(elevatorCost);
        
        $("#final-price").val(finalPrice);
        
        $("#installation-fees").val(elevatorCost * installationFees);

        $(".currency").formatCurrency();

      } else {

        //Do nothing

      };

    } else {

      //Do nothing

    };
  
  });

  //Commercial Form Calcs
  $(".commercial-calculated-value, input[type='radio'][name='tier-selected']").on('keyup change', function() {
  
  //Commercial Form Variables
    var commercialElevatorCages = $("#commercial-elevator-cages").val();
  
    //Calculations
    if ($("#commercial-elevator-cages").val() >= 1) {

      var elevatorCost = commercialElevatorCages * $("input[type='radio'][name='tier-selected']:checked").val();
    
      var finalPrice = elevatorCost + (elevatorCost * installationFees);
    
      //Setting output fields
      $("#elevator-amount").val(commercialElevatorCages + " Elevators");
    
      $("#elevator-total-price").val(elevatorCost);
    
      $("#final-price").val(finalPrice);
    
      $("#installation-fees").val(elevatorCost * installationFees);

      $(".currency").formatCurrency();

    } else {

      //Do nothing

    };
  
  });

  //Corporate Form Calcs
  $(".corporate-calculated-value, input[type='radio'][name='tier-selected']").on('keyup change', function() {
  
  //Corporate Form Variables
    var corporatePeopleFloor = $("#corporate-people-floor").val();
  
    var corporateFloorNumber = $("#corporate-floor-number").val();
  
    var corporateBasementNumber = $("#corporate-basement-number").val();
  
    //Calculations
    if ($("#corporate-people-floor").val() >= 1) {

      if ($("#corporate-floor-number").val() >= 1) {

        if ($("#corporate-basement-number").val() >= 1) {

          var totalOccupants = corporatePeopleFloor * (Number(corporateFloorNumber) + Number(corporateBasementNumber));
        
          var elevators = totalOccupants / 1000;
        
          var columns = (Number(corporateFloorNumber) + Number(corporateBasementNumber)) / 20;
        
          var elevatorsPerColumn = Math.ceil(elevators) / columns;
        
          var totalElevators = Math.ceil(elevatorsPerColumn) * Math.ceil(columns);
        
          var elevatorCost = totalElevators * $("input[type='radio'][name='tier-selected']:checked").val();
        
          var finalPrice = elevatorCost + (elevatorCost * installationFees);
        
          //Setting output fields
          $("#elevator-amount").val(totalElevators + " Elevators");
        
          $("#elevator-total-price").val(elevatorCost);
        
          $("#final-price").val(finalPrice);
        
          $("#installation-fees").val(elevatorCost * installationFees);

          $(".currency").formatCurrency();

        } else {

          //Do nothing

        };

      } else {

        //Do nothing

      };

    } else {

      //Do nothing

    };
  
  });

  //Hybrid Form Calcs
  $(".hybrid-calculated-value, input[type='radio'][name='tier-selected']").on('keyup change', function() {
  
  //Hybrid Form Variables
    var hybridPeopleFloor = $("#hybrid-people-floor").val();
  
    var hybridFloorNumber = $("#hybrid-floor-number").val();
  
    var hybridBasementNumber = $("#hybrid-basement-number").val();
  
    //Calculations
    if ($("#hybrid-people-floor").val() >= 1) {

      if ($("#hybrid-floor-number").val() >= 1) {

        if ($("#hybrid-basement-number").val() >= 1) {

          var totalOccupants = hybridPeopleFloor * (Number(hybridFloorNumber) + Number(hybridBasementNumber));
        
          var elevators = totalOccupants / 1000;
        
          var columns = (Number(hybridFloorNumber) + Number(hybridBasementNumber)) / 20;
        
          var elevatorsPerColumn = Math.ceil(elevators) / columns;
        
          var totalElevators = Math.ceil(elevatorsPerColumn) * Math.ceil(columns);
        
          var elevatorCost = totalElevators * $("input[type='radio'][name='tier-selected']:checked").val();
        
          var finalPrice = elevatorCost + (elevatorCost * installationFees);
        
          //Setting output fields
          $("#elevator-amount").val(totalElevators + " Elevators");
        
          $("#elevator-total-price").val(elevatorCost);
        
          $("#final-price").val(finalPrice);
        
          $("#installation-fees").val(elevatorCost * installationFees);

          $(".currency").formatCurrency();

        } else {

          //Do nothing

        };

      } else {

        //Do nothing

      };

    } else {

      //Do nothing

    };
  
  });

});