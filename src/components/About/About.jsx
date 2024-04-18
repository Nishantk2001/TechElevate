/* eslint-disable react/prop-types */
import '../About/About.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play-icon.png';
const About = ({ setVideoPlay }) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img
          src={about_img}
          alt='About-img'
          className='about-img'
        />
        <img
          src={play_icon}
          alt='play_icon'
          className='play-icon'
          onClick={() => {
            setVideoPlay(true);
          }}
        />
      </div>
      <div className='about-right'>
        <h3>ABOUT TechElevate</h3>
        <h2>Elevate Your Tech Skills, Elevate Your Career.</h2>
        <p>
          At TechElevate, we&apos;re on a mission to empower individuals with
          the knowledge and skills they need to thrive in the dynamic world of
          technology. With a deep understanding of the rapidly evolving IT
          landscape, we&apos;ve curated a comprehensive range of courses
          spanning every aspect of the industry.
        </p>
        <p>
          Whether you&apos;re a seasoned professional seeking to stay ahead of
          the curve or a newcomer looking to break into the field, our platform
          offers something for everyone.
        </p>
        <p>
          Our team of expert instructors brings years of industry experience to
          the table, ensuring that our students receive top-notch education that
          is both practical and relevant. From frontend development to cloud
          computing, software testing to data analytics, we provide
          comprehensive training that equips our students with the tools they
          need to succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
