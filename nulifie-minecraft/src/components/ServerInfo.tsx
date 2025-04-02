import { Card } from "@/components/ui/card";

type InfoCardProps = {
  title: string;
  description: string;
};

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <Card className="glassmorphism rounded-lg overflow-hidden border-0 h-full p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
      </div>
    </Card>
  );
};

export default function ServerInfo() {
  const infoBlocks = [
    {
      title: "Середньовічне РП",
      description: "Погрузіться в атмосферу середньовіччя! На сервері реалізовані механіки ковальства, магії, міст та війн. Створюйте свої історії та взаємодійте з іншими гравцями."
    },
    {
      title: "Світ Екзайл",
      description: "Дві могутні фракції борються за контроль над світом Екзайл. Приєднуйтесь до Принципату або Вигнанців, щоб вплинути на долю цього загадкового світу."
    },
    {
      title: "Унікальні Механіки",
      description: "Кастомні плагіни додають глибину геймплею: від системи ковальства до магічних механік. Кожен знайде щось для себе в цьому багатому світі."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold relative">
            Про Сервер
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoBlocks.map((block) => (
            <InfoCard key={block.title} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
} 