import InputMask from 'react-input-mask';
import useFunctionsList from '../hooks/useFunctions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const { cep, setCep, setDadosCep, setModalOpen } = useFunctionsList();

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setCep(e.target.value)
    }

    const handlePost = async (dataViaCep) => {

        try {
            const response = await fetch(
                `http://localhost:5000/`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        cep: dataViaCep.cep,
                        logradouro: dataViaCep.logradouro,
                        complemento: dataViaCep.complemento,
                        bairro: dataViaCep.bairro,
                        cidade: dataViaCep.cidade,
                        estado: dataViaCep.estado
                    }),
                }
            );

            const data = await response.json();
            if (data.erro) {
                return;
            }
        }

        catch {

        }
    }

    const notify = () => toast.error("Cep invalido.", { theme: "colored" });

    const handleGet = async () => {

        try {
            const response = await fetch(
                `http://localhost:5000/${cep}`,
                {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                    }
                }
            );

            if (!response) {
                return
            }

            const data = await response.json();

            if (data.erro) {
                setCep('')
                notify()
                return;
            }
            if (data !== false) {
                setModalOpen(true)
                setDadosCep({
                    cepResultado: data.cep,
                    bairro: data.bairro,
                    logradouro: data.logradouro,
                    complemento: data.complemento,
                    localidade: data.localidade || data.cidade,
                    uf: data.uf || data.estado
                })

                handlePost({
                    cep: data.cep,
                    bairro: data.bairro,
                    logradouro: data.logradouro,
                    complemento: data.complemento,
                    cidade: data.localidade || data.cidade,
                    estado: data.uf || data.estado
                })
            }

            return data
        }

        catch {

        }
    }

    const handlePesquisa = async () => {

        if (cep.replace(/\D/g, "").length !== 8) {
            notify()
            setCep('')
            return
        }

        handleGet()

    }


    return (
        <div className='SearchHome'>
            <h1 className='titulo'>BUSCACEP</h1>
            <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
                <InputMask mask="99999-999" id='pesquisa' placeholder="Digite o CEP" maskChar={null} value={cep} onChange={(e) => handleChange(e)}>
                </InputMask>
                <button onClick={(e) => handlePesquisa()}>Pesquisar</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
            />
        </div >
    )
}