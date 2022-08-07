import { Container,Row, Col, Button } from "react-bootstrap";
// import {faSquarePen} from '@fortawesome/free-solid-svg-icons'
// import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {FaEdit} from 'react-icons/fa';
import {TiDelete} from 'react-icons/ti'
import styles from './ExpenseData.module.css';
const ExpenseData = ({data}) =>{
    const getDate = () =>{
        let tIndex = data.Date.indexOf("T");
        return data.Date.slice(0,tIndex);
    }
    return (    
        <Container>
            <Row>
              <Col className="col-sm-1">{data.Id}</Col>
              <Col className="col-sm-3">{getDate()}</Col>
              <Col className="col-sm-4">{data.Title}</Col>
              <Col className="col-sm-2">{data.Amount}</Col>
              <Col className={`col-sm-2 ${styles.action}`} >
                <FaEdit className={styles.edit}/>
                <TiDelete className={styles.delete}/>
             
              </Col>

            </Row>
        </Container>
    )
}
export default ExpenseData;