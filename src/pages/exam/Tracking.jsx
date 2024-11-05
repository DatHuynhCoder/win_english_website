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
        <>
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
            {userAnswer.map((item, index) => (
                <Button className='tracking-btn' variant={item === '' ? 'info' : 'primary'}>{index + 1}</Button>
            ))}
        </>
    )
}

export default Tracking;