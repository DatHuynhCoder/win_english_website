/**
 * @author Tan Dat
 */

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Policies.scss'

const Policies = ({ policyData }) => {
    return (
        <div className="policy-container">
            <h2 className="policy-title">Chính sách</h2>
            <div className="policy-content">
                <Row className='g-5'>
                    {policyData.map((item, index) => (
                        <Col xs={12} sm={6} md={4} key={index}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={item.logo} className="img-fluid card-img" />
                                <Card.Body>
                                    <Card.Title className='card-title'>{item.title}</Card.Title>
                                    <Card.Text className='card-text'>{item.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Policies;
