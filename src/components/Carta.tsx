type Props = {
numero: number;
Pinta: string
mostrarCarta: (numero: number, pinta:string) => void;
};

function Carta({ numero, Pinta, mostrarCarta}: Props) {
        const handleClick = () => {
        mostrarCarta(numero,Pinta);
        };
return(
   <button  onClick={handleClick}>
    <h1> Hola soy una carta {numero + " " + Pinta}</h1>;
    </button>
    );
}



export default Carta