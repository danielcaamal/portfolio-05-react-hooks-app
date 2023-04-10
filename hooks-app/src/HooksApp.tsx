// import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { CallbackHook } from "./06-useMemo/CallbackHook";
import { MemoHook } from "./06-useMemo/MemoHook";
import { Memorize } from "./06-useMemo/Memorize";
import { Parent } from "./07-tarea-memo/Parent";

export const HooksApp = () => {
    return (
        <div>
            <h1>Hooks App</h1>
            <Parent />
        </div>
    );
}