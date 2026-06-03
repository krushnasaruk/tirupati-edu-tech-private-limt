import { Eye, Target, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-trust-blue/70" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white">About Us</h1>
      </div>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Student with books" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-6">Explore Milestones That Shaped Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Established with a single purpose of guiding students towards a brighter future, MBBSGroup has grown into a trusted and globally recognized name in medical admission consultancy. Over the past decade, we have successfully assisted thousands of aspiring doctors to secure admissions in prestigious medical universities across the globe, overcoming administrative, cultural, and geographical barriers.
              </p>
              <p>
                Our journey began when we realized that countless bright students in India were unable to pursue their dream of becoming doctors due to the highly competitive nature of domestic entrance exams and the exorbitant fees of private medical colleges. We set out to build a transparent, ethical bridge to top-tier medical education abroad, establishing direct partnerships with government-approved universities in Russia, Georgia, Kazakhstan, Kyrgyzstan, and beyond.
              </p>
              <p>
                Our comprehensive approach takes the stress out of the admission process. From selecting the right university to managing complex documentation, visa processing, apostille, and currency exchange, we handle every intricate detail. But our commitment doesn't end when the student boards their flight. We provide robust post-arrival support, ensuring safe campus accommodation, local registration, and continued mentorship until the student completes their degree.
              </p>
              <p>
                Today, MBBSGroup boasts a network of over 248 partner universities and a legacy of over 5,000 successful admissions. We take immense pride in our alumni who are now serving as reputed healthcare professionals in top hospitals worldwide. We believe that distance and borders should not limit a student's potential to achieve their dreams.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-trust-blue">
                <h4 className="font-bold text-trust-blue text-xl mb-1">15+ Years</h4>
                <p className="text-sm text-gray-600">Of unwavering dedication to student success.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border-l-4 border-whatsapp-green">
                <h4 className="font-bold text-green-700 text-xl mb-1">98%</h4>
                <p className="text-sm text-gray-600">Visa success rate across all our partner countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Block */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-xl">
            <div className="bg-trust-blue text-white p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                To be the most reliable, transparent, and student-centric educational consultancy, empowering aspiring medical professionals to access world-class education seamlessly. We strive to democratize medical education by making global opportunities accessible to every deserving student.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Transparency</h3>
                    <p className="text-blue-100 text-sm mt-1">Honest counseling without hidden agendas. We provide clear fee structures, genuine campus insights, and realistic expectations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Excellence</h3>
                    <p className="text-blue-100 text-sm mt-1">Partnering exclusively with WHO and NMC recognized top-tier global universities that offer English-medium instruction and world-class clinical exposure.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Guidance</h3>
                    <p className="text-blue-100 text-sm mt-1">End-to-end support for a smooth journey. From initial counseling and visa interviews to international flights and FMGE/NEXT exam coaching.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Bio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trust-blue">Introducing Our Leader</h2>
          <div className="w-16 h-1 bg-whatsapp-green mx-auto mt-4 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden h-[500px] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Founder" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-medium italic">"Education is not just about securing a degree; it's about shaping a mindset that saves lives."</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <h3 className="text-4xl font-bold text-gray-900">Dr. Rahul Sharma</h3>
            <p className="text-trust-blue font-bold text-xl mt-2 mb-6 tracking-wide uppercase">Founder & Managing Director</p>
            <div className="prose prose-lg prose-blue text-gray-600">
              <p className="mb-4">
                Dr. Rahul Sharma is a visionary educationalist and seasoned medical professional with over 15 years of multifaceted experience in the international education sector. Having pursued his own medical education abroad, he intimately understands the challenges, anxieties, and aspirations of Indian students studying in foreign countries. Recognizing the gap between aspiring students and affordable, high-quality medical education, he founded MBBSGroup to serve as a reliable, ethical bridge.
              </p>
              <p className="mb-4">
                His leadership is defined by a hands-on approach. Dr. Sharma's extensive, continuous travels to medical universities across Russia, Georgia, Kazakhstan, and Kyrgyzstan have allowed him to personally audit educational standards, clinical infrastructure, hostel hygiene, and safety measures of partner institutions. He refuses to partner with any university that he wouldn't send his own child to.
              </p>
              <p className="mb-4">
                Beyond administrative excellence, Dr. Sharma is deeply involved in policy advocacy, working closely with international education ministries to ensure the curriculum aligns with NMC (National Medical Commission) guidelines and NEXT (National Exit Test) requirements. He has pioneered integrated coaching programs that prepare students for licensing exams from their very first year of MBBS.
              </p>
              <p>
                Under his visionary leadership, MBBSGroup has transformed the lives of over 5,000 students, guiding them from hesitant applicants to confident, licensed doctors practicing in top healthcare facilities globally. Even today, amidst running a global operation, he continues to personally mentor students, host rigorous counseling seminars, and ensure every student receives the bespoke guidance necessary to manifest their career aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
