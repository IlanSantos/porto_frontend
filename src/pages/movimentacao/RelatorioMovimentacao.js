import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap"
import api from "../../api"

const RelatorioMovimentacao = () => {
    const [movements, setMovements] = useState({data: []})

    const list_movements = movements.data.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.nm_cliente}</td>
                <td>{value.tp_movimentacao}</td>
                <td>{value.qt_movimentacao}</td>
            </tr>
        )
    })
    const handleRequest = async (data) => {
        try{
            const request = await api.get('/movimentacao/relatorio')
            console.log(request.data)
            setMovements(request.data)
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
                        <th>Cliente</th>
                        <th>Tipo de movimentação</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {list_movements}
                </tbody>
            </Table>
            <h3 className="title">Total de importações</h3>
            <p>{movements.qt_importacao}</p>
            <h3 className="title">Total de exportações</h3>
            <p>{movements.qt_exportacao}</p>
            <Button className="mt-2" onClick={handleRequest}>Buscar</Button>
        </div>
    )
}

export default RelatorioMovimentacao