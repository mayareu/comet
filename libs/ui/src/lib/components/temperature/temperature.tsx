import { CurrentWeatherData } from '@comet/types';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface TemperatureProps {
  temp: number;
  variant: Variant;
}

export const Temperature: FC<TemperatureProps> = ({ temp, variant = 'h1' }) => {
  return (
    <Typography
      variant={variant}
      color="primary.contrastText"
      sx={{ fontSize: '32px', marginBottom: '20px' }}
      gutterBottom
    >
      {Math.round(temp)} &deg;C
    </Typography>
  );
};

export default Temperature;
