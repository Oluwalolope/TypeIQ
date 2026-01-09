const Timer = () => {
    return (
        <div className="flex flex-col sm:flex-row items-baseline">
            <p className="font-sora text-neutral font-normal text-[16px] uppercase">time:</p>
            <p className="text-white font-bold text-xl lg:ps-3">0:60</p>
        </div>
    );
}
 
export default Timer;