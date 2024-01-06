'use strict';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

function SelectionCard({ label, image, value, selected, onClick }) {
  return (
    <Card
      onClick={() => onClick(value)}
      style={{ border: selected ? '2px solid blue' : '' }}
    >
      <CardActionArea>
        <CardMedia component='img' height='140' image={image} alt={label} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SelectionCard;