import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const GlassCard = styled(Card)({
  border: '2px solid rgb(216 249 255 / 34%)',
  borderRadius: 8,
  background:
    'linear-gradient(180deg, rgb(216 240 255 / 8%) 0%, rgb(230 236 245 / 0%) 100%)',
  backdropFilter: 'blur(14px)',
  alignItems: 'center',
  boxShadow: '3px 3px 20px 0 rgb(0 0 0 / 10%)',
  flexDirection: 'column',
});
export default GlassCard;
