import { useState } from "react";

function useFunctionsProvider() {
    const [cep, setCep] = useState('');
    const [dadosCep, setDadosCep] = useState({
        cepResultado: "",
        bairro: "",
        logradouro: "",
        complemento: "",
        localidade: "",
        uf: ""
    });
    const [modalOpen, setModalOpen] = useState(false)

    return {
        cep,
        setCep,
        dadosCep,
        setDadosCep,
        modalOpen,
        setModalOpen
    }
}
export default useFunctionsProvider;