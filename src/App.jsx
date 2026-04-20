import React, { useState, useEffect, useRef } from 'react';

// Comentado para el entorno de previsualización (descomentar en producción)
// import { Analytics } from "@vercel/analytics/react" 

import { 
  ArrowUp,
  Menu,
  X,
  MapPin,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  Check,
  Award,
  ChevronDown
} from 'lucide-react';

// --- DATA: EXPERIENCIA ---
const EXPERIENCE = [
  {
    id: 'vocento',
    company: 'VOCENTO',
    role: 'UX - UI & Behavioral Designer',
    period: '2023 — Presente',
    description: 'Estrategia corporativa de usuarios para ABC y medios regionales. Optimización de CRO, flujos de pago y captación impulsados por IA y análisis de datos.',
  },
  {
    id: 'sopra',
    company: 'SOPRA STERIA (EGGS)',
    role: 'UX - UI & Behavioral Designer',
    period: '2018 — 2023',
    description: 'Diseño estratégico para clientes Tier-1 (BBVA, Allianz, Endesa). Gestión integral de procesos UX de punta a punta y dinámicas de ideación.',
  },
  {
    id: 'everis',
    company: 'EVERIS (NTT DATA)',
    role: 'UX - UI Designer',
    period: '2018',
    description: 'Investigación y diseño visual para banca y telecomunicaciones. Fase de descubrimiento, investigación etnográfica y prototipado.',
  }
];

