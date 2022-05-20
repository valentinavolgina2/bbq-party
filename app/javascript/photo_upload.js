document.addEventListener("turbo:load", function() {
    const photo_upload_hidden = document.getElementById('photo-upload-hidden')
    if (photo_upload_hidden == null) return

    const photo_upload_btn = document.getElementById('photo-upload-btn')
    photo_upload_btn.addEventListener("click", function (e) {
        if (photo_upload_hidden) {
            photo_upload_hidden.click();
        }
    }, false);

    photo_upload_hidden.addEventListener('change', function(){
        document.getElementById('new_photo').submit()
    })
});
