import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'exams', label: 'Отчет экзаменов', icon: 'FileText' },
    { id: 'cadets', label: 'Отчет товарищей', icon: 'Users' },
    { id: 'recruitment', label: 'Отчет о наборах', icon: 'UserPlus' },
    { id: 'internships', label: 'Отчет по стажировкам', icon: 'Briefcase' },
    { id: 'guide', label: 'Руководство', icon: 'BookOpen' },
    { id: 'applications', label: 'Заявки в Рус. Состав', icon: 'FileSignature' },
    { id: 'reports', label: 'Вся отчетность', icon: 'BarChart' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-primary" size={24} />
              </div>
              <h1 className="text-xl font-bold">Kingsmans</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {menuItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">
            Добро пожаловать в Military Academy
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Подразделение Military Academy, далее MA. Представляет собой специализированное подразделение, предназначенное для подготовки и обучения будущих офицеров, которые будут служить в рядах U.S. Army.
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="position" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span className="font-medium">Положение Military Academy</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Подразделение занимается подготовкой новых курсантов для службы в армии. Здесь проводятся основные занятия по военной подготовке, физической культуре и теоретическим дисциплинам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="instruction" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="GraduationCap" className="text-primary" size={20} />
                  <span className="font-medium">Вводный инструктаж</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                <div className="space-y-3">
                  <p>Все новые курсанты проходят обязательный вводный инструктаж, который включает:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ознакомление с уставом и правилами внутреннего распорядка</li>
                    <li>Инструктаж по технике безопасности</li>
                    <li>Введение в организационную структуру</li>
                    <li>Изучение базовых команд и строевой подготовки</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="military-faq" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="HelpCircle" className="text-primary" size={20} />
                  <span className="font-medium">Вопросы по Военному билету</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Как получить военный билет?</h4>
                    <p>Военный билет выдается после успешного прохождения всех этапов обучения и сдачи экзаменов.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Срок действия документа</h4>
                    <p>Военный билет действителен на протяжении всего периода службы.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="exam-faq" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="ClipboardList" className="text-primary" size={20} />
                  <span className="font-medium">Вопросы для экзаменов</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                <div className="space-y-3">
                  <p>Экзаменационные вопросы охватывают следующие области:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Военная история и тактика</li>
                    <li>Устав вооруженных сил</li>
                    <li>Физическая подготовка</li>
                    <li>Оказание первой помощи</li>
                    <li>Обращение с оружием</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="applications" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="FileCheck" className="text-primary" size={20} />
                  <span className="font-medium">Проверка электронных заявлений</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Все заявления проверяются в течение 24 часов. Статус вашего заявления можно отследить в личном кабинете. При возникновении вопросов обращайтесь к вашему инструктору.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lectures" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="Presentation" className="text-primary" size={20} />
                  <span className="font-medium">Проведение лекции</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Лекции проводятся ежедневно с 09:00 до 18:00. Расписание доступно на информационном стенде. Обязательно присутствие всех курсантов. Пропуски допускаются только по уважительным причинам.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="training" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="Dumbbell" className="text-primary" size={20} />
                  <span className="font-medium">Проведение тренировки</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Физические тренировки проводятся дважды в день: утренняя зарядка в 06:00 и вечерняя тренировка в 17:00. Включают бег, силовые упражнения и командные игры.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="practice" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="Target" className="text-primary" size={20} />
                  <span className="font-medium">Проведение практики</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Практические занятия включают стрельбы на полигоне, тактические учения на местности, работу с оборудованием и групповые задания. Все мероприятия проходят под контролем опытных инструкторов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recruitment" className="border border-border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon name="UserCog" className="text-primary" size={20} />
                  <span className="font-medium">Проведение набора</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground">
                Набор новых курсантов проводится ежеквартально. Требования: возраст 18-25 лет, среднее образование, прохождение медицинской комиссии и физических тестов. Подробности на сайте приемной комиссии.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <footer className="mt-20 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Скоро будет крутой сайт для всех подразделений.
            </p>
            <p className="text-sm text-muted-foreground">
              v0.1 — Разработчик: Mason Hartford A88L
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;