// app.js
function uploadImage() {
    const profilePictureInput = document.getElementById('profilePicture');
    const frameSelect = document.getElementById('frameSelect');
    const formData = new FormData();
    formData.append('profilePicture', profilePictureInput.files[0]);
    
    // Optional: Add frame to FormData if needed
    formData.append('frame', frameSelect.value);

    // Send the image and frame to the server
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.downloadUrl) {
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = data.downloadUrl;
            document.getElementById('downloadSection').style.display = 'block';
            alert('Your profile picture is ready! You can download it now.');
        } else {
            alert('Error generating the image. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error uploading image:', error);
        alert('Error uploading image. Please try again.');
    });
}
