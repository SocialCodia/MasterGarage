import Card from '../../../components/cards/card/Card';
import style from './Offer.module.css';

const Item = ({ title, desc, icon }) => {
    return (
        <div className={style.card}>
            <div className={style.cardImage}>
                <img src={icon} alt="" />
            </div>
            <div className={style.body}>
                <p>{title}</p>
                <img src="/assets/icons/heart.png" alt="" />
            </div>
            <span>{desc}</span>
        </div>
    )
}

const Offer = () => {
    return (
        <Card title="Best Offers" subtitle="Expert Mechanics | Top Quality spares" to='/' >
            <div className={style.content}>
                <Item title="Wheel Care" desc="Tire alignment & More" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="Tire alignment & More" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="Tire alignment & More" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="Tire alignment & More" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="Tire alignment & More" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="Tire alignment & More" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="Tire alignment & More" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
            </div>
        </Card>
    )
}

export default Offer;