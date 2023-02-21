import { CurrentWeatherData } from '@comet/types';
import { BasicFlexContainer, Label, Temperature } from '@comet/ui';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { FC } from 'react';

export interface WeatherDetailsProps {
  weatherData: CurrentWeatherData;
}

const StyledWeather = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  columnGap: 24,
  padding: 32,
  height: 340,
  width: '60%',
});

export const WeatherDetails: FC<WeatherDetailsProps> = ({ weatherData }) => {
  return (
    <StyledWeather>
      <BasicFlexContainer
        props={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Temperature temp={weatherData.main.temp} variant="h1" />

        <Typography variant="h3">
          {weatherData.weather[0].description}
        </Typography>
      </BasicFlexContainer>
      <BasicFlexContainer
        props={{
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <Label label={`${weatherData.main.humidity} %`} iconName="humidity" />
        <Label label={`${weatherData.wind.speed} km`} iconName="wind" />
        <Label label={`${weatherData.clouds.all} %`} iconName="clouds" />
      </BasicFlexContainer>
    </StyledWeather>
  );
};

export default WeatherDetails;
