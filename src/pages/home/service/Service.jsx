import Card from "../../../components/cards/card/Card";
import style from './Service.module.css';

const Item = ({ title, icon }) => {
    return (
        <div className={style.card}>
            <img src={icon} alt="" />
            <p>{title}</p>
        </div>
    )
}


const Service = () => {

    return (
        <Card title="What service do you need ?" subtitle="Freedom to Choose Best Garages at Better Price & Service Quality" >
            <div className={style.content}>
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
                <Item title="General Service" icon="https://i.pinimg.com/originals/ba/d4/5a/bad45a40fa6e153ef8d1599ba875102c.png" />
            </div>
        </Card>
    )
}

export default Service;