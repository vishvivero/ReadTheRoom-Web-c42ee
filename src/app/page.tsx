'use client';

import React, { useState, useEffect } from 'react';
import { Chrome, Zap, MessageSquare, Target, BarChart3, ChevronRight, Check, Star, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">ReadTheRoom</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all active:scale-95">
            Add to Chrome
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full -z-10" />

          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-medium mb-8 animate-fade-in">
              <Zap className="w-3 h-3 fill-current" />
              <span>Powered by Groq for 500ms responses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-[1.1]">
              Don't just reply. <br className="hidden md:block" /> Start conversations that convert.
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              Strategic AI-powered replies for X, LinkedIn, Reddit, and Product Hunt. Built for founders who want to build authority without spending all day on social.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group">
                <Chrome className="w-5 h-5" />
                Add to Chrome — It's Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="text-white font-medium">400+</span> founders shipping
                </div>
              </div>
            </div>

            {/* Product UI Preview */}
            <div className="mt-20 relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full -z-10 opacity-50" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
                <div className="rounded-xl border border-white/5 bg-[#0a0a0a] overflow-hidden aspect-[16/9] flex flex-col">
                  {/* Mock Browser Header */}
                  <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="h-5 w-1/2 bg-white/5 rounded-md flex items-center px-3 text-[10px] text-gray-500">
                        x.com/post/status/123456789
                      </div>
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="flex-1 p-8 flex gap-8">
                    <div className="flex-1 space-y-4">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5" />
                        <div className="space-y-2 flex-1">
                          <div className="h-4 w-32 bg-white/10 rounded" />
                          <div className="h-4 w-full bg-white/5 rounded" />
                          <div className="h-4 w-3/4 bg-white/5 rounded" />
                        </div>
                      </div>
                      <div className="ml-13 border-l-2 border-white/5 pl-6 py-2">
                        <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">AI SUGGESTION</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Score: 94%</span>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed italic">
                            "This is exactly why velocity matters more than perfection. Your point about shipping in public resonates with what we're seeing in the indie dev space right now. Great share!"
                          </p>
                          <button className="w-full py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 text-xs font-bold rounded-lg transition-colors border border-indigo-500/30">
                            Use this reply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-64 space-y-4 hidden lg:block">
                      <div className="p-4 rounded-xl border border-white/5 bg-white/5 space-y-4">
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <Target className="w-4 h-4 text-indigo-500" />
                          Strategic Settings
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Focus Topic</label>
                          <div className="h-8 bg-white/5 border border-white/10 rounded flex items-center px-2 text-[11px] text-gray-300">Indie Hacking</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Persona</label>
                          <div className="h-8 bg-white/5 border border-white/10 rounded flex items-center px-2 text-[11px] text-gray-300">Direct & Insightful</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-12">Works seamlessly across</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
              {['X (Twitter)', 'LinkedIn', 'Reddit', 'Product Hunt'].map(p => (
                <div key={p} className="text-xl md:text-2xl font-bold tracking-tight text-white grayscale hover:grayscale-0 transition-all cursor-default">{p}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Reply with intent.</h2>
              <p className="text-gray-400 text-lg">Everything you need to grow your social authority on autopilot.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-yellow-500" />,
                  title: "Instant Context",
                  desc: "Analyzes the entire post and thread context in milliseconds to ensure your reply actually makes sense."
                },
                {
                  icon: <Target className="w-6 h-6 text-indigo-500" />,
                  title: "Strategic Goals",
                  desc: "Set focus topics like 'Product Marketing' or 'Networking' to guide the AI toward your business goals."
                },
                {
                  icon: <BarChart3 className="w-6 h-6 text-green-500" />,
                  title: "Engagement Scoring",
                  desc: "Each suggestion comes with a predicted engagement score so you can choose the highest impact option."
                }
              ].map((f, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.07] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-20 bg-indigo-600/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {[
                { step: "01", title: "Add to Chrome", desc: "Install the extension and link your Groq API key for blazing fast responses." },
                { step: "02", title: "Click the AI Button", desc: "You'll see a new 'AI' icon next to every reply button on X, LinkedIn, and Reddit." },
                { step: "03", title: "Choose Your Strategy", desc: "Pick from 3 context-aware suggestions, edit if needed, and hit send." }
              ].map((s, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <span className="text-5xl font-black text-white/10 italic">{s.step}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                    <p className="text-gray-400 text-lg">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing.</h2>
              <p className="text-gray-400 text-lg">Start for free and scale as you grow.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <div className="p-8 rounded-3xl border border-white/5 bg-white/5 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Free Forever</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {[
                    "10 AI replies per day",
                    "Works on X and LinkedIn",
                    "Standard engagement scoring",
                    "Groq API integration",
                    "Community support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="p-8 rounded-3xl border-2 border-indigo-500 bg-indigo-500/5 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-500 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$12</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {[
                    "Unlimited AI replies",
                    "Custom Writing Persona",
                    "Priority Platform Access (Reddit/PH)",
                    "Advanced Strategy Presets",
                    "Priority Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                      <Check className="w-4 h-4 text-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="p-16 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build your <br /> social authority?</h2>
                <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center gap-3 mx-auto shadow-2xl">
                  <Chrome className="w-6 h-6" />
                  Install ReadTheRoom
                </button>
                <p className="mt-6 text-white/70 font-medium">No credit card required to start.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <Target className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold tracking-tight">ReadTheRoom</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://x.com/vishvivero" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <p className="text-sm text-gray-500">© 2026 ReadTheRoom. Built by Vish.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
