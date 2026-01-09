import Timer from "./Timer";

type props = {
    wpm: string | number,
    accuracy: string | number,
}

const UserProgress = ({ wpm, accuracy }:props) => {
    return (
        <div className="w-full max-w-112.5 flex flex-row items-center justify-between md:gap-x-8">
            <div className="pe-1 flex flex-col sm:flex-row items-baseline">
                <p className="font-sora text-neutral font-normal text-[16px] uppercase">wpm:</p>
                <p className="text-white font-bold text-xl lg:ps-3">{wpm}</p>
            </div>

            <div className="border-x border-neutral px-8 flex flex-col sm:flex-row items-baseline">
                <p className="font-sora text-neutral font-normal text-[16px] uppercase">accuracy:</p>
                <p className="text-white font-bold text-xl lg:ps-3">{accuracy}%</p>
            </div>
            <Timer />
        </div>
    );
}
 
export default UserProgress;