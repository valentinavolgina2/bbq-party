document.addEventListener("turbo:load", function() {
  const photoUploadHidden = document.getElementById('photo-upload-hidden')
  if (!photoUploadHidden) return

  const photoUploadBtn = document.getElementById('photo-upload-btn')
  photoUploadBtn.addEventListener("click", function (e) {
    if (photoUploadHidden) {
        photoUploadHidden.click();
    }
  }, false);

  photoUploadHidden.addEventListener('change', function(){
    document.getElementById('new_photo').submit()
  })
});
