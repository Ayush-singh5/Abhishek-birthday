/*
  CELEBRATION EXPERIENCE · V5
  Occasion: Birthday
  Recipient: Abhishek
  Relationship: Best friend
  Tone: Emotional + Romantic + Elegant

  Replace the image/audio paths when you have the real media.
*/

window.celebrationConfig = {
  typingSpeedMs: 42,
  interaction: {
    transitionLockMs: 920,
    cursorLerp: 0.16,
    memoryTiltStrength: 1,
  },
  audio: {
    storyVolume: 0.13,
    pauseVolume: 0.06,
    revealVolume: 0.34,
    fadeInMs: 2600,
    pauseFadeMs: 900,
    revealFadeMs: 1800,
    revealStartDelayMs: 1100,
    fadeOutMs: 700
  },
  occasion: "Birthday",
  recipientName: "Abhishek",
  pageTitle: "For Abhishek — A Little Something",

  opening: {
    eyebrow: "FOR Abhishek · A LITTLE SOMETHING",
    titleLine1: "This isn't just a birthday page.",
    titleLine2: "It's a little journey for you.",
    copy: "No ordinary message felt quite right today. So, Abhishek, take a breath and come with me for a minute.",
    button: "Begin the journey"
  },

  chapter01: {
    eyebrow: "CHAPTER 01 · THE REASON",
    titleLine1: "I could have sent",
    titleLine2: "a simple happy birthday.",
    copy: "But you have never felt like an ordinary person in my life. Some friendships quietly become part of the rhythm of your days — the laughter, the comfort, the completely random conversations. Yours is one of those.",
    button: "There is more"
  },

  memory: {
    eyebrow: "CHAPTER 02 · ONE MEMORY",
    titleLine1: "Because somehow,",
    titleLine2: "the little moments stay.",
    copy: "A photograph can hold an entire feeling. Some moments do not need a long explanation. They just need to be remembered. This one belongs here for exactly that reason.",
    note: "One frame can bring an entire day back.",
    caption: "ONE MEMORY · A THOUSAND FEELINGS",
    image: "assets/images/memory-main.jpg",
    alt: "A special memory with Abhishek"
  },

  littleThings: {
    eyebrow: "CHAPTER 03 · THE LITTLE THINGS",
    titleLine1: "Three things I would",
    titleLine2: "never want to lose.",
    copy: "Not grand gestures. Just the small things that somehow make a friendship feel like home.",
    cards: [
      { symbol: "☼", title: "The laughter", text: "The kind that turns the most ordinary conversation into a memory worth keeping." },
      { symbol: "♡", title: "The comfort", text: "The rare ease of being completely yourself and never needing to explain every little thing." },
      { symbol: "✦", title: "The history", text: "All the tiny moments that quietly became part of the story of us being friends." }
    ]
  },

  choice: {
    eyebrow: "CHAPTER 04 · A SMALL QUESTION",
    titleLine1: "Pick a little star.",
    titleLine2: "Don't overthink it.",
    copy: "No overthinking. Just choose the one that catches your eye first.",
    results: {
      one: "A little more wonder for you, then. You deserve that. ✦",
      two: "Quiet magic suits you. Some of the best things in life arrive softly. ✧",
      three: "A little sparkle it is. There are still beautiful chapters ahead. ✦"
    },
    button: "I think you're ready"
  },

  letter: {
    eyebrow: "CHAPTER 05 · A FEW WORDS FOR Abhishek",
    greetingPrefix: "Dear",
    text: "Abhishek, I hope you know how much your presence means. Thank you for the laughter, the nonsense, the conversations that lasted far longer than they were supposed to, and the quiet moments that did not need words at all. Some friendships are loud and unforgettable. Some are simply steady — the kind you can return to, the kind that makes a difficult day feel lighter. I hope this birthday gives you a little of the same warmth you have given to the people around you. And when this year gets busy, strange, exciting or completely unexpected, I hope you keep finding reasons to laugh, reasons to dream, and reasons to be proud of the person you are becoming.",
    signoffLine1: "For all the chapters still ahead,",
    signoffLine2: "happy birthday, Abhishek. ♡"
  },

  memoryWall: {
    eyebrow: "CHAPTER 06 · A FEW FRAMES FROM US",
    titleLine1: "Some memories deserve",
    titleLine2: "a place of their own.",
    copy: "Not every memory needs a perfect caption. Some just need a little space to exist, exactly as they were.",
    photos: [
      { src: "assets/images/memory-1.jpg", alt: "A playful outdoor memory", caption: "THE LITTLE CHAOS", text: "Some of the best memories are the ones that were never planned to become memories at all." },
      { src: "assets/images/memory-2.jpg", alt: "A playful candid memory", caption: "THE RIDICULOUS ONES", text: "The kind of frame that makes sense immediately to the people who were there." },
      { src: "assets/images/memory-3.jpg", alt: "A quiet portrait memory", caption: "ONE QUIET FRAME", text: "Not every favourite memory is loud. Some are simply worth keeping." }
    ]
  },

  pause: {
    eyebrow: "ONE LAST MOMENT",
    titleLine1: "And now...",
    titleLine2: "just one thing left.",
    copy: "Take a breath. The next screen is the reason this little journey exists.",
    button: "Open the reveal"
  },

  finale: {
    eyebrow: "THE REVEAL",
    titlePrefix: "Happy Birthday,",
    titleSuffix: "Abhishek",
    copy: "May this year be gentle with you, generous to you, and full of the kind of moments that become favourite memories. Keep your softness. Keep your laugh. Keep becoming more of yourself. And yes — keep being wonderfully, unmistakably you.",
    musicPlay: "Play music ♪",
    musicPause: "Pause music ❚❚",
    musicMissing: "Add your music first ♪",
    musicFile: "assets/audio/music.mp3",
    photos: [
      { src: "assets/images/final-1.jpg", alt: "A favourite outdoor memory" },
      { src: "assets/images/final-2.jpg", alt: "A playful favourite memory" }
    ]
  },

  closing: {
    eyebrow: "CHAPTER 09 · UNTIL THE NEXT ONE",
    titleLine1: "Here's to all the",
    titleLine2: "chapters still unwritten.",
    copy: "There will be ordinary days, ridiculous days, beautiful days and days none of us can predict yet. I just hope there are many more memories in all of them.",
    signoff: "Happy birthday, Abhishek. Keep being you. ♡"
  }
};
