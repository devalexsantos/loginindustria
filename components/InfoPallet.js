export default function InfoPallet() {
    return (
        <div className="flex justify-center bg-primary py-6">
        <div className="flex flex-wrap justify-center pt-9 container text-center">
            <div className="flex justify-center m-4">
                <div className="flex flex-col justify-center">
                    <div className="flex w-full justify-center">
                        <div className="flex justify-center items-center transition duration-500 ease-in-out h-[90px] w-[90px] transform hover:scale-110 border-2 rounded-full mb-4">
                            <i className="far fa-file-pdf text-white text-5xl"></i>
                        </div>
                    </div>
                <p className="text-center text-white font-bold">Catálogos</p>
                <p className="text-white">Download de Catálogos <br />e materiais</p>
                </div>
            </div>

            <div className="flex justify-center m-4">
                <div className="flex flex-col justify-center">
                    <div className="flex w-full justify-center">
                        <div className="flex justify-center items-center transition duration-500 ease-in-out h-[90px] w-[90px] transform hover:scale-110 border-2 rounded-full mb-4">
                            <i className="fa fa-cogs text-white text-4xl"></i>
                        </div>
                    </div>
                <p className="text-center text-white font-bold">Suporte Técnico</p>
                <p className="text-white">Consulta - Registro - Chamados</p>
                </div>
            </div>

            <div className="flex justify-center m-4">
                <div className="flex flex-col justify-center">
                    <div className="flex w-full justify-center">
                        <div className="flex justify-center items-center transition duration-500 ease-in-out h-[90px] w-[90px] transform hover:scale-110 border-2 rounded-full mb-4">
                            <i className="fa fa-download text-white text-4xl"></i>
                        </div>
                    </div>
                <p className="text-center text-white font-bold">Central de Downloads</p>
                <p className="text-white">Drivers</p>
                </div>
            </div>

            <div className="flex justify-center m-4">
                <div className="flex flex-col justify-center">
                    <div className="flex w-full justify-center">
                        <div className="flex justify-center items-center transition duration-500 ease-in-out h-[90px] w-[90px] transform hover:scale-110 border-2 rounded-full mb-4">
                            <i className="fa fa-cloud-upload text-white text-4xl"></i>
                        </div>
                    </div>
                <p className="text-center text-white font-bold">Softwares</p>
                <p className="text-white">Diagnóstico - Monitoramento</p>
                </div>
            </div>
        </div>
        </div>
    )
}