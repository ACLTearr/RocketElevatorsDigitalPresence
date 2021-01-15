$("#building-type").on("change", function() {
    $("#" + $(this).val()).show();
    $("#" + $(this).val()).hide();
})