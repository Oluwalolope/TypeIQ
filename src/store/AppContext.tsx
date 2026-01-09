import { createContext } from "react";


export type AppCtx = {
    difficulty: 'easy' | 'medium' | 'hard';
    handleDifficultyChange: (difficulty: 'easy' | 'medium' | 'hard') => void;
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