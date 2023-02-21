import { ForecastLocation, GlobalStateObject } from '@comet/types';
import { CircularProgress } from '@mui/material';
import {
  FC,
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import { getCitiesList } from '../api/api';
import {
  getSavedLocations,
  removeLocation,
  saveLocation,
} from '../utils/location-utils';

interface ContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<undefined | GlobalStateObject>(undefined);

export const UseAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [cities, setCities] = useState<ForecastLocation[]>([]);
  const [savedLocations, setSavedLocations] = useState<number[]>([]);

  const saveLocationInStorage = (locationId: number): number[] => {
    const locations = saveLocation(locationId, savedLocations);
    setSavedLocations(locations);
    return locations;
  };
  const removeLocationFromStorage = (locationId: number): number[] => {
    const locations = removeLocation(locationId, savedLocations);
    setSavedLocations(locations);
    return locations;
  };

  const initContext = (): void => {
    initCities();
    initSavedLocation();
  };

  const initSavedLocation = (): void => {
    setSavedLocations(getSavedLocations());
  };

  const initCities = async (): Promise<void> => {
    const res = await getCitiesList();
    setCities(res);
  };

  useEffect(() => {
    initContext();
  }, []);
  const globalContext: GlobalStateObject = {
    cities,
    userLocations: {
      savedLocations,
      saveLocation: saveLocationInStorage,
      removeLocation: removeLocationFromStorage,
    },
  };

  return (
    <AppContext.Provider value={globalContext}>
      {cities ? children : <CircularProgress />}
    </AppContext.Provider>
  );
};

export default ContextProvider;
