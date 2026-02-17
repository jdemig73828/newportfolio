import React, { useState, useEffect, useRef } from 'react';

// Recuerda descomentar la siguiente línea en tu proyecto local para activar Analytics:
import { Analytics } from "@vercel/analytics/react" 

import { 
  TrendingUp, 
  ShieldCheck, 
  FileText, 
  Layout, 
  Brain, 
  Users, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Search, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  MessageSquare, 
  Sparkles, 
  Award, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Target, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  Component, 
  ExternalLink 
} from 'lucide-react';

// --- DATA: EXPERIENCIA ---
const EXPERIENCE = [
  {
    id: 'trayectoria',
    company: 'VOCENTO',
    role: 'UX - UI & Behavioral Designer',
    period: '2023 - Actualidad',
    description: 'Estrategia corporativa de usuarios para ABC y medios regionales.',
    bullets: ['Optimización de CRO mediante Behavioral Design.', 'Rediseño de flujos de pago y registro.'],
    isCurrent: true
  },
  {
    id: 'trayectoria',
    company: 'SOPRA STERIA (EGGS)',
    role: 'UX - UI & Behavioral Designer',
    period: '2018 - 2023',
    description: 'Diseño estratégico para clientes Tier-1 (BBVA, Allianz, Endesa).',
    bullets: ['Gestión integral de procesos UX de punta a punta.', 'Liderazgo de Focus Groups y dinámicas de ideación.'],
    isCurrent: false
  },
  {
    id: 'trayectoria',
    company: 'EVERIS (NTT DATA)',
    role: 'UX - UI Designer',
    period: '2018',
    description: 'Investigación y diseño visual para banca y telecomunicaciones.',
    bullets: ['Fase de descubrimiento e investigación etnográfica.', 'Diseño visual y prototipado de alto nivel.'],
    isCurrent: false
  }
];

// --- DATA: PROYECTOS ---
const PROJECTS_PORTFOLIO = [
  {
    id: "bbva-app",
    client: "BBVA",
    title: "App Suggestions & Feedback Loop",
    pages: "Págs. 2-6",
    type: "Mobile App",
    description: "Diseño de la funcionalidad para que clientes voten propuestas de mejora e implementación de menús visuales IVR.",
    tech: ["UI Architecture", "Interactive Prototypes", "Feedback UX"],
    impact: "Mejora directa en el engagement del usuario.",
    device: "mobile",
    imageUrl: "https://lh3.googleusercontent.com/d/1kv2rmJGoLaUr04-hZYeAOQ5Ji3o4ZUGd"
  },
  {
    id: "bbva-manager",
    client: "BBVA Talento y Cultura",
    title: "Portal 'Mi Espacio - Manager'",
    pages: "Págs. 7-9",
    type: "Web Portal",
    description: "Creación del portal de gestión para mánagers aplicando componentes de BBVA Experience para tareas de T&C.",
    tech: ["Design Systems", "Management Tools"],
    impact: "Centralización operativa de procesos internos.",
    device: "desktop",
    imageUrl: "https://lh3.googleusercontent.com/d/1bIAUAiuTCZ-4K-Xm2EcgWREnv8iMNEQa"
  },
  {
    id: "endesa-retos",
    client: "Endesa / EnergiaXXI",
    title: "Retos de Ahorro & Área Cliente",
    pages: "Págs. 20-28",
    type: "Behavioral Web",
    description: "Gamificación del ahorro energético mediante economía del comportamiento y visualización de datos.",
    tech: ["Behavioral Design", "CRO", "Data Visualization"],
    impact: "Fomento del ahorro energético activo.",
    device: "mobile",
    imageUrl: "https://lh3.googleusercontent.com/d/16IvGDArPVt4TzqLjII3oUYhK4hGN_i3O"
  },
  {
    id: "allianz-funnel",
    client: "Allianz",
    title: "Funnel Quote & Buy Autos",
    pages: "Págs. 29-33",
    type: "Fintech Web App",
    description: "Optimización del funnel de contratación de pólizas de autos para agentes internos de la compañía.",
    tech: ["Funnel Optimization", "Service Design"],
    impact: "Aumento en la tasa de cierre de pólizas.",
    device: "desktop",
    imageUrl: "https://lh3.googleusercontent.com/d/18Rnl7maW55OJ5K4NBXiCX_WP_oyJq64O"
  },
  {
    id: "mercadona-docs",
    client: "Mercadona",
    title: "Gestión Documental Empleado",
    pages: "Págs. 34-35",
    type: "Native Employee App",
    description: "Aplicación para la gestión de nóminas, certificados y comunicaciones internas para empleados en tienda.",
    tech: ["Employee Experience", "Internal Tools", "Mobile UI"],
    impact: "Digitalización total de RRHH en el punto de venta.",
    device: "mobile",
    imageUrl: "https://lh3.googleusercontent.com/d/1b6LGfVoD3t1Q22MKRuR8zMaF6fNmoHn9"
  },
  {
    id: "jcyl-stilus",
    client: "JCyL",
    title: "Sistema STILUS Profesores",
    pages: "Págs. 36-38",
    type: "Logistics Admin",
    description: "Plataforma de control horario y asignación de materias para el cuerpo docente regional.",
    tech: ["Enterprise Software", "Logistics UI"],
    impact: "Eficiencia operativa en la gestión educativa.",
    device: "desktop",
    imageUrl: "https://lh3.googleusercontent.com/d/1cViWWt6yYY7dl5_6m_WAiA3vzNl405Pg"
  }
];

