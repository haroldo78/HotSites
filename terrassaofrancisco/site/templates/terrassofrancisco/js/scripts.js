$ = jQuery.noConflict();

(function($) {
  

//QUANDO O HTML INICIA LER TODO O CONTEUDO JQUERY
$(document).ready(function() {

    // PARA CRIAR O SCROLL
    jQuery.fn.anchorAnimate = function(settings) {

      settings = jQuery.extend({
        speed : 1100
      }, settings); 
      
      return this.each(function(){
        var caller = this
        $(caller).click(function (event) { 
          event.preventDefault()
          var locationHref = window.location.href
          var elementClick = $(caller).attr("href")
          
          var destination = $(elementClick).offset().top;
          $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
            window.location.hash = elementClick
          });
          $('.anchorLink').removeClass('active');
          $(this).addClass('active');
            return false;
        })
      })
    }

  $("a.anchorLink").anchorAnimate()


  $(".item-119").click(function(){
    $('#contato').show();
  });
  
  $('.close.contato').click(function (event) {
    event.preventDefault();
    $('#mask').hide();
    $('#contato').hide();
  });   

  $('#mask').click(function () {
    $(this).hide();
    $('#contato').hide();
  });

  // PARA ESCONDE O CODIGO DA Ozio Gallery made with ❤ by joomla.it
  $("a[href='http://www.joomla.it']").parent().remove();
  $(".galeria").children().eq(jQuery(".galeria").children().size() - 1).hide();
  $(".gal2 li").eq(1).hide("fade");

      //PARA DA O ZOOM NA IMAGEM DO MAPA
      $('#zoom').zoom();

  // Modal do Vídeo e Contato
    $('a[contato]').click(function(e) {
      e.preventDefault();
    
      var id = jQuery(this).attr('href');
      var maskHeight = jQuery(document).height();
      var maskWidth = jQuery(window).width();

      $('#mask').css({'width':maskWidth,'height':maskHeight});
      $('#mask').fadeIn(1000);  
      $('#mask').fadeTo("slow",0.8);  
  
      //Get the window height and width
      var winH = jQuery(window).height();
      var winW = jQuery(window).width();
              
      $(id).css('top',  winH/2-$(id).height()/2);
      $(id).css('left', winW/2-$(id).width()/2);
      $(id).fadeIn(2000); 
  
    });
     // Add Class Formulários
    $('input[type="text"],textarea').focus(function(){
      $(this).addClass("parcial")
    });
    $('input[type="text"],textarea').keypress(function(){
      $(this).addClass("full")
    });
    $('input[type="text"],textarea').blur(function(){    
      if ( $(this).val() === "" || $(this).val() === " " || $(this).val() === "  " )
        {
            $(this).removeClass("parcial");
            $(this).removeClass("full")
        }
    });
    
});


})(jQuery);

