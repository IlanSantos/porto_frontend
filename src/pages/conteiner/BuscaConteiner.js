import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap"
import api from "../../api"

const BuscaConteiner = () => {
    const [containers, setContainers] = useState([])
    const list_containers = containers.map((value) => {
        return (
            <tr key={value.cd_conteiner}>
                <td>{value.cd_conteiner}</td>
                <td>{value.nm_cliente}</td>
                <td>{value.nu_conteiner}</td>
                <td>{value.ct_conteiner}</td>
                <td>{value.tp_conteiner}</td>
                <td>{value.st_conteiner}</td>
            </tr>
        )
    })
    const handleRequest = async () => {
        try{
            const request = await api.get('/conteiner')
            console.log(request.data)
            setContainers(request.data.data || [])
            console.log(containers)
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
                        <th>Ciiente</th>
                        <th>Número</th>
                        <th>Categoria</th>
                        <th>Tipo</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {list_containers}
                </tbody>
            </Table>
            <Button type="button" onClick={handleRequest} >Buscar</Button>
        </div>
    )
}

export default BuscaConteiner