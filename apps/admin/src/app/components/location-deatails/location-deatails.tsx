import { BasicFlexContainer, GlassCard, SaveButton } from '@comet/ui';
import styled from '@emotion/styled';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import { UseAppContext } from '../../context-provider/context-provider';
import DateTime from '../date-time/date-time';
import LocationName from '../location-name/location-name';

export interface LocationDetailsProps {
  country: string;
  city: string;
  id: number;
}

const StyledLocationDetails = styled(GlassCard)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  rowGap: 12,
  flexDirection: 'column',
  height: 'calc(100% - 296px)',
  width: 340,
  position: 'relative',
  padding: '32px',
});

export const LocationDetails: FC<LocationDetailsProps> = ({
  country,
  id,
  city,
}) => {
  const [saved, setSaved] = useState<boolean>(false);
  const globalStateObj = UseAppContext();
  useEffect(() => {
    globalStateObj?.userLocations.savedLocations.find(
      (savedLocation) => savedLocation === id
    )
      ? setSaved(true)
      : setSaved(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    const value = e.target.checked;
    if (value) {
      globalStateObj?.userLocations.saveLocation(id);
    } else {
      globalStateObj?.userLocations.removeLocation(id);
    }
    setSaved(value);
  };

  return (
    <StyledLocationDetails variant="outlined">
      <BasicFlexContainer
        props={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <LocationName country={country} city={city} />
        {id > 0 && <SaveButton checked={saved} handleChange={handleChange} />}
      </BasicFlexContainer>
      <DateTime />
    </StyledLocationDetails>
  );
};

export default LocationDetails;
