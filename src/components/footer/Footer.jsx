
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.navItem}>
                <img src="/assets/icons/bell.png" alt="" />
                <p>Home</p>
            </div>
            <div className={style.navItem}>
                <img src="/assets/icons/bell.png" alt="" />
                <p>My Booking</p>
            </div>
            <div className={style.navItem}>
                <img src="/assets/icons/bell.png" alt="" />
                <p>MG World</p>
            </div>
            <div className={style.navItem}>
                <img src="/assets/icons/bell.png" alt="" />
                <p>My Garage</p>
            </div>
            <div className={style.navItem}>
                <img src="/assets/icons/bell.png" alt="" />
                <p>My Account</p>
            </div>
        </div>
    )
}

export default Footer;