

export default function Home() {
  return (
    <div className="h-screen">
     <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center md:text-left md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MyApp</h1>
            <p className="text-lg mb-6">Build your projects with ease, powered by our cutting-edge tools and services.</p>
            <a href="#features" className="bg-white text-blue-500 py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-gray-100">Learn More</a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src="https://via.placeholder.com/500" alt="MyApp preview" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
