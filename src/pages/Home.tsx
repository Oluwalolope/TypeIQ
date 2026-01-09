import TextContainer from "../components/TextContainer";
import Toolbar from "../components/Toolbar";
import IconRestart from "../assets/images/icon-restart.svg";

const Home  = () => {
    return (
        <>
            <Toolbar />
            <TextContainer />
            <button className="mt-8 flex items-center justify-center gap-x-2 bg-neutral-700 hover:bg-neutral-600 text-white font-sora py-2 px-4 rounded-lg mx-auto cursor-pointer transition-colors duration-300">
                Restart Test
                <img src={IconRestart} alt="restart icon" />
            </button>
        </>
    );
}

export default Home;