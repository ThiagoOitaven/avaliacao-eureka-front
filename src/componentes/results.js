import './results.css';
import useFunctionsList from '../hooks/useFunctions';
import fechar from '../assets/fechar.svg'

export default function Results() {

    const { setCep, setModalOpen, dadosCep, setDadosCep } = useFunctionsList();

    function handleClose() {
        setModalOpen(false);
        setDadosCep({
            cepResultado: "",
            bairro: "",
            logradouro: "",
            complemento: "",
            localidade: "",
            uf: ""
        });
        setCep("");
    }

    return (

        < div className='results'>
            <div className='modal'>

                <img className='fechar' src={fechar} onClick={(e) => handleClose()} alt=''></img>

                <div className='info logradouro'>
                    <label className='label'>Logradouro</label>
                    <input value={dadosCep.logradouro} disabled></input>
                </div>

                <div className='info complemento'>
                    <label className='label'>Complemento</label>
                    <input value={dadosCep.complemento} disabled></input>
                </div>

                <div className='grupo'>
                    <div className='info'>
                        <label className='label'>CEP</label>
                        <input value={dadosCep.cepResultado} disabled></input>
                    </div>

                    <div className='info'>
                        <label className='label'>Bairro</label>
                        <input value={dadosCep.bairro} disabled></input>
                    </div>
                </div>

                <div className='grupo'>
                    <div className='info'>
                        <label className='label'>Cidade</label>
                        <input value={dadosCep.localidade} disabled></input>
                    </div>

                    <div className='info'>
                        <label className='label'>Estado</label>
                        <input value={dadosCep.uf} disabled></input>
                    </div>
                </div>
            </div>
        </div >
    )
}