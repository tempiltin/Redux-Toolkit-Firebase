import { Col, Container, Row } from "reactstrap"
import dataErr from "../../Assets/image/dataError.png"
const DataError = () => {
  return <Container>
     <Row className="Errdata">
      <Col sm={"6"}>
        <img src={dataErr} alt={Date()} />
      </Col>
      <Col sm={"6"} className="text-center">
        <h2>So'rovlaringizga doir ma'lumot topilmadi !</h2>
      </Col>
     </Row>
  </Container>
}

export default DataError