
import './HomeExam.scss'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { CiClock1, CiUser } from "react-icons/ci"
import { AiOutlineComment } from "react-icons/ai"

const HomeExam = ({HomeExamData}) => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Đề thi mới nhất</h1>
      <div className="HomeExam-container">
        {
          HomeExamData.map((item, index) => (
            <Card className='Exam'>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <CiClock1 size={25}/> - 100
                  ||
                  <CiUser size={25}/> - 100
                  ||
                  <AiOutlineComment size={25}/> - 100
                  <br></br>
                  4 phần thi - 90 câu hỏi
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </>
  )
}

export default HomeExam