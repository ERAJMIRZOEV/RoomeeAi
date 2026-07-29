import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Building2, Plus, User } from "lucide-react";
import { Container } from "./ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[81px] w-full items-center border-b bg-[#F6F7F9] px-6 md:px-12">
      <Container>
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4">
        
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Building2 className="h-6 w-6" />
          <span>Roomee<span className="text-blue-600">.tj</span></span>
        </Link>

        {/* Поиск (Показывается на средних и больших экранах) */}
        <div className="relative hidden max-w-md flex-1 sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Поиск по названию или району..." 
            className="bg-white pl-9 rounded-xl border-gray-200"
          />
        </div>

        {/* Навигация / Действия */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex gap-2 rounded-xl bg-white">
            <Plus className="h-4 w-4" />
            <span>Подать объявление</span>
          </Button>

          <Button size="icon" variant="ghost" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>

      </div>
      </Container>
    </header>
  );
}