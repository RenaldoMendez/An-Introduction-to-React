export default function (props) {
  return (
    <div>
      <ol>
        {props.listOfItems.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
}
