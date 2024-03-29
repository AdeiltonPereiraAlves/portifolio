import Card from "../components/Card";
import Projeto01 from '../../public/projeto01.png'
import Projeto02 from '../../public/galeria.png'
import Projeto03 from '../../public/guia.png'
import Projeto04 from '../../public/todoreact.png'

const listaTarefas = "https://adeiltonpereiraalves.github.io/lista04script/";
const galeriaAnimes = "https://adeiltonpereiraalves.github.io/galeriadeanimes/";

const guia = "https://guiaturistico-mlrwx1qko-adeiltonpereiraalves-projects.vercel.app/";
const todo = "https://todo-react-19ajgdhsl-adeiltonpereiraalves-projects.vercel.app/";

let lista = "Lista de Tarefas";
let galeriaTitulo = "Galeria de Animes";
let guiaTitulo = "Guia Turistico";
let todoReact = "Todo-React";


function Xp() {
    return (
        <div className="flex bg-black h-2/3 flex-col items-center">
            <div className="flex gap-2">
                <h2 className="text-white">Xp </h2>

                <p className="text-white"> Projetos</p>

            </div>
            <div className="flex gap-5 justify-center flex-wrap">
                <Card titlulo={lista} projetos={listaTarefas} img={Projeto01} />
                <Card titlulo={galeriaTitulo} projetos={galeriaAnimes} img={Projeto02} />
                <Card titlulo={guiaTitulo} projetos={guia} img={Projeto03} />
                <Card titlulo={todoReact} projetos={todo} img={Projeto04} />

            </div>



        </div>
    )
}
export default Xp;