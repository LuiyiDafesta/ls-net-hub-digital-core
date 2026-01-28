import { useState } from "react";
import { Play, BookOpen, Users, Award, ArrowRight, Youtube, Clock, Star, Mail, Zap, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    title: "n8n Automation Masterclass",
    subtitle: "From Zero to Hero",
    description: "Build powerful automations without code. Connect 500+ apps, create complex workflows, and save hours every week.",
    duration: "12 hours",
    level: "Beginner to Advanced",
    students: "2,400+",
    color: "secondary",
    featured: true,
    topics: ["Workflow basics", "API integrations", "Error handling", "Production deployment"],
  },
  {
    title: "AI Tools for Content Creators",
    subtitle: "Viral Studio Workflow",
    description: "Master the AI tools that power modern content creation. From ideation to publishing, automate your entire workflow.",
    duration: "8 hours",
    level: "Intermediate",
    students: "1,800+",
    color: "primary",
    featured: true,
    topics: ["ChatGPT prompts", "Image generation", "Video editing AI", "Scheduling automation"],
  },
  {
    title: "CRM Implementation & Management",
    subtitle: "Complete Business Guide",
    description: "Implement and optimize CRM systems for your business. From setup to advanced analytics and team training.",
    duration: "10 hours",
    level: "All Levels",
    students: "950+",
    color: "success",
    featured: false,
    topics: ["CRM selection", "Data migration", "Pipeline setup", "Reporting & analytics"],
  },
];

