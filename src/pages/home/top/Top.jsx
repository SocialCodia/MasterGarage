
import style from './Top.module.css'
import Search from '../../../components/forms/search/Search';
import Card from '../../../components/cards/card/Card';

const Top = () => {
    return (
        <Card>
            <Search />
            <div className={style.image}>
                <img src="https://thumbs.dreamstime.com/b/auto-undergoing-cleaning-car-wash-space-text-banner-design-modern-auto-undergoing-cleaning-car-wash-space-text-184404239.jpg" alt="" />
                <img src="http://thecars.life/content/images/2019/07/car-insurance-cover-1.jpg" alt="" />
                <img src="https://www.shriramgi.com/images/carproductbg.jpg" alt="" />
                <img src="https://thumbs.dreamstime.com/b/auto-undergoing-cleaning-car-wash-space-text-banner-design-modern-auto-undergoing-cleaning-car-wash-space-text-184404239.jpg" alt="" />
                <img src="http://thecars.life/content/images/2019/07/car-insurance-cover-1.jpg" alt="" />
                <img src="https://www.shriramgi.com/images/carproductbg.jpg" alt="" />
            </div>
        </Card>
    )
}

export default Top;