import UserProgress from "./toolbar/UserProgress";
import UserSettings from "./toolbar/UserSettings";

const Toolbar = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-16">
            <UserProgress wpm={0} accuracy={100} />
            <UserSettings />
        </div>
    );
}
 
export default Toolbar;