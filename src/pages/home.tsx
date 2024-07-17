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

interface fetchResponseProps {
  success: boolean;
  locations: InfoCardProps[];
  wp_total: number;
  total: number;
}

export function Home() {
  const [businessUnits, setBusinessUnits] = useState<InfoCardProps[]>([]);

  const fetchBusinessUnits = async (): Promise<fetchResponseProps> => {
    const response = await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json');
    const responseJson: fetchResponseProps = await response.json();
    return responseJson;
  }

  const getResponse = async (data: dataFetchProps) => {
    console.log(data);
    if (data.period === '') {
      setBusinessUnits([])
      return
    }
    if (data.showAlways) {
      const response = await fetchBusinessUnits();
      if (response.success !== true) {
        alert('Erro ao buscar unidades');
        return
      }
      setBusinessUnits(response.locations);
      return
    }
    if (!data.showAlways) {
      const response = await fetchBusinessUnits();
      if (response.success !== true) {
        alert('Erro ao buscar unidades');
        return
      }
      response.locations.filter((unit) => {
        unit.schedules.filter((schedule) => {
          if (schedule.weekdays === data.period) {
            return unit
          }
        })
      })
    }
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
        <ChosePeriodCard onSubmit={getResponse} totalResults={businessUnits.length} />
        {businessUnits.length != 0 &&
          <Infos />
        }
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