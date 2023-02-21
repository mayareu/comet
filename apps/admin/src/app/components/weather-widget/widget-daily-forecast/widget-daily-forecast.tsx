import { DailyForecast } from '@comet/types';
import { BasicFlexContainer, GlassCard, Img, Temperature } from '@comet/ui';
import { Grid, styled, Typography } from '@mui/material';
import { FC } from 'react';

export interface DailyForecastProps {
  forecast: DailyForecast;
}
const StyledDailyForecast = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
}));

export const WidgetDailyForecast: FC<DailyForecastProps> = ({ forecast }) => {
  const dayParts: { key: keyof DailyForecast; label: string }[] = [
    { key: 'morn', label: 'Morning' },
    { key: 'eve', label: 'Noon' },
    { key: 'night', label: 'Night' },
  ];

  return (
    <StyledDailyForecast>
      <Grid container spacing={4}>
        {dayParts.map((value) => (
          <Grid key={value.key} item xs={2}>
            <DayPartDetailsCard
              label={value.label}
              temp={forecast[value.key]}
            />
          </Grid>
        ))}

        <Grid item xs={2}>
          <SunDetailsCard
            label="Visibility"
            value={`${forecast.visibility} m`}
            bgColerd={false}
          />
        </Grid>

        <Grid item xs={2}>
          <SunDetailsCard
            label="Sunrise"
            value={getTimeFromNum(forecast.sunrise)}
          />
        </Grid>

        <Grid item xs={2}>
          <SunDetailsCard
            label="Sunset"
            value={getTimeFromNum(forecast.sunset)}
          />
        </Grid>
      </Grid>
    </StyledDailyForecast>
  );
};

export default WidgetDailyForecast;

const getTimeFromNum = (num: number): string =>
  new Date(num * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

const SunDetailsCard: FC<{
  label: string;
  value: string;
  bgColerd?: boolean;
}> = ({ label, value, bgColerd = true }) => (
  <StyledCard>
    <BasicFlexContainer
      props={
        bgColerd
          ? {
              width: 60,
              height: 60,
              borderRadius: '50%',
              background:
                label.toLowerCase() === 'sunrise'
                  ? sunriseLinearBg
                  : sunsetLinearBg,
            }
          : {}
      }
    >
      <Img
        alt={label}
        src={`assets/${label.toLowerCase()}.svg`}
        props={bgColerd ? {} : { width: 60 }}
      />
    </BasicFlexContainer>
    <Typography
      variant="h3"
      color="primary.main"
      sx={{ fontSize: '32px', marginBottom: bgColerd ? '0' : '20px' }}
    >
      {value}
    </Typography>
  </StyledCard>
);

const StyledCard = styled(GlassCard)({
  height: 200,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

const DayPartDetailsCard: FC<{ label: string; temp: number }> = ({
  label,
  temp,
}) => (
  <StyledCard>
    <Img
      alt={label}
      src={`assets/${label.toLowerCase()}.svg`}
      props={{ width: 60 }}
    />
    <Temperature temp={temp} variant="h3" />
  </StyledCard>
);

const sunsetLinearBg = 'linear-gradient(180deg, #ff5f6d 0%,  #ffc371 100%)';
const sunriseLinearBg = 'linear-gradient(180deg, #ffc371 0%,  #ff5f6d 100%)';
