$('<div id="popimage" style="display:none"></div>').appendTo(document.body).on('click', function () {
    $('#popimage').hide();
});

$('.popimage').on('click', function () {
    var url = $(this).data('image-url');
    var $img = $('<div class="img" style="background-image:url(\'' + url + '\')"></div>');
    $('#popimage').empty().append($img).show();
});
