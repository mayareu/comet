import { CurrentWeatherData } from '@comet/types';
import { BasicFlexContainer, GlassCard, Temperature } from '@comet/ui';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { FC } from 'react';
import LocationName from '../../../components/location-name/location-name';

export interface CardProps {
  locationWeatherData: CurrentWeatherData;
}

const StyledCard = styled(GlassCard)({
  width: 'auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: 20,
});
export const LocationCard: FC<CardProps> = ({ locationWeatherData }) => {
  return (
    <StyledCard>
      <LocationName
        country={locationWeatherData.sys.country}
        city={locationWeatherData.name}
        variant="h4"
      />
      <BasicFlexContainer
        props={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Temperature temp={locationWeatherData.main.temp} variant="h4" />
        <Typography variant="h5">
          {locationWeatherData.weather[0].description}
        </Typography>
      </BasicFlexContainer>
    </StyledCard>
  );
};

export default LocationCard;
