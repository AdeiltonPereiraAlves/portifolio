

function Card({ titlulo, projetos, img }) {

    return (
        <div className="flex w-56 h-64 flex-col">
            <h1 className="text-white p-5">{titlulo}</h1>
            <div>
                <a href={projetos} target="blank"><img src={img} alt="projeto01" /></a>
            </div>
        </div>
    )
}
export default Card;