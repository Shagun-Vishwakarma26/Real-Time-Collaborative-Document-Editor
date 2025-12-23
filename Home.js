import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

export default function Home() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleCreate = () => {
    navigate(`/documents/${uuidV4()}`);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Document Editor</h1>
        <p style={styles.subtitle}>Collaborate and create in real-time.</p>
        
        <button 
          style={{
            ...styles.button, 
            backgroundColor: isHovered ? '#1765cc' : '#1a73e8',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleCreate}
        >
          + Create New Document
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: '"Segoe UI", sans-serif'
  },
  hero: {
    textAlign: 'center',
    padding: '60px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
  },
  title: { fontSize: '3.5rem', color: '#202124', margin: '0 0 10px 0', fontWeight: '800' },
  subtitle: { fontSize: '1.3rem', color: '#5f6368', marginBottom: '40px' },
  button: {
    padding: '18px 40px',
    fontSize: '1.2rem',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    boxShadow: '0 4px 15px rgba(26, 115, 232, 0.3)'
  }
};