// --- DATA: PROYECTOS ---
const PROJECTS_PORTFOLIO = [
  {
    id: "bbva-app",
    client: "BBVA",
    title: "App Suggestions & Feedback Loop",
    type: "Mobile App",
    description: "Funcionalidad de votación de mejoras e implementación de menús visuales IVR.",
    impact: "Mejora directa en el engagement del usuario.",
    imageUrl: "https://lh3.googleusercontent.com/d/1kv2rmJGoLaUr04-hZYeAOQ5Ji3o4ZUGd"
  },
  {
    id: "bbva-manager",
    client: "BBVA Talento y Cultura",
    title: "Portal 'Mi Espacio - Manager'",
    type: "Web Portal",
    description: "Portal de gestión aplicando BBVA Experience para tareas de T&C.",
    impact: "Centralización operativa interna.",
    imageUrl: "https://lh3.googleusercontent.com/d/1bIAUAiuTCZ-4K-Xm2EcgWREnv8iMNEQa"
  },
  {
    id: "endesa-retos",
    client: "Endesa / EnergiaXXI",
    title: "Área Cliente: Retos de Ahorro",
    type: "Behavioral Web",
    description: "Gamificación del ahorro energético mediante economía del comportamiento.",
    impact: "Fomento del ahorro activo.",
    imageUrl: "https://lh3.googleusercontent.com/d/16IvGDArPVt4TzqLjII3oUYhK4hGN_i3O"
  },
  {
    id: "allianz-funnel",
    client: "Allianz",
    title: "Funnel Quote & Buy Autos",
    type: "Fintech Web App",
    description: "Optimización del funnel de pólizas para agentes internos.",
    impact: "Aumento en la tasa de cierre.",
    imageUrl: "https://lh3.googleusercontent.com/d/18Rnl7maW55OJ5K4NBXiCX_WP_oyJq64O"
  },
  {
    id: "mercadona-docs",
    client: "Mercadona",
    title: "Gestión Empleado",
    type: "Native Employee App",
    description: "App de nóminas, certificados y comunicaciones en tienda.",
    impact: "Digitalización total de RRHH en PDV.",
    imageUrl: "https://lh3.googleusercontent.com/d/1b6LGfVoD3t1Q22MKRuR8zMaF6fNmoHn9"
  },
  {
    id: "jcyl-stilus",
    client: "JCyL",
    title: "Sistema STILUS",
    type: "Logistics Admin",
    description: "Control horario y asignación de materias para docentes.",
    impact: "Eficiencia operativa educativa.",
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
  { id: 1, name: "Daniel Solana", role: "Design Lead en BBVA", text: "Gran profesional. Siempre proactivo, se adelanta a las necesidades y las resuelve de manera correcta y eficiente." },
  { id: 2, name: "Carlos Relloso", role: "CDO en PRISA", text: "Valoro su capacidad para combinar la creatividad en el diseño con la lógica de negocio." },
  { id: 3, name: "Raúl Lazcano", role: "UX Narrative en BBVA", text: "Su compromiso con el diseño es único. Siempre piensa en hacer las cosas mejor y cuidar el detalle." },
  { id: 4, name: "César Nuñez", role: "Director en Addoor", text: "Actitud súper positiva, muchos conocimientos y polivalencia. Javier es un gran profesional." },
  { id: 5, name: "Elena Segura", role: "Ux Senior Designer en Vocento", text: "Su versatilidad hace que aporte en cualquier punto y facilita el trabajo transversal. Excelente persona." }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollTestimonialRef = useRef(null);
  const scrollGalleryRef = useRef(null);

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
      setShowTopBtn(window.scrollY > 400);

      const sections = ['home', 'trayectoria', 'evidencias', 'proceso', 'testimonios'];
      let current = activeSection;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = sectionId;
            break;
          }
        }
      }
      if (current !== activeSection) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollHorizontally = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-zinc-900 font-sans scroll-smooth overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* BOTÓN FLOTANTE */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-6 md:right-8 z-50 p-4 bg-black text-white rounded-full hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <ArrowUp size={20} strokeWidth={2} />
      </button>

      {/* --- NAVEGACIÓN MINIMALISTA --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#FCFCFC]/90 backdrop-blur-md border-b border-zinc-200/50 px-6 py-4 transition-all">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-tight">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Javier de Miguel.</a>
          </div>
          
          <div className="hidden lg:flex gap-8 text-[13px] font-medium tracking-wide">
            {['trayectoria', 'evidencias', 'proceso', 'testimonios'].map((id) => (
              <a 
                key={id} href={`#${id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`capitalize transition-colors relative py-1 ${activeSection === id ? 'text-black' : 'text-zinc-500 hover:text-black'}`}
              >
                {id}
                {activeSection === id && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black"></span>}
              </a>
            ))}
          </div>
          
          <a href="mailto:jdemig@gmail.com" className="hidden lg:inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-sm text-[13px] font-medium hover:bg-zinc-800 transition-colors">
            Contactar
          </a>
          
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-black p-2">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-screen-2xl mx-auto relative scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* TEXTO IZQUIERDA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Píldora de experiencia restaurada */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-100 text-zinc-600 border border-zinc-200 text-[10px] font-sans font-bold rounded-full tracking-widest uppercase mb-8">
              <Award size={14} /> + de 20 años de experiencia estratégica
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-display font-semibold leading-[0.95] tracking-[-0.04em] mb-8 text-black">
              Diseñando<br />Resultados.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl leading-relaxed mb-10">
              Transformando comportamientos en <strong className="text-black font-medium">valor de negocio</strong>. En la intersección de la influencia ética, la experiencia de usuario y la conversión.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#proceso" className="flex items-center gap-2 bg-black text-white px-7 py-4 rounded-sm text-sm font-medium hover:bg-zinc-800 transition-colors">
                Ver procesos <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          {/* IMAGEN DERECHA Y TARJETA FLOTANTE */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto relative overflow-hidden rounded-sm bg-zinc-100">
              {/* Imagen en blanco y negro (escala de grises al 100%) */}
              <img 
                src="https://lh3.googleusercontent.com/d/1UJrYipfZQTBeOcgrftsxIQA1KwiJLd49" 
                alt="Javier de Miguel" 
                className="w-full h-full object-cover object-top grayscale transition-all duration-700 ease-in-out"
              />
              {/* Overlay degradado alfa para fundir el azul de la imagen con el fondo de la web */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFC] via-[#FCFCFC]/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Tarjeta flotante de Certificaciones Restaurada */}
            <div className="absolute -bottom-6 -left-2 md:-left-12 bg-white border border-zinc-200 p-5 md:p-6 rounded-sm shadow-2xl z-10 flex flex-col gap-4 animate-in fade-in zoom-in duration-700">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Certificaciones Estratégicas</p>
              <div className="flex gap-5 items-center">
                {/* Badge 1 */}
                <img src="https://lh3.googleusercontent.com/d/15z3eui-YIEuBKoiWfu17iM8Y50RKNt71" alt="Ethical Influence Practitioner" className="h-20 md:h-28 w-auto object-contain" />
                {/* Badge 2 */}
                <img src="https://lh3.googleusercontent.com/d/1BU0_wUw3EQlRBvh9gPQNEOQA7HIXsip6" alt="Behavioral School" className="h-20 md:h-28 w-auto object-contain" />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* --- SKILLS LÍNEAS LIMPIAS --- */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200">
             {[
               { label: "Behavioral Design", val: "95%" },
               { label: "CRO & Funnels", val: "92%" },
               { label: "Design Systems", val: "90%" },
               { label: "AI Integration", val: "85%" }
             ].map((s, i) => (
               <div key={i} className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-3xl md:text-5xl font-display font-light text-black mb-2 tracking-tighter">{s.val}</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">{s.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- TRAYECTORIA --- */}
      <section id="trayectoria" className="py-24 md:py-32 px-6 max-w-screen-2xl mx-auto scroll-mt-20">
        <SectionHeader title="Trayectoria." subtitle="Impacto estratégico en corporaciones globales a través del diseño centrado en negocio." />
        
        <div className="mt-16 w-full max-w-5xl">
          <div className="border-t border-zinc-900">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="group border-b border-zinc-200 py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-zinc-50 transition-colors px-4 -mx-4">
                <div className="w-full md:w-1/4 shrink-0 pt-1">
                  <p className="text-sm font-medium text-zinc-500">{exp.period}</p>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-black mb-2">{exp.company}</h3>
                  <p className="text-base text-zinc-800 font-medium mb-4">{exp.role}</p>
                  <p className="text-zinc-500 font-light leading-relaxed max-w-2xl">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <a href="https://drive.google.com/file/d/1dPaHMr4JFKgnDb6UXbDCzGGl0pRjqAAi/view?usp=sharing" target="_blank" rel="noreferrer" className="text-sm font-medium text-black hover:text-zinc-600 flex items-center gap-2 underline underline-offset-4">
              Ver Currículum Vitae <ArrowRight size={16} />
            </a>
            <a href="https://www.linkedin.com/in/javier-de-miguel-torres/" target="_blank" rel="noreferrer" className="text-sm font-medium text-black hover:text-zinc-600 flex items-center gap-2 underline underline-offset-4">
              Perfil de LinkedIn <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- EVIDENCIAS / PORTFOLIO --- */}
      <section id="evidencias" className="py-24 md:py-32 px-6 bg-zinc-900 text-white scroll-mt-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-semibold tracking-[-0.03em] leading-tight text-white mb-6">Selección <br className="hidden md:block"/>Visual.</h2>
              <p className="text-zinc-400 text-lg md:text-xl font-light max-w-lg">Capturas reales que documentan soluciones técnicas y procesos de alto nivel.</p>
            </div>
            <a href="https://drive.google.com/file/d/1gIM9M-mlU6RepB05VvD0JUcCCaqpzIyu/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-zinc-700 px-6 py-3 rounded-sm text-sm font-medium hover:bg-white hover:text-black transition-colors">
              Descargar Portfolio PDF
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PROJECTS_PORTFOLIO.map((p, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-800 mb-6 relative">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-semibold border border-white/10">
                    {p.type}
                  </div>
                </div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-3 font-semibold">{p.client}</p>
                <h4 className="text-xl font-display font-medium text-white mb-3 group-hover:text-zinc-300 transition-colors">{p.title}</h4>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">{p.description}</p>
                <div className="flex items-start gap-2 pt-4 border-t border-zinc-800">
                  <Check size={16} className="text-white shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-300 italic">{p.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESO: END TO END (Con Acordeón de Goals) --- */}
      <section id="proceso" className="py-24 md:py-32 px-6 max-w-screen-2xl mx-auto scroll-mt-20">
        <SectionHeader title="El Proceso." subtitle="End-to-End: Cómo transformo un reto de negocio en un producto digital cuantificable." />

        <div className="mt-16 md:mt-24 space-y-12">
          <ProcessBlock 
            number="01"
            title="Flujo de login y registro en VOCENTO"
            need="Rediseño de flujos para usuarios anónimos y registrados."
            steps={[
              { title: "Descubrimiento", text: "Análisis de requisitos para escalar volumen de registros en ecosistema digital." },
              { title: "Definición", text: "Auditoría de barreras de conversión e ideación de mejoras con Stakeholders." },
              { title: "Diseño", text: "Eliminación de fricción cognitiva ('Baby-Steps') y aplicación de 'nudges' Mobile-First." },
              { title: "Entrega", text: "Implementación en EVOLOK y monitorización analítica en Adobe Customer Journey." }
            ]}
            metric="+42,5%"
            metricText="En capacidad de conversión y retención neta"
            goals={
              <>
                <p><strong className="text-black">Incremento sostenido en la tasa de éxito de logueos y registros</strong> (Estándar y Social Login), impactando directamente en el volumen de usuarios identificados y <strong className="text-black">disparando el crecimiento de nuevas suscripciones</strong> en el periodo de mayo de 2023 a agosto de 2025.</p>
                <p className="mt-4"><strong className="text-black">Goal de Behavioral Design:</strong></p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Aplicar el Efecto de Progreso Dotado para aumentar la motivación del usuario y asegurar que finalice el registro sin percibir un esfuerzo excesivo.</li>
                </ul>
              </>
            }
          />

          <ProcessBlock 
            number="02"
            title="Piezas de captación VOCENTO"
            need="Maximizar conversión en embudo superior."
            steps={[
              { title: "Descubrimiento", text: "Adaptación a nueva arquitectura estableciendo KPI en conversión superior." },
              { title: "Definición", text: "Diagnóstico e ideación basada en heurísticas de Behavioral Design." },
              { title: "Diseño", text: "Rediseño UI aplicando diseño cognitivo (Ley de Hick) y aversión a la pérdida." },
              { title: "Entrega", text: "Despliegue y roadmap de tests A/B en todos los canales." }
            ]}
            metric="+26,3%"
            metricText="De crecimiento neto en la base global activa"
            goals={
              <>
                <p><strong className="text-black">Aumento exponencial del CTR (Click-Through Rate) y paso a funnel</strong> en todas las cabeceras. La optimización elevó la atribución de marca, clarificó la propuesta de valor y disparó el índice de confianza percibida, validado mediante data cuantitativa y sesiones cualitativas moderadas.</p>
                <p className="mt-4"><strong className="text-black">Goals de Behavioral Design:</strong> Garantizar la Fluidez Cognitiva en toda la plataforma, asegurando que el usuario aprenda el sistema una sola vez y reduciendo su fatiga de uso recurrente. Generación de impacto y “nudges” para la toma de decisión:</p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Destacado de Drivers</li>
                  <li>Aplicación de Sesgo de Escasez y Urgencia</li>
                  <li>Copys "emocionales" dirigidos hacia la Aversión a la pérdida</li>
                  <li>Implementación de Psicología de precios</li>
                  <li>Equivalencias relacionales en piezas de captación</li>
                </ul>
              </>
            }
          />

          <ProcessBlock 
            number="03"
            title="Rediseño CheckOut VOCENTO"
            need="Rediseño de flujo de compra transaccional Móvil y Desktop."
            steps={[
              { title: "Descubrimiento", text: "Análisis profundo de datos para identificar cuellos de botella del drop-off." },
              { title: "Definición", text: "Nuevo modelo mental: embudo lineal y predecible de 3 pasos." },
              { title: "Diseño", text: "Progresímetro, nudges intermedios y regla del 'pico-final' en Thank You Page." },
              { title: "Entrega", text: "Escalado a 12 cabeceras, hiper-localizando assets visuales." }
            ]}
            metric="-23,8%"
            metricText="En la tasa de abandono tras el registro"
            goals={
              <>
                <p><strong className="text-black">Reducción drástica de la tasa de abandono (drop-off)</strong> en el embudo transaccional. El rediseño en 3 pasos agilizó el proceso, <strong className="text-black">incrementando significativamente la conversión final</strong> y la percepción de seguridad, métricas validadas mediante investigación cualitativa con usuarios reales y datos cualitativos (Adobe Customer Journey).</p>
                <p className="mt-4"><strong className="text-black">Goals de Behavioral Design:</strong></p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Mitigar la Parálisis por Análisis, despejando la incertidumbre ante la cancelación</li>
                  <li>Sesgo de Aversión a la Pérdida mediante un diseño que clarifica el valor ganado</li>
                </ul>
              </>
            }
          />
        </div>
      </section>

      {/* --- ECOSISTEMA (LOGOS) --- */}
      <section className="py-20 md:py-24 border-y border-zinc-200 bg-zinc-50 px-6">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-12">Marcas que han confiado en este proceso</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-16 opacity-60 items-center justify-items-center">
             {COMPANY_LOGOS.map((id, index) => (
               <img 
                  key={index}
                  src={`https://lh3.googleusercontent.com/d/${id}`}
                  alt={`Partner Logo ${index + 1}`}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
               />
             ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIOS LÍNEAS LIMPIAS --- */}
      <section id="testimonios" className="py-24 md:py-32 px-6 max-w-screen-2xl mx-auto scroll-mt-20">
        <div className="flex justify-between items-end mb-16">
          <SectionHeader title="Voces." subtitle="Lo que dicen compañeros y responsables en mi trayectoria." />
          <div className="hidden md:flex gap-4">
            <button onClick={() => scrollHorizontally(scrollTestimonialRef, 'left')} className="p-3 border border-zinc-300 rounded-sm hover:bg-black hover:text-white hover:border-black transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollHorizontally(scrollTestimonialRef, 'right')} className="p-3 border border-zinc-300 rounded-sm hover:bg-black hover:text-white hover:border-black transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollTestimonialRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="min-w-[85vw] md:min-w-[450px] border border-zinc-200 p-10 md:p-12 snap-start flex flex-col justify-between bg-white hover:border-zinc-900 transition-colors rounded-sm">
              <p className="text-xl md:text-2xl text-zinc-900 font-light leading-relaxed mb-10 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-black text-lg">{t.name}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALERÍA FOTOGRÁFICA --- */}
      <section className="py-12 bg-white px-2">
        <div 
          ref={scrollGalleryRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {GALLERY_IMAGES.map((imgId, idx) => (
            <div key={idx} className="min-w-[80vw] md:min-w-[60vw] lg:min-w-[40vw] h-[50vh] md:h-[70vh] snap-center rounded-sm overflow-hidden bg-zinc-100 shrink-0">
              <img 
                src={`https://lh3.googleusercontent.com/d/${imgId}`}
                alt={`Galería de diseño ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER MODERNO Y MASIVO --- */}
      <footer className="bg-black pt-32 pb-12 px-6 text-white selection:bg-white selection:text-black">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-[12vw] sm:text-[10vw] font-display font-semibold leading-[0.85] tracking-[-0.05em] mb-16 opacity-90">
            Hablemos.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-800 pt-16">
            <div className="lg:col-span-2">
              <p className="text-xl text-zinc-400 font-light max-w-sm mb-8">
                Abierto a nuevos retos de diseño estratégico, oportunidades de CRO y consultoría en Behavioral Design.
              </p>
              <a href="mailto:jdemig@gmail.com" className="inline-block border-b border-white pb-1 text-lg font-medium hover:text-zinc-400 hover:border-zinc-400 transition-colors">
                jdemig@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-semibold mb-6">Ubicación</p>
              <p className="text-sm font-light text-zinc-300 flex items-center gap-2">Madrid, España <MapPin size={14} /></p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 font-semibold mb-6">Redes</p>
              <a href="https://www.linkedin.com/in/Javier-de-miguel-torres" target="_blank" rel="noreferrer" className="text-sm font-light text-zinc-300 flex items-center gap-2 hover:text-white transition-colors">
                LinkedIn <ExternalLink size={14} />
              </a>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold">© {new Date().getFullYear()} Javier de Miguel</p>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold">Behavioral & UX Designer</p>
          </div>
        </div>
      </footer>

      {/* --- ESTILOS GLOBALES (Tipografías limpias) --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Outfit', sans-serif; }
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; }
      `}</style>
      
      {/* Comentado temporalmente */}
      {/* <Analytics/> */}

      {/* --- MENÚ MÓVIL FULLSCREEN MINIMALISTA --- */}
      <div 
        className={`fixed inset-0 z-[100] bg-black text-white transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col lg:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <div className="font-display font-semibold text-lg tracking-tight">Javier de Miguel.</div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col justify-center px-8 gap-8">
          {['home', 'trayectoria', 'evidencias', 'proceso', 'testimonios'].map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
              }}
              className="text-4xl md:text-5xl font-display font-light text-zinc-400 hover:text-white transition-colors capitalize flex items-center gap-4"
            >
              <span className="text-sm font-sans font-semibold text-zinc-700">0{i+1}</span> {id}
            </a>
          ))}
          
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <a href="mailto:jdemig@gmail.com" className="text-xl font-light underline underline-offset-8 decoration-zinc-700 hover:decoration-white transition-all">
              jdemig@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponente de Encabezado limpio
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16">
    <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-black mb-4">{title}</h2>
    <p className="text-zinc-500 max-w-2xl text-lg font-light leading-relaxed">{subtitle}</p>
  </div>
);

// Subcomponente para los pasos de "Proceso" con Acordeón para Goals
const ProcessBlock = ({ number, title, need, steps, metric, metricText, goals }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="border-t border-zinc-200 py-16 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24 relative group">
      {/* Izquierda: Info principal */}
      <div className="w-full lg:w-1/3 shrink-0 flex flex-col">
        <p className="text-sm font-display font-bold text-zinc-400 mb-4 tracking-widest uppercase">Caso {number}</p>
        <h3 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-black mb-6">{title}</h3>
        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2">La Necesidad</p>
          <p className="text-sm text-zinc-800 font-medium leading-relaxed">{need}</p>
        </div>
        
        {/* Acordeón de Goals integrado aquí */}
        {goals && (
          <div className="mt-2 mb-10">
            <button 
              onClick={() => setIsAccordionOpen(!isAccordionOpen)} 
              className="flex items-center gap-2 font-medium text-black hover:text-zinc-600 transition-colors pb-1 border-b border-black hover:border-zinc-600 w-fit"
            >
              Ver Goals de Negocio <ChevronDown className={`transform transition-transform duration-300 ${isAccordionOpen ? 'rotate-180' : ''}`} size={16} />
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isAccordionOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 bg-white border border-zinc-200 rounded-sm text-sm text-zinc-600 font-light leading-relaxed shadow-sm">
                  {goals}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-end gap-4 mt-auto">
          <p className="text-5xl md:text-6xl font-display font-light tracking-tighter text-black">{metric}</p>
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest max-w-[150px] pb-2 leading-relaxed">{metricText}</p>
        </div>
      </div>
      
      {/* Derecha: Pasos limpios */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 h-fit">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-6 border-l border-zinc-200 group-hover:border-black transition-colors duration-500">
            <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-black transition-colors duration-500"></div>
            <h4 className="text-lg font-semibold text-black mb-2">{idx + 1}. {step.title}</h4>
            <p className="text-sm text-zinc-500 font-light leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};