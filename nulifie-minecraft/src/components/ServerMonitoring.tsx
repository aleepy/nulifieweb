import { Card } from "@/components/ui/card";

type ServerCardProps = {
  name: string;
  version: string;
  players: number;
  isOnline: boolean;
  isWipe?: boolean;
  icon: string;
};

const ServerCard = ({ name, version, players, isOnline, isWipe = false, icon }: ServerCardProps) => {
  return (
    <div>
      <Card className="glassmorphism rounded-lg overflow-hidden border-0 h-full">
        <div className="flex items-center p-4">
          <div className="relative mr-4">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <img src={icon} alt={name} className="w-full h-full object-contain" />
            </div>
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{name}</h3>
              {isWipe && (
                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
                  ВАЙП
                </span>
              )}
            </div>
            <p className="text-gray-400">{version}</p>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1">
                <span className={`text-sm ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
                  {isOnline ? 'Онлайн' : 'Офлайн'}
                </span>
              </div>
              <span className="text-sm font-medium">{players}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default function ServerMonitoring() {
  const servers = [
    {
      name: "HardTech",
      version: "1.20.1",
      players: 82,
      isOnline: true,
      icon: "/server-icon-1.png"
    },
    {
      name: "HiTech",
      version: "1.20.1",
      players: 28,
      isOnline: true,
      isWipe: true,
      icon: "/server-icon-2.png"
    },
    {
      name: "TerraFirmaCreate",
      version: "1.20.1",
      players: 16,
      isOnline: true,
      icon: "/server-icon-3.png"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold relative">
            Моніторинг
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent" />
          </h2>
          <div className="text-xl font-medium">
            Загальний онлайн: <span className="text-gradient">241</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map((server) => (
            <ServerCard key={server.name} {...server} />
          ))}
        </div>
      </div>
    </section>
  );
}
