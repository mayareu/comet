import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ClockProps {}

export const Clock: FC = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 60000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <Typography variant="h4" gutterBottom>
      {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </Typography>
  );
};

export default Clock;
