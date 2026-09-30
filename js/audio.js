/**
 * audio.js - Gerenciador de Efeitos Sonoros Nativos (Web Audio API)
 * e Síntese de Voz em Português Brasileiro (Web Speech API)
 * 100% Client-side e sem requisição de arquivos externos (.mp3/.wav).
 */

class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.speechSynth = window.speechSynthesis || null;
  }

  // Inicializa o contexto de áudio após primeira interação do usuário
  initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Efeito Sonoro: Movimento do Seletor / D-Pad (Clique suave)
  playMoveSound() {
    this.initContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.audioCtx.currentTime); // Nota A4
    osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);

    // Desconecta os nós de áudio para liberação imediata de memória (Garbage Collection)
    setTimeout(() => {
      osc.disconnect();
      gain.disconnect();
    }, 60);
  }

  // Efeito Sonoro: Colisão com a borda da grade (Frequência grave 120Hz)
  playCollisionSound() {
    this.initContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.08);

    setTimeout(() => {
      osc.disconnect();
      gain.disconnect();
    }, 90);
  }

  // Efeito Sonoro: Tentativa de pegar em célula vazia (Feedback Neutro)
  playEmptyGrabSound() {
    this.initContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(280, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.06);

    setTimeout(() => {
      osc.disconnect();
      gain.disconnect();
    }, 70);
  }

  // Efeito Sonoro: Garra Magnética / Ação de PEGAR
  playGrabSound() {
    this.initContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(600, this.audioCtx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.12);

    setTimeout(() => {
      osc.disconnect();
      gain.disconnect();
    }, 130);
  }

  // Efeito Sonoro: Sucesso na Letra (Tom Harmonioso Ascendente)
  playSuccessSound() {
    this.initContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99];

    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.2, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.2);

      setTimeout(() => {
        osc.disconnect();
        gain.disconnect();
      }, (idx * 0.08 + 0.25) * 1000);
    });
  }

  // Efeito Sonoro: Depuração / Debugging (Erro Amigável)
  playDebugSound() {
    this.initContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(160, now + 0.2);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.25);

    setTimeout(() => {
      osc.disconnect();
      gain.disconnect();
    }, 270);
  }

  // Efeito Sonoro: Vitória do Desafio (Fanfarra Infantil)
  playWinSound() {
    this.initContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const melody = [
      { freq: 523.25, time: 0 },
      { freq: 659.25, time: 0.12 },
      { freq: 783.99, time: 0.24 },
      { freq: 1046.50, time: 0.36 }
    ];

    melody.forEach((note) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.freq, now + note.time);

      gain.gain.setValueAtTime(0.3, now + note.time);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.time + 0.3);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + note.time);
      osc.stop(now + note.time + 0.3);

      setTimeout(() => {
        osc.disconnect();
        gain.disconnect();
      }, (note.time + 0.35) * 1000);
    });
  }

  // Web Speech API: Falar texto em Português Brasileiro (pt-BR)
  speak(text, onEndCallback = null) {
    if (!this.speechSynth) return;

    // Cancela falas anteriores e remove listeners residuais
    this.speechSynth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95;
    utterance.pitch = 1.1;

    const voices = this.speechSynth.getVoices();
    const ptVoice = voices.find(v => v.lang.includes('pt') || v.lang.includes('BR'));
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onend = () => {
      if (onEndCallback) onEndCallback();
      // Limpa referência de callback para permitir Garbage Collection
      utterance.onend = null;
      utterance.onerror = null;
    };

    utterance.onerror = () => {
      utterance.onend = null;
      utterance.onerror = null;
    };

    this.speechSynth.speak(utterance);
  }
}

// Instância global do Gerenciador de Áudio
const gameAudio = new AudioManager();
