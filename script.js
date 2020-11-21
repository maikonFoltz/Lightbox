$(function(){

    $('a.galeria').bind('click', function(){

        var img = $(this).find('img').attr('src');
        
        $('.qudradoBrancoFoto img').attr('src', img);
        $('.bgBox, .qudradoBrancoFoto').fadeIn('fast');
     
    })

    $('.bgBox').bind('click', function(){

        $(this).fadeOut('fast');
        $('.qudradoBrancoFoto').fadeOut('fast');
    })
})