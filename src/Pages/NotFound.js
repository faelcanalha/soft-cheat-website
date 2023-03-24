import Fade from 'react-reveal/Fade';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NotFound() {
  const [redirect, setRedirect] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === '...') {
          return '';
        } else {
          return prevDots + '.';
        }
      });
    }, 1500);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Fade bottom>
      <div
        style={{
          height: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="c-white-85" style={{ textAlign: 'center' }}>
          <h1>404 - Page not found</h1>
          <p>Sorry, but the requested page is not found.</p>
          {redirect ? null : <p>Redirecting{dots}</p>}
        </div>
      </div>
    </Fade>
  );
}

export default NotFound;
