import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate, useParams } from 'react-router-dom';
import { getOneContact, updateContact} from '../../JS/actions/contact';
 
const EditContact = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [contact, setContact] = useState({});
  const contactToGet = useSelector((state) => state.contactReducer.contactToGet);

  const handlechange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getOneContact(id));
      if (contactToGet) {
      setContact(contactToGet);
    }
  }, [dispatch,id]);

  useEffect(() => {
    if (contactToGet) {
      setContact(contactToGet);
    }
  }, [contactToGet]);

  const handleUpdateContact = (e) => {
    e.preventDefault();
    dispatch(updateContact(id, contact));
    navigate('/contact');
  };



  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField id="outlined-basic"  variant="outlined" name="name" value={contact.name} onChange={handlechange} />
      <TextField id="outlined-basic"  variant="outlined" name="email" value={contact.email} onChange={handlechange} />
      <TextField id="outlined-basic"  variant="outlined"  name="Phone" value={contact.Phone} onChange={handlechange} />
      <Button onClick={handleUpdateContact} variant="contained">
        Update
      </Button>
    </div>
  );
};

export default EditContact;