$(document).ready(function () {
    $(window).on('scroll', parallax);

    function parallax() {

        //Get the scroll position
        var scroll = $(window).scrollTop();
        //Background Parallax FX
        function parallaxBg(element, size) {
            $(element).css({
                'background-attachment': 'fixed',
                'background-position:': 'center' + -scroll * size + 'px',
                //'transition': '.1s all ease'

            })
        }
        //Text Parallax FX
        function parallaxFront(element, size) {
            $(element).css({
                'position': 'relative',
                'top': + -scroll * size + 'px',
            })

        }
        parallaxBg('body', .1);
        parallaxBg('footer', .1);
        parallaxFront('h1', 2);
        parallaxFront('.page', .2);

    }
    
      //------------------//
     //SMOOTH SCROLLING //
    //----------------//

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});