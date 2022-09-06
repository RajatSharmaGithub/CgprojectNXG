import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/action";
import { updateUser } from "../Redux/action";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// ============================================MUI====================================================

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";


export default function Bhag1() {

  let dispatch = useDispatch();

  const [updateStatus, setStatus] = useState(false);

  let paramData = useParams("id");

  const updateId = paramData.id;
  
// -------------------------------- सामान्य विवरण -------------------------------------

  const [karyaSwaroop, setKaryaSwaroop] = useState("");
  const [karyaPrakriti1, setKaryaPrakriti1] = useState("");
  const [karyaPrakriti2, setKaryaPrakriti2] = useState("");
  const [karyaPrakriti3, setKaryaPrakriti3] = useState("");
  const [name, setName] = useState("");
  const [nameasAADHAR, setNameasAADHAR] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [gender, setGender] = useState("");
  const [marriage, setMarriage] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [manrega, setManrega] = useState("");

  const [successAlert, setSuccessAlert] = useState(false);

  // -------------------------------- पहचान विवरण -------------------------------------

  const [ration, setRation] = useState("");
  const [voterId, setVoterId] = useState("");
  const [rsBy, setRsBy] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [acNumber, setAcNumber] = useState("");
  const [ifsCode, setIfsCode] = useState("");
  const [esiNumber, setEsiNumber] = useState("");
  const [epfNumber, setEpfNumber] = useState("");

  //   -----------------------------------पता---------------------------------------------

  //                                      वर्तमान पता

  const [currentDist, setCurrentDist] = useState("");
  const [currentVidhansabhaArea, setCurrentVidhansabhaArea] = useState("");
  const [currentVikasKhand, setCurrentVikasKhand] = useState("");
  const [currentPanchayat, setCurrentPanchayat] = useState("");
  const [currentWard, setCurrentWard] = useState("");
  const [currentAdd, setCurrentAdd] = useState("");
  const [currentHouseNo, setCurrentHouseNo] = useState("");
  const [currentMob1, setCurrentMob1] = useState("");
  const [currentMob2, setCurrentMob2] = useState("");

  // ---------------------------------------स्थाई पता------------------------------------------------

  const [permanentDist, setPermanentDist] = useState("");
  const [permanentVidhansabhaArea, setPermanentVidhansabhaArea] = useState("");
  const [permanentVikasKhand, setPermanentVikasKhand] = useState("");
  const [permanentPanchayat, setPermanentPanchayat] = useState("");
  const [permanentWard, setPermanentWard] = useState("");
  const [permanentAdd, setPermanentAdd] = useState("");
  const [permanentHouseNo, setPermanentHouseNo] = useState("");
  const [permanentMob1, setPermanentMob1] = useState("");
  const [permanentMob2, setPermanentMob2] = useState("");




  const [userId, setUserID] = useState(null);

  const [dataToUpdate, setDataToUpdate] = useState({});

  useEffect(() => {

    setStatus(true);

    axios
      .get(`http://localhost:3000/users/${updateId}`)

      .then((resp) => {

        setDataToUpdate(resp.data);

        setUserID(dataToUpdate.id);
        setKaryaSwaroop(dataToUpdate.karyaSwaroop);
        setKaryaPrakriti1(dataToUpdate.karyaPrakriti1);
        setKaryaPrakriti2(dataToUpdate.karyaPrakriti2);
        setKaryaPrakriti3(dataToUpdate.karyaPrakriti3);
        setFatherName(dataToUpdate.fatherName);
        setMotherName(dataToUpdate.motherName);
        setName(dataToUpdate.name);
        setNameasAADHAR(dataToUpdate.nameasAADHAR);
        setGender(dataToUpdate.gender);
        setMarriage(dataToUpdate.marriage);
        setDob(dataToUpdate.dob);
        setAge(dataToUpdate.age);
        setCaste(dataToUpdate.caste);
        setRation(dataToUpdate.ration);
        setVoterId(dataToUpdate.voterId);
        setRsBy(dataToUpdate.rsBy);
        setAadharCard(dataToUpdate.aadharCard);
        setBankName(dataToUpdate.bankName);
        setBranchName(dataToUpdate.branchName);
        setAcNumber(dataToUpdate.acNumber);
        setIfsCode(dataToUpdate.ifsCode);
        setEsiNumber(dataToUpdate.esiNumber);
        setEpfNumber(dataToUpdate.epfNumber);
        setCurrentDist(dataToUpdate.currentDist);
        setCurrentVidhansabhaArea(dataToUpdate.currentVidhansabhaArea);
        setCurrentVikasKhand(dataToUpdate.currentVikasKhand);
        setCurrentPanchayat(dataToUpdate.currentPanchayat);
        setCurrentWard(dataToUpdate.currentWard);
        setCurrentAdd(dataToUpdate.currentAdd);
        setCurrentHouseNo(dataToUpdate.currentHouseNo);
        setCurrentMob1(dataToUpdate.currentMob1);
        setCurrentMob2(dataToUpdate.currentMob2);
        setPermanentDist(dataToUpdate.permanentDist);
        setPermanentVikasKhand(dataToUpdate.permanentVikasKhand);
        setPermanentVidhansabhaArea(dataToUpdate.permanentVidhansabhaArea);
        setPermanentPanchayat(dataToUpdate.permanentPanchayat);
        setPermanentWard(dataToUpdate.permanentWard);
        setPermanentAdd(dataToUpdate.permanentAdd);
        setPermanentHouseNo(dataToUpdate.permanentHouseNo);
        setPermanentMob1(dataToUpdate.permanentMob1);
        setPermanentMob2(dataToUpdate.permanentMob2);
      });
  }, [updateId, userId]);


  const [nameerror, setNameerror] = useState("");
  const [ageerror, setAgeerror] = useState("");

  function Submii(e) {

    e.preventdefault();

  }

  function handlesubmit() {
    console.log("MotherName ,value", motherName, ageerror);
    if (motherName == "") {
      setNameerror("Name is REQUIRED");
    } else if (age == "") {
      setAgeerror("age is required");
    } else {
      if (updateId > 0) {
        console.log("updating...");
        dispatch(
          updateUser({
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
          })
        );
      } else {
        console.log("adding...");
        dispatch(
          addUser({
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
          })
        );

        setSuccessAlert("DATA SUBMITTED SUCCESSFULLY!");
        
        setName("");

      }
    }
  }

  function clickval() {
    setPermanentDist(currentDist);
    setPermanentVikasKhand(currentVikasKhand);
    setPermanentVidhansabhaArea(currentVidhansabhaArea);
    setPermanentPanchayat(currentPanchayat);
    setPermanentWard(currentWard);
    setPermanentAdd(currentAdd);
    setPermanentHouseNo(currentHouseNo);
  }

  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: "lightgrey" }}>
        <FormControl onSubmit={Submii}>
          <Grid>
            <h2 align="center">ऑनलाइन पंजियन अवेदन फॉर्म</h2>
          </Grid>

          <Grid sx={{ border: 1 }}>
            {/* ==============================MASTER GRID 2======================================== */}

            <Grid style={{ marginTop: "-13px", marginLeft: "17px" }}>
              <button> भाग 1</button>
              <button> भाग 2</button>
              <button> भाग 3</button>
            </Grid>

            <Grid container>
              <Grid item xs={10}>
                <p style={{ color: "Red", float: "right" }}>
                  क्या श्रमिक व्दारा प्रधान मंत्री जीवन ज्योति बीमा योजना <br />
                  और प्रधान मंत्री सुरक्षा बीमा योजना अन्तर्गत आपके खाते से राशि
                  आहरित हो चुका है
                </p>
              </Grid>

              <Grid item xs={2}>
                <input
                  type="radio"
                  value="1"
                  name="inputyesno"
                  style={{ width: "50px" }}
                />
                हा
                <input
                  type="radio"
                  value="2"
                  name="inputyesno"
                  style={{ width: "50px" }}
                />
                नही
              </Grid>
            </Grid>

            <Grid sx={{ padding: "10px" }}>
              <Grid sx={{ border: 1, padding: "10px" }}>
                <Grid style={{ marginTop: "-41px" }}>
                  <label style={{ backgroundColor: "lightgrey" }}>
                    {" "}
                    <h3> &nbsp; सामान्य विवरण</h3>
                  </label>
                </Grid>

                <Grid container>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label>कार्य का स्वरूप :</label>
                    <select
                      value={karyaSwaroop}
                      onChange={(e) => setKaryaSwaroop(e.target.value)}
                    >
                      <option value="0">--चुनिये--</option>
                      <option value="संगठित">संगठित</option>
                      <option value="असंगठित">असंगठित</option>
                      <option value="भवन निर्माण कर्मकार">
                        भवन निर्माण कर्मकार
                      </option>
                    </select>
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <br />
                    <label>नाम :</label>
                    <input
                      type="text"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <br />
                    नाम : आधार कार्ड के अनुसार डाले{" "}
                    <label>(अंग्रेजी में) </label>
                    <input
                      type="text"
                      value={nameasAADHAR}
                      onChange={(e) => setNameasAADHAR(e.target.value)}
                    />
                    <br />
                    <br />
                    <label>वेवाहिक इस्तिथि :</label>
                    <select onChange={(e) => setMarriage(e.target.value)}>
                      <option value="0">--चुनिये--</option>
                      <option value="अविवाहित">अविवाहित</option>
                      <option value="विवाहित">विवाहित</option>
                      <option value="तलाकशुदा">तलाकशुदा</option>
                      <option value="विधवा">विधवा</option>
                      <option value="विदुर">विदुर</option>
                    </select>
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <br />
                    <input
                      type="checkbox"
                      value="Yes"
                      onChange={(e) => setManrega(e.target.value)}
                    />
                    <label> मनरेगा कर्मकार</label>
                    <br />
                    <br />
                  </Grid>

                  <Grid item lg={3} sm={6} xs={12}>
                    <label>कार्य की प्रकृति 1 :</label>
                    <select
                      value={karyaPrakriti1}
                      style={{ width: "150px" }}
                      onChange={(e) => setKaryaPrakriti1(e.target.value)}
                    >
                      <option value="0">--चुनिये--</option>
                      <option value="1">
                        पत्थर काटने, पत्थर तोड़ने एवं पत्थर पीसने वाले
                      </option>
                      <option value="2">
                        राजमिस्त्री (मैसन) या ईंटों पर रद्दा करने वाले
                      </option>
                      <option value="3">
                        बढ़ई (कारपेंटर), लकडी की सामाग्रियों में पेंटिग एवं
                        वार्निशिंग करने वाले कर्मकार{" "}
                      </option>

                      <option value="4">पुताई करने वाले (पेंटर)</option>
                      <option value="5">फिटर या बार बेंडर</option>
                      <option value="6">
                        सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर, नाली निर्माण
                        एवं नल संबंधी कार्य करने वाले कर्मकार
                      </option>

                      <option value="7">
                        इलेक्ट्रीशियन, विधुत वायरिंग, वितरण एवं पैनल फिटिंग
                        संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="8">मैकेनिक</option>
                      <option value="9">कुऎं खोदने वाले</option>
                      <option value="10">वेल्डिंग करने वाले</option>
                      <option value="11">मुख्य मजदूर</option>
                      <option value="93">मजदूर (रेजा, कुली)</option>
                      <option value="12">
                        स्प्रेमेन या मिक्सरमेन (सड़क बनाने में लगे हुये){" "}
                      </option>

                      <option value="13">लकड़ी या पत्थर पैक करने वाले</option>
                      <option value="14">
                        कुएं में गाद (तलछट) हटाने वाले गोताखोर
                      </option>

                      <option value="15">हथौड़ा चलाने वाले</option>
                      <option value="16">छप्पर डालने वाले</option>
                      <option value="18">लोहार</option>
                      <option value="19">लकड़ी चीरने वाले</option>
                      <option value="20">कॉलकर</option>
                      <option value="21">
                        मिश्रण करने वाले (कांक्रीट मिक्सर मशीन चलाने वाले सहित)
                      </option>
                      <option value="22">पंप आपरेटर</option>
                      <option value="23">मिक्सर चलाने वाले</option>
                      <option value="24">रोलर चालक</option>
                      <option value="25">
                        बड़े यांत्रिक कार्य जैसे – भारी मशीनरी, पुल का कार्य आदि
                        में लगे खलासी
                      </option>
                      <option value="26">चौकीदार एवं सिक्योरिटी गार्ड </option>
                      <option value="27">मोजाइक पॉलिश करने वाले</option>
                      <option value="28">सुरंग कर्मकार</option>
                      <option value="29">
                        संगमरमर/ कड़प्पा पत्थर, मारबल, स्लैब कटिंग, पॉलिश एवं
                        टाईल्स संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="30">सड़क कर्मकार</option>
                      <option value="31">
                        चट्टान तोड़ने वाले या खनि कर्मकार
                      </option>
                      <option value="32">
                        सन्निर्माण कार्य से जुडे मिट्टी का कार्य करने वाले
                      </option>
                      <option value="33">
                        चूना बनाने की क्रिया में लगे कर्मकार
                      </option>
                      <option value="34">
                        बाढ़ कटाव रोधी कार्य में लगे कर्मकार
                      </option>
                      <option value="35">
                        बांध, पुल, सड़क या किसी भवन सन्निर्माण प्रक्रिया में
                        नियोजन में लगे कोइ अन्य प्रवर्ग के कर्मकार
                      </option>
                      <option value="36">
                        ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                      </option>
                      <option value="37">
                        पंडाल सन्निर्माण में लगे कर्मकार
                      </option>
                      <option value="89">बंसोड</option>
                      <option value="90">कुम्हार</option>
                      <option value="91">
                        सीमेंट पोल,सीमेंट की जाली, गमले,पाईप,टंकी आदि बनाने वाले
                        कर्मकार
                      </option>
                      <option value="92">रेंत या गिट्टी मजदूर</option>
                      <option value="184">
                        निर्माण में अग्निशमन संयंत्र लगाने वाले श्रमिक{" "}
                      </option>
                      <option value="185">
                        एयर कण्डीशनर, शीतलीकरण, वाष्पीकरण यंत्र तथा गीजर जैसे
                        उपकरणो की फिटिंग / मरम्मत करने वाले कर्मकार{" "}
                      </option>
                      <option value="186">
                        लोहे के ग्रिल, खिडकियां, दरवाजे बनाने व लगाने वाले
                        कर्मकार
                      </option>
                      <option value="187">
                        भवनों में कारपेंट का काम करने वाले कर्मकार{" "}
                      </option>
                      <option value="188">
                        लिफ्ट एवं एस्केलेटर लगाने तथा रखरखाव करने वाले कर्मकार{" "}
                      </option>
                      <option value="189">
                        सोलर पैनल निर्माण करने वाले, लगाने/मरम्मत करने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="190">
                        माड्यूलर किचन निर्माण करने वाले / लगाने वाले कर्मकार
                      </option>
                      <option value="191">
                        पी.ओ.पी. का कार्य करने वाले, फॉल्स सीलिंग, लाईटिंग जैसे
                        आंतरिक साज-सज्जा संबंधी कार्य करने वाले कर्मकार{" "}
                      </option>
                      <option value="192">सेंट्रिंग कर्मकार </option>
                      <option value="193">
                        सुरक्षा दरवाजे, सुरक्षा यंत्र लगाने वाले एवं बनाने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="194">
                        जल संरक्षण (Water Harvesting) से संबंधित कार्य करने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="195">
                        कॉच एवं ग्लास पैनल्स की कटिंग करने और लगाने संबंधी कार्य
                        करने वाले कर्मकार
                      </option>
                      <option value="196">
                        खेल मैंदान, स्वीमिंग पुल, गोल्फ कोर्स जैसे मनोरंजन स्थल
                        का निर्माण करने वाले कर्मकार
                      </option>
                      <option value="197">
                        बस स्टॉप, डिपो,स्टैण्ड, रोड सिगनल, संकेतक (साईन बोर्ड)
                        एवं इनसे संबंधित निर्माण करने तथा लगाने वाले कर्मकार{" "}
                      </option>
                      <option value="198">
                        फौव्वारा निर्माण करने एवं लगाने वाले कर्मकार{" "}
                      </option>
                      <option value="199">
                        सार्वजनिक उघान, फुटपाथ निर्माण, लैण्ड स्कैपिंग संबंधी
                        कार्य करने वाले कर्मकार
                      </option>
                      <option value="203">
                        निर्माण कार्य में लगने वाले सामग्री रेत, ईट, गिट्टी ,
                        मुरुम, आदि की आपूर्ति करने वाले वाहन के वाहन चालक
                      </option>
                      <option value="204">मलबा/कचरा हटाने वाले कर्मकार</option>
                      <option value="205">
                        रेट, मुरुम, गिट्टी, सीमेंट तथा ईट को स्थल से निकालने
                        वाले एवं लोडिंग एवं अनलोडिंग करने वाले कर्मकार
                      </option>
                    </select>
                    <span style={{ color: "red" }}>*</span>
                    <br /> <br />
                    <label>पिता / पति का नाम :</label>
                    <input
                      type="text"
                      value={fatherName}
                      onChange={(e) => setFatherName(e.target.value)}
                    />{" "}
                    <span style={{ color: "red" }}>*</span>
                    <select style={{ width: "70px" }}>
                      <option defaultValue="selected" value="पिता">
                        पिता
                      </option>
                      <option value="पति">पति</option>
                    </select>
                    <br />
                    <br />
                    <label> लिंग :</label>
                    <select
                      value={gender}
                      required
                      style={{ width: "150px" }}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="0">--चुनिये--</option>
                      <option value="1">महिला</option>
                      <option value="2">पुरुष</option>
                      <option value="3">तृतीय लिंग</option>
                    </select>
                    <span style={{ color: "red" }}>*</span>
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label> कार्य की प्रकृति 2 :</label>
                    <select
                      value={karyaPrakriti2}
                      style={{ width: "150px" }}
                      onChange={(e) => setKaryaPrakriti2(e.target.value)}
                    >
                      <option value="0">--चुनिये--</option>
                      <option value="1">
                        पत्थर काटने, पत्थर तोड़ने एवं पत्थर पीसने वाले
                      </option>
                      <option value="2">
                        राजमिस्त्री (मैसन) या ईंटों पर रद्दा करने वाले
                      </option>
                      <option value="3">
                        बढ़ई (कारपेंटर), लकडी की सामाग्रियों में पेंटिग एवं
                        वार्निशिंग करने वाले कर्मकार{" "}
                      </option>
                      <option value="4">पुताई करने वाले (पेंटर)</option>
                      <option value="5">फिटर या बार बेंडर</option>
                      <option value="6">
                        सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर, नाली निर्माण
                        एवं नल संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="7">
                        इलेक्ट्रीशियन, विधुत वायरिंग, वितरण एवं पैनल फिटिंग
                        संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="8">मैकेनिक</option>
                      <option value="9">कुऎं खोदने वाले</option>
                      <option value="10">वेल्डिंग करने वाले</option>
                      <option value="11">मुख्य मजदूर</option>
                      <option value="12">
                        स्प्रेमेन या मिक्सरमेन (सड़क बनाने में लगे हुये){" "}
                      </option>
                      <option value="13">लकड़ी या पत्थर पैक करने वाले</option>
                      <option value="14">
                        कुएं में गाद (तलछट) हटाने वाले गोताखोर
                      </option>
                      <option value="15">हथौड़ा चलाने वाले</option>
                      <option value="16">छप्पर डालने वाले</option>
                      <option value="17">मिस्त्री</option>
                      <option value="18">लोहार</option>
                      <option value="19">लकड़ी चीरने वाले</option>
                      <option value="20">कॉलकर</option>
                      <option value="21">
                        मिश्रण करने वाले (कांक्रीट मिक्सर मशीन चलाने वाले सहित)
                      </option>
                      <option value="22">पंप आपरेटर</option>
                      <option value="23">मिक्सर चलाने वाले</option>
                      <option value="24">रोलर चालक</option>
                      <option value="25">
                        बड़े यांत्रिक कार्य जैसे – भारी मशीनरी, पुल का कार्य आदि
                        में लगे खलासी
                      </option>
                      <option value="26">चौकीदार एवं सिक्योरिटी गार्ड </option>
                      <option value="27">मोजाइक पॉलिश करने वाले</option>
                      <option value="28">सुरंग कर्मकार</option>
                      <option value="29">
                        संगमरमर/ कड़प्पा पत्थर, मारबल, स्लैब कटिंग, पॉलिश एवं
                        टाईल्स संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="30">सड़क कर्मकार</option>
                      <option value="31">
                        चट्टान तोड़ने वाले या खनि कर्मकार
                      </option>
                      <option value="32">
                        सन्निर्माण कार्य से जुडे मिट्टी का कार्य करने वाले
                      </option>
                      <option value="33">
                        चूना बनाने की क्रिया में लगे कर्मकार
                      </option>
                      <option value="34">
                        बाढ़ कटाव रोधी कार्य में लगे कर्मकार
                      </option>
                      <option value="35">
                        बांध, पुल, सड़क या किसी भवन सन्निर्माण प्रक्रिया में
                        नियोजन में लगे कोइ अन्य प्रवर्ग के कर्मकार
                      </option>
                      <option value="36">
                        ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                      </option>
                      <option value="37">
                        पंडाल सन्निर्माण में लगे कर्मकार
                      </option>
                      <option value="38">धोबी</option>
                      <option value="39">दर्जी</option>
                      <option value="40">माली</option>
                      <option value="41">मोची</option>
                      <option value="42">नाई</option>
                      <option value="43">बुनकर</option>
                      <option value="44">रिक्शा चालक</option>
                      <option value="45">घरेलु कर्मकार</option>
                      <option value="46">कचरा बीनने वाले</option>
                      <option value="47">हाथ ठेला चलाने वाले</option>
                      <option value="48">फुटकर सब्जी, फल-फूल विक्रेता</option>
                      <option value="49">चाय, चाट, ठेला लगाने वाले</option>
                      <option value="50">फुटपाथ व्यापारी</option>
                      <option value="51">हमाल,कुली,रेजा</option>
                      <option value="52">कुली</option>
                      <option value="53">रेजा</option>
                      <option value="54">जनरेटर/ लाईट उठाने वाले</option>
                      <option value="55">केटरिंग मे कार्य करने वाले</option>
                      <option value="56">फेरी लगाने वाले</option>
                      <option value="57">
                        मोटर सायकल/ सायकल मरम्मत करने वाले
                      </option>
                      <option value="58">गैरेज मजदूर </option>
                      <option value="59">परिवहन मे लगे मजदूर</option>
                      <option value="60">आटो चालक</option>
                      <option value="61">सफाई कामगार</option>
                      <option value="62">ढोल/बाजा बजाने वाले</option>
                      <option value="63">टेन्ट हाउस मे काम करने वाले</option>
                      <option value="64">वनोपज मे लगे मजदूर</option>
                      <option value="65">मछूआरा</option>
                      <option value="66">दाई का काम करने वाली</option>
                      <option value="67">तांगा/बैल गाडी चलाने वाले</option>
                      <option value="68">तेल पेरने वाले</option>
                      <option value="69">अगरबत्ती बनाने वाले</option>
                      <option value="70">गाडीवान</option>
                      <option value="71">घरेलू उधोग मे लगे मजदूर</option>
                      <option value="72">भडभूजे(मुर्रा चना फोडने वाले)</option>
                      <option value="73">
                        पशुपालन, मत्स्य पालन, मुर्गी, बतख पालन मे लगे मजदूर एवं
                        करने वाले
                      </option>
                      <option value="74">दुकानो मे काम करने वाले मजदूर</option>
                      <option value="75">खेतीहर मजदूर</option>
                      <option value="76">राउत, चरवाहा, दूध दूहने वाले</option>
                      <option value="77">मितानीन</option>
                      <option value="78">नाव चलाने वाले (नाविक)</option>
                      <option value="79">कंसारी</option>
                      <option value="80">नट- नटनी </option>
                      <option value="81">देवार </option>
                      <option value="82">शिकारी </option>
                      <option value="83">अन्य घुमंतु जाति </option>
                      <option value="84">खैरवार </option>
                      <option value="85">रसोईया </option>
                      <option value="86">
                        हड्डी बीनने वाले (हड्डबिनन्ने )
                      </option>
                      <option value="87">
                        काष्ठागार में काम करने वाले हमाल{" "}
                      </option>
                      <option value="88">
                        समाचार-पत्र बांटने वाले (हॉकर )
                      </option>
                      <option value="89">बंसोड</option>
                      <option value="90">कुम्हार</option>
                      <option value="91">
                        सीमेंट पोल,सीमेंट की जाली, गमले,पाईप,टंकी आदि बनाने वाले
                        कर्मकार
                      </option>
                      <option value="92">रेंत या गिट्टी मजदूर</option>
                      <option value="93">मजदूर (रेजा, कुली)</option>
                      <option value="94">पावर प्लांट में नियोजन </option>
                      <option value="95">स्टील प्लांट में नियोजन</option>
                      <option value="96">स्पंज आयरन में नियोजन</option>
                      <option value="97">रोलिंग मिल में नियोजन</option>
                      <option value="98">
                        कास्टिंग उधोग इंडस्ट्रीज में नियोजन
                      </option>
                      <option value="99">सीमेंट फैक्ट्री</option>
                      <option value="100">सुरक्षागार्ड में नियोजन</option>
                      <option value="101">
                        भवन एवं अन्य सन्निर्माण कार्य में नियोजन
                      </option>
                      <option value="102">स्टोन क्रेशिंग में नियोजन</option>
                      <option value="103">
                        पत्थर पीसने एवं तोड़ने वाले नियोजन
                      </option>
                      <option value="104">ईंट भट्ठा में नियोजन</option>
                      <option value="105">चूना भट्ठा में नियोजन</option>
                      <option value="106">
                        टाईल्स जिसमें मेंगलोर टाईल्स,अलाहाबाद टाईल्स तथा अन्य
                        स्थानीय नाम से प्रचलित टाईल्स सम्मिलित हैं, परंतु सीमेंट
                        से निर्मीत टाईल्स सम्मिलित नही हैं के निर्माण में नियोजन
                      </option>
                      <option value="107">
                        पाटरिज जिसमें रिफेक्ट्रीज सामान, फायरब्रिक्स, सेनेटरी
                        वेयर्स, इंसूनेटर्स, टाईल्स(सीमेंट से निर्मित टाईल्स को
                        छोड़कर) स्टोन वेयर्स पाईप्स, फरनेस, लाईनिंग, ब्रिक्स तथा
                        अन्य रिसेमिक्स सामान सम्मिलित हैं, में नियोजन
                      </option>
                      <option value="108">
                        सीमेंट पोल अथवा सीमेंट से निर्मीत उत्पादन में नियोजन
                      </option>
                      <option value="109">
                        मार्गो के निर्माण तथा अनुरक्षण या भवन एवं निर्माण कार्यो
                        में नियोजन
                      </option>
                      <option value="110">ईंजीनियरिंग उधोग में नियोजन</option>
                      <option value="111">
                        सिंचाई कार्यों के निर्माण तथा संधारण में नियोजन
                      </option>
                      <option value="112">
                        वन उपज एवं वन लगाने में नियोजन तथा नर्सरी
                      </option>
                      <option value="113">
                        किसी स्थानीय प्राधिकरण में नियोजन
                      </option>
                      <option value="114">
                        किसी दुकान, वाणिज्यिक संस्थान आवासीय होटल, रेस्टोरेंट
                        तथा नाट्यगृह में नियोजन
                      </option>
                      <option value="115">
                        शैक्षणिक संस्थान एवं निजी प्रशिक्षण केन्द्र में नियोजन
                      </option>
                      <option value="116">
                        हॉस्पिटल, नर्सिंग होम, पैथालॉजी में नियोजन
                      </option>
                      <option value="117">
                        विक्रय सवंर्धन कर्मकार (सेल्स प्रमोशन कर्मकार )
                      </option>
                      <option value="118">किसी मुद्र्णालय में नियोजन </option>
                      <option value="119">
                        पेट्रोल पम्प/ डीजल पम्प/ गैस वितरण केंद्र एवं गोडाउन में
                        नियोजन
                      </option>
                      <option value="120">
                        साल्वेट प्लांट तथा रिफाइनरी में नियोजन{" "}
                      </option>
                      <option value="121">किसी तेल मिल में नियोजन</option>
                      <option value="122">
                        केमिकल तथा फार्मास्युटिकल्स में नियोजन
                      </option>
                      <option value="123">
                        हमाल, तोलैया, कुली रेजा एवं मण्डी श्रमिक{" "}
                      </option>
                      <option value="124">
                        किसी चांवल मिल आटा मिल या दाल मिल में नियोजन{" "}
                      </option>
                      <option value="125">
                        किसी मुर्रा, पोहा निर्माणी में नियोजन
                      </option>
                      <option value="126">
                        खाद्य पदार्थ जिसमें केक्स, बिस्किटस, कंफेक्शनरी,
                        आईसक्रीम, आईसकेण्डी सम्मिलित हैं, एवं पेयक निर्माण में
                        नियोजन{" "}
                      </option>
                      <option value="127">
                        खांडसारी उधोग/ चीनी मिल में नियोजन{" "}
                      </option>
                      <option value="128">
                        किसी आरा मिल में नियोजन / वुड वर्क{" "}
                      </option>
                      <option value="129">प्लास्टिक उधोग में नियोजन </option>
                      <option value="130">फ्युल कोक में नियोजन</option>
                      <option value="131">
                        पावरलूम जिसमें सायजिग एवं प्रोसेसिंग भी सम्मिलित हैं,
                        में नियोजन{" "}
                      </option>
                      <option value="132">हाथ करघा उधोग में नियोजन</option>
                      <option value="133">कंबल निर्माण कार्य में नियोजन</option>
                      <option value="134">बोन मिल में नियोजन</option>
                      <option value="135">लोक मोटर परिवहन में नियोजन</option>
                      <option value="136">पोल्ट्री फॉम में नियोजन</option>
                      <option value="137">
                        किसी विनिर्माण प्रक्रिया जो कि कारखाना अधिनियम, 1948 की
                        धारा-2 “क” परिभाषित की गई, चलाई जाती हैं, जो अनुसूची में
                        दी गई किसी अन्य प्रविष्टि के अंतर्गत नही आती हैं, में
                        नियोजन
                      </option>
                      <option value="138">
                        छ्त्तीसगढ के विभिन्न शासकीय विभागो में कार्यरत् दैनिक
                        वेतनभोगी श्रमिक{" "}
                      </option>
                      <option value="139">
                        अगरबत्ती उधोग में नियोजित श्रमिक
                      </option>
                      <option value="140">बिडी उधोग में नियोजित श्रमिक</option>
                      <option value="141">
                        पत्थर काटने, तोड़ने व पीसने वाले
                      </option>
                      <option value="142">
                        राजमिस्त्री (मेसन) या ईंटों पर रद्दा करने वाले
                      </option>
                      <option value="143">बढ़ई (कार्पेन्टर) </option>
                      <option value="144">पोताई करने वाले (पेंटर)</option>
                      <option value="145">फिटर या बार बैडर </option>
                      <option value="146">
                        सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर{" "}
                      </option>
                      <option value="147">इलेक्ट्रीशियन </option>
                      <option value="148">मैकेनिक </option>
                      <option value="149">कुऎं खोदने वाले</option>
                      <option value="150">वेल्डिंग करने वाले</option>
                      <option value="151">मुख्य मजदूर </option>
                      <option value="152">
                        स्प्रेमेन या मिक्सर मेन (सड़क बनाने में लगे)
                      </option>
                      <option value="153">लकड़ी या पत्थर पैक करने वाले</option>
                      <option value="154">
                        कुएं में गाद (तलछट) हटाने वाले गोताखोर{" "}
                      </option>
                      <option value="155">हथौड़ा चलाने वाले </option>
                      <option value="156">छप्पर डालने वाले</option>
                      <option value="157">मिस्त्री</option>
                      <option value="158">लोहार </option>
                      <option value="159">लकड़ी चीरने वाले</option>
                      <option value="160">कॉलकर </option>
                      <option value="161">
                        मिश्रण करने वाले (कांक्रीट मिक्सर चलाने वाले सहित)
                      </option>
                      <option value="162">पंप आपरेटर </option>
                      <option value="163">मिक्सर चलाने वाले</option>
                      <option value="164">रोलर चालक </option>
                      <option value="165">
                        बड़े यांत्रिक कार्य जैसे – मशीनरी, पुल का कार्य आदि में
                        लगे खलासी
                      </option>
                      <option value="166">चौकीदार </option>
                      <option value="167">मोजाइक पालिश करने वाले </option>
                      <option value="168">सुरंग कर्मकार </option>
                      <option value="169">संगमरमर/ कड़प्पा पत्थर कर्मकार</option>
                      <option value="170">सड़क कर्मकार</option>
                      <option value="171">
                        चट्टान तोड़ने वाले या खनि कर्मकार
                      </option>
                      <option value="172">
                        सन्निर्माण कार्य में जुड़े मिट्टी का कार्य करने वाले
                      </option>
                      <option value="173">
                        चूना बनाने की क्रिया में लगा कर्मकार
                      </option>
                      <option value="174">
                        बाढ़ नियोजन में लगे कोइ अन्य प्रवर्ग के कर्मकार{" "}
                      </option>
                      <option value="175">
                        बांध, पुल, सड़क या किसी भवन सन्निर्माण संक्रिया में
                        नियोजन में लगे कोइ अन्य प्रवर्ग के कर्मकार
                      </option>
                      <option value="176">
                        ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                      </option>
                      <option value="177">
                        पंडाल सन्निर्माण में लगे कर्मकार
                      </option>
                      <option value="178">बंसोड </option>
                      <option value="179">कुम्हार </option>
                      <option value="180">सीमेंट पोल बनाने वाले मजदूर </option>
                      <option value="181">रेंत या गिट्टी मजदूर </option>
                      <option value="182">मजदूर, रेजा, कुली </option>
                      <option value="183">कोटवार </option>
                      <option value="184">
                        निर्माण में अग्निशमन संयंत्र लगाने वाले श्रमिक{" "}
                      </option>
                      <option value="185">
                        एयर कण्डीशनर, शीतलीकरण, वाष्पीकरण यंत्र तथा गीजर जैसे
                        उपकरणो की फिटिंग / मरम्मत करने वाले कर्मकार{" "}
                      </option>
                      <option value="186">
                        लोहे के ग्रिल, खिडकियां, दरवाजे बनाने व लगाने वाले
                        कर्मकार
                      </option>
                      <option value="187">
                        भवनों में कारपेंट का काम करने वाले कर्मकार{" "}
                      </option>
                      <option value="188">
                        लिफ्ट एवं एस्केलेटर लगाने तथा रखरखाव करने वाले कर्मकार{" "}
                      </option>
                      <option value="189">
                        सोलर पैनल निर्माण करने वाले, लगाने/मरम्मत करने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="190">
                        माड्यूलर किचन निर्माण करने वाले / लगाने वाले कर्मकार
                      </option>
                      <option value="191">
                        पी.ओ.पी. का कार्य करने वाले, फॉल्स सीलिंग, लाईटिंग जैसे
                        आंतरिक साज-सज्जा संबंधी कार्य करने वाले कर्मकार{" "}
                      </option>
                      <option value="192">सेंट्रिंग कर्मकार </option>
                      <option value="193">
                        सुरक्षा दरवाजे, सुरक्षा यंत्र लगाने वाले एवं बनाने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="194">
                        जल संरक्षण (Water Harvesting) से संबंधित कार्य करने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="195">
                        कॉच एवं ग्लास पैनल्स की कटिंग करने और लगाने संबंधी कार्य
                        करने वाले कर्मकार
                      </option>

                      <option value="196">
                        खेल मैंदान, स्वीमिंग पुल, गोल्फ कोर्स जैसे मनोरंजन स्थल
                        का निर्माण करने वाले कर्मकार
                      </option>

                      <option value="197">
                        बस स्टॉप, डिपो,स्टैण्ड, रोड सिगनल, संकेतक (साईन बोर्ड)
                        एवं इनसे संबंधित निर्माण करने तथा लगाने वाले कर्मकार{" "}
                      </option>
                      <option value="198">
                        फौव्वारा निर्माण करने एवं लगाने वाले कर्मकार{" "}
                      </option>
                      <option value="199">
                        सार्वजनिक उघान, फुटपाथ निर्माण, लैण्ड स्कैपिंग संबंधी
                        कार्य करने वाले कर्मकार
                      </option>
                      <option value="200">
                        ठेका मजदूर (छ.ग. एवं अन्य सन्निर्माण कर्मकार कल्याण मंडल
                        में लगे ठेका मजदूर एवं ESI एवं भविष्य निधी योजना में
                        शामिल ठेका मजदूरो को छोडकर)
                      </option>
                      <option value="201">
                        सिनेमा व्यवसाय में कार्यरत लाईट मैन, स्पॉट ब्वाय, कैमेरा
                        मैन, मेकअप मैन
                      </option>
                      <option value="202">
                        सोना चॉदी की दुकानो मे काम करने वाले कारीगर
                      </option>
                      <option value="203">
                        निर्माण कार्य में लगने वाले सामग्री रेत, ईट, गिट्टी ,
                        मुरुम, आदि की आपूर्ति करने वाले वाहन के वाहन चालक
                      </option>
                      <option value="204">मलबा/कचरा हटाने वाले कर्मकार</option>
                      <option value="205">
                        रेट, मुरुम, गिट्टी, सीमेंट तथा ईट को स्थल से निकालने
                        वाले एवं लोडिंग एवं अनलोडिंग करने वाले कर्मकार
                      </option>
                      <option value="206">आंगनबाड़ी कार्यकर्ता</option>
                      <option value="207">आंगनबाड़ी सहायिका</option>
                      <option value="208">सेक्स वर्कर</option>
                    </select>
                    <span style={{ color: "red" }}>*</span>

                    <br />
                    <br />

                    <label>माता का नाम</label>
                    <input
                      value={motherName}
                      type="text"
                      onChange={(e) => setMotherName(e.target.value)}
                    />
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <span style={{ color: "red" }}>{nameerror}</span>

                    <br />
                    <br />
                    <br />
                    <label> आयु :</label>
                    <input
                      value={age}
                      type="number"
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <span style={{ color: "red" }}>*</span>
                    <br />

                    <span style={{ color: "red" }}>{ageerror}</span>
                  </Grid>

                  <Grid item lg={3} sm={6} xs={12}>
                    <label>कार्य की प्रकृति 3 :</label>
                    <select
                      value={karyaPrakriti3}
                      style={{ width: "150px" }}
                      onChange={(e) => setKaryaPrakriti3(e.target.value)}
                    >
                      <option value="0">--चुनिये--</option>
                      <option value="1">
                        पत्थर काटने, पत्थर तोड़ने एवं पत्थर पीसने वाले
                      </option>
                      <option value="2">
                        राजमिस्त्री (मैसन) या ईंटों पर रद्दा करने वाले
                      </option>
                      <option value="3">
                        बढ़ई (कारपेंटर), लकडी की सामाग्रियों में पेंटिग एवं
                        वार्निशिंग करने वाले कर्मकार{" "}
                      </option>
                      <option value="4">पुताई करने वाले (पेंटर)</option>
                      <option value="5">फिटर या बार बेंडर</option>
                      <option value="6">
                        सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर, नाली निर्माण
                        एवं नल संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="7">
                        इलेक्ट्रीशियन, विधुत वायरिंग, वितरण एवं पैनल फिटिंग
                        संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="8">मैकेनिक</option>
                      <option value="9">कुऎं खोदने वाले</option>
                      <option value="10">वेल्डिंग करने वाले</option>
                      <option value="11">मुख्य मजदूर</option>
                      <option value="12">
                        स्प्रेमेन या मिक्सरमेन (सड़क बनाने में लगे हुये){" "}
                      </option>
                      <option value="13">लकड़ी या पत्थर पैक करने वाले</option>
                      <option value="14">
                        कुएं में गाद (तलछट) हटाने वाले गोताखोर
                      </option>
                      <option value="15">हथौड़ा चलाने वाले</option>
                      <option value="16">छप्पर डालने वाले</option>
                      <option value="17">मिस्त्री</option>
                      <option value="18">लोहार</option>
                      <option value="19">लकड़ी चीरने वाले</option>
                      <option value="20">कॉलकर</option>
                      <option value="21">
                        मिश्रण करने वाले (कांक्रीट मिक्सर मशीन चलाने वाले सहित)
                      </option>
                      <option value="22">पंप आपरेटर</option>
                      <option value="23">मिक्सर चलाने वाले</option>
                      <option value="24">रोलर चालक</option>
                      <option value="25">
                        बड़े यांत्रिक कार्य जैसे – भारी मशीनरी, पुल का कार्य आदि
                        में लगे खलासी
                      </option>
                      <option value="26">चौकीदार एवं सिक्योरिटी गार्ड </option>
                      <option value="27">मोजाइक पॉलिश करने वाले</option>
                      <option value="28">सुरंग कर्मकार</option>
                      <option value="29">
                        संगमरमर/ कड़प्पा पत्थर, मारबल, स्लैब कटिंग, पॉलिश एवं
                        टाईल्स संबंधी कार्य करने वाले कर्मकार
                      </option>
                      <option value="30">सड़क कर्मकार</option>
                      <option value="31">
                        चट्टान तोड़ने वाले या खनि कर्मकार
                      </option>
                      <option value="32">
                        सन्निर्माण कार्य से जुडे मिट्टी का कार्य करने वाले
                      </option>
                      <option value="33">
                        चूना बनाने की क्रिया में लगे कर्मकार
                      </option>
                      <option value="34">
                        बाढ़ कटाव रोधी कार्य में लगे कर्मकार
                      </option>
                      <option value="35">
                        बांध, पुल, सड़क या किसी भवन सन्निर्माण प्रक्रिया में
                        नियोजन में लगे कोइ अन्य प्रवर्ग के कर्मकार
                      </option>
                      <option value="36">
                        ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                      </option>
                      <option value="37">
                        पंडाल सन्निर्माण में लगे कर्मकार
                      </option>
                      <option value="38">धोबी</option>
                      <option value="39">दर्जी</option>
                      <option value="40">माली</option>
                      <option value="41">मोची</option>
                      <option value="42">नाई</option>
                      <option value="43">बुनकर</option>
                      <option value="44">रिक्शा चालक</option>
                      <option value="45">घरेलु कर्मकार</option>
                      <option value="46">कचरा बीनने वाले</option>
                      <option value="47">हाथ ठेला चलाने वाले</option>
                      <option value="48">फुटकर सब्जी, फल-फूल विक्रेता</option>
                      <option value="49">चाय, चाट, ठेला लगाने वाले</option>
                      <option value="50">फुटपाथ व्यापारी</option>
                      <option value="51">हमाल,कुली,रेजा</option>
                      <option value="52">कुली</option>
                      <option value="53">रेजा</option>
                      <option value="54">जनरेटर/ लाईट उठाने वाले</option>
                      <option value="55">केटरिंग मे कार्य करने वाले</option>
                      <option value="56">फेरी लगाने वाले</option>
                      <option value="57">
                        मोटर सायकल/ सायकल मरम्मत करने वाले
                      </option>
                      <option value="58">गैरेज मजदूर </option>
                      <option value="59">परिवहन मे लगे मजदूर</option>
                      <option value="60">आटो चालक</option>
                      <option value="61">सफाई कामगार</option>
                      <option value="62">ढोल/बाजा बजाने वाले</option>
                      <option value="63">टेन्ट हाउस मे काम करने वाले</option>
                      <option value="64">वनोपज मे लगे मजदूर</option>
                      <option value="65">मछूआरा</option>
                      <option value="66">दाई का काम करने वाली</option>
                      <option value="67">तांगा/बैल गाडी चलाने वाले</option>
                      <option value="68">तेल पेरने वाले</option>
                      <option value="69">अगरबत्ती बनाने वाले</option>
                      <option value="70">गाडीवान</option>
                      <option value="71">घरेलू उधोग मे लगे मजदूर</option>
                      <option value="72">भडभूजे(मुर्रा चना फोडने वाले)</option>
                      <option value="73">
                        पशुपालन, मत्स्य पालन, मुर्गी, बतख पालन मे लगे मजदूर एवं
                        करने वाले
                      </option>
                      <option value="74">दुकानो मे काम करने वाले मजदूर</option>
                      <option value="75">खेतीहर मजदूर</option>
                      <option value="76">राउत, चरवाहा, दूध दूहने वाले</option>
                      <option value="77">मितानीन</option>
                      <option value="78">नाव चलाने वाले (नाविक)</option>
                      <option value="79">कंसारी</option>
                      <option value="80">नट- नटनी </option>
                      <option value="81">देवार </option>
                      <option value="82">शिकारी </option>
                      <option value="83">अन्य घुमंतु जाति </option>
                      <option value="84">खैरवार </option>
                      <option value="85">रसोईया </option>
                      <option value="86">
                        हड्डी बीनने वाले (हड्डबिनन्ने )
                      </option>
                      <option value="87">
                        काष्ठागार में काम करने वाले हमाल{" "}
                      </option>
                      <option value="88">
                        समाचार-पत्र बांटने वाले (हॉकर )
                      </option>
                      <option value="89">बंसोड</option>
                      <option value="90">कुम्हार</option>
                      <option value="91">
                        सीमेंट पोल,सीमेंट की जाली, गमले,पाईप,टंकी आदि बनाने वाले
                        कर्मकार
                      </option>
                      <option value="92">रेंत या गिट्टी मजदूर</option>
                      <option value="93">मजदूर (रेजा, कुली)</option>
                      <option value="94">पावर प्लांट में नियोजन </option>
                      <option value="95">स्टील प्लांट में नियोजन</option>
                      <option value="96">स्पंज आयरन में नियोजन</option>
                      <option value="97">रोलिंग मिल में नियोजन</option>
                      <option value="98">
                        कास्टिंग उधोग इंडस्ट्रीज में नियोजन
                      </option>
                      <option value="99">सीमेंट फैक्ट्री</option>
                      <option value="100">सुरक्षागार्ड में नियोजन</option>
                      <option value="101">
                        भवन एवं अन्य सन्निर्माण कार्य में नियोजन
                      </option>
                      <option value="102">स्टोन क्रेशिंग में नियोजन</option>
                      <option value="103">
                        पत्थर पीसने एवं तोड़ने वाले नियोजन
                      </option>
                      <option value="104">ईंट भट्ठा में नियोजन</option>
                      <option value="105">चूना भट्ठा में नियोजन</option>
                      <option value="106">
                        टाईल्स जिसमें मेंगलोर टाईल्स,अलाहाबाद टाईल्स तथा अन्य
                        स्थानीय नाम से प्रचलित टाईल्स सम्मिलित हैं, परंतु सीमेंट
                        से निर्मीत टाईल्स सम्मिलित नही हैं के निर्माण में नियोजन
                      </option>
                      <option value="107">
                        पाटरिज जिसमें रिफेक्ट्रीज सामान, फायरब्रिक्स, सेनेटरी
                        वेयर्स, इंसूनेटर्स, टाईल्स(सीमेंट से निर्मित टाईल्स को
                        छोड़कर) स्टोन वेयर्स पाईप्स, फरनेस, लाईनिंग, ब्रिक्स तथा
                        अन्य रिसेमिक्स सामान सम्मिलित हैं, में नियोजन
                      </option>
                      <option value="108">
                        सीमेंट पोल अथवा सीमेंट से निर्मीत उत्पादन में नियोजन
                      </option>
                      <option value="109">
                        मार्गो के निर्माण तथा अनुरक्षण या भवन एवं निर्माण कार्यो
                        में नियोजन
                      </option>
                      <option value="110">ईंजीनियरिंग उधोग में नियोजन</option>
                      <option value="111">
                        सिंचाई कार्यों के निर्माण तथा संधारण में नियोजन
                      </option>
                      <option value="112">
                        वन उपज एवं वन लगाने में नियोजन तथा नर्सरी
                      </option>
                      <option value="113">
                        किसी स्थानीय प्राधिकरण में नियोजन{" "}
                      </option>
                      <option value="114">
                        किसी दुकान, वाणिज्यिक संस्थान आवासीय होटल, रेस्टोरेंट
                        तथा नाट्यगृह में नियोजन
                      </option>
                      <option value="115">
                        शैक्षणिक संस्थान एवं निजी प्रशिक्षण केन्द्र में नियोजन{" "}
                      </option>
                      <option value="116">
                        हॉस्पिटल, नर्सिंग होम, पैथालॉजी में नियोजन{" "}
                      </option>
                      <option value="117">
                        विक्रय सवंर्धन कर्मकार (सेल्स प्रमोशन कर्मकार )
                      </option>
                      <option value="118">किसी मुद्र्णालय में नियोजन </option>
                      <option value="119">
                        पेट्रोल पम्प/ डीजल पम्प/ गैस वितरण केंद्र एवं गोडाउन में
                        नियोजन{" "}
                      </option>
                      <option value="120">
                        साल्वेट प्लांट तथा रिफाइनरी में नियोजन{" "}
                      </option>
                      <option value="121">किसी तेल मिल में नियोजन</option>
                      <option value="122">
                        केमिकल तथा फार्मास्युटिकल्स में नियोजन
                      </option>
                      <option value="123">
                        हमाल, तोलैया, कुली रेजा एवं मण्डी श्रमिक{" "}
                      </option>
                      <option value="124">
                        किसी चांवल मिल आटा मिल या दाल मिल में नियोजन{" "}
                      </option>
                      <option value="125">
                        किसी मुर्रा, पोहा निर्माणी में नियोजन
                      </option>
                      <option value="126">
                        खाद्य पदार्थ जिसमें केक्स, बिस्किटस, कंफेक्शनरी,
                        आईसक्रीम, आईसकेण्डी सम्मिलित हैं, एवं पेयक निर्माण में
                        नियोजन{" "}
                      </option>
                      <option value="127">
                        खांडसारी उधोग/ चीनी मिल में नियोजन{" "}
                      </option>
                      <option value="128">
                        किसी आरा मिल में नियोजन / वुड वर्क{" "}
                      </option>
                      <option value="129">प्लास्टिक उधोग में नियोजन </option>
                      <option value="130">फ्युल कोक में नियोजन</option>
                      <option value="131">
                        पावरलूम जिसमें सायजिग एवं प्रोसेसिंग भी सम्मिलित हैं,
                        में नियोजन{" "}
                      </option>
                      <option value="132">हाथ करघा उधोग में नियोजन</option>
                      <option value="133">कंबल निर्माण कार्य में नियोजन</option>
                      <option value="134">बोन मिल में नियोजन</option>
                      <option value="135">लोक मोटर परिवहन में नियोजन</option>
                      <option value="136">पोल्ट्री फॉम में नियोजन</option>
                      <option value="137">
                        किसी विनिर्माण प्रक्रिया जो कि कारखाना अधिनियम, 1948 की
                        धारा-2 “क” परिभाषित की गई, चलाई जाती हैं, जो अनुसूची में
                        दी गई किसी अन्य प्रविष्टि के अंतर्गत नही आती हैं, में
                        नियोजन
                      </option>
                      <option value="138">
                        छ्त्तीसगढ के विभिन्न शासकीय विभागो में कार्यरत् दैनिक
                        वेतनभोगी श्रमिक{" "}
                      </option>
                      <option value="139">
                        अगरबत्ती उधोग में नियोजित श्रमिक
                      </option>
                      <option value="140">बिडी उधोग में नियोजित श्रमिक</option>
                      <option value="141">
                        पत्थर काटने, तोड़ने व पीसने वाले
                      </option>
                      <option value="142">
                        राजमिस्त्री (मेसन) या ईंटों पर रद्दा करने वाले
                      </option>
                      <option value="143">बढ़ई (कार्पेन्टर) </option>
                      <option value="144">पोताई करने वाले (पेंटर)</option>
                      <option value="145">फिटर या बार बैडर </option>
                      <option value="146">
                        सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर{" "}
                      </option>
                      <option value="147">इलेक्ट्रीशियन </option>
                      <option value="148">मैकेनिक </option>
                      <option value="149">कुऎं खोदने वाले</option>
                      <option value="150">वेल्डिंग करने वाले</option>
                      <option value="151">मुख्य मजदूर </option>
                      <option value="152">
                        स्प्रेमेन या मिक्सर मेन (सड़क बनाने में लगे)
                      </option>
                      <option value="153">लकड़ी या पत्थर पैक करने वाले</option>
                      <option value="154">
                        कुएं में गाद (तलछट) हटाने वाले गोताखोर{" "}
                      </option>
                      <option value="155">हथौड़ा चलाने वाले </option>
                      <option value="156">छप्पर डालने वाले</option>
                      <option value="157">मिस्त्री</option>
                      <option value="158">लोहार </option>
                      <option value="159">लकड़ी चीरने वाले</option>
                      <option value="160">कॉलकर </option>
                      <option value="161">
                        मिश्रण करने वाले (कांक्रीट मिक्सर चलाने वाले सहित)
                      </option>
                      <option value="162">पंप आपरेटर </option>
                      <option value="163">मिक्सर चलाने वाले</option>
                      <option value="164">रोलर चालक </option>
                      <option value="165">
                        बड़े यांत्रिक कार्य जैसे – मशीनरी, पुल का कार्य आदि में
                        लगे खलासी
                      </option>
                      <option value="166">चौकीदार </option>
                      <option value="167">मोजाइक पालिश करने वाले </option>
                      <option value="168">सुरंग कर्मकार </option>
                      <option value="169">संगमरमर/ कड़प्पा पत्थर कर्मकार</option>
                      <option value="170">सड़क कर्मकार</option>
                      <option value="171">
                        चट्टान तोड़ने वाले या खनि कर्मकार
                      </option>
                      <option value="172">
                        सन्निर्माण कार्य में जुड़े मिट्टी का कार्य करने वाले
                      </option>
                      <option value="173">
                        चूना बनाने की क्रिया में लगा कर्मकार
                      </option>
                      <option value="174">
                        बाढ़ नियोजन में लगे कोइ अन्य प्रवर्ग के कर्मकार{" "}
                      </option>
                      <option value="175">
                        बांध, पुल, सड़क या किसी भवन सन्निर्माण संक्रिया में
                        नियोजन में लगे कोइ अन्य प्रवर्ग के कर्मकार
                      </option>
                      <option value="176">
                        ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                      </option>
                      <option value="177">
                        पंडाल सन्निर्माण में लगे कर्मकार
                      </option>
                      <option value="178">बंसोड </option>
                      <option value="179">कुम्हार </option>
                      <option value="180">सीमेंट पोल बनाने वाले मजदूर </option>
                      <option value="181">रेंत या गिट्टी मजदूर </option>
                      <option value="182">मजदूर, रेजा, कुली </option>
                      <option value="183">कोटवार </option>
                      <option value="184">
                        निर्माण में अग्निशमन संयंत्र लगाने वाले श्रमिक{" "}
                      </option>
                      <option value="185">
                        एयर कण्डीशनर, शीतलीकरण, वाष्पीकरण यंत्र तथा गीजर जैसे
                        उपकरणो की फिटिंग / मरम्मत करने वाले कर्मकार{" "}
                      </option>
                      <option value="186">
                        लोहे के ग्रिल, खिडकियां, दरवाजे बनाने व लगाने वाले
                        कर्मकार
                      </option>
                      <option value="187">
                        भवनों में कारपेंट का काम करने वाले कर्मकार{" "}
                      </option>
                      <option value="188">
                        लिफ्ट एवं एस्केलेटर लगाने तथा रखरखाव करने वाले कर्मकार{" "}
                      </option>
                      <option value="189">
                        सोलर पैनल निर्माण करने वाले, लगाने/मरम्मत करने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="190">
                        माड्यूलर किचन निर्माण करने वाले / लगाने वाले कर्मकार
                      </option>
                      <option value="191">
                        पी.ओ.पी. का कार्य करने वाले, फॉल्स सीलिंग, लाईटिंग जैसे
                        आंतरिक साज-सज्जा संबंधी कार्य करने वाले कर्मकार{" "}
                      </option>
                      <option value="192">सेंट्रिंग कर्मकार </option>
                      <option value="193">
                        सुरक्षा दरवाजे, सुरक्षा यंत्र लगाने वाले एवं बनाने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="194">
                        जल संरक्षण (Water Harvesting) से संबंधित कार्य करने वाले
                        कर्मकार{" "}
                      </option>
                      <option value="195">
                        कॉच एवं ग्लास पैनल्स की कटिंग करने और लगाने संबंधी कार्य
                        करने वाले कर्मकार
                      </option>
                      <option value="196">
                        खेल मैंदान, स्वीमिंग पुल, गोल्फ कोर्स जैसे मनोरंजन स्थल
                        का निर्माण करने वाले कर्मकार
                      </option>
                      <option value="197">
                        बस स्टॉप, डिपो,स्टैण्ड, रोड सिगनल, संकेतक (साईन बोर्ड)
                        एवं इनसे संबंधित निर्माण करने तथा लगाने वाले कर्मकार{" "}
                      </option>
                      <option value="198">
                        फौव्वारा निर्माण करने एवं लगाने वाले कर्मकार{" "}
                      </option>
                      <option value="199">
                        सार्वजनिक उघान, फुटपाथ निर्माण, लैण्ड स्कैपिंग संबंधी
                        कार्य करने वाले कर्मकार
                      </option>
                      <option value="200">
                        ठेका मजदूर (छ.ग. एवं अन्य सन्निर्माण कर्मकार कल्याण मंडल
                        में लगे ठेका मजदूर एवं ESI एवं भविष्य निधी योजना में
                        शामिल ठेका मजदूरो को छोडकर)
                      </option>
                      <option value="201">
                        सिनेमा व्यवसाय में कार्यरत लाईट मैन, स्पॉट ब्वाय, कैमेरा
                        मैन, मेकअप मैन
                      </option>
                      <option value="202">
                        सोना चॉदी की दुकानो मे काम करने वाले कारीगर
                      </option>
                      <option value="203">
                        निर्माण कार्य में लगने वाले सामग्री रेत, ईट, गिट्टी ,
                        मुरुम, आदि की आपूर्ति करने वाले वाहन के वाहन चालक
                      </option>
                      <option value="204">मलबा/कचरा हटाने वाले कर्मकार</option>
                      <option value="205">
                        रेट, मुरुम, गिट्टी, सीमेंट तथा ईट को स्थल से निकालने
                        वाले एवं लोडिंग एवं अनलोडिंग करने वाले कर्मकार
                      </option>
                      <option value="206">आंगनबाड़ी कार्यकर्ता</option>
                      <option value="207">आंगनबाड़ी सहायिका</option>
                      <option value="208">सेक्स वर्कर</option>
                    </select>

                    <br />
                    <br />

                    <label> जन्म तिथि :</label>
                    <input
                      value={dob}
                      type="date"
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <span style={{ color: "red" }}>*</span>

                    <br />
                    <br />
                    <br />

                    <label>जाति</label>
                    <select
                      value={caste}
                      onChange={(e) => setCaste(e.target.value)}
                      style={{ width: "150px" }}
                    >
                      <option value="0">--चुनिये--</option>
                      <option value="अनु. जाति">अनु. जाति</option>
                      <option value="अनु. ज. जाति">अनु. ज. जाति</option>
                      <option value="अन्य पिछडा वर्ग">अन्य पिछडा वर्ग</option>
                      <option value="अल्प संख्यक">अल्प संख्यक</option>
                      <option value="सामान्य">सामान्य</option>
                      <option value="विशेष पिछडी जनजाती समूह">
                        विशेष पिछडी जनजाती समूह
                      </option>
                    </select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <br />

            <Grid sx={{ padding: "10px" }}>
              <Grid sx={{ border: 1, padding: "10px" }}>
                <Grid style={{ marginTop: "-40px" }}>
                  <label style={{ backgroundColor: "lightgrey" }}>
                    <h3> &nbsp; पहचान विवरण</h3>{" "}
                  </label>
                </Grid>

                <Grid container>
                  <Grid item xs={12}>
                    <h3 style={{ color: "red" }}>
                      किसी भी एक पहचान की प्रविष्ठि अनिवार्य है |
                    </h3>
                  </Grid>

                  <Grid item lg={3} sm={6} xs={12}>
                    <label>राशन कार्ड :</label>
                    <input
                      value={ration}
                      type="text"
                      onChange={(e) => setRation(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label> वोटर आई. डी . :</label>
                    <input
                      value={voterId}
                      type="text"
                      onChange={(e) => setVoterId(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label>आर. एस. बी. वाय. :</label>
                    <input
                      value={rsBy}
                      type="text"
                      onChange={(e) => setRsBy(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label> आधार कार्ड :</label>
                    <input
                      value={aadharCard}
                      type="text"
                      onChange={(e) => setAadharCard(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <h3 style={{ color: "red" }}>
                      बैंक की जानकारी अनिवार्य है ।
                    </h3>
                  </Grid>

                  <Grid item lg={3} sm={6} xs={12}>
                    <label>बैंक का नाम :</label>
                    <input
                      value={bankName}
                      type="text"
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label>शाखा का नाम :</label>
                    <input
                      value={branchName}
                      type="text"
                      onChange={(e) => setBranchName(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label>खाता क्रमांक </label>
                    <input
                      value={acNumber}
                      type="number"
                      onChange={(e) => setAcNumber(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <br />
                <Grid container>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label> आई.ऍफ़.एस.कोड :</label>
                    <input
                      value={ifsCode}
                      type="text"
                      onChange={(e) => setIfsCode(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label>ई एस आई नं :</label>
                    <input
                      value={esiNumber}
                      type="number"
                      onChange={(e) => setEsiNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <label> ई पी एफ नं :</label>
                    <input
                      value={epfNumber}
                      type="number"
                      onChange={(e) => setEpfNumber(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <br />

            <Grid sx={{ padding: "10px" }}>
              <Grid sx={{ border: 1, padding: "10px" }}>
                {/* 8888888888888 */}

                <Grid style={{ marginTop: "-40px" }}>
                  <label
                    style={{ backgroundColor: "lightgrey", width: "50px" }}
                  >
                    {" "}
                    <h3 style={{ height: "33px" }}> &nbsp; पता</h3>
                  </label>
                </Grid>

                <Grid container style={{ justifyContent: "center" }}>
                  <Grid item lg={5} sx={{ border: 1, padding: "10px" }}>
                    <Grid style={{ marginTop: "-40px" }}>
                      <label
                        style={{
                          backgroundColor: "lightgrey",
                          width: "100px",
                        }}
                      >
                        <h4> &nbsp; वर्तमान पता</h4>
                      </label>
                    </Grid>

                    <Grid container>
                      <Grid item lg={4} sm={6} xs={12}>
                        जिला
                        <select
                          value={currentDist}
                          onChange={(e) => setCurrentDist(e.target.value)}
                        >
                          <option defaultValue="selected" value="0">
                            --चुनिये--
                          </option>
                          <option value="49">बालोद </option>
                          <option value="52">बलौदा बाजार </option>
                          <option value="38">बलरामपुर </option>
                          <option value="45">बस्तर</option>
                          <option value="62">बीजापुर</option>
                          <option value="50">बेमेतरा</option>
                          <option value="40">बिलासपुर</option>
                          <option value="61">दन्तेवाड़ा</option>
                          <option value="59">धमतरी</option>
                          <option value="43">दुर्ग</option>
                          <option value="51">गरियाबंद </option>
                          <option value="64">गोरेला पेंड्रा मरवाही</option>
                          <option value="54">जांजगीर-चाम्पा</option>
                          <option value="56">जशपुर</option>
                          <option value="60">कांकेर</option>
                          <option value="57">कवर्धा</option>
                          <option value="48">कोंडागांव </option>
                          <option value="55">कोरबा</option>
                          <option value="53">कोरिया</option>
                          <option value="58">महासमुंद</option>
                          <option value="63">मुंगेली </option>
                          <option value="46">नारायणपुर</option>
                          <option value="41">रायगढ़</option>
                          <option value="44">रायपुर</option>
                          <option value="42">राजनांदगांव</option>
                          <option value="39">सरगुजा</option>
                          <option value="47">सुकमा </option>
                          <option value="37">सुरजपूर </option>
                        </select>
                        <span style={{ color: "red" }}>*</span>
                      </Grid>
                      <Grid item lg={4} sm={6} xs={12}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <td>
                                <input
                                  style={{ width: "20px" }}
                                  type="radio"
                                  name="c1"
                                  value="R"
                                />
                                <label style={{ width: "80px" }}>ग्रामीण</label>
                              </td>
                              <td>
                                <input
                                  style={{ width: "20px" }}
                                  type="radio"
                                  name="c1"
                                  value="U"
                                />
                                <label>शहरीय</label>
                              </td>
                            </TableRow>
                          </TableHead>
                        </Table>
                      </Grid>
                      <Grid item lg={4} sm={6} xs={12}>
                        विधानसभा क्षेत्र:{" "}
                        <select
                          value={currentVidhansabhaArea}
                          onChange={(e) =>
                            setCurrentVidhansabhaArea(e.target.value)
                          }
                        >
                          <option>--चुनिये--</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span style={{ color: "red" }}>*</span>
                      </Grid>
                    </Grid>
                    <br />

                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}>
                        विकासखण्ड/नगर निकाय : &nbsp;
                        <select
                          value={currentVikasKhand}
                          onChange={(e) => setCurrentVikasKhand(e.target.value)}
                        >
                          <option value="0">--चुनिये--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <span style={{ color: "red" }}>*</span>
                      </Grid>

                      <Grid item lg={6} sm={6} xs={12}>
                        <label> पंचायत :</label>{" "}
                        <span style={{ color: "red" }}>*</span>
                        <select
                          value={currentPanchayat}
                          onChange={(e) => setCurrentPanchayat(e.target.value)}
                        >
                          <option value="0">--चुनिये--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>{" "}
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}>
                        <label>ग्राम/वार्ड :</label>{" "}
                        <span style={{ color: "red" }}>*</span>
                        <select
                          value={currentWard}
                          onChange={(e) => setCurrentWard(e.target.value)}
                        >
                          <option value="0">--चुनिये--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>{" "}
                      </Grid>

                      <Grid item lg={6} sm={6} xs={12}>
                        वर्तमान पता :
                        <textarea
                          value={currentAdd}
                          rows="2"
                          cols="20"
                          onChange={(e) => setCurrentAdd(e.target.value)}
                        />
                        <span style={{ color: "red" }}>*</span>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}>
                        मकान न. <span style={{ color: "red" }}>*</span>
                        <textarea
                          value={currentHouseNo}
                          onChange={(e) => setCurrentHouseNo(e.target.value)}
                        />{" "}
                      </Grid>

                      <Grid item lg={6} sm={6} xs={12}>
                        <input
                          style={{ width: "40px" }}
                          type="checkbox"
                          onChange={clickval}
                        />
                        वर्तमान ही स्थायी पता है
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}>
                        मो. न. 1 :{" "}
                        <input
                          value={currentMob1}
                          type="number"
                          onChange={(e) => setCurrentMob1(e.target.value)}
                        />
                      </Grid>

                      <Grid item lg={6} sm={6} xs={12}>
                        मो. न. 2 :{" "}
                        <input
                          value={currentMob2}
                          type="number"
                          onChange={(e) => setCurrentMob2(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={0.2}></Grid>
                  <br />
                  <br />

                  <Grid item lg={5} sx={{ border: 1, padding: "10px" }}>
                    <Grid style={{ marginTop: "-40px" }}>
                      <label style={{ backgroundColor: "lightgrey" }}>
                        {" "}
                        <h4> &nbsp; स्थाई पता</h4>
                      </label>
                    </Grid>

                    <Grid container>
                      <Grid item lg={4} sm={6} xs={12}>
                        जिला
                        <select
                          value={permanentDist}
                          onChange={(e) => setPermanentDist(e.target.value)}
                        >
                          <option defaultValue="selected" value="0">
                            --चुनिये--
                          </option>
                          <option value="49">बालोद </option>
                          <option value="52">बलौदा बाजार </option>
                          <option value="38">बलरामपुर </option>
                          <option value="45">बस्तर</option>
                          <option value="62">बीजापुर</option>
                          <option value="50">बेमेतरा</option>
                          <option value="40">बिलासपुर</option>
                          <option value="61">दन्तेवाड़ा</option>
                          <option value="59">धमतरी</option>
                          <option value="43">दुर्ग</option>
                          <option value="51">गरियाबंद </option>
                          <option value="64">गोरेला पेंड्रा मरवाही</option>
                          <option value="54">जांजगीर-चाम्पा</option>
                          <option value="56">जशपुर</option>
                          <option value="60">कांकेर</option>
                          <option value="57">कवर्धा</option>
                          <option value="48">कोंडागांव </option>
                          <option value="55">कोरबा</option>
                          <option value="53">कोरिया</option>
                          <option value="58">महासमुंद</option>
                          <option value="63">मुंगेली </option>
                          <option value="46">नारायणपुर</option>
                          <option value="41">रायगढ़</option>
                          <option value="44">रायपुर</option>
                          <option value="42">राजनांदगांव</option>
                          <option value="39">सरगुजा</option>
                          <option value="47">सुकमा </option>
                          <option value="37">सुरजपूर </option>
                        </select>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Grid>
                      <Grid item lg={4} sm={6} xs={12}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <td>
                                <input
                                  style={{ width: "20px" }}
                                  type="radio"
                                  name="p1"
                                  value="A"
                                />
                                <label style={{ width: "80px" }}>
                                  {" "}
                                  ग्रामीण
                                </label>
                              </td>
                              <td>
                                <input
                                  style={{ width: "20px" }}
                                  type="radio"
                                  name="p1"
                                  value="B"
                                />
                                <label>शहरीय</label>
                              </td>
                            </TableRow>
                          </TableHead>
                        </Table>
                      </Grid>
                      <Grid item lg={4} sm={6} xs={12}>
                        विधानसभा क्षेत्र:
                        <select
                          value={permanentVidhansabhaArea}
                          onChange={(e) =>
                            setPermanentVidhansabhaArea(e.target.value)
                          }
                        >
                          <option>--चुनिये--</option>
                          <option>1</option>
                          <option>2</option>
                        </select>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}>
                        विकासखण्ड/नगर निकाय : &nbsp;
                        <select
                          value={permanentVikasKhand}
                          onChange={(e) =>
                            setPermanentVikasKhand(e.target.value)
                          }
                        >
                          <option value="0">--चुनिये--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <span style={{ color: "red" }}>*</span>
                      </Grid>

                      <Grid item lg={6} sm={6} xs={12}>
                        <label>पंचायत :</label>
                        <select
                          value={permanentPanchayat}
                          onChange={(e) =>
                            setPermanentPanchayat(e.target.value)
                          }
                        >
                          <option value="0">--चुनिये--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}>
                        <label> ग्राम/वार्ड :</label>
                        <select
                          value={permanentWard}
                          onChange={(e) => setPermanentWard(e.target.value)}
                        >
                          <option value="0">--चुनिये--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Grid>

                      <Grid item lg={6} sm={6} xs={12}>
                        स्थाई पता : &nbsp;&nbsp;&nbsp;
                        <textarea
                          value={permanentAdd}
                          rows="2"
                          cols="20"
                          onChange={(e) => setPermanentAdd(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}>
                        मकान न. : <span style={{ color: "red" }}>*</span>
                        <textarea
                          value={permanentHouseNo}
                          rows="2"
                          cols="20"
                          onChange={(e) => setPermanentHouseNo(e.target.value)}
                        />{" "}
                      </Grid>

                      <Grid item lg={6} sm={6} xs={12}></Grid>
                    </Grid>
                    <br />
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={12}></Grid>

                      <Grid item lg={6} sm={6} xs={12}></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <br />

                {/* 8888888888888 */}
              </Grid>
            </Grid>

            <Grid align="center">
              <button
                variant="dark"
                type="submit"
                onClick={(e) => handlesubmit()}
              >
                सुरक्षित करें{" "}
              </button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/bhag1tb">
                <Button variant="contained"> SHOW DATA</Button>
              </Link>
              <br />
              <br />
              <span>
               <p  style={{ color: "white", backgroundColor: "green", borderRadius:'10px' }}> {successAlert}</p>
              </span>
            </Grid>
            <br />
          </Grid>
          {/* ==========================================END MASTER GRID 2================================================== */}

          <br />
          <br />
        </FormControl>
      </Container>
    </>
  );
}
