import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap"
import api from "../../api"

const BuscaMovimentacao = () => {
    const [movements, setMovements] = useState([])
    
    const handleRequest = async (data) => {
        try{
            const request = await api.get('/movimentacao')
            console.log(request.data)
            setMovements(request.data.data)
        }catch(error){
            console.log(error.response ? error.response.data : error)
        }
    }
    useEffect(() => {
        handleRequest()
    }, [])
    return (
        <div className="background-white">
            <Table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Tipo</th>
                        <th>Número do contêiner</th>
                        <th>Data início</th>
                        <th>Data fim</th>
                    </tr>
                </thead>
                <tbody>
                    {movements.map((value) => {
                        return (
                            <tr key={value.cd_movimentacao}>
                                <td>{value.cd_movimentacao}</td>
                                <td>{value.tp_movimentacao}</td>
                                <td>{value.nu_conteiner}</td>
                                <td>{value.dt_inicio}</td>
                                <td>{value.dt_fim}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Button className="mt-2" onClick={handleRequest}>Buscar</Button>
        </div>
    )
}

export default BuscaMovimentacao