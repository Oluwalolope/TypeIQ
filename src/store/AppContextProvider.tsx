import { useState } from "react";
import type { AppCtx } from "./AppContext";
import AppContext from "./AppContext";
import type { Difficulty } from "../lib/types";


const difficultyFromLocalStorage = localStorage.getItem('difficulty');
const modeFromLocalStorage = localStorage.getItem('mode');

let storedDifficulty: Difficulty = "easy";
let storedMode: number | string = 60;

if (modeFromLocalStorage) {
  storedMode = JSON.parse(modeFromLocalStorage);
}

if (difficultyFromLocalStorage) {
  storedDifficulty = JSON.parse(difficultyFromLocalStorage);
};

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [difficulty, setDifficulty] = useState<Difficulty>(storedDifficulty);
    const [mode, setMode] = useState<number | string>(storedMode);

    const handleDifficultyChange = (newDifficulty: Difficulty) => {
        setDifficulty(newDifficulty);
        localStorage.setItem('difficulty', JSON.stringify(newDifficulty));
    };

    const handleModeChange = (newMode: number | string) => {
        setMode(newMode);
        localStorage.setItem('mode', JSON.stringify(newMode));
    };
        
    const appContextValue: AppCtx = {
        difficulty,
        handleDifficultyChange,
        mode,
        handleModeChange
    }

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;