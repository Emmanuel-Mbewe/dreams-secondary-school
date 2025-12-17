import Link from 'next/link';

const Home = () => {
  // Images for the highlights — replace with your school images!
  const academicsImage = '/images/academics.jpg';
  const admissionsImage = '/images/admissions.jpg';
  const newsImage = '/images/news.jpg';

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Dreams_Secondary_School_Background_Image.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Zomba Vocational Training Center (ZVTC)
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          The Key To a Perfect Future.
          </p>
          <p className="text-xl md:text-1xl mb-8 max-w-2xl">
          Empowering young minds to achieve their dreams through quality education and holistic development.
          </p>
          <Link
            href="/about"
            className="px-8 py-3 bg-blue-700 hover:bg-blue-700 rounded-full text-lg font-semibold transition duration-300"
          >
            Explore Our School
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      Discover Our School
    </h2>

    {/* Centered Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {/* Academics Card */}
      <Link
        href="/academics"
        className="group block relative overflow-hidden rounded-lg shadow-lg w-80"
      >
        <img
          src={academicsImage}
          alt="Academics"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white">Academics</h3>
        </div>
      </Link>

      {/* Admissions Card */}
      <Link
        href="/admissions"
        className="group block relative overflow-hidden rounded-lg shadow-lg w-80"
      >
        <img
          src={admissionsImage}
          alt="Admissions"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white">Admissions</h3>
        </div>
      </Link>

      {/* News & Events Card */}
      <Link
        href="/news"
        className="group block relative overflow-hidden rounded-lg shadow-lg w-80"
      >
        <img
          src={newsImage}
          alt="News and Events"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
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
