import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={style.nav} >
            <img src="/assets/icons/logo.png" className={style.logo} alt="" />
            <img src="/assets/icons/bell.png" className={style.bell} alt="" />
        </div >
    )
}

export default Navigation;