import { useState } from "react";
import Logo from "./Logo";
import personalBestIcon from "../assets/images/icon-personal-best.svg";

const MainHeader = () => {
    const [ personalBest ] = useState<number>(92);
    return (
        <header className="flex justify-between items-center">
            <Logo />
            <p className="text-neutral capitalize font-sora text-[1.125rem]"> <img src={personalBestIcon} alt='personal best icon' className="inline-block pe-2.5" /> <span className="hidden md:inline">personal</span> best: <span className="uppercase text-white">{personalBest} wpm</span></p>
        </header>
    );
}
 
export default MainHeader;