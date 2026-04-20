import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const FeaturePlaceholder = ({ title }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '60vh',
      color: 'var(--text-muted)'
    }}>
      <FiAlertCircle size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
      <h2>{title}</h2>
      <p>Trang này đang trong quá trình phát triển.</p>
    </div>
  );
};

export default FeaturePlaceholder;
