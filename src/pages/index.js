import Link from 'next/link';
import Image from 'next/image';

// Images — replace with your school images
const academicsImage = '/images/academics.jpg';
const admissionsImage = '/images/admissions.jpg';
const newsImage = '/images/news.jpg';
const heroImage = '/images/Dreams_Secondary_School_Background_Image.png';

const Home = () => {
  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Zomba Vocational Training Center (ZVTC)
          </h1>
          <p className="text-lg md:text-2xl mb-4 max-w-3xl">
            The Key To a Perfect Future.
          </p>
          <p className="text-md md:text-lg mb-8 max-w-2xl">
            Empowering young minds to achieve their dreams through quality education and holistic development.
          </p>

          <Link
            href="/about"
            className="px-8 py-3 bg-orange-800 hover:bg-orange-700 rounded-full text-lg font-semibold transition duration-300"
          >
            Explore Our School
          </Link>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-700 mb-12">
            Discover Our School
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            
            {/* Academics Card */}
            <Link
              href="/academics"
              className="group block relative overflow-hidden rounded-lg shadow-lg w-full max-w-xs"
            >
              <div className="relative w-full h-64">
                <Image
                  src={academicsImage}
                  alt="Academics programs at ZVTC"
                  fill
                  className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-orange-500/20 to-black/50 group-hover:opacity-90 transition duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Academics</h3>
              </div>
            </Link>

            {/* Admissions Card */}
            <Link
              href="/admissions"
              className="group block relative overflow-hidden rounded-lg shadow-lg w-full max-w-xs"
            >
              <div className="relative w-full h-64">
                <Image
                  src={admissionsImage}
                  alt="Admissions at ZVTC"
                  fill
                  className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-orange-500/20 to-black/50 group-hover:opacity-90 transition duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Admissions</h3>
              </div>
            </Link>

            {/* News & Events Card */}
            <Link
              href="/news"
              className="group block relative overflow-hidden rounded-lg shadow-lg w-full max-w-xs"
            >
              <div className="relative w-full h-64">
                <Image
                  src={newsImage}
                  alt="News and Events at ZVTC"
                  fill
                  className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-orange-500/20 to-black/50 group-hover:opacity-90 transition duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">News & Events</h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
