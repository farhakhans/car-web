import { Car } from './types';

export const CAR_DATA: Car[] = [
  { 
    id: 1, 
    make: 'Tesla', 
    model: 'Model S Plaid', 
    year: 2023, 
    price: 89990, 
    type: 'Electric', 
    images: [
        "https://images.pexels.com/photos/14981395/pexels-photo-14981395.jpeg",
        "https://images.pexels.com/photos/18440263/pexels-photo-18440263.jpeg",
        "https://images.pexels.com/photos/11085321/pexels-photo-11085321.jpeg",
        "https://images.pexels.com/photos/112461/pexels-photo-112461.jpeg"
    ],
    description: 'The Model S Plaid is the quickest accelerating car in production today. It combines cutting-edge technology with luxury and unparalleled performance.',
    features: ['Autopilot', '17-inch Cinematic Display', '0-60 mph in 1.99s', 'All-Wheel Drive', '1,020 horsepower'] 
  },
  { 
    id: 2, 
    make: 'Ford', 
    model: 'Mustang GT', 
    year: 2024, 
    price: 45500, 
    type: 'Sports Car',
    images: [
        'https://images.pexels.com/photos/20857395/pexels-photo-20857395/free-photo-of-a-black-ford-mustang-gt.jpeg',
        'https://images.pexels.com/photos/15942431/pexels-photo-15942431/free-photo-of-a-red-ford-mustang-on-a-road.jpeg',
        'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg',
        'https://images.pexels.com/photos/7924845/pexels-photo-7924845.jpeg'
    ],
    description: 'An American icon, the Ford Mustang GT continues its legacy with a powerful V8 engine and a cockpit designed for the ultimate driving experience.',
    features: ['5.0L V8 Engine', 'Digital Instrument Cluster', 'Brembo Brakes', 'Active Valve Exhaust', 'Magneride Damping System'] 
  },
  { 
    id: 3, 
    make: 'Toyota', 
    model: 'RAV4 Hybrid', 
    year: 2024, 
    price: 31725, 
    type: 'SUV', 
    images: [
        'https://images.pexels.com/photos/10893322/pexels-photo-10893322.jpeg',
        'https://images.pexels.com/photos/10893333/pexels-photo-10893333.jpeg',
        'https://images.pexels.com/photos/10893325/pexels-photo-10893325.jpeg',
        'https://images.pexels.com/photos/10893319/pexels-photo-10893319.jpeg'
    ],
    description: 'The Toyota RAV4 Hybrid offers a perfect blend of efficiency, space, and reliability, making it one of the most popular SUVs on the market.',
    features: ['Toyota Safety Sense 2.5', 'Apple CarPlay', 'Android Auto', 'Excellent Fuel Economy', 'All-Wheel Drive Integrated Management']
  },
  { 
    id: 4, 
    make: 'Porsche', 
    model: '911 Carrera', 
    year: 2024, 
    price: 114400, 
    type: 'Sports Car', 
    images: [
        'https://images.pexels.com/photos/16334616/pexels-photo-16334616/free-photo-of-white-porsche-911-carrera-s-on-the-street.jpeg',
        'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg',
        'https://images.pexels.com/photos/376364/pexels-photo-376364.jpeg',
        'https://images.pexels.com/photos/15197334/pexels-photo-15197334/free-photo-of-a-white-porsche-911-on-the-road.jpeg'
    ],
    description: 'The Porsche 911 Carrera is the quintessential sports car, with a timeless design and engineering that delivers an exhilarating driving experience.',
    features: ['Twin-turbo six-cylinder engine', 'Porsche Communication Management (PCM)', 'Iconic Design', 'Superior Handling', '8-speed Porsche Doppelkupplung (PDK)']
  },
  { 
    id: 5, 
    make: 'Ford', 
    model: 'F-150 Lightning', 
    year: 2023, 
    price: 59974, 
    type: 'Truck', 
    images: [
        'https://images.pexels.com/photos/12530758/pexels-photo-12530758.jpeg',
        'https://images.pexels.com/photos/12530759/pexels-photo-12530759.jpeg',
        'https://images.pexels.com/photos/12530760/pexels-photo-12530760.jpeg',
        'https://images.pexels.com/photos/12530757/pexels-photo-12530757.jpeg'
    ],
    description: 'The all-electric F-150 Lightning is a revolutionary truck that combines raw power and capability with smart technology and zero emissions.',
    features: ['Pro Power Onboard', 'Mega Power Frunk', 'BlueCruise Hands-Free Driving', 'Extended Range Battery', 'Dual eMotor']
  },
  { 
    id: 6, 
    make: 'Rivian', 
    model: 'R1S', 
    year: 2023, 
    price: 78000, 
    type: 'Electric', 
    images: [
        'https://images.pexels.com/photos/16881978/pexels-photo-16881978/free-photo-of-white-rivian-car-on-street.jpeg',
        'https://images.pexels.com/photos/15949178/pexels-photo-15949178/free-photo-of-rivian-r1s-suv-parked-in-the-city-at-dusk.jpeg',
        'https://images.pexels.com/photos/20348703/pexels-photo-20348703/free-photo-of-a-silver-rivian-r1s-suv-in-the-mountains.jpeg',
        'https://images.pexels.com/photos/16881980/pexels-photo-16881980/free-photo-of-white-rivian-car-on-street.jpeg'
    ],
    description: 'The Rivian R1S is an all-electric SUV built for adventure, offering impressive range, off-road capability, and space for the whole family.',
    features: ['Quad-Motor AWD', '316-mile range', 'Panoramic Glass Roof', 'Built-in Air Compressor', 'Driver+ Assistance System'] 
  },
  { 
    id: 7, 
    make: 'BMW', 
    model: 'M3 Competition', 
    year: 2024, 
    price: 76000, 
    type: 'Sedan', 
    images: [
        'https://images.pexels.com/photos/15698301/pexels-photo-15698301/free-photo-of-side-view-of-a-white-bmw-m3.jpeg',
        'https://images.pexels.com/photos/17697843/pexels-photo-17697843/free-photo-of-a-white-bmw-m3-in-the-city.jpeg',
        'https://images.pexels.com/photos/17697844/pexels-photo-17697844/free-photo-of-a-white-bmw-m3-in-the-city.jpeg',
        'https://images.pexels.com/photos/17697842/pexels-photo-17697842/free-photo-of-a-white-bmw-m3-in-the-city.jpeg'
    ],
    description: 'The BMW M3 Competition is the ultimate sports sedan, blending high-performance engineering with everyday usability and aggressive styling.',
    features: ['M TwinPower Turbo inline 6-cylinder', 'M Sport Differential', 'Carbon Fiber roof', 'M-specific instrument cluster', 'Adaptive M Suspension'] 
  },
    { 
    id: 8, 
    make: 'Jeep', 
    model: 'Wrangler Rubicon', 
    year: 2024, 
    price: 49995, 
    type: 'SUV', 
    images: [
        'https://images.pexels.com/photos/3802652/pexels-photo-3802652.jpeg',
        'https://images.pexels.com/photos/35619/jeep-jeep-wrangler-off-road-offroad.jpg',
        'https://images.pexels.com/photos/13576310/pexels-photo-13576310.jpeg',
        'https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg'
    ],
    description: 'The legendary Jeep Wrangler Rubicon is the undisputed off-road champion, engineered to conquer the toughest trails with ease.',
    features: ['4:1 Rock-Trac 4x4 System', 'Electronic Sway Bar Disconnect', '33-inch All-Terrain Tires', 'Removable Doors and Roof', 'Uconnect 4C NAV'] 
  },
  {
    id: 9,
    make: 'Chevrolet',
    model: 'Corvette C8',
    year: 2024,
    price: 68300,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/16438421/pexels-photo-16438421/free-photo-of-red-chevrolet-corvette-c8-in-a-city.jpeg',
      'https://images.pexels.com/photos/7944234/pexels-photo-7944234.jpeg',
      'https://images.pexels.com/photos/15942435/pexels-photo-15942435/free-photo-of-chevrolet-corvette-c8-in-a-city-at-night.jpeg',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
    ],
    description: 'The mid-engine marvel that continues the legacy of American performance. The C8 is a supercar for the everyday driver.',
    features: ['6.2L V8 DI engine', 'Mid-Engine Layout', 'Removable Roof Panel', 'Driver Mode Selector', 'Z51 Performance Package']
  },
  {
    id: 10,
    make: 'Audi',
    model: 'Q8 e-tron',
    year: 2024,
    price: 74400,
    type: 'Electric',
    images: [
      'https://images.pexels.com/photos/17194379/pexels-photo-17194379/free-photo-of-an-audi-q8-e-tron-in-the-desert.jpeg',
      'https://images.pexels.com/photos/20348704/pexels-photo-20348704/free-photo-of-a-gray-audi-q8-e-tron-on-a-road.jpeg',
      'https://images.pexels.com/photos/17194377/pexels-photo-17194377/free-photo-of-an-audi-q8-e-tron-in-the-desert.jpeg',
      'https://images.pexels.com/photos/17194378/pexels-photo-17194378/free-photo-of-an-audi-q8-e-tron-in-the-desert.jpeg'
    ],
    description: 'Experience the pinnacle of electric luxury SUVs. The Audi Q8 e-tron combines sophisticated design, advanced technology, and exhilarating performance.',
    features: ['Dual electric motors', 'Quattro all-wheel drive', 'Adaptive air suspension', 'Virtual cockpit plus', 'Up to 285-mile range']
  },
  {
    id: 11,
    make: 'Genesis',
    model: 'G90',
    year: 2024,
    price: 90100,
    type: 'Sedan',
    images: [
      'https://images.pexels.com/photos/15610330/pexels-photo-15610330/free-photo-of-a-black-genesis-g90.jpeg',
      'https://images.pexels.com/photos/20835474/pexels-photo-20835474/free-photo-of-a-black-genesis-g90-on-a-road-in-the-mountains.jpeg',
      'https://images.pexels.com/photos/15610332/pexels-photo-15610332/free-photo-of-a-black-genesis-g90.jpeg',
      'https://images.pexels.com/photos/20835475/pexels-photo-20835475/free-photo-of-a-black-genesis-g90-on-a-road-in-the-mountains.jpeg'
    ],
    description: 'The Genesis G90 redefines luxury with its elegant design, serene cabin, and effortless power. A true first-class experience on wheels.',
    features: ['3.5L twin-turbo V6', 'Chauffeur mode', 'Nappa leather seating', 'Mood Curator system', 'Highway Driving Assist 2']
  },
  {
    id: 12,
    make: 'Land Rover',
    model: 'Range Rover Sport',
    year: 2024,
    price: 83600,
    type: 'SUV',
    images: [
      'https://images.pexels.com/photos/12792275/pexels-photo-12792275.jpeg',
      'https://images.pexels.com/photos/14092288/pexels-photo-14092288.jpeg',
      'https://images.pexels.com/photos/14092290/pexels-photo-14092290.jpeg',
      'https://images.pexels.com/photos/14092289/pexels-photo-14092289.jpeg'
    ],
    description: 'A compelling blend of on-road dynamics and off-road capability. The Range Rover Sport offers visceral, sporting luxury.',
    features: ['Dynamic Air Suspension', 'Pivi Pro infotainment', 'Mild Hybrid Technology', 'Pixel LED headlights', 'Active Noise Cancellation']
  },
  {
    id: 13,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    price: 117300,
    type: 'Sedan',
    images: [
      'https://images.pexels.com/photos/20348710/pexels-photo-20348710/free-photo-of-a-mercedes-benz-s-class-on-a-road.jpeg',
      'https://images.pexels.com/photos/20348711/pexels-photo-20348711/free-photo-of-a-mercedes-benz-s-class-on-a-road.jpeg',
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
      'https://images.pexels.com/photos/1122410/pexels-photo-1122410.jpeg'
    ],
    description: "The S-Class stands for the fascination of MERCEDES-BENZ: legendary and traditional engineering expertise defines the luxury segment in the automobile industry.",
    features: ['MBUX infotainment system', 'AIRMATIC air suspension', 'Burmester 3D Surround Sound', 'Active multicontour front seats', 'E-ACTIVE BODY CONTROL']
  },
  {
    id: 14,
    make: 'Honda',
    model: 'Civic Type R',
    year: 2024,
    price: 44795,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/16898038/pexels-photo-16898038/free-photo-of-a-white-honda-civic-type-r.jpeg',
      'https://images.pexels.com/photos/16898036/pexels-photo-16898036/free-photo-of-a-white-honda-civic-type-r.jpeg',
      'https://images.pexels.com/photos/16898037/pexels-photo-16898037/free-photo-of-a-white-honda-civic-type-r.jpeg',
      'https://images.pexels.com/photos/16898039/pexels-photo-16898039/free-photo-of-a-white-honda-civic-type-r.jpeg'
    ],
    description: "The most powerful Civic ever, the Type R is the pinnacle of Honda factory performance, built for the track and engineered for the road.",
    features: ['2.0L VTEC Turbo Engine (315 hp)', 'Six-Speed Manual Transmission', '+R Driving Mode', 'LogR datalogger', 'High-Wing Spoiler']
  },
  {
    id: 15,
    make: 'Kia',
    model: 'Telluride',
    year: 2024,
    price: 36190,
    type: 'SUV',
    images: [
      'https://images.pexels.com/photos/18729114/pexels-photo-18729114/free-photo-of-a-black-kia-telluride.jpeg',
      'https://images.pexels.com/photos/18729115/pexels-photo-18729115/free-photo-of-a-black-kia-telluride.jpeg',
      'https://images.pexels.com/photos/18729116/pexels-photo-18729116/free-photo-of-a-black-kia-telluride.jpeg',
      'https://images.pexels.com/photos/18729117/pexels-photo-18729117/free-photo-of-a-black-kia-telluride.jpeg'
    ],
    description: "The Kia Telluride is a bold and capable three-row SUV, offering premium features, spacious seating, and rugged styling for any family adventure.",
    features: ['3.8L V6 Engine', 'Seating for up to 8', '12.3-inch Dual Panoramic Displays', 'Kia Drive Wise Safety Suite', 'All-Wheel Drive with Center-Locking Differential']
  },
  {
    id: 16,
    make: 'Lucid',
    model: 'Air Pure',
    year: 2024,
    price: 77400,
    type: 'Electric',
    images: [
      'https://images.pexels.com/photos/17094939/pexels-photo-17094939/free-photo-of-a-white-lucid-air-sedan.jpeg',
      'https://images.pexels.com/photos/17094940/pexels-photo-17094940/free-photo-of-a-white-lucid-air-sedan.jpeg',
      'https://images.pexels.com/photos/17094941/pexels-photo-17094941/free-photo-of-a-white-lucid-air-sedan.jpeg',
      'https://images.pexels.com/photos/17094942/pexels-photo-17094942/free-photo-of-a-white-lucid-air-sedan.jpeg'
    ],
    description: "The Lucid Air is an electric masterpiece, delivering unprecedented range, groundbreaking technology, and a new benchmark for luxury and performance.",
    features: ['Up to 410-mile range', 'Glass Canopy Roof', '34-inch 5K Glass Cockpit display', 'DreamDrive Pro advanced driver-assistance', 'Surreal Sound Pro']
  },
  {
    id: 17,
    make: 'Hyundai',
    model: 'Ioniq 5',
    year: 2024,
    price: 41800,
    type: 'Electric',
    images: [
      'https://images.pexels.com/photos/9708726/pexels-photo-9708726.jpeg',
      'https://images.pexels.com/photos/16881907/pexels-photo-16881907/free-photo-of-hyundai-ioniq-5-in-a-city.jpeg',
      'https://images.pexels.com/photos/10394781/pexels-photo-10394781.jpeg',
      'https://images.pexels.com/photos/14757391/pexels-photo-14757391.jpeg'
    ],
    description: "A groundbreaking electric CUV with a distinctive retro-futuristic design, spacious interior, and ultra-fast charging capabilities.",
    features: ['800V ultra-fast charging', 'Vehicle-to-Load (V2L) function', 'Augmented Reality Head-Up Display', 'Sliding center console', 'Up to 303-mile range']
  },
  {
    id: 18,
    make: 'Subaru',
    model: 'WRX',
    year: 2024,
    price: 32735,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/12093766/pexels-photo-12093766.jpeg',
      'https://images.pexels.com/photos/12093776/pexels-photo-12093776.jpeg',
      'https://images.pexels.com/photos/12093764/pexels-photo-12093764.jpeg',
      'https://images.pexels.com/photos/12093765/pexels-photo-12093765.jpeg'
    ],
    description: "Born from rally racing, the Subaru WRX delivers thrilling performance with its turbocharged BOXER engine and standard Symmetrical All-Wheel Drive.",
    features: ['2.4L Turbocharged BOXER Engine', 'Symmetrical All-Wheel Drive', 'Track-tuned suspension', 'Available Subaru Performance Transmission', '11.6-inch STARLINK Multimedia']
  },
  {
    id: 19,
    make: 'Volvo',
    model: 'XC90',
    year: 2024,
    price: 56000,
    type: 'SUV',
    images: [
      'https://images.pexels.com/photos/13576307/pexels-photo-13576307.jpeg',
      'https://images.pexels.com/photos/12792271/pexels-photo-12792271.jpeg',
      'https://images.pexels.com/photos/12792272/pexels-photo-12792272.jpeg',
      'https://images.pexels.com/photos/10394788/pexels-photo-10394788.jpeg'
    ],
    description: "The Volvo XC90 is a Scandinavian luxury SUV that combines elegant design, advanced safety features, and a spacious three-row interior for ultimate family comfort.",
    features: ['Google built-in', 'Pilot Assist', 'Bowers & Wilkins sound system', 'Air purifier', 'Seating for up to seven']
  },
  {
    id: 20,
    make: 'Mazda',
    model: 'MX-5 Miata',
    year: 2024,
    price: 30150,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/14588640/pexels-photo-14588640.jpeg',
      'https://images.pexels.com/photos/21498638/pexels-photo-21498638.jpeg',
      'https://images.pexels.com/photos/11915994/pexels-photo-11915994.jpeg',
      'https://images.pexels.com/photos/11915992/pexels-photo-11915992.jpeg'
    ],
    description: "The iconic Mazda MX-5 Miata is the world's best-selling roadster, offering pure driving joy with its lightweight design and near-perfect balance.",
    features: ['SKYACTIV-G 2.0L Engine', 'Kinematic Posture Control', 'Near-perfect 50/50 weight distribution', 'Convertible soft top', 'Bose 9-speaker audio system']
  },
  {
    id: 21,
    make: 'Porsche',
    model: '718 Boxster',
    year: 2024,
    price: 68300,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/12885141/pexels-photo-12885141.jpeg',
      'https://images.pexels.com/photos/12885140/pexels-photo-12885140.jpeg',
      'https://images.pexels.com/photos/12885143/pexels-photo-12885143.jpeg',
      'https://images.pexels.com/photos/12885142/pexels-photo-12885142.jpeg'
    ],
    description: 'The Porsche 718 Boxster is a mid-engined roadster that embodies the spirit of freedom with its agile handling and powerful boxer engine.',
    features: ['Mid-engine layout', 'Porsche Active Suspension Management (PASM)', 'Sport exhaust system', 'Fully automated fabric roof', '2.0L turbocharged boxer engine']
  },
  {
    id: 22,
    make: 'Ram',
    model: '1500',
    year: 2024,
    price: 40275,
    type: 'Truck',
    images: [
      'https://images.pexels.com/photos/13681440/pexels-photo-13681440.jpeg',
      'https://images.pexels.com/photos/13681442/pexels-photo-13681442.jpeg',
      'https://images.pexels.com/photos/13681441/pexels-photo-13681441.jpeg',
      'https://images.pexels.com/photos/13681443/pexels-photo-13681443.jpeg'
    ],
    description: 'The Ram 1500 sets the benchmark for luxury trucks with its premium interior, comfortable ride, and impressive capability.',
    features: ['5.7L HEMI V8 with eTorque', 'Uconnect 5 NAV with 12-inch touchscreen', 'Active-Level Four Corner Air Suspension', 'Multifunction Tailgate', 'Class-exclusive RamBox Cargo Management']
  },
  {
    id: 23,
    make: 'Polestar',
    model: '2',
    year: 2024,
    price: 49900,
    type: 'Electric',
    images: [
      'https://images.pexels.com/photos/9313794/pexels-photo-9313794.jpeg',
      'https://images.pexels.com/photos/9313795/pexels-photo-9313795.jpeg',
      'https://images.pexels.com/photos/9313796/pexels-photo-9313796.jpeg',
      'https://images.pexels.com/photos/9313793/pexels-photo-9313793.jpeg'
    ],
    description: 'The Polestar 2 is a performance electric fastback with minimalist design, innovative technology, and a focus on sustainable materials.',
    features: ['Google Android Automotive OS', 'Harman Kardon Premium Sound', 'Pixel LED headlights', 'Vegan interior', 'Up to 320-mile range']
  },
  {
    id: 24,
    make: 'Dodge',
    model: 'Challenger',
    year: 2023,
    price: 32465,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg',
      'https://images.pexels.com/photos/10394783/pexels-photo-10394783.jpeg',
      'https://images.pexels.com/photos/2649602/pexels-photo-2649602.jpeg',
      'https://images.pexels.com/photos/10394782/pexels-photo-10394782.jpeg'
    ],
    description: 'The Dodge Challenger is an icon of American muscle, delivering immense power and timeless, aggressive styling in a spacious coupe.',
    features: ['Available Supercharged 6.2L HEMI V8', 'Widebody package', 'Launch Control', 'SRT Performance Pages', 'Classic heritage design']
  },
  {
    id: 25,
    make: 'Cadillac',
    model: 'Escalade',
    year: 2024,
    price: 81895,
    type: 'SUV',
    images: [
      'https://images.pexels.com/photos/15479603/pexels-photo-15479603/free-photo-of-a-black-cadillac-escalade-on-a-road.jpeg',
      'https://images.pexels.com/photos/15479604/pexels-photo-15479604/free-photo-of-a-black-cadillac-escalade-on-a-road.jpeg',
      'https://images.pexels.com/photos/15479605/pexels-photo-15479605/free-photo-of-a-black-cadillac-escalade-on-a-road.jpeg',
      'https://images.pexels.com/photos/15479606/pexels-photo-15479606/free-photo-of-a-black-cadillac-escalade-on-a-road.jpeg'
    ],
    description: 'The Cadillac Escalade is the epitome of full-size luxury, commanding attention with its bold design, advanced technology, and powerful presence.',
    features: ['38-inch curved OLED Display', 'AKG Studio Reference 36-speaker audio', 'Super Cruise hands-free driving', 'Air Ride Adaptive Suspension', '6.2L V8 Engine']
  },
  {
    id: 26,
    make: 'Ford',
    model: 'Bronco',
    year: 2024,
    price: 39130,
    type: 'SUV',
    images: [
      'https://images.pexels.com/photos/16184232/pexels-photo-16184232/free-photo-of-a-blue-ford-bronco-raptor.jpeg',
      'https://images.pexels.com/photos/16184233/pexels-photo-16184233/free-photo-of-a-blue-ford-bronco-raptor.jpeg',
      'https://images.pexels.com/photos/14740498/pexels-photo-14740498.jpeg',
      'https://images.pexels.com/photos/16184234/pexels-photo-16184234/free-photo-of-a-blue-ford-bronco-raptor.jpeg'
    ],
    description: 'Built for the wild, the Ford Bronco returns to its roots as a rugged, capable, and highly customizable off-road adventure vehicle.',
    features: ['G.O.A.T. Modes (Goes Over Any Type of Terrain)', 'Removable roof and doors', 'HOSS (High-Performance Off-Road Stability Suspension) System', '35-inch tires available with Sasquatch Package', 'SYNC 4 with 12-inch screen']
  },
  {
    id: 27,
    make: 'BMW',
    model: 'i4',
    year: 2024,
    price: 52200,
    type: 'Electric',
    images: [
      'https://images.pexels.com/photos/10394785/pexels-photo-10394785.jpeg',
      'https://images.pexels.com/photos/10394786/pexels-photo-10394786.jpeg',
      'https://images.pexels.com/photos/10394787/pexels-photo-10394787.jpeg',
      'https://images.pexels.com/photos/21498632/pexels-photo-21498632/free-photo-of-a-bmw-i4-on-a-road.jpeg'
    ],
    description: 'The first-ever all-electric Gran Coupe, the BMW i4 delivers exhilarating performance and classic BMW design with zero local emissions.',
    features: ['Up to 301-mile range', '0-60 mph in as little as 3.7 seconds', 'BMW Curved Display with iDrive 8', 'eDrive technology', 'Iconic BMW handling dynamics']
  },
  {
    id: 28,
    make: 'McLaren',
    model: '720S',
    year: 2023,
    price: 310500,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/3957991/pexels-photo-3957991.jpeg',
      'https://images.pexels.com/photos/15779493/pexels-photo-15779493/free-photo-of-a-blue-mclaren-720s.jpeg',
      'https://images.pexels.com/photos/6871780/pexels-photo-6871780.jpeg',
      'https://images.pexels.com/photos/5920745/pexels-photo-5920745.jpeg'
    ],
    description: 'The McLaren 720S is a masterpiece of aerodynamic design and extreme performance, offering a driving experience that is both raw and incredibly refined.',
    features: ['4.0L twin-turbocharged V8 engine', '710 horsepower', 'Carbon fiber Monocage II body structure', 'Proactive Chassis Control II', 'Dihedral doors']
  },
  {
    id: 29,
    make: 'Lexus',
    model: 'LC 500',
    year: 2024,
    price: 99800,
    type: 'Sports Car',
    images: [
      'https://images.pexels.com/photos/18418241/pexels-photo-18418241/free-photo-of-a-white-lexus-lc-500.jpeg',
      'https://images.pexels.com/photos/18418242/pexels-photo-18418242/free-photo-of-a-white-lexus-lc-500.jpeg',
      'https://images.pexels.com/photos/18418243/pexels-photo-18418243/free-photo-of-a-white-lexus-lc-500.jpeg',
      'https://images.pexels.com/photos/18418244/pexels-photo-18418244/free-photo-of-a-white-lexus-lc-500.jpeg'
    ],
    description: 'A flagship luxury coupe that blends stunning design, exquisite craftsmanship, and a thrilling V8 engine to create an unforgettable driving experience.',
    features: ['5.0-liter V8 engine (471 hp)', '10-speed Direct-Shift automatic transmission', 'Takumi craftsmanship', 'Lexus Safety System+ 2.5', 'Mark Levinson 13-speaker audio']
  },
  {
    id: 30,
    make: 'Rivian',
    model: 'R1T',
    year: 2023,
    price: 73000,
    type: 'Truck',
    images: [
      'https://images.pexels.com/photos/15949176/pexels-photo-15949176/free-photo-of-a-rivian-r1t-truck-parked-at-dusk.jpeg',
      'https://images.pexels.com/photos/15949182/pexels-photo-15949182/free-photo-of-a-rivian-r1t-truck-parked-at-dusk.jpeg',
      'https://images.pexels.com/photos/20348705/pexels-photo-20348705/free-photo-of-a-green-rivian-r1t-truck.jpeg',
      'https://images.pexels.com/photos/20348706/pexels-photo-20348706/free-photo-of-a-green-rivian-r1t-truck.jpeg'
    ],
    description: 'The Rivian R1T is the first all-electric adventure vehicle, a pickup truck that redefines the category with incredible performance, range, and utility.',
    features: ['Quad-Motor AWD', '0-60 mph in 3 seconds', 'Gear Tunnel storage', 'Camp Kitchen accessory', 'Tows up to 11,000 lbs']
  },
  {
    id: 31,
    make: 'Toyota',
    model: '4Runner',
    year: 2024,
    price: 40705,
    type: 'SUV',
    images: [
      'https://images.pexels.com/photos/15645344/pexels-photo-15645344/free-photo-of-a-toyota-4runner-trd-pro.jpeg',
      'https://images.pexels.com/photos/15645343/pexels-photo-15645343/free-photo-of-a-toyota-4runner-trd-pro.jpeg',
      'https://images.pexels.com/photos/15645345/pexels-photo-15645345/free-photo-of-a-toyota-4runner-trd-pro.jpeg',
      'https://images.pexels.com/photos/15645346/pexels-photo-15645346/free-photo-of-a-toyota-4runner-trd-pro.jpeg'
    ],
    description: 'A legendary off-road SUV with a reputation for toughness and reliability. The 4Runner is built on a durable body-on-frame platform, ready for any adventure.',
    features: ['Body-on-frame construction', 'Crawl Control (CRAWL)', 'Multi-Terrain Select', 'Available Kinetic Dynamic Suspension System (KDSS)', 'Power rear glass']
  },
  {
    id: 32,
    make: 'Honda',
    model: 'Accord Hybrid',
    year: 2024,
    price: 33990,
    type: 'Sedan',
    images: [
      'https://images.pexels.com/photos/21498642/pexels-photo-21498642/free-photo-of-a-white-honda-accord-hybrid.jpeg',
      'https://images.pexels.com/photos/21498640/pexels-photo-21498640/free-photo-of-a-white-honda-accord-hybrid.jpeg',
      'https://images.pexels.com/photos/21498643/pexels-photo-21498643/free-photo-of-a-white-honda-accord-hybrid.jpeg',
      'https://images.pexels.com/photos/21498641/pexels-photo-21498641/free-photo-of-a-white-honda-accord-hybrid.jpeg'
    ],
    description: 'The Honda Accord Hybrid combines sophisticated styling and a premium interior with an advanced hybrid powertrain for a powerful and efficient driving experience.',
    features: ['Two-motor hybrid powertrain', '12.3-inch touch-screen display', 'Google built-in', 'Honda Sensing suite', 'Exceptional fuel economy']
  },
  {
    id: 33,
    make: 'Ferrari',
    model: '296 GTB',
    year: 2024,
    price: 338255,
    type: 'Sports Car',
    images: [
        'https://images.pexels.com/photos/15779503/pexels-photo-15779503/free-photo-of-a-red-ferrari-296-gtb.jpeg',
        'https://images.pexels.com/photos/15779502/pexels-photo-15779502/free-photo-of-a-red-ferrari-296-gtb.jpeg',
        'https://images.pexels.com/photos/15779501/pexels-photo-15779501/free-photo-of-a-red-ferrari-296-gtb.jpeg',
        'https://images.pexels.com/photos/15779500/pexels-photo-15779500/free-photo-of-a-red-ferrari-296-gtb.jpeg'
    ],
    description: "An evolution of Ferrari's mid-rear-engined two-seater berlinetta, the 296 GTB features a revolutionary V6 hybrid engine delivering an incredible 818 horsepower.",
    features: ['V6 hybrid engine', '818 hp total output', 'Plug-in hybrid (PHEV) system', 'eManettino steering wheel', 'Active aerodynamics']
  },
  {
    id: 34,
    make: 'GMC',
    model: 'Hummer EV',
    year: 2024,
    price: 98845,
    type: 'Truck',
    images: [
        'https://images.pexels.com/photos/15479599/pexels-photo-15479599/free-photo-of-a-white-gmc-hummer-ev.jpeg',
        'https://images.pexels.com/photos/15479598/pexels-photo-15479598/free-photo-of-a-white-gmc-hummer-ev.jpeg',
        'https://images.pexels.com/photos/15479597/pexels-photo-15479597/free-photo-of-a-white-gmc-hummer-ev.jpeg',
        'https://images.pexels.com/photos/15479596/pexels-photo-15479596/free-photo-of-a-white-gmc-hummer-ev.jpeg'
    ],
    description: "The GMC Hummer EV is a first-of-its-kind supertruck, offering revolutionary features and staggering performance both on and off the road.",
    features: ['CrabWalk feature', 'Watts to Freedom launch control', 'Infinity Roof with modular sky panels', 'Up to 1,000 horsepower', 'Ultium battery platform']
  },
  {
    id: 35,
    make: 'Acura',
    model: 'Integra Type S',
    year: 2024,
    price: 51800,
    type: 'Sedan',
    images: [
        'https://images.pexels.com/photos/21498637/pexels-photo-21498637/free-photo-of-an-acura-integra-type-s.jpeg',
        'https://images.pexels.com/photos/21498636/pexels-photo-21498636/free-photo-of-an-acura-integra-type-s.jpeg',
        'https://images.pexels.com/photos/21498635/pexels-photo-21498635/free-photo-of-an-acura-integra-type-s.jpeg',
        'https://images.pexels.com/photos/21498639/pexels-photo-21498639/free-photo-of-an-acura-integra-type-s.jpeg'
    ],
    description: "The Integra returns to its performance roots with the Type S, a premium sport compact featuring a high-revving VTEC turbo engine and a six-speed manual transmission.",
    features: ['2.0L VTEC Turbo Engine (320 hp)', '6-Speed Manual Transmission', 'Limited Slip Differential', 'Wide-body design', 'ELS STUDIO 3D Premium Audio']
  },
  {
    id: 36,
    make: 'Nissan',
    model: 'Z',
    year: 2024,
    price: 42210,
    type: 'Sports Car',
    images: [
        'https://images.pexels.com/photos/14757396/pexels-photo-14757396.jpeg',
        'https://images.pexels.com/photos/14757394/pexels-photo-14757394.jpeg',
        'https://images.pexels.com/photos/14757392/pexels-photo-14757392.jpeg',
        'https://images.pexels.com/photos/14757395/pexels-photo-14757395.jpeg'
    ],
    description: "The iconic Nissan Z is back, blending a classic design with modern technology and a thrilling twin-turbo V6 engine for the next generation of enthusiasts.",
    features: ['3.0L Twin-Turbo V6 (400 hp)', '6-Speed Manual or 9-Speed Auto', '12.3-inch digital dashboard', 'Launch control', 'Heritage-inspired styling']
  }
];


export const SYSTEM_INSTRUCTION = `You are a friendly, expert car sales agent for a high-end digital showroom.
Your goal is to help users find their perfect car from our inventory.
Be conversational, helpful, and persuasive.
When a user asks for cars, use the provided JSON data to answer. Do not mention that you are using JSON data.
Always format car details neatly, using markdown for lists and bolding key features.
If a user seems interested, suggest a test drive and explain you can help schedule it (simulate this, you don't have a real booking system).
Answer general car questions knowledgeably.
Keep responses concise but informative.

Here is our current inventory:
${JSON.stringify(CAR_DATA, null, 2)}
`;