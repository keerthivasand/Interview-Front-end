(function global() {
  $(document).ready(function() {
    /**Menu Toggle */

    $('.header #toggle-expand').on('click', function(e) {
      e.preventDefault();
      $('nav.main-menu').toggleClass('is-expanded');
      $('body').toggleClass('menu-open');
    });

    $('.main-menu-item .drop-down').on('click', function() {
      var el = $(this);
      if (el.hasClass('active')) {
        el.removeClass('active');
        el.next('.sub-menu-list').slideToggle();
      } else {
        el.closest('.main-menu-list')
          .find('.drop-down')
          .removeClass('active');
        el.addClass('active');
        el.closest('.main-menu-list')
          .find('.sub-menu-list')
          .slideUp();
        el.next('.sub-menu-list').slideDown();
      }
    });

    /**Single Click for Menu for Touch device */

    function subMenuTouch() {
      return 'ontouchstart' in window || navigator.msMaxTouchPoints;
    }
    if (subMenuTouch() == true) {
      $('.main-menu-item').one('click', function(e) {
        e.preventDefault();
      });
    }

    /**SLick Slide for Testimonial */

    $('.testimonial-slide').slick({
      dots: false,
      arrows: false
    });
  });
})();
