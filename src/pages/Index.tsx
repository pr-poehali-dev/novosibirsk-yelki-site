import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const trees = [
  {
    id: 1,
    name: "Сосна обыкновенная",
    height: "1.5-2 м",
    price: "2 500 ₽",
    image: "https://cdn.poehali.dev/projects/b55356ac-8bf6-460a-834d-01b281083e6f/files/536814ce-97f7-4b25-8451-abea5b68ebfe.jpg",
    description: "Классическая сосна с пушистыми ветками"
  },
  {
    id: 2,
    name: "Ель европейская",
    height: "1.8-2.2 м",
    price: "3 200 ₽",
    image: "https://cdn.poehali.dev/projects/b55356ac-8bf6-460a-834d-01b281083e6f/files/86afc7b2-4678-44ed-93c0-2167c15d5830.jpg",
    description: "Ароматная ель с густой хвоей"
  },
  {
    id: 3,
    name: "Пихта нордмана",
    height: "2-2.5 м",
    price: "4 500 ₽",
    image: "https://cdn.poehali.dev/projects/b55356ac-8bf6-460a-834d-01b281083e6f/files/9dc1c58f-a591-49ff-ae87-e4560be29120.jpg",
    description: "Премиум-пихта, не осыпается долго"
  }
];

const Index = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/79994523500', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+79994523500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            🎄 Ёлки Новосибирск
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
            <a href="#delivery" className="hover:text-accent transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Живые новогодние ёлки
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Доставим праздник прямо к вашему дому! Свежие ёлки и пихты от 2500₽
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp} 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-lg font-semibold"
              >
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Написать в WhatsApp
              </Button>
              <Button 
                onClick={handleCall} 
                size="lg" 
                variant="outline"
                className="text-lg font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon name="Phone" className="mr-2" size={24} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Наш каталог ёлок
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trees.map((tree, index) => (
              <Card 
                key={tree.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-2 hover:border-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={tree.image} 
                    alt={tree.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{tree.name}</CardTitle>
                  <CardDescription className="text-base">{tree.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Ruler" size={20} />
                      <span>{tree.height}</span>
                    </div>
                    <div className="text-2xl font-bold text-secondary">
                      {tree.price}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleWhatsApp} 
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Доставка и оплата
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Бесплатная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  По Новосибирску при заказе от 3000₽
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставим в день заказа или в удобное время
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" size={32} className="text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наличными или картой при получении
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Контакты
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                <CardDescription className="text-lg">
                  Мы работаем ежедневно с 9:00 до 21:00
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <Icon name="Phone" size={28} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <a href="tel:+79994523500" className="text-xl font-semibold text-primary hover:text-secondary transition-colors">
                      +7 (999) 452-35-00
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <Icon name="MessageCircle" size={28} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a 
                      href="https://wa.me/79994523500" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      +7 (999) 452-35-00
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <Icon name="MapPin" size={28} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Город</p>
                    <p className="text-xl font-semibold text-primary">
                      Новосибирск
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button 
                  onClick={handleWhatsApp} 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90"
                >
                  <Icon name="MessageCircle" className="mr-2" size={24} />
                  Написать в WhatsApp
                </Button>
                <Button 
                  onClick={handleCall} 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="Phone" className="mr-2" size={24} />
                  Позвонить сейчас
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">🎄 Ёлки Новосибирск</p>
          <p className="text-sm opacity-80">Создадим новогоднее настроение вместе!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
