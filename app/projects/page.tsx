export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-cyan-400 mb-12">
          My Projects
        </h1>

        <div className="bg-slate-900 rounded-xl border border-slate-700 p-8">
          <h2 className="text-3xl font-bold">
            Memory Allocation Simulator
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            Command-line Operating Systems simulator implementing
            First Fit, Best Fit and Worst Fit memory allocation
            algorithms using linked lists with dynamic block splitting
            and free block coalescing.
          </p>

          <div className="flex gap-3 flex-wrap mt-6">
            <span className="bg-cyan-600 px-3 py-1 rounded-full">C</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">
              Operating Systems
            </span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">
              Linked Lists
            </span>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/AdityaPrakash2153/memory-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
            >
              GitHub
            </a>

            <a
              href="https://memory-simulator--adityaprakash07.replit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}