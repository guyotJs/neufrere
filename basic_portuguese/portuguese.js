let language = JSON.parse(`
[
    [
        {
            "g": "Està ___, obrigado.",
            "e": "That's fine, thanks.",
            "a": ["frio", false],
            "b": ["branco", false],
            "c": ["legal", true],
            "d": ["sorvete", false]
        },
        {
            "g": "Como ___.",
            "e": "How are you (informal).",
            "a": ["vocês", false],
            "b": ["vá", false],
            "c": ["vai", true],
            "d": ["tu", false]
        },
        {
            "g": "___ bem.",
            "e": "I'm good.",
            "a": ["É", false],
            "b": ["Sou", false],
            "c": ["Quero", false],
            "d": ["Estou", true]
        },
        {
            "g": "___ em conhecê-lo/la.",
            "e": "Nice to meet you.",
            "a": ["Encantado", false],
            "b": ["Viva", false],
            "c": ["Bom", false],
            "d": ["Prazer", true]
        },
        {
            "g": "Fala ___?",
            "e": "Do you speak english? (formal)",
            "a": ["inglese", false],
            "b": ["inglie", false],
            "c": ["englêse", false],
            "d": ["inglês", true]
        },
        {
            "g": "Estou ___ português.",
            "e": "I am learning Portuguese.",
            "a": ["aprenhdo", false],
            "b": ["a aprender", false],
            "c": ["aprendo", false],
            "d": ["aprendendo", true]
        },
        {
            "g": "Estou falo ___ pouco.",
            "e": "I speak a little.",
            "a": ["a", false],
            "b": ["é", false],
            "c": ["pão", false],
            "d": ["um", true]
        },
        {
            "g": "___ repetir?",
            "e": "Can you repeat. (formal)",
            "a": ["Podes", false],
            "b": ["Posso", false],
            "c": ["Quero", false],
            "d": ["Pode", true]
        },
        {
            "g": "Eu ___ sei.",
            "e": "I don't know (formal)",
            "a": ["noa", false],
            "b": ["ãou", false],
            "c": ["non", false],
            "d": ["não", true]
        },
        {
            "g": "O ___ é isso",
            "e": "What is this?",
            "a": ["puoco", false],
            "b": ["um", false],
            "c": ["che", false],
            "d": ["que", true]
        }
    ],
    [
        {
            "g": "Eu ___ bem.",
            "e": "I am good.",
            "a": ["estou", true],
            "b": ["sou", false],
            "c": ["fico", false],
            "d": ["tenho", false]
        },
        {
            "g": "___ bem.",
            "e": "All good.",
            "a": ["Tudo", true],
            "b": ["Todo", false],
            "c": ["Todos", false],
            "d": ["Toda", false]
        },
        {
            "g": "Estou ___.",
            "e": "I am okay.",
            "a": ["ok", true],
            "b": ["bem", false],
            "c": ["bom", false],
            "d": ["certo", false]
        },
        {
            "g": "Mais ou ___.",
            "e": "So-so.",
            "a": ["menos", true],
            "b": ["pouco", false],
            "c": ["nada", false],
            "d": ["mal", false]
        },
        {
            "g": "Estou ___.",
            "e": "I am tired.",
            "a": ["cansado", true],
            "b": ["fome", false],
            "c": ["sono", false],
            "d": ["tranquilo", false]
        },
        {
            "g": "Tô ___.",
            "e": "I am calm / chill.",
            "a": ["tranquilo", true],
            "b": ["rápido", false],
            "c": ["feliz", false],
            "d": ["pronto", false]
        },
        {
            "g": "Estou com ___.",
            "e": "I am hungry.",
            "a": ["fome", true],
            "b": ["sono", false],
            "c": ["frio", false],
            "d": ["bem", false]
        },
        {
            "g": "Estou com ___.",
            "e": "I am sleepy.",
            "a": ["sono", true],
            "b": ["fome", false],
            "c": ["cansado", false],
            "d": ["calma", false]
        },
        {
            "g": "___ mal.",
            "e": "Not bad.",
            "a": ["Nada", true],
            "b": ["Tudo", false],
            "c": ["Muito", false],
            "d": ["Bem", false]
        },
        {
            "g": "Está ___.",
            "e": "It is fine.",
            "a": ["tudo", false],
            "b": ["bem", true],
            "c": ["certo", false],
            "d": ["ok", false]
        }
    ],
    [
        {
            "g": "Onde ___ você?",
            "e": "Where are you?",
            "a": ["está", true],
            "b": ["é", false],
            "c": ["fica", false],
            "d": ["tem", false]
        },
        {
            "g": "Onde ___ o banheiro?",
            "e": "Where is the bathroom?",
            "a": ["fica", true],
            "b": ["está", false],
            "c": ["é", false],
            "d": ["tem", false]
        },
        {
            "g": "Eu estou ___.",
            "e": "I am here.",
            "a": ["aqui", true],
            "b": ["ali", false],
            "c": ["lá", false],
            "d": ["onde", false]
        },
        {
            "g": "Eu estou ___.",
            "e": "I am there (near).",
            "a": ["ali", true],
            "b": ["aqui", false],
            "c": ["lá", false],
            "d": ["onde", false]
        },
        {
            "g": "Eu estou ___.",
            "e": "I am there (far).",
            "a": ["lá", true],
            "b": ["aqui", false],
            "c": ["ali", false],
            "d": ["onde", false]
        },
        {
            "g": "Onde ___ a escola?",
            "e": "Where is the school?",
            "a": ["fica", true],
            "b": ["está", false],
            "c": ["é", false],
            "d": ["tem", false]
        },
        {
            "g": "O mercado fica ___.",
            "e": "The market is here.",
            "a": ["aqui", true],
            "b": ["ali", false],
            "c": ["lá", false],
            "d": ["onde", false]
        },
        {
            "g": "Onde ___ isso?",
            "e": "Where is this?",
            "a": ["fica", true],
            "b": ["está", false],
            "c": ["é", false],
            "d": ["tem", false]
        },
        {
            "g": "Eu estou ___ casa.",
            "e": "I am at home.",
            "a": ["em", true],
            "b": ["no", false],
            "c": ["na", false],
            "d": ["para", false]
        },
        {
            "g": "Onde você ___ agora?",
            "e": "Where are you now?",
            "a": ["está", true],
            "b": ["fica", false],
            "c": ["é", false],
            "d": ["tem", false]
        }
        ]
]
`);
