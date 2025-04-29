import { Link } from 'react-router-dom';
import './index.css';

const Welcome = () => {
  return (
    <div className="welcome-page" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: '80px',
      background: 'linear-gradient(to bottom, #f9f9f9, #e0d2ff)'
    }}>
      <div className="container">
        <div style={{ maxWidth: '600px', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#6c5ce7',
            marginBottom: '20px'
          }}>Welcome to PoX</h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#2d3436',
            marginBottom: '10px',
            lineHeight: '1.6'
          }}>Lorem ipsum dolor sit amet consectetur adipiscing elit..</p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/register" className="btn btn-primary">Create Account</Link> 
            <Link to="/login" className="btn btn-outline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;