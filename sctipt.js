$('.project-list').isotope({
    // // options
    // itemSelector: '.grid-item',
    // layoutMode: 'fitRows'
  });

$('.projects-titles li ').on('click', function(){
    var selector = $(this).attr('data-filter');
    $('.project-list').isotope({
        filter: selector
    })
})
