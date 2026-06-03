import Link from 'next/link';
import { Search, ChevronRight, Calendar, User, Tag } from 'lucide-react';

export default function BlogPage() {
  const articles = [
    { title: "What is NEXT Exam? Everything You Need to Know", date: "August 15, 2024", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Maharashtra CET Cell Admission Process 2024", date: "August 10, 2024", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Top 5 Countries for MBBS Abroad with Low Budget", date: "August 02, 2024", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "NEET UG 2024 Cutoff Analysis and Trends", date: "July 28, 2024", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "FMGE 2024 Passing Rate: Why is it low?", date: "July 15, 2024", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "MBBS in Russia vs Georgia: A Detailed Comparison", date: "July 01, 2024", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Hero Banner with Breadcrumbs */}
      <div className="relative w-full h-[250px] flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-trust-blue/80" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
        <div className="relative z-10 flex items-center space-x-2 text-sm text-blue-100 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Blog</span>
        </div>
      </div>

      {/* 70/30 Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column (Grid of Articles) - 70% */}
          <div className="w-full lg:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full border border-gray-100">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.img} 
                      alt={article.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1 text-trust-blue" /> {article.date}</span>
                      <span className="flex items-center"><User className="w-4 h-4 mr-1 text-trust-blue" /> Admin</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-trust-blue transition-colors line-clamp-2">
                      <Link href="#">{article.title}</Link>
                    </h2>
                    <div className="mt-auto">
                      <Link href="#" className="inline-flex items-center font-semibold text-trust-blue text-sm hover:underline">
                        Read Article <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center space-x-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-trust-blue text-white font-medium shadow-md">1</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white text-gray-600 font-medium border border-gray-200 hover:bg-gray-50 transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white text-gray-600 font-medium border border-gray-200 hover:bg-gray-50 transition-colors">3</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Right Column (Sidebar Widgets) - 30% */}
          <aside className="w-full lg:w-[30%] space-y-8">
            
            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search keyword..." 
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue/50 focus:border-trust-blue text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-trust-blue text-white p-2 rounded-md hover:bg-trust-blue-light transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Author/Admin Profile Card */}
            <div className="bg-trust-blue rounded-xl shadow-md p-6 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Admin Profile" 
                className="w-24 h-24 rounded-full border-4 border-white/20 mx-auto mb-4 object-cover relative z-10"
              />
              <h3 className="text-xl font-bold relative z-10">Welcome to Our Blog</h3>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed relative z-10">
                Your reliable source for the latest medical admission updates, university reviews, and counseling tips from our expert team.
              </p>
            </div>

            {/* Categories List */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {[
                  { name: "MBBS in India", count: 12 },
                  { name: "MBBS Abroad", count: 24 },
                  { name: "NEET Counselling", count: 8 },
                  { name: "University Reviews", count: 15 },
                  { name: "Exam Updates", count: 6 }
                ].map((category, index) => (
                  <li key={index}>
                    <Link href="#" className="flex justify-between items-center group">
                      <span className="text-gray-600 group-hover:text-trust-blue font-medium transition-colors text-sm">{category.name}</span>
                      <span className="bg-blue-50 text-trust-blue text-xs font-bold px-2 py-1 rounded-md group-hover:bg-trust-blue group-hover:text-white transition-colors">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <Link href="#" key={index} className="flex items-start group">
                    <img 
                      src={`https://images.unsplash.com/photo-[placeholder]?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`.replace('[placeholder]', ['1434030216411-0b793f4b4173', '1522202176988-66273c2fd55f', '1541339907198-e08756dedf3f'][index])} 
                      alt="Thumbnail" 
                      className="w-16 h-16 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 group-hover:text-trust-blue transition-colors line-clamp-2 leading-snug">
                        {articles[index].title}
                      </h4>
                      <span className="text-xs text-gray-500 mt-1 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {articles[index].date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags Cloud */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-trust-blue" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['MBBS', 'NEET', 'Abroad', 'Counselling', 'Russia', 'Georgia', 'MCI', 'NMC', 'Cutoff'].map(tag => (
                  <Link 
                    key={tag} 
                    href="#" 
                    className="px-3 py-1.5 border border-gray-200 text-gray-600 text-xs font-medium rounded-full hover:border-trust-blue hover:text-trust-blue hover:bg-blue-50 transition-all"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
