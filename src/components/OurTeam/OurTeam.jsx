import '../OurTeam/OurTeam.css';
import satmeet from '../../assets/Satmeet.jpg';
import nishant from '../../assets/Nishant.jpeg';
import ashish from '../../assets/Ashish.jfif';
const OurTeam = () => {
  return (
    <div className='ourteam'>
      <div className='col-sm-6 col-md-4'>
        <div className='team-item'>
          <img
            src={nishant}
            className='team-img'
            alt='pic'
          />

          <h3>Nishant Kumar</h3>

          <div className='team-info'>
            <p>FrontEnd Specialist</p>
          </div>

          <p>
            Graduating with a degree in Spanish and English, Alexandra has
            always loved writing and now she’s lucky enough to do it as part of
            her new job inside our agency.
          </p>

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
                className='insta'>
                <i className='fa-brands fa-instagram'></i>{' '}
              </a>
            </li>
            <li>
              <a
                href='#'
                className='facebook'>
                <i className='fa-solid fa-paper-plane'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-sm-6 col-md-4'>
        <div className='team-item'>
          <img
            src={satmeet}
            className='team-img'
            alt='pic'
          />

          <h3>Satmeet Singh</h3>

          <div className='team-info'>
            <p>Backend Specialist</p>
          </div>

          <p>
            Graduating with a degree in Spanish and English, Alexandra has
            always loved writing and now she’s lucky enough to do it as part of
            her new job inside our agency.
          </p>

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
      <div className='col-sm-6 col-md-4'>
        <div className='team-item'>
          <img
            src={ashish}
            className='team-img'
            alt='pic'
          />

          <h3>Ashish Sharma</h3>

          <div className='team-info'>
            <p>AWS Specialist</p>
          </div>

          <p>
            Elisa first fell in love with digital marketing at the university.
            He loves to learn, and looks forward to being part of this new
            exciting industry for many years.
          </p>

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
    </div>
  );
};

export default OurTeam;
