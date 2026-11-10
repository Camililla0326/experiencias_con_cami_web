document.addEventListener('DOMContentLoaded',function(){
 M.Sidenav.init(document.querySelectorAll('.sidenav'));
 M.FormSelect.init(document.querySelectorAll('select'));
 M.Datepicker.init(document.querySelectorAll('.datepicker'),{format:'yyyy-mm-dd',minDate:new Date(),yearRange:3});
 document.getElementById('year').textContent=new Date().getFullYear();
 document.querySelectorAll('[data-dest]').forEach(function(a){a.addEventListener('click',function(){var s=document.getElementById('destino');s.value=a.dataset.dest;M.FormSelect.init(s);});});
 document.getElementById('booking').addEventListener('submit',function(e){
  e.preventDefault();var nombre=document.getElementById('nombre').value.trim(),correo=document.getElementById('correo').value.trim(),personas=document.getElementById('personas').value;
  if(!nombre||!correo||!personas||!document.getElementById('correo').checkValidity()){this.reportValidity();return;}
  var fecha=document.getElementById('fecha').value||'Por definir',destino=document.getElementById('destino').value||'Por definir',mensaje=document.getElementById('mensaje').value||'Sin comentarios';
  var asunto=encodeURIComponent('Solicitud de información de viaje - '+nombre);
  var cuerpo=encodeURIComponent('Hola, deseo información para un viaje.\nNombre: '+nombre+'\nCorreo: '+correo+'\nViajeros: '+personas+'\nFecha: '+fecha+'\nDestino: '+destino+'\nDetalles: '+mensaje);
  document.getElementById('feedback').textContent='Se abrirá tu aplicación de correo para revisar y enviar la solicitud.';
  location.href='mailto:reservas@experienciasconcami.com?subject='+asunto+'&body='+cuerpo;
 });
});