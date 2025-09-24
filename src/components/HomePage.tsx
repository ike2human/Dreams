import React, { useState } from 'react';
import { useRouter } from './Router';
import { Search, Filter, MapPin, Calendar, Gauge, Fuel, Users, Heart, Eye, Phone, Mail, Star, ChevronDown, Menu, X, Car, Globe, Shield, Award } from 'lucide-react';
import { allCars, getFilteredCars, Car as CarType } from '../data/cars';

const HomePage: React.FC = () => {
  const { navigateTo } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('search');
  const [searchFilters, setSearchFilters] = useState({
    make: '', model: '', priceMin: '', priceMax: '', yearMin: '', yearMax: '',
    mileageMax: '', fuelType: '', transmission: '', location: '', bodyType: '',
    color: '', driveType: '', engineSize: '', doors: '', seats: ''
  });

  // Get filtered cars based on search criteria
  const filteredCars = getFilteredCars(searchFilters);
  const displayCars: CarType[] = filteredCars.length > 0 ? filteredCars : allCars.slice(0, 6); // Show first 6 if no filters applied

  const popularMakes = [
    { name: 'Mercedes', count: 8420, logo: '🏎️' },
    { name: 'Toyota', count: 15420, logo: '🚗' },
    { name: 'BMW', count: 7350, logo: '🚙' },
    { name: 'Lexus', count: 5890, logo: '🚕' },
    { name: 'Nissan', count: 9870, logo: '🚐' },
    { name: 'Land Rover', count: 3240, logo: '🚜' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('ja-JP').format(mileage) + ' km';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Dreamwire</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
                Search Cars
              </a>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <select className="text-sm border-none bg-transparent text-gray-300 focus:outline-none">
                  <option className="bg-gray-800">English</option>
                  <option className="bg-gray-800">日本語</option>
                </select>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-gray-300 hover:text-blue-400">Search Cars</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/bg_pc_mv03.webp" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Find Your Dream Car
            </h2>
            <p className="relative z-10 text-xl text-gray-300 max-w-2xl mx-auto">
              Your premier destination for vehicle imports in East Africa
            </p>
          </div>

          {/* Search Form */}
          <div className="relative z-10 bg-gray-800/70 backdrop-blur-md rounded-xl shadow-2xl p-6 max-w-4xl mx-auto border border-gray-700">
            {/* Main Search Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Make</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.make}
                  onChange={(e) => setSearchFilters({...searchFilters, make: e.target.value})}
                >
                  <option value="">All Makes</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="toyota">Toyota</option>
                  <option value="bmw">BMW</option>
                  <option value="lexus">Lexus</option>
                  <option value="nissan">Nissan</option>
                  <option value="landrover">Land Rover</option>
                  <option value="honda">Honda</option>
                  <option value="mazda">Mazda</option>
                  <option value="subaru">Subaru</option>
                  <option value="mitsubishi">Mitsubishi</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="infiniti">Infiniti</option>
                  <option value="acura">Acura</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Model</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.model}
                  onChange={(e) => setSearchFilters({...searchFilters, model: e.target.value})}
                >
                  <option value="">All Models</option>
                  <option value="landcruiser">Land Cruiser</option>
                  <option value="crown">Crown</option>
                  <option value="camry">Camry</option>
                  <option value="prius">Prius</option>
                  <option value="corolla">Corolla</option>
                  <option value="rav4">RAV4</option>
                  <option value="highlander">Highlander</option>
                  <option value="civic">Civic</option>
                  <option value="accord">Accord</option>
                  <option value="crv">CR-V</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range (¥)</label>
                <div className="flex space-x-2">
                  <input 
                    type="number" 
                    placeholder="Min Price"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-400"
                    value={searchFilters.priceMin}
                    onChange={(e) => setSearchFilters({...searchFilters, priceMin: e.target.value})}
                  />
                  <input 
                    type="number" 
                    placeholder="Max Price"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-400"
                    value={searchFilters.priceMax}
                    onChange={(e) => setSearchFilters({...searchFilters, priceMax: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Prefecture</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                >
                  <option value="">All Prefectures</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="osaka">Osaka</option>
                  <option value="nagoya">Nagoya</option>
                  <option value="yokohama">Yokohama</option>
                  <option value="kyoto">Kyoto</option>
                  <option value="kobe">Kobe</option>
                  <option value="sapporo">Sapporo</option>
                  <option value="fukuoka">Fukuoka</option>
                  <option value="hiroshima">Hiroshima</option>
                  <option value="sendai">Sendai</option>
                </select>
              </div>
            </div>
            
            {/* Additional Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Year Range</label>
                <div className="flex space-x-2">
                  <select 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                    value={searchFilters.yearMin}
                    onChange={(e) => setSearchFilters({...searchFilters, yearMin: e.target.value})}
                  >
                    <option value="">Min Year</option>
                    {Array.from({length: 25}, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <select 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                    value={searchFilters.yearMax}
                    onChange={(e) => setSearchFilters({...searchFilters, yearMax: e.target.value})}
                  >
                    <option value="">Max Year</option>
                    {Array.from({length: 25}, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mileage (km)</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.mileageMax}
                  onChange={(e) => setSearchFilters({...searchFilters, mileageMax: e.target.value})}
                >
                  <option value="">Any Mileage</option>
                  <option value="10000">Under 10,000 km</option>
                  <option value="20000">Under 20,000 km</option>
                  <option value="30000">Under 30,000 km</option>
                  <option value="50000">Under 50,000 km</option>
                  <option value="80000">Under 80,000 km</option>
                  <option value="100000">Under 100,000 km</option>
                  <option value="150000">Under 150,000 km</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Fuel Type</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.fuelType}
                  onChange={(e) => setSearchFilters({...searchFilters, fuelType: e.target.value})}
                >
                  <option value="">All Fuel Types</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                  <option value="diesel">Diesel</option>
                  <option value="phev">Plug-in Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Transmission</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.transmission}
                  onChange={(e) => setSearchFilters({...searchFilters, transmission: e.target.value})}
                >
                  <option value="">All Transmissions</option>
                  <option value="automatic">Automatic (AT)</option>
                  <option value="cvt">CVT</option>
                  <option value="manual">Manual (MT)</option>
                  <option value="dct">DCT</option>
                </select>
              </div>
            </div>
            
            {/* Third Row - Body Type and Additional Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Body Type</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.bodyType}
                  onChange={(e) => setSearchFilters({...searchFilters, bodyType: e.target.value})}
                >
                  <option value="">All Body Types</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="wagon">Station Wagon</option>
                  <option value="coupe">Coupe</option>
                  <option value="convertible">Convertible</option>
                  <option value="minivan">Minivan</option>
                  <option value="pickup">Pickup Truck</option>
                  <option value="kcar">Kei Car</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.color}
                  onChange={(e) => setSearchFilters({...searchFilters, color: e.target.value})}
                >
                  <option value="">All Colors</option>
                  <option value="white">White</option>
                  <option value="black">Black</option>
                  <option value="silver">Silver</option>
                  <option value="gray">Gray</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                  <option value="brown">Brown</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Drive Type</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.driveType}
                  onChange={(e) => setSearchFilters({...searchFilters, driveType: e.target.value})}
                >
                  <option value="">All Drive Types</option>
                  <option value="2wd">2WD (Front)</option>
                  <option value="rwd">2WD (Rear)</option>
                  <option value="4wd">4WD</option>
                  <option value="awd">AWD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Engine Size (L)</label>
                <select 
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                  value={searchFilters.engineSize}
                  onChange={(e) => setSearchFilters({...searchFilters, engineSize: e.target.value})}
                >
                  <option value="">Any Engine Size</option>
                  <option value="0.66">0.66L (Kei)</option>
                  <option value="1.0">1.0L</option>
                  <option value="1.5">1.5L</option>
                  <option value="2.0">2.0L</option>
                  <option value="2.5">2.5L</option>
                  <option value="3.0">3.0L</option>
                  <option value="3.5">3.5L+</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-md font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Search className="w-5 h-5" />
                <span>Search Used Cars</span>
              </button>
              <button 
                onClick={() => setSearchFilters({
                  make: '', model: '', priceMin: '', priceMax: '', yearMin: '', yearMax: '',
                  mileageMax: '', fuelType: '', transmission: '', location: '', bodyType: '',
                  color: '', driveType: '', engineSize: '', doors: '', seats: ''
                })}
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
              >
                <X className="w-4 h-4" />
                <span>Clear Filters</span>
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-400 rounded-md hover:bg-blue-600/10 transition-colors flex items-center justify-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>Save Search</span>
              </button>
            </div>
            
            {/* Search Summary */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <span className="font-medium">Active filters:</span>
                {Object.entries(searchFilters).filter(([_, value]) => value !== '').length === 0 ? (
                  <span className="text-gray-500">None selected</span>
                ) : (
                  Object.entries(searchFilters)
                    .filter(([_, value]) => value !== '')
                    .map(([key, value]) => (
                      <span key={key} className="inline-flex items-center px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-600/30">
                        {key}: {value}
                        <button 
                          onClick={() => setSearchFilters({...searchFilters, [key]: ''})}
                          className="ml-1 hover:text-blue-200"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Featured Cars</h3>
            <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">View All →</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCars.map((car) => (
              <div key={car.id} className="bg-gray-800/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-700 hover:border-gray-600">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors">
                      <Heart className={`w-4 h-4 ${car.isFavorite ? 'text-red-400 fill-current' : 'text-gray-300'}`} />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Eye className="w-3 h-3 text-gray-300" />
                    <span className="text-xs text-gray-300">{car.views}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      {car.make} {car.model} {car.grade && <span className="text-sm text-gray-400">({car.grade})</span>}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-400">{car.rating}</span>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-blue-400 mb-3">
                    {formatPrice(car.price)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{car.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Gauge className="w-4 h-4" />
                      <span>{formatMileage(car.mileage)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Fuel className="w-4 h-4" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{car.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigateTo('car-detail', { id: car.id })}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 text-center"
                    >
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Dreamwire</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Trusted Quality</h4>
              <p className="text-gray-400">All vehicles undergo thorough inspection and come with detailed condition reports.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Best Prices</h4>
              <p className="text-gray-400">Competitive pricing with transparent fees and no hidden costs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Expert Support</h4>
              <p className="text-gray-400">Professional support team to help you find the perfect vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Dreamwire</span>
              </div>
              <p className="text-gray-400 mb-4">
                East Africa's premier vehicle import specialist connecting you with quality cars from Japan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Browse</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Search Cars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Popular Makes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Featured Deals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Car Inspection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dreamwire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;