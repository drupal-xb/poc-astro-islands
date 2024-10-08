import type { ComponentChildren } from "preact";

type Props = {
  column_one: ComponentChildren;
  column_two: ComponentChildren;
  width: number;
};

export default function PreactTwoColumn({
  column_one,
  column_two,
  width,
}: Props) {
  const widthMap = {
    25: "w-[25%] max-w-[25%]",
    33: "w-[33%] max-w-[33%]",
    34: "w-[34%] max-w-[34%]",
    50: "w-[50%] max-w-[50%]",
    66: "w-[66%] max-w-[66%]",
    67: "w-[67%] max-w-[67%]",
    75: "w-[75%] max-w-[75%]",
  };
  return (
    <div class="flex">
      <div class={`column-one flex-none ${widthMap[width]}`}>{column_one}</div>
      <div class={`column-two flex-none ${widthMap[100 - width]}`}>
        {column_two}
      </div>
    </div>
  );
}
