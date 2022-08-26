import axios from 'axios'
import * as types from './actionType'

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
})

const useradded = (users) => ({
  type: types.ADD_USERS,
  payload: users,
})

const deleteduser = () => ({
  type: types.DELETE_USERS,
})

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get('http://localhost:3000/users')
      .then((resp) => {
        console.log('resp', resp)

        dispatch(getUsers(resp.data))
      })
      .catch((error) => console.log(error))
  }
}

export const addUser = (
  karyaSwaroop,
  karyaPrakriti1,
  karyaPrakriti2,
  karyaPrakriti3,
  name,
  fatherName,
  gender,
  marriage,
  dob,
  age,
  caste,
  manrega,
  ration,
  voterId,
  rsBy,
  aadharCard,
  bankName,
  branchName,
  acNumber,
  ifsCode,
  esiNumber,
  epfNumber,
  currentDist,
  currentVidhansabhaArea,
  currentVikasKhand,
  currentPanchayat,
  currentWard,
  currentAdd,
  currentHouseNo,
  currentMob1,
  currentMob2,
  permanentDist,
  permanentVidhansabhaArea,
  permanentVikasKhand,
  permanentPanchayat,
  permanentWard,
  permanentAdd,
  permanentHouseNo,
  permanentMob1,
  permanentMob2,
) => {
  return function (dispatch) {
    axios
      .post('http://localhost:3000/users', {
        karyaSwaroop,
        karyaPrakriti1,
        karyaPrakriti2,
        karyaPrakriti3,
        name,
        fatherName,
        gender,
        marriage,
        dob,
        age,
        caste,
        manrega,
        ration,
        voterId,
        rsBy,
        aadharCard,
        bankName,
        branchName,
        acNumber,
        ifsCode,
        esiNumber,
        epfNumber,
        currentDist,
        currentVidhansabhaArea,
        currentVikasKhand,
        currentPanchayat,
        currentWard,
        currentAdd,
        currentHouseNo,
        currentMob1,
        currentMob2,
        permanentDist,
        permanentVidhansabhaArea,
        permanentVikasKhand,
        permanentPanchayat,
        permanentWard,
        permanentAdd,
        permanentHouseNo,
        permanentMob1,
        permanentMob2,
      })
      .then((resp) => {
        console.log('resp', resp)

        dispatch(useradded())
        dispatch(loadUsers())
      })
      .catch((error) => console.log(error))
  }
}

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((resp) => {
        console.log('resp', resp)

        dispatch(deleteduser())
        dispatch(loadUsers())
      })
      .catch((error) => console.log(error))
  }
}
