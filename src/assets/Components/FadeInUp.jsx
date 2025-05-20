import { useEffect, useState } from 'react';
import '/home/khodor/ReactProjects/Portfolio/Portfolio/src/index.css';

const FadeInUp = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in-up ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInUp;
