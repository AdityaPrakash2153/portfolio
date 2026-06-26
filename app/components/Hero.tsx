import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-500 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-2">
            Aditya Prakash
          </h1>

          <h2 className="text-2xl text-gray-400 mt-4">
            Computer Science Engineering Student
          </h2>

          <p className="mt-6 text-gray-500 leading-8">
            Passionate about Full Stack Development,
            Cloud Computing, Networking and Software Engineering.
          </p>

          <a
            href="/projects"
            className="inline-block mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
  <div className="w-[360px] h-[360px] rounded-full border-4 border-blue-500 overflow-hidden flex items-center justify-center">
    <Image
      src="/images/profile.jpeg"
      alt="Profile"
      width={320}
      height={320}
      priority
      className="rounded-full"
    />
  </div>
</div>

      </div>
    </section>
  );
}