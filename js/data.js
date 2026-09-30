/**
 * data.js - Banco de Dados de Conteúdo Pedagógico para "Guindaste das Letras"
 * Nível 1: Encontros Vocálicos (Ditongos e Tritongos)
 * Nível 2: Palavras Dissílabas Canônicas (CV-CV)
 */

const GAME_DATA = {
  level1: [
    {
      id: "eu",
      word: "EU",
      label: "Menino apontando para si",
      hint: "Usamos 'EU' para falar de nós mesmos!",
      phoneme: "é-u",
      // Ilustração SVG do Menino apontando para si
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <circle cx="60" cy="40" r="22" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
        <path d="M 45 35 Q 50 30 55 35" fill="none" stroke="#be185d" stroke-width="3" stroke-linecap="round"/>
        <path d="M 65 35 Q 70 30 75 35" fill="none" stroke="#be185d" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="42" r="3" fill="#be185d"/>
        <circle cx="70" cy="42" r="3" fill="#be185d"/>
        <path d="M 52 52 Q 60 58 68 52" fill="none" stroke="#be185d" stroke-width="3" stroke-linecap="round"/>
        <path d="M 40 62 Q 60 62 80 62 L 75 100 L 45 100 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/>
        <!-- Braço apontando para o próprio peito -->
        <path d="M 78 68 L 95 80 Q 90 90 70 78" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
        <polygon points="65,75 75,70 73,82" fill="#be185d"/>
      </svg>`,
      // 12 letras para preencher a grade 4x3 (contém E, U e distratores)
      gridLetters: ["E", "U", "A", "I", "O", "E", "U", "I", "A", "O", "E", "U"]
    },
    {
      id: "oi",
      word: "OI",
      label: "Acenando a mão (Saudação)",
      hint: "Usamos 'OI' para cumprimentar um amigo!",
      phoneme: "ó-i",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <circle cx="50" cy="45" r="22" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
        <circle cx="43" cy="42" r="3" fill="#92400e"/>
        <circle cx="57" cy="42" r="3" fill="#92400e"/>
        <path d="M 44 54 Q 50 60 56 54" fill="none" stroke="#92400e" stroke-width="3" stroke-linecap="round"/>
        <path d="M 35 67 L 65 67 L 60 105 L 40 105 Z" fill="#4ade80" stroke="#15803d" stroke-width="3"/>
        <!-- Mão acenando -->
        <path d="M 65 70 Q 85 50 95 35 Q 100 45 80 75 Z" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
        <text x="85" y="30" font-size="16" fill="#fbbf24" font-weight="bold">👋</text>
      </svg>`,
      gridLetters: ["O", "I", "A", "E", "U", "O", "I", "A", "E", "O", "I", "U"]
    },
    {
      id: "ui",
      word: "UI",
      label: "Expressão de Susto!",
      hint: "Dizemos 'UI' quando apanhamos um pequeno susto!",
      phoneme: "u-i",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <circle cx="60" cy="50" r="25" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
        <ellipse cx="50" cy="45" rx="3" ry="5" fill="#7c2d12"/>
        <ellipse cx="70" cy="45" rx="3" ry="5" fill="#7c2d12"/>
        <circle cx="60" cy="62" r="7" fill="#7c2d12"/>
        <path d="M 35 75 L 85 75 L 75 110 L 45 110 Z" fill="#a855f7" stroke="#6b21a8" stroke-width="3"/>
        <text x="90" y="40" font-size="20">⚡</text>
      </svg>`,
      gridLetters: ["U", "I", "O", "A", "E", "U", "I", "O", "A", "U", "I", "E"]
    },
    {
      id: "ia",
      word: "IA",
      label: "Menina apontando o caminho",
      hint: "'IA' é quando alguém ia a algum lugar!",
      phoneme: "í-a",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <circle cx="60" cy="40" r="22" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
        <circle cx="52" cy="38" r="3" fill="#9d174d"/>
        <circle cx="68" cy="38" r="3" fill="#9d174d"/>
        <path d="M 54 48 Q 60 54 66 48" fill="none" stroke="#9d174d" stroke-width="3" stroke-linecap="round"/>
        <path d="M 40 62 L 80 62 L 85 105 L 35 105 Z" fill="#ec4899" stroke="#be185d" stroke-width="3"/>
        <!-- Seta apontando -->
        <path d="M 75 75 L 105 75 M 95 65 L 105 75 L 95 85" fill="none" stroke="#f43f5e" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      gridLetters: ["I", "A", "E", "O", "U", "I", "A", "E", "O", "I", "A", "U"]
    },
    {
      id: "ai",
      word: "AI",
      label: "Dedo machucado (Expressão de Dor)",
      hint: "Dizemos 'AI' quando encostamos onde machuca!",
      phoneme: "á-i",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <circle cx="60" cy="45" r="24" fill="#fecdd3" stroke="#e11d48" stroke-width="3"/>
        <path d="M 45 42 L 53 40 M 67 40 L 75 42" stroke="#9f1239" stroke-width="3" stroke-linecap="round"/>
        <circle cx="49" cy="47" r="2.5" fill="#9f1239"/>
        <circle cx="71" cy="47" r="2.5" fill="#9f1239"/>
        <path d="M 50 62 Q 60 55 70 62" fill="none" stroke="#9f1239" stroke-width="3" stroke-linecap="round"/>
        <!-- Curativo no dedo -->
        <rect x="75" y="70" width="25" height="15" rx="4" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
        <text x="83" y="82" font-size="10" fill="#a16207" font-weight="bold">🩹</text>
      </svg>`,
      gridLetters: ["A", "I", "E", "O", "U", "A", "I", "E", "O", "A", "I", "U"]
    },
    {
      id: "ei",
      word: "EI",
      label: "Chamando alguém",
      hint: "Usamos 'EI' para chamar a atenção de alguém!",
      phoneme: "ê-i",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <circle cx="50" cy="45" r="22" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
        <circle cx="43" cy="42" r="3" fill="#1e40af"/>
        <circle cx="57" cy="42" r="3" fill="#1e40af"/>
        <path d="M 44 54 Q 50 60 56 54" fill="none" stroke="#1e40af" stroke-width="3"/>
        <path d="M 35 67 L 65 67 L 60 105 L 40 105 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/>
        <text x="75" y="40" font-size="22">📢</text>
      </svg>`,
      gridLetters: ["E", "I", "A", "O", "U", "E", "I", "A", "O", "E", "I", "U"]
    },
    {
      id: "eia",
      word: "EIA",
      label: "Expressão de cavalgar!",
      hint: "'EIA!' é o som usado para incentivar o cavalo!",
      phoneme: "ê-i-a",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <path d="M 30 75 Q 40 40 70 45 Q 90 50 100 70 Q 75 80 60 75 Z" fill="#d97706" stroke="#78350f" stroke-width="3"/>
        <circle cx="80" cy="55" r="4" fill="#451a03"/>
        <path d="M 85 70 Q 75 75 65 72" fill="none" stroke="#451a03" stroke-width="3"/>
        <!-- Chapéu / Estrela -->
        <text x="35" y="35" font-size="24">🤠</text>
      </svg>`,
      gridLetters: ["E", "I", "A", "O", "U", "E", "I", "A", "E", "I", "A", "O"]
    }
  ],

  level2: [
    {
      id: "pato",
      word: "PATO",
      label: "Pato amarelo na lagoa",
      hint: "O PATO é uma ave aquática que faz 'Quack'!",
      phoneme: "pa-to",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <!-- Lagoa -->
        <ellipse cx="60" cy="95" rx="50" ry="15" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/>
        <!-- Corpo do Pato -->
        <path d="M 35 70 Q 30 90 60 90 Q 90 90 85 70 Q 75 55 60 65 Q 45 55 35 70 Z" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
        <!-- Cabeça -->
        <circle cx="70" cy="48" r="16" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
        <!-- Olho -->
        <circle cx="75" cy="44" r="3" fill="#854d0e"/>
        <!-- Bico Laranja -->
        <path d="M 83 48 Q 98 48 93 56 Q 83 56 83 48 Z" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
        <!-- Asinha -->
        <path d="M 45 72 Q 55 65 65 75 Q 55 82 45 72 Z" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
      </svg>`,
      gridLetters: ["P", "A", "T", "O", "B", "L", "M", "C", "P", "A", "T", "O"]
    },
    {
      id: "bola",
      word: "BOLA",
      label: "Bola de futebol colorida",
      hint: "Usamos a BOLA para jogar e brincar!",
      phoneme: "bó-la",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <circle cx="60" cy="60" r="40" fill="#ef4444" stroke="#991b1b" stroke-width="4"/>
        <path d="M 60 20 Q 75 60 60 100" fill="none" stroke="#facc15" stroke-width="8"/>
        <path d="M 20 60 Q 60 75 100 60" fill="none" stroke="#3b82f6" stroke-width="8"/>
        <circle cx="60" cy="60" r="10" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
      </svg>`,
      gridLetters: ["B", "O", "L", "A", "P", "T", "C", "M", "B", "O", "L", "A"]
    },
    {
      id: "cola",
      word: "COLA",
      label: "Tubo de cola escolar",
      hint: "A COLA serve para colar os papeis no caderno!",
      phoneme: "có-la",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <!-- Corpo da Tubo -->
        <rect x="42" y="45" width="36" height="55" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="3"/>
        <!-- Rótulo -->
        <rect x="42" y="60" width="36" height="25" fill="#3b82f6"/>
        <text x="60" y="77" font-size="11" font-weight="black" fill="#ffffff" text-anchor="middle">COLA</text>
        <!-- Bico / Tampa -->
        <polygon points="50,45 70,45 66,30 54,30" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
        <rect x="56" y="20" width="8" height="10" rx="2" fill="#ef4444"/>
      </svg>`,
      gridLetters: ["C", "O", "L", "A", "P", "T", "B", "M", "C", "O", "L", "A"]
    },
    {
      id: "mola",
      word: "MOLA",
      label: "Mola maluca colorida",
      hint: "A MOLA pula e estica de um lado para o outro!",
      phoneme: "mó-la",
      svg: `<svg viewBox="0 0 120 120" class="w-full h-full">
        <path d="M 35 30 Q 85 25 85 40 Q 35 45 35 55 Q 85 55 85 70 Q 35 70 35 85 Q 85 85 85 95" 
              fill="none" stroke="#a855f7" stroke-width="8" stroke-linecap="round"/>
        <path d="M 35 30 Q 85 25 85 40 Q 35 45 35 55 Q 85 55 85 70 Q 35 70 35 85 Q 85 85 85 95" 
              fill="none" stroke="#ec4899" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      gridLetters: ["M", "O", "L", "A", "P", "T", "B", "C", "M", "O", "L", "A"]
    }
  ]
};
