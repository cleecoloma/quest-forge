'use strict';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import '../styles/SelectionCard.css';

function SelectionCard({ label, image}) {
  return (
    <Card id='card-area'>
      <CardActionArea>
        <CardMedia
          component='img'
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
