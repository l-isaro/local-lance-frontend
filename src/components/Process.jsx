export default function Process({ img, title, paragraph }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <img src={img} alt="" className="w-1/4"/>
      <div className="w-2/3">
        <h3 className="text-black">{title}</h3>
        <p className=" text-center">{paragraph}</p>
      </div>
    </div>
  );
}
