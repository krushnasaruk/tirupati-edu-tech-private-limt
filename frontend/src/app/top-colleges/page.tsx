'use client';

import { useState } from 'react';
import { MapPin, CheckCircle, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function TopCollegesPage() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedOwnership, setSelectedOwnership] = useState<string[]>([]);
  const [selectedFees, setSelectedFees] = useState<string[]>([]);

  const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedCountries([]);
    setSelectedOwnership([]);
    setSelectedFees([]);
  };

  const colleges = [
    { name: "Tbilisi State Medical University", location: "Tbilisi, Georgia", ownership: "Government", exams: "NEET", course: "MBBS", fee: "581,000", img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Kazan Federal University", location: "Kazan, Russia", ownership: "Government", exams: "NEET", course: "MBBS", fee: "450,000", img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Tashkent Medical Academy", location: "Tashkent, Uzbekistan", ownership: "Government", exams: "NEET", course: "MBBS", fee: "320,000", img: "https://images.unsplash.com/photo-1598628042457-36e7aebf88e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Kyrgyz State Medical Academy", location: "Bishkek, Kyrgyzstan", ownership: "Government", exams: "NEET", course: "MBBS", fee: "290,000", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Altai State Medical University", location: "Barnaul, Russia", ownership: "Government", exams: "NEET", course: "MBBS", fee: "380,000", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  ];

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[250px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-sky-600/80 mix-blend-multiply" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wide shadow-sm">Top Colleges in Abroad</h1>
      </div>

      {/* Exam Score Eligibility Tool */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full mb-12">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Find the Best Colleges Based on Your Exam Score</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue text-sm">
                <option>General</option>
                <option>OBC</option>
                <option>SC/ST</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Rank/Score</label>
              <input type="number" placeholder="Enter NEET Score" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Course</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue text-sm">
                <option>MBBS</option>
                <option>BDS</option>
              </select>
            </div>
            <button className="w-full py-3 bg-trust-blue hover:bg-trust-blue-light text-white font-bold rounded-lg transition-colors flex items-center justify-center shadow-md">
              <Search className="w-4 h-4 mr-2" /> Check Results
            </button>
          </div>
        </div>
      </div>

      {/* 25/75 Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar (Sticky Filter Accordion) - 25% */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 h-max">
            <div className="bg-trust-blue rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="p-5 flex justify-between items-center border-b border-white/20">
                <h3 className="text-white font-bold text-lg flex items-center"><Filter className="w-5 h-5 mr-2" /> Filters</h3>
                <button onClick={clearAllFilters} className="text-white/80 hover:text-white text-sm font-medium transition-colors">Clear All</button>
              </div>
              
              <div className="p-5 space-y-8">
                {/* Countries Filter */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Filter by Countries</h4>
                  <div className="space-y-2">
                    {['Russia', 'Georgia', 'Mauritius', 'Kyrgyzstan', 'Uzbekistan', 'Nepal'].map(country => (
                      <label key={country} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={selectedCountries.includes(country)}
                          onChange={() => handleCheckboxChange(setSelectedCountries, country)}
                          className="w-4 h-4 rounded border-gray-300 text-trust-blue-light focus:ring-trust-blue-light cursor-pointer"
                        />
                        <span className="text-blue-100 group-hover:text-white transition-colors text-sm">{country}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Ownership Filter */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Filter by Ownership</h4>
                  <div className="space-y-2">
                    {['Private', 'Government'].map(owner => (
                      <label key={owner} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={selectedOwnership.includes(owner)}
                          onChange={() => handleCheckboxChange(setSelectedOwnership, owner)}
                          className="w-4 h-4 rounded border-gray-300 text-trust-blue-light focus:ring-trust-blue-light cursor-pointer"
                        />
                        <span className="text-blue-100 group-hover:text-white transition-colors text-sm">{owner}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fees Filter */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Filter by Fees (Per Year)</h4>
                  <div className="space-y-2">
                    {['Below ₹3 Lakhs', '₹3 - ₹6 Lakhs', 'Above ₹6 Lakhs'].map(fee => (
                      <label key={fee} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={selectedFees.includes(fee)}
                          onChange={() => handleCheckboxChange(setSelectedFees, fee)}
                          className="w-4 h-4 rounded border-gray-300 text-trust-blue-light focus:ring-trust-blue-light cursor-pointer"
                        />
                        <span className="text-blue-100 group-hover:text-white transition-colors text-sm">{fee}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column (College Results Cards) - 75% */}
          <main className="w-full lg:w-3/4 space-y-6">
            {colleges.map((college, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-6 flex flex-col sm:flex-row items-center gap-6 group">
                
                {/* Emblem/Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full border-4 border-gray-50 overflow-hidden shadow-inner bg-white p-2">
                    <img 
                      src={college.img} 
                      alt={`${college.name} Logo`} 
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Center Details */}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-trust-blue mb-2">{college.name}</h3>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full"><MapPin className="w-4 h-4 mr-1 text-gray-500" /> {college.location}</span>
                    <span className="flex items-center bg-blue-50 text-trust-blue px-3 py-1 rounded-full font-medium">{college.ownership}</span>
                  </div>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-6 text-sm text-gray-500">
                    <div><span className="font-semibold text-gray-700">Course:</span> {college.course}</div>
                    <div><span className="font-semibold text-gray-700">Accepted Exams:</span> {college.exams}</div>
                  </div>
                </div>
                
                {/* Right Aligned Fee & Action */}
                <div className="flex-shrink-0 flex flex-col items-center sm:items-end sm:border-l border-gray-100 sm:pl-6 sm:py-2">
                  <p className="text-gray-500 text-sm font-medium mb-1">Tuition Fee</p>
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    ₹ {college.fee} <span className="text-sm text-gray-500 font-normal">/ Year</span>
                  </p>
                  <Link href="#" className="px-6 py-2 border-2 border-trust-blue text-trust-blue font-bold rounded-lg hover:bg-trust-blue hover:text-white transition-colors">
                    View Details
                  </Link>
                </div>
                
              </div>
            ))}
          </main>
          
        </div>
      </div>
    </div>
  );
}
