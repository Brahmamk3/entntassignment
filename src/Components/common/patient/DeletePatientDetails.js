import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'

export default function DeletePatientDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "DELETE_PATIENT", payload: id });
    navigate("/layout/patients");
  }, [dispatch, id, navigate]);

  return null;
}