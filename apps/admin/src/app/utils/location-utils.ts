import { ForecastLocation } from '@comet/types';
export const searchLocations = (
  data: ForecastLocation[],
  searchStr = '',
  resultsLimit = 10
): ForecastLocation[] => {
  const filteredData: ForecastLocation[] = [];
  data.some(
    (location) => (
      location.name
        .toLocaleLowerCase()
        // eslint-disable-next-line no-sequences
        .includes(searchStr.toLocaleLowerCase()) && filteredData.push(location),
      filteredData.length === resultsLimit
    )
  );
  return filteredData.length > 10 ? filteredData.slice(0, 9) : filteredData;
};

export const removeLocation = (
  id: number,
  savedLocations: number[]
): number[] => {
  const updatedLocations = savedLocations.filter(
    (locationId) => locationId !== id
  );
  updateSavedLocations(updatedLocations);
  return updatedLocations;
};

export const saveLocation = (
  id: number,
  savedLocations: number[]
): number[] => {
  savedLocations.push(id);
  updateSavedLocations(savedLocations);
  return savedLocations;
};

export const updateSavedLocations = (savedLocations: number[]): void => {
  localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
};

export const getSavedLocations = (): number[] => {
  const saved = localStorage.getItem('savedLocations');
  return saved ? JSON.parse(saved) : [];
};

export const getCityId = (
  cities: ForecastLocation[],
  cityName = ''
): number => {
  let id = -1;
  if (cities) {
    const result = cities.find((city) => city.name === cityName);
    id = result ? result.id : -1;
  }
  return id;
};
