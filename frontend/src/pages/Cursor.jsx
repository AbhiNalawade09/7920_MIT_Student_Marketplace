// src/BlobCursor.jsx
import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const BlobCursor = () => {
  const cursorBlobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Update the blob cursor position with smooth transition
      if (cursorBlobRef.current) {
        cursorBlobRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    // Add mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup event listener
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="blob-cursor" ref={cursorBlobRef}></div>;
};

export default BlobCursor;

