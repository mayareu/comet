import { Coords, ForecastLocation } from '@comet/types';
import { BasicFlexContainer, PageLayout } from '@comet/ui';
import {
  useState,
  useRef,
  useCallback,
  ChangeEventHandler,
  ChangeEvent,
  useEffect,
  FC,
} from 'react';
import Autocomplete from '../../components/autocomplete/autocomplete';
import WeatherWidget from '../../components/weather-widget/weather-widget';
import { searchLocations } from '../../utils/location-utils';
import { UseAppContext } from '../../context-provider/context-provider';

export const Home: FC = () => {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [coords, setCoords] = useState<Coords>();
  const [autocompleteItems, setAutocompleteItems] = useState<
    ForecastLocation[]
  >([]);
  const shouldWait = useRef<boolean>(false);
  const globalState = UseAppContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (
      position: GeolocationPosition
    ) {
      !lat && setLat(position.coords.latitude);
      !long && setLong(position.coords.longitude);
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  const throttle = useCallback(
    (
      callback: ChangeEventHandler<HTMLInputElement>,
      delay = 4000,
      args: ChangeEvent<HTMLInputElement>
    ) => {
      if (shouldWait.current) return;

      callback(args);
      shouldWait.current = true;

      setTimeout(() => {
        shouldWait.current = false;
      }, delay);
    },
    []
  );

  const onLocationSearch: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    getAutocompleteItems(event.target.value);
  };

  const locationSelected = (value: ForecastLocation | null): void => {
    if (value) {
      setLong(value.coord.lon);
      setLat(value.coord.lat);
    } else {
      setLong(coords?.lon);
      setLat(coords?.lat);
    }
  };

  const getAutocompleteItems = (searchStr: string): void => {
    setAutocompleteItems(searchLocations(globalState?.cities || [], searchStr));
  };

  return (
    <PageLayout>
      <BasicFlexContainer props={{ justifyContent: 'flex-start' }}>
        <Autocomplete
          items={autocompleteItems}
          change={(event) => throttle(onLocationSearch, 1000, event)}
          select={locationSelected}
          loading={shouldWait.current}
        />
      </BasicFlexContainer>

      <BasicFlexContainer props={{ height: '100%' }}>
        <WeatherWidget lat={lat} long={long} />
      </BasicFlexContainer>
    </PageLayout>
  );
};
export default Home;
