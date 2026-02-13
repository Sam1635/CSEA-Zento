import { useState, useEffect } from 'react';
import './Countdown.css';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="countdown-container">
      <div className="countdown-header">
        <div className="countdown-accent-line"></div>
        <h3 className="countdown-title">EVENT COUNTDOWN</h3>
        <div className="countdown-accent-line"></div>
      </div>
      
      <div className="countdown-grid">
        {timeUnits.map((unit, index) => (
          <div key={index} className="countdown-unit">
            <div className="countdown-value-wrapper">
              <div className="countdown-value">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="countdown-glow"></div>
            </div>
            <div className="countdown-label">{unit.label}</div>
            <div className="countdown-divider"></div>
          </div>
        ))}
      </div>
      
      <div className="countdown-footer">
        <span className="countdown-date">MARCH 4TH, 2026</span>
      </div>
    </div>
  );
}
