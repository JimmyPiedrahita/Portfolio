import React, { useEffect, useRef } from 'react';

const GrainOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scale = 0.3;

    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);
      for (let i = 0; i < buffer.length; i++) {
        const baseGray = 44;
        const variation = 20;
        const gray = Math.max(0, Math.min(255, baseGray + (Math.random() * (variation * 2) - variation))) | 0;
        buffer[i] = (255 << 24) | (gray << 16) | (gray << 8) | gray;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const intervalId = setInterval(drawNoise, 0); // 10 FPS

    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.3,
        mixBlendMode: 'multiply',
      }}
    />
  );
};

export default GrainOverlay;
