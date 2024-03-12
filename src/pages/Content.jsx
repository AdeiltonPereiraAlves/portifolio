import img from '../../public/adeilton.jpg'

function Content() {
    return (
        <div className=" flex-col bg-black  h-2/3 gap-5 justify-around">
            <div className='flex   w-full p-14 gap-5 justify-evenly'>
                <div className='flex flex-col w-1/3 '>
                    <h1 className="text-3xl text-zinc-500 mt-8">Olá, meu nome é <span className="text-white">Adeilton</span></h1>
                    <div className='mt-5'>
                        <p className='text-white'> Este é o meu portfólio digital! Aqui, você encontrará uma variedade de projetos que representam minha jornada como desenvolvedor web. Cada trabalho reflete minha dedicação em criar experiências online envolventes e funcionais. Estou animado para compartilhar meu trabalho com você e demonstrar como minhas habilidades podem contribuir para o sucesso do seu próximo projeto digital. Explore, inspire-se e entre em contato para discutir oportunidades de colaboração. Obrigado por visitar e espero que você aproveite sua visita ao meu portfólio!</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={img} alt="img" className='w-64 h-64 rounded-full' />
                </div>
            </div>
        </div>
    )
}
export default Content;