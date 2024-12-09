// src/components/CPanel/CPanelLayout.tsx
import React, { useState, useContext } from 'react';
import styles from './CPanel.module.css';
import { ThemeContext } from '../../state/ThemeContext';
import CPanelHeader from './components/CPanelHeader';
import { ServerStackIcon, ChartBarIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';

interface CPanelLayoutProps {
  children: React.ReactNode;
}

const CPanelLayout: React.FC<CPanelLayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Lógica de salir, por ejemplo, limpiar tokens, redirigir a login
    window.location.href = '/';
    console.log('User logged out');

  };

  return (
    <div className={styles.cpanelContainer}>
      <CPanelHeader onToggleSidebar={toggleSidebar} onLogout={handleLogout} />
      
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.userInfo}>
          <img src="/src/assets/user-avatar.svg" alt="User Avatar" className={styles.avatar}/>
          <span className={styles.userName}>Alicia Canta</span>
        </div>
        <nav className={styles.menu}>
          <a href="#procesamiento" className={styles.menuLink}>
            <ServerStackIcon className={styles.menuIcon}/>
            Procesamiento de Datos
          </a>
          <a href="#estadisticas" className={styles.menuLink}>
            <ChartBarIcon className={styles.menuIcon}/>
            Estadísticas
          </a>
          <a href="#configuracion" className={styles.menuLink}>
            <ChartBarIcon className={styles.menuIcon}/>
            Conectar DB
          </a>
        </nav>
      </aside>

      <div className={styles.mainContent} onClick={() => sidebarOpen && toggleSidebar()}>
        {children}
      </div>
    </div>
  );
};

export default CPanelLayout;
