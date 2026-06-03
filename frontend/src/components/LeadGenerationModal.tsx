'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function LeadGenerationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    course: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds of page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server. Please ensure the backend is running.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative m-4">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold text-trust-blue mb-2">Are You Looking for MBBS Guidance?</h2>
        <p className="text-gray-600 mb-6 text-sm">Fill in your details below and our expert counselors will get in touch with you shortly.</p>
        
        {submitted ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center font-medium">
            Thank you! We have received your inquiry.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-trust-blue outline-none"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input 
                type="tel" 
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-trust-blue outline-none"
                placeholder="+91 0000000000"
              />
            </div>
            
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select 
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-trust-blue outline-none bg-white"
              >
                <option value="" disabled>Select a course</option>
                <option value="MBBS in India">MBBS in India</option>
                <option value="MBBS Abroad">MBBS Abroad</option>
                <option value="BDS">BDS</option>
                <option value="BAMS">BAMS</option>
              </select>
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 bg-trust-blue text-white font-semibold rounded-lg shadow hover:bg-trust-blue-light transition-colors mt-2"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