const freeCourses = [
  {
    title: "Automatiza Google Analytics",
    description: "Crea flujos automatizados que se conectan a tu Analytics y generan reportes automáticos.",
    lessons: "1 Lección",
    instructor: "Luis",
    thumbnail: "https://lsnetinformatica.com.ar/wp-content/uploads/2025/09/google-analytics-1-300x158.png",
    url: "https://lsnetinformatica.com.ar/courses/automatiza-google-analytics/",
  },
  {
    title: "El nodo Webhook",
    description: "Aprende a utilizar el nodo Webhook de N8N para conectar aplicaciones diferentes.",
    lessons: "1 Lección",
    instructor: "Luis",
    thumbnail: "https://lsnetinformatica.com.ar/wp-content/uploads/2025/09/n8n-300x300.jpg",
    url: "https://lsnetinformatica.com.ar/courses/el-nodo-webhook/",
  },
  {
    title: "Instalar WordPress con Easy Panel",
    description: "Aprende a instalar WordPress en tu VPS usando Easy Panel en esta guía detallada.",
    lessons: "1 Lección",
    instructor: "Luis",
    thumbnail: "https://lsnetinformatica.com.ar/wp-content/uploads/2025/09/1280x720-cursos-destacadapng-1024x576-1-300x169.png",
    url: "https://lsnetinformatica.com.ar/courses/instalar-wordpress-con-easy-panel/",
  },
  {
    title: "Nodo Supabase",
    description: "Mejora la persistencia de datos en N8N usando el nodo de Supabase.",
    lessons: "1 Lección",
    instructor: "Luis",
    thumbnail: "https://lsnetinformatica.com.ar/wp-content/uploads/2025/09/n8n-300x300.jpg",
    url: "https://lsnetinformatica.com.ar/courses/nodo-supabse/",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Students" },
  { icon: BookOpen, value: "25+", label: "Courses" },
  { icon: Video, value: "200+", label: "Video Lessons" },
  { icon: Award, value: "4.9/5", label: "Average Rating" },
];

const colorClasses: Record<string, string> = {
  secondary: "text-secondary",
  primary: "text-primary",
  success: "text-success",
};

const bgColorClasses: Record<string, string> = {
  secondary: "bg-secondary/10",
  primary: "bg-primary/10",
  success: "bg-success/10",
};

const borderColorClasses: Record<string, string> = {
  secondary: "border-secondary/30 hover:border-secondary/50",
  primary: "border-primary/30 hover:border-primary/50",
  success: "border-success/30 hover:border-success/50",
};

const AcademyPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the community! 🎉",
      description: "You'll receive our weekly tech tips and updates.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        
        {/* Code/Workflow Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 opacity-10">
          <div className="w-full h-full border border-success/50 rounded-lg p-4 font-mono text-xs text-success">
            <div>{"{"} workflow: "automation" {"}"}</div>
            <div className="mt-2">→ trigger: webhook</div>
            <div>→ action: send_email</div>
            <div>→ action: update_crm</div>
          </div>
        </div>
        <div className="absolute bottom-20 right-10 w-64 h-64 opacity-10">
          <div className="w-full h-full border border-secondary/50 rounded-lg p-4 font-mono text-xs text-secondary">
            <div>const ai = new Agent();</div>
            <div className="mt-2">ai.learn(data);</div>
            <div>ai.automate(tasks);</div>
            <div>// 🚀 profit</div>
          </div>
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6 animate-fade-in-up opacity-0">
              <Sparkles className="w-4 h-4" />
              LS Academy
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Master the Tools</span>
              <br />
              <span className="bg-gradient-to-r from-success via-secondary to-primary bg-clip-text text-transparent">
                Shaping the Future.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
              Practical courses on n8n automation, CRMs, Social Media tools, and AI implementation. 
              <span className="text-success font-semibold"> Straight from industry experts.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <Button variant="hero" size="xl">
                Browse Courses
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a 
                href="https://youtube.com/@lsnetinformatica" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="xl">
                  <Youtube className="w-5 h-5" />
                  Free Tutorials
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
                <stat.icon className="w-8 h-8 text-success mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-success uppercase tracking-widest">
              Learn & Grow
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Featured Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hands-on training designed to give you practical skills you can apply immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className={`group relative rounded-2xl bg-card/80 backdrop-blur-sm border ${borderColorClasses[course.color]} transition-all duration-500 hover:translate-y-[-4px] overflow-hidden`}
              >
                {course.featured && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${bgColorClasses[course.color]} ${colorClasses[course.color]} text-xs font-medium`}>
                    Popular
                  </div>
                )}
                
                {/* Course Header */}
                <div className={`p-6 ${bgColorClasses[course.color]}`}>
                  <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-4`}>
                    <BookOpen className={`w-6 h-6 ${colorClasses[course.color]}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{course.title}</h3>
                  <p className={`text-sm font-medium ${colorClasses[course.color]}`}>{course.subtitle}</p>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Course Meta */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                  </div>
                  
                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.map((topic) => (
                      <span 
                        key={topic} 
                        className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group/btn">
                    View Course
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="ghost" className="text-secondary">
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Free Courses Hub */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-success" />
                </div>
                <span className="text-sm font-semibold text-success uppercase tracking-widest">
                  Cursos Gratuitos
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Aprende Gratis con Nuestros Tutoriales
              </h2>
              <p className="text-muted-foreground">
                Accede a cursos gratuitos sobre automatización, n8n, WordPress y más.
              </p>
            </div>
            <a 
              href="https://lsnetinformatica.com.ar/courses/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
                Ver Todos los Cursos
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeCourses.map((course, index) => (
              <a
                key={index}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-success/50 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-success text-success-foreground rounded text-xs font-medium">
                    Gratis
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 rounded text-xs text-foreground">
                    {course.lessons}
                  </div>
                </div>
                
                {/* Course Info */}
                <div className="p-4">
                  <h3 className="font-medium text-foreground text-sm mb-2 line-clamp-2 group-hover:text-success transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Por {course.instructor}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* YouTube Channel Link */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl">
              <Youtube className="w-6 h-6 text-[#FF0000]" />
              <span className="text-muted-foreground">¿Querés más contenido gratis?</span>
              <a 
                href="https://youtube.com/@lsnetinformatica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FF0000] font-medium hover:underline"
              >
                Visitá nuestro canal de YouTube →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-background opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-10">
              <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-success" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join 10,000+ Tech Enthusiasts
              </h2>
              <p className="text-muted-foreground mb-8">
                Get weekly tips on automation, AI tools, and the latest tech trends. 
                No spam, just value.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-background flex-grow"
                />
                <Button 
                  type="submit" 
                  variant="hero"
                  disabled={isSubmitting}
                  className="flex-shrink-0"
                >
                  {isSubmitting ? "Joining..." : (
                    <>
                      Subscribe
                      <Zap className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4">
                Join our community. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademyPage;
