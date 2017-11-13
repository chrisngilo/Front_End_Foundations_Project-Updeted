// Auto play video
carVideo = document.getElementById('carVideo');
carVideo.autoplay =true;


$("#tax1per, #amount").on('input', function(){
    var am = $('#amount').val();
    var ta = $('#tax1per').val();
    var total = (am * ta) / 100;
    $('#tax1').html(total);
});