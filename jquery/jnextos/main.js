$(document).ready(function(){
    $(".page_nav").click(function(event) {
        event.preventDefault();
        $( ".page_nav").unbind( "click" );

        var page_id = $(this).attr('href');	
        var form = document.createElement("form");
        $(form).attr("action", "select_page.php").attr("method", "post");
        $(form).html('<input type="hidden" name="page_id" value="' + page_id + '" />');
        document.body.appendChild(form);
        $(form).submit();
        document.body.removeChild(form);

    });
});


