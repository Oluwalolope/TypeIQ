import logoLarge from '../assets/images/logo-large.svg';
import logoSmall from '../assets/images/logo-small.svg';

const Logo = () => {
    const isMobile = innerWidth < 768;
    return (
        <div>
            <img src={isMobile? logoSmall : logoLarge} alt="logo"/>
        </div>
    );
}
 
export default Logo;