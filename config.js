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
    titleLine2: "It's a little Story for you.",
    copy: "No ordinary message felt quite right today. So, Abhishek, take a breath and come with me for a minute.",
    button: "Begin the journey"
  },

  chapter01: {
    eyebrow: "CHAPTER 01 · THE REASON",
    titleLine1: "I could have sent",
    titleLine2: "a simple happy birthday.",
    copy: "But that would not be enough for you. The out of sudden friendship felt like a story worth telling and Celebrating. So, the moments, the delighted time, upliftment and feeling of transcendence needs to be told and expressed.",
    button: "Let's go and celebrate"
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
    titleLine2: "never want to forget.",
    copy: "Not grand gestures. Just the small things that somehow make a friendship feel like home.",
    cards: [
      { symbol: "☼", title: "The laughter", text: "The conversation which eventually turn into laughter, We don't even care the reason and meaning behind it" },
      { symbol: "♡", title: "The individuality", text: "The umborthered and unfiltered nature, you are kind of unfiltered and new, who don't give a damm to the peoples and sterotypes" },
      { symbol: "✦", title: "The history", text: "It all started on Nov 16th, the first time I saw you in 704B classroom, I didn't acutally know we will come this far" }
    ]
  },

  choice: {
    eyebrow: "CHAPTER 04 · A SMALL QUESTION",
    titleLine1: "Pick a little star.",
    titleLine2: "Don't overthink it.",
    copy: "No overthinking. Just choose the one that catches your eye first.",
    results: {
      one: "A Star like you, Uniquely you. shinning in the odent night. you are amazing ✦",
      two: "I am adding this here, for you and SAM, Marry her, she is Perfect and supportive for you ✧",
      three: "A little sparkle it is. Great choice, that is reserve for me, You won't find me again ✦"
    },
    button: "I think you're ready"
  },

  letter: {
    eyebrow: "CHAPTER 05 · A FEW WORDS FOR Abhishek",
    greetingPrefix: "Dear",
    text: "Abhishek, I hope and wish you are well and fine, yea it is out of sudden from me, wishing you here like this, but I want you to feel important and valued. i do not care about the Past, it was all good and meaningful and i shall enclose the chapter of it. I am here in this world and with this amazing moment and peoples around me is what makes me write this here, We had an absouletly wonderful time before and i am grateful about it. i just wanted to show my appreciation and love through it, I have got everything here in this lifetime. Your support, your contribution of making my day a less of boring and hazed, having a friend who is earing in dollar $$. who is independent and self-reliant, from a foreign country. this all pattern is special and exquisite. i am just grateful to know you.",
    signoffLine1: "For all the chapters still ahead,",
    signoffLine2: "happy birthday, Abhishek. ♡"
  },

  memoryWall: {
    eyebrow: "CHAPTER 06 · A FEW FRAMES FROM US",
    titleLine1: "Some memories deserve",
    titleLine2: "a place of their own.",
    copy: "Not every memory needs a perfect caption. Some just need a little space to exist, exactly as they were.",
    photos: [
      { src: "assets/images/memory-1.jpg", alt: "A playful outdoor memory", caption: "THE LITTLE FLOWER", text: "Some of the best memories are the ones that were never planned to become memories at all. and indeed it is, Never thought I would give you the flower before her." },
      { src: "assets/images/memory-2.jpg", alt: "A playful candid memory", caption: "THE RIDICULOUS ONES", text: "The kind of frame that makes sense immediately to the people who were there. and sure my cheeks was hurting at that moment! although it was a good moment." },
      { src: "assets/images/memory-3.jpg", alt: "A quiet portrait memory", caption: "ONE STERO FRAME", text: "Not every favourite memory is loud. Some are simply worth keeping. Remember this photo, audiotorium of dental block, I am here all because of this place." }
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
    copy: "May this year be gentle with you, generous to you, and full of the kind of moments that become favourite memories. Keep your softness. Keep your laugh. Keep becoming more of yourself. And yes — keep being wonderfully you, and take care of yourself and of her.",
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
    copy: "There will be ordinary days, ridiculous days, beautiful days and days none of us can predict yet. We may not see each other for days or months, years or even Never, that is all perfectly fine. I don't own you nor you. And I just wish you a succesful carrer and meaningful life with outstandig experiences and memories. As we are moving forward in the life, we find different peoples and things to be engaged in, we may not see each other, we may forget each other, but i am contentful and satisfied for the experiences I've had with you. I could be a just mere friend of you, but thanks you for giving and spending your time with me. May the Universe and divine Energy flourishes you with positivity, prosperity and serenity. Thank YOU ",
    signoff: "Happy birthday, Abhishek. Keep being you. ♡"
  }
};
