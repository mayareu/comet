import { BasicFlexContainer } from '@comet/ui';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { Clock } from './clock/clock';

export const DateTime: FC = () => {
  const date = new Date();
  const today = date.toDateString();
  return (
    <BasicFlexContainer
      props={{ rowGap: 6, flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <Typography variant="h3" sx={{ mb: '4px' }} gutterBottom>
        {today}
      </Typography>
      <Clock />
    </BasicFlexContainer>
  );
};

export default DateTime;
