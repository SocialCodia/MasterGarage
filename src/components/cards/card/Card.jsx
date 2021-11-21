import style from './Card.module.css';

const Card = ({ title, subtitle, to, children }) => {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <div className={style.cardHeading}>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                {
                    to &&
                    <div className={style.cardAction}>
                        <a href={to}>see all</a>
                    </div>
                }
            </div>
            <div className={style.cardBody}>
                {children}
            </div>
        </div>
    )
}

export default Card;