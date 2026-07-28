import Link from "next/link";

export function SubFooter() {
  return (
    <div className="w-full border-t border-gray-200 bg-[#F6F7F9] py-4 text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 sm:flex-row md:px-12">
        {/* Копирайт */}
        <p>© 2026 Roomee.tj. Все права защищены.</p>

        {/* Ссылки */}
        <div className="flex items-center gap-6">
          <Link href="#" className="transition-colors hover:text-foreground hover:underline">
            Правила сервиса
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground hover:underline">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </div>
  );
}