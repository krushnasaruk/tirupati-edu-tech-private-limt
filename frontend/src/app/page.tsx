import Link from 'next/link';
import { 
  Building2, Users, GraduationCap, Award, 
  MapPin, CheckCircle, Plane, Home, BookOpen, 
  Stethoscope, FileText, Globe
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Government Medical Universities
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your gateway to top medical universities abroad. Get expert guidance and counseling for MBBS admission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/about" className="px-8 py-3 bg-trust-blue text-white font-medium rounded-xl hover:bg-trust-blue-light transition-colors shadow-lg">
              Read More
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white text-trust-blue font-medium rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              Join Now
            </Link>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="absolute -bottom-16 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
              <div className="flex flex-col items-center">
                <Building2 className="w-8 h-8 text-trust-blue mb-2" />
                <span className="text-3xl font-bold text-gray-900">248+</span>
                <span className="text-sm text-gray-500 font-medium mt-1">Universities</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-trust-blue mb-2" />
                <span className="text-3xl font-bold text-gray-900">21047+</span>
                <span className="text-sm text-gray-500 font-medium mt-1">Counselling</span>
              </div>
              <div className="flex flex-col items-center">
                <GraduationCap className="w-8 h-8 text-trust-blue mb-2" />
                <span className="text-3xl font-bold text-gray-900">5000+</span>
                <span className="text-sm text-gray-500 font-medium mt-1">Admissions</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-trust-blue mb-2" />
                <span className="text-3xl font-bold text-gray-900">15+</span>
                <span className="text-sm text-gray-500 font-medium mt-1">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* spacer for overlapping metrics */}
      <div className="h-24 md:h-32" />

      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-blue">Get Insight Of Your Study Abroad Journey</h2>
            <p className="mt-4 text-gray-600">Follow these simple steps to secure your medical seat abroad.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px] relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Student" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { step: "Step 1", title: "Counseling", icon: <Users className="w-6 h-6" /> },
                { step: "Step 2", title: "University Selection", icon: <Building2 className="w-6 h-6" /> },
                { step: "Step 3", title: "Document Verification", icon: <FileText className="w-6 h-6" /> },
                { step: "Step 4", title: "Admission Letter", icon: <CheckCircle className="w-6 h-6" /> },
                { step: "Step 5", title: "Visa Processing", icon: <Plane className="w-6 h-6" /> },
                { step: "Step 6", title: "Travel & Accommodation", icon: <Home className="w-6 h-6" /> },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-trust-blue rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-trust-blue-light">{item.step}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carousels Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-trust-blue mb-8">Study MBBS Abroad</h2>
          
          {/* Countries Carousel */}
          <div className="flex space-x-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
            {[
              { country: "Russia", img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { country: "Georgia", img: "https://images.unsplash.com/photo-1565019004561-1c390500bf82?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { country: "Kazakhstan", img: "https://images.unsplash.com/photo-1558588942-930faae5a389?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { country: "Uzbekistan", img: "https://images.unsplash.com/photo-1528644498322-a9b0c0f9ccad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { country: "Nepal", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            ].map((item, index) => (
              <div key={index} className="flex-none w-64 snap-start relative group rounded-xl overflow-hidden shadow-md cursor-pointer">
                <img src={item.img} alt={item.country} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <MapPin className="w-5 h-5 mr-2" /> {item.country}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-trust-blue mt-12 mb-8">Top Universities Abroad</h2>
          
          {/* Universities Carousel */}
          <div className="flex space-x-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="flex-none w-80 snap-start bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="University" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">State Medical University {index + 1}</h3>
                  <p className="text-sm text-gray-600 mb-4">A prestigious institution offering world-class medical education with modern facilities.</p>
                  <Link href="/top-colleges" className="text-trust-blue font-semibold text-sm hover:underline">View Details &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-blue">What We Offer</h2>
            <p className="mt-4 text-gray-600">Comprehensive services for a seamless admission experience.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Career Counseling", icon: <Users className="w-8 h-8" />, desc: "Expert guidance to choose the right medical university tailored to your budget and academic goals." },
              { title: "University Admission", icon: <Building2 className="w-8 h-8" />, desc: "Direct partnerships with NMC & WHO recognized universities for a hassle-free admission process." },
              { title: "Visa Assistance", icon: <FileText className="w-8 h-8" />, desc: "100% visa success rate with our end-to-end documentation and embassy interview preparation." },
              { title: "Flight Booking", icon: <Plane className="w-8 h-8" />, desc: "Discounted group flight bookings and safe airport pickups at your destination country." },
              { title: "Accommodation", icon: <Home className="w-8 h-8" />, desc: "Secure, hygienic, and affordable hostel and PG accommodations near the university campuses." },
              { title: "Forex Support", icon: <Globe className="w-8 h-8" />, desc: "Seamless foreign exchange, banking assistance, and educational loan processing." },
              { title: "MCI/NEXT Coaching", icon: <BookOpen className="w-8 h-8" />, desc: "Integrated coaching for screening tests from top Indian faculties right from the 1st year." },
              { title: "Local Support", icon: <Stethoscope className="w-8 h-8" />, desc: "Our local representatives are available 24/7 for any medical or administrative emergencies." },
            ].map((item, index) => {
              const isBlue = index % 2 === 1;
              return (
                <div 
                  key={index} 
                  className={`p-8 rounded-xl shadow-md text-center transition-transform hover:-translate-y-1 flex flex-col items-center justify-center min-h-[240px] ${
                    isBlue ? 'bg-trust-blue text-white' : 'bg-white text-trust-blue'
                  }`}
                >
                  <div className={`p-4 rounded-full mb-4 ${isBlue ? 'bg-white/10' : 'bg-blue-50'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`font-bold text-lg mb-3 ${isBlue ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isBlue ? 'text-blue-100' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
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
