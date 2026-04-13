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
  ExternalLink,
  ArrowUp,
  Menu,
  X
} from 'lucide-react';

// --- DATA: EXPERIENCIA ---
const EXPERIENCE = [
  {
    id: 'trayectoria',
    company: 'VOCENTO',
    role: 'UX - UI & Behavioral Designer',
    period: '2023 - 2026',
    description: 'Estrategia corporativa de usuarios para ABC y medios regionales.',
    bullets: ['Optimización de CRO mediante Behavioral Design.', 'Rediseño de flujos de pago, login/registro y piezas de captación.', 'Diseño y ejecución de research cuantitativo y cualitativo.', 'IA Powered con base en investigación y análisis de datos.'],
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

// --- GALLERY IMAGES DATA ---
const GALLERY_IMAGES = [
  "1xMu5M2Kup6yzPoWUxMLxghYa7xl8aGSU",
  "1pMZfLkJzKUuTb98VEP-GOVtxn0C5HGIc",
  "1l-398jT0xUUjey1bKBOVSt3iWhrGVAgH",
  "1t3BoKS7cRDtE0rvqd4wvACmToDQNWdQc",
  "1VyD5cFTYZK0VaTMM3D_T3T1XQiU1ljsK",
  "1dyEjMI2rEgZuyQ_MlW1m0HZja1iWVjg7",
  "1r3l8--OIOOlj9URQO_BfmmNVaEaIzI9d",
  "1rRUiiT7DrcoPH_FKg_1bXAyMfGIeXIK7",
  "1rvZs9U5Qr4fZ1VOSiDKAtFYlptKq-fQ_"
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
    role: "CDO en PRISA Radio y PRISA Noticias", 
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
    name: "Roberto Moreno Durán", 
    initials: "RD", 
    color: "bg-cyan-100 text-cyan-600", 
    role: "Digital Project Manager UX & Procesos en Sopra Steria (Mercadona)", 
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
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollContainerRef = useRef(null);
  const scrollGalleryRef = useRef(null); // Ref para la galería

  // --- LOCK SCROLL ON MOBILE MENU ---
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // --- SCROLL SPY & TOP BUTTON LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      // Logic for Floating Top Button
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }

      // Logic for active section menu
      const sections = ['trayectoria', 'evidencias', 'proceso', 'ecosistema', 'testimonios'];
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTestimonials = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollGallery = (direction) => {
    if (scrollGalleryRef.current) {
      const { scrollLeft, clientWidth } = scrollGalleryRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollGalleryRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 scroll-smooth overflow-x-hidden text-left relative">
      
      {/* BOTÓN FLOTANTE VOLVER ARRIBA */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-6 md:right-8 z-50 p-4 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <ArrowUp size={24} />
      </button>

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
          
          <div className="hidden lg:flex gap-10 text-[11px] font-heading font-bold uppercase tracking-[0.1em] relative items-center">
            {['trayectoria', 'evidencias', 'proceso', 'ecosistema', 'testimonios'].map((id) => (
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
          
          <a href="mailto:jdemig@gmail.com" className="hidden lg:inline-flex bg-blue-600 text-white px-5 py-2 rounded-full text-[11px] font-heading font-bold hover:bg-blue-500 transition-all shadow-lg shrink-0 tracking-wider">Contacto</a>
          
          {/* Botón Menú Hamburguesa (Móvil y Tablet) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white p-2 hover:text-blue-400 transition-colors"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
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
              Transformando comportamientos de usuario en <span className="text-white font-semibold italic border-b-2 border-blue-500">valor de negocio cuantificable </span> mediante evidencia científica generando "impacto" de manera responsable.
            </p>
            <p className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0 font-sans text-left">
              Me muevo en la intersección entre la Influencia Ética, el ciclo de vida del usuario y la conversión. Escríbeme y te detallaré la estrategia detrás de mis proyectos: el reto, la investigación y las decisiones clave.<br/><span className="text-white font-semibold italic border-b-2 border-blue-500">Estoy a tu entera disposición.</span>
            </p>  
            <div className="flex flex-col items-center lg:items-start gap-8 pt-4 text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-left">
                <a href="#proceso" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 text-sm tracking-wide text-left">
                  Explorar Procesos <ArrowRight size={18} />
                </a>
              </div>
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
        <section className="mb-24 md:mb-32 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
             {[
               { label: "Behavioral Design", val: "95%", icon: <Brain /> },
               { label: "CRO & Funnels", val: "92%", icon: <TrendingUp /> },
               { label: "Design Systems", val: "90%", icon: <Component /> },
               { label: "AI Integration", val: "85%", icon: <Zap /> }
             ].map((s, i) => (
               <div key={i} className="bg-white p-6 md:p-8 rounded-[30px] border border-blue-200 shadow-sm flex items-center gap-5 transition-all group text-left">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <div className="text-left"><p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight text-left">{s.label}</p><p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading text-left">{s.val}</p></div>
               </div>
             ))}
          </div>
          
          <div className="flex justify-center relative z-10 px-4 text-left">
            <a 
              href="https://www.linkedin.com/in/Javier-de-miguel-torres" 
              target="_blank"
              className="flex items-center gap-3 border border-slate-200 bg-white text-slate-600 px-10 py-5 rounded-[2rem] font-heading font-bold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm text-sm tracking-wide"
            >
              LinkedIn <Linkedin size={20} className="text-slate-400" />
            </a>
          </div>
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
            
            <div className="flex flex-col items-center justify-center mt-20 relative z-10 px-4 text-center gap-6">
              <a 
                href="https://www.linkedin.com/in/javier-de-miguel-torres/details/experience/" 
                target="_blank"
                className="flex items-center gap-3 border border-slate-200 bg-white text-slate-600 px-10 py-5 rounded-[2rem] font-heading font-bold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm text-sm tracking-wide"
              >
                Ver más experiencias <Linkedin size={20} className="text-slate-400" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1dPaHMr4JFKgnDb6UXbDCzGGl0pRjqAAi/view?usp=sharing" 
                target="_blank"
                className="text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 font-sans mt-4"
              >
                <FileText size={18} /> Ver CV
              </a>
            </div>
          </div>
        </section>

        {/* --- EVIDENCIAS --- */}
        <section id="evidencias" className="mb-24 md:mb-32 scroll-mt-32 text-left">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-16 gap-10 text-left">
            <SectionHeader title="Selección Visual de Interfaces" subtitle="Capturas reales que documentan soluciones técnicas y procesos de alto nivel." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-left">
            {PROJECTS_PORTFOLIO.map((p, idx) => (
              <div key={idx} className="bg-white rounded-[45px] md:rounded-[55px] overflow-hidden border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-2xl transition-all group flex flex-col h-full relative text-left">
                <div className="h-64 md:h-80 bg-slate-100 relative overflow-hidden text-left">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-heading font-bold text-white border border-blue-500 shadow-md whitespace-nowrap">PDF {p.pages}</div>
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

          {/* --- BOTONES DE ENLACES (PORTAFOLIO, ACTUALIDAD, DOCS) --- */}
          <div className="flex flex-wrap gap-6 justify-center items-center mt-16 w-full text-center">
            <a href="https://drive.google.com/file/d/1gIM9M-mlU6RepB05VvD0JUcCCaqpzIyu/view?usp=sharing" target="_blank" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-heading font-bold hover:bg-blue-500 transition-all shadow-lg text-xs tracking-wider uppercase"><FileText size={18} /> Portafolio PDF</a>
            
            <a href="https://www.linkedin.com/in/javier-de-miguel-torres/details/experience/urn:li:fsd_profilePosition:(ACoAAAHiTVABe6KeNEe--kkZtNyynUCxBaWlRuA,2252765168)/treasury/" target="_blank" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 bg-white px-6 py-3.5 rounded-2xl font-heading font-bold hover:bg-blue-600 hover:text-white transition-all text-xs tracking-wider uppercase">lo más actual <ArrowRight size={16} /></a>
            
            <a 
              href="https://drive.google.com/file/d/1ooQJZeeJYsTLYn11CkeaxN24EEf5orbb/view?usp=sharing" 
              target="_blank" 
              className="text-sm font-heading font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 underline underline-offset-4 decoration-slate-300 hover:decoration-blue-400"
            >
              <Component size={18} /> Documentación de componentes
            </a>
          </div>

          {/* --- GALERÍA DE EVIDENCIAS --- */}
          <div className="mt-16 md:mt-24 relative group text-left max-w-7xl mx-auto px-2">
            <button 
              onClick={() => scrollGallery('left')}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white rounded-full shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollGallery('right')}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white rounded-full shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={scrollGalleryRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 pt-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {GALLERY_IMAGES.map((imgId, idx) => (
                <div key={idx} className="min-w-full snap-center flex justify-center items-center px-4 md:px-12">
                  <img 
                    src={`https://lh3.googleusercontent.com/d/${imgId}`}
                    alt={`Galería de diseño ${idx + 1}`}
                    className="w-full h-auto object-contain bg-transparent"
                    style={{ maxHeight: '85vh' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- CITA PRE-PROCESO --- */}
          <div className="mt-20 md:mt-28 max-w-4xl mx-auto px-8 md:px-16 text-center flex flex-col items-center">
            <div className="relative inline-block">
              <span className="text-7xl md:text-8xl text-blue-400 font-serif absolute -top-8 -left-4 md:-top-10 md:-left-12 leading-none select-none">“</span>
              <p className="text-lg md:text-2xl font-light text-slate-500 leading-relaxed font-sans relative z-10 px-2">
                Escríbeme y te detallaré la estrategia detrás de mis proyectos: el reto, la investigación y las decisiones clave. <br/>
                <span className="font-black text-blue-600 mt-4 inline-block">100% disponible</span>
              </p>
              <span className="text-7xl md:text-8xl text-blue-400 font-serif absolute -bottom-12 -right-2 md:-bottom-14 md:-right-10 leading-none select-none">”</span>
            </div>
            <a href="mailto:jdemig@gmail.com" className="mt-16 inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 text-sm tracking-wide relative z-20">
              <Mail size={18} /> Contactar
            </a>
          </div>

        </section>

        {/* --- NUEVA SECCIÓN: EL PROCESO --- */}
        <section id="proceso" className="mb-24 md:mb-32 scroll-mt-32 text-left">
          <SectionHeader title="Diseñando Resultados" subtitle={<span className="font-bold text-blue-600">El Proceso <span className="font-black">(End to End)</span></span>} />
          
          <div className="mb-12">
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed font-sans max-w-5xl">
              Explora a continuación cúal ha sido el proceso de diseño de resultados con diferentes necesidades.
            </p>
          </div>

          {/* Caja Proceso 1: Flujo de Login y Registro VOCENTO */}
          <div className="bg-[#EEF2F8] p-8 md:p-12 lg:p-16 rounded-[40px] md:rounded-[60px] border border-slate-200 relative text-left mb-16">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#0A192F] mb-4 leading-tight">Flujo de login y registro en VOCENTO</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 font-heading font-bold px-4 py-1.5 rounded-full text-xs tracking-tight shrink-0 w-fit">
                  Necesidad
                </span>
                <p className="text-slate-600 text-lg md:text-xl font-medium">Rediseño de flujos para usuarios anónimos y registrados.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-left">
              {/* Step 1 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Search size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">1. Descubrimiento</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Análisis de requisitos con el objetivo estratégico de escalar el volumen de registros y <i>logins</i> en todo el ecosistema digital (Web & App).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Target size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">2. Definición</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Auditoría de los flujos existentes e identificación de barreras de conversión. Validación de hipótesis de mejora en alineación continua con los <i>Stakeholders</i>.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Layout size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">3. Diseño</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Eliminación sistemática de fricción cognitiva: visibilidad clara de la gratuidad, reducción de campos cognitivos ("Baby-Steps") y aplicación de sesgos ("nudges") para guiar al usuario. Todo bajo una estricta estrategia <i>mobile-first</i> (70% del tráfico).
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <TrendingUp size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide leading-tight">4. Entrega y seguimiento</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Implementación transversal en la plataforma de identidad (EVOLOK) y monitorización analítica (Adobe Customer Journey), logrando un aumento significativo y escalable de usuarios identificados.
                  </p>
                </div>
              </div>
            </div>

            {/* SECCIÓN GOALS */}
            <div className="mt-10 p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-5 transition-transform hover:-translate-y-1">
              <div className="p-4 bg-slate-50 text-[#0A192F] rounded-2xl shrink-0">
                <Award size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-lg font-heading font-black text-[#0A192F] mb-3 uppercase tracking-widest">Goals</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  <strong className="text-blue-500">Incremento sostenido en la tasa de éxito de logueos y registros</strong> (Estándar y Social Login), impactando directamente en el volumen de usuarios identificados y <strong className="text-blue-500">disparando el crecimiento de nuevas suscripciones</strong> en el periodo de mayo de 2023 a agosto de 2025.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans mt-3">
                  <strong className="text-slate-900">Goal de Behavioral Design:</strong>
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1.5 text-sm md:text-base text-blue-600 font-medium font-sans">
                  <li>Aplicar el Efecto de Progreso Dotado para aumentar la motivación del usuario y asegurar que finalice el registro sin percibir un esfuerzo excesivo.</li>
                </ul>
              </div>
            </div>

            {/* RESUMEN DE IMPACTO */}
            <div className="mt-16">
              <h4 className="text-lg font-heading font-black text-[#0A192F] mb-6 ml-2">Resumen de impacto del rediseño - UX & Behavioral Design</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Impact Card 1 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Volumen Total (ABC + Medios)</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">168.747 <span className="text-sm font-medium text-slate-500 font-sans">activos</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">118.380 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2026)</span>
                          <span className="font-bold text-[#0A192F] text-xs">168.747 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">+42,5%</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">En capacidad de conversión y retención neta</span>
                    </div>
                  </div>
                </div>

                {/* Impact Card 2 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Valor (ARPU) ABC</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">98,00 €</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Junio 2024)</span>
                          <span className="font-bold text-slate-500 text-xs">86,00 €</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Ene 2026)</span>
                          <span className="font-bold text-[#0A192F] text-xs">98,00 €</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">+13,9%</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">En la calidad del registro y predisposición al pago</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGEN DE RESULTADOS */}
            <div className="mt-12 flex justify-center items-center w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1rVuLFE10h6ZQqwFfr1wTpzBw30OE1fSS" 
                alt="Métricas y Resultados" 
                className="w-3/4 md:w-1/3 max-w-sm lg:max-w-md h-auto object-contain"
              />
            </div>

          </div>

          {/* Caja Proceso 2: Piezas de captación VOCENTO */}
          <div className="bg-[#EEF2F8] p-8 md:p-12 lg:p-16 rounded-[40px] md:rounded-[60px] border border-slate-200 relative text-left mb-16">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#0A192F] mb-4 leading-tight">Piezas de captación VOCENTO</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 font-heading font-bold px-4 py-1.5 rounded-full text-xs tracking-tight shrink-0 w-fit">
                  Necesidad
                </span>
                <p className="text-slate-600 text-lg md:text-xl font-medium">Rediseño estratégico de piezas para maximizar la conversión de usuarios.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-left">
              {/* Step 1 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Search size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">1. Descubrimiento</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Adaptación a la nueva arquitectura de monetización (EVOLOK) estableciendo como KPI principal la maximización de la tasa de conversión en el embudo superior.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Target size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">2. Definición</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Diagnóstico de fricciones en el embudo de captación e ideación de soluciones estructuradas en heurísticas de <i>Behavioral Design</i>, validadas directamente a nivel de negocio.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Layout size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">3. Diseño</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Rediseño integral de UI (Paywalls, PopUps, Landings). Aplicación de diseño cognitivo para dirigir la atención: reducción de la sobrecarga de opciones (Ley de Hick), fortalecimiento de influencia social (testimonios expertos) e integración de fuertes <i>drivers</i> de acción (aversión a la pérdida y promesas de cancelación flexible).
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <TrendingUp size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide leading-tight">4. Entrega y seguimiento</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Despliegue de los nuevos componentes y establecimiento de un <i>roadmap</i> de iteración continua. Configuración de tests A/B para asegurar la optimización constante en todos los canales.
                  </p>
                </div>
              </div>
            </div>

            {/* SECCIÓN GOALS */}
            <div className="mt-10 p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-5 transition-transform hover:-translate-y-1">
              <div className="p-4 bg-slate-50 text-[#0A192F] rounded-2xl shrink-0">
                <Award size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-lg font-heading font-black text-[#0A192F] mb-3 uppercase tracking-widest">Goals</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  <strong className="text-blue-500">Aumento exponencial del CTR (Click-Through Rate) y paso a funnel</strong> en todas las cabeceras. La optimización elevó la atribución de marca, clarificó la propuesta de valor y disparó el índice de confianza percibida, validado mediante data cuantitativa y sesiones cualitativas moderadas.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans mt-3">
                  <strong className="text-slate-900">Goals de Behavioral Design:</strong> Garantizar la Fluidez Cognitiva en toda la plataforma, asegurando que el usuario aprenda el sistema una sola vez y reduciendo su fatiga de uso recurrente. Generación de impacto y “nudges” para la toma de decisión:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1.5 text-sm md:text-base text-blue-600 font-medium font-sans">
                  <li>Destacado de Drivers</li>
                  <li>Aplicación de Sesgo de Escasez y Urgencia</li>
                  <li>Copys "emocionales" dirigidos hacia la Aversión a la pérdida</li>
                  <li>Implementación de Psicología de precios</li>
                  <li>Equivalencias relacionales en piezas de captación</li>
                </ul>
              </div>
            </div>

            {/* RESUMEN DE IMPACTO - CAPTACIÓN */}
            <div className="mt-16">
              <h4 className="text-lg font-heading font-black text-[#0A192F] mb-6 ml-2">Resumen de impacto UX & Behavioral: Motor de campañas globales</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* Impact Card 1 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Volumen Total Activos</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">149.493</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Base (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">118.380</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '79%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">149.493</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">+26,3%</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">De crecimiento neto en la base global</span>
                    </div>
                  </div>
                </div>

                {/* Impact Card 2 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Altas por Campañas Flash</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">~4.500 <span className="text-sm font-medium text-slate-500 font-sans">promedio</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Base (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">~2.500 <span className="font-normal">promedio</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">~4.500 <span className="font-normal">promedio</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">+80%</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">En la capacidad de procesamiento de altas en periodos cortos</span>
                    </div>
                  </div>
                </div>

                {/* Impact Card 3 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Target size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Retención de Usuarios (Medios VOCENTO)</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">95.032 <span className="text-sm font-medium text-slate-500 font-sans">activos</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Base (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">79.265 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '83%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">95.032 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">+19,9%</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">De usuarios fidelizados tras periodos de oferta</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGEN DE RESULTADOS */}
            <div className="mt-12 flex justify-center items-center w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1v7bK8ZSavWX832ueVGtZRaHrWSkucXk8" 
                alt="Métricas y Resultados Captación" 
                className="w-3/4 md:w-1/3 max-w-sm lg:max-w-md h-auto object-contain"
              />
            </div>

          </div>

          {/* Caja Proceso 3: Checkout VOCENTO */}
          <div className="bg-[#EEF2F8] p-8 md:p-12 lg:p-16 rounded-[40px] md:rounded-[60px] border border-slate-200 relative text-left">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#0A192F] mb-4 leading-tight">Rediseño flujo de compra (CheckOut) VOCENTO</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 font-heading font-bold px-4 py-1.5 rounded-full text-xs tracking-tight shrink-0 w-fit">
                  Necesidad
                </span>
                <p className="text-slate-600 text-lg md:text-xl font-medium">Rediseño de flujo de compra transaccional para Móvil y Desktop.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-left">
              {/* Step 1 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Search size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">1. Descubrimiento</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Análisis profundo de los datos del <i>checkout</i> heredado para identify cuellos de botella y comprender las causas reales de la alta tasa de abandono (<i>drop-off</i>).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Target size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">2. Definición</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Conceptualización de un nuevo modelo mental para el usuario. Decisión estratégica de transformar un proceso denso en un embudo lineal y predecible de 3 pasos sencillos.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <Layout size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide">3. Diseño</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Mitigación de la incertidumbre mediante un progresímetro persistente y autocompletado de datos conocidos. Inserción táctica de <i>nudges</i> en los pasos intermedios y aplicación estricta de la "regla del pico-final" en la <i>Thank You Page</i>, diseñada para actuar como puente hacia el <i>Onboarding</i>.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#0A192F] p-6 md:p-8 rounded-[30px] shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 group-hover/card:scale-110 transition-transform">
                  <TrendingUp size={24} className="text-[#0A192F]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-wide leading-tight">4. Entrega y seguimiento</h4>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
                    Escalado del componente <i>checkout</i> a las 12 cabeceras, hiper-localizando *assets* visuales y copys para potenciar la conexión regional, garantizando una UX óptima bajo estándares móviles.
                  </p>
                </div>
              </div>
            </div>

            {/* SECCIÓN GOALS */}
            <div className="mt-10 p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-5 transition-transform hover:-translate-y-1">
              <div className="p-4 bg-slate-50 text-[#0A192F] rounded-2xl shrink-0">
                <Award size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-lg font-heading font-black text-[#0A192F] mb-3 uppercase tracking-widest">Goals</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                  <strong className="text-blue-500">Reducción drástica de la tasa de abandono (drop-off)</strong> en el embudo transaccional. El rediseño en 3 pasos agilizó el proceso, <strong className="text-blue-500">incrementando significativamente la conversión final</strong> y la percepción de seguridad, métricas validadas mediante investigación cualitativa con usuarios reales y datos cualitativos (Adobe Customer Journey).
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans mt-3">
                  <strong className="text-slate-900">Goals de Behavioral Design:</strong>
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-1.5 text-sm md:text-base text-blue-600 font-medium font-sans">
                  <li>Mitigar la Parálisis por Análisis, despejando la incertidumbre ante la cancelación</li>
                  <li>Sesgo de Aversión a la Pérdida mediante un diseño que clarifica el valor ganado</li>
                </ul>
              </div>
            </div>

            {/* RESUMEN DE IMPACTO - CHECKOUT */}
            <div className="mt-16">
              <h4 className="text-lg font-heading font-black text-[#0A192F] mb-6 ml-2">Resumen de impacto UX: Optimización del CheckOut</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* Impact Card 1 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Volumen Total (ABC + Medios)</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">149.493 <span className="text-sm font-medium text-slate-500 font-sans">activos</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">118.380 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '79%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">149.493 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">+31.113</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">Activos netos gracias a la reducción de fricción en el pago</span>
                    </div>
                  </div>
                </div>

                {/* Impact Card 2 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Target size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Volumen Específico ABC</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">54.461 <span className="text-sm font-medium text-slate-500 font-sans">activos</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">39.115 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">54.461 <span className="font-normal">activos</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">+39,2%</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">De crecimiento impulsado por flujos de pago simplificados</span>
                    </div>
                  </div>
                </div>

                {/* Impact Card 3 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Valor (ARPU) Medios</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">110,64 €</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Jun 2024)</span>
                          <span className="font-bold text-slate-500 text-xs">110,27 €</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '99%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">110,64 €</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-3xl font-black text-white mb-4 tracking-tight relative z-10">Mantenimiento</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">Del valor premium a pesar del alto volumen de altas</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RESUMEN DE IMPACTO - CHURN */}
            <div className="mt-16">
              <h4 className="text-lg font-heading font-black text-[#0A192F] mb-6 ml-2">Resumen de impacto UX: Optimización de Churn</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* Impact Card 1 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Churn Mensual (Medios VOCENTO)</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">4,35% <span className="text-sm font-medium text-slate-500 font-sans">de bajas</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">5,11% <span className="font-normal">de bajas</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">4,35% <span className="font-normal">de bajas</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-3xl font-black text-white mb-4 tracking-tight relative z-10">Reducción neta</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">De la fricción post-venta</span>
                    </div>
                  </div>
                </div>

                {/* Impact Card 2 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <Target size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Churn Mensual (ABC)</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">3,10% <span className="text-sm font-medium text-slate-500 font-sans">de bajas</span></p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Junio 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">4,07% <span className="font-normal">de bajas</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Feb 2025)</span>
                          <span className="font-bold text-[#0A192F] text-xs">3,10% <span className="font-normal">de bajas</span></span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '76%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-4xl font-black text-white mb-4 tracking-tighter relative z-10">-23,8%</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">En la tasa de abandono tras el registro</span>
                    </div>
                  </div>
                </div>

                {/* Impact Card 3 */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] border border-slate-200 shadow-sm hover:border-blue-200 transition-all group flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-tight">Promedio Anual (Grupo)</p>
                      <p className="text-xl md:text-2xl font-black text-[#0A192F] font-heading">3,63%</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-500 font-sans text-xs">Antes (Año 2023)</span>
                          <span className="font-bold text-slate-500 text-xs">3,72%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-slate-700 font-sans text-xs font-bold">Tras Rediseño (Año 2024)</span>
                          <span className="font-bold text-[#0A192F] text-xs">3,63%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-[#0A192F] h-1.5 rounded-full" style={{ width: '97%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-blue-800 to-[#0A192F] rounded-2xl mt-5 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-blue-700/50">
                      <TrendingUp size={140} strokeWidth={0.5} className="absolute -bottom-6 -right-4 text-white opacity-5 pointer-events-none" />
                      <TrendingUp size={32} strokeWidth={2} className="text-blue-500/50 mb-3 relative z-10" />
                      <span className="text-3xl font-black text-white mb-4 tracking-tight relative z-10">Estabilización</span>
                      <div className="w-16 h-px bg-white/20 mb-4 relative z-10"></div>
                      <span className="text-xs md:text-[13px] font-bold text-blue-300 tracking-tight leading-relaxed relative z-10">Del ecosistema bajo el nuevo diseño</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGEN DE RESULTADOS */}
            <div className="mt-12 flex justify-center items-center w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1_LUNh9NDbV8UX5yOdjXUFGaX8TkOxPzd" 
                alt="Métricas y Resultados Checkout" 
                className="w-3/4 md:w-1/3 max-w-sm lg:max-w-md h-auto object-contain"
              />
            </div>

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
           <p className="text-[10px] text-slate-600 font-heading uppercase tracking-widest font-bold text-left text-left">© 2026 Javier de Miguel</p>
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
      {/* <Analytics/> */}

      {/* --- MENÚ MÓVIL / TABLET FULLSCREEN --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 md:p-8">
          <div className="font-heading font-black text-[#0A192F] text-xl tracking-tighter">Javier de Miguel</div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm md:text-base font-heading font-bold uppercase tracking-widest text-[#0A192F] flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            Cerrar <X size={24} strokeWidth={2} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-10 px-6 pb-20 overflow-y-auto">
          {['trayectoria', 'evidencias', 'proceso', 'ecosistema', 'testimonios'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(id);
                }, 300);
              }}
              className="text-3xl md:text-4xl font-heading font-light text-[#0A192F] hover:text-blue-600 transition-colors capitalize tracking-tight"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          
          <div className="mt-12 md:mt-16">
            <a 
              href="mailto:jdemig@gmail.com" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-heading font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 text-sm tracking-wider uppercase"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
      {/* Recuerda descomentar esto en producción: */}
      {<Analytics/>}
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