// Base de datos de los 22 Arcanos Mayores con las imágenes reales del mazo Rider-Waite y textos únicos
const arcanosMayores = [
    { 
        nombre: "0. El Loco", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/9/90/Rider-Waite_Tarot_00_Fool.jpg",
        generarTexto: (pregunta) => `Ante tu inquietud sobre "${pregunta}", El Loco te impulsa a dar un salto de fe. Es momento de dejar atrás los miedos y atreverte a iniciar un camino totalmente nuevo sin mirar atrás.` 
    },
    { 
        nombre: "I. El Mago", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/de/Rider-Waite_Tarot_01_Magician.jpg",
        generarTexto: (pregunta) => `Для resolver "${pregunta}", cuentas con todas las herramientas necesarias. El Mago te recuerda que tienes el poder de manifestar tus intenciones si actúas con seguridad y enfoque.` 
    },
    { 
        nombre: "II. La Sacerdotisa", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/88/Rider-Waite_Tarot_02_High_Priestess.jpg",
        generarTexto: (pregunta) => `En relación a "${pregunta}", las respuestas no están afuera, sino en tu interior. La Sacerdotisa te pide que confíes en tu intuición y guardes tus energías en este momento de misterio.` 
    },
    { 
        nombre: "III. La Emperatriz", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Rider-Waite_Tarot_03_Empress.jpg",
        generarTexto: (pregunta) => `Cuando consultas por "${pregunta}", La Emperatriz señala una etapa de gran fertilidad creativa y crecimiento. Es un llamado a conectar con la abundancia y a cuidar lo que estás construyendo.` 
    },
    { 
        nombre: "IV. El Emperador", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Rider-Waite_Tarot_04_Emperor.jpg",
        generarTexto: (pregunta) => `Frente a "${pregunta}", este arcano exige orden, disciplina y estructura. El Emperador te aconseja tomar el control con firmeza y establecer bases sólidas para avanzar.` 
    },
    { 
        nombre: "V. El Hierofante", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Rider-Waite_Tarot_05_Hierophant.jpg",
        generarTexto: (pregunta) => `Sobre tu pregunta acerca de "${pregunta}", El Hierofante sugiere buscar consejo en la sabiduría tradicional o en tus valores más profundos para encontrar el equilibrio espiritual.` 
    },
    { 
        nombre: "VI. Los Enamorados", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/db/Rider-Waite_Tarot_06_Lovers.jpg",
        generarTexto: (pregunta) => `Tu dilema sobre "${pregunta}" te coloca ante una encrucijada importante. Los Enamorados te piden que elijas con el corazón y alinees tus decisiones con lo que realmente valoras.` 
    },
    { 
        nombre: "VII. El Carro", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Rider-Waite_Tarot_07_Chariot.jpg",
        generarTexto: (pregunta) => `Para lograr lo que buscas en "${pregunta}", necesitarás férrea voluntad. El Carro te anuncia que la victoria llega si mantienes el timón firme ante cualquier obstáculo.` 
    },
    { 
        nombre: "VIII. La Justicia", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rider-Waite_Tarot_08_Strength.jpg", // Nota: En el Rider-Waite clásico la Fuerza a veces es la 8 y la Justicia la 11, usamos las convenciones estándar
        generarTexto: (pregunta) => `Para lidiar con "${pregunta}", la verdadera clave será la paciencia y el autocontrol. La Fuerza te recuerda que la suavidad vence a la agresividad cuando hay amor propio.` 
    },
    { 
        nombre: "IX. El Ermitaño", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rider-Waite_Tarot_09_Hermit.jpg",
        generarTexto: (pregunta) => `Tu interrogante sobre "${pregunta}" requiere un tiempo de introspección. El Ermitaño te invita a apartarte temporalmente del ruido exterior para iluminar tus propias respuestas.` 
    },
    { 
        nombre: "X. La Rueda de la Fortuna", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Rider-Waite_Tarot_10_Wheel_of_Fortune.jpg",
        generarTexto: (pregunta) => `En cuanto a "${pregunta}", los vientos del cambio soplan a tu favor. La Rueda de la Fortuna te indica que un giro inesperado del destino transformará positivamente tu situación.` 
    },
    { 
        nombre: "XI. La Justicia", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/9/93/Rider-Waite_Tarot_11_Justice.jpg",
        generarTexto: (pregunta) => `Respecto a "${pregunta}", La Justicia marca que todo se acomodará según sus méritos. Actúa con total honestidad y busca la imparcialidad para hallar la armonía.` 
    },
    { 
        nombre: "XII. El Colgado", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Rider-Waite_Tarot_12_Hanged_Man.jpg",
        generarTexto: (pregunta) => `Si te preguntas sobre "${pregunta}", El Colgado te sugiere frenar y cambiar radicalmente de perspectiva. A veces, detenerse es la única forma de ver la verdad con otros ojos.` 
    },
    { 
        nombre: "XIII. La Muerte", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rider-Waite_Tarot_13_Death.jpg",
        generarTexto: (pregunta) => `Frente a "${pregunta}", se avecina un cierre de ciclo inevitable. La Muerte no habla de finales trágicos, sino de una limpieza profunda que te libera para renacer con más fuerza.` 
    },
    { 
        nombre: "XIV. La Templanza", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Rider-Waite_Tarot_14_Temperance.jpg",
        generarTexto: (pregunta) => `Tu consulta sobre "${pregunta}" pide mesura y paz interior. La Templanza actúa como un bálsamo, invitándote a fusionar opuestos con paciencia para lograr una sanación duradera.` 
    },
    { 
        nombre: "XV. El Diablo", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/55/Rider-Waite_Tarot_15_Devil.jpg",
        generarTexto: (pregunta) => `En torno a "${pregunta}", El Diablo expone aquellas ataduras mentales o miedos inconscientes que te frenan. Es hora de reconocer tus sombras para liberarte de ellas.` 
    },
    { 
        nombre: "XVI. La Torre", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/53/Rider-Waite_Tarot_16_Tower.jpg",
        generarTexto: (pregunta) => `Sobre "${pregunta}", prepárate para una revelación imprevista. La Torre sacude estructuras que ya no servían, derribando falsas ilusiones para dejar espacio a lo auténtico.` 
    },
    { 
        nombre: "XVII. La Estrella", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/db/Rider-Waite_Tarot_17_Star.jpg",
        generarTexto: (pregunta) => `Para dar luz a "${pregunta}", La Estrella trae una ola renovada de esperanza e inspiración celeste. Tus deseos más profundos empiezan a alinearse con un futuro brillante.` 
    },
    { 
        nombre: "XVIII. La Luna", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Rider-Waite_Tarot_18_Moon.jpg",
        generarTexto: (pregunta) => `Tu duda sobre "${pregunta}" está rodeada de cierta confusión o incertidumbre pasajera. La Luna te pide que escuches tus sueños y no temas navegar por tus emociones profundas.` 
    },
    { 
        nombre: "XIX. El Sol", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/17/Rider-Waite_Tarot_19_Sun.jpg",
        generarTexto: (pregunta) => `Ante "${pregunta}", El Sol ilumina todo con claridad absoluta y éxito rotundo. La alegría, la vitalidad y las respuestas claras se instalan firmemente en tu camino.` 
    },
    { 
        nombre: "XX. El Juicio", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Rider-Waite_Tarot_20_Judgement.jpg",
        generarTexto: (pregunta) => `En relación a "${pregunta}", estás experimentando un despertar interno crucial. El Juicio te pide evaluar tu pasado con madurez para perdonar y renacer a una nueva etapa.` 
    },
    { 
        nombre: "XXI. El Mundo", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Rider-Waite_Tarot_21_World.jpg",
        generarTexto: (pregunta) => `Для cerrar tu consulta sobre "${pregunta}", El Mundo corona tus esfuerzos con realización total. Se completa un ciclo de aprendizaje hermoso y alcanzas la plenitud.` }
];

