const config = window.celebrationConfig || {};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value !== undefined && value !== null) element.textContent = value;
}

function applyConfig() {
  document.title = config.pageTitle || `${config.occasion || 'Celebration'} Experience`;

  const textMap = {
    'page-title': config.pageTitle,
    'opening-eyebrow': config.opening?.eyebrow,
    'opening-title-1': config.opening?.titleLine1,
    'opening-title-2': config.opening?.titleLine2,
    'opening-copy': config.opening?.copy,
    'opening-button': config.opening?.button,
    'chapter01-eyebrow': config.chapter01?.eyebrow,
    'chapter01-title-1': config.chapter01?.titleLine1,
    'chapter01-title-2': config.chapter01?.titleLine2,
    'chapter01-button': config.chapter01?.button,
    'memory-eyebrow': config.memory?.eyebrow,
    'memory-title-1': config.memory?.titleLine1,
    'memory-title-2': config.memory?.titleLine2,
    'memory-copy': config.memory?.copy,
    'memory-note': config.memory?.note,
    'memory-caption': config.memory?.caption,
    'little-eyebrow': config.littleThings?.eyebrow,
    'little-title-1': config.littleThings?.titleLine1,
    'little-title-2': config.littleThings?.titleLine2,
    'little-copy': config.littleThings?.copy,
    'choice-eyebrow': config.choice?.eyebrow,
    'choice-title-1': config.choice?.titleLine1,
    'choice-title-2': config.choice?.titleLine2,
    'choice-copy': config.choice?.copy,
    'choice-next': config.choice?.button,
    'letter-eyebrow': config.letter?.eyebrow,
    'letter-greeting-prefix': config.letter?.greetingPrefix,
    'recipient-name-letter': config.recipientName,
    'letter-signoff-1': config.letter?.signoffLine1,
    'letter-signoff-2': config.letter?.signoffLine2,
    'wall-eyebrow': config.memoryWall?.eyebrow,
    'wall-title-1': config.memoryWall?.titleLine1,
    'wall-title-2': config.memoryWall?.titleLine2,
    'wall-copy': config.memoryWall?.copy,
    'pause-eyebrow': config.pause?.eyebrow,
    'pause-title-1': config.pause?.titleLine1,
    'pause-title-2': config.pause?.titleLine2,
    'pause-copy': config.pause?.copy,
    'pause-button': config.pause?.button,
    'final-eyebrow': config.finale?.eyebrow,
    'final-title-prefix': config.finale?.titlePrefix || `Happy ${config.occasion || 'Celebration'},`,
    'final-title-name': config.finale?.titleSuffix || config.recipientName,
    'final-copy': config.finale?.copy,
    'music-btn': config.finale?.musicPlay,
    'close-eyebrow': config.closing?.eyebrow,
    'close-title-1': config.closing?.titleLine1,
    'close-title-2': config.closing?.titleLine2,
    'close-copy': config.closing?.copy,
    'close-signoff': config.closing?.signoff
  };

  Object.entries(textMap).forEach(([id, value]) => setText(id, value));

  const chapterCopy = $('#chapter01-copy');
  if (chapterCopy) {
    chapterCopy.dataset.text = config.chapter01?.copy || '';
    chapterCopy.textContent = '';
    chapterCopy.dataset.typed = 'false';
  }

  const letter = $('#letter-text');
  if (letter) {
    letter.dataset.text = config.letter?.text || '';
    letter.textContent = '';
    letter.dataset.typed = 'false';
  }

  (config.littleThings?.cards || []).slice(0, 3).forEach((card, index) => {
    const number = index + 1;
    setText(`little-title-${number}-card`, card.title);
    setText(`little-text-${number}-card`, card.text);
    const symbol = $(`.little-card:nth-child(${number}) .card-symbol`);
    if (symbol) symbol.textContent = card.symbol || '✦';
  });

  const memoryStage = $('#memory-main-stage');
  if (memoryStage) {
    memoryStage.innerHTML = '<div class="image-placeholder-inner"><span class="placeholder-icon">✦</span><small>Drop a favourite photo here</small></div>';
    if (config.memory?.image) attachImage(memoryStage, config.memory.image, config.memory.alt);
  }

  (config.memoryWall?.photos || []).slice(0, 3).forEach((photo, index) => {
    const number = index + 1;
    const image = $(`#wall-photo-${number}`);
    const holder = image?.closest('.photo-placeholder');
    const caption = $(`#wall-caption-${number}`);
    if (image && photo.src) {
      image.src = photo.src;
      image.alt = photo.alt || `Memory ${number}`;
      image.onload = () => holder?.classList.add('has-image');
      image.onerror = () => holder?.classList.remove('has-image');
    }
    if (caption) caption.textContent = photo.caption || `MEMORY ${number}`;
  });

  const stackPhotos = config.finale?.photos || [];
  [1, 2, 3].forEach(n => document.getElementById(`final-photo-${n}`)?.classList.remove('has-image'));
  stackPhotos.slice(0, 3).forEach((photo, index) => {
    const stack = document.getElementById(`final-photo-${index + 1}`);
    if (stack && photo.src) {
      stack.style.backgroundImage = `url("${photo.src}")`;
      stack.classList.add('has-image');
    }
  });

  const source = $('#music-source');
  if (source && config.finale?.musicFile) source.src = config.finale.musicFile;
}

