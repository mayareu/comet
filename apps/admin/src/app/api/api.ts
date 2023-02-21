import { CurrentWeatherData, ForecastLocation } from '@comet/types';
const openWeatherAPI = 'https://api.openweathermap.org/data/2.5';

export const getLocations = (searchStr = ''): Promise<ForecastLocation[]> => {
  return fetch('assets/cities.json')
    .then((response) => {
      return response.json();
    })
    .then((data: ForecastLocation[]) => {
      const filteredData = searchStr
        ? data.filter(
            (location) =>
              location.name.toLowerCase().includes(searchStr) ||
              location.country.toLowerCase().includes(searchStr)
          )
        : [];
      return filteredData.length > 10 ? filteredData.slice(0, 9) : filteredData;
    });
};

export const getCitiesList = (): Promise<ForecastLocation[]> => {
  return (
    fetch('assets/cities.json')
      .then((response) => {
        return response.json();
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any[]) => {
        return data.map((location) => location as ForecastLocation);
      })
  );
};
export const getWeather = (
  lat: number,
  long: number
): Promise<CurrentWeatherData> => {
  return fetch(
    `${openWeatherAPI}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.NX_APP_API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data: CurrentWeatherData) => {
      if (data.main) {
        const avg = data.main.temp_min + data.main.temp_max / 2;
        data.dailyForcast = {
          avg,
          night: data.main.temp_min,
          eve: avg,
          morn: data.main.temp_max,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          visibility: data.visibility,
        };
      }
      return data;
    });
};

export const getMultipuleLocationsWeather = (
  locations: number[]
): Promise<CurrentWeatherData[]> => {
  return fetch(
    `${openWeatherAPI}/group?id=${locations.join(',')}&units=metric&APPID=${
      process.env.NX_APP_API_KEY
    }`
  )
    .then((response) => {
      return response.json();
    })
    .then((data: { cnt: number; list: CurrentWeatherData[] }) => {
      return data ? data.list : [];
    });
};
