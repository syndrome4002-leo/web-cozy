import { useState, useEffect } from "react";

interface CounterProps {
  target: string;
  duration?: number;
}

const Counter = ({ target, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Extract number from target (handle "200+", "99.9%", "50+", "10+")
    const match = target.match(/(\d+(?:\.\d+)?)/);
    if (!match) return;

    const targetNum = parseFloat(match[1]);
    const isPercentage = target.includes('%');
    const hasPlus = target.includes('+');

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(targetNum * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  // Format the display value
  const formatValue = (num: number) => {
    const isPercentage = target.includes('%');
    const hasPlus = target.includes('+');

    let formatted = num.toString();
    if (isPercentage && target.includes('.')) {
      formatted = num.toFixed(1);
    }

    return formatted + (isPercentage ? '%' : hasPlus ? '+' : '');
  };

  return <span>{formatValue(count)}</span>;
};

export default Counter;