// Base de datos de los 22 Arcanos Mayores inspirados en el Tarot Rider-Waite con ilustraciones vectoriales clásicas de fondo
const arcanosMayores = [
    { 
        nombre: "0. El Loco", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
        generarTexto: (pregunta) => `Ante tu inquietud sobre "${pregunta}", El Loco te impulsa a dar un salto de fe. Es momento de dejar atrás los miedos y atreverte a iniciar un camino totalmente nuevo sin mirar atrás.` 
    },
    { 
        nombre: "I. El Mago", 
        svg: `<svg viewBox="0 0 24 24"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 21h-5.5V11H22v10z"/></svg>`,
        generarTexto: (pregunta) => `Para resolver "${pregunta}", cuentas con todas las herramientas necesarias. El Mago te recuerda que tienes el poder de manifestar tus intenciones si actúas con seguridad y enfoque.` 
    },
    { 
        nombre: "II. La Sacerdotisa", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        generarTexto: (pregunta) => `En relación a "${pregunta}", las respuestas no están afuera, sino en tu interior. La Sacerdotisa te pide que confíes en tu intuición y guardes tus energías en este momento de misterio.` 
    },
    { 
        nombre: "III. La Emperatriz", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11L12 2zm0 3.84L15.15 9H8.85L12 5.84zM5 12h14v2H5v-2zm2 4h10v6H7v-6z"/></svg>`,
        generarTexto: (pregunta) => `Cuando consultas por "${pregunta}", La Emperatriz señala una etapa de gran fertilidad creativa y crecimiento. Es un llamado a conectar con la abundancia y a cuidar lo que estás construyendo.` 
    },
    { 
        nombre: "IV. El Emperador", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
        generarTexto: (pregunta) => `Frente a "${pregunta}", este arcano exige orden, disciplina y estructura. El Emperador te aconseja tomar el control con firmeza y establecer bases sólidas para avanzar.` 
    },
    { 
        nombre: "V. El Hierofante", 
        svg: `<svg viewBox="0 0 24 24"><path d="M10 2h4v4h4v4h-4v4h-4v-4H6V6h4V2zm2 14c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4z"/></svg>`,
        generarTexto: (pregunta) => `Sobre tu pregunta acerca de "${pregunta}", El Hierofante sugiere buscar consejo en la sabiduría tradicional o en tus valores más profundos para encontrar el equilibrio espiritual.` 
    },
    { 
        nombre: "VI. Los Enamorados", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
        generarTexto: (pregunta) => `Tu dilema sobre "${pregunta}" te coloca ante una encrucijada importante. Los Enamorados te piden que elijas con el corazón y alinees tus decisiones con lo que realmente valoras.` 
    },
    { 
        nombre: "VII. El Carro", 
        svg: `<svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z"/></svg>`,
        generarTexto: (pregunta) => `Para lograr lo que buscas en "${pregunta}", necesitarás férrea voluntad. El Carro te anuncia que la victoria llega si mantienes el timón firme ante cualquier obstáculo.` 
    },
    { 
        nombre: "VIII. La Justicia", 
        svg: `<svg viewBox="0 0 24 24"><path d="M10 3h4v2h-4V3zm3 5h-2V6h2v2zm7 3h-4V9h-2v2H6V9H4v2H2v2h2v7h16v-7h2v-2h-2v2zm-2 7H6v-5h12v5z"/></svg>`,
        generarTexto: (pregunta) => `Respecto a "${pregunta}", La Justicia marca que todo se acomodará según sus méritos. Actúa con total honestidad y busca la imparcialidad para hallar la armonía.` 
    },
    { 
        nombre: "IX. El Ermitaño", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L11 22h2l1.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`,
        generarTexto: (pregunta) => `Tu interrogante sobre "${pregunta}" requiere un tiempo de introspección. El Ermitaño te invita a apartarte temporalmente del ruido exterior para iluminar tus propias respuestas.` 
    },
    { 
        nombre: "X. La Rueda de la Fortuna", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4z"/></svg>`,
        generarTexto: (pregunta) => `En cuanto a "${pregunta}", los vientos del cambio soplan a tu favor. La Rueda de la Fortuna te indica que un giro inesperado del destino transformará positivamente tu situación.` 
    },
    { 
        nombre: "XI. La Fuerza", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 10.9 13 11.5 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.03-.42 1.98-1.07 2.75z"/></svg>`,
        generarTexto: (pregunta) => `Para lidiar con "${pregunta}", la verdadera clave será la paciencia y el autocontrol. La Fuerza te recuerda que la suavidad vence a la agresividad cuando hay amor propio.` 
    },
    { 
        nombre: "XII. El Colgado", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 10.9 13 11.5 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.03-.42 1.98-1.07 2.75z"/></svg>`,
        generarTexto: (pregunta) => `Si te preguntas sobre "${pregunta}", El Colgado te sugiere frenar y cambiar radicalmente de perspectiva. A veces, detenerse es la única forma de ver la verdad con otros ojos.` 
    },
    { 
        nombre: "XIII. La Muerte", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
        generarTexto: (pregunta) => `Frente a "${pregunta}", se avecina un cierre de ciclo inevitable. La Muerte no habla de finales trágicos, sino de una limpieza profunda que te libera para renacer con más fuerza.` 
    },
    { 
        nombre: "XIV. La Templanza", 
        svg: `<svg viewBox="0 0 24 24"><path d="M6 2h12v2H6V2zM4 6h16v2H4V6zm2 4h12v10H6V10z"/></svg>`,
        generarTexto: (pregunta) => `Tu consulta sobre "${pregunta}" pide mesura y paz interior. La Templanza actúa como un bálsamo, invitándote a fusionar opuestos con paciencia para lograr una sanación duradera.` 
    },
    { 
        nombre: "XV. El Diablo", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        generarTexto: (pregunta) => `En torno a "${pregunta}", El Diablo expone aquellas ataduras mentales o miedos inconscientes que te frenan. Es hora de reconocer tus sombras para liberarte de ellas.` 
    },
    { 
        nombre: "XVI. La Torre", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        generarTexto: (pregunta) => `Sobre "${pregunta}", prepárate para una revelación imprevista. La Torre sacude estructuras que ya no servían, derribando falsas ilusiones para dejar espacio a lo auténtico.` 
    },
    { 
        nombre: "XVII. La Estrella", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
        generarTexto: (pregunta) => `Para dar luz a "${pregunta}", La Estrella trae una ola renovada de esperanza e inspiración celeste. Tus deseos más profundos empiezan a alinearse con un futuro brillante.` 
    },
    { 
        nombre: "XVIII. La Luna", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`,
        generarTexto: (pregunta) => `Tu duda sobre "${pregunta}" está rodeada de cierta confusión o incertidumbre pasajera. La Luna te pide que escuches tus sueños y no temas navegar por tus emociones profundas.` 
    },
    { 
        nombre: "XIX. El Sol", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>`,
        generarTexto: (pregunta) => `Ante "${pregunta}", El Sol ilumina todo con claridad absoluta y éxito rotundo. La alegría, la vitalidad y las respuestas claras se instalan firmemente en tu camino.` 
    },
    { 
        nombre: "XX. El Juicio", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
        generarTexto: (pregunta) => `En relación a "${pregunta}", estás experimentando un despertar interno crucial. El Juicio te pide evaluar tu pasado con madurez para perdonar y renacer a una nueva etapa.` 
    },
    { 
        nombre: "XXI. El Mundo", 
        svg: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
        generarTexto: (pregunta) => `Para cerrar tu consulta sobre "${pregunta}", El Mundo corona tus esfuerzos con realización total. Se completa un ciclo de aprendizaje hermoso y alcanzas la plenitud.` 
    }
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
    const respuestasPosibles = ["Sí, absolutamente", "No por now", "Es muy probable", "El universo dice: No", "Sí, confía en el proceso"];
    respuestaSino.textContent = respuestasPosibles[Math.floor(Math.random() * respuestasPosibles.length)];

    // Seleccionar 3 cartas aleatorias sin repetir
    const arcanosMezclados = [...arcanosMayores].sort(() => 0.5 - Math.random());
    const cartasSeleccionadas = arcanosMezclados.slice(0, 3);

    cardsContainer.innerHTML = '';

    // Generar cartas con la ilustración vectorial representativa de fondo
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
                    <div class="card-bg-illustration">
                        ${arcano.svg}
                    </div>
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