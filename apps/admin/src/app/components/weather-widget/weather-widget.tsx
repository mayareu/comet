import { CurrentWeatherData } from '@comet/types';
import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { getWeather } from '../../api/api';
import { UseAppContext } from '../../context-provider/context-provider';
import LocationDetails from '../location-deatails/location-deatails';
import { WidgetDailyForecast } from './widget-daily-forecast/widget-daily-forecast';
import WeatherDetails from './weather-details/weather-details';

export interface WeatherWidgetProps {
  weatherData?: CurrentWeatherData;
  lat?: number;
  long?: number;
}

const StyledWidget = styled('div')({
  display: 'flex',
  height: '-webkit-fill-available',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  position: 'relative',
  flexWrap: 'wrap',
  alignContent: 'space-between',
  rowGap: 24,
  columnGap: 24,
  padding: '24px 24px 32px 24px',
  backgroundImage: "url('assets/bg-light.svg')",
  boxShadow: '1px 5px 20px 0 #00000057',
  borderRadius: 12,
});

export const WeatherWidget: FC<WeatherWidgetProps> = ({ lat, long }) => {
  const [weatherData, setWeatherData] = useState<CurrentWeatherData>();
  const [locationId, setLocationId] = useState<number>(-1);
  const globalStateObj = UseAppContext();
  useEffect(() => {
    const fetchData = async () => {
      await getWeather(lat || -1, long || -1).then((result) => {
        setWeatherData(result);
        if (globalStateObj && result.name) setLocationId(result.sys.id);
      });
    };
    lat && long && fetchData();
  }, [lat, long]);

  return (
    <StyledWidget>
      {weatherData?.main ? (
        <>
          <LocationDetails
            city={weatherData?.name}
            country={weatherData?.sys?.country}
            id={locationId}
          />
          <WeatherDetails weatherData={weatherData} />
          {weatherData.dailyForcast && (
            <WidgetDailyForecast forecast={weatherData.dailyForcast} />
          )}
        </>
      ) : (
        <CircularProgress />
      )}
    </StyledWidget>
  );
};

export default WeatherWidget;
