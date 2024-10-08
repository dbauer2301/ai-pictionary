const data = [
  {
    word: 'tiger',
    forbidden: ['tiger', 'stripes', 'animal', 'wild', 'jungle', 'cat'],
  },
  {
    word: 'dolphin',
    forbidden: ['dolphin', 'ocean', 'mammal', 'intelligent', 'flipper', 'swim'],
  },
  {
    word: 'panda',
    forbidden: ['panda', 'bear', 'bamboo', 'china', 'black', 'white'],
  },
  {
    word: 'airplane',
    forbidden: ['airplane', 'fly', 'pilot', 'wing', 'sky', 'travel'],
  },
  {
    word: 'guitar',
    forbidden: ['guitar', 'strings', 'music', 'instrument', 'electric', 'play'],
  },
  {
    word: 'volcano',
    forbidden: ['volcano', 'lava', 'eruption', 'mountain', 'ash', 'magma'],
  },
  {
    word: 'sunflower',
    forbidden: ['sunflower', 'yellow', 'flower', 'plant', 'seed', 'tall'],
  },
  {
    word: 'kangaroo',
    forbidden: [
      'kangaroo',
      'jump',
      'pouch',
      'Australia',
      'animal',
      'marsupial',
    ],
  },
  {
    word: 'chocolate',
    forbidden: ['chocolate', 'sweet', 'candy', 'brown', 'cocoa', 'bar'],
  },
  {
    word: 'robot',
    forbidden: [
      'robot',
      'machine',
      'artificial',
      'intelligent',
      'technology',
      'metal',
    ],
  },
  {
    word: 'bicycle',
    forbidden: ['bicycle', 'pedal', 'ride', 'wheel', 'bike', 'handlebar'],
  },
  {
    word: 'penguin',
    forbidden: ['penguin', 'bird', 'ice', 'Antarctica', 'black', 'white'],
  },
  {
    word: 'fireworks',
    forbidden: [
      'fireworks',
      'explosion',
      'light',
      'color',
      'celebration',
      'sky',
    ],
  },
  {
    word: 'vampire',
    forbidden: ['vampire', 'blood', 'fang', 'bat', 'night', 'undead'],
  },
  {
    word: 'pizza',
    forbidden: ['pizza', 'cheese', 'tomato', 'slice', 'Italian', 'crust'],
  },
  {
    word: 'rainbow',
    forbidden: ['rainbow', 'color', 'arc', 'sky', 'light', 'rain'],
  },
  {
    word: 'pirate',
    forbidden: ['pirate', 'ship', 'treasure', 'sea', 'captain', 'eye-patch'],
  },
  {
    word: 'sandcastle',
    forbidden: ['sandcastle', 'beach', 'sand', 'bucket', 'build', 'tower'],
  },
  {
    word: 'dragon',
    forbidden: ['dragon', 'fire', 'wing', 'mythical', 'creature', 'scale'],
  },
  {
    word: 'baseball',
    forbidden: ['baseball', 'bat', 'pitch', 'catch', 'sport', 'ball'],
  },
  {
    word: 'wizard',
    forbidden: ['wizard', 'magic', 'wand', 'spell', 'robe', 'sorcery'],
  },
  {
    word: 'butterfly',
    forbidden: ['butterfly', 'wing', 'insect', 'cocoon', 'flower', 'colorful'],
  },
  {
    word: 'ice cream',
    forbidden: ['ice cream', 'cold', 'cone', 'dessert', 'sweet', 'scoop'],
  },
  {
    word: 'skeleton',
    forbidden: ['skeleton', 'bone', 'human', 'body', 'skull', 'frame'],
  },
  {
    word: 'computer',
    forbidden: [
      'computer',
      'keyboard',
      'screen',
      'technology',
      'mouse',
      'code',
    ],
  },
  {
    word: 'submarine',
    forbidden: ['submarine', 'underwater', 'sea', 'ocean', 'boat', 'deep'],
  },
  {
    word: 'cloud',
    forbidden: ['cloud', 'sky', 'rain', 'white', 'storm', 'float'],
  },
  {
    word: 'elephant',
    forbidden: ['elephant', 'trunk', 'big', 'animal', 'Africa', 'grey'],
  },
  {
    word: 'superhero',
    forbidden: ['superhero', 'cape', 'power', 'comic', 'hero', 'villain'],
  },
  {
    word: 'astronaut',
    forbidden: ['astronaut', 'space', 'moon', 'rocket', 'suit', 'NASA'],
  },
  {
    word: 'frisbee',
    forbidden: ['frisbee', 'throw', 'disc', 'catch', 'play', 'game'],
  },
  {
    word: 'snowman',
    forbidden: ['snowman', 'snow', 'cold', 'winter', 'scarf', 'carrot'],
  },
  {
    word: 'balloon',
    forbidden: ['balloon', 'air', 'float', 'string', 'party', 'pop'],
  },
  {
    word: 'koala',
    forbidden: ['koala', 'tree', 'Australia', 'bear', 'leaf', 'eucalyptus'],
  },
  {
    word: 'soccer',
    forbidden: ['soccer', 'ball', 'goal', 'kick', 'team', 'sport'],
  },
  {
    word: 'cactus',
    forbidden: ['cactus', 'desert', 'plant', 'spike', 'water', 'green'],
  },
  {
    word: 'camera',
    forbidden: ['camera', 'photo', 'picture', 'lens', 'shoot', 'flash'],
  },
  {
    word: 'trampoline',
    forbidden: ['trampoline', 'bounce', 'jump', 'spring', 'net', 'fun'],
  },
  {
    word: 'helicopter',
    forbidden: ['helicopter', 'rotor', 'sky', 'fly', 'pilot', 'air'],
  },
  {
    word: 'octopus',
    forbidden: ['octopus', 'tentacle', 'ocean', 'sea', 'ink', 'eight'],
  },
  {
    word: 'castle',
    forbidden: ['castle', 'king', 'fortress', 'tower', 'medieval', 'moat'],
  },
  {
    word: 'firefighter',
    forbidden: ['firefighter', 'fire', 'hose', 'rescue', 'truck', 'emergency'],
  },
  {
    word: 'zebra',
    forbidden: ['zebra', 'stripes', 'animal', 'black', 'white', 'Africa'],
  },
  {
    word: 'giraffe',
    forbidden: ['giraffe', 'tall', 'neck', 'animal', 'Africa', 'spots'],
  },
  {
    word: 'sushi',
    forbidden: ['sushi', 'fish', 'rice', 'roll', 'Japanese', 'seaweed'],
  },
  {
    word: 'circus',
    forbidden: ['circus', 'tent', 'clown', 'show', 'animal', 'performer'],
  },
  {
    word: 'scuba diving',
    forbidden: ['scuba diving', 'underwater', 'tank', 'ocean', 'swim', 'mask'],
  },
  {
    word: 'mermaid',
    forbidden: ['mermaid', 'sea', 'tail', 'mythical', 'fish', 'ocean'],
  },
];

export default data;
