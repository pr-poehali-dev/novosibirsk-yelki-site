import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const trees = [
  {
    id: 1,
    name: "Искусственная ель классическая",
    height: "1.5-2 м",
    price: "3 500 ₽",
    oldPrice: "4 200 ₽",
    badge: "Хит продаж",
    image: "https://cdn.poehali.dev/projects/b55356ac-8bf6-460a-834d-01b281083e6f/files/536814ce-97f7-4b25-8451-abea5b68ebfe.jpg",
    description: "Пушистая ель с металлической подставкой"
  },
  {
    id: 2,
    name: "Искусственная сосна премиум",
    height: "1.8-2.2 м",
    price: "4 800 ₽",
    oldPrice: "5 900 ₽",
    badge: "Скидка -19%",
    image: "https://cdn.poehali.dev/projects/b55356ac-8bf6-460a-834d-01b281083e6f/files/86afc7b2-4678-44ed-93c0-2167c15d5830.jpg",
    description: "Реалистичная хвоя, легкая сборка"
  },
  {
    id: 3,
    name: "Искусственная ель люкс",
    height: "2-2.5 м",
    price: "6 900 ₽",
    oldPrice: "8 500 ₽",
    badge: "Премиум",
    image: "https://cdn.poehali.dev/projects/b55356ac-8bf6-460a-834d-01b281083e6f/files/9dc1c58f-a591-49ff-ae87-e4560be29120.jpg",
    description: "Густая хвоя премиум-качества, не осыпается"
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
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
              <a href="#delivery" className="hover:text-accent transition-colors">Доставка</a>
              <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
            </nav>
            <Button 
              onClick={handleWhatsApp}
              size="sm"
              className="bg-secondary hover:bg-secondary/90 font-semibold"
            >
              <Icon name="MessageCircle" className="mr-1" size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block bg-secondary text-white px-6 py-2 rounded-full mb-4 text-sm font-semibold animate-pulse">
              🔥 Предновогодняя распродажа до 31 декабря
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Искусственные новогодние ёлки
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Создадим праздник на долгие годы! Качественные искусственные ёлки от 3500₽
            </p>
            <p className="text-lg text-secondary font-semibold mb-8">
              ⏰ Успейте заказать! Осталось всего 12 ёлок на складе
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
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in border-2 hover:border-secondary relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {tree.badge}
                </div>
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
                    <div className="flex flex-col items-end">
                      <div className="text-sm text-muted-foreground line-through">
                        {tree.oldPrice}
                      </div>
                      <div className="text-2xl font-bold text-secondary">
                        {tree.price}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button 
                    onClick={handleWhatsApp} 
                    className="w-full bg-secondary hover:bg-secondary/90 text-lg font-semibold"
                  >
                    🎁 Заказать со скидкой
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    ✓ Гарантия 3 года ✓ Бесплатная доставка
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Почему искусственные ёлки?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">Служит годами</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Одна покупка на 5-10 лет использования
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Не осыпается</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Никаких иголок на полу весь праздник
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wallet" size={32} className="text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Экономия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Окупается за 2-3 года по сравнению с живой
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Компактное хранение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Легко разобрать и убрать до следующего года
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white border-y-2 border-primary/10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
            Нам доверяют более 500 семей в Новосибирске
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-secondary mb-2">3 года</div>
              <p className="text-sm text-muted-foreground">Гарантия качества</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-secondary mb-2">4.9★</div>
              <p className="text-sm text-muted-foreground">Средний рейтинг</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Возврат денег</p>
            </div>
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

      <section id="contacts" className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-secondary text-white px-6 py-2 rounded-full mb-4 text-sm font-semibold">
              🎁 Закажите сейчас и получите подарок!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Готовы заказать ёлку?
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом — ответим за 2 минуты!
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-2 border-secondary/20">
              <CardHeader className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardTitle className="text-2xl">Контакты для заказа</CardTitle>
                <CardDescription className="text-lg">
                  ⏰ Работаем ежедневно с 9:00 до 21:00
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
              <CardFooter className="flex flex-col gap-3 bg-gradient-to-br from-primary/5 to-secondary/5">
                <Button 
                  onClick={handleWhatsApp} 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Icon name="MessageCircle" className="mr-2" size={24} />
                  💬 Заказать в WhatsApp
                </Button>
                <Button 
                  onClick={handleCall} 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-primary hover:bg-primary hover:text-primary-foreground text-lg font-bold transition-all hover:scale-105"
                >
                  <Icon name="Phone" className="mr-2" size={24} />
                  📞 Позвонить сейчас
                </Button>
                <p className="text-center text-sm text-secondary font-semibold mt-2">
                  ⚡ Ответим в течение 2 минут!
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button 
          onClick={handleWhatsApp}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 shadow-2xl rounded-full w-16 h-16 p-0 animate-pulse hover:animate-none"
        >
          <Icon name="MessageCircle" size={32} />
        </Button>
      </div>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">🎄 Ёлки Новосибирск</p>
          <p className="text-sm opacity-80 mb-3">Создадим новогоднее настроение вместе!</p>
          <div className="flex justify-center gap-4 text-sm">
            <span>✓ Гарантия 3 года</span>
            <span>✓ Бесплатная доставка</span>
            <span>✓ 500+ клиентов</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;