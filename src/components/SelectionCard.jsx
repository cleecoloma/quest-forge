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
        <CardMedia component='img' height='150' image={image} alt={label} />
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