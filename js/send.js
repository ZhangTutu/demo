var s = $('.m_imgs img').height();
$('.main').height(s);

$('.addBtn').click(function(){
    $('body').append('<div id="addDV" class="animated bounceIn"><img src="./img/sendmessage.png"><a class="addDVB" href="javascript:void(0);"></a><a class="addDVS" href="javascript:void(0);"></a></div>');
    $('#addDV').center();
    $('#addDV').mask();
    $('.addDVB').click(function(){
        $('#addDV').addClass('bounceOut');
        $('#addDV').fadeOut(900,function(){
            $(this).remove();
            $('#fun_mask').remove();
        });
    });
    $('.addDVS').click(function(){
        $('#addDV').addClass('zoomOutRight');
        $('#addDV').fadeOut(900,function(){
            $(this).remove();
            $('#fun_mask').remove();
        });
    });
});

$('.bottom_icon a').click(function(){
    if($(this).hasClass('addBtn')){

    }else{
        var like = $(this).children('img');
        if(like.hasClass('pnk')){
            like.removeClass('pnk').attr('src','./img/like.png');
        }else{
            like.addClass('pnk').attr('src','./img/likep.png');
        }
    }
});

var sx = 0;
$('.sx').click(function(){
    if(sx==0){
        $('.header').after('<div class="sxDv"><img src="./img/sx.png" alt=""></div>');
        sx = 1;
    }
    $('.sxDv').fadeIn(200,function(){
        $('body').unbind('click').click(function(){
            if(sx==1){
                $('.sxDv').remove();
            }
            sx = 0;
        });
        return false;
    });
    return false;
});
