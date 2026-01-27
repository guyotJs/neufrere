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
    ],
    [
        {
            "g": "Eu quero ___.",
            "e": "I want food.",
            "a": ["comida", true],
            "b": ["bebida", false],
            "c": ["dinheiro", false],
            "d": ["mesa", false]
        },
        {
            "g": "Eu estou com ___.",
            "e": "I am hungry.",
            "a": ["fome", true],
            "b": ["sono", false],
            "c": ["sede", false],
            "d": ["frio", false]
        },
        {
            "g": "Eu quero um ___.",
            "e": "I want a coffee.",
            "a": ["café", true],
            "b": ["pão", false],
            "c": ["suco", false],
            "d": ["leite", false]
        },
        {
            "g": "A conta, ___.",
            "e": "The bill, please.",
            "a": ["por favor", true],
            "b": ["obrigado", false],
            "c": ["desculpa", false],
            "d": ["agora", false]
        },
        {
            "g": "Quanto ___ isso?",
            "e": "How much is this?",
            "a": ["custa", true],
            "b": ["come", false],
            "c": ["fica", false],
            "d": ["tem", false]
        },
        {
            "g": "Eu compro no ___.",
            "e": "I buy (things) at the supermarket.",
            "a": ["mercado", true],
            "b": ["hospital", false],
            "c": ["banheiro", false],
            "d": ["escola", false]
        },
        {
            "g": "Eu como ___.",
            "e": "I eat bread.",
            "a": ["pão", true],
            "b": ["água", false],
            "c": ["café", false],
            "d": ["suco", false]
        },
        {
            "g": "Eu bebo ___.",
            "e": "I drink water.",
            "a": ["água", true],
            "b": ["pão", false],
            "c": ["arroz", false],
            "d": ["comida", false]
        },
        {
            "g": "O café está ___.",
            "e": "The coffee is hot.",
            "a": ["quente", true],
            "b": ["frio", false],
            "c": ["caro", false],
            "d": ["longe", false]
        },
        {
            "g": "Eu gosto de ___.",
            "e": "I like coffee.",
            "a": ["café", true],
            "b": ["conta", false],
            "c": ["mesa", false],
            "d": ["mercado", false]
        }
    ],
    [
        {
            "g": "Que horas ___?",
            "e": "What time is it?",
            "a": ["são", true],
            "b": ["é", false],
            "c": ["fica", false],
            "d": ["tem", false]
        },
        {
            "g": "Agora é ___.",
            "e": "It is now.",
            "a": ["agora", true],
            "b": ["hoje", false],
            "c": ["ontem", false],
            "d": ["amanhã", false]
        },
        {
            "g": "Hoje é ___.",
            "e": "Today is today.",
            "a": ["hoje", true],
            "b": ["ontem", false],
            "c": ["amanhã", false],
            "d": ["agora", false]
        },
        {
            "g": "Amanhã é ___.",
            "e": "Tomorrow is tomorrow.",
            "a": ["amanhã", true],
            "b": ["hoje", false],
            "c": ["ontem", false],
            "d": ["agora", false]
        },
        {
            "g": "Ontem foi ___.",
            "e": "Yesterday was yesterday.",
            "a": ["ontem", true],
            "b": ["hoje", false],
            "c": ["amanhã", false],
            "d": ["agora", false]
        },
        {
            "g": "Eu chego ___.",
            "e": "I arrive now.",
            "a": ["agora", true],
            "b": ["ontem", false],
            "c": ["amanhã", false],
            "d": ["tarde", false]
        },
        {
            "g": "Eu trabalho ___.",
            "e": "I work today.",
            "a": ["hoje", true],
            "b": ["ontem", false],
            "c": ["amanhã", false],
            "d": ["agora", false]
        },
        {
            "g": "Eu saio ___.",
            "e": "I leave tomorrow.",
            "a": ["amanhã", true],
            "b": ["hoje", false],
            "c": ["ontem", false],
            "d": ["agora", false]
        },
        {
            "g": "Agora ___ cedo.",
            "e": "It is early now.",
            "a": ["é", true],
            "b": ["são", false],
            "c": ["fica", false],
            "d": ["tem", false]
        },
        {
            "g": "Agora ___ tarde.",
            "e": "It is late now.",
            "a": ["é", true],
            "b": ["são", false],
            "c": ["fica", false],
            "d": ["tem", false]
        }
    ],
    [
        {
            "g": "Oi! Tudo ___?",
            "e": "Hi! All good?",
            "a": ["bem", true],
            "b": ["bom", false],
            "c": ["certo", false],
            "d": ["ok", false]
        },
        {
            "g": "Eu ___ bem.",
            "e": "I am good.",
            "a": ["estou", true],
            "b": ["sou", false],
            "c": ["fico", false],
            "d": ["tenho", false]
        },
        {
            "g": "Agora eu estou ___.",
            "e": "Now I am calm.",
            "a": ["tranquilo", true],
            "b": ["cansado", false],
            "c": ["fome", false],
            "d": ["sono", false]
        },
        {
            "g": "Onde ___ você agora?",
            "e": "Where are you now?",
            "a": ["está", true],
            "b": ["fica", false],
            "c": ["é", false],
            "d": ["tem", false]
        },
        {
            "g": "Eu estou ___ trabalho.",
            "e": "I am at work.",
            "a": ["no", true],
            "b": ["em", false],
            "c": ["para", false],
            "d": ["com", false]
        },
        {
            "g": "O café ___ perto.",
            "e": "The café is nearby.",
            "a": ["fica", true],
            "b": ["está", false],
            "c": ["é", false],
            "d": ["tem", false]
        },
        {
            "g": "Eu estou com ___.",
            "e": "I am hungry.",
            "a": ["fome", true],
            "b": ["sede", false],
            "c": ["sono", false],
            "d": ["frio", false]
        },
        {
            "g": "Eu quero um ___.",
            "e": "I want a juice.",
            "a": ["suco", true],
            "b": ["pão", false],
            "c": ["café", false],
            "d": ["arroz", false]
        },
        {
            "g": "Eu bebo ___.",
            "e": "I drink coffee.",
            "a": ["café", true],
            "b": ["pão", false],
            "c": ["arroz", false],
            "d": ["comida", false]
        },
        {
            "g": "Quanto ___ o café?",
            "e": "How much is the coffee?",
            "a": ["custa", true],
            "b": ["come", false],
            "c": ["fica", false],
            "d": ["tem", false]
        },
        {
            "g": "A conta, ___.",
            "e": "The bill, please.",
            "a": ["por favor", true],
            "b": ["obrigado", false],
            "c": ["desculpa", false],
            "d": ["agora", false]
        },
        {
            "g": "Eu compro no ___.",
            "e": "I buy at the market.",
            "a": ["mercado", true],
            "b": ["banheiro", false],
            "c": ["hospital", false],
            "d": ["escola", false]
        },
        {
            "g": "Que horas ___ agora?",
            "e": "What time is it now?",
            "a": ["são", true],
            "b": ["é", false],
            "c": ["fica", false],
            "d": ["tem", false]
        },
        {
            "g": "Agora é ___.",
            "e": "It is now.",
            "a": ["agora", true],
            "b": ["hoje", false],
            "c": ["amanhã", false],
            "d": ["ontem", false]
        },
        {
            "g": "Hoje eu trabalho ___.",
            "e": "Today I work here.",
            "a": ["aqui", true],
            "b": ["ali", false],
            "c": ["lá", false],
            "d": ["onde", false]
        },
        {
            "g": "Eu saio ___.",
            "e": "I leave tomorrow.",
            "a": ["amanhã", true],
            "b": ["hoje", false],
            "c": ["ontem", false],
            "d": ["agora", false]
        },
        {
            "g": "Agora ___ cedo.",
            "e": "It is early now.",
            "a": ["é", true],
            "b": ["são", false],
            "c": ["fica", false],
            "d": ["tem", false]
        },
        {
            "g": "Eu chego ___.",
            "e": "I arrive late.",
            "a": ["tarde", true],
            "b": ["cedo", false],
            "c": ["agora", false],
            "d": ["ontem", false]
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
            "g": "Valeu! ___ mais.",
            "e": "Thanks! See you later.",
            "a": ["Até", true],
            "b": ["Por", false],
            "c": ["Com", false],
            "d": ["Em", false]
        }
    ]
]
`);
