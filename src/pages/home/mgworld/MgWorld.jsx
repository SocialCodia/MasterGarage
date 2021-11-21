import Card from '../../../components/cards/card/Card';
import style from './MgWorld.module.css';

const Item = ({ title, desc, icon }) => {
    return (
        <div className={style.card}>
            <div className={style.cardImage}>
                <img src={icon} alt="" />
            </div>
            <p>{title}</p>
            <div className={style.body}>
                <span>{desc}</span>
                <img src="/assets/icons/heart.png" alt="" />
            </div>

        </div>
    )
}

const MgWorld = () => {
    return (
        <Card title="MG World" subtitle="Collect MG Coins and Stylize your Car" to='/'>
            <div className={style.content}>
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
                <Item title="Black Leather Seat Covers" desc="💰 1000 MG coins" icon="https://harpreetford.com/assets/frontend/images/bookbanner.png" />
            </div>
        </Card>
    )
}

export default MgWorld;