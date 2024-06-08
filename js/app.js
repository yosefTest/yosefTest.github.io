document.addEventListener('DOMContentLoaded', function () {
  var image = document.querySelector('#profile-picture img');

  function mostrarMensaje() {
    alert('Hola! 👋, este es un mensaje secreto');
  }

  image.addEventListener('dblclick', mostrarMensaje);
});
