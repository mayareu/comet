import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';
import { FC, useEffect, useState } from 'react';

export interface DateTimeProps {
  country: string;
  city: string;
}

const StyledDateTime = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  rowGap: 12,
  flexDirection: 'column',
  borderRadius: 20,
  padding: 40,
});

export const DateTime: FC<DateTimeProps> = ({
  country,
  city,
}: DateTimeProps) => {
  const date = new Date();
  const today = date.toDateString();
  return (
    <StyledDateTime>
      <Typography variant="h1" gutterBottom>
        {city}
      </Typography>
      ,
      <Typography variant="h2" gutterBottom>
        {country}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {today}
      </Typography>
      <Clock />
    </StyledDateTime>
  );
};

export default DateTime;

function Clock() {
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
    <Typography variant="h3" gutterBottom>
      {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </Typography>
  );
}
