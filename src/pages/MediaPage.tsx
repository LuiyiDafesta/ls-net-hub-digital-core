import { Youtube, Play, Users, Video, Eye, ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const latestVideos = [
  {
    title: "¿Por qué paso 10 minutos en Google y Perplexity solo 5 segundos?",
    thumbnail: "https://i.ytimg.com/vi/1g_YbL-Jddc/maxresdefault.jpg",
    videoId: "1g_YbL-Jddc",
    category: "AI & Productividad",
  },
  {
    title: "Cómo ganar autoridad en Google y ChatGPT con SEO y GEO juntos",
    thumbnail: "https://img.youtube.com/vi/ZlGw_6nZhFY/maxresdefault.jpg",
    videoId: "ZlGw_6nZhFY",
    category: "SEO & Marketing",
  },
  {
    title: "¡Google en PELIGRO! Lo que nadie te cuenta",
    thumbnail: "https://i.ytimg.com/vi/CQqUGvnp7uo/maxresdefault.jpg",
    videoId: "CQqUGvnp7uo",
    category: "Tendencias Tech",
  },
  {
    title: "¿Por qué Google te hace trabajar más? Descubre la verdad",
    thumbnail: "https://i.ytimg.com/vi/iyiUdu3O578/maxresdefault.jpg",
    videoId: "iyiUdu3O578",
    category: "Análisis",
  },
  {
    title: "¿Google Muerto? La Verdad Oculta en 2024",
    thumbnail: "https://i.ytimg.com/vi/f7opSIHwxA4/maxresdefault.jpg",
    videoId: "f7opSIHwxA4",
    category: "Tendencias Tech",
  },
  {
    title: "Conoce Gemini, el asistente AI definitivo",
    thumbnail: "https://i.ytimg.com/vi/gW0_AdmWdrs/maxresdefault.jpg",
    videoId: "gW0_AdmWdrs",
    category: "AI & Productividad",
  },
  {
    title: "Adiós a apps aisladas: Tu IA es tu SO",
    thumbnail: "https://i.ytimg.com/vi/mahS9Fqhr88/maxresdefault.jpg",
    videoId: "mahS9Fqhr88",
    category: "AI & Productividad",
  },
  {
    title: "ChatGPT vs Gemini: ¿Cuál domina tu oficina?",
    thumbnail: "https://i.ytimg.com/vi/hizrLhsWack/maxresdefault.jpg",
    videoId: "hizrLhsWack",
    category: "Comparativas",
  },
  {
    title: "Cómo lanzar un SaaS con Google Anti Gravity y agentes MCP",
    thumbnail: "https://img.youtube.com/vi/wSEwJrWP_A8/maxresdefault.jpg",
    videoId: "wSEwJrWP_A8",
    category: "Desarrollo",
  },
];

const stats = [
  { icon: Users, value: "2K+", label: "Suscriptores" },
  { icon: Video, value: "50+", label: "Videos" },
  { icon: Eye, value: "100K+", label: "Visualizaciones" },
  { icon: TrendingUp, value: "Semanal", label: "Contenido Nuevo" },
];

const categories = [
  { name: "AI & Automatización", color: "primary" },
  { name: "Tutoriales n8n", color: "secondary" },
  { name: "Reviews de Tech", color: "success" },
  { name: "Productividad", color: "primary" },
];

const MediaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF0000]/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF0000]/10 text-[#FF0000] text-sm font-medium mb-6 animate-fade-in-up opacity-0">
              <Youtube className="w-4 h-4" />
              LS Net Media
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Tecnología, AI y</span>
              <br />
              <span className="bg-gradient-to-r from-[#FF0000] via-primary to-secondary bg-clip-text text-transparent">
                Automatización en Video
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              Tutoriales de tecnología, automatización con IA, n8n y herramientas digitales. 
              <span className="text-[#FF0000] font-semibold"> Aprende a automatizar tu negocio.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <a 
                href="https://www.youtube.com/@LsNetInformatica?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="bg-[#FF0000] hover:bg-[#CC0000]">
                  <Youtube className="w-5 h-5" />
                  Suscribirse al Canal
                </Button>
              </a>
              <a 
                href="https://lsnetinformatica.com.ar/youtube/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="xl">
                  <Play className="w-5 h-5" />
                  Ver Todos los Videos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-[#FF0000] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://yt3.googleusercontent.com/1OPz4sddIXrmF2xWJTyNSg-YvVb3S_vUiV98lc0bNkjWjlSsFro62wDP9llU_ix4B4mfikOlERI=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" 
              alt="LS Net Informatica YouTube Banner"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Ls Net Informatica</h2>
                <p className="text-muted-foreground">Canal Oficial de YouTube</p>
              </div>
              <a 
                href="https://www.youtube.com/@LsNetInformatica" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-[#FF0000] hover:bg-[#CC0000]">
                  <Youtube className="w-4 h-4 mr-2" />
                  Visitar Canal
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <span 
                key={cat.name}
                className={`px-4 py-2 rounded-full bg-${cat.color}/10 text-${cat.color} text-sm font-medium border border-${cat.color}/20`}
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#FF0000] uppercase tracking-widest">
              Últimos Lanzamientos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Videos Recientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Contenido nuevo cada semana sobre IA, automatización y tecnología.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-[#FF0000]/50 transition-all duration-300 hover:translate-y-[-4px]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs text-foreground font-medium">
                      {video.category}
                    </span>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-[#FF0000] transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Youtube className="w-4 h-4 text-[#FF0000]" />
                    <span>Ls Net Informatica</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://www.youtube.com/@lsnetinformatica/shorts"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Ver Más Videos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Nuestro Contenido
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              ¿Qué Encontrarás en el Canal?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Inteligencia Artificial</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tutoriales sobre ChatGPT, Gemini, y las últimas herramientas de IA para potenciar tu productividad.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Automatización con n8n</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aprende a crear flujos de trabajo automatizados que conectan todas tus aplicaciones.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-success/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Tendencias Tech</h3>
              <p className="text-muted-foreground leading-relaxed">
                Análisis de las últimas tendencias en tecnología, SEO, y el futuro del trabajo digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center bg-card/80 backdrop-blur-sm border border-[#FF0000]/20 rounded-2xl p-10">
              <div className="w-20 h-20 rounded-full bg-[#FF0000]/10 flex items-center justify-center mx-auto mb-6">
                <Youtube className="w-10 h-10 text-[#FF0000]" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¡Únete a la Comunidad!
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Suscríbete para recibir contenido nuevo cada semana sobre tecnología, 
                IA y automatización. ¡No te pierdas ningún tutorial!
              </p>
              
              <a 
                href="https://www.youtube.com/@LsNetInformatica?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="xl" className="bg-[#FF0000] hover:bg-[#CC0000]">
                  <Youtube className="w-5 h-5" />
                  Suscribirse Ahora
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              
              <p className="text-sm text-muted-foreground mt-6">
                +2,000 suscriptores ya están aprendiendo con nosotros
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaPage;
