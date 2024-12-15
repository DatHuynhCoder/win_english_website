/**
 * @author Tan Dat
 * @document https://codesandbox.io/p/sandbox/simple-react-countdown-timer-zdzwy?file=%2Fsrc%2FApp.js
 */
import Button from 'react-bootstrap/Button';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './Tracking.scss'

const Tracking = ({ userAnswer }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className='container'>
            <p className='timer-title'>Thời gian làm bài</p>
            <div className="timer-countdown">
                <CountdownCircleTimer
                    isPlaying
                    duration={7200}
                    size={120}
                    colors={['#628ECB', '#004777', '#F7B801', '#A30000', '#A30000']}
                    strokeWidth={15}
                    colorsTime={[7200, 900, 600, 300, 0]}
                >
                    {({ remainingTime }) => (
                        <div className="timer-display">
                            {formatTime(remainingTime)}
                        </div>
                    )}
                </CountdownCircleTimer>

            </div>
            {userAnswer.map((item, index) => {
                const renderPart = () => {
                    switch (index) {
                        case 0:
                            return <div className='parttxt'>Part 1</div>
                        case 6:
                            return <div className='parttxt'>Part 2</div>
                        case 31:
                            return <div className='parttxt'>Part 3</div>
                        case 70:
                            return <div className='parttxt'>Part 4</div>
                        case 100:
                            return <div className='parttxt'>Part 5</div>
                        case 130:
                            return <div className='parttxt'>Part 6</div>
                        case 146:
                            return <div className='parttxt'>Part 7</div>
                        default:
                            return null
                    }
                }
                return (
                    <>
                        {renderPart()}
                        <Button
                            key={index}
                            className="tracking-btn"
                            variant={item === '' ? 'info' : 'primary'}
                            size='sm'
                        >
                            {index + 1}
                        </Button>
                    </>
                );
            })}

        </div>
    )
}

export default Tracking;