import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    updateCanvasSize();

    const characters = '01';
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = () => {
      // Slightly less fade for more visible trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Increased base opacity for more visibility
        const opacity = Math.random() * 0.3 + 0.3; // Random opacity between 0.3 and 0.6
        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      updateCanvasSize();
      // Recalculate drops array based on new width
      const newColumns = Math.ceil(canvas.width / fontSize);
      drops.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.random() * -100;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full opacity-60" // Increased opacity to 60%
      style={{
        display: 'block',
      }}
    />
  );
};

export default MatrixRain;