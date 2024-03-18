const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#contacto button").on("click", () => {
  alert("Mensaje Enviado con Éxito");
});

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar").addClass("nav-bg");
    }else{
      $(".navbar").removeClass("nav-bg");    
    }
  });
});
