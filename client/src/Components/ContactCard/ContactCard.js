import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
import { deleteContact } from '../../JS/actions/contact';
   
export default function ContactCard({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/EditContact/${contact._id}`); 
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-286x300.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {contact.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {contact.Phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
          species,
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(deleteContact(contact._id))}>
          Delete
        </Button>
        <Button size="small" onClick={handleEditClick}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}