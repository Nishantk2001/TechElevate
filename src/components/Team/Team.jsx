// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Team/Team.css';
import nishant from '../../assets/Nishant.jpeg';

// import required modules
// import { Pagination } from 'swiper/modules';
const Team = () => {
  return (
    <div>
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper'>
          <SwiperSlide>
            <div className='swiper-client-msg'>
              <p>
                We are a team of passionate, dedicated, and dedicated
                professionals who are passionate about the field of IT.
              </p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
              <figure>
                <img
                  src={nishant}
                  alt='nishant'
                />
              </figure>
              <div className='client-data-details'>
                <h4>Nishant Kumar</h4>
                <p>FrontEnd Specialist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-client-msg'>
              <p>
                We are a team of passionate, dedicated, and dedicated
                professionals who are passionate about the field of IT.
              </p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
              <figure>
                <img
                  src={nishant}
                  alt='nishant'
                />
              </figure>
              <div className='client-data-details'>
                <h4>Nishant Kumar</h4>
                <p>FrontEnd Specialist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-client-msg'>
              <p>
                We are a team of passionate, dedicated, and dedicated
                professionals who are passionate about the field of IT.
              </p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
              <figure>
                <img
                  src={nishant}
                  alt='nishant'
                />
              </figure>
              <div className='client-data-details'>
                <h4>Nishant Kumar</h4>
                <p>FrontEnd Specialist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-client-msg'>
              <p>
                We are a team of passionate, dedicated, and dedicated
                professionals who are passionate about the field of IT.
              </p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
              <figure>
                <img
                  src={nishant}
                  alt='nishant'
                />
              </figure>
              <div className='client-data-details'>
                <h4>Nishant Kumar</h4>
                <p>FrontEnd Specialist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-client-msg'>
              <p>
                We are a team of passionate, dedicated, and dedicated
                professionals who are passionate about the field of IT.
              </p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
              <figure>
                <img
                  src={nishant}
                  alt='nishant'
                />
              </figure>
              <div className='client-data-details'>
                <h4>Nishant Kumar</h4>
                <p>FrontEnd Specialist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-client-msg'>
              <p>
                We are a team of passionate, dedicated, and dedicated
                professionals who are passionate about the field of IT.
              </p>
            </div>
            <div className='swiper-client-data grid grid-two-column'>
              <figure>
                <img
                  src={nishant}
                  alt='nishant'
                />
              </figure>
              <div className='client-data-details'>
                <h4>Nishant Kumar</h4>
                <p>FrontEnd Specialist</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Team;
