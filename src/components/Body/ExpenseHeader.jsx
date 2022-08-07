import { Col, Container, Row } from "react-bootstrap"

const ExpenseHeader = () =>{
    return (
        <Container style={{textAlign : "left", fontWeight: "bold"}}>
            <Row>
                <Col  className="col-sm-1">#
                </Col>
                <Col className="col-sm-3">
                   Date
                </Col>
                <Col className="col-sm-4">Title 
                </Col>
                <Col className="col-sm-2">
                    Amount
                </Col>
                <Col className="col-sm-2">
                    Action
                </Col>
            </Row>
        </Container>
    )
}

export default ExpenseHeader;