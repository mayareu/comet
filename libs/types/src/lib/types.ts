import { PaletteMode } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export interface Theme {
  typography: TypographyOptions;
  zIndex: Record<string, number>;
  shadows?: Record<string, string>;
  palette: Palette;
}
export type Palette = { mode: PaletteMode } & Record<string, string>;

export interface ForecastLocation {
  id: number;
  name: string;
  country: string;
  coord: Coords;
}
export interface Coords {
  lat: number;
  lon: number;
}

export interface NavRoute {
  label: string;
  href: string;
}

export type Weather = WeatherItem[];
export interface WeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherData {
  coord: Coords;
  weather: Weather;
  main: MainWeather;
  visibility: number;
  sys: Sys;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  timezone: string;
  id: number;
  name: string;
  cod: number;
  base: string;
  dailyForcast?: DailyForecast;
}

export interface DailyForecast {
  avg: number;
  night: number; //night temperature
  eve: number; //evening temperature
  morn: number;
  sunrise: number;
  sunset: number;
  visibility: number;
}

export interface GlobalStateObject {
  cities: ForecastLocation[];
  userLocations: {
    savedLocations: number[];
    saveLocation: (locationId: number) => number[];
    removeLocation: (locationId: number) => number[];
  };
}
