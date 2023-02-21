import { BasicFlexContainer } from '@comet/ui';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { FC } from 'react';

export interface LocationNameProps {
  country: string;
  city: string;
  variant?: Variant;
}

export const LocationName: FC<LocationNameProps> = ({
  city,
  country,
  variant = 'h1',
}) => {
  return (
    <BasicFlexContainer>
      <Typography variant={variant} color="primary.contrastText" gutterBottom>
        {city}
      </Typography>
      ,
      <Typography variant="h2" gutterBottom>
        {country}
      </Typography>
    </BasicFlexContainer>
  );
};

export default LocationName;
