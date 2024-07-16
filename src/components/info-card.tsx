interface InfoCardProps {
  title: string;
  items: { description: string, img: string }[];
}

export function InfoCard(props: InfoCardProps) {
  return (
    <div className="text-center p-4">
      <p className="font-poppins font-semibold text-lg">{props.title}</p>
      <div className="flex gap-2 mt-8 items-center justify-center">
        {props.items.map((item, index) => (
          <div key={index} className="">
            <img src={item.img} alt="" className="h-20 w-20" />
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
