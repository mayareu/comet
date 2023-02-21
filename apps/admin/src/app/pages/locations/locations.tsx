import { CurrentWeatherData } from '@comet/types';
import { BasicFlexContainer, Img, PageLayout } from '@comet/ui';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { getMultipuleLocationsWeather } from '../../api/api';
import { UseAppContext } from '../../context-provider/context-provider';
import { useInterval } from '../../hooks';
import LocationCard from './card/card';

const pollingInterval = 15000;

const StyledWidget = styled('div')({
  height: '100%',
  position: 'relative',
  padding: '24px 24px 32px 24px',
  backgroundImage: "url('assets/bg-light.svg')",
  boxShadow: '1px 5px 20px 0 #00000057',
  borderRadius: 12,
});

export const Locations: FC = () => {
  const globalStateObj = UseAppContext();
  const [delay, setDelay] = useState<number | null>(null);
  const [locationsWeatherData, setLocationsWeatherData] =
    useState<CurrentWeatherData[]>();

  useEffect(() => {
    if (
      globalStateObj &&
      globalStateObj?.userLocations?.savedLocations?.length > 0
    ) {
      getLocations();
      setDelay(pollingInterval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalStateObj?.userLocations?.savedLocations]);

  const getLocations = () => {
    globalStateObj?.userLocations?.savedLocations &&
      getMultipuleLocationsWeather(
        globalStateObj?.userLocations?.savedLocations
      ).then((data) => setLocationsWeatherData(data));
  };

  useInterval(getLocations, delay);

  return (
    <PageLayout>
      <BasicFlexContainer
        props={{ justifyContent: 'flex-start', height: 40, padding: '0 10px' }}
      >
        <Img
          alt={'location'}
          src={`assets/location.svg`}
          props={{ width: 38, margin: 0 }}
        />
        <Typography variant="h1">My Locations</Typography>
      </BasicFlexContainer>
      <StyledWidget>
        {locationsWeatherData ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {locationsWeatherData.map((locationWeatherData) => (
              <Grid item xs={2} sm={3} md={4} key={locationWeatherData.sys.id}>
                <LocationCard locationWeatherData={locationWeatherData} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h2">No Saved Locations</Typography>
        )}
      </StyledWidget>
    </PageLayout>
  );
};

export default Locations;
