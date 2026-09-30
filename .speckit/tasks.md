# Lista de Tarefas de Engenharia: Guindaste das Letras

> **Comando:** `/speckit-tasks`  
> **Status:** Todas as tarefas concluídas e validadas (8/8 - 100%)

---

## 📋 Ordem Lógica de Execução e Dependências

- [x] **Tarefa 1: Setup & Base Visual**
  - Criação da estrutura base HTML5, meta tags de viewport e viewport-fit.
  - Importação de fontes amigáveis (Fredoka, Nunito) via Google Fonts.
  - Configuração do Tailwind CSS CDN e regras CSS utilitárias para cantoneiras magnéticas e animações.

- [x] **Tarefa 2: Motor de Áudio Sintético**
  - Implementação do objeto `AudioEngine` (`AudioManager`) com sintetizador oscilatório (`sine`, `triangle`, `sawtooth`) via `AudioContext` nativo (sem dependências externas).
  - Efeitos sonoros: bips de movimento, som grave de colisão de borda (120Hz), feedback de célula vazia, garra magnética, acerto harmonioso, erro de depuração e fanfarra de vitória.
  - Integração da síntese vocal nativa (`SpeechSynthesisUtterance`) em Português do Brasil (`pt-BR`) com cancelamento automático de filas.

- [x] **Tarefa 3: Banco de Dados Pedagógico**
  - Estruturação do catálogo de fases no objeto `GAME_DATA` (`js/data.js`).
  - **Nível 1:** Ditongos e encontros vocálicos (`EU`, `OI`, `UI`, `IA`, `AI`, `EI`, `EIA`) associados a SVGs infantis de expressões faciais.
  - **Nível 2:** Palavras dissílabas canônicas (`PATO`, `BOLA`, `COLA`, `MOLA`) com illustrações vetoriais e matrizes de 12 letras (grade 4x3).

- [x] **Tarefa 4: Tabuleiro e Guindaste**
  - Construção das grades 4x3: Painel Azul (Esquerda - Seleção) e Painel Rosa (Direita - Referência).
  - Cursor seletor com cantoneiras magnéticas vermelhas destacadas (`.red-corner`).
  - Estrutura visual do Guindaste Central com braço superior perfurado, cabo extensível, torre e caminhão laranja com rodas azuis.

- [x] **Tarefa 5: Máquina de Estados e D-Pad**
  - Implementação das funções matriciais de controle de coordenadas `moveCrane(dx, dy)` / `moveSelector(deltaCol, deltaRow)`.
  - Validação estrita dos limites da matriz `(0..3, 0..2)` com áudio de colisão.
  - Vinculação aos botões direcionais do D-Pad (com área de toque mínima de **44px x 44px**) e teclas de atalho (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `WASD`).

- [x] **Tarefa 6: Lógica do Ímã e Depuração**
  - Implementação da função `handleGrabAction()` (`craneInteract()`) acionada pelo botão **PEGAR 🧲** ou tecla `Space`/`Enter`.
  - Validação ordinal do próximo caractere da palavra-alvo.
  - Tratamento de célula vazia (feedback neutro).
  - Ativação do ciclo de depuração formativa sem punição em caso de letra incorreta.

- [x] **Tarefa 7: Modais e Navegação**
  - Construção do Modal do Guia Pedagógico da BNCC Computação (`EF01CO01`, `EF01CO02`, `EF01LP02`, `EF01LP08`).
  - Seletor de Níveis (Nível 1 vs Nível 2) e navegação de desafios (Anterior, Próximo, Reiniciar).
  - Banner/Modal de Celebração de Vitória com reprodução de áudio da palavra completa.

- [x] **Tarefa 8: Polimento Responsivo**
  - Garantia de suporte e usabilidade em telas de celular (retrato e paisagem), tablet e desktop.
  - Verificação de layout client-side estático para implantação no GitHub Pages.
