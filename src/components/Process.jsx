export default function Process({ img, title, paragraph }) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h3 className="text-black">{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
