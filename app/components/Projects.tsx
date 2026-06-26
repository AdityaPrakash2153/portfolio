export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Projects
        </h2>

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-semibold">
            Memory Allocation Simulator
          </h3>

          <p className="mt-4 text-gray-300">
            A command-line Operating Systems simulator implementing
            First Fit, Best Fit, and Worst Fit memory allocation
            algorithms using linked lists with dynamic block splitting
            and free block coalescing.
          </p>

          <div className="flex gap-3 mt-5 flex-wrap">
            <span className="bg-cyan-600 px-3 py-1 rounded">
              C
            </span>
            <span className="bg-cyan-600 px-3 py-1 rounded">
              Operating Systems
            </span>
            <span className="bg-cyan-600 px-3 py-1 rounded">
              Linked Lists
            </span>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/AdityaPrakash2153/memory-simulator"
              target="_blank"
              className="bg-cyan-500 px-5 py-2 rounded hover:bg-cyan-600"
            >
              GitHub
            </a>

            <a
              href="https://memory-simulator--adityaprakash07.replit.app"
              target="_blank"
              className="border border-cyan-500 px-5 py-2 rounded hover:bg-cyan-500"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}