function attachImage(container, src, alt = '') {
  const image = new Image();
  image.src = src;
  image.alt = alt;
  image.onload = () => {
    container.classList.add('has-image');
    container.innerHTML = '';
    container.appendChild(image);
  };
  image.onerror = () => {
    container.classList.remove('has-image');
  };
}

applyConfig();

const scenes = $$('.scene');
const dots = $$('.progress-dot');
const nextButtons = $$('.next-btn');
const stars = $$('.star-choice');
const photoCards = $$('.photo-card');
const starResult = $('#star-result');
const choiceNext = $('#choice-next');
const replayBtn = $('#replay-btn');
const musicBtn = $('#music-btn');
const music = $('#bg-music');
const cursorGlow = $('#cursor-glow');
const cinematicTransition = $('#cinematic-transition');
const tiltCard = $('[data-tilt]');
const modal = $('#memory-modal');
const modalImage = $('#modal-image');
const modalCaption = $('#modal-caption');
const modalText = $('#modal-text');
const modalClose = $('#modal-close');

let currentScene = 0;
let musicStarted = false;
let musicHasLoaded = false;
let musicFadeFrame = null;
let typeTimers = [];
let particleTimers = [];
let sceneTransitionTimer = null;
let isTransitioning = false;
let cursorFrame = null;
let cursorTargetX = null;
let cursorTargetY = null;
let cursorX = null;
let cursorY = null;

function playTinyChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(660, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.2);
  } catch { /* optional enhancement */ }
}

function typeText(element) {
  if (!element || element.dataset.typed === 'true') return;
  const text = element.dataset.text || '';
  if (!text) return;

  element.dataset.typed = 'true';
  element.classList.add('typing');
  element.textContent = '';
  let index = 0;
  const tick = () => {
    element.textContent += text[index++];
    if (index < text.length) {
      const timer = window.setTimeout(tick, config.typingSpeedMs ?? 42);
      typeTimers.push(timer);
    } else {
      window.setTimeout(() => element.classList.remove('typing'), 900);
    }
  };
  tick();
}

function resetTypedText() {
  typeTimers.forEach(window.clearTimeout);
  typeTimers = [];
  $$('.type-target, #letter-text').forEach(element => {
    element.textContent = '';
    element.dataset.typed = 'false';
    element.classList.remove('typing');
  });
}

function fadeMusicTo(targetVolume, duration = 1200) {
  if (!music || !musicStarted) return;
  if (musicFadeFrame) cancelAnimationFrame(musicFadeFrame);

  const start = music.volume;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    music.volume = start + (targetVolume - start) * eased;
    if (progress < 1) {
      musicFadeFrame = requestAnimationFrame(step);
    } else {
      music.volume = targetVolume;
      musicFadeFrame = null;
    }
  };
  musicFadeFrame = requestAnimationFrame(step);
}

async function startStoryMusic() {
  if (!music) return false;

  if (!music.src && music.currentSrc === '') return false;
  music.volume = 0;

  try {
    await music.play();
    musicStarted = true;
    musicHasLoaded = true;
    fadeMusicTo(config.audio?.storyVolume ?? 0.13, config.audio?.fadeInMs ?? 2600);
    musicBtn.textContent = config.finale?.musicPause || 'Pause music ❚❚';
    musicBtn.setAttribute('aria-pressed', 'true');
    return true;
  } catch {
    musicStarted = false;
    musicBtn.textContent = config.finale?.musicPlay || 'Play music ♪';
    return false;
  }
}

function stopMusic(reset = false) {
  if (!music) return;
  if (musicFadeFrame) cancelAnimationFrame(musicFadeFrame);
  music.pause();
  music.volume = 0;
  musicStarted = false;
  musicBtn.textContent = config.finale?.musicPlay || 'Play music ♪';
  musicBtn.setAttribute('aria-pressed', 'false');
  if (reset) {
    try { music.currentTime = 0; } catch {}
  }
}

function launchFinale() {
  $('.final-scene')?.classList.add('finale-live');
  window.setTimeout(() => burstCinematicParticles(34), 250);
  if (!musicStarted) {
    startStoryMusic().then(started => {
      if (started) fadeMusicTo(config.audio?.revealVolume ?? 0.34, config.audio?.revealFadeMs ?? 1800);
    });
  } else {
    fadeMusicTo(config.audio?.revealVolume ?? 0.34, config.audio?.revealFadeMs ?? 1800);
  }
}

