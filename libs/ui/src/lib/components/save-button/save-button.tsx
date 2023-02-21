import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Checkbox } from '@mui/material';
import { ChangeEventHandler, FC } from 'react';

export interface SaveButtonProps {
  handleChange: ChangeEventHandler;
  checked: boolean;
}

export const SaveButton: FC<SaveButtonProps> = ({ handleChange, checked }) => {
  return (
    <Checkbox
      sx={{
        padding: 0,
        color: 'secondary.light',
        '&.Mui-checked': {
          color: 'secondary.light',
        },
      }}
      checked={checked}
      onChange={handleChange}
      icon={<BookmarkBorderIcon sx={{ fobtSize: '30px' }} />}
      checkedIcon={<BookmarkIcon sx={{ width: '30px' }} />}
    />
  );
};

export default SaveButton;
