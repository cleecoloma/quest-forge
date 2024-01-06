'use strict';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import '../styles/SelectionCard.css';

function SelectionCard({ label, image, value, selected, onClick }) {
  return (
    <Card
      onClick={() => onClick(value)}
      style={{ border: selected ? '2px solid red' : '' }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='160'
          image={image}
          alt={label}
          className='selection-card-image'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            className='selection-card-title'
          >
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SelectionCard;