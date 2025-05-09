import React, { useEffect, useRef } from 'react';

const GrainOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);
      for (let i = 0; i < buffer.length; i++) {
        const gray = (Math.random() * 255) | 0;
        buffer[i] = (255 << 24) | (gray << 16) | (gray << 8) | gray;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const render = () => {
      drawNoise();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.3,
        mixBlendMode: 'multiply',
      }}
    />
  );
};

export default GrainOverlay;
