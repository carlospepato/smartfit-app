import { getImg } from '../utils/getImg'

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

const maskImg: { [key: string]: string } = {
  "required": getImg.maskImgRequired,
  "recommended": getImg.maskImgRecommended
};

const towelImg: { [key: string]: string } = {
  "required": getImg.towelImgRequired,
  "recommended": getImg.towelImgRecommended
};

const fountainImg: { [key: string]: string } = {
  "not_allowed": getImg.forbiddenImgFountain,
  "partial": getImg.parcialImgFountain
};

const lockerRoomImg: { [key: string]: string } = {
  "allowed": getImg.requiredImgLockers,
  "partial": getImg.parcialImgLockers,
  "closed": getImg.forbiddenImgLockers
};

export function BusinessUnitCard({ title, content, opened, mask, towel, fountain, locker_room, schedules }: InfoCardProps) {
  return (
    <div className="w-full bg-zinc-200 rounded-md shadow-md px-2 pt-1">
      <span
        className={`font-semibold font-poppins text-sm ${opened ? 'text-emerald-500' : 'text-rose-500'}`}>
        {opened ? 'Aberto' : 'Fechado'}
      </span>
      <div className="mt-2 border-b-2 border-zinc-300">
        <h1 className="text-xl font-semibold font-poppins">{title}</h1>
        <div
          className="text-sm font-poppins text-zinc-500"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="grid grid-cols-4 p-2">
        <img src={maskImg[mask]} alt="" className="h-16 w-16" />
        <img src={towelImg[towel]} alt="" className="h-16 w-16" />
        <img src={fountainImg[fountain]} alt="" className="h-16 w-16" />
        <img src={lockerRoomImg[locker_room]} alt="" className="h-16 w-16" />
      </div>
      <div className="grid grid-cols-2">
        {schedules &&
          schedules.map((schedule, index) => (
            <div key={index} className="grid grid-cols-1">
              <h2 className="text-xl font-semibold font-poppins">{schedule.weekdays}</h2>
              <span className="text-sm font-normal font-poppins">{schedule.hour}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}