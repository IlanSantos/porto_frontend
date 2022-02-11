import { Form, Col, Row, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import api from "../../api"

const NovaMovimentacao = () => {
    const {register, handleSubmit} = useForm()
    
    const handleRequest = async (data) => {
        try{
            const request = await api.post('/movimentacao', data)
            console.log(request)
        }catch(error){
            console.log(error.response ? error.response.data : error)
        }
    }
 
    return (
        <form className="background-white" onSubmit={handleSubmit(handleRequest)}>
            <Row className="mb-3" >
                <Col lg="2">
                    <Form.Label>Código do contêiner:</Form.Label>
                    <Form.Control {...register("cd_conteiner")} type="text" />
                </Col>
                <Col lg="2">
                    <Form.Label>Tipo de movimentação</Form.Label>
                    <Form.Select {...register("tp_movimentacao")}>
                        <option value="1">Embarque</option>
                        <option value="2">Desembarque</option>
                        <option value="3">Gate in</option>
                        <option value="4">Gate out</option>
                        <option value="5">Reposicionamento</option>
                        <option value="6">Pesagem</option>
                        <option value="7">Scanner</option>
                    </Form.Select>
                </Col>
                <Col lg="2">
                    <Form.Label>Data início</Form.Label>
                    <Form.Control {...register("dt_inicio")} type="date"  />
                </Col>
                <Col lg="2">
                    <Form.Label>Data fim</Form.Label>
                    <Form.Control {...register("dt_fim")} type="date"  />
                </Col>
            </Row>
            <Button type="submit">Enviar</Button>
        </form>
    )
}

export default NovaMovimentacao