import '../OurTeam/OurTeam.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import satmeet from '../../assets/Satmeet.jpg';
import nishant from '../../assets/Nishant.jpeg';
import ashish from '../../assets/Ashish.jfif';
const OurTeam = () => {
  return (
    <div className='ourteam'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
       >
        <SwiperSlide>
          <div className='team-container'>
            <div className='team-img-box'>
              <img
                src={nishant}
                className='team-img'
                alt='pic'
              />
            </div>
            <div className='team-info-box'>
              <h3>Nishant Kumar</h3>

              <div className='team-info'>
                <p>FrontEnd Specialist</p>
              </div>
              <button>
                Download cv<i className='fa-solid fa-file-arrow-down'></i>
              </button>
              <p>
                As a Frontend Specialist, I excel in crafting captivating user
                experiences through intuitive and visually appealing interfaces.
                Leveraging my expertise in HTML, CSS, and JavaScript, I bring
                designs to life with seamless functionality and responsiveness
                across various devices. With a keen eye for detail, I ensure
                pixel-perfect implementation while adhering to best practices
                and accessibility standards.
              </p>
              <div className='team-info'>
                <p>Skills:</p>
              </div>
              <p>React,Redux Toolkit,API,JavaScript,HTML/CSS,Postman,Jira</p>

              <ul className='team-icon'>
                <li>
                  <a
                    href='#'
                    className='linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='github'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='facebook'>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='insta'>
                    <i className='fa-brands fa-instagram'></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-container'>
            <div className='team-img-box'>
              <img
                src={satmeet}
                className='team-img'
                alt='pic'
              />
            </div>
            <div className='team-info-box'>
              <h3>Satmeet Singh</h3>

              <div className='team-info'>
                <p>BackEnd Specialist</p>
              </div>
              <button>
                Download cv<i className='fa-solid fa-file-arrow-down'></i>
              </button>
              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency. She has written several books
                and has written several versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months.
              </p>
              <div className='team-info'>
                <p>Skills:</p>
              </div>
              <p>React,Redux Toolkit,API,JavaScript,HTML/CSS,Postman,Jira</p>

              <ul className='team-icon'>
                <li>
                  <a
                    href='#'
                    className='linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='github'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='facebook'>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='insta'>
                    <i className='fa-brands fa-instagram'></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-container'>
            <div className='team-img-box'>
              <img
                src={ashish}
                className='team-img'
                alt='pic'
              />
            </div>
            <div className='team-info-box'>
              <h3>Nishant Kumar</h3>

              <div className='team-info'>
                <p>Aws Specialist</p>
              </div>
              <button>
                Download cv<i className='fa-solid fa-file-arrow-down'></i>
              </button>
              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency. She has written several books
                and has written several versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months.
              </p>
              <div className='team-info'>
                <p>Skills:</p>
              </div>
              <p>React,Redux Toolkit,API,JavaScript,HTML/CSS,Postman,Jira</p>

              <ul className='team-icon'>
                <li>
                  <a
                    href='#'
                    className='linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='github'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='facebook'>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='insta'>
                    <i className='fa-brands fa-instagram'></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-container'>
            <div className='team-img-box'>
              <img
                src={nishant}
                className='team-img'
                alt='pic'
              />
            </div>
            <div className='team-info-box'>
              <h3>Nishant Kumar</h3>

              <div className='team-info'>
                <p>FrontEnd Specialist</p>
              </div>
              <button>
                Download cv<i className='fa-solid fa-file-arrow-down'></i>
              </button>
              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency. She has written several books
                and has written several versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months.
              </p>
              <div className='team-info'>
                <p>Skills:</p>
              </div>
              <p>React,Redux Toolkit,API,JavaScript,HTML/CSS,Postman,Jira</p>

              <ul className='team-icon'>
                <li>
                  <a
                    href='#'
                    className='linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='github'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='facebook'>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='insta'>
                    <i className='fa-brands fa-instagram'></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-container'>
            <div className='team-img-box'>
              <img
                src={nishant}
                className='team-img'
                alt='pic'
              />
            </div>
            <div className='team-info-box'>
              <h3>Nishant Kumar</h3>

              <div className='team-info'>
                <p>FrontEnd Specialist</p>
              </div>
              <button>
                Download cv<i className='fa-solid fa-file-arrow-down'></i>
              </button>
              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency. She has written several books
                and has written several versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months.
              </p>
              <div className='team-info'>
                <p>Skills:</p>
              </div>
              <p>React,Redux Toolkit,API,JavaScript,HTML/CSS,Postman,Jira</p>

              <ul className='team-icon'>
                <li>
                  <a
                    href='#'
                    className='linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='github'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='facebook'>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='insta'>
                    <i className='fa-brands fa-instagram'></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-container'>
            <div className='team-img-box'>
              <img
                src={nishant}
                className='team-img'
                alt='pic'
              />
            </div>
            <div className='team-info-box'>
              <h3>Nishant Kumar</h3>

              <div className='team-info'>
                <p>FrontEnd Specialist</p>
              </div>
              <button>
                Download cv<i className='fa-solid fa-file-arrow-down'></i>
              </button>
              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency. She has written several books
                and has written several versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months
                and she has written many versions of her job in the past months.
              </p>
              <div className='team-info'>
                <p>Skills:</p>
              </div>
              <p>React,Redux Toolkit,API,JavaScript,HTML/CSS,Postman,Jira</p>

              <ul className='team-icon'>
                <li>
                  <a
                    href='#'
                    className='linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='github'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='facebook'>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </li>

                <li>
                  <a
                    href='#'
                    className='insta'>
                    <i className='fa-brands fa-instagram'></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurTeam;
