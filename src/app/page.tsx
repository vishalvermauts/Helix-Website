"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Workflow, Code2, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-emerald-500/30 font-sans overflow-hidden">
      
      {/* Subtle Radial Glow Background */}
      <div className="absolute top-0 inset-x-0 h-[800px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#050505]/0 to-transparent pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
              <Zap className="h-3 w-3 text-emerald-400" />
            </div>
            <span className="font-semibold text-white tracking-tight">Helix Ecosystem</span>
          </div>
          <div className="flex space-x-4 items-center text-sm font-medium">
            <Link href="#architecture" className="text-gray-400 hover:text-white transition-colors">Architecture</Link>
            <Link href="#installation" className="text-gray-400 hover:text-white transition-colors">Setup</Link>
            <a href="https://github.com/vishalvermauts/Helix-Engine" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.06] px-4 py-2 rounded-full transition-all">
              <GithubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs font-medium text-emerald-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>v2.0 Architecture Live</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-6">
              Autonomous Agentic <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Compute, Redefined.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              The Helix Engine is a state-of-the-art framework leveraging a rigorous Three-Tier Defensive Architecture to write, execute, and self-heal Python and Node.js agents dynamically on the fly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#installation" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                <span>Start Building</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#architecture" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/[0.1] text-white font-medium hover:bg-white/[0.05] transition-colors">
                View Architecture
              </a>
            </div>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section id="architecture" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">The Three-Tier Defense</h2>
            <p className="text-gray-400 max-w-2xl text-lg font-light">To achieve production-grade reliability when LLMs write code, the Helix Engine relies on three synchronized layers of defense.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
              <Shield className="h-8 w-8 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Tier 1: Prevention</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Dynamic Skill RAG injects strict semantic constraints before a single line of code is written, ensuring adherence to domain knowledge and avoiding generic hallucinations.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
              <Code2 className="h-8 w-8 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Tier 2: Enforcement</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The Planner Agent acts as a Staff Engineer, explicitly wrapping LLM outputs in robust `try/except` loops and enforcing sandboxed execution directories.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-blue-500/30 transition-all">
              <Workflow className="h-8 w-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Tier 3: Correction</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The Swarm Orchestrator intercepts runtime tracebacks and routes syntax errors back into a closed-loop self-healing mechanism, recovering silently without human input.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Deploy the Ecosystem</h2>
            <p className="text-gray-400 max-w-2xl text-lg font-light">The architecture is decoupled. Spin up the headless backend, then deploy the standalone glassmorphic diagnostic dashboard.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Backend */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-gray-500" />
                <span>1. Helix Engine (Backend)</span>
              </h3>
              <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-6 font-mono text-sm text-gray-300">
                <p className="text-gray-500 mb-2"># Clone and start the FastAPI engine</p>
                <p>git clone https://github.com/vishalvermauts/Helix-Engine.git</p>
                <p>cd Helix-Engine</p>
                <p>pip install -r requirements.txt</p>
                <p>uvicorn server:app --host 0.0.0.0 --port 8000</p>
              </div>
            </div>

            {/* Frontend */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-gray-500" />
                <span>2. Diagnostic Lab (Frontend)</span>
              </h3>
              <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-6 font-mono text-sm text-gray-300">
                <p className="text-gray-500 mb-2"># Clone the standalone UI and serve</p>
                <p>git clone https://github.com/vishalvermauts/Helix-Brain-Diagnostic-Lab.git</p>
                <p>cd Helix-Brain-Diagnostic-Lab</p>
                <p>npx serve -l 3000</p>
                <p className="text-emerald-400 mt-4"># Connect via cloudflared tunnel!</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2026 Helix Engine Ecosystem. Open-source under the MIT License.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/vishalvermauts/Helix-Engine" className="text-gray-500 hover:text-white transition-colors">Backend GitHub</a>
            <a href="https://github.com/vishalvermauts/Helix-Brain-Diagnostic-Lab" className="text-gray-500 hover:text-white transition-colors">Frontend GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
