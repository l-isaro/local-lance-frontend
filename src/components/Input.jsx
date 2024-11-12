export default function Input(props) {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="p-3 border rounded-md w-80"
    />
  );
}