const tarotForm = document.getElementById('tarot-form');
const consultSection = document.getElementById('consult-section');
const modalConcentracion = document.getElementById('modal-concentracion');
const resultSection = document.getElementById('result-section');
const cardsContainer = document.getElementById('cards-container');
const saludoUsuario = document.getElementById('saludo-usuario');
const preguntaUsuario = document.getElementById('pregunta-usuario');
const respuestaSino = document.getElementById('respuesta-sino');
const btnReiniciar = document.getElementById('btn-reiniciar');

tarotForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const pregunta = document.getElementById('pregunta').value;

    // 1. Mostrar cartel de concentración
    modalConcentracion.classList.remove('hidden');

    // 2. Esperar 3 segundos de suspenso
    setTimeout(() => {
        modalConcentracion.classList.add('hidden');
        consultSection.classList.add('hidden');
        resultSection.classList.remove('hidden');

        mostrarResultados(nombre, pregunta);
    }, 3000);
});

function mostrarResultados(nombre, pregunta) {
    saludoUsuario.textContent = `Consulta para: ${nombre}`;
    preguntaUsuario.textContent = `"${pregunta}"`;

    // Veredicto Sí / No aleatorio
    const respuestasPosibles = ["Sí, absolutamente", "No por ahora", "Es muy probable", "El universo dice: No", "Sí, confía en el proceso"];
    respuestaSino.textContent = respuestasPosibles[Math.floor(Math.random() * respuestasPosibles.length)];

    // Seleccionar 3 cartas aleatorias sin repetir
    const arcanosMezclados = [...arcanosMayores].sort(() => 0.5 - Math.random());
    const cartasSeleccionadas = arcanosMezclados.slice(0, 3);

    cardsContainer.innerHTML = '';

    // Generar cartas con la imagen real de fondo del Rider-Waite
    cartasSeleccionadas.forEach((arcano, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('tarot-card');

        const textoInterpretacion = arcano.generarTexto(pregunta);

        cardDiv.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span>🔮</span>
                    <p>Arcano 0${index + 1}</p>
                </div>
                <div class="card-back">
                    <div class="card-bg-image" style="background-image: url('${arcano.imagen}');"></div>
                    <h5>${arcano.nombre}</h5>
                    <p>${textoInterpretacion}</p>
                </div>
            </div>
        `;

        cardsContainer.appendChild(cardDiv);
    });
}

// Botón para reiniciar
btnReiniciar.addEventListener('click', function() {
    tarotForm.reset();
    resultSection.classList.add('hidden');
    consultSection.classList.remove('hidden');
});