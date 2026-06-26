export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white pt-2 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Projects
        </h2>

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700">
          <h3 className="text-2xl font-semibold">
            Memory Allocation Simulator
          </h3>

          <p className="mt-4 text-gray-300 leading-7">
            A command-line Operating Systems simulator implementing
            First Fit, Best Fit, and Worst Fit memory allocation
            algorithms using linked lists with dynamic block splitting
            and free block coalescing.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">
              C
            </span>

            <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">
              Operating Systems
            </span>

            <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">
              Linked Lists
            </span>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/AdityaPrakash2153/memory-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
            >
              GitHub
            </a>

            <a
              href="https://memory-simulator--adityaprakash07.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 hover:bg-cyan-500 px-5 py-2 rounded-lg transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}