import { DIFFICULTY_LEVELS } from "../../lib/constants";
import Dropdown from "../UI/Dropdown";

const DifficultySettings = () => {
  return (
    <div className="flex flex-col sm:flex-row items-baseline space-x-1.5">
      <p className="font-sora hidden sm:inline text-neutral font-normal text-[16px] pe-2">
        Difficulty:
      </p>
      <div className="space-x-1.5">
          <Dropdown dropdownItems={DIFFICULTY_LEVELS} dropdownItemType="difficulty" />
      </div>
    </div>
  );
};

export default DifficultySettings;
