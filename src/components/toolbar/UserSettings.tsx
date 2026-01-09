import DifficultySettings from "./DifficultySettings";
import ModeSettings from "./ModeSettings";

const UserSettings = () => {

  return (
    <div className="flex flex-row items-baseline justify-between sm:gap-x-8 lg">
      <DifficultySettings />
      <ModeSettings />
    </div>
  );
};

export default UserSettings;
