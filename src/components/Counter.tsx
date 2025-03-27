import { createSignal, type Component } from "solid-js";
import type { JSX } from "solid-js/h/jsx-runtime";

interface Props {
  initialValue: number;
  children?:JSX.Element
}

export const Counter: Component<Props> = (props) => {
  const [count, setCount] = createSignal(props.initialValue);

  return (
    <>
      {props.children}
      <h3>Value: {count()}</h3>

      <div class="flex items-center gap-4">
        <button
          onclick={() => setCount(count() - 1)}
          class="bg-orange-400 px-6 py-2 rounded-xl flex cursor-pointer"
        >
          -
        </button>
        <button
          onclick={() => setCount(count() + 1)}
          class="bg-orange-400 px-6 py-2 rounded-xl flex cursor-pointer"
        >
          +
        </button>
      </div>
    </>
  );
};
