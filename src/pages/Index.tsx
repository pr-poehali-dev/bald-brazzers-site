import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'web', image: '/placeholder.svg', description: 'Современный интернет-магазин с корзиной' },
  { id: 2, title: 'Mobile Banking App', category: 'mobile', image: '/placeholder.svg', description: 'Мобильное приложение для банка' },
  { id: 3, title: 'Brand Identity', category: 'design', image: '/placeholder.svg', description: 'Фирменный стиль для стартапа' },
  { id: 4, title: 'SaaS Dashboard', category: 'web', image: '/placeholder.svg', description: 'Админ-панель для SaaS продукта' },
  { id: 5, title: 'Food Delivery App', category: 'mobile', image: '/placeholder.svg', description: 'Приложение доставки еды' },
  { id: 6, title: 'Marketing Website', category: 'design', image: '/placeholder.svg', description: 'Лендинг для маркетингового агентства' },
];

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Figma', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
];

const experience = [
  { year: '2023-2024', company: 'Tech Startup', position: 'Senior Frontend Developer', description: 'Разработка веб-приложений на React' },
  { year: '2021-2023', company: 'Digital Agency', position: 'Full Stack Developer', description: 'Создание сайтов и мобильных приложений' },
  { year: '2019-2021', company: 'Freelance', position: 'Web Developer', description: 'Фриланс-проекты для различных клиентов' },
];

const testimonials = [
  { name: 'Алексей Иванов', position: 'CEO, StartupCo', text: 'Отличный специалист! Выполнил проект в срок и превзошел ожидания.', avatar: '/placeholder.svg' },
  { name: 'Мария Петрова', position: 'Marketing Director', text: 'Профессиональный подход к каждой детали. Рекомендую!', avatar: '/placeholder.svg' },
  { name: 'Дмитрий Сидоров', position: 'Product Owner', text: 'Креативные решения и высокое качество работы. Буду обращаться снова.', avatar: '/placeholder.svg' },
];

const Index = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Портфолио', 'Навыки', 'Опыт', 'Отзывы', 'Контакты'].map((item, i) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'portfolio', 'skills', 'experience', 'testimonials', 'contact'][i])}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Icon name="User" size={64} className="text-primary" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Иван Иванов
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Frontend Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Создаю современные веб-приложения и мобильные интерфейсы с фокусом на пользовательский опыт
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('portfolio')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Посмотреть работы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              Связаться
              <Icon name="Mail" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Портфолио
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Избранные проекты</p>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              { id: 'all', label: 'Все проекты', icon: 'Grid3x3' },
              { id: 'web', label: 'Web', icon: 'Globe' },
              { id: 'mobile', label: 'Mobile', icon: 'Smartphone' },
              { id: 'design', label: 'Design', icon: 'Palette' },
            ].map(cat => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? 'default' : 'outline'}
                onClick={() => setFilter(cat.id)}
                className={filter === cat.id ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 border-transparent hover:border-primary/20" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-primary mb-2">{project.category}</Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Навыки
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Технологии и инструменты</p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, i) => (
              <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Опыт работы
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Моя карьера</p>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, i) => (
              <Card key={i} className="border-l-4 border-primary hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Icon name="Briefcase" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-bold">{exp.position}</h4>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="text-sm">{exp.year}</Badge>
                      </div>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Отзывы клиентов
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят обо мне</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Контакты
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь со мной</p>
          
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Имя</label>
                  <Input placeholder="Ваше имя" className="border-2" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Email</label>
                  <Input type="email" placeholder="your@email.com" className="border-2" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={5} className="border-2" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity" size="lg">
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: 'Github', label: 'GitHub' },
              { icon: 'Linkedin', label: 'LinkedIn' },
              { icon: 'Mail', label: 'Email' },
              { icon: 'Phone', label: 'Phone' },
            ].map(social => (
              <Button key={social.label} variant="outline" size="icon" className="w-12 h-12 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Icon name={social.icon as any} size={20} />
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-white/80 backdrop-blur-lg border-t border-purple-100">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Иван Иванов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
