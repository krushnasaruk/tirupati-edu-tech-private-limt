'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const photos = [
    { category: 'Events', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Students', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Awards', img: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Students', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Events', img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Awards', img: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Students', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Students', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Campus', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Students', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Campus', img: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Events', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Students', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Awards', img: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { category: 'Students', img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

  const filteredPhotos = activeFilter === 'All' ? photos : photos.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-trust-blue/70" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white">Gallery</h1>
      </div>

      {/* Categorized Photo Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-trust-blue mb-6">Discover the Visual Experience</h2>
          
          <div className="flex justify-center space-x-4 flex-wrap gap-y-4">
            {['All', 'Awards', 'Students', 'Events', 'Campus'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter 
                    ? 'bg-trust-blue text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden shadow-sm aspect-square bg-gray-100">
              <img 
                src={photo.img} 
                alt={photo.category} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* University Collaborations */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-blue">University Collaborations</h2>
            <p className="mt-4 text-gray-600">Our leadership with partners across the globe.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "MOU Signing - Russia", img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { title: "Campus Visit - Georgia", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { title: "Delegation - Kazakhstan", img: "https://images.unsplash.com/photo-1558588942-930faae5a389?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            ].map((collab, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="h-60 relative overflow-hidden">
                  <img 
                    src={collab.img} 
                    alt={collab.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{collab.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trust-blue">Medical Insights & Guidance Videos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg relative group cursor-pointer bg-gray-900 aspect-video">
              <img 
                src={`https://images.unsplash.com/photo-[placeholder]?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`.replace('[placeholder]', ['1516549655169-df83a0774514', '1576091160550-2108b3a56011', '1581056771107-11a42050e1f1'][index])} 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-trust-blue transition-colors duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-blue">Our Students Say!</h2>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
            {[
              { name: "Aarav Patel", uni: "Tbilisi State Medical University", text: "MBBSGroup made my dream of studying abroad a reality. Their team was supportive throughout the entire visa and admission process.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
              { name: "Priya Sharma", uni: "Kazan Federal University", text: "I was extremely anxious about moving to Russia, but the local support provided by the consultancy was incredible. Highly recommended!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
              { name: "Rohan Singh", uni: "Tashkent Medical Academy", text: "Transparent fees, honest counseling, and excellent post-arrival support. MBBSGroup is definitely the best in the business.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
            ].map((testimonial, index) => (
              <div key={index} className="flex-none w-80 snap-start bg-white rounded-xl shadow-md p-8 pt-12 relative mt-10 border border-gray-100">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full object-cover absolute -top-10 left-1/2 -translate-x-1/2 border-4 border-white shadow-md"
                />
                <div className="text-center mt-4">
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-trust-blue font-medium mb-4">{testimonial.uni}</p>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
