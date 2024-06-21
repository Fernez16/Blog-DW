document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe normalmente
  
    let score = 0;
    const form = event.target;
  
    // Comprobar cada pregunta y actualizar el puntaje si es correcta
    if (form.q1.value == "2") score += 1;
    if (form.q2.value.trim().toLowerCase() == "martin") score += 1;
    if (form.q3.value.trim().toLowerCase() == "la haine") score += 1;
    if (form.q4.value.trim().toLowerCase() == "cristian") score += 1;
    if (form.q5.value.trim().toLowerCase() == "dublin") score += 1;
    if (form.q6.value.trim().toLowerCase() == "la mecanica") score += 1;
    if (form.q7.value.trim().toLowerCase() == "guitarra") score += 1;
    if (form.q8.value.trim().toLowerCase() == "martin") score += 1;
    if (form.q9.value.trim().toLowerCase() == "una comunidad") score += 1;
    if (form.q10.value.trim().toLowerCase() == "si") score += 1;
  
    // Generar mensaje de resultado
    let resultMessage = '';
    if (score === 10) {
      resultMessage = '¡Felicitaciones! Obtuvo el máximo puntaje';
    } else if (score >= 7) {
      resultMessage = '¡Buen trabajo! Puntaje entre 7 y 9';
    } else if (score >= 5) {
      resultMessage = '¡Bien hecho! Puntaje entre 5 y 6';
    } else if (score >= 3) {
      resultMessage = '¡Sigue intentándolo! Puntaje entre 3 y 4';
    } else {
      resultMessage = 'Tómate un tiempo para ver nuestro blog y conocernos mejor. ¡Hasta pronto!';
    }
  
    // Mostrar el mensaje de resultado en la página
    document.getElementById('result').innerText = resultMessage;
  });

