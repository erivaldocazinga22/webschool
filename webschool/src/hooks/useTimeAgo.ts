import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

export const useTimeAgo = (createdAt: Date | null | undefined) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    if (createdAt) {
      const intervalId = setInterval(() => {
        const distance = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
        setTimeAgo(distance);
      }, 60000);

      return () => clearInterval(intervalId);
    } else {
      setTimeAgo('');
    }
  }, [createdAt]);

  return timeAgo;
};
