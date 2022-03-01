import './rFeatures.css'

export default function RFeatures(props) {
  return (
    <div className="RFeatures">
      <img src={props.image} alt="img" />
      <h2> {props.title} </h2>
      <p> {props.description} </p>
    </div>
  );
}