function animateSceneEntry(scene) {
  if (!scene) return;

  scene.classList.remove('entered');
  requestAnimationFrame(() => scene.classList.add('entered'));

  const sceneNumber = Number(scene.dataset.scene);

  // Start the typewriter effects only when their scenes enter.
  // A short delay lets the scene/card animation settle first.
  if (sceneNumber === 1) {
    const chapterCopy = $('#chapter01-copy');
    if (chapterCopy) window.setTimeout(() => typeText(chapterCopy), 520);
  }

  if (sceneNumber === 5) {
    const letter = $('#letter-text');
    if (letter) window.setTimeout(() => typeText(letter), 820);
  }
}


function playSceneTransition(isReveal = false) {
  if (!cinematicTransition) return;
  if (sceneTransitionTimer) window.clearTimeout(sceneTransitionTimer);
  cinematicTransition.classList.remove('play', 'reveal-play');
  void cinematicTransition.offsetWidth;
  cinematicTransition.classList.add(isReveal ? 'reveal-play' : 'play');
  sceneTransitionTimer = window.setTimeout(() => cinematicTransition.classList.remove('play', 'reveal-play'), isReveal ? 1200 : 900);
}

function clearCinematicParticles() {
  particleTimers.forEach(window.clearTimeout);
  particleTimers = [];
  $$('.cinematic-particle').forEach(particle => particle.remove());
}

function burstCinematicParticles(count = 26) {
  const finalScene = $('.final-scene');
  if (!finalScene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  clearCinematicParticles();
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'cinematic-particle';
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.25;
    const distance = 150 + Math.random() * 340;
    particle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
    particle.style.width = `${3 + Math.random() * 5}px`;
    particle.style.height = particle.style.width;
    particle.style.animationDelay = `${Math.random() * 160}ms`;
    finalScene.appendChild(particle);
    particleTimers.push(window.setTimeout(() => particle.remove(), 1900));
  }
}

function updateMemoryParallax(scene) {
  const stage = scene?.querySelector('[data-tilt]');
  if (!stage) return;
  stage.style.setProperty('--mx', '0px');
  stage.style.setProperty('--my', '0px');
}

function showScene(index, direction = 'forward') {
  if (index < 0 || index >= scenes.length || index === currentScene || isTransitioning) return;

  isTransitioning = true;
  const lockDuration = config.interaction?.transitionLockMs ?? 920;
  window.setTimeout(() => { isTransitioning = false; }, lockDuration);

  const isReveal = currentScene === 7 && index === 8;
  playSceneTransition(isReveal);

  const oldScene = scenes[currentScene];
  const newScene = scenes[index];

  oldScene.classList.remove('is-active', 'entered');
  oldScene.classList.toggle('exit-up', direction === 'back');
  window.setTimeout(() => oldScene.classList.remove('exit-up'), 780);

  newScene.classList.add('is-active');
  currentScene = index;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
    dot.setAttribute('aria-current', i === index ? 'step' : 'false');
  });
  const experience = $('#experience');
  experience?.setAttribute('aria-busy', 'true');
  window.setTimeout(() => experience?.setAttribute('aria-busy', 'false'), Math.min(lockDuration, 760));
  animateSceneEntry(newScene);

  if (index === 7 && musicStarted) {
    fadeMusicTo(config.audio?.pauseVolume ?? 0.06, config.audio?.pauseFadeMs ?? 900);
  }
  if (index === 8) {
    // Let the reveal curtain start its motion before the finale choreography begins.
    window.setTimeout(() => launchFinale(), config.audio?.revealStartDelayMs ?? 1100);
  }
  if (index === 9 && musicStarted) {
    fadeMusicTo(config.audio?.revealVolume ?? 0.34, 1000);
  }
  playTinyChime();
}

nextButtons.forEach(button => {
  button.addEventListener('click', async () => {
    if (!musicStarted && currentScene === 0) {
      await startStoryMusic();
    }
    showScene(Number(button.dataset.next));
  });
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const target = Number(dot.dataset.goto);
    showScene(target, target < currentScene ? 'back' : 'forward');
  });
});

stars.forEach(button => {
  button.addEventListener('click', () => {
    stars.forEach(card => card.classList.remove('selected'));
    button.classList.add('selected');
    starResult.textContent = config.choice?.results?.[button.dataset.choice] || 'A little magic is on the way. ✦';
    choiceNext.classList.remove('hidden');
    playTinyChime();
  });
});

