$(function () {

        function resize() {
            // 获取屏幕宽度
            var windowWidth = $(window).width();
            // 判断屏幕属于大还是小
            var isSmallScreen = windowWidth < 768;
            // 根据大小为界面上的每一张轮播图设置背景
            // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
            $('#main_ad  .carousel-inner .item').each(function(i, item) {
                // 因为拿到是DOM对象 需要转换
                var $item = $(item);
                // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
                var imgSrc =
                    isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

                // 设置背景图片
                $item.css('backgroundImage', 'url("' + imgSrc + '")');
                //
                // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
                if (isSmallScreen) {
                    $item.html('<img src="' + imgSrc + '" alt="" />')
                } else {
                    $item.empty();
                }
            })
        }
        $(window).on('resize', resize).trigger('resize');

    $('[data-toggle="tooltip"]').tooltip();


    /*var $navTabss = $('.nav-tabss');
    var width = 30;

    $navTabss.children().each(function (index, element) {
        width += element.clientWidth;
    });
    if (width > $(window).width()) {
        $navTabss.css('width' , width).parent().css('overflow-x' , 'scroll')
    }*/

    var newsTitle = $('.title');
    $('#xinwen .nav-pills a').on('click' , function () {
        var $this = $(this);
        var title = $this.data('title');
        newsTitle.text(title)
    });

    /* 轮播图 */

    var starX , endX;
    var offset = 50;
    $('.carousel').on('touchstart' , function (e) {
        starX = e.originalEvent.touches[0].clientX;
    });

    $('.carousel').on('touchmove' , function (e) {
        endX = e.originalEvent.touches[0].clientX;
        console.log(endX)
    });

    $('.carousel').on('touchend' , function (e) {
        console.log(e);

        var disEnd = Math.abs(starX - endX);

        if (disEnd > offset) {
            $(this).carousel(starX > endX ? 'next' : 'prev');
        }
    })

});






