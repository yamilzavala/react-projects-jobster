import hunt from '../assets/images/job_hunt.svg';
import { Logo } from '../components';

const Landing = () => {
    return (
      <main>
        <nav>
          <Logo/>
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby grailed ramps bushwick, heirloom la croix crucifix poutine pitchfork you probably haven't heard of them neutral milk hotel vinyl gorpcore actually
            </p>
            <button className='btn btn-hero'>Login/Register</button>
          </div>
          <img src={hunt} alt='job hunt' className='img main-img'/>
        </div>
      </main>
    );
};

export default Landing;