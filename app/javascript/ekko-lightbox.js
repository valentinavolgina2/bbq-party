$(document).on('turbo:load', function() {
    console.log("loaded turbo")
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        console.log("clicked on image")
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});

