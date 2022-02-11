import { Form, Col, Row, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import api from "../../api"

const DeletaConteiner = () => {
    const {register, handleSubmit} = useForm()
    
    const handleRequest = async (data) => {
        try{
            const request = await api.delete('/conteiner', {data: data})
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
            </Row>
            <Button type="submit" >Enviar</Button>
        </form>
    )
}

export default DeletaConteiner