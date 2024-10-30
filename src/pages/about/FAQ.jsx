/**
 * @author Tan Dat
 */
import { Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import FAQPic from '../../assets/faq_pic.svg'

import './FAQ.scss'

const FAQ = ({ faqData }) => {
    return (
        <div className="faq-container">
            <h2 className="faq-title">Bạn có câu hỏi nào không ?</h2>
            <Image src={FAQPic} alt='FAQ logo' className='faq-logo' fluid />
            <div className="faq-common-text">Câu hỏi thường gặp</div>
            <Accordion alwaysOpen className='accordion'>
                {faqData.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}
export default FAQ;