// src/modules/cpanel/components/Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={onClose}>✕</button>
      <nav className={styles.menu}>
        <a href="#dashboard" className={styles.link}>Dashboard</a>
        <a href="#procesamiento" className={styles.link}>Procesamiento Datos</a>
        <a href="#reportes" className={styles.link}>Reportes</a>
        <a href="#configuracion" className={styles.link}>Configuración</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
