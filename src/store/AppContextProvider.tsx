import { useState } from "react";
import type { AppCtx } from "./AppContext";
import AppContext from "./AppContext";


const difficultyFromLocalStorage = localStorage.getItem('difficulty');
const modeFromLocalStorage = localStorage.getItem('mode');

let storedDifficulty: string = "easy";
let storedMode: number | string = 60;

if (modeFromLocalStorage) {
  storedMode = JSON.parse(modeFromLocalStorage);
}

if (difficultyFromLocalStorage) {
  storedDifficulty = JSON.parse(difficultyFromLocalStorage);
};

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const [difficulty, setDifficulty] = useState<string | number>(storedDifficulty);
    const [mode, setMode] = useState<number | string>(storedMode);

    const handleDifficultyChange = (newDifficulty: string | number) => {
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