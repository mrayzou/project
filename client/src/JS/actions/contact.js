import axios from "axios"
import { ADD_CONTACTS, EDIT_CONTACTS, FAIL_CONTACTS, GET_CONTACTS, GET_ONE_CONTACT, LOAD_CONTACTS, } from "../actionstypes/contact"; 

export const getContacts =() => async (dispatch)=>{
        dispatch({type : LOAD_CONTACTS})
    try {
      let result = await axios.get(`/api/contact/get_contacts`)
      dispatch({type : GET_CONTACTS , payload : result.data})
      
    } catch (error) {
      dispatch({type : FAIL_CONTACTS ,payload : error.response})
    }
};

export const addContact= (newContact) => async(dispatch) =>{
  dispatch({type : LOAD_CONTACTS})
  try {
    let result = await axios.post(`/api/contact/add_contact`,newContact)
    dispatch({type : ADD_CONTACTS , payload : result.data})
    dispatch(getContacts())
  } catch (error) {
    dispatch({type : FAIL_CONTACTS , payload :error.response})
    
  }
};

export const deleteContact = (id) => async (dispatch) =>{
  dispatch({type : LOAD_CONTACTS})
try {
  await axios.delete(`/api/contact/delete_contact/${id}`)
  dispatch(getContacts())
} catch (error) {
    dispatch({type : FAIL_CONTACTS , payload : error.response})
}
};


export const getOneContact =(id) => async(dispatch) =>{
    dispatch({type : LOAD_CONTACTS})
    try {
      let result = await axios.get(`/api/contact/get_contact/${id}`)
      dispatch({type : GET_ONE_CONTACT , payload : result.data})
    } catch (error) {
     dispatch({type : FAIL_CONTACTS , payload :error.response}) 
    }
}

export const updateContact = (id,contact) => async(dispatch) =>{
  dispatch({type : LOAD_CONTACTS})
  try {
    let result = await axios.put(`/api/contact/update_contact/${id}`,contact)
    dispatch({type : EDIT_CONTACTS , payload : result.data})
    dispatch(getOneContact())
  } catch (error) {
    dispatch({type : FAIL_CONTACTS, payload : error.response})
  }
}