import Image from "next/image";

export default function Central_Gov() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">  

          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Central Government
              <span className="block text-2xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Ensuring Law & Order Nationwide
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Learn how the central government operates to maintain safety and enforce regulations across the country.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mt-24 grid gap-12">
            {["Policy Formation", "Law Enforcement", "Public Safety", "Emergency Response"].map((title, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                      <span className="text-sky-400 text-lg font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-sky-400">Step {index + 1}</div>
                    <h3 className="mt-2 text-xl font-medium text-white">{title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-zinc-400">
                      {title} is a crucial function of the central government ensuring governance and safety.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Features */}
          <div className="mt-24 rounded-2xl bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Security & Governance</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {["National Security", "Judicial System", "Public Awareness"].map((feature, i) => (
                <div key={i} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                      <span className="text-sky-400 text-lg font-bold">{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{feature}</h3>
                  <p className="text-sm text-zinc-400">Ensuring stability, justice, and public knowledge.</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 mb-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Stay Informed, Stay Safe</h2>
            <a 
              href="https://ncwapps.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400"
            >
              Learn More
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
