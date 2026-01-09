import { useContext, useState } from "react";
import iconDownArrow from "../../assets/images/icon-down-arrow.svg";
import AppContext from "../../store/AppContext";
import type { Difficulty } from "../../lib/types";

type props = {
  dropdownItems: { title: string; value: number | string }[];
  dropdownItemType?: "difficulty" | "mode";
};

const Dropdown = ({ dropdownItems, dropdownItemType }: props) => {
  const appCtx = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<number | string>(dropdownItems[0].value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (dropdownItemType === "difficulty") {
    const difficulty = dropdownValue as Difficulty;
    appCtx.handleDifficultyChange(difficulty);
  } else if (dropdownItemType === "mode") {
    appCtx.handleModeChange(dropdownValue);
  }


  const handleItemClick = (value: number | string) => {
    setDropdownValue(value);
    setIsOpen(false);
  }

  const dropdownValueTitle = dropdownItems.find(item => item.value === dropdownValue)?.title || dropdownItems[0].title;

  return (
    <div className="w-41 relative">
      <button
        className={`border rounded-lg px-2.5 py-1.5 w-full cursor-pointer hover:border-blue-400  text-white ${
          isOpen ? "border-blue-400" : "border-neutral"
        } transition-colors duration-300 capitalize font-sora`}
        onClick={toggleDropdown}
      >
        {dropdownValueTitle}
        <img
          src={iconDownArrow}
          alt="down arrow"
          className="ml-2 inline-block "
        />
      </button>
      <div
        className={`absolute top-full left-0 w-full mt-1 rounded-lg shadow-lg bg-dropdown z-10 overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {dropdownItems &&
            dropdownItems.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item.value)} className="capitalize text-white font-sora py-2 flex items-center space-x-2 px-3 hover:bg-neutral-700 hover:text-white cursor-pointer">
                <div className={`rounded-full size-4 inline-block ${dropdownValue === item.value ? "bg-blue-400": "border-2 border-white"}`} >
                    {dropdownValue === item.value ? <div className="rounded-full size-2 bg-neutral-900 mx-auto mt-1"/>: ""}
                </div>
                <span>
                  {item.title}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
