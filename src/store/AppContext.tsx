import { createContext } from "react";
import type { Difficulty } from "../lib/types";


export type AppCtx = {
    difficulty: Difficulty;
    handleDifficultyChange: (difficulty: Difficulty) => void;
    mode: number | string; // e.g., 60 for timed mode or 'passage' for passage mode
    handleModeChange: (mode: number | string) => void;
};


const AppContext = createContext<AppCtx>({
    difficulty: "easy",
    handleDifficultyChange: () => {},
    mode: 60,
    handleModeChange: () => {},
});

export default AppContext;