import React, { useState, useEffect } from 'react';

// Flight Data
const flightsData = [
    {
        id: 1,
        logo: 'https://m.media-amazon.com/images/I/418wwCw2HuL.png',
        airline: 'IndiGo',
        flightNumber: '6E 2103',
        departureTime: '07:00',
        arrivalTime: '09:55',
        departureCity: 'New Delhi',
        arrivalCity: 'Bengaluru',
        duration: '02h 55m',
        isNonStop: true,
        price: 5899,
        onTimePerformance: '92%',
        priceLockAmount: 376,
    },
    {
      id: 2,
      logo: 'https://m.media-amazon.com/images/I/418wwCw2HuL.png',
      airline: 'IndiGo',
      flightNumber: '6E 2103',
      departureTime: '07:00',
      arrivalTime: '09:55',
      departureCity: 'New Delhi',
      arrivalCity: 'Bengaluru',
      duration: '02h 55m',
      isNonStop: true,
      price: 5899,
      onTimePerformance: '92%',
      priceLockAmount: 376,
  }
];

// Hotels Data
const hotelsData = [
    {
        id: 1,
        name: 'ESSOTTO RECREATION HUB',
        location: 'KIADB Export Promotion Industrial Area',
        rating: 4,
        price: 178,
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3',
        perNight: true
    },
    {
        id: 2,
        name: 'GRAND LOTUS INN',
        location: 'MG Road, City Center',
        rating: 5,
        price: 250,
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3',
        perNight: true
    },
    {
        id: 3,
        name: 'BLUE DIAMOND RESORT',
        location: 'Lake View Area',
        rating: 4,
        price: 199,
        imageUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3',
        perNight: true
    }
];

// Star Rating Component
const StarRating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-3 h-3 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

// Flight Card Component
const FlightCard = ({ flight }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8">
                        <img src={flight.logo} alt={flight.airline} className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 text-sm">{flight.airline}</p>
                        <p className="text-gray-500 text-xs">{flight.flightNumber}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-8">
                    <div className="text-center">
                        <p className="text-md font-bold text-gray-800">{flight.departureTime}</p>
                        <p className="text-xs text-gray-600">{flight.departureCity}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-xs text-gray-500">{flight.duration}</div>
                        <div className="relative w-24 h-px bg-gray-300 my-2">
                            <div className="absolute top-1/2 right-0 w-2 h-2 -mt-1 rounded-full bg-gray-300"></div>
                            <div className="absolute top-1/2 left-0 w-2 h-2 -mt-1 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="text-xs text-blue-600">{flight.isNonStop ? 'Non stop' : ''}</div>
                    </div>

                    <div className="text-center">
                        <p className="text-md font-bold text-gray-800">{flight.arrivalTime}</p>
                        <p className="text-xs text-gray-600">{flight.arrivalCity}</p>
                    </div>
                </div>

                <div className="text-right">
                    <div className="mt-1">
                        <p className="text-lg font-bold text-gray-800">₹ {flight.price}</p>
                        <p className="text-xs text-gray-500">per adult</p>
                    </div>
                    <button className="mt-2 px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 text-xs transition-colors cursor-pointer">
                        VIEW PRICES
                    </button>
                </div>
            </div>

            <hr className="my-2 border-gray-300" />

            <div className="flex items-center justify-between">
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-green-500">
                        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                        </svg>
                    </span>
                    <span className="text-xs text-gray-600">{flight.onTimePerformance} on time</span>
                </div>

                <div className="mt-3 flex items-center justify-end text-xs text-blue-600">
                    <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Lock this price starting from ₹{flight.priceLockAmount}
                </div>
            </div>
        </div>
    );
};

// Hotel Card Component
const HotelCard = ({ hotel }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
                <img
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Hotel';
                    }}
                />
            </div>

            <div className="p-4">
                <h3 className="font-bold text-gray-900 text-md truncate">{hotel.name}</h3>
                <p className="text-xs text-gray-600 mt-1 truncate">{hotel.location}</p>

                <div className="mt-2 flex items-center space-x-1">
                    <StarRating rating={hotel.rating} />
                </div>

                <div className="mt-2 flex justify-between items-end">
                    <div>
                        <span className="text-md font-bold text-gray-900">₹{hotel.price}</span>
                        <span className="text-xs text-gray-500 ml-1">
                            {hotel.perNight ? 'per night' : ''}
                        </span>
                    </div>
                    <button className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors cursor-pointer">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

// Home Component with localStorage
const Home = () => {
    const [travelQuery, setTravelQuery] = useState('');
    const [showResults, setShowResults] = useState(false);

    // Load from localStorage
    useEffect(() => {
        const savedQuery = localStorage.getItem('travelQuery');
        const savedShowResults = localStorage.getItem('showResults') === 'true';

        if (savedQuery) {
            setTravelQuery(savedQuery);
            setShowResults(savedShowResults);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
        localStorage.setItem('travelQuery', travelQuery);
        localStorage.setItem('showResults', 'true');
    };

    const handleReset = () => {
        setTravelQuery('');
        setShowResults(false);
        localStorage.removeItem('travelQuery');
        localStorage.removeItem('showResults');
    };

    return (
        <div className="min-h-screen pt-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto pt-10 px-4">
                {/* Search Box */}
                <div className="w-xl mx-auto bg-white rounded-2xl shadow-lg p-5 mb-8">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <textarea
                                value={travelQuery}
                                onChange={(e) => setTravelQuery(e.target.value)}
                                placeholder="Describe your travel preferences, destination, or ask any travel-related questions..."
                                className="w-full p-4 border mb-3 border-gray-200 rounded-xl text-gray-700 text-sm"
                            />
                        </div>
                        <div className="flex justify-center gap-3">
                            <button
                                type="submit"
                                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200 text-sm cursor-pointer"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200 text-sm cursor-pointer"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>

                {/* Result Section */}
                {showResults && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Available Flights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {flightsData.map((flight) => (
                                    <FlightCard key={flight.id} flight={flight} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Hotels</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {hotelsData.map((hotel) => (
                                    <HotelCard key={hotel.id} hotel={hotel} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
