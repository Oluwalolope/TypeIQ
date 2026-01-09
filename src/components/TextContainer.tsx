import { useContext } from 'react';
import data from '../lib/data.json';
import AppContext from '../store/AppContext';
import { NUMBER_OF_TEXTS } from '../lib/constants';

const randomIndex = Math.floor(Math.random() * NUMBER_OF_TEXTS);

const TextContainer = () => {
    const appCtx = useContext(AppContext);


    const textData = data[appCtx.difficulty][randomIndex].text || "No text available.";

    return (
        <div className="mt-8 py-8 border-y border-neutral/30 font-sora text-white text-[32px] sm:text-[40px] leading-[1.36]">
            {textData}
        </div>
    );
}
 
export default TextContainer;