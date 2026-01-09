import { MODES } from "../../lib/constants";
import Dropdown from "../UI/Dropdown";

const ModeSettings = () => {
  return (
    <div className="flex flex-col sm:flex-row items-baseline space-x-1.5">
      <p className="font-sora hidden sm:inline text-neutral font-normal text-[16px] pe-2">
        Mode:
      </p>
      <div className="space-x-1.5">
        <Dropdown dropdownItems={MODES} dropdownItemType="mode" />
      </div>
    </div>
  );
};

export default ModeSettings;