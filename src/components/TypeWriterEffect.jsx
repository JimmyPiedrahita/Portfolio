import React, { useState, useEffect } from 'react';
import '../stylesheets/TypeWriterEffect.css';

function TypeWriterEffect() {
  const correctText = 'SOFTWARE DEVELOPER';
  const textWithError = 'SOFTWARE DEBELOPER';
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typingError');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeout;
    let typingSpeed = 200;

    if (phase === 'deletingError' || phase === 'clearingAll'){
      typingSpeed = 50;
    }

    const waitTime = 1000;

    if (phase === 'typingError') {
      if (index < textWithError.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + textWithError.charAt(index));
          setIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setShowError(true);
          setPhase('showError');
        }, waitTime);
      }
    } else if (phase === 'showError') {
      timeout = setTimeout(() => {
        setPhase('deletingError');
        setIndex(textWithError.length);
      }, waitTime);
    } else if (phase === 'deletingError') {
      if (index > correctText.indexOf('DEVELOPER')) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setIndex(prev => prev - 1);
        }, typingSpeed);
      } else {
        setShowError(false);
        setPhase('typingCorrect');
        setIndex(correctText.indexOf('DEVELOPER'));
      }
    } else if (phase === 'typingCorrect') {
      if (index < correctText.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + correctText.charAt(index));
          setIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase('waitAndClear');
        }, waitTime);
      }
    } else if (phase === 'waitAndClear') {
      timeout = setTimeout(() => {
        setPhase('clearingAll');
        setIndex(correctText.length);
      }, waitTime);
    } else if (phase === 'clearingAll') {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setIndex(prev => prev - 1);
        }, typingSpeed);
      } else {
        setPhase('typingError');
      }
    }

    return () => clearTimeout(timeout);
  }, [index, phase]);

  const renderText = () => {
    if (showError) {
      const start = textWithError.indexOf('DEBELOPER');
      const end = start + 'DEBELOPER'.length;
      return (
        <>
          {displayText.slice(0, start)}
          <span className="error">{displayText.slice(start, end)}</span>
          {displayText.slice(end)}
        </>
      );
    } else {
      return displayText;
    }
  };

  return (
    <span className="typewriter">
      {renderText()}
      <span className="cursor">|</span>
    </span>
  );
}

export default TypeWriterEffect;
