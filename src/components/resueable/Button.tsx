import { Button } from "@/components/ui/button";

interface ButtonType {
  className?: string;
  text: string;
  onClick: () => void;
  isActive: boolean;
}
export function Bbutton({ text, onClick, isActive }: ButtonType) {
  return (
    <Button
      className={`border-none outline-none underline text-[16px] ${
        isActive
          ? "transition-all duration-500 ease-out text-primary-light"
          : ""
      }`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
