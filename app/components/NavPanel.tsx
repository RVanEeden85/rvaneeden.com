export default function NavPanel() {
  return (
    <nav className="border-t md:border-t-0 md:border-b border-white/30 fixed bottom-0 md:bottom-auto md:top-0 left-1/2 transform -translate-x-1/2 flex gap-6 bg-black/30 px-10 py-4 rounded-b-4xl backdrop-blur-sm text-md md:text-xl">
      <a href="#home" className="hover:text-blue-400 transition">Home</a>
      <a href="#about" className="hover:text-blue-400 transition">About</a>
      <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
      <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </nav>
  );
}
