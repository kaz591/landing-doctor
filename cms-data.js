// CMS-like data file for Dr. Daniel Gómez Landing Page
// Modify any text, description, image path, or item below to update the website instantly.

const CMS_DATA = {
    brandName: "Dr. Daniel Gómez",
    
    hero: {
        tag: "Cirujano Ortopédico Certificado",
        title: "Precisión en<br>Cada Movimiento.",
        description: "Soluciones quirúrgicas avanzadas especializadas en mano, codo y restauración de extremidad superior con tecnología de clase mundial.",
        image: "hero-doctor.png",
        ctaText: "Agendar Consulta"
    },
    
    stats: [
        { value: "98%", label: "SATISFACCIÓN" },
        { value: "2k+", label: "PACIENTES" },
        { value: "15+", label: "AÑOS DE EXP." },
        { value: "4.9★", label: "CALIFICACIÓN" }
    ],
    
    statsSection: {
        title: "Resultados que Hablan por Sí Solos.",
        description: "Más de una década de excelencia quirúrgica respaldada por datos reales y pacientes satisfechos en toda la región."
    },
    
    specialtiesSection: {
        tag: "NUESTRAS ESPECIALIDADES",
        title: "Atención Enfocada en<br>la Extremidad Superior.",
        btnExpand: "VER TODOS LOS SERVICIOS",
        btnCollapse: "OCULTAR SERVICIOS"
    },
    
    specialties: {
        mano: {
            title: "Cirugía de Mano",
            icon: "hand_bones",
            iconBg: "#103a5f",
            iconColor: "#81a4cf",
            description: "Desde liberación del túnel carpiano hasta reconstrucción compleja de fracturas y reparación microquirúrgica.",
            treatment: "Liberación del túnel carpiano, reparación de tendones y ligamentos, reparación de fracturas complejas en dedos/muñeca, y microcirugía reconstructiva.",
            recovery: "Desde 2 semanas para liberación de túnel carpiano hasta 3-6 meses de rehabilitación física guiada para cirugías reconstructivas mayores.",
            symptoms: "Hormigueo o entumecimiento recurrente en dedos, dolor punzante en la muñeca, rigidez al despertar y debilidad o pérdida de fuerza para sostener objetos.",
            image: "anatomy-hand.png",
            caption: "Modelo anatómico 3D de mano y muñeca para planificación de cirugía."
        },
        codo: {
            title: "Artroscopia de Codo",
            icon: "join",
            iconBg: "#92f5d9",
            iconColor: "#005141",
            description: "Exploración y reparación articular mínimamente invasiva para codo de tenista, artritis y desgarros de ligamentos.",
            treatment: "Limpieza y reparación articular mínimamente invasiva (codo de tenista, cuerpos libres óseos, liberación de rigidez articular y desgarros ligamentarios).",
            recovery: "Movilidad inmediata. Actividades cotidianas ligeras en 2-3 semanas, y reincorporación a deportes de impacto en 8-12 semanas.",
            symptoms: "Dolor persistentemente localizado en la cara externa del codo, bloqueo o rigidez articular al extender el brazo, y chasquidos con dolor al rotar el antebrazo.",
            image: "hero-xray.png",
            caption: "Radiografía digital de alta resolución mostrando la articulación del codo."
        },
        deporte: {
            title: "Lesiones Deportivas",
            icon: "sports_gymnastics",
            iconBg: "#ffdcbd",
            iconColor: "#663e0d",
            description: "Protocolos especializados de recuperación para deportistas, enfocados en un retorno rápido y seguro al rendimiento.",
            treatment: "Tratamiento avanzado y reconstructivo para esguinces de muñeca y codo, tendinitis agudas por sobreuso deportivo, e inestabilidad articular post-luxación.",
            recovery: "Protocolo de terapia física acelerada. Retorno seguro y progresivo a las canchas/entrenamientos estimado entre 6 semanas y 4 meses.",
            symptoms: "Dolor e inflamación aguda tras torcedura, sensación de inestabilidad o de que la articulación 'se sale', y debilidad muscular después del esfuerzo físico.",
            image: "doctor-photo.png",
            caption: "Consulta especializada para diagnóstico y retorno rápido al rendimiento."
        },
        tendones: {
            title: "Restauración de Tendones",
            icon: "healing",
            iconBg: "#ffdcbd",
            iconColor: "#663e0d",
            description: "Cirugías reconstructivas para roturas de tendones flexores y extensores, permitiendo recuperar el movimiento completo.",
            treatment: "Cirugías reconstructivas para roturas de tendones flexores y extensores, permitiendo recuperar el movimiento completo.",
            recovery: "Protocolo de movilización pasiva temprana guiada, con recuperación funcional completa entre 8 y 12 semanas.",
            symptoms: "Incapacidad para doblar o estirar un dedo, dolor en la palma o reverso de la mano tras corte o trauma, e inflamación local.",
            image: "anatomy-hand.png",
            caption: "Detalle de estructuras tendinosas y tendoplastia en extremidad superior."
        },
        reemplazo: {
            title: "Reemplazo Articular",
            icon: "medical_services",
            iconBg: "#103a5f",
            iconColor: "#81a4cf",
            description: "Artroplastia para articulaciones de la mano, nudillos y muñeca afectadas por desgaste articular o artritis severa.",
            treatment: "Artroplastia para articulaciones de la mano, nudillos y muñeca afectadas por desgaste articular o artritis severa.",
            recovery: "Uso funcional ligero de la mano a las 4-6 semanas. Fuerza y agarre máximo progresivo hasta los 6 meses.",
            symptoms: "Dolor articular crónico que no mejora con medicamentos, rigidez severa y deformación progresiva de los nudillos o muñeca.",
            image: "hero-xray.png",
            caption: "Estudio radiológico pre-operatorio de articulaciones para artroplastia."
        },
        nerviosa: {
            title: "Liberación Nerviosa",
            icon: "bolt",
            iconBg: "#92f5d9",
            iconColor: "#005141",
            description: "Descompresión de nervios periféricos en codo y muñeca para eliminar hormigueos y pérdida de sensibilidad.",
            treatment: "Descompresión de nervios periféricos en codo y muñeca para eliminar hormigueos y pérdida de sensibilidad.",
            recovery: "Alivio inmediato de síntomas de compresión. Cicatrización y recuperación de sensibilidad fina en 2-4 semanas.",
            symptoms: "Corrientes eléctricas, hormigueo nocturno en los dedos y pérdida de fuerza para pinzar o sujetar objetos pequeños.",
            image: "anatomy-hand.png",
            caption: "Modelo anatómico de distribución nerviosa periférica en el brazo."
        }
    },
    
    technology: {
        tag: "INNOVACIÓN TECNOLÓGICA",
        title: "Innovación en<br>Cada Incisión.",
        description: "Imágenes 3D de última generación y procedimientos asistidos por robótica para garantizar el mínimo tiempo de recuperación y la máxima precisión.",
        image: "anatomy-hand.png",
        bentoImageTag: "MODELO_V4.2",
        bentoImageTitle: "Precisión Anatómica",
        bentoBoxes: [
            {
                title: "Microcirugía",
                description: "Técnicas especializadas para reparación de nervios y vasos con precisión microscópica."
            },
            {
                title: "Experto de Confianza",
                description: "Elegido Mejor Ortopedista por 5 años consecutivos en la revista médica regional."
            },
            {
                value: "24h",
                title: "Respuesta Rápida",
                description: "Consultas de emergencia por lesiones deportivas programadas en un día hábil."
            }
        ]
    },
    
    aboutMe: {
        tag: "Sobre Mí",
        title: "Soy Daniel,<br>tu cirujano<br>de confianza.",
        paragraphs: [
            "Desde que era estudiante de medicina, supe que quería devolverle a la gente algo tan simple —y tan profundo— como mover sus manos sin dolor. Hoy, después de más de 15 años dedicados a la cirugía ortopédica, esa motivación sigue siendo la misma.",
            "Me especializo en mano, codo y extremidad superior, pero lo que más me importa es la persona que entra a mi consultorio. Escuchar tu historia, entender tu rutina y diseñar un plan que realmente funcione para ti —eso es lo que me hace levantarme cada mañana."
        ],
        formation: {
            title: "FORMACIÓN",
            school: "UNAM · Hospital de Ortopedia",
            sub: "Fellowship en Microcirugía — EUA"
        },
        memberships: {
            title: "MEMBRESÍAS",
            societies: "AMCIO · ASSH · IFSSH",
            sub: "Sociedades internacionales de mano"
        }
    },
    
    faqSection: {
        tag: "PREGUNTAS FRECUENTES",
        title: "Todo lo que necesitas saber."
    },
    
    faqs: [
        {
            question: "¿Cuánto tiempo dura la recuperación de una cirugía de mano?",
            answer: "El tiempo varía de 2 a 6 semanas para procedimientos simples (como túnel carpiano) y de 3 a 6 meses para reconstrucciones complejas de tendones o fracturas que requieren fisioterapia activa."
        },
        {
            question: "¿Qué tipo de anestesia se utiliza en estas cirugías?",
            answer: "Frecuentemente empleamos anestesia regional o bloqueo nervioso local bajo guía ecográfica. Esto permite dormir únicamente el brazo afectado, evitando la anestesia general y acelerando la recuperación."
        },
        {
            question: "¿Es necesario hacer terapia física después de la operación?",
            answer: "Sí, la rehabilitación especializada es fundamental en cirugía de mano y codo para evitar rigidez, recuperar fuerza fina y asegurar el éxito del procedimiento quirúrgico a largo plazo."
        },
        {
            question: "¿Atiende urgencias o fracturas recientes?",
            answer: "Sí, atendemos fracturas agudas, cortes de tendones, luxaciones y traumas de la extremidad superior programando atención y valoración rápida en consultorio o quirófano."
        },
        {
            question: "¿Puedo volver a hacer deporte después de una lesión de ligamentos en la muñeca?",
            answer: "Sí, en la mayoría de los casos es posible volver al deporte con una recuperación adecuada. El tiempo varía entre 6 semanas y 6 meses según la gravedad. El protocolo incluye inmovilización inicial, fisioterapia de fortalecimiento y reintroducción progresiva al entrenamiento. Trabajamos en equipo con fisioterapeutas especializados en deporte para que tu regreso sea seguro y sostenible."
        }
    ],
    
    testimonialsSection: {
        tag: "TESTIMONIOS",
        title: "Lo que dicen mis pacientes."
    },
    
    testimonials: [
        {
            stars: 5,
            text: '"El Dr. Gómez realizó mi reconstrucción de codo después de un accidente. Su precisión y el plan de rehabilitación me permitieron volver a las competencias en solo seis meses. ¡Increíble!"',
            initials: "MT",
            name: "Marcos Torres",
            role: "Atleta Profesional"
        },
        {
            stars: 5,
            text: '"Llegué con mucho miedo a la cirugía de mano. El doctor me explicó todo con calma y paciencia. Ahora puedo tocar el piano nuevamente. Le estoy eternamente agradecida."',
            initials: "LC",
            name: "Laura Castillo",
            role: "Pianista"
        },
        {
            stars: 5,
            text: '"Tres meses después de la cirugía ya estoy de vuelta en la cancha. El seguimiento post-operatorio fue impecable, siempre disponible para resolver mis dudas."',
            initials: "RV",
            name: "Roberto Vargas",
            role: "Tenista Amateur"
        },
        {
            stars: 5,
            text: '"Lo que más valoro es su honestidad. Me dijo exactamente qué esperar, sin falsas promesas. El resultado superó mis expectativas. Volvería a operarme con él sin dudarlo."',
            initials: "AM",
            name: "Ana Medrano",
            role: "Ejecutiva"
        },
        {
            stars: 5,
            text: '"Sufrí una fractura grave en el trabajo. El Dr. Gómez me atendió rápido y el resultado fue excelente. Mi mano funciona al 100% y pude reintegrarme sin problema."',
            initials: "JH",
            name: "Jorge Hernández",
            role: "Carpintero"
        }
    ],
    
    footer: {
        copyright: "© 2024 Dr. Daniel Gómez · Cirugía Ortopédica",
        links: [
            { text: "Política de Privacidad", href: "#" },
            { text: "Términos de Servicio", href: "#" },
            { text: "Certificaciones", href: "#" }
        ]
    }
};
