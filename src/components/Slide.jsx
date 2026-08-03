import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const DynamicIcon = ({ name, className }) => {
  if (!name) return null;
  const IconComponent = LucideIcons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
};

const slideVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export default function Slide({ slide, direction }) {
  const renderContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center w-full mt-12 md:mt-24 text-center pb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight gradient-text py-2">
              {slide.title}
            </h1>
            <h2 className="text-2xl md:text-4xl text-slate-300 font-semibold mt-4">
              {slide.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed whitespace-pre-line mt-6">
              {slide.content}
            </p>
            {slide.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-12 w-full max-w-4xl mx-auto">
                {slide.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center space-y-2 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm">
                    {stat.icon && <DynamicIcon name={stat.icon} className="w-10 h-10 text-indigo-400 mb-2" />}
                    <span className="text-4xl md:text-5xl font-bold text-blue-400">{stat.value}</span>
                    <span className="text-sm md:text-base text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
        
      case 'expectations':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {slide.myths.map((myth, i) => (
              <div key={i} className="bg-slate-900/60 p-8 rounded-3xl border border-slate-700/60 flex flex-col items-center text-center shadow-xl">
                <div className={`p-5 rounded-full mb-6 ${myth.isMyth ? 'bg-rose-950/40 text-rose-400' : 'bg-emerald-950/40 text-emerald-400'}`}>
                  <DynamicIcon name={myth.icon} className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">{myth.question}</h3>
                <p className="text-xl text-slate-400 leading-relaxed">{myth.answer}</p>
              </div>
            ))}
          </div>
        );

      case 'architecture':
        return (
          <div className="flex flex-col items-center justify-center mt-12 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 w-full max-w-6xl">
              
              <div className="flex flex-col items-center p-8 bg-slate-900/80 rounded-3xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] w-full lg:w-72">
                <DynamicIcon name="MonitorSmartphone" className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-slate-100">Client</h3>
                <p className="text-blue-300 font-medium mt-2">React.js</p>
                <p className="text-sm text-slate-400 mt-2 text-center">UI & Interactivity</p>
              </div>

              <div className="hidden lg:flex flex-col items-center justify-center w-24">
                <span className="text-sm font-bold text-slate-500 uppercase mb-2">JSON</span>
                <DynamicIcon name="ArrowRightLeft" className="w-8 h-8 text-slate-600" />
              </div>

              <div className="flex flex-col items-center p-8 bg-slate-900/80 rounded-3xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] w-full lg:w-72">
                <DynamicIcon name="Server" className="w-16 h-16 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-slate-100">Server</h3>
                <p className="text-emerald-300 font-medium mt-2">Node + Express</p>
                <p className="text-sm text-slate-400 mt-2 text-center">API & Logic</p>
              </div>

              <div className="hidden lg:flex flex-col items-center justify-center w-24">
                <span className="text-sm font-bold text-slate-500 uppercase mb-2">JSON</span>
                <DynamicIcon name="ArrowRightLeft" className="w-8 h-8 text-slate-600" />
              </div>

              <div className="flex flex-col items-center p-8 bg-slate-900/80 rounded-3xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] w-full lg:w-72">
                <DynamicIcon name="Database" className="w-16 h-16 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-slate-100">Database</h3>
                <p className="text-purple-300 font-medium mt-2">MongoDB</p>
                <p className="text-sm text-slate-400 mt-2 text-center">Data Storage</p>
              </div>

            </div>
          </div>
        );

      case 'code_peek':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full max-w-6xl mx-auto">
            <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-sm text-slate-400 font-mono">App.jsx (React)</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-[15px] font-mono leading-loose">
                  <code className="text-slate-300">
                    <span className="text-purple-400">export default function</span> <span className="text-blue-300">App</span>() {'{'}<br/>
                    {'  '}<span className="text-purple-400">const</span> [users, setUsers] = <span className="text-blue-300">useState</span>([]);<br/><br/>
                    {'  '}<span className="text-blue-300">useEffect</span>(() =&gt; {'{'}<br/>
                    {'    '}<span className="text-emerald-300">fetch</span>(<span className="text-amber-300">'/api/users'</span>)<br/>
                    {'      '}.<span className="text-blue-300">then</span>(res =&gt; res.<span className="text-blue-300">json</span>())<br/>
                    {'      '}.<span className="text-blue-300">then</span>(data =&gt; <span className="text-blue-300">setUsers</span>(data));<br/>
                    {'  '}{'}'}, []);<br/><br/>
                    {'  '}<span className="text-purple-400">return</span> (<br/>
                    {'    '}&lt;<span className="text-rose-400">div</span>&gt;<br/>
                    {'      '}{'{'}users.<span className="text-blue-300">map</span>(u =&gt; &lt;<span className="text-rose-400">UserCard</span> <span className="text-amber-300">key</span>={'{'}u.id{'}'} <span className="text-amber-300">user</span>={'{'}u{'}'} /&gt;){'}'}<br/>
                    {'    '}&lt;/<span className="text-rose-400">div</span>&gt;<br/>
                    {'  '});<br/>
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-sm text-slate-400 font-mono">server.js (Express)</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-[15px] font-mono leading-loose">
                  <code className="text-slate-300">
                    <span className="text-purple-400">import</span> express <span className="text-purple-400">from</span> <span className="text-amber-300">'express'</span>;<br/>
                    <span className="text-purple-400">import</span> User <span className="text-purple-400">from</span> <span className="text-amber-300">'./models/User.js'</span>;<br/><br/>
                    <span className="text-purple-400">const</span> app = <span className="text-blue-300">express</span>();<br/><br/>
                    app.<span className="text-blue-300">get</span>(<span className="text-amber-300">'/api/users'</span>, <span className="text-purple-400">async</span> (req, res) =&gt; {'{'}<br/>
                    {'  '}<span className="text-purple-400">try</span> {'{'}<br/>
                    {'    '}<span className="text-purple-400">const</span> users = <span className="text-purple-400">await</span> User.<span className="text-blue-300">find</span>();<br/>
                    {'    '}res.<span className="text-blue-300">json</span>(users);<br/>
                    {'  '}{'}'} <span className="text-purple-400">catch</span> (err) {'{'}<br/>
                    {'    '}res.<span className="text-blue-300">status</span>(<span className="text-amber-400">500</span>).<span className="text-blue-300">json</span>({'{'} <span className="text-emerald-300">error</span>: err.message {'}'});<br/>
                    {'  '}{'}'}<br/>
                    {'}'});<br/><br/>
                    app.<span className="text-blue-300">listen</span>(<span className="text-amber-400">3000</span>);
                  </code>
                </pre>
              </div>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="flex flex-col items-center text-center mt-12 w-full max-w-5xl mx-auto space-y-16 pb-12">
            <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed font-light">
              {slide.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {slide.steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-slate-900/40 rounded-3xl border border-slate-700/50 shadow-xl">
                  {step.icon && <DynamicIcon name={step.icon} className="w-12 h-12 text-indigo-400 mb-6" />}
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 px-12 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-2xl rounded-full shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all transform hover:scale-105 active:scale-95">
              {slide.buttonText}
            </button>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-8">
            {slide.content && (
              <p className="text-2xl text-slate-300 leading-relaxed max-w-4xl">{slide.content}</p>
            )}
            {slide.sections && (
              <div className="space-y-12 mt-8">
                {slide.sections.map((sec, i) => (
                  <div key={i} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-2xl font-bold text-indigo-400 mb-4">{sec.heading}</h3>
                    {sec.text && <p className="text-xl text-slate-300 leading-relaxed whitespace-pre-line">{sec.text}</p>}
                    {sec.list && (
                      <ul className="list-disc list-inside space-y-3 text-xl text-slate-300">
                        {sec.list.map((item, j) => (
                          <li key={j} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    )}
                    {sec.note && (
                      <div className="mt-6 p-4 bg-blue-950/40 border-l-4 border-blue-500 rounded-r-lg">
                        <p className="text-lg text-blue-200 italic">{sec.note}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'table':
        return (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-700 shadow-2xl">
            <table className="w-full min-w-max text-left text-xl">
              <thead className="bg-slate-800/80 backdrop-blur text-slate-200">
                <tr>
                  {slide.headers.map((h, i) => (
                    <th key={i} className="px-8 py-5 font-bold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 bg-slate-900/40">
                {slide.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/60 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-8 py-5 ${j === 0 ? 'font-semibold text-indigo-300' : 'text-slate-300'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'grid':
        return (
          <div className="space-y-8 mt-4">
            {slide.content && <p className="text-2xl text-slate-300 max-w-5xl leading-relaxed">{slide.content}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {slide.columns.map((col, i) => (
                <div key={i} className="bg-slate-900/60 p-8 rounded-3xl border border-slate-700/60 shadow-xl hover:border-indigo-500/50 transition-colors flex flex-col items-center text-center">
                  {col.icon && <DynamicIcon name={col.icon} className="w-10 h-10 text-indigo-400 mb-4" />}
                  <h3 className="text-2xl font-bold text-slate-200 mb-6">{col.heading}</h3>
                  <ul className="space-y-4 w-full text-left">
                    {col.items.map((item, j) => (
                      <li key={j} className="text-lg text-slate-300 flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1">●</span>
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'lesson_module':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {slide.lessons.map((lesson, i) => (
              <div key={i} className="bg-slate-900/60 rounded-3xl border border-slate-700/60 overflow-hidden shadow-xl hover:border-indigo-500/50 transition-colors flex flex-col">
                <div className="bg-slate-800/60 px-8 py-6 border-b border-slate-700/60 flex items-center">
                  {lesson.icon && <DynamicIcon name={lesson.icon} className="w-8 h-8 text-indigo-400 mr-4 shrink-0" />}
                  <h3 className="text-2xl font-bold text-slate-100">{lesson.title}</h3>
                </div>
                <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
                  <div className="space-y-6 text-left w-full">
                    {lesson.topics.map((topic, j) => (
                      <div key={j} className="flex flex-col border-b border-slate-800/50 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-lg font-bold text-indigo-300 mb-1">{topic.name}</h4>
                        <p className="text-slate-400 text-[15px] leading-relaxed">{topic.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {slide.projects.map((proj, i) => (
              <div key={i} className="group bg-slate-900/60 p-8 rounded-3xl border border-slate-700/60 hover:bg-slate-800/80 hover:border-blue-500/50 transition-all cursor-default shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-8xl font-black italic">{i + 1}</span>
                </div>
                {proj.icon && <DynamicIcon name={proj.icon} className="w-10 h-10 text-indigo-400 mb-4 relative z-10" />}
                <h3 className="text-2xl font-bold text-slate-100 mb-2 relative z-10">{proj.title}</h3>
                <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm font-bold rounded-full border border-blue-800/50 mb-6 relative z-10">
                  {proj.stack}
                </div>
                <p className="text-lg text-slate-400 leading-relaxed relative z-10">{proj.desc}</p>
              </div>
            ))}
          </div>
        );
        
      case 'quote':
        return (
          <div className="flex flex-col items-center w-full mt-12 md:mt-24 pb-12">
            <blockquote className="max-w-4xl text-center">
              <p className="text-4xl md:text-5xl font-light italic text-slate-300 leading-relaxed">&ldquo;{slide.quote}&rdquo;</p>
              {slide.author && (
                <footer className="mt-12 text-2xl font-semibold text-indigo-400">
                  — {slide.author}
                </footer>
              )}
            </blockquote>
          </div>
        );

      default:
        return <div>Slide content type "{slide.type}" not found.</div>;
    }
  };

  return (
    <motion.div
      key={slide.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
      className="absolute inset-0 w-full h-full flex flex-col pt-8 px-6 md:px-16 overflow-y-auto custom-scrollbar pb-28"
    >
      {slide.type !== 'title' && slide.type !== 'quote' && (
        <header className="mb-6 shrink-0 mt-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-2">{slide.title}</h2>
          {slide.subtitle && <p className="text-xl md:text-2xl font-medium text-indigo-400">{slide.subtitle}</p>}
        </header>
      )}
      <div className="w-full pb-8">
        {renderContent()}
      </div>
    </motion.div>
  );
}
