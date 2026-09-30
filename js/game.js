/**
 * game.js - Lógica Principal e Controlador do "Guindaste das Letras"
 * Gerencia o estado da partida, navegação no grid 4x3, validação de caracteres,
 * depuração e interatividade com usuário.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- ESTADO DO JOGO ---
  let currentLevelKey = 'level1'; // 'level1' ou 'level2'
  let currentChallengeIndex = 0;
  let currentColumn = 0; // 0 a 3 (4 colunas estritas)
  let currentRow = 0;    // 0 a 2 (3 linhas estritas)
  let capturedLetters = [];
  let isLevelCompleted = false;

  // --- ELEMENTOS DO DOM ---
  const levelIndicator = document.getElementById('level-indicator');
  const progressText = document.getElementById('progress-text');
  const wordSlotsContainer = document.getElementById('word-slots-container');
  const statusMessage = document.getElementById('status-message');
  const gridContainer = document.getElementById('grid-container');
  const magnetSelector = document.getElementById('magnet-selector');
  const posXDisplay = document.getElementById('pos-x');
  const posYDisplay = document.getElementById('pos-y');
  
  const illustrationContainer = document.getElementById('illustration-container');
  const illustrationLabel = document.getElementById('illustration-label');
  const pedagogicalHint = document.getElementById('pedagogical-hint');

  // Botões de navegação
  const btnLevel1 = document.getElementById('btn-level-1');
  const btnLevel2 = document.getElementById('btn-level-2');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnReset = document.getElementById('btn-reset');
  const btnListen = document.getElementById('btn-listen');
  const btnSpokenHint = document.getElementById('btn-spoken-hint');

  // D-Pad e Ação
  const dpadUp = document.getElementById('dpad-up');
  const dpadDown = document.getElementById('dpad-down');
  const dpadLeft = document.getElementById('dpad-left');
  const dpadRight = document.getElementById('dpad-right');
  const btnGrab = document.getElementById('btn-grab');

  // Modais
  const btnBncc = document.getElementById('btn-bncc');
  const modalBncc = document.getElementById('modal-bncc');
  const closeModalBncc = document.getElementById('close-modal-bncc');
  const btnCloseBnccBottom = document.getElementById('btn-close-bncc-bottom');

  const modalVictory = document.getElementById('modal-victory');
  const victoryWordDisplay = document.getElementById('victory-word-display');
  const btnVictoryNext = document.getElementById('btn-victory-next');
  const btnVictoryReplay = document.getElementById('btn-victory-replay');

  // --- FUNÇÕES DE INICIALIZAÇÃO DE DESAFIO ---

  function getCurrentChallenge() {
    return GAME_DATA[currentLevelKey][currentChallengeIndex];
  }

  function loadChallenge() {
    const challenge = getCurrentChallenge();
    capturedLetters = [];
    isLevelCompleted = false;

    // Reseta a posição do seletor magnético para (0,0)
    currentColumn = 0;
    currentRow = 0;

    // Atualiza cabeçalho e progresso
    const totalChallenges = GAME_DATA[currentLevelKey].length;
    progressText.textContent = `${currentChallengeIndex + 1}/${totalChallenges}`;
    
    if (currentLevelKey === 'level1') {
      levelIndicator.textContent = "Nível 1: Encontros Vocálicos";
      btnLevel1.className = "px-3 py-1.5 rounded-lg text-xs font-black transition bg-amber-500 text-slate-950 shadow";
      btnLevel2.className = "px-3 py-1.5 rounded-lg text-xs font-black transition text-slate-300 hover:text-white";
    } else {
      levelIndicator.textContent = "Nível 2: Palavras Dissílabas";
      btnLevel2.className = "px-3 py-1.5 rounded-lg text-xs font-black transition bg-amber-500 text-slate-950 shadow";
      btnLevel1.className = "px-3 py-1.5 rounded-lg text-xs font-black transition text-slate-300 hover:text-white";
    }

    // Carrega modelo de referência no Painel Rosa
    illustrationContainer.innerHTML = challenge.svg;
    illustrationLabel.textContent = challenge.label;
    pedagogicalHint.textContent = challenge.hint;

    // Constrói os Slots da Palavra e a Grade 4x3
    renderWordSlots();
    renderGrid(challenge.gridLetters);
    updateSelectorPosition();

    // Mensagem de boas-vindas do desafio
    setStatusMessage(`🎯 Palavra "${challenge.word}": escolha a 1ª letra (${challenge.word[0]})!`, "normal");
  }

  // --- RENDERIZAÇÃO DE COMPONENTES ---

  function renderWordSlots() {
    const challenge = getCurrentChallenge();
    wordSlotsContainer.innerHTML = '';

    for (let i = 0; i < challenge.word.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'w-10 h-12 md:w-12 md:h-14 bg-slate-900 border-2 rounded-xl flex items-center justify-center text-xl md:text-2xl font-black shadow-inner transition-all duration-300';

      if (i < capturedLetters.length) {
        // Slot preenchido
        slot.textContent = capturedLetters[i];
        slot.classList.add('border-emerald-500', 'text-amber-400', 'bg-emerald-950/60', 'scale-105');
      } else if (i === capturedLetters.length) {
        // Slot ativo
        slot.textContent = '?';
        slot.classList.add('border-amber-500', 'text-amber-400/50', 'animate-pulse');
      } else {
        // Slot vazio
        slot.textContent = '';
        slot.classList.add('border-slate-700', 'text-slate-600');
      }

      wordSlotsContainer.appendChild(slot);
    }
  }

  function renderGrid(letters) {
    const oldCells = gridContainer.querySelectorAll('.grid-cell');
    oldCells.forEach(cell => cell.remove());

    letters.forEach((letter, index) => {
      const col = index % 4;
      const row = Math.floor(index / 4);

      const cell = document.createElement('button');
      cell.className = 'grid-cell h-16 sm:h-20 bg-sky-900/80 hover:bg-sky-800 border-2 border-sky-600/70 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-black text-white shadow-md active:scale-95 transition relative';
      cell.dataset.col = col;
      cell.dataset.row = row;
      cell.dataset.letter = letter;

      cell.innerHTML = `
        <span class="letter-label">${letter}</span>
        <span class="absolute top-1 left-2 text-[9px] font-bold text-sky-400/60 font-mono">(${col + 1},${row + 1})</span>
      `;

      cell.addEventListener('click', (e) => {
        e.preventDefault();
        currentColumn = col;
        currentRow = row;
        updateSelectorPosition();
        gameAudio.playMoveSound();
      });

      gridContainer.appendChild(cell);
    });
  }

  function updateSelectorPosition() {
    posXDisplay.textContent = currentColumn + 1;
    posYDisplay.textContent = currentRow + 1;

    const targetCell = gridContainer.querySelector(`.grid-cell[data-col="${currentColumn}"][data-row="${currentRow}"]`);
    if (targetCell) {
      magnetSelector.style.width = `${targetCell.offsetWidth}px`;
      magnetSelector.style.height = `${targetCell.offsetHeight}px`;
      magnetSelector.style.left = `${targetCell.offsetLeft}px`;
      magnetSelector.style.top = `${targetCell.offsetTop}px`;
    }
  }

  window.addEventListener('resize', updateSelectorPosition);

  // --- MECÂNICA DE NAVEGAÇÃO NO D-PAD ---

  function moveSelector(deltaCol, deltaRow) {
    if (isLevelCompleted) return;

    const nextCol = currentColumn + deltaCol;
    const nextRow = currentRow + deltaRow;

    // Limites estritos 4x3 (0..3, 0..2)
    if (nextCol < 0 || nextCol > 3 || nextRow < 0 || nextRow > 2) {
      gameAudio.playCollisionSound();
      return;
    }

    currentColumn = nextCol;
    currentRow = nextRow;
    updateSelectorPosition();
    gameAudio.playMoveSound();
  }

  // --- MECÂNICA DE CAPTURA E DEBURAGEM (PEGAR 🧲) ---

  function handleGrabAction() {
    if (isLevelCompleted) return;

    const targetCell = gridContainer.querySelector(`.grid-cell[data-col="${currentColumn}"][data-row="${currentRow}"]`);
    
    if (!targetCell || !targetCell.dataset.letter || targetCell.dataset.letter.trim() === '') {
      gameAudio.playEmptyGrabSound();
      return;
    }

    gameAudio.playGrabSound();
    magnetSelector.classList.add('animate-grab');
    setTimeout(() => magnetSelector.classList.remove('animate-grab'), 300);

    const challenge = getCurrentChallenge();
    const selectedLetter = targetCell.dataset.letter;
    const expectedLetter = challenge.word[capturedLetters.length];

    if (selectedLetter === expectedLetter) {
      // ✅ RESPOSTA CORRETA
      capturedLetters.push(selectedLetter);
      gameAudio.playSuccessSound();
      gameAudio.speak(selectedLetter);

      renderWordSlots();

      if (capturedLetters.length === challenge.word.length) {
        // 🎉 PALAVRA COMPLETA
        isLevelCompleted = true;
        setStatusMessage(`🌟 Fantástico! Você montou "${challenge.word}"!`, "success");
        
        setTimeout(() => {
          gameAudio.playWinSound();
          gameAudio.speak(`Muito bem! Você completou a palavra: ${challenge.word}!`);
          openVictoryModal();
        }, 400);

      } else {
        const nextIndex = capturedLetters.length;
        const nextExpected = challenge.word[nextIndex];
        setStatusMessage(`✨ Boa! Agora busque a próxima letra: (${nextExpected})`, "normal");
      }

    } else {
      // ❌ DEPURAÇÃO / ERRO AMIGÁVEL
      gameAudio.playDebugSound();
      magnetSelector.classList.add('animate-debug');
      setTimeout(() => magnetSelector.classList.remove('animate-debug'), 400);

      setStatusMessage(`💡 Ops! Essa é a letra "${selectedLetter}". Tente outra letra!`, "warning");
    }
  }

  function setStatusMessage(msg, type = "normal") {
    statusMessage.textContent = msg;
    statusMessage.className = "text-sm font-bold px-3 py-1 rounded-lg border flex items-center transition-all duration-300 ";

    if (type === "success") {
      statusMessage.classList.add("bg-emerald-950/80", "text-emerald-300", "border-emerald-500");
    } else if (type === "warning") {
      statusMessage.classList.add("bg-amber-950/80", "text-amber-300", "border-amber-500");
    } else {
      statusMessage.classList.add("bg-slate-900/60", "text-sky-300", "border-sky-500/40");
    }
  }

  // --- MODAL DE VITÓRIA E NAVEGAÇÃO DE DESAFIOS ---

  function openVictoryModal() {
    const challenge = getCurrentChallenge();
    victoryWordDisplay.textContent = challenge.word;
    modalVictory.classList.remove('hidden');
  }

  function closeVictoryModal() {
    modalVictory.classList.add('hidden');
  }

  function nextChallenge() {
    const total = GAME_DATA[currentLevelKey].length;
    if (currentChallengeIndex < total - 1) {
      currentChallengeIndex++;
    } else {
      currentChallengeIndex = 0;
    }
    loadChallenge();
  }

  function prevChallenge() {
    if (currentChallengeIndex > 0) {
      currentChallengeIndex--;
    } else {
      const total = GAME_DATA[currentLevelKey].length;
      currentChallengeIndex = total - 1;
    }
    loadChallenge();
  }

  // --- LISTENERS DE EVENTOS DE TOQUE E BOTÕES COM PREVENÇÃO DE ZOOM TOUCH ---

  function bindTouchButton(element, action) {
    if (!element) return;
    element.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      action();
    });
  }

  bindTouchButton(dpadUp, () => moveSelector(0, -1));
  bindTouchButton(dpadDown, () => moveSelector(0, 1));
  bindTouchButton(dpadLeft, () => moveSelector(-1, 0));
  bindTouchButton(dpadRight, () => moveSelector(1, 0));
  bindTouchButton(btnGrab, handleGrabAction);

  // Teclado Físico
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        e.preventDefault();
        moveSelector(0, -1);
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        e.preventDefault();
        moveSelector(0, 1);
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        e.preventDefault();
        moveSelector(-1, 0);
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        e.preventDefault();
        moveSelector(1, 0);
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        handleGrabAction();
        break;
    }
  });

  // Botão de Áudio "Ouvir"
  btnListen.addEventListener('click', () => {
    const challenge = getCurrentChallenge();
    gameAudio.speak(challenge.word);
  });

  // Botão Dica Falada
  btnSpokenHint.addEventListener('click', () => {
    const challenge = getCurrentChallenge();
    gameAudio.speak(`${challenge.hint} Procure a letra ${challenge.word[capturedLetters.length]}`);
  });

  // Alternadores de Nível
  btnLevel1.addEventListener('click', () => {
    if (currentLevelKey !== 'level1') {
      currentLevelKey = 'level1';
      currentChallengeIndex = 0;
      loadChallenge();
    }
  });

  btnLevel2.addEventListener('click', () => {
    if (currentLevelKey !== 'level2') {
      currentLevelKey = 'level2';
      currentChallengeIndex = 0;
      loadChallenge();
    }
  });

  // Navegação de Desafios
  btnPrev.addEventListener('click', prevChallenge);
  btnNext.addEventListener('click', nextChallenge);
  btnReset.addEventListener('click', loadChallenge);

  // Modal de Vitória Ações
  btnVictoryNext.addEventListener('click', () => {
    closeVictoryModal();
    nextChallenge();
  });

  btnVictoryReplay.addEventListener('click', () => {
    const challenge = getCurrentChallenge();
    gameAudio.speak(challenge.word);
  });

  // Modal BNCC Ações
  btnBncc.addEventListener('click', () => modalBncc.classList.remove('hidden'));
  closeModalBncc.addEventListener('click', () => modalBncc.classList.add('hidden'));
  btnCloseBnccBottom.addEventListener('click', () => modalBncc.classList.add('hidden'));

  // --- CARREGAMENTO INICIAL ---
  loadChallenge();
});
