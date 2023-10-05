/* Executando modal */
/* $(document).ready(function() {
  $('#myModal').modal('show');
});
  ou */

/*   $(document).ready(function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
    myModal.show()
}); */

$(document).ready(() => {
  var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
  myModal.show()
});


/* para alguns componentes JavaScript do Bootstrap 5 como Modal, Dropdown, Carousel, etc., você precisará instanciar a classe correspondente para controlar o comportamento desses componentes. */

/* var myModal = new bootstrap.Modal(document.getElementById('myModal'), {}) */

/* Isso cria uma nova instância do componente Modal que pode ser controlada com métodos como myModal.show() e myModal.hide().
 */
/* pop Up */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* toast */
$(document).ready(function(){
  var cookieToast = new bootstrap.Toast(document.getElementById('cookieToast'))
  cookieToast.show();
});
