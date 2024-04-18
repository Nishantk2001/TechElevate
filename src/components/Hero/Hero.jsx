import '../Hero/Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better Knaowledge for a better world</h1>
        <p>
          Welcome to TechElevate, your premier destination for cutting-edge
          technology education and training. At TechElevate, we are dedicated to
          keeping you at the forefront of the ever-evolving IT industry
          landscape.
        </p>
        <button className='btn'>
          Explore more
          <img
            src={dark_arrow}
            alt=''></img>{' '}
        </button>
      </div>
    </div>
  );
};

export default Hero;
