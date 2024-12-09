// src/pages/cpanel/index.tsx
import React from 'react';
import CPanelLayout from '../modules/cpanel/CPanelLayout';

const CPanelPage: React.FC = () => {
  return (
    <CPanelLayout>
      <h1>Procesamiento de Datos</h1>
      <p>Aquí podría mostrarse información relevante sobre datasets, procesamiento en cola, resultados, etc.</p>
      <p>Utiliza la barra lateral para navegar entre diferentes secciones del panel.</p>
    </CPanelLayout>
  );
};

export default CPanelPage;
