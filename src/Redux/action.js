import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const deletedUser = (id) => ({
  type: types.DELETE_USERS,
  payload: id,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3000/users")
      .then((resp) => {
        console.log("resp", resp);

        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getUser = (userId) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((resp) => {
        console.log("getuserresp", resp.data);

        dispatch({
          type: types.GET_SINGLE_USERS,
          payload: resp.data,
        });
      })
      .catch((error) => console.log(error));
  };
};
export const addUser =
  ({
    karyaSwaroop,
    karyaPrakriti1,
    karyaPrakriti2,
    karyaPrakriti3,
    name,
    nameasAADHAR,
    fatherName,
    motherName,
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
  }) =>
  async (dispatch) => {
    try {
      const responseData = await axios.post("http://localhost:3000/users", {
        karyaSwaroop,
        karyaPrakriti1,
        karyaPrakriti2,
        karyaPrakriti3,
        name,
        nameasAADHAR,
        fatherName,
        motherName,
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
      });

      const id = responseData.data.id;

      console.log("ID===", id);

      const userData = {
        id,
        karyaSwaroop,
        karyaPrakriti1,
        karyaPrakriti2,
        karyaPrakriti3,
        name,
        nameasAADHAR,
        fatherName,
        motherName,
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
      };

      console.log("ACTION", userData);
      dispatch({
        type: types.ADD_USERS,
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((resp) => {
        console.log("resp", resp);

        dispatch(deletedUser(id));

        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser =
  ({
    karyaSwaroop,
    karyaPrakriti1,
    karyaPrakriti2,
    karyaPrakriti3,
    name,
    nameasAADHAR,
    fatherName,
    motherName,
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
    userId,
  }) =>
  async (dispatch) => {
    try {
      const responseData = await axios.put(
        `http://localhost:3000/users/${userId}`,
        {
          karyaSwaroop,
          karyaPrakriti1,
          karyaPrakriti2,
          karyaPrakriti3,
          name,
          nameasAADHAR,
          fatherName,
          motherName,
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
        }
      );

      const id = responseData.data.id;

      const userData = {
        id,
        karyaSwaroop,
        karyaPrakriti1,
        karyaPrakriti2,
        karyaPrakriti3,
        name,
        nameasAADHAR,
        fatherName,
        motherName,
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
      };

      console.log("ACTION", userData);
      dispatch({
        type: types.UPDATE_USER_SUCCESS,
        payload: userData,
      });
      alert("UDATED SUCCESSFULLY :)  ");
    } catch (error) {
      console.log(error);
    }
  };
