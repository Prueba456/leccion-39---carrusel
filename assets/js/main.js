$( () => { //function() {}
  $("#img1").on('click',(e) => {
    e.preventDefault();
    $('#mostrar1').show();
    $('#mostrar2').hide();
    $('#mostrar3').hide();
    $('#mostrar4').hide();
    $('#mostrar5').hide();
    $('#img1').addClass('color-white');
    $('#img4').removeClass('color-white');
    $('#img2').removeClass('color-white');
    $('#img3').removeClass('color-white');
    $('#img5').removeClass('color-white');
  });
  $("#img2").on('click',(e) => {
    e.preventDefault();
    $('#mostrar2').show();
    $('#mostrar1').hide();
    $('#mostrar3').hide();
    $('#mostrar4').hide();
    $('#mostrar5').hide();
    $('#img1').removeClass('color-white');
    $('#img4').removeClass('color-white');
    $('#img3').removeClass('color-white');
    $('#img5').removeClass('color-white');
    $('#img2').addClass('color-white');
  });
  $("#img3").on('click',(e) => {
    e.preventDefault();
    $('#mostrar3').show();
    $('#mostrar1').hide();
    $('#mostrar2').hide();
    $('#mostrar4').hide();
    $('#mostrar5').hide();
    $('#img1').removeClass('color-white');
    $('#img5').removeClass('color-white');
    $('#img2').removeClass('color-white');
    $('#img4').removeClass('color-white');
    $('#img3').addClass('color-white');
  });
  $("#img4").on('click',(e) => {
    e.preventDefault();
    $('#mostrar4').show();
    $('#mostrar1').hide();
    $('#mostrar3').hide();
    $('#mostrar2').hide();
    $('#mostrar5').hide();
    $('#img1').removeClass('color-white');
    $('#img2').removeClass('color-white');
    $('#img3').removeClass('color-white');
    $('#img5').removeClass('color-white');
    $('#img4').addClass('color-white');
  });
  $("#img5").on('click',(e) => {
    e.preventDefault();
    $('#mostrar5').show();
    $('#mostrar1').hide();
    $('#mostrar3').hide();
    $('#mostrar4').hide();
    $('#mostrar2').hide();
    $('#img1').removeClass('color-white');
    $('#img2').removeClass('color-white');
    $('#img3').removeClass('color-white');
    $('#img4').removeClass('color-white');
    $('#img5').addClass('color-white');
  });


});
