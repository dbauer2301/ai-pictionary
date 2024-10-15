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
    forbidden: ['pirate', 'ship', 'treasure', 'sea', 'captain', 'eye patch'],
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
    word: 'penguin',
    forbidden: ['penguin', 'bird', 'ice', 'Antarctica', 'black', 'white'],
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
  {
    word: 'microphone',
    forbidden: ['microphone', 'sound', 'speak', 'record', 'loud', 'voice'],
  },
  {
    word: 'iceberg',
    forbidden: ['iceberg', 'cold', 'ice', 'water', 'ocean', 'float'],
  },
  {
    word: 'train',
    forbidden: [
      'train',
      'tracks',
      'station',
      'engine',
      'railroad',
      'transport',
    ],
  },
  {
    word: 'lightbulb',
    forbidden: [
      'lightbulb',
      'electric',
      'lamp',
      'bright',
      'turn on',
      'filament',
    ],
  },
  {
    word: 'telescope',
    forbidden: ['telescope', 'stars', 'space', 'astronomy', 'look', 'lens'],
  },
  {
    word: 'ambulance',
    forbidden: [
      'ambulance',
      'emergency',
      'siren',
      'hospital',
      'paramedic',
      'vehicle',
    ],
  },
  {
    word: 'backpack',
    forbidden: ['backpack', 'bag', 'carry', 'school', 'strap', 'travel'],
  },
  {
    word: 'umbrella',
    forbidden: ['umbrella', 'rain', 'cover', 'open', 'wet', 'handle'],
  },
  {
    word: 'calendar',
    forbidden: ['calendar', 'date', 'day', 'month', 'year', 'time'],
  },
  {
    word: 'compass',
    forbidden: ['compass', 'north', 'navigate', 'direction', 'needle', 'map'],
  },
  {
    word: 'parachute',
    forbidden: ['parachute', 'sky', 'fall', 'jump', 'air', 'land'],
  },
  {
    word: 'mountain',
    forbidden: ['mountain', 'climb', 'peak', 'summit', 'rock', 'tall'],
  },
  {
    word: 'thermometer',
    forbidden: [
      'thermometer',
      'temperature',
      'measure',
      'heat',
      'cold',
      'mercury',
    ],
  },
  {
    word: 'honey',
    forbidden: ['honey', 'bee', 'sweet', 'hive', 'sticky', 'yellow'],
  },
  {
    word: 'newspaper',
    forbidden: ['newspaper', 'news', 'print', 'article', 'read', 'journalist'],
  },
  {
    word: 'suitcase',
    forbidden: ['suitcase', 'travel', 'luggage', 'bag', 'pack', 'carry'],
  },
  {
    word: 'diamond',
    forbidden: ['diamond', 'gem', 'ring', 'precious', 'stone', 'cut'],
  },
  {
    word: 'carnival',
    forbidden: ['carnival', 'festival', 'ride', 'fun', 'game', 'fair'],
  },
  {
    word: 'lightning',
    forbidden: ['lightning', 'storm', 'thunder', 'electricity', 'flash', 'sky'],
  },
  {
    word: 'typewriter',
    forbidden: ['typewriter', 'key', 'machine', 'write', 'letter', 'old'],
  },
  {
    word: 'shark',
    forbidden: ['shark', 'teeth', 'ocean', 'fish', 'predator', 'swim'],
  },
  {
    word: 'saxophone',
    forbidden: ['saxophone', 'instrument', 'music', 'jazz', 'blow', 'play'],
  },
  {
    word: 'candle',
    forbidden: ['candle', 'wax', 'light', 'fire', 'burn', 'flame'],
  },
  {
    word: 'mirror',
    forbidden: ['mirror', 'reflect', 'glass', 'see', 'look', 'image'],
  },
  {
    word: 'rocket',
    forbidden: ['rocket', 'space', 'launch', 'engine', 'fuel', 'blast'],
  },
  {
    word: 'scarecrow',
    forbidden: ['scarecrow', 'field', 'bird', 'farm', 'stuffed', 'straw'],
  },
  {
    word: 'fortune teller',
    forbidden: [
      'fortune teller',
      'future',
      'crystal ball',
      'psychic',
      'read',
      'palm',
    ],
  },
  {
    word: 'donut',
    forbidden: ['donut', 'sugar', 'round', 'sweet', 'dough', 'pastry'],
  },
  {
    word: 'sailboat',
    forbidden: ['sailboat', 'water', 'wind', 'ocean', 'boat', 'mast'],
  },
  {
    word: 'beehive',
    forbidden: ['beehive', 'bee', 'honey', 'buzz', 'nest', 'insect'],
  },
  {
    word: 'igloo',
    forbidden: ['igloo', 'ice', 'cold', 'snow', 'shelter', 'build'],
  },
  {
    word: 'skateboard',
    forbidden: ['skateboard', 'wheel', 'ride', 'trick', 'street', 'board'],
  },
  {
    word: 'sphinx',
    forbidden: ['sphinx', 'Egypt', 'statue', 'lion', 'pharaoh', 'sand'],
  },
  {
    word: 'avocado',
    forbidden: ['avocado', 'green', 'fruit', 'guacamole', 'pit', 'smooth'],
  },
  {
    word: 'surfboard',
    forbidden: ['surfboard', 'wave', 'ocean', 'ride', 'beach', 'balance'],
  },
  {
    word: 'snowflake',
    forbidden: ['snowflake', 'cold', 'snow', 'ice', 'winter', 'fall'],
  },
  {
    word: 'zeppelin',
    forbidden: ['zeppelin', 'air', 'balloon', 'blimp', 'float', 'sky'],
  },
  {
    word: 'snowboard',
    forbidden: ['snowboard', 'snow', 'mountain', 'winter', 'ride', 'sport'],
  },
  {
    word: 'lighthouse',
    forbidden: ['lighthouse', 'light', 'sea', 'coast', 'tower', 'guide'],
  },
  {
    word: 'treasure',
    forbidden: ['treasure', 'gold', 'chest', 'pirate', 'map', 'buried'],
  },
  {
    word: 'microchip',
    forbidden: [
      'microchip',
      'small',
      'technology',
      'computer',
      'circuit',
      'silicon',
    ],
  },
  {
    word: 'marathon',
    forbidden: ['marathon', 'run', 'race', 'long', 'distance', 'finish'],
  },
  {
    word: 'pineapple',
    forbidden: ['pineapple', 'fruit', 'yellow', 'tropical', 'sweet', 'spiky'],
  },
  {
    word: 'harp',
    forbidden: ['harp', 'instrument', 'music', 'string', 'play', 'angel'],
  },
  {
    word: 'boomerang',
    forbidden: ['boomerang', 'throw', 'Australia', 'return', 'wood', 'curve'],
  },
  {
    word: 'origami',
    forbidden: ['origami', 'paper', 'fold', 'art', 'shape', 'craft'],
  },
  {
    word: 'subway',
    forbidden: [
      'subway',
      'train',
      'underground',
      'station',
      'metro',
      'transport',
    ],
  },
  {
    word: 'kite',
    forbidden: ['kite', 'wind', 'fly', 'string', 'sky', 'air'],
  },
  {
    word: 'stethoscope',
    forbidden: ['stethoscope', 'doctor', 'heart', 'listen', 'medical', 'tool'],
  },
  {
    word: 'engine',
    forbidden: ['engine', 'motor', 'car', 'horsepower', 'fuel', 'power'],
  },
  {
    word: 'dashboard',
    forbidden: [
      'dashboard',
      'car',
      'speedometer',
      'display',
      'gauges',
      'instrument',
    ],
  },
  {
    word: 'brakes',
    forbidden: ['brakes', 'stop', 'car', 'pedal', 'disc', 'caliper'],
  },
  {
    word: 'steering wheel',
    forbidden: ['steering wheel', 'turn', 'car', 'drive', 'hands', 'control'],
  },
  {
    word: 'windshield',
    forbidden: ['windshield', 'glass', 'wipers', 'front', 'clear', 'car'],
  },
  {
    word: 'airbag',
    forbidden: ['airbag', 'safety', 'inflate', 'crash', 'car', 'impact'],
  },
  {
    word: 'fuel tank',
    forbidden: ['fuel tank', 'gas', 'car', 'petrol', 'diesel', 'energy'],
  },
  {
    word: 'battery',
    forbidden: ['battery', 'electric', 'charge', 'power', 'car', 'energy'],
  },
  {
    word: 'exhaust',
    forbidden: ['exhaust', 'pipe', 'smoke', 'car', 'muffler', 'emission'],
  },
  {
    word: 'GPS',
    forbidden: ['GPS', 'navigation', 'map', 'car', 'direction', 'satellite'],
  },
  {
    word: 'speedometer',
    forbidden: ['speedometer', 'speed', 'car', 'mph', 'dashboard', 'gauge'],
  },
  {
    word: 'license plate',
    forbidden: [
      'license plate',
      'car',
      'registration',
      'number',
      'tag',
      'vehicle',
    ],
  },
  {
    word: 'tire',
    forbidden: ['tire', 'rubber', 'wheel', 'car', 'pressure', 'flat'],
  },
  {
    word: 'car keys',
    forbidden: ['car keys', 'start', 'ignition', 'drive', 'remote', 'unlock'],
  },
  {
    word: 'windshield wipers',
    forbidden: ['windshield wipers', 'rain', 'car', 'clean', 'blade', 'glass'],
  },
  {
    word: 'password',
    forbidden: ['password', 'login', 'secret', 'secure', 'account', 'code'],
  },
  {
    word: 'keyboard',
    forbidden: ['keyboard', 'type', 'keys', 'computer', 'letters', 'press'],
  },
  {
    word: 'mouse',
    forbidden: ['mouse', 'click', 'computer', 'pointer', 'device', 'scroll'],
  },
  {
    word: 'app',
    forbidden: ['app', 'phone', 'mobile', 'download', 'software', 'use'],
  },
  {
    word: 'website',
    forbidden: ['website', 'internet', 'page', 'browse', 'online', 'link'],
  },
  {
    word: 'WiFi',
    forbidden: ['WiFi', 'internet', 'wireless', 'connect', 'signal', 'router'],
  },
  {
    word: 'email',
    forbidden: ['email', 'message', 'inbox', 'send', 'address', 'letter'],
  },
  {
    word: 'smartphone',
    forbidden: ['smartphone', 'phone', 'mobile', 'call', 'apps', 'touchscreen'],
  },
  {
    word: 'headphones',
    forbidden: ['headphones', 'music', 'sound', 'ears', 'listen', 'audio'],
  },
  {
    word: 'cloud',
    forbidden: ['cloud', 'storage', 'internet', 'data', 'save', 'backup'],
  },
  {
    word: 'social media',
    forbidden: [
      'social media',
      'post',
      'platform',
      'Facebook',
      'share',
      'Instagram',
    ],
  },
  {
    word: 'laptop',
    forbidden: ['laptop', 'computer', 'portable', 'keyboard', 'screen', 'work'],
  },
  {
    word: 'tablet',
    forbidden: ['tablet', 'device', 'screen', 'touch', 'iPad', 'portable'],
  },
  {
    word: 'search engine',
    forbidden: [
      'search engine',
      'Google',
      'internet',
      'find',
      'website',
      'results',
    ],
  },
  {
    word: 'notification',
    forbidden: [
      'notification',
      'alert',
      'message',
      'phone',
      'popup',
      'reminder',
    ],
  },
  {
    word: 'Bluetooth',
    forbidden: [
      'Bluetooth',
      'wireless',
      'connect',
      'headphones',
      'speaker',
      'device',
    ],
  },
  {
    word: 'touchscreen',
    forbidden: ['touchscreen', 'finger', 'swipe', 'tablet', 'phone', 'tap'],
  },
  {
    word: 'printer',
    forbidden: ['printer', 'paper', 'print', 'ink', 'copy', 'machine'],
  },
  {
    word: 'streaming',
    forbidden: ['streaming', 'watch', 'Netflix', 'online', 'video', 'movies'],
  },
  {
    word: 'Titanic',
    forbidden: ['Titanic', 'ship', 'iceberg', 'Leonardo', 'Kate', 'sinking'],
  },
  {
    word: 'Star Wars',
    forbidden: ['Star Wars', 'space', 'Jedi', 'lightsaber', 'Force', 'Luke'],
  },
  {
    word: 'The Godfather',
    forbidden: ['The Godfather', 'mafia', 'Don', 'family', 'crime', 'Marlon'],
  },
  {
    word: 'Jurassic Park',
    forbidden: [
      'Jurassic Park',
      'dinosaurs',
      'island',
      'Spielberg',
      'park',
      'T Rex',
    ],
  },
  {
    word: 'Harry Potter',
    forbidden: [
      'Harry Potter',
      'wizard',
      'Hogwarts',
      'magic',
      'J.K. Rowling',
      'Voldemort',
    ],
  },
  {
    word: 'The Matrix',
    forbidden: [
      'The Matrix',
      'Neo',
      'Keanu',
      'reality',
      'simulation',
      'sci-fi',
    ],
  },
  {
    word: 'Inception',
    forbidden: ['Inception', 'dream', 'Leonardo', 'Nolan', 'layers', 'mind'],
  },
  {
    word: 'Avatar',
    forbidden: ['Avatar', 'blue', 'Pandora', 'Cameron', 'alien', '3D'],
  },
  {
    word: 'The Lord of The Rings',
    forbidden: [
      'The Lord of The Rings',
      'Frodo',
      'Ring',
      'Sauron',
      'Gandalf',
      'Middle earth',
    ],
  },
  {
    word: 'The Lion King',
    forbidden: [
      'The Lion King',
      'Simba',
      'Disney',
      'Africa',
      'animated',
      'Mufasa',
    ],
  },
  {
    word: 'Frozen',
    forbidden: ['Frozen', 'Elsa', 'Disney', 'ice', 'snowman', 'Let It Go'],
  },
  {
    word: 'piano',
    forbidden: ['piano', 'keys', 'instrument', 'play', 'grand', 'music'],
  },
  {
    word: 'violin',
    forbidden: ['violin', 'strings', 'bow', 'instrument', 'classical', 'music'],
  },
  {
    word: 'drums',
    forbidden: ['drums', 'percussion', 'beat', 'instrument', 'sticks', 'music'],
  },
  {
    word: 'flute',
    forbidden: ['flute', 'wind', 'instrument', 'play', 'woodwind', 'music'],
  },
  {
    word: 'trumpet',
    forbidden: ['trumpet', 'brass', 'instrument', 'blow', 'music', 'jazz'],
  },
  {
    word: 'doctor',
    forbidden: ['doctor', 'hospital', 'medicine', 'patient', 'health', 'nurse'],
  },
  {
    word: 'teacher',
    forbidden: [
      'teacher',
      'school',
      'students',
      'classroom',
      'educate',
      'lesson',
    ],
  },
  {
    word: 'engineer',
    forbidden: [
      'engineer',
      'design',
      'build',
      'technical',
      'structure',
      'profession',
    ],
  },
  {
    word: 'lawyer',
    forbidden: ['lawyer', 'court', 'legal', 'case', 'attorney', 'judge'],
  },
  {
    word: 'pilot',
    forbidden: ['pilot', 'airplane', 'fly', 'cockpit', 'airline', 'sky'],
  },
  {
    word: 'artist',
    forbidden: ['artist', 'paint', 'canvas', 'create', 'draw', 'art'],
  },
  {
    word: 'journalist',
    forbidden: ['journalist', 'news', 'report', 'write', 'media', 'story'],
  },
  {
    word: 'plumber',
    forbidden: ['plumber', 'pipes', 'water', 'fix', 'wrench', 'leak'],
  },
  {
    word: 'coffee',
    forbidden: ['coffee', 'drink', 'bean', 'caffeine', 'brew', 'morning'],
  },
  {
    word: 'burger',
    forbidden: ['burger', 'beef', 'bun', 'fast', 'food', 'patty'],
  },
  {
    word: 'salad',
    forbidden: ['salad', 'greens', 'healthy', 'dressing', 'bowl', 'vegetables'],
  },
  {
    word: 'wine',
    forbidden: ['wine', 'drink', 'grapes', 'alcohol', 'red', 'white'],
  },
  {
    word: 'bread',
    forbidden: ['bread', 'loaf', 'bake', 'wheat', 'slice', 'sandwich'],
  },
  {
    word: 'soup',
    forbidden: ['soup', 'liquid', 'bowl', 'hot', 'spoon', 'broth'],
  },
  {
    word: 'Christmas',
    forbidden: ['Christmas', 'Santa', 'tree', 'December', 'gifts', 'holiday'],
  },
  {
    word: 'Halloween',
    forbidden: ['Halloween', 'October', 'costume', 'candy', 'pumpkin', 'trick'],
  },
  {
    word: 'Easter',
    forbidden: ['Easter', 'bunny', 'eggs', 'spring', 'holiday', 'hunt'],
  },
  {
    word: "New Year's Eve",
    forbidden: [
      "New Year's Eve",
      'December',
      'countdown',
      'midnight',
      'party',
      'fireworks',
    ],
  },
  {
    word: 'Thanksgiving',
    forbidden: [
      'Thanksgiving',
      'turkey',
      'November',
      'feast',
      'family',
      'holiday',
    ],
  },
  {
    word: "Valentine's Day",
    forbidden: [
      "Valentine's Day",
      'love',
      'February',
      'hearts',
      'Cupid',
      'romantic',
    ],
  },
  {
    word: "St. Patrick's Day",
    forbidden: [
      "St. Patrick's Day",
      'green',
      'March',
      'Irish',
      'shamrock',
      'holiday',
    ],
  },
  {
    word: 'refrigerator',
    forbidden: [
      'refrigerator',
      'cold',
      'kitchen',
      'food',
      'appliance',
      'freeze',
    ],
  },
  {
    word: 'microwave',
    forbidden: ['microwave', 'heat', 'kitchen', 'appliance', 'cook', 'quick'],
  },
  {
    word: 'vacuum cleaner',
    forbidden: [
      'vacuum cleaner',
      'clean',
      'floor',
      'dust',
      'appliance',
      'suction',
    ],
  },
  {
    word: 'washing machine',
    forbidden: [
      'washing machine',
      'laundry',
      'clothes',
      'appliance',
      'clean',
      'spin',
    ],
  },
  {
    word: 'sofa',
    forbidden: ['sofa', 'couch', 'living', 'sit', 'furniture', 'comfort'],
  },
  {
    word: 'lamp',
    forbidden: ['lamp', 'light', 'bulb', 'shade', 'table', 'illuminate'],
  },
  {
    word: 'bed',
    forbidden: ['bed', 'sleep', 'mattress', 'bedroom', 'rest', 'furniture'],
  },
  {
    word: 'television',
    forbidden: [
      'television',
      'watch',
      'screen',
      'remote',
      'shows',
      'living room',
    ],
  },
  {
    word: 'toaster',
    forbidden: [
      'toaster',
      'bread',
      'kitchen',
      'appliance',
      'heat',
      'breakfast',
    ],
  },
  {
    word: 'dishwasher',
    forbidden: [
      'dishwasher',
      'clean',
      'dishes',
      'kitchen',
      'appliance',
      'water',
    ],
  },
  {
    word: 'Albert Einstein',
    forbidden: [
      'Albert Einstein',
      'scientist',
      'relativity',
      'genius',
      'physics',
      'theory',
    ],
  },
  {
    word: 'Leonardo da Vinci',
    forbidden: [
      'Leonardo da Vinci',
      'artist',
      'Mona Lisa',
      'Renaissance',
      'inventor',
      'genius',
    ],
  },
  {
    word: 'Cleopatra',
    forbidden: ['Cleopatra', 'Egypt', 'queen', 'pharaoh', 'ancient', 'ruler'],
  },
  {
    word: 'Thor',
    forbidden: ['Thor', 'Norse', 'god', 'hammer', 'thunder', 'Asgard'],
  },
  {
    word: 'Hercules',
    forbidden: ['Hercules', 'Greek', 'strength', 'hero', 'labors', 'demi-god'],
  },
  {
    word: 'S Class',
    forbidden: ['S Class', 'Mercedes', 'luxury', 'sedan', 'flagship', 'German'],
  },
  {
    word: 'G Class',
    forbidden: ['G Class', 'Mercedes', 'luxury', 'SUV', 'flagship', 'German'],
  },
  {
    word: 'AMG',
    forbidden: [
      'AMG',
      'Mercedes',
      'luxury',
      'performance',
      'flagship',
      'German',
    ],
  },
  {
    word: 'Hercules',
    forbidden: ['Hercules', 'Greek', 'strength', 'hero', 'labors', 'demigod'],
  },
];

export default data;
