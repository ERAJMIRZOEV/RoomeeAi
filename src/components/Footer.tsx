import Link from "next/link";
import { SubFooter } from "./SubFooter";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="w-full bg-[#F1F5F9] text-slate-800">
      {/* Основной контент подвала (1440px) */}
      <Container>
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Колонка 1: Логотип и о проекте */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
                R
              </span>
              <span className="text-xl font-bold text-slate-900">Roomee.tj</span>
            </div>
            <p className="text-sm text-slate-600">
              Премиальная площадка недвижимости в Душанбе. Мы помогаем находить лучшие варианты для жизни и инвестиций в Таджикистане.
            </p>
          </div>

          {/* Колонка 2: Компания */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-slate-900">Компания</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  Карьера
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  Новости
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Поддержка */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-slate-900">Поддержка</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              <li>
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  Правила пользования
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-slate-900">Контакты</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-600">
              <li>ул. Рудаки, 12, Душанбе</li>
              <li>+992 00 000 0000</li>
              <li>info@roomee.tj</li>
            </ul>
          </div>

        </div>
      </div>
      {/* Нижняя узкая полоса */}
      <SubFooter />
     </Container>
    </footer>
  );
}