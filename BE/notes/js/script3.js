$(document).ready(function() {$('.item-thumbnail img , .avatar-image-container img').attr('src', function(i, src) {return src.replace( 's72-c', 's500' ).replace( 'w72-h72-p-nu', 's500' ).replace( 's35-c', 's100' );});});
