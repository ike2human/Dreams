import React, { useState } from 'react';
import { useRouter } from './Router';
import { getCarById, Car } from '../data/cars';
import { 
  ArrowLeft, Heart, Share2, Phone, Mail, MapPin, Calendar, Gauge, 
  Fuel, Users, Settings, Car, Shield, Award, CheckCircle, AlertTriangle,
  Camera, Play, ZoomIn, ChevronLeft, ChevronRight, Star, Clock,
  FileText, Wrench, Eye, Download, ExternalLink
} from 'lucide-react';

interface CarDetailProps {
  carId?: string;
}

const CarDetail: React.FC<CarDetailProps> = ({ carId }) => {
  const { goBack } = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  // Get car data from centralized store
  const carData = carId ? getCarById(carId) : null;

  // If no car found, show error message
  if (!carData) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Car Not Found</h1>
          <p className="text-gray-400 mb-6">The requested vehicle could not be found.</p>
          <button
            onClick={goBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

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

  const nextImage = () => {
    const images = carData.images || [carData.image];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = carData.images || [carData.image];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getConditionColor = (score: number) => {
    if (score >= 4.5) return 'text-green-400 bg-green-500/20 border-green-500/30';
    if (score >= 3.5) return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
    return 'text-red-400 bg-red-500/20 border-red-500/30';
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900/80 backdrop-blur-sm shadow-lg border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={goBack}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300 hover:text-white"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-white">
                  {carData.year} {carData.make} {carData.model} {carData.grade && carData.grade}
                </h1>
                <p className="text-sm text-gray-400">ID: {carData.id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'text-red-400 fill-current' : 'text-gray-400'}`} />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden border border-gray-700">
              <div className="relative">
                <img
                  src={carData.images ? carData.images[currentImageIndex] : carData.image}
                  alt={`${carData.make} ${carData.model}`}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {carData.images ? carData.images.length : 1}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors">
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-6 gap-2">
                  {(carData.images || [carData.image]).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden ${
                        index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="w-full h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-gray-800/50 rounded-lg shadow-lg border border-gray-700">
              <div className="border-b border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'specifications', label: 'Specifications' },
                    { id: 'inspection', label: 'Inspection Report' },
                    { id: 'history', label: 'Service History' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-400'
                          : 'border-transparent text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Vehicle Overview</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">Year</p>
                            <p className="font-medium text-white">{carData.year}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Gauge className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">Mileage</p>
                            <p className="font-medium text-white">{formatMileage(carData.mileage)}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fuel className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">Fuel</p>
                            <p className="font-medium text-white">{carData.fuel}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Settings className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-400">Transmission</p>
                            <p className="font-medium text-white">{carData.transmission}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">Features & Equipment</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {carData.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">Condition Summary</h4>
                      <div className="flex items-center space-x-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getConditionColor(carData.conditionScore)}`}>
                          {carData.condition}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium text-white">{carData.conditionScore}/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Technical Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Make</span>
                            <span className="font-medium text-white">{carData.make}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Model</span>
                            <span className="font-medium text-white">{carData.model}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Grade</span>
                            <span className="font-medium text-white">{carData.grade || 'N/A'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Year</span>
                            <span className="font-medium text-white">{carData.year}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Engine</span>
                            <span className="font-medium text-white">{carData.engine}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Transmission</span>
                            <span className="font-medium text-white">{carData.transmission}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Drivetrain</span>
                            <span className="font-medium text-white">{carData.drivetrain}</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Doors</span>
                            <span className="font-medium text-white">{carData.doors}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Seats</span>
                            <span className="font-medium text-white">{carData.seats}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Exterior Color</span>
                            <span className="font-medium text-white">{carData.color}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Interior</span>
                            <span className="font-medium text-white">{carData.interiorColor || 'N/A'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Chassis Number</span>
                            <span className="font-medium text-sm text-white">{carData.chassisNumber || 'N/A'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Model Code</span>
                            <span className="font-medium text-white">{carData.modelCode || 'N/A'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Inspection Valid</span>
                            <span className="font-medium text-white">{carData.inspectionValid || 'N/A'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'inspection' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Professional Inspection Report</h3>
                      {carData.inspectionReport ? (
                        <div className="space-y-4">
                          {Object.entries(carData.inspectionReport).map(([category, data]) => (
                            <div key={category} className="border border-gray-700 rounded-lg p-4 bg-gray-800/30">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-white capitalize">{category}</h4>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < data.score ? 'text-yellow-400 fill-current' : 'text-gray-600'
                                      }`}
                                    />
                                  ))}
                                  <span className="ml-2 text-sm font-medium text-white">{data.score}/5</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400">{data.notes}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400">No inspection report available for this vehicle.</p>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Service History</h3>
                      {carData.serviceHistory && carData.serviceHistory.length > 0 ? (
                        <div className="space-y-4">
                          {carData.serviceHistory.map((service, index) => (
                            <div key={index} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg bg-gray-800/30">
                              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-blue-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-white">{service.service}</h4>
                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                  <span>{service.date}</span>
                                  <span>{formatMileage(service.mileage)}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400">No service history available for this vehicle.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Action */}
            <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  {formatPrice(carData.price)}
                </div>
                {carData.priceUSD && (
                  <div className="text-lg text-gray-400">
                    ≈ ${carData.priceUSD.toLocaleString()} USD
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  Request Quote
                </button>
                <button className="w-full border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Inspection
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dealer Info */}
            <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Dealer Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">{carData.dealer}</h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{carData.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">4.8</span>
                  </div>
                  <div className="text-sm text-gray-400">156 reviews</div>
                </div>
                <button className="w-full border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  View Dealer Profile
                </button>
              </div>
            </div>

            {/* Vehicle Stats */}
            <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Vehicle Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Views</span>
                  </div>
                  <span className="font-medium text-white">{carData.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Inquiries</span>
                  </div>
                  <span className="font-medium text-white">{carData.inquiries || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Last Updated</span>
                  </div>
                  <span className="font-medium text-white">{carData.lastUpdated || 'N/A'}</span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Documents</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Inspection Certificate</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Export Certificate</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">Service Records</span>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;