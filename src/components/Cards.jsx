const Cards = ({ input1, input2 }) => {
  return (
    <div className="respuesta">
      <h3>Hola {input1}!</h3>
      <h4>Tu color favorito es:</h4>
      <button type="reset">{input2}</button>
    </div>
  );
};

export default Cards;
