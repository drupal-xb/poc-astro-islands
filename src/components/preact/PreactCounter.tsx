import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

type Props = {
  children: ComponentChildren;
  count: number;
};

export default function PreactCounter({ children, count }: Props) {
  const [currentCount, setCurrentCount] = useState(count);
  const add = () => setCurrentCount((i) => i + 1);
  const subtract = () => setCurrentCount((i) => i - 1);

  return (
    <>
      <div class="grid text-2xl grid-cols-3 mt-8 place-items-center">
        <button onClick={subtract}>-</button>
        <pre>{currentCount}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="text-center text-[#673ab8]">{children}</div>
    </>
  );
}
