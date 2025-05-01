const promptTemplates = (keyword) => ({
  Writing: [
    `Write a short story set in a dystopian future where "${keyword}" plays a pivotal role in society.`,
    `Craft a mystery story where the only clue is "${keyword}".`,
    `Imagine a world where "${keyword}" is banned. Write about a rebel who defies the rule.`,
    `Describe a dream journal entry that revolves around "${keyword}".`,
  ],
  Art: [
    `Design a surreal painting inspired by the concept of "${keyword}". Include three symbolic elements.`,
    `Create an abstract digital piece that visualizes the emotional impact of "${keyword}".`,
    `Imagine a futuristic city named after "${keyword}"—draw its skyline.`,
    `Sketch a scene where "${keyword}" is personified as a character.`,
  ],
  Coding: [
    `Develop a JavaScript app that simulates "${keyword}". Briefly describe the UI and main functions.`,
    `Build an AI model that predicts outcomes based on "${keyword}". Explain how it would be trained.`,
    `Create a game mechanic where "${keyword}" drives the core gameplay loop.`,
    `Design a command-line tool to automate tasks involving "${keyword}".`,
  ],
  Marketing: [
    `Create a viral social media campaign centered around "${keyword}". Include hashtags and visual themes.`,
    `Write ad copy for a fictional product that solves a problem related to "${keyword}".`,
    `Develop a customer persona that is obsessed with "${keyword}" and market a product to them.`,
    `Design a landing page for a startup built around the concept of "${keyword}".`,
  ],
  Philosophy: [
    `Write a philosophical argument exploring the ethical dimensions of "${keyword}".`,
    `Construct a thought experiment where "${keyword}" is removed from human consciousness.`,
    `Debate whether "${keyword}" is an objective truth or a social construct.`,
    `Write a fictional dialogue between Socrates and a modern AI about "${keyword}".`,
  ],
});
export default promptTemplates;
