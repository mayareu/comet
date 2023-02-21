import { Img } from '../../';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { FC } from 'react';
import { BasicFlexContainer } from '../../containers';

export interface LabelProps {
  iconName?: string;
  label: string;
  variant?: Variant;
}

export const Label: FC<LabelProps> = ({ iconName, label, variant = 'h4' }) => (
  <BasicFlexContainer>
    <Typography variant={variant}>{label} </Typography>
    {iconName && (
      <Img
        alt={iconName}
        src={`assets/${iconName}.svg`}
        props={{ width: 20, margin: 0 }}
      />
    )}
  </BasicFlexContainer>
);

export default Label;
