const PokeCard = (props) => {
  const { name, weight, id } = props.poke;

  return (
    <li key={id}>
      <div style={{ border: "2px solid white", marginTop: 10 }}>
        {name} - Weight: {weight}
      </div>
    </li>
  );
};

export default PokeCard;
