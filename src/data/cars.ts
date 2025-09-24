export interface Car {
  id: string;
  make: string;
  model: string;
  grade?: string;
  year: number;
  price: number;
  priceUSD?: number;
  mileage: number;
  fuel: string;
  transmission: string;
  drivetrain: string;
  engine: string;
  doors: number;
  seats: number;
  color: string;
  interiorColor?: string;
  location: string;
  dealer: string;
  chassisNumber?: string;
  modelCode?: string;
  inspectionDate?: string;
  inspectionValid?: string;
  condition: string;
  conditionScore?: number;
  views: number;
  inquiries?: number;
  lastUpdated?: string;
  image: string;
  rating: number;
  isFavorite: boolean;
  bodyType: string;
  features: string[];
  inspectionReport?: {
    exterior: { score: number; notes: string };
    interior: { score: number; notes: string };
    engine: { score: number; notes: string };
    transmission: { score: number; notes: string };
    tires: { score: number; notes: string };
    brakes: { score: number; notes: string };
  };
  serviceHistory?: Array<{
    date: string;
    service: string;
    mileage: number;
  }>;
  images?: string[];
}

export const allCars: Car[] = [
  {
    id: '988025062500208369008',
    make: 'Toyota',
    model: 'Land Cruiser 250',
    grade: 'VX',
    year: 2024,
    price: 6800000,
    priceUSD: 45600,
    mileage: 2000,
    fuel: 'Gasoline',
    transmission: 'AT',
    drivetrain: '4WD',
    engine: '4.6L V8',
    doors: 5,
    seats: 8,
    color: 'Pearl White',
    interiorColor: 'Black Leather',
    location: 'Tokyo',
    dealer: 'Premium Auto Tokyo',
    chassisNumber: 'UZJ200-0123456',
    modelCode: 'CBA-UZJ200W',
    inspectionDate: '2024-03-15',
    inspectionValid: '2026-03-15',
    condition: 'Excellent',
    conditionScore: 4.5,
    views: 2847,
    inquiries: 23,
    lastUpdated: '2024-01-15',
    image: '/images/98802504250020836900300 copy.jpg',
    rating: 4.8,
    isFavorite: false,
    bodyType: 'SUV',
    features: [
      'Sunroof', 'Leather Seats', 'Navigation System', 'Backup Camera',
      'Heated Seats', 'Premium Sound System', 'Cruise Control', 'Bluetooth',
      'USB Ports', 'Dual Zone Climate', 'Power Seats', 'Keyless Entry',
      'LED Headlights', 'Fog Lights', 'Alloy Wheels', 'Running Boards'
    ],
    images: [
      '/images/98802504250020836900300 copy.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      '/images/prdd0208369A20250424D00301.jpg',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    inspectionReport: {
      exterior: { score: 4, notes: 'Minor scratches on rear bumper' },
      interior: { score: 5, notes: 'Excellent condition, no wear' },
      engine: { score: 4, notes: 'Well maintained, recent service' },
      transmission: { score: 5, notes: 'Smooth operation' },
      tires: { score: 4, notes: '70% tread remaining' },
      brakes: { score: 5, notes: 'Recently replaced' }
    },
    serviceHistory: [
      { date: '2024-01-10', service: 'Oil Change & Filter', mileage: 1800 },
      { date: '2023-10-15', service: 'Brake Pad Replacement', mileage: 1200 },
      { date: '2023-07-20', service: 'Tire Rotation', mileage: 800 },
      { date: '2023-04-12', service: 'Major Service', mileage: 500 }
    ]
  },
  {
    id: '1',
    make: 'Toyota',
    model: 'Crown RS',
    year: 2020,
    price: 3200000,
    priceUSD: 21500,
    mileage: 9939,
    fuel: 'Gasoline',
    transmission: 'AT',
    drivetrain: '2WD',
    engine: '2.0L',
    doors: 4,
    seats: 5,
    color: 'White',
    location: 'Tokyo',
    dealer: 'Tokyo Auto Center',
    chassisNumber: 'ARS220-100****',
    condition: 'Excellent',
    conditionScore: 4.8,
    views: 1250,
    inquiries: 15,
    lastUpdated: '2024-01-12',
    image: '/images/0560809A20250613G00418.jpg',
    rating: 4.8,
    isFavorite: false,
    bodyType: 'Sedan',
    features: ['Driver Seat Airbag', 'Passenger Seat Airbag', 'Side Airbag', 'Navigation System', 'Backup Camera'],
    images: [
      '/images/0560809A20250613G00418.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '2',
    make: 'Land Rover',
    model: 'Range Rover Vogue',
    year: 2019,
    price: 2800000,
    priceUSD: 18800,
    mileage: 32000,
    fuel: 'Gasoline',
    transmission: 'AT',
    drivetrain: '4WD',
    engine: '3.0L V6 Turbo',
    doors: 5,
    seats: 5,
    color: 'Black',
    interiorColor: 'Leather',
    bodyType: 'SUV',
    condition: 'Excellent',
    conditionScore: 4.6,
    location: 'Osaka',
    image: '/images/RR1.jpg',
    rating: 4.6,
    views: 980,
    inquiries: 12,
    isFavorite: true,
    dealer: 'Osaka Luxury Motors',
    features: [
      'Driver Seat Airbag', 'Passenger Seat Airbag', 'Side Airbag',
      'Sun/Moon Roof', 'ABS', 'Air Conditioner', 'Double Air-conditioner',
      'Downhill Assist Control', 'Power Steering', 'Power Window',
      'Anti-theft Device', 'Idling Stop', 'USB Input Terminal',
      'Bluetooth Connection', 'TV & Navigation', 'Memory Navi',
      'TV (full segment)', 'Music Player Connectable', 'CD Changer',
      'Music Server', 'DVD Playback', 'Alloy Wheel 24 inch',
      'Leather Seat', 'Half Leather Seat', 'Keyless', 'LED Headlamp',
      'HID (xenon light)', 'Back Camera', 'ETC', 'Aero', 'Smart Key',
      'Power Seats', 'Full Flat Sheet', 'Seat Heater',
      'Electric Rear Gate', 'Front Camera', 'Seat Air Conditioner',
      'All-around Camera', 'Side Camera', 'Air Suspension',
      'Headlight Washer', 'ESC (Electronic Stability Control)',
      'Collision Damage Reduction System', 'Clearance Sonar', 'Auto Light'
    ],
    images: [
      '/images/RR1.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '3',
    make: 'Mercedes Benz',
    model: 'C-Class C220d Laureus Edition Sports Plus Package',
    year: 2020,
    price: 4200000,
    priceUSD: 28200,
    mileage: 25000,
    fuel: 'Gasoline',
    transmission: 'AT',
    drivetrain: '2WD',
    engine: '2.0L Turbo Diesel',
    doors: 4,
    seats: 5,
    color: 'Black',
    location: 'Tokyo',
    image: '/images/98802507260020677100200.jpg',
    rating: 4.7,
    views: 756,
    inquiries: 8,
    isFavorite: false,
    bodyType: 'Sedan',
    dealer: 'Mercedes Tokyo Premium',
    condition: 'Excellent',
    conditionScore: 4.7,
    features: ['Navigation System', 'Leather Seats', 'Sunroof', 'Premium Sound'],
    images: [
      '/images/98802507260020677100200.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '4',
    make: 'Lexus',
    model: 'RX RX300 F Sport',
    year: 2021,
    price: 4800000,
    priceUSD: 32200,
    mileage: 22000,
    fuel: 'Gasoline',
    transmission: 'AT',
    drivetrain: 'AWD',
    engine: '2.0L Turbo',
    doors: 5,
    seats: 5,
    color: 'White',
    location: 'Tokyo',
    image: '/images/0207973A20250528D00223.jpg',
    rating: 4.9,
    views: 1420,
    inquiries: 18,
    isFavorite: false,
    bodyType: 'SUV',
    dealer: 'Lexus Tokyo Premium',
    condition: 'Excellent',
    conditionScore: 4.9,
    features: ['F Sport Package', 'Navigation System', 'Premium Sound', 'Leather Seats'],
    images: [
      '/images/0207973A20250528D00223.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '5',
    make: 'BMW',
    model: 'X7 M50i',
    year: 2021,
    price: 8500000,
    priceUSD: 57000,
    mileage: 28000,
    fuel: 'Gasoline',
    transmission: 'AT',
    drivetrain: 'AWD',
    engine: '4.4L V8 Twin Turbo',
    doors: 5,
    seats: 7,
    color: 'Black',
    location: 'Tokyo',
    image: '/images/bmw70097002633025072700300.jpg',
    rating: 4.7,
    views: 1650,
    inquiries: 22,
    isFavorite: false,
    bodyType: 'SUV',
    dealer: 'BMW Tokyo Premium',
    condition: 'Excellent',
    conditionScore: 4.7,
    features: ['M Performance Package', 'Premium Sound', 'Panoramic Sunroof', 'Leather Seats'],
    images: [
      '/images/bmw70097002633025072700300.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '6',
    make: 'Land Rover',
    model: 'Defender 110S D350',
    year: 2021,
    price: 7200000,
    priceUSD: 48300,
    mileage: 18000,
    fuel: 'Diesel',
    transmission: 'AT',
    drivetrain: '4WD',
    engine: '3.0L V6 Diesel',
    doors: 5,
    seats: 7,
    color: 'Black',
    location: 'Tokyo',
    image: '/images/9730027A30250804W00103.jpg',
    rating: 4.7,
    views: 1850,
    inquiries: 25,
    isFavorite: false,
    bodyType: 'SUV',
    dealer: 'Land Rover Tokyo Premium',
    condition: 'Excellent',
    conditionScore: 4.7,
    features: ['Off-road Package', 'Premium Interior', 'Navigation System', 'Terrain Response'],
    images: [
      '/images/9730027A30250804W00103.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  },
  {
    id: '7',
    make: 'Lexus',
    model: 'LX LX600',
    year: 2022,
    price: 12500000,
    priceUSD: 83800,
    mileage: 15000,
    fuel: 'Gasoline',
    transmission: 'AT',
    drivetrain: '4WD',
    engine: '3.5L V6 Twin Turbo',
    doors: 5,
    seats: 8,
    color: 'White',
    location: 'Tokyo',
    image: '/images/lxxx70005601883025080100100.jpg',
    rating: 4.8,
    views: 1320,
    inquiries: 19,
    isFavorite: false,
    bodyType: 'SUV',
    dealer: 'Lexus Tokyo Premium',
    condition: 'Excellent',
    conditionScore: 4.8,
    features: ['Luxury Package', 'Premium Sound', 'Panoramic View Monitor', 'Multi-terrain Select'],
    images: [
      '/images/lxxx70005601883025080100100.jpg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ]
  }
];

export const getCarById = (id: string): Car | undefined => {
  return allCars.find(car => car.id === id);
};

export const getFilteredCars = (filters: any): Car[] => {
  return allCars.filter(car => {
    if (filters.make && !car.make.toLowerCase().includes(filters.make.toLowerCase())) return false;
    if (filters.model && !car.model.toLowerCase().includes(filters.model.toLowerCase())) return false;
    if (filters.priceMin && car.price < parseInt(filters.priceMin)) return false;
    if (filters.priceMax && car.price > parseInt(filters.priceMax)) return false;
    if (filters.yearMin && car.year < parseInt(filters.yearMin)) return false;
    if (filters.yearMax && car.year > parseInt(filters.yearMax)) return false;
    if (filters.mileageMax && car.mileage > parseInt(filters.mileageMax)) return false;
    if (filters.fuelType && !car.fuel.toLowerCase().includes(filters.fuelType.toLowerCase())) return false;
    if (filters.transmission && !car.transmission.toLowerCase().includes(filters.transmission.toLowerCase())) return false;
    if (filters.location && !car.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.bodyType && !car.bodyType.toLowerCase().includes(filters.bodyType.toLowerCase())) return false;
    if (filters.color && !car.color.toLowerCase().includes(filters.color.toLowerCase())) return false;
    return true;
  });
};