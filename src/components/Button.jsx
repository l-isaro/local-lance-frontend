export default function Button(props) {
  return (
    <button className="bg-web-blue p-3 rounded-md text-white" onClick={props.onClick}>{props.text}</button>
  )
}
