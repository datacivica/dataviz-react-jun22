const funcionQueRegresaHola = () => "hola";
const saludo = 'saludos';
export const funcionQueRegresaAdiós = () => "adiós";

const funcionQueRegresaElStringQueDigas = (str) => {
  if (typeof str === "string") return str;
};

export { funcionQueRegresaHola, saludo };
export default funcionQueRegresaElStringQueDigas;
