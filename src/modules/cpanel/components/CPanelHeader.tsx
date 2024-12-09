
// src/components/CPanel/CPanelHeader.tsx
import React, { useContext } from 'react';
import styles from './CPanelHeader.module.css';
import { ThemeContext } from '../../../state/ThemeContext';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'; 
import { Bars3Icon } from '@heroicons/react/24/outline';

interface CPanelHeaderProps {
  onToggleSidebar: () => void;
  onLogout: () => void;
}

const CPanelHeader: React.FC<CPanelHeaderProps> = ({ onToggleSidebar, onLogout }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <header className={styles.header}>
      <button className={styles.iconBtn} onClick={onToggleSidebar} aria-label="Toggle Menu">
        <Bars3Icon className={styles.icon}/>
      </button>
      <div className={styles.actions}>
        <ThemeToggle />
        <button className={styles.iconBtn} onClick={onLogout} aria-label="Logout">
          <ArrowRightOnRectangleIcon className={styles.icon}/>
        </button>
      </div>
    </header>
  );
};

export default CPanelHeader;
