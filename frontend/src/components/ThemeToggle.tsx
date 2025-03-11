import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/internal-components/ThemeProvider";
import { Button } from "./Button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-[999] bg-primary/10 hover:bg-primary/20 backdrop-blur-sm border-2 border-primary/50 shadow-md"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-foreground dark:-rotate-90 dark:scale-0 dark:opacity-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-foreground dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}