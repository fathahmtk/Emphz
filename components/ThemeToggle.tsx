import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useI18n } from '../hooks/useI18n';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
      aria-label={theme === 'light' ? t('theme.switchToDark') : t('theme.switchToLight')}
    >
      {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
    </button>
  );
};
