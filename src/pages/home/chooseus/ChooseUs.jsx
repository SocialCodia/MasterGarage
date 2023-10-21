import Card from '../../../components/cards/card/Card';
import style from './ChooseUs.module.css';

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

const ChooseUs = () => {
    return (
        <>
        <Card title="Garages Nearby">
            <div className={style.content}>
                <Item title="Piece Of Mind" desc="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" icon="/assets/icons/bell.png" />
                <Item title="Piece Of Mind" desc="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" icon="/assets/icons/bell.png" />
                <Item title="Piece Of Mind" desc="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" icon="/assets/icons/bell.png" />
                <Item title="Piece Of Mind" desc="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" icon="/assets/icons/bell.png" />
                <Item title="Piece Of Mind" desc="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" icon="/assets/icons/bell.png" />
                <Item title="Piece Of Mind" desc="lorem ipsum dolor sit amet, lorem ipsum dolor sit amet" icon="/assets/icons/bell.png" />
            </div>
        </Card>
        <div className={style.whiteSpace}>
        </div>
        </>
    )
}

export default ChooseUs;