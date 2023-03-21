function Character() {
  return (
    <li className="li">
      <img
        className="image__character"
        src="https://ik.imagekit.io/hpapi/harry.jpg"
        alt="Foto del personaje"
        title="Foto del personaje"
      ></img>
      <label>Nombre</label>
      <label>Species</label>
      <label>Gender</label>
      <label>EyeColor</label>
      <label>ancestry</label>
    </li>
  );
}
export default Character;
