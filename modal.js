(function($) {
    "use strict"; // Start of use strict
    
    //Modal
    $('.modal_target').on('click', function () {
        var index = $('.modal_target').index(this);
        updateModal(index);
    });
    
    //モーダル左矢印
    $('.arrow_left').on('click', function () {
        var index = parseInt($('#myModal').attr( 'data-index' ));
        updateModal( index - 1 );
    });
    
    //モーダル右矢印
    $('.arrow_right').on('click', function () {
        var index = parseInt($('#myModal').attr( 'data-index' ));
        updateModal( index + 1 );
    });

    /**
     * モーダルの表示を更新
     */
    function updateModal(index) {
        $('#myModal').attr( 'data-index', index );
        var $triggerObj = $('.modal_target:eq('+index+')');
        
        var $next_img = $triggerObj.attr('data-img');
        $('.modal-body').children('.modal_img').attr('src', $next_img);
        
        //次の画像のタイトルを取得 表示
        var alt = $triggerObj.find('img').attr("alt");
        $('.modal_title').text(alt);
        
        if( index <= 0 ){
            //画像1のときに左の矢印を隠す
            $('.arrow_left').hide();
            $('.arrow_right').show();
        }else if( index >= $('.modal_target').length - 1 ){
            //画像最大数のときに右の矢印を隠す
            $('.arrow_left').show();
            $('.arrow_right').hide();
        }else{
            $('.arrow_left').show();
            $('.arrow_right').show();
        }
    }




//Modal
    $('.modal_target').on('click', function () {
        //画像の個数を取得
        var $length = $('.item-collection').length;
        //画像のパス
        var $data_img =  $(this).attr('data-img');
        $('.modal_img').attr('src', $(this).attr('data-img'));
        //現在の画像の番号を取得
        var $current_img = $data_img.slice(-5,-4);
        //現在の画像のタイトルを取得 表示
        var alt = $(this).find('.item-collection img').attr('alt');
        $('.modal_title').text(alt);

        if( $current_img <= 1 ){
            //画像1のときに左の矢印を隠す
            $('.arrow_left').hide();
            $('.arrow_right').show();
        }else if($current_img >= $length){
            //画像最大数のときに右の矢印を隠す
            $('.arrow_left').show();
            $('.arrow_right').hide();
        }else{
            $('.arrow_left').show();
            $('.arrow_right').show();
        }
    });
    
    //モーダル左矢印
    $('.arrow_left').on('click', function () {
        var $length = $('.item-collection').length;
        var $displayed = $('.modal-body').children('.modal_img').attr('src');
        var $displayed_num = $displayed.slice(-5,-4);
        var num = parseInt($displayed_num);
        var $before_num = num - 1;
        var $before_img = $displayed.replace($displayed_num, $before_num);
        $('.modal-body').children('.modal_img').attr('src', $before_img);
        //前の画像のタイトルを取得 表示
        var alt = $("."+$before_num).attr("alt");
        $('.modal_title').text(alt);
        
        if( $before_num <= 1 ){
            //画像1のときに左の矢印を隠す
            $('.arrow_left').hide();
            $('.arrow_right').show();
        }else if($before_num >= $length){
            //画像最大数のときに右の矢印を隠す
            $('.arrow_left').show();
            $('.arrow_right').hide();
        }else{
            $('.arrow_left').show();
            $('.arrow_right').show();
        }
    });
    
    //モーダル右矢印
    $('.arrow_right').on('click', function () {
        var $length = $('.item-collection').length;
        var $displayed = $('.modal-body').children('.modal_img').attr('src');
        var $displayed_num = $displayed.slice(-5,-4);
        var num = parseInt($displayed_num);
        var $next_num = num + 1;
        var $next_img = $displayed.replace($displayed_num, $next_num);
        $('.modal-body').children('.modal_img').attr('src', $next_img);
        
        //次の画像のタイトルを取得 表示
        var alt = $("."+$next_num).attr("alt");
        $('.modal_title').text(alt);
        
        if( $next_num <= 1 ){
            //画像1のときに左の矢印を隠す
            $('.arrow_left').hide();
            $('.arrow_right').show();
        }else if($next_num >= $length){
            //画像最大数のときに右の矢印を隠す
            $('.arrow_left').show();
            $('.arrow_right').hide();
        }else{
            $('.arrow_left').show();
            $('.arrow_right').show();
        }
    });
})(jQuery); // End of use strict
