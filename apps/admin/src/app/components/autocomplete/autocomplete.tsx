import { ForecastLocation } from '@comet/types';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { ChangeEventHandler, FC } from 'react';

export interface AutocompleteProps {
  items: ForecastLocation[];
  change: ChangeEventHandler<HTMLInputElement>;
  select: (value: ForecastLocation | null) => void;
  loading: boolean;
}

export const Autocomplete: FC<AutocompleteProps> = ({
  items,
  select,
  change,
  loading,
}) => {
  return (
    <MuiAutocomplete
      disablePortal
      color="secondary"
      size="small"
      fullWidth
      getOptionLabel={(option) => option.name}
      options={items}
      loading={loading}
      loadingText="Loading..."
      onChange={(e, value) => select(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Location"
          onChange={change}
          placeholder="Search for a city"
        />
      )}
    />
  );
};

export default Autocomplete;
