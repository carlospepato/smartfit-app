import { Clock9 } from "lucide-react";
import { SubmitHandler, useForm } from 'react-hook-form';

interface DataProps {
  period: string;
  showAlways: boolean;
}

interface ChosePeriodCardProps {
  onSubmit: (data: DataProps) => void;
  totalResults?: number;
}

export function ChosePeriodCard({ onSubmit, totalResults }: ChosePeriodCardProps) {
  const { register, handleSubmit, reset } = useForm<DataProps>();

  const handleFormSubmit: SubmitHandler<DataProps> = (data) => {
    onSubmit(data);
  };

  function clearAll() {
    reset();
    onSubmit({ period: '', showAlways: false });
  }

  return (
    <div className="w-full bg-zinc-50 shadow-sm border border-zinc-200 rounded-md">
      <div className="w-full p-4 flex items-center gap-2">
        <Clock9 className="text-orange-300" />
        <p className="font-medium font-poppins text-md">Horário</p>
      </div>
      <form className="w-full px-4 py-2" onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="font-poppins text-lg text-zinc-500 border-b-2 py-1">Qual período quer treinar?</h2>
        <div className="flex items-center gap-4 py-2 border-b-2 justify-between w-full">
          <input type="radio" id="morning" value="morning" {...register('period')} />
          <label htmlFor="morning" className="font-poppins text-md w-full">
            Manhã
          </label>
          <div className="min-w-[130px] justify-end flex">
            <span className="text-end w-full font-poppins">06:00 às 12:00</span>
          </div>
        </div>
        <div className="flex items-center gap-4 py-2 border-b-2 justify-between w-full">
          <input type="radio" id="afternoon" value="afternoon" {...register('period')} />
          <label htmlFor="afternoon" className="font-poppins text-md w-full">
            Tarde
          </label>
          <div className="min-w-[130px] justify-end flex">
            <span className="text-end w-full font-poppins">12:01 às 18:00</span>
          </div>
        </div>
        <div className="flex items-center gap-4 py-2 border-b-2 justify-between w-full">
          <input type="radio" id="night" value="night" {...register('period')} />
          <label htmlFor="night" className="font-poppins text-md w-full">
            Noite
          </label>
          <div className="min-w-[130px] justify-end flex">
            <span className="text-end font-poppins w-auto">18:01 às 23:00</span>
          </div>
        </div>
        <div className="flex items-center gap-4 py-8 justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="showAlways" {...register('showAlways')} />
            <label htmlFor="showAlways" className="font-poppins">Exibir unidades fechadas</label>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-poppins">Resultados encontrados:</p><span className="font-poppins font-medium">{totalResults}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
          <button className="bg-amber-500 rounded-md w-72 py-2.5 font-semibold hover:bg-amber-400" type="submit">
            Encontrar unidade
          </button>
          <button className="border border-zinc-400 rounded-md w-72 py-2.5 font-semibold hover:bg-zinc-300" type="button" onClick={() => clearAll()}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  )
}
