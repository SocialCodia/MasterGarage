import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import ChooseUs from "./chooseus/ChooseUs";
import MgWorld from "./mgworld/MgWorld";
import Nearby from "./nearby/Nearby";
import Offer from "./offer/Offer";
import Service from "./service/Service";
import Top from "./top/Top";

const Home = () => {
    return (
        <>
            <Navigation />
            <Top />
            <Service />
            <Offer />
            <Nearby />
            <MgWorld />
            <ChooseUs />
            <Footer />
        </>
    )
}

export default Home;