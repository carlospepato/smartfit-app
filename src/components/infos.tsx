import { InfoCard } from "./info-card";
import { getImg } from '../utils/getImg'
export function Infos() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-zinc-200 shadow-md my-8 rounded-md space-y-4 md:space-y-0 md:space-x-4">
      <InfoCard
        title="Máscara"
        items={
          [
            { description: "Obrigatório", img: getImg.maskImgRequired },
            { description: "Recomendado", img: getImg.maskImgRecommended }
          ]
        }
      />
      <InfoCard
        title="Toalha"
        items={
          [
            { description: "Obrigatório", img: getImg.towelImgRequired },
            { description: "Recomendado", img: getImg.towelImgRecommended }
          ]
        }
      />
      <InfoCard
        title="Bebedouro"
        items={
          [
            { description: "Parcial", img: getImg.parcialImgFountain },
            { description: "Proibído", img: getImg.forbiddenImgFountain }
          ]
        }
      />
      <InfoCard
        title="Vestiários"
        items={
          [
            { description: "Liberado", img: getImg.requiredImgLockers },
            { description: "Parcial", img: getImg.parcialImgLockers },
            { description: "Proibido", img: getImg.forbiddenImgLockers }
          ]
        }
      />
    </div>
  )
}