// --- LOGOS DATA ---
const COMPANY_LOGOS = [
  "1STUfc0ag2gsMnnrdsrWDVDbw_yKwOlQV",
  "12NgyFEW77ZX5TNwEhckhBREqNlcWxIqK",
  "1NStHfjwKDXL52UFaVWPWaAaiDjlCLM51",
  "1XvwhRA4U6lrRTNIbuB_7IHTFZZGWhlOS",
  "19yw-0xDlF1YxjISxGOqCaTXwexSbUl2K",
  "1WEzUoul7Qa19HItHrlYzPNGMgR3o8XzN",
  "1mVqZvbAmHsX7znSPLrhVL-HpC3bcqJzA",
  "1zRXeN6Tew9sj_pQ23z7qTnbqr2mJxnAG",
  "1UgV2Z8E-KbxoQke9kuppcELv06pMxhNo",
  "1ecziKMXP-JfEXy1cJUz-F5PJfL_Lrvce",
  "1o5kIyh4KQS3P7RzSecJtsyzMt0ImYWfy",
  "1JnOHjdPPBu9OCBkbH29mrRPcZm1W2NYt"
];

// --- TESTIMONIALS DATA ---
const TESTIMONIALS = [
  { 
    id: 1, 
    name: "Daniel Solana", 
    initials: "DS", 
    color: "bg-blue-50 text-blue-600", 
    role: "Design Lead en BBVA", 
    text: "He trabajado con Javier siendo su responsable durante mucho tiempo y puedo decir que es un gran profesional. Siempre proactivo, se adelanta a las necesidades y las resuelve de manera correcta y eficiente. Buen compañero y buena persona. Poco más se le puede pedir a alguien que trabaja contigo." 
  },
  { 
    id: 2, 
    name: "Carlos Relloso", 
    initials: "CR", 
    color: "bg-slate-100 text-slate-700", 
    role: "CIO en Prisa Digital", 
    text: "Trabajé con Javier en PRISA y algo que siempre valoré de él es su capacidad para combinar la creatividad en el diseño con la lógica de negocio, entendiendo que esta última obliga a priorizar los mensajes por encima de una pura razón estética. Además, siempre ha tenido claro que la creatividad surge de la integración entre diseño y tecnología, siendo esta última un elemento clave en el desarrollo de cualquier proceso creativo." 
  },
  { 
    id: 3, 
    name: "Raúl Lazcano", 
    initials: "RL", 
    color: "bg-blue-100 text-blue-700", 
    role: "UX Narrative en BBVA", 
    text: "El compromiso de Javier con el diseño es único. Siempre está pensando en hacer las cosas un poco mejor, en cuidar el detalle que marca la diferencia en la experiencia y en los resultados. Está constantemente formándose. Disfruta de lo que hace. ¡Y se nota en cada trabajo!" 
  },
  { 
    id: 4, 
    name: "César Nuñez", 
    initials: "CN", 
    color: "bg-orange-50 text-orange-600", 
    role: "Director en Addoor", 
    text: "Actitud super positiva, muchos conocimientos y polivalencia: Javier es un gran profesional. Enhorabuena." 
  },
  { 
    id: 5, 
    name: "Juanjo Rogado", 
    initials: "JR", 
    color: "bg-blue-50 text-blue-600", 
    role: "Design Lead en BBVA", 
    text: "Profesional sólido y comprometido, con un excelente control de los tiempos y una actitud siempre proactiva. Destaca por su capacidad para trabajar en equipo y aportar valor de forma constante." 
  },
  { 
    id: 6, 
    name: "Elena Segura", 
    initials: "ES", 
    color: "bg-yellow-100 text-yellow-600", 
    role: "Ux Senior Designer en Vocento", 
    text: "He trabajado con Javier en Vocento y es el compañero que te saluda todos los días con una nueva idea para un proyecto, que quiere probar nuevas herramientas y plantea retos continuamente. Su versatilidad hace que aporte en cualquier punto de la investigación y su capacidad para relacionarse con toda la estructura de la compañía facilita el trabajo transversal. Si añadimos que es una excelente persona, es muy fácil colaborar con él." 
  },
  { 
    id: 7, 
    name: "José Ángel Díez Orive", 
    initials: "JD", 
    color: "bg-red-100 text-red-600", 
    role: "Analista Programador en Natural Adabas en INSS", 
    text: "Buen profesional y buen compañero trabajando en equipo. Aprecio mucho su compromiso y esfuerzo constante en cada proyecto." 
  },
  { 
    id: 8, 
    name: "Fabiola Jurado", 
    initials: "FJ", 
    color: "bg-cyan-100 text-cyan-600", 
    role: "HR Manager en MERCADONA", 
    text: "La digitalización de nuestros procesos internos fue mucho más fluida gracias a su diseño centrado en el empleado y su facilidad de uso." 
  },
  { 
    id: 9, 
    name: "Guillermo Velasco", 
    initials: "GV", 
    color: "bg-indigo-100 text-indigo-600", 
    role: "Innovation Lead en JCYL", 
    text: "Referente en arquitectura de información. Logró simplificar sistemas administrativos densos en herramientas intuitivas y modernas." 
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('trayectoria');
  const scrollContainerRef = useRef(null);

  // --- SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['trayectoria', 'evidencias', 'ecosistema', 'testimonios'];
      let current = activeSection;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = sectionId;
            break;
          }
        }
      }
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollTestimonials = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 scroll-smooth overflow-x-hidden text-left">
      
      {/* --- NAVEGACIÓN --- */}
      <nav className="sticky top-0 z-50 bg-[#0A192F]/95 backdrop-blur-md border-b border-white/10 px-4 md:px-6 py-4 text-left">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 bg-[#0A192F] shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/d/17ORXUmh_mO98eebsidvJYTDwcBQOYkRU" 
                alt="Logo" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/100x100/0A192F/2563EB?text=JD'; }}
              />
            </div>
            <span className="font-heading font-bold text-white text-lg tracking-tight truncate max-w-[150px] md:max-w-none">Javier de Miguel</span>
          </div>
          
          <div className="hidden md:flex gap-10 text-[11px] font-heading font-bold uppercase tracking-[0.1em] relative items-center">
            {['trayectoria', 'evidencias', 'ecosistema', 'testimonios'].map((id) => (
              <a 
                key={id}
                href={`#${id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(id);
                }}
                className={`transition-all duration-300 relative py-2 ${activeSection === id ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300 ${activeSection === id ? 'opacity-100' : 'opacity-0'}`}></span>
              </a>
            ))}
          </div>
          
          <a href="mailto:jdemig@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full text-[11px] font-heading font-bold hover:bg-blue-500 transition-all shadow-lg shrink-0 tracking-wider">Contacto</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="bg-[#0A192F] text-white py-12 md:py-32 px-4 md:px-6 relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none translate-x-1/4 hidden lg:block">
          <TrendingUp size={700} strokeWidth={0.5} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-heading font-bold rounded-full tracking-widest uppercase text-left">
              <Award size={14} /> + de 20 años de experiencia estratégica
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-light leading-[1.05] tracking-tight text-left">
              Diseñando <br />
              <span className="text-blue-500 font-normal">Resultados</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0 font-sans text-left">
              Transformando comportamientos de usuario en <span className="text-white font-semibold italic border-b-2 border-blue-500">valor de negocio cuantificable</span> mediante evidencia científica.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-8 pt-4 text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-left">
                <a href="#evidencias" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 text-sm tracking-wide text-left">
                  Explorar Evidencias <ArrowRight size={18} />
                </a>
                <a href="https://www.linkedin.com/in/Javier-de-miguel-torres" target="_blank" className="flex items-center gap-2 border border-slate-700 px-8 py-4 rounded-2xl font-heading font-bold hover:bg-slate-800 transition-all text-sm tracking-wide text-left">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
              
              <a 
                href="https://drive.google.com/file/d/1M6yrhdBHCVU4ZzVONCtD9xVAgzmCWqbZ/view?usp=sharing" 
                target="_blank"
                className="text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 underline decoration-slate-600 underline-offset-8 font-sans mb-4 lg:mb-0 text-left"
              >
                <FileText size={18} /> ver CV
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center relative mt-12 lg:mt-0 order-2">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white/5 rounded-[60px] md:rounded-[80px] rotate-0 shadow-2xl flex items-center justify-center border border-white/10 relative overflow-hidden group mb-12 lg:mb-0">
               <img 
                 src="https://lh3.googleusercontent.com/d/1UESCm7MPMFoFdKKNRhszqEX42Z88pw-c" 
                 alt="Seal" 
                 className="w-full h-full object-contain p-6 drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]"
               />
            </div>
            
            <div className="lg:absolute lg:-bottom-6 lg:-left-6 bg-[#0A192F] p-5 md:p-6 rounded-[35px] md:rounded-[45px] shadow-2xl border border-blue-500/30 flex items-center gap-4 animate-in fade-in zoom-in duration-700 text-left">
               <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl shadow-inner"><ShieldCheck size={32} /></div>
               <div className="pr-2 text-left">
                 <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">Estrategia Senior</p>
                 <p className="text-xs md:text-sm font-bold text-white leading-tight font-heading text-left">Influence Practitioner<br/><span className="text-blue-400 font-medium italic">Expert Solutions</span></p>
               </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 -translate-y-8 md:translate-y-[-5rem]">
        
        {/* SKILLS DASHBOARD */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 md:mb-32 text-left">
           {[
             { label: "Behavioral Design", val: "95%", icon: <Brain /> },
             { label: "CRO & Funnels", val: "92%", icon: <TrendingUp /> },
             { label: "Design Systems", val: "90%", icon: <Component /> },
             { label: "AI Integration", val: "85%", icon: <Zap /> }
           ].map((s, i) => (
             <div key={i} className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-100 shadow-sm flex items-center gap-5 hover:border-blue-200 transition-all group text-left">
                <div className="text-blue-600 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="text-left"><p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight text-left">{s.label}</p><p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading text-left">{s.val}</p></div>
             </div>
           ))}
        </section>

        {/* --- TRAYECTORIA --- */}
        <section id="trayectoria" className="mb-24 md:mb-32 scroll-mt-32 text-left">
          <SectionHeader title="Trayectoria Senior" subtitle="Cronología de impacto estratégico en corporaciones globales." />
          <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 rounded-full"></div>
            <div className="space-y-16 md:space-y-24 text-left">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 md:w-6 md:h-6 -translate-x-1/2 bg-white border-4 border-blue-600 rounded-full z-10 shadow-lg"></div>
                  <div className="w-full md:w-5/12 text-left">
                    <div className="bg-white p-8 md:p-10 rounded-[40px] md:rounded-[50px] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group text-left">
                      <span className="text-[10px] font-heading font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full uppercase mb-5 inline-block tracking-widest text-left">{exp.period}</span>
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-[#0A192F] mb-1 leading-tight text-left">{exp.company}</h3>
                      <p className="text-sm font-heading font-semibold text-slate-400 mb-6 uppercase tracking-wider text-left">{exp.role}</p>
                      <ul className="space-y-3">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 text-xs md:text-sm text-slate-600 text-left leading-relaxed font-sans">
                            <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-20 relative z-10 px-4 text-left">
              <a 
                href="https://www.linkedin.com/in/javier-de-miguel-torres/details/experience/" 
                target="_blank"
                className="flex items-center gap-3 border border-slate-200 bg-white text-slate-600 px-10 py-5 rounded-[2rem] font-heading font-bold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm text-sm tracking-wide"
              >
                ver más experiencias <Linkedin size={20} className="text-slate-400" />
              </a>
            </div>
          </div>
        </section>

        {/* --- EVIDENCIAS --- */}
        <section id="evidencias" className="mb-24 md:mb-32 scroll-mt-32 text-left">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-16 gap-10 text-left">
            <SectionHeader title="Selección Visual de Interfaces" subtitle="Capturas reales que documentan soluciones técnicas y procesos de alto nivel." />
            <div className="flex flex-wrap gap-6 justify-start md:justify-end w-full lg:w-auto items-center text-left">
              <a href="https://www.linkedin.com/in/javier-de-miguel-torres/details/experience/urn:li:fsd_profilePosition:(ACoAAAHiTVABe6KeNEe--kkZtNyynUCxBaWlRuA,2252765168)/treasury/" target="_blank" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 bg-white px-6 py-3.5 rounded-2xl font-heading font-bold hover:bg-blue-600 hover:text-white transition-all text-xs tracking-wider uppercase text-left">lo más actual <ArrowRight size={16} /></a>
              <a href="https://drive.google.com/file/d/1gIM9M-mlU6RepB05VvD0JUcCCaqpzIyu/view?usp=sharing" target="_blank" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-heading font-bold hover:bg-blue-500 transition-all shadow-lg text-xs tracking-wider uppercase text-left"><FileText size={18} /> Portafolio PDF</a>
              
              <a 
                href="https://drive.google.com/file/d/1ooQJZeeJYsTLYn11CkeaxN24EEf5orbb/view?usp=sharing" 
                target="_blank" 
                className="text-sm font-heading font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 underline underline-offset-4 decoration-slate-300 hover:decoration-blue-400 text-left"
              >
                <Component size={18} /> Documentación de componentes
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-left">
            {PROJECTS_PORTFOLIO.map((p, idx) => (
              <div key={idx} className="bg-white rounded-[45px] md:rounded-[55px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full border-b-[10px] hover:border-b-blue-600 relative text-left">
                <div className="h-64 md:h-80 bg-slate-100 relative overflow-hidden text-left">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-heading font-bold text-white border border-white/20 font-heading">PDF {p.pages}</div>
                  <div className="absolute bottom-6 right-6 text-white/50">{p.device === 'mobile' ? <Smartphone size={22} /> : <Monitor size={22} />}</div>
                </div>
                <div className="p-8 md:p-12 flex-1 text-left">
                  <div className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-heading font-bold rounded-full uppercase tracking-widest border border-slate-100 w-fit mb-5 font-heading text-left">{p.client}</div>
                  <h4 className="text-xl md:text-2xl font-heading font-black text-[#0A192F] mb-4 group-hover:text-blue-600 transition-colors leading-tight text-left">{p.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-8 font-light font-sans text-left">{p.description}</p>
                  <div className="flex flex-wrap gap-2 text-left">{p.tech.map((t, i) => (<span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-heading font-bold rounded-lg uppercase tracking-tighter">{t}</span>))}</div>
                </div>
                <div className="px-8 md:px-12 pb-8 md:pb-12 text-left">
                   <div className="p-5 bg-[#F8FAFC] rounded-3xl border border-slate-100 flex items-start gap-4 text-left">
                      <Target size={22} className="text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs md:text-sm font-bold text-slate-700 leading-normal font-sans italic text-left">"{p.impact}"</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- MÓDULO ECOSISTEMA --- */}
      <section id="ecosistema" className="w-full bg-white py-24 px-6 md:py-32 scroll-mt-20 border-t border-slate-100 text-left">
        <div className="max-w-7xl mx-auto text-left">
          <SectionHeader 
            title="Ecosistema Colaborativo" 
            subtitle="Impacto estratégico a través de una trayectoria en marcas líderes de diversos sectores. Otras marcas con las que he colaborado:" 
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center mt-12 text-left">
             {COMPANY_LOGOS.map((id, index) => (
               <div key={index} className="flex flex-col items-center group relative w-full h-20 justify-center text-left">
                 <img 
                    src={`https://lh3.googleusercontent.com/d/${id}`}
                    alt={`Logo Empresa ${index + 1}`}
                    className="max-h-12 w-auto object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-110"
                 />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- MÓDULO TESTIMONIOS --- */}
      <section id="testimonios" className="w-full bg-[#f4f4f4] py-24 px-6 md:py-32 scroll-mt-20 text-left overflow-hidden">
        <div className="max-w-7xl mx-auto relative text-left">
          <SectionHeader 
            title="Esto dicen de mí" 
            subtitle="Opiniones y comentarios de ex compañeros y responsables en mi trayectoria profesional." 
          />
          
          <div className="relative group text-left">
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 p-4 bg-white rounded-full shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 p-4 bg-white rounded-full shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 pt-4 px-2 text-left"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {TESTIMONIALS.map((t) => (
                <div 
                  key={t.id} 
                  className="min-w-[85vw] md:min-w-[400px] bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 snap-center flex flex-col hover:shadow-xl transition-shadow duration-500 text-left"
                >
                  <div className="flex items-center gap-4 mb-8 text-left">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-lg ${t.color}`}>
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <p className="font-heading font-bold text-[#0A192F] text-left">{t.name}</p>
                      <p className="text-[11px] text-slate-400 font-sans tracking-wide uppercase text-left">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans italic text-left">
                    "{t.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A192F] py-24 md:py-32 px-4 md:px-6 border-t border-white/5 text-left font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 text-left">
          <div className="space-y-8 text-left">
            <h4 className="text-white text-4xl md:text-6xl font-heading font-black leading-tight text-left">Javier <span className="text-blue-500">de Miguel</span></h4>
            <p className="text-slate-400 text-xs md:text-sm tracking-[0.3em] uppercase font-heading font-bold text-left opacity-80">Designing Behaviors • Optimizing ROI</p>
            <div className="flex gap-5 text-left">
              <a href="https://www.linkedin.com/in/Javier-de-miguel-torres" target="_blank" className="p-5 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all text-white text-left"><Linkedin size={28} /></a>
              <a href="mailto:jdemig@gmail.com" className="p-5 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all text-white text-left"><Mail size={28} /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 text-slate-500 text-left">
             <div className="space-y-5 text-left">
                <p className="text-white font-heading font-bold mb-4 uppercase text-[11px] tracking-[0.2em] text-left">Ubicación</p>
                <p className="text-xs md:text-sm flex items-center gap-3 font-medium text-left"><MapPin size={18} className="text-blue-600" /> MADRID, ES</p>
             </div>
             <div className="space-y-5 text-left">
                <p className="text-white font-heading font-bold mb-4 uppercase text-[11px] tracking-[0.2em] text-left">Especialidad</p>
                <p className="text-xs md:text-sm font-medium text-left text-left text-left">Behavioral Sci.</p>
                <p className="text-xs md:text-sm font-medium text-left text-left text-left">Product Strategy</p>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
           <p className="text-[10px] text-slate-600 font-heading uppercase tracking-widest font-bold text-left text-left">© 2026 JDM</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap');
        .font-heading { font-family: 'Sora', sans-serif; }
        .font-sans { font-family: 'Manrope', sans-serif; }
        body { font-family: 'Manrope', sans-serif; -webkit-font-smoothing: antialiased; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(37, 99, 235, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(37, 99, 235, 0.4); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
      
      {/* Recuerda descomentar esto en producción: */}
      {<Analytics/> }
    </div>
  );
}

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-left mb-10 md:mb-20">
    <div className="inline-block h-1 w-16 bg-blue-600 mb-6 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)] text-left"></div>
    <h2 className="text-4xl md:text-7xl font-heading font-light text-[#0A192F] mb-6 tracking-tighter leading-[1] text-left">{title}</h2>
    <p className="text-slate-500 max-w-3xl text-lg md:text-xl font-light leading-relaxed font-sans text-left">{subtitle}</p>
  </div>
);