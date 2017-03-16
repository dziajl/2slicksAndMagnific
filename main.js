<script>
    $(document).ready(function () {


        /*SLICK FOR  NEWS GALLERY*/
        $('.gallery-big-slick').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            arrows: false
        });

        $('.gallery-slick').slick({
            infinite: false,
            initialSlide: 0,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            vertical: true,
            verticalSwiping: true,
            prevArrow: '<button type="button" class="slick-prev icon icon-icon_arrowtop"></button>',
            nextArrow: '<button type="button" class="slick-next icon icon-icon_arrowdown"></button>',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        vertical: false,
                        verticalSwiping: false
                    }
                }
            ],
            asNavFor: '.gallery-big-slick',
            focusOnSelect: true

        });
        /*END SLICK FOR NEWS GALLERY*/

        $('.module-gallery').magnificPopup({
            tClose: '{$locale.news.close}',
            tLoading: '{$locale.news.loading}',
            delegate: 'a.gallery-imagey',
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                tPrev: '{$locale.news.previous}',
                tNext: '{$locale.news.next}',
                tCounter: '%curr% {$locale.news.of} %total%',
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">{$locale.news.error.1} #%curr%</a> {$locale.news.error.2}'
            }
        });

    });
</script>
