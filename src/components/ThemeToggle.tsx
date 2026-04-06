import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="fixed top-24 right-4 md:top-24 md:right-12 z-50 p-3 rounded-2xl bg-foreground/5 border border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-all backdrop-blur-md"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: -45 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="w-5 h-5 text-blue-400" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
};
