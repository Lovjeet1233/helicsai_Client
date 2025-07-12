// Programmatic sound generation for scroll effects
// This creates audio context-based sounds if you don't have audio files

class ScrollSoundGenerator {
    constructor() {
      this.audioContext = null;
      this.initAudioContext();
    }
  
    initAudioContext() {
      try {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      } catch (error) {
        console.log('Web Audio API not supported');
      }
    }
  
    // Generate a subtle scroll sound
    playScrollSound() {
      if (!this.audioContext) return;
  
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
  
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
  
      // Create a subtle "whoosh" sound
      oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.1);
  
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1);
  
      oscillator.type = 'sine';
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    }
  
    // Generate a section change sound
    playSectionChangeSound() {
      if (!this.audioContext) return;
  
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
  
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
  
      // Create a pleasant "ding" sound
      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.3);
  
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3);
  
      oscillator.type = 'sine';
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.3);
    }
  
    // Generate a hover sound
    playHoverSound() {
      if (!this.audioContext) return;
  
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
  
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
  
      oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
      oscillator.frequency.linearRampToValueAtTime(800, this.audioContext.currentTime + 0.05);
  
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);
  
      oscillator.type = 'triangle';
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.05);
    }
  }
  
  // Export for use in React component
  window.ScrollSoundGenerator = ScrollSoundGenerator;