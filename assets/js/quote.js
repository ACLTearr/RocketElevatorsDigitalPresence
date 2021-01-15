$('#building-type').on('change',function(){
    if( $(this).val()==="residential"){
        $("#residential").show()
        $("#commercial").hide()
        $("#corporate").hide()
        $("#hybrid").hide()
    }
    else if( $(this).val()==="commercial"){
        $("#commercial").show()
        $("#residential").hide()
        $("#corporate").hide()
        $("#hybrid").hide()
    }
    else if( $(this).val()==="corporate"){
        $("#corporate").show()
        $("#commercial").hide()
        $("#residential").hide()
        $("#hybrid").hide()
    }
    else if( $(this).val()==="hybrid"){
        $("#hybrid").show()
        $("#commercial").hide()
        $("#corporate").hide()
        $("#residential").hide()
    }
});