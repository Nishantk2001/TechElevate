import '../Testimonials/Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useRef } from 'react';
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img
        src={next_icon}
        alt=''
        className='next-btn'
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=''
        className='back-btn'
        onClick={slidebackward}
      />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img
                  src={user_1}
                  alt=''
                />
                <div className=''>
                  <h3>Satmeet Singh</h3>
                  <span>BackEnd Developer</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod lacinia arcu, eu tincidunt nunc ullamcorper eu.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img
                  src={user_2}
                  alt=''
                />
                <div className=''>
                  <h3>Satmeet Singh</h3>
                  <span>BackEnd Developer</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod lacinia arcu, eu tincidunt nunc ullamcorper eu.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img
                  src={user_3}
                  alt=''
                />
                <div className=''>
                  <h3>Satmeet Singh</h3>
                  <span>BackEnd Developer</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod lacinia arcu, eu tincidunt nunc ullamcorper eu.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img
                  src={user_4}
                  alt=''
                />
                <div className=''>
                  <h3>Satmeet Singh</h3>
                  <span>BackEnd Developer</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod lacinia arcu, eu tincidunt nunc ullamcorper eu.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