photoCards.forEach(card => {
  card.addEventListener('click', () => {
    const photoIndex = Number(card.dataset.photo) - 1;
    const photo = config.memoryWall?.photos?.[photoIndex];
    if (!photo?.src) {
      card.classList.toggle('is-open');
      playTinyChime();
      return;
    }
    modalImage.src = photo.src;
    modalImage.alt = photo.alt || 'Memory';
    modalCaption.textContent = photo.caption || 'MEMORY';
    modalText.textContent = photo.text || 'A favourite frame, brought forward for a moment.';
    modal.showModal();
    playTinyChime();
  });
});

function closeModal() {
  if (modal?.open) modal.close();
}
modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});

replayBtn.addEventListener('click', () => {
  resetTypedText();
  stars.forEach(card => card.classList.remove('selected'));
  starResult.textContent = '';
  choiceNext.classList.add('hidden');
  photoCards.forEach(card => card.classList.remove('is-open'));
  $('.final-scene')?.classList.remove('finale-live');
  clearCinematicParticles();
  stopMusic(true);
  showScene(0, 'back');
});

musicBtn.addEventListener('click', async () => {
  if (!music) return;

  if (music.paused) {
    const started = await startStoryMusic();
    if (started) {
      fadeMusicTo(currentScene >= 8 ? (config.audio?.revealVolume ?? 0.34) : (config.audio?.storyVolume ?? 0.13), 1000);
    } else {
      musicBtn.textContent = config.finale?.musicMissing || 'Add your music first ♪';
    }
  } else {
    music.pause();
    musicBtn.textContent = config.finale?.musicPlay || 'Play music ♪';
    musicBtn.setAttribute('aria-pressed', 'false');
  }
});

music.addEventListener('error', () => {
  musicHasLoaded = false;
  if (!musicStarted) musicBtn.textContent = config.finale?.musicMissing || 'Add your music first ♪';
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
  if (event.key === 'ArrowRight' && currentScene < scenes.length - 1) showScene(currentScene + 1);
  if (event.key === 'ArrowLeft' && currentScene > 0) showScene(currentScene - 1, 'back');
});

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

function renderCursor() {
  cursorFrame = null;
  if (!cursorGlow || cursorTargetX === null || cursorTargetY === null) return;
  if (cursorX === null) cursorX = cursorTargetX;
  if (cursorY === null) cursorY = cursorTargetY;
  const lerp = config.interaction?.cursorLerp ?? 0.16;
  cursorX += (cursorTargetX - cursorX) * lerp;
  cursorY += (cursorTargetY - cursorY) * lerp;
  cursorGlow.style.left = `${cursorX}px`;
  cursorGlow.style.top = `${cursorY}px`;
  if (Math.abs(cursorTargetX - cursorX) > 0.15 || Math.abs(cursorTargetY - cursorY) > 0.15) {
    cursorFrame = requestAnimationFrame(renderCursor);
  }
}

window.addEventListener('pointermove', event => {
  if (!finePointer.matches) return;

  if (cursorGlow) {
    cursorTargetX = event.clientX;
    cursorTargetY = event.clientY;
    if (!cursorFrame) cursorFrame = requestAnimationFrame(renderCursor);
  }

  // Tilt only the visible main-memory scene.
  const activeScene = $('.scene.is-active');
  if (tiltCard && activeScene?.dataset.scene === '2' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const rect = tiltCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
      const strength = config.interaction?.memoryTiltStrength ?? 1;
      const rotateY = (x - 0.5) * 10 * strength;
      const rotateX = (0.5 - y) * 8 * strength;
      const shiftX = (x - 0.5) * 10 * strength;
      const shiftY = (y - 0.5) * 8 * strength;
      tiltCard.style.setProperty('--mx', `${shiftX}px`);
      tiltCard.style.setProperty('--my', `${shiftY}px`);
      tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }
}, { passive: true });

if (tiltCard) {
  tiltCard.addEventListener('pointerleave', () => {
    tiltCard.style.transform = '';
    tiltCard.style.setProperty('--mx', '0px');
    tiltCard.style.setProperty('--my', '0px');
  });
}

// Initial state.
dots.forEach((dot, i) => dot.setAttribute('aria-current', i === currentScene ? 'step' : 'false'));
requestAnimationFrame(() => {
  $('.scene.is-active')?.classList.add('entered');
  updateMemoryParallax($('.scene.is-active'));
});


$$('.primary-btn, .ghost-btn, .star-choice, .photo-card, .progress-dot, .modal-close').forEach(control => {
  control.addEventListener('pointerdown', () => control.classList.add('is-pressing'), { passive: true });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(type => {
    control.addEventListener(type, () => control.classList.remove('is-pressing'), { passive: true });
  });
});

window.matchMedia('(hover: hover) and (pointer: fine)').addEventListener?.('change', event => {
  if (cursorGlow) cursorGlow.hidden = !event.matches;
});
if (cursorGlow) cursorGlow.hidden = !finePointer.matches;
