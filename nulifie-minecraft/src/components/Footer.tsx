import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent -z-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Нуліфай</h3>
            <p className="text-gray-400 mb-4">
            Сервер середньовічного РП та ворлдбілдінгу в світі Екзайл. Кастомні механіки ковальства, магії, міст та війн чекають на тебе!
            </p>
            <div className="flex gap-4">
              <Link
                href="https://discord.gg/nulifie"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <svg xmlns="https://nulifie.fandom.com/uk/wiki/%D0%92%D1%96%D0%BA%D1%96_%D0%9D%D1%83%D0%BB%D1%96%D1%84%D0%B0%D0%B9" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </Link>
              <Link
                href="https://nulifie.fandom.com/uk/wiki/%D0%92%D1%96%D0%BA%D1%96_%D0%9D%D1%83%D0%BB%D1%96%D1%84%D0%B0%D0%B9"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"/></svg>
              </Link>
              <Link
                href="https://t.me/nulifie"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Головна</Link></li>
              <li><Link href="/rules" className="text-gray-400 hover:text-white transition-colors">Правила</Link></li>
              <li><Link href="/history" className="text-gray-400 hover:text-white transition-colors">Історія</Link></li>
              <li><Link href="https://nulifie.fandom.com/uk/wiki/%D0%92%D1%96%D0%BA%D1%96_%D0%9D%D1%83%D0%BB%D1%96%D1%84%D0%B0%D0%B9" className="text-gray-400 hover:text-white transition-colors" target="_blank">Вікі</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Інформація</h3>
            <ul className="space-y-2">
              <li><Link href="https://form.jotform.com/242587274838370" className="text-gray-400 hover:text-white transition-colors" target="_blank">Подати заявку</Link></li>
              <li><Link href="https://discord.gg/3gjJVznu" className="text-gray-400 hover:text-white transition-colors" target="_blank">Приєднатися до Discord</Link></li>
              <li><Link href="https://t.me/nulifiechat" className="text-gray-400 hover:text-white transition-colors">Телеграм чат </Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Нуліфай. Усі права захищені.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-gray-400">Політика конфіденційності</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
