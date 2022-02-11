import { Form, Col, Row, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import api from "../../api"

const AtualizaConteiner = () => {
    const {register, handleSubmit} = useForm()
    
    const handleRequest = async (data) => {
        try{
            console.log(data)
            const request = await api.put("/conteiner", data)
            console.log(request.data)
        }catch(error){
            console.log(error.response ? error.response.data : error)
        }
    }

    return (
        <form className="background-white" onSubmit={handleSubmit(handleRequest)}>
            <Row className="mb-3" >
                <Col lg="2">
                    <Form.Label>Código de contêiner:</Form.Label>
                    <Form.Control {...register("cd_conteiner")} type="text" />
                </Col>
                <Col lg="2">
                    <Form.Label>Tipo do contêiner</Form.Label>
                    <Form.Select {...register("tp_conteiner")}>
                        <option value="20">20</option>
                        <option value="40">40</option>
                    </Form.Select>
                </Col>
                <Col lg="2">
                    <Form.Label>Situação do contêiner</Form.Label>
                    <Form.Select {...register("st_conteiner")}>
                        <option value="C">Cheio</option>
                        <option value="V">Vazio</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button type="submit" >Enviar</Button>
        </form>
    )
}

export default AtualizaConteiner