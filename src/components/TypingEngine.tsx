import {
  useContext,
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
} from "react";
import data from "../lib/data.json";
import AppContext from "../store/AppContext";
import { NUMBER_OF_TEXTS } from "../lib/constants";

const randomIndex: number = Math.floor(Math.random() * NUMBER_OF_TEXTS);

const TypingEngine = () => {
  const appCtx = useContext(AppContext);

  const [typedText, setTypedText] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const textData: string = data[appCtx.difficulty][randomIndex]?.text ?? "No text available.";

  useEffect((): void => {
    textareaRef.current?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const value: string = e.target.value.replace(/\n/g, "");

    // prevent over typing
    if (value.length > textData.length) return;

    setTypedText(value);
  };

  const cursorIndex: number = typedText.length;

  const wordStart: number = textData.lastIndexOf(" ", cursorIndex - 1) + 1;

  const nextSpaceIndex: number = textData.indexOf(" ", cursorIndex);

  const wordEnd: number =
    nextSpaceIndex === -1 ? textData.length : nextSpaceIndex;

  return (
    <div
  className="relative mt-8 font-sora text-[32px] sm:text-[40px] leading-[1.36]"
  onClick={(): void => textareaRef.current?.focus()}
>
  {/* Visible reference text */}
  <div className="border-y border-neutral/30 py-8 text-neutral-400">
    {textData.split("").map((character: string, index: number) => {
      let className: string = "text-neutral-400";

      // typed characters
      if (index < typedText.length) {
        className =
          typedText[index] === character
            ? "text-emerald-400"
            : "text-red-400";
      }

      // underline current word
      if (index >= wordStart && index < wordEnd && index >= cursorIndex) {
        className += " underline underline-offset-8";
      }

      return (
        <span key={index} className={`relative ${className}`}>
          {character}
          {/* text highlighter */}
          {index === cursorIndex && (
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 rounded-sm"></span>
          )}
        </span>
      );
    })}
    {/* Handle text highlighter at end of text */}
    {cursorIndex === textData.length && (
      <span className="inline-block w-[0.1ch] h-[1em] bg-neutral-200 opacity-20"></span>
    )}
  </div>

  {/* Hidden textarea input */}
  <textarea
    ref={textareaRef}
    value={typedText}
    onChange={handleChange}
    spellCheck={false}
    className="
      absolute inset-0
      resize-none
      overflow-hidden
      whitespace-nowrap
      bg-transparent
      text-transparent
      caret-transparent
      focus:outline-none
    "
  />
</div>

  );
};

export default TypingEngine;
