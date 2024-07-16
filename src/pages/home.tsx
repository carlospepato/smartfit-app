import { useState } from "react";
import { BusinessUnitCard } from "../components/business-unit-card";
import { ChosePeriodCard } from "../components/chose-period-card";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Infos } from "../components/infos";

interface dataFetchProps {
  period: string;
  showAlways: boolean;
}

interface InfoCardProps {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: 'required' | 'recommended';
  towel: 'required' | 'recommended';
  fountain: 'partial' | 'not_allowed';
  locker_room: 'opened' | 'partial' | 'closed';
  schedules: {
    weekdays: string,
    hour: string
  }[];
}

export function Home() {
  const [businessUnits, setBusinessUnits] = useState<InfoCardProps[]>([]);

  const fetchBusinessUnits = async (data: dataFetchProps) => {
    console.log(data);
    const response = await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json').then(res => res.json());
    console.log(response);
    if (response.success !== true) {
      alert('Erro ao buscar unidades');
      return
    }
    setBusinessUnits(response.locations);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow max-w-6xl mx-auto my-10 px-4">
        <h1 className="font-poppins font-bold text-4xl w-80 tracking-tight">REABERTURA SMART FIT</h1>
        <div className="w-20 h-3 bg-zinc-950 my-6" />
        <p className="font-poppins text-lg my-8">O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso
          confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
        </p>
        <ChosePeriodCard onSubmit={fetchBusinessUnits} />
        <Infos />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessUnits &&
            businessUnits.map((unit: InfoCardProps, index) => (
              unit.opened !== undefined && <BusinessUnitCard key={index} {...unit} />
            ))}
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}