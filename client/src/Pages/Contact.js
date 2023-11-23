import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import ContactCard from './../Components/ContactCard/ContactCard';
import { getContacts } from '../JS/actions/contact';
 
const Contacts = () => {
  const listContacts = useSelector(state => state.contactReducer.listContacts);
  const dispatch = useDispatch();
  const load = useSelector(state => state.contactReducer.load);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);


  return (
    <div>
    <div style={{display:'flex',justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}} >     
     {load ? (
        <h1>Loading...</h1>
      ) : (
        listContacts?.map((el) => (
         
            <ContactCard contact={el} key={el._id}/>
        ))
      )}
    </div>
    </div>
  );
};

export default Contacts;