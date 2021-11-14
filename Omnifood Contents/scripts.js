$(document).ready(function(){
    
    //for the sticky navigation
    
    $('.js--section-features').waypoint(function(direction){
      if(direction== "down") {
          $('nav').addClass('sticky');
      } else   {
          $('nav').removeClass('sticky');
      }                              
    },{ offset: '60px;'
        
    });
  /*  var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
    */
    //SCROLL ON BUTTONS////////////////
   $('.js--scroll-to-plans').click(function(){
       $('html ,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
   });
    
    $('.js--scroll-to-start').click(function(){
       $('html ,body').animate({scrollTop: $('.js--section-features').offset().top},500);
   });
    
    
    //ANIMATE CSS/////////////
    
   $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animated fadeIn');                 
    },{
       offset: '50%'
   });
    
    $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animated fadeInUp');                 
    },{
       offset: '50%'
   });
    $('.js--wp-3').waypoint(function(direction){
       $('.js--wp-3').addClass('animated fadeIn');                 
    },{
       offset: '50%'
   });
    $('.js--wp-4').waypoint(function(direction){
       $('.js--wp-4').addClass('animated pulse');                 
    },{
       offset: '50%'
   });
    
    /*Mobile nav*/
    $('#changeicon').click(function(){
        var nav=$('.js--main-nav');
        var icon=$('#changeicon');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('icon ion-md-menu')){
            icon.addClass('icon ion-md-close');
            icon.removeClass('icon ion-md-menu');
        }else{
            icon.addClass('icon ion-md-menu');
            icon.removeClass('icon ion-md-close');
            
        }
            
            
            
    
        
    });
    
});
