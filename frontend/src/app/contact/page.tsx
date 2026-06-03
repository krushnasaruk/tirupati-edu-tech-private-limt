'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    destination: '',
    course: '',
    month: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const offices = [
    { name: 'Head Office Nashik', address: '123 Education Lane, Knowledge Park, Nashik, Maharashtra 422009', phone: '+91 98765 43210' },
    { name: 'Pune Office', address: '456 FC Road, Deccan Gymkhana, Pune, Maharashtra 411004', phone: '+91 98765 43211' },
    { name: 'Mumbai Office', address: '789 Linking Road, Bandra West, Mumbai, Maharashtra 400050', phone: '+91 98765 43212' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: '', lastName: '', email: '', mobile: '', destination: '', course: '', month: '', agree: false
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-trust-blue/70" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
      </div>

      {/* Inline Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trust-blue">Let Our Team Reach Out To You</h2>
        </div>
        
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="hidden md:block w-2/5 relative">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional Counselor" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-3/5 p-8 md:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-whatsapp-green rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been successfully sent. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-trust-blue outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-trust-blue outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-trust-blue outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile *</label>
                    <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-trust-blue outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination *</label>
                    <select required name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue outline-none bg-white">
                      <option value="" disabled>Select</option>
                      <option value="Russia">Russia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course *</label>
                    <select required name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue outline-none bg-white">
                      <option value="" disabled>Select</option>
                      <option value="MBBS">MBBS</option>
                      <option value="BDS">BDS</option>
                      <option value="BAMS">BAMS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Intake Month *</label>
                    <select required name="month" value={formData.month} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue outline-none bg-white">
                      <option value="" disabled>Select</option>
                      <option value="September 2024">Sep 2024</option>
                      <option value="February 2025">Feb 2025</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center mt-2">
                  <input required type="checkbox" name="agree" id="agree" checked={formData.agree} onChange={handleChange} className="h-4 w-4 text-trust-blue focus:ring-trust-blue border-gray-300 rounded" />
                  <label htmlFor="agree" className="ml-2 block text-sm text-gray-600">
                    I agree to receive communications regarding my admission inquiry.
                  </label>
                </div>

                <button type="submit" className="w-full py-3 bg-trust-blue text-white font-bold rounded-lg hover:bg-trust-blue-light transition-colors shadow-md mt-4">
                  Submit Details
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Domestic Offices Grid */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-blue">Explore Our Presence Across Domestic Offices</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Nashik', 'Mumbai', 'Pune', 'Nagpur'].map((city, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-md group h-48 cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-[placeholder]?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`.replace('[placeholder]', ['1592424001807-062fd02e2136','1518331589139-44026601b0b0','1595924973385-d8f99e4c34a2','1592659762303-9008ce831d10'][index])} 
                  alt={city} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trust-blue to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 flex items-center text-white font-bold text-xl">
                  <MapPin className="w-5 h-5 mr-2" /> {city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trust-blue">GET IN TOUCH</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            {offices.map((office, index) => (
              <div 
                key={index} 
                className={`border rounded-xl p-4 cursor-pointer transition-all ${activeOffice === index ? 'border-trust-blue shadow-md bg-blue-50/50' : 'border-gray-200 hover:border-trust-blue/50'}`}
                onClick={() => setActiveOffice(index)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{office.name}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeOffice === index ? 'rotate-180 text-trust-blue' : ''}`} />
                </div>
                
                {activeOffice === index && (
                  <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-start text-sm text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-trust-blue flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-5 h-5 mr-3 text-trust-blue flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-5 h-5 mr-3 text-trust-blue flex-shrink-0" />
                      <span>info@mbbsgroup.com</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 flex items-center justify-center">
            {/* Google Map Embed Placeholder for demo */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38547285165!2d73.7210777!3d19.9911107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb730310ff6b%3A0xc6a81395b2827725!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
