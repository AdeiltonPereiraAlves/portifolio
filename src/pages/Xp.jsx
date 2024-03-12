import Card from "../components/Card";
import Projeto01 from '../../public/projeto01.png'
import Projeto02 from '../../public/galeria.png'

const listaTarefas = "https://adeiltonpereiraalves.github.io/lista04script/";
const galeriaAnimes = "https://adeiltonpereiraalves.github.io/galeriadeanimes/";
const guiaTuristico = "https://guiaturistico-mlrwx1qko-adeiltonpereiraalves-projects.vercel.app/";
let lista = "Lista de Tarefas"
function Xp() {
    return (
        <div className="flex bg-black h-2/3 flex-col items-center">
            <div className="flex gap-2">
                <h2 className="text-white">Xp </h2>

                <p className="text-white"> Projetos</p>

            </div>
            <div className="flex gap-5 justify-center">
                <Card titlulo={lista} projetos={listaTarefas} img={Projeto01} />
                <Card titlulo={lista} projetos={galeriaAnimes} img={Projeto02} />
                <Card titlulo={lista} projetos={guiaTuristico} img={Projeto01} />

            </div>



        </div>
    )
}
export default Xp;