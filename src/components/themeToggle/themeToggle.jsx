import { Sun, Moon } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

const ThemeToggle = () => {

    const { isDarkMode, toggleTheme } = useTheme();

return (
    <button
        onClick={toggleTheme}
        className={`p-1 ms-2 rounded transition-colors duration-300 ${
        isDarkMode
            ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
    }`}
    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;