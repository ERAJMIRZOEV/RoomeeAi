'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Building2, Plus, User } from 'lucide-react';
import { Container } from './ui/Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Активируем эффект прозрачности, если прокрутили больше 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex h-[81px] w-full items-center px-6 transition-all duration-300 md:px-12 ${
        isScrolled
          ? 'border-b border-gray-200/50 bg-white/70 backdrop-blur-md shadow-sm'
          : 'bg-[#F6F7F9] border-b border-gray-200'
      }`}
    >
      <Container>
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Building2 className="h-6 w-6" />
            <span>Roomee<span className="text-blue-600">.tj</span></span>
          </Link>

          {/* Поиск */}
          <div className="relative hidden max-w-md flex-1 sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Поиск по названию или району..." 
              className="bg-white/80 pl-9 rounded-xl border-gray-200/80 backdrop-blur-sm"
            />
          </div>

          {/* Навигация / Действия */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:flex gap-2 rounded-xl bg-white/80 backdrop-blur-sm">
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