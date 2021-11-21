import Card from '../../../components/cards/card/Card';
import style from './Nearby.module.css';

const Item = ({ title, desc, icon }) => {
    return (
        <div className={style.card}>
            <img src={icon} alt="" />
            <div className={style.body}>
                <p>{title}</p>
            </div>
            <span>{desc}</span>
        </div>
    )
}

const Nearby = () => {
    return (
        <Card title="Garages Nearby" to='/'>
            <div className={style.content}>
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
                <Item title="Wheel Care" desc="mumbai" icon="https://st2.depositphotos.com/1003098/8898/i/600/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" />
            </div>
        </Card>
    )
}

export default Nearby;