"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Workflow, Code2, Zap, ArrowRight, Bug, Brain, Activity, Mail, Cpu, Globe, Network, Bot, Monitor } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const codeLines = [
  "> Initialize Helix Engine v2.0",
  "[System] Booting Swarm Orchestrator...",
  "[Router] Incoming payload: 'Generate Security Scanner'",
  "[Memory] Injecting Tier 1 RAG skills: security_agents.md",
  "[Planner] Blueprint generated. Enforcing Sandbox restrictions.",
  "> Executing Agent Synthesis...",
  "[Agent] Writing github_scanner.py",
  "✓ Code compiled successfully.",
  "[Test] Running automated security suite...",
  "⚠ Exception caught: Subprocess timeout error.",
  "[Orchestrator] Self-healing sequence initiated...",
  "[Agent] Patching timeout constraints.",
  "✓ Agent successfully deployed to /workspace/custom_agents."
];

const HelixAnimation = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-80 pointer-events-none">
      <div className="flex space-x-3 md:space-x-5">
        {Array.from({ length: 14 }).map((_, i) => {
          const delay = i * 0.15;
          return (
            <div key={i} className="relative h-32 md:h-48 w-px bg-gradient-to-b from-transparent via-white/[0.1] to-transparent flex justify-center">
              <motion.div
                className="absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                animate={{
                  top: ["0%", "100%", "0%"],
                  scale: [1, 0.3, 1],
                  opacity: [1, 0.1, 1],
                  zIndex: [10, 0, 10]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                style={{ marginTop: '-4px' }}
              />
              <motion.div
                className="absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                animate={{
                  top: ["100%", "0%", "100%"],
                  scale: [0.3, 1, 0.3],
                  opacity: [0.1, 1, 0.1],
                  zIndex: [0, 10, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                style={{ marginTop: '-4px' }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TerminalAnimation = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    let isResetting = false;

    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        // Prevent pushing undefined if currentLine somehow gets out of bounds
        if (codeLines[currentLine]) {
          setLines(prev => [...prev, codeLines[currentLine]]);
        }
        currentLine++;
      } else if (!isResetting) {
        isResetting = true;
        // Reset animation after a pause
        setTimeout(() => {
          setLines([]);
          currentLine = 0;
          isResetting = false;
        }, 3000);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 text-left rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/[0.08] shadow-2xl shadow-emerald-500/10 relative">
      {/* Terminal Header */}
      <div className="bg-[#111] px-4 py-3 flex items-center border-b border-white/[0.04]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-gray-500 flex items-center space-x-2">
          <Terminal aria-hidden="true" className="w-3 h-3" />
          <span>helix_orchestrator.sh</span>
        </div>
      </div>
      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm leading-relaxed h-[300px] overflow-hidden relative">
        {lines.map((line, i) => {
          if (!line) return null;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`mb-2 ${line.startsWith('>') ? 'text-white font-medium' : line.startsWith('✓') ? 'text-emerald-400' : line.startsWith('⚠') ? 'text-amber-400' : 'text-gray-400'}`}
            >
              {line}
            </motion.div>
          );
        })}
        {/* Blinking Cursor */}
        <motion.div 
          animate={{ opacity: [1, 0, 1] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-emerald-400 mt-2 inline-block"
        />
        {/* Subtle Fade at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-emerald-500/30 font-sans overflow-hidden">
      
      {/* Subtle Radial Glow Background */}
      <div className="absolute top-0 inset-x-0 h-[800px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#050505]/0 to-transparent pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Zap aria-hidden="true" className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">Helix Engine</span>
          </Link>
          <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
            <Link href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</Link>
            <Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
            <Link href="#architecture" className="text-gray-400 hover:text-white transition-colors">Architecture</Link>
            <Link href="#installation" className="text-gray-400 hover:text-white transition-colors">Setup</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            <a href="https://github.com/vishalvermauts/Helix-Engine" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.06] px-4 py-2 rounded-full transition-all">
              <GithubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-24">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-32 text-center">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-cyan-400 animate-shine">
                Compute, Redefined.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              The Helix Engine is a state-of-the-art framework leveraging a rigorous Three-Tier Defensive Architecture to write, execute, and self-heal Python and Node.js agents dynamically on the fly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#installation" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                <span>Start Building</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="#architecture" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/[0.1] text-white font-medium hover:bg-white/[0.05] transition-colors">
                View Architecture
              </a>
            </div>
            
            {/* Live Terminal Animation Component */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <TerminalAnimation />
            </motion.div>
          </motion.div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Core Use Cases</h2>
            <p className="text-gray-400 max-w-2xl text-lg font-light">The Helix Engine is built for autonomous, complex problem-solving scenarios.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
              <Bug aria-hidden="true" className="h-8 w-8 text-rose-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Automated Triage</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Autonomously reproduce, diagnose, and patch GitHub issues by dynamically deploying self-healing bug fix agents directly into the repository.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-purple-500/30 transition-colors">
              <Brain aria-hidden="true" className="h-8 w-8 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Diagnostic Labs</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Spin up specialized lab environments where Swarm Orchestrators execute persistent, multi-day research tasks without human intervention.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
              <Activity aria-hidden="true" className="h-8 w-8 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Security Auditing</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Continuously scan repositories for vulnerabilities. If a zero-day is found, agents draft, test, and submit pull requests instantly.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-blue-500/30 transition-colors">
              <Zap aria-hidden="true" className="h-8 w-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Performance Tuning</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Deploy agents to profile codebases, identify memory leaks and CPU bottlenecks, and safely refactor critical paths for optimal execution.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-amber-500/30 transition-colors">
              <Code2 aria-hidden="true" className="h-8 w-8 text-amber-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Legacy Migration</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Migrate outdated monolithic code to modern frameworks. The engine understands dependencies, rewrites logic, and enforces unit test coverage.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
              <Workflow aria-hidden="true" className="h-8 w-8 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Infra Generation</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Synthesize complex Terraform, Docker, and Kubernetes configurations on the fly by providing high-level architectural requirements to the Swarm.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Core Engine Capabilities</h2>
            <p className="text-gray-400 max-w-2xl text-lg font-light">Built for scale, the Helix Engine provides everything you need to run autonomous swarms in production.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/30 transition-colors group">
              <Bot aria-hidden="true" className="h-8 w-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Agent Generation</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Request complex agents (Scrapers, Documenters, Security Scanners) and the engine will scaffold, write, test, and save them automatically.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-cyan-500/30 transition-colors group">
              <Globe aria-hidden="true" className="h-8 w-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Webhook Orchestration</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Fully decoupled HTTP design. Expose the endpoint and easily integrate with platforms like Telegram, Discord, or frontend dashboards.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-purple-500/30 transition-colors group">
              <Network aria-hidden="true" className="h-8 w-8 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Dynamic Semantic Routing</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The Triage Router automatically classifies inbound requests to assign the optimal model size and context length for cost-efficiency.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-rose-500/30 transition-colors group">
              <Cpu aria-hidden="true" className="h-8 w-8 text-rose-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Self-Healing Loop</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                If an agent compiles with a syntax error, the orchestrator catches it and feeds the error back into the LLM for silent self-correction.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">The Three-Tier Defense</h2>
            <p className="text-gray-400 max-w-2xl text-lg font-light">To achieve production-grade reliability when LLMs write code, the Helix Engine relies on three synchronized layers of defense.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col h-full">
              <Shield aria-hidden="true" className="h-8 w-8 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Tier 1: Prevention</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Dynamic Skill RAG injects strict semantic constraints before a single line of code is written, ensuring adherence to domain knowledge and avoiding generic hallucinations.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mt-auto">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span><span>Retrieval-Augmented Logic</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span><span>Skill Injection (RAG)</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span><span>System-Prompt Governance</span></li>
              </ul>
            </div>
            
            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col h-full">
              <Code2 aria-hidden="true" className="h-8 w-8 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Tier 2: Enforcement</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                The Planner Agent acts as a Staff Engineer, explicitly wrapping LLM outputs in robust `try/except` loops and enforcing strict sandboxed execution directories.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mt-auto">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span><span>AST Transformation</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span><span>Secure Sandbox Directories</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span><span>Import Whitelisting</span></li>
              </ul>
            </div>

            <div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-blue-500/30 transition-all flex flex-col h-full">
              <Workflow aria-hidden="true" className="h-8 w-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Tier 3: Correction</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                The Swarm Orchestrator intercepts runtime tracebacks and routes syntax errors back into a closed-loop self-healing mechanism, recovering silently without human input.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mt-auto">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span><span>Runtime Traceback Parsing</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span><span>Automated Self-Healing Loop</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span><span>Agent Mutation & Patching</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Deploy the Ecosystem</h2>
            <p className="text-gray-400 max-w-2xl text-lg font-light">The architecture is decoupled. Spin up the headless backend, then deploy the standalone glassmorphic diagnostic dashboard.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Terminal aria-hidden="true" className="h-5 w-5 text-gray-500" />
                <span>1. Helix Engine</span>
              </h3>
              <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-6 font-mono text-sm text-gray-300">
                <p className="text-gray-500 mb-2"># Headless Swarm Orchestrator</p>
                <p>git clone https://github.com/vishalvermauts/Helix-Engine.git</p>
                <p>cd Helix-Engine</p>
                <p>bash setup.sh</p>
              </div>
            </div>

            {/* Gateway */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Network aria-hidden="true" className="h-5 w-5 text-gray-500" />
                <span>2. HelixFlow Gateway</span>
              </h3>
              <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-6 font-mono text-sm text-gray-300">
                <p className="text-gray-500 mb-2"># Enterprise API Proxy & Router</p>
                <p>git clone https://github.com/vishalvermauts/HelixFlow.git</p>
                <p>cd HelixFlow</p>
                <p>pip install -r requirements.txt</p>
                <p>uvicorn helixflow_gateway.bootstrap:create_app --port 8000</p>
              </div>
            </div>

            {/* Frontend */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Monitor aria-hidden="true" className="h-5 w-5 text-gray-500" />
                <span>3. Diagnostic Lab</span>
              </h3>
              <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-xl p-6 font-mono text-sm text-gray-300">
                <p className="text-gray-500 mb-2"># Visual Command Center UI</p>
                <p>git clone https://github.com/vishalvermauts/Helix-Brain-Diagnostic-Lab.git</p>
                <p>cd Helix-Brain-Diagnostic-Lab</p>
                <p>npx serve -l 3000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Lab Dedicated Section */}
        <section id="lab" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-xl mb-6">
                <Terminal aria-hidden="true" className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                3. Diagnostic Lab (Frontend)
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                The Helix Brain Diagnostic Lab acts as the visual command center for the entire agentic swarm. It provides real-time, high-fidelity observability into how the AI thinks, plans, and executes code.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium mb-1">Visual Architecture Rendering</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Automatically maps the multi-agent neural network as it spins up, showing exactly which agents are communicating and sharing memory objects.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium mb-1">Real-Time Traceback Triage</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Watch the self-healing loop in action. The frontend captures Python exceptions live, streams the LLM&apos;s patching strategy, and updates the UI when tests pass.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium mb-1">Sandboxed Testing Sandbox</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Features a built-in terminal emulator that allows developers to manually trigger Swarm commands, inject new skills via the UI, and isolate agent outputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lab UI Mockup / Graphic */}
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-2xl p-2 overflow-hidden aspect-square md:aspect-auto md:h-[600px] flex flex-col">
              <div className="bg-[#111] px-4 py-3 flex items-center border-b border-white/[0.04] rounded-t-xl shrink-0">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs font-mono text-gray-500 flex items-center space-x-2">
                  <span>helix_diagnostic_lab.app</span>
                </div>
              </div>
              <div className="flex-1 p-6 relative">
                {/* Helix DNA Animation */}
                <HelixAnimation />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#111]/80 backdrop-blur border border-white/[0.08] p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-mono text-emerald-400 flex items-center space-x-2">
                        <Activity className="w-3 h-3 animate-pulse" />
                        <span>[System] Helix Engine Sync</span>
                      </div>
                      <div className="text-xs font-mono text-cyan-400">100%</div>
                    </div>
                    <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Mail aria-hidden="true" className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-lg font-light">
              Interested in deploying the Helix Ecosystem at an enterprise scale? Have questions about the Swarm Orchestrator? Reach out to us.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleContactSubmit} className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8 space-y-6 shadow-2xl shadow-emerald-500/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#111] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                    placeholder="John Doe"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#111] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                    placeholder="john@example.com"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#111] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-none"
                  placeholder="How can we help you?"
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-center">
                  {errorMessage}
                </div>
              )}
              {status === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-white text-black font-semibold rounded-lg px-4 py-4 hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}</span>
                {status !== 'loading' && status !== 'success' && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2026 Helix Engine. Open-source under the MIT License.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/vishalvermauts/Helix-Engine" className="text-gray-500 hover:text-white transition-colors">Backend</a>
            <a href="https://github.com/vishalvermauts/HelixFlow" className="text-gray-500 hover:text-white transition-colors">Gateway</a>
            <a href="https://github.com/vishalvermauts/Helix-Brain-Diagnostic-Lab" className="text-gray-500 hover:text-white transition-colors">Frontend</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
