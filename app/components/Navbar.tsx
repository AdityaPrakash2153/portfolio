export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-end items-center px-8 py-5">
        <div className="flex gap-10 text-white text-lg">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>

          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}