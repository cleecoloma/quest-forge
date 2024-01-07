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
      </CardActionArea>
    </Card>
  );
}

export default SelectionCard;
