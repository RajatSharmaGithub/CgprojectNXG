import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../Redux/action";
import { addUser } from "../Redux/action";
import { deleteUser } from "../Redux/action";
import axios from "axios";

// ===============================================Designing===========================================

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

// ============================================MUI====================================================

import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';


// ============================================Designing Close=========================================

export default function Homescreen() {
  let dispatch = useDispatch();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  // -------------------------------सामान्य विवरण---------------------------------------

  const [karyaSwaroop, setKaryaSwaroop] = useState("");
  const [karyaPrakriti1, setKaryaPrakriti1] = useState("");
  const [karyaPrakriti2, setKaryaPrakriti2] = useState("");
  const [karyaPrakriti3, setKaryaPrakriti3] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [marriage, setMarriage] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [caste, setCaste] = useState("");
  const [manrega, setManrega] = useState("");

  // --------------------------------पहचान विवरण-------------------------------------

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

  const [userID, setUserID] = useState(null);

  function Submii(e) {
    // alert("CONFIRM TO ADD DETAILS ? ");

    e.preventdefault();
  }

  function handlesubmit() {
    dispatch(
      addUser(
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
        permanentMob2
      )
    );
  }

  const handledelete = (id) => {
    if (window.confirm("Are You Sure To Delete User Data ?")) {
      dispatch(deleteUser(id));
    }
  };

  function selecttoupdate(id) {
    let rrr = users[id];
    console.log(rrr, users, id);
    // alert(rrr.karyaSwaroop);
    setKaryaSwaroop(rrr.karyaSwaroop);
    setKaryaPrakriti1(rrr.karyaPrakriti1);
    setKaryaPrakriti2(rrr.karyaPrakriti2);
    setKaryaPrakriti3(rrr.karyaPrakriti3);
    setFatherName(rrr.fatherName);
    setName(rrr.name);
    setGender(rrr.gender);
    setMarriage(rrr.marriage);
    setDob(rrr.dob);
    setAge(rrr.age);
    setCaste(rrr.caste);
    setRation(rrr.ration);
    setVoterId(rrr.voterId);
    setRsBy(rrr.rsBy);
    setAadharCard(rrr.aadharCard);
    setBankName(rrr.bankName);
    setBranchName(rrr.branchName);
    setAcNumber(rrr.acNumber);
    setIfsCode(rrr.ifsCode);
    setEsiNumber(rrr.esiNumber);
    setEpfNumber(rrr.epfNumber);
    setCurrentDist(rrr.currentDist);
    setCurrentVidhansabhaArea(rrr.currentVidhansabhaArea);
    setCurrentVikasKhand(rrr.currentVikasKhand);
    setCurrentPanchayat(rrr.currentPanchayat);
    setCurrentWard(rrr.currentWard);
    setCurrentAdd(rrr.currentAdd);
    setCurrentHouseNo(rrr.currentHouseNo);
    setCurrentMob1(rrr.currentMob1);
    setCurrentMob2(rrr.currentMob2);

    setPermanentDist(rrr.permanentDist);
    setPermanentVikasKhand(rrr.permanentVikasKhand);
    setPermanentVidhansabhaArea(rrr.permanentVidhansabhaArea);
    setPermanentPanchayat(rrr.permanentPanchayat);
    setPermanentWard(rrr.permanentWard);

    setPermanentAdd(rrr.permanentAdd);
    setPermanentHouseNo(rrr.permanentHouseNo);
    setPermanentMob1(rrr.permanentMob1);
    setPermanentMob2(rrr.permanentMob2);

    setUserID(rrr.id);
  }
  // ------------------------------------for update---------------------------------

  function Updateval() {
    axios
      .put(`http://localhost:3000/users/${userID}`, {
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
      })

      .then((resp) => {});
  }

  var n = 1;

  return (
    <>

      <Container maxWidth="xl" sx={{ border: 1 , backgroundColor:"lightgrey"}} >



        <Grid container spacing={2} >
          
          <label>सामान्य विवरण</label>

          <Grid item xs={4}>
            <p>Hello</p>
          </Grid>
          <Grid item xs={4}>
          <p>Hello 2</p>
          </Grid>
          <Grid item xs={4}>
          <p>Hello 3</p>
          </Grid>
        </Grid>


        <Form onSubmit={Submii}>
          {/* *  1st Biggest ROW  * */}
          <Row>
            <Col>
              <h2 align="center">ऑनलाइन पंजियन अवेदन फॉर्म</h2>
            </Col>
          </Row>
          {/* *  1st Biggest ROW Closed * */}

          <br />

          {/* *  2nd Biggest ROW  * */}
          <Row className="border border-dark" style={{ height: "auto" }}>
            <Row>
              <Col style={{ marginTop: "-18px" }}>
                <button
                  className="nav-button"
                  style={{ backgroundColor: "white" }}
                >
                  भाग 1
                </button>
                <button
                  className="nav-button"
                  style={{ backgroundColor: "white" }}
                >
                  भाग 2
                </button>
                <button
                  className="nav-button"
                  style={{ backgroundColor: "white" }}
                >
                  भाग 3
                </button>
              </Col>
            </Row>
            <br />
            <br />
            <Row style={{ margin: "auto", width: "98%" }}>
              <Col xs={8}>
                <p style={{ color: "Red", marginLeft: "70px" }}>
                  क्या श्रमिक व्दारा प्रधान मंत्री जीवन ज्योति बीमा योजना <br />
                  और प्रधान मंत्री सुरक्षा बीमा योजना अन्तर्गत आपके खाते से राशि
                  आहरित हो चुका है
                </p>
              </Col>
              <Col>
                <input type="radio" value="1" name="hello" />
                हा
                <input type="radio" value="2" name="hello" />
                नही
              </Col>
            </Row>
            <br />
            <br />
            <br />
            {/* =================================================================================================================================== */}
            <Row
              className="border border-dark"
              style={{ margin: "auto", width: "98%" }}
            >
              <Row>
                <Col>
                  <b>
                    <p
                      style={{
                        marginTop: "-12px",
                        backgroundColor: "lightgray",
                        width: " 10%",
                      }}
                    >
                      सामान्य विवरण
                    </p>
                  </b>
                </Col>
              </Row>

              <br />

              <Row>
                <Col>
                  कार्य का स्वरूप :
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
                </Col>

                <Col>
                  कार्य की प्रकृति 1 :
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
                      सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर, नाली निर्माण एवं
                      नल संबंधी कार्य करने वाले कर्मकार
                    </option>
                    <option value="7">
                      इलेक्ट्रीशियन, विधुत वायरिंग, वितरण एवं पैनल फिटिंग संबंधी
                      कार्य करने वाले कर्मकार
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
                    <option value="31">चट्टान तोड़ने वाले या खनि कर्मकार</option>
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
                      बांध, पुल, सड़क या किसी भवन सन्निर्माण प्रक्रिया में नियोजन
                      में लगे कोइ अन्य प्रवर्ग के कर्मकार
                    </option>
                    <option value="36">
                      ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                    </option>
                    <option value="37">पंडाल सन्निर्माण में लगे कर्मकार</option>
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
                      लोहे के ग्रिल, खिडकियां, दरवाजे बनाने व लगाने वाले कर्मकार
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
                      खेल मैंदान, स्वीमिंग पुल, गोल्फ कोर्स जैसे मनोरंजन स्थल का
                      निर्माण करने वाले कर्मकार
                    </option>
                    <option value="197">
                      बस स्टॉप, डिपो,स्टैण्ड, रोड सिगनल, संकेतक (साईन बोर्ड) एवं
                      इनसे संबंधित निर्माण करने तथा लगाने वाले कर्मकार{" "}
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
                      रेट, मुरुम, गिट्टी, सीमेंट तथा ईट को स्थल से निकालने वाले
                      एवं लोडिंग एवं अनलोडिंग करने वाले कर्मकार
                    </option>
                  </select>
                  <span style={{ color: "red" }}>*</span>
                </Col>

                <Col>
                  कार्य की प्रकृति 2 :
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
                      सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर, नाली निर्माण एवं
                      नल संबंधी कार्य करने वाले कर्मकार
                    </option>
                    <option value="7">
                      इलेक्ट्रीशियन, विधुत वायरिंग, वितरण एवं पैनल फिटिंग संबंधी
                      कार्य करने वाले कर्मकार
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
                    <option value="31">चट्टान तोड़ने वाले या खनि कर्मकार</option>
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
                      बांध, पुल, सड़क या किसी भवन सन्निर्माण प्रक्रिया में नियोजन
                      में लगे कोइ अन्य प्रवर्ग के कर्मकार
                    </option>
                    <option value="36">
                      ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                    </option>
                    <option value="37">पंडाल सन्निर्माण में लगे कर्मकार</option>
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
                    <option value="86">हड्डी बीनने वाले (हड्डबिनन्ने )</option>
                    <option value="87">
                      काष्ठागार में काम करने वाले हमाल{" "}
                    </option>
                    <option value="88">समाचार-पत्र बांटने वाले (हॉकर )</option>
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
                      किसी दुकान, वाणिज्यिक संस्थान आवासीय होटल, रेस्टोरेंट तथा
                      नाट्यगृह में नियोजन
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
                      खाद्य पदार्थ जिसमें केक्स, बिस्किटस, कंफेक्शनरी, आईसक्रीम,
                      आईसकेण्डी सम्मिलित हैं, एवं पेयक निर्माण में नियोजन{" "}
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
                      पावरलूम जिसमें सायजिग एवं प्रोसेसिंग भी सम्मिलित हैं, में
                      नियोजन{" "}
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
                    <option value="141">पत्थर काटने, तोड़ने व पीसने वाले</option>
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
                      बड़े यांत्रिक कार्य जैसे – मशीनरी, पुल का कार्य आदि में लगे
                      खलासी
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
                      बांध, पुल, सड़क या किसी भवन सन्निर्माण संक्रिया में नियोजन
                      में लगे कोइ अन्य प्रवर्ग के कर्मकार
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
                      लोहे के ग्रिल, खिडकियां, दरवाजे बनाने व लगाने वाले कर्मकार
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
                      खेल मैंदान, स्वीमिंग पुल, गोल्फ कोर्स जैसे मनोरंजन स्थल का
                      निर्माण करने वाले कर्मकार
                    </option>
                    <option value="197">
                      बस स्टॉप, डिपो,स्टैण्ड, रोड सिगनल, संकेतक (साईन बोर्ड) एवं
                      इनसे संबंधित निर्माण करने तथा लगाने वाले कर्मकार{" "}
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
                      में लगे ठेका मजदूर एवं ESI एवं भविष्य निधी योजना में शामिल
                      ठेका मजदूरो को छोडकर)
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
                      रेट, मुरुम, गिट्टी, सीमेंट तथा ईट को स्थल से निकालने वाले
                      एवं लोडिंग एवं अनलोडिंग करने वाले कर्मकार
                    </option>
                    <option value="206">आंगनबाड़ी कार्यकर्ता</option>
                    <option value="207">आंगनबाड़ी सहायिका</option>
                    <option value="208">सेक्स वर्कर</option>
                  </select>
                  <span style={{ color: "red" }}>*</span>
                </Col>

                <Col>
                  कार्य की प्रकृति 3 :
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
                      सड़क के पाइप मरम्मत कार्य में लगे प्लम्बर, नाली निर्माण एवं
                      नल संबंधी कार्य करने वाले कर्मकार
                    </option>
                    <option value="7">
                      इलेक्ट्रीशियन, विधुत वायरिंग, वितरण एवं पैनल फिटिंग संबंधी
                      कार्य करने वाले कर्मकार
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
                    <option value="31">चट्टान तोड़ने वाले या खनि कर्मकार</option>
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
                      बांध, पुल, सड़क या किसी भवन सन्निर्माण प्रक्रिया में नियोजन
                      में लगे कोइ अन्य प्रवर्ग के कर्मकार
                    </option>
                    <option value="36">
                      ईट भट्ठा, खपरा, फ्लाई ऎश , टाईल्स मजदूर
                    </option>
                    <option value="37">पंडाल सन्निर्माण में लगे कर्मकार</option>
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
                    <option value="86">हड्डी बीनने वाले (हड्डबिनन्ने )</option>
                    <option value="87">
                      काष्ठागार में काम करने वाले हमाल{" "}
                    </option>
                    <option value="88">समाचार-पत्र बांटने वाले (हॉकर )</option>
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
                      किसी दुकान, वाणिज्यिक संस्थान आवासीय होटल, रेस्टोरेंट तथा
                      नाट्यगृह में नियोजन
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
                      खाद्य पदार्थ जिसमें केक्स, बिस्किटस, कंफेक्शनरी, आईसक्रीम,
                      आईसकेण्डी सम्मिलित हैं, एवं पेयक निर्माण में नियोजन{" "}
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
                      पावरलूम जिसमें सायजिग एवं प्रोसेसिंग भी सम्मिलित हैं, में
                      नियोजन{" "}
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
                    <option value="141">पत्थर काटने, तोड़ने व पीसने वाले</option>
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
                      बड़े यांत्रिक कार्य जैसे – मशीनरी, पुल का कार्य आदि में लगे
                      खलासी
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
                      बांध, पुल, सड़क या किसी भवन सन्निर्माण संक्रिया में नियोजन
                      में लगे कोइ अन्य प्रवर्ग के कर्मकार
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
                      लोहे के ग्रिल, खिडकियां, दरवाजे बनाने व लगाने वाले कर्मकार
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
                      खेल मैंदान, स्वीमिंग पुल, गोल्फ कोर्स जैसे मनोरंजन स्थल का
                      निर्माण करने वाले कर्मकार
                    </option>
                    <option value="197">
                      बस स्टॉप, डिपो,स्टैण्ड, रोड सिगनल, संकेतक (साईन बोर्ड) एवं
                      इनसे संबंधित निर्माण करने तथा लगाने वाले कर्मकार{" "}
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
                      में लगे ठेका मजदूर एवं ESI एवं भविष्य निधी योजना में शामिल
                      ठेका मजदूरो को छोडकर)
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
                      रेट, मुरुम, गिट्टी, सीमेंट तथा ईट को स्थल से निकालने वाले
                      एवं लोडिंग एवं अनलोडिंग करने वाले कर्मकार
                    </option>
                    <option value="206">आंगनबाड़ी कार्यकर्ता</option>
                    <option value="207">आंगनबाड़ी सहायिका</option>
                    <option value="208">सेक्स वर्कर</option>
                  </select>
                </Col>
              </Row>

              <br />
              <br />
              <br />

              <Row>
                <Col>
                  नाम :{" "}
                  <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span style={{ color: "red" }}>*</span>
                </Col>
                <Col>
                  पिता / पति का नाम :{" "}
                  <input
                    type="text"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                  />{" "}
                  <span style={{ color: "red" }}>*</span>
                </Col>

                <Col>
                  लिंग :
                  <select
                    value={gender}
                    style={{ width: "150px" }}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="0">--चुनिये--</option>
                    <option value="1">महिला</option>
                    <option value="2">पुरुष</option>
                    <option value="3">तृतीय लिंग</option>
                  </select>
                  <span style={{ color: "red" }}>*</span>
                </Col>
              </Row>

              <br />
              <br />

              <Row>
                <Col>
                  वेवाहिक इस्तिथि :
                  <select
                    value={marriage}
                    onChange={(e) => setMarriage(e.target.value)}
                  >
                    <option value="0">--चुनिये--</option>
                    <option value="अविवाहित">अविवाहित</option>
                    <option value="विवाहित">विवाहित</option>
                    <option value="तलाकशुदा">तलाकशुदा</option>
                    <option value="विधवा">विधवा</option>
                    <option value="विदुर">विदुर</option>
                  </select>
                  <span style={{ color: "red" }}>*</span>
                </Col>

                <Col>
                  जन्म तिथि :{" "}
                  <input
                    value={dob}
                    type="date"
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <span style={{ color: "red" }}>*</span>
                </Col>
                <Col>
                  आयु :{" "}
                  <input
                    value={age}
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                  />
                  {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                  <span style={{ color: "red" }}>*</span>
                </Col>

                <Col>
                  जाति :
                  <select
                    value={caste}
                    onChange={(e) => setCaste(e.target.value)}
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
                  <span style={{ color: "red" }}>*</span>
                </Col>
              </Row>

              <br />
              <br />

              <Row>
                <Col>
                  <input
                    type="checkbox"
                    value="Yes"
                    onChange={(e) => setManrega(e.target.value)}
                  />
                  मनरेगा कर्मकार
                </Col>
              </Row>
              <br />
            </Row>
            <br />
            <br />
            {/* ===================================================================================================================================== */}
            <Row
              className="border border-dark"
              style={{ margin: "auto", width: "98%", marginTop: "22px" }}
            >
              <Row>
                <Col>
                  <b>
                    {" "}
                    <p
                      style={{
                        marginTop: "-12px",
                        backgroundColor: "lightgray",
                        width: " 10%",
                      }}
                    >
                      {" "}
                      पहचान विवरण
                    </p>
                  </b>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 style={{ color: "red" }}>
                    किसी भी एक पहचान की प्रविष्ठि अनिवार्य है ..
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  राशन कार्ड :{" "}
                  <input
                    value={ration}
                    type="text"
                    onChange={(e) => setRation(e.target.value)}
                  />
                </Col>
                <Col>
                  वोटर आई. डी . :{" "}
                  <input
                    value={voterId}
                    type="text"
                    onChange={(e) => setVoterId(e.target.value)}
                  />
                </Col>
                <Col>
                  आर. एस. बी. वाय. :{" "}
                  <input
                    value={rsBy}
                    type="text"
                    onChange={(e) => setRsBy(e.target.value)}
                  />
                </Col>
                <Col>
                  आधार कार्ड :{" "}
                  <input
                    value={aadharCard}
                    type="text"
                    onChange={(e) => setAadharCard(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <br />

              <Row>
                <Col>
                  <h3 style={{ color: "red" }}>
                    बैंक की जानकारी अनिवार्य है ..
                  </h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  बैंक का नाम :{" "}
                  <input
                    value={bankName}
                    type="text"
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </Col>
                <Col>
                  शाखा का नाम :{" "}
                  <input
                    value={branchName}
                    type="text"
                    onChange={(e) => setBranchName(e.target.value)}
                  />
                </Col>
                <Col>
                  खाता क्रमांक :{" "}
                  <input
                    value={acNumber}
                    type="number"
                    onChange={(e) => setAcNumber(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  आई.ऍफ़.एस.कोड :{" "}
                  <input
                    value={ifsCode}
                    type="text"
                    onChange={(e) => setIfsCode(e.target.value)}
                  />
                </Col>
                <Col>
                  ई एस आई नं :{" "}
                  <input
                    value={esiNumber}
                    type="number"
                    onChange={(e) => setEsiNumber(e.target.value)}
                  />
                </Col>
                <Col>
                  ई पी एफ नं :{" "}
                  <input
                    value={epfNumber}
                    type="number"
                    onChange={(e) => setEpfNumber(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <br />
            </Row>
            {/* ================================================================================================================================================ */}
            <br />
            {/* Master Row */}
            <Row
              className="border border-dark"
              style={{ margin: "auto", width: "98%", marginTop: "22px" }}
            >
              <Row>
                <Col>
                  <b>
                    {" "}
                    <p
                      style={{
                        marginTop: "-12px",
                        backgroundColor: "lightgray",
                        width: " 3%",
                      }}
                    >
                      पता
                    </p>
                  </b>
                </Col>
              </Row>

              <Row style={{ margin: "auto", padding: "14px" }}>
                <Col className="border border-dark">
                  <Row>
                    <Col>
                      <p>वर्तमान पता</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      जिला <span style={{ color: "red" }}>*</span>
                      <select
                        value={currentDist}
                        onChange={(e) => setCurrentDist(e.target.value)}
                      >
                        <option selected="selected" value="0">
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
                    </Col>

                    <Col>
                      <input type="radio" value="G" name="yy" />
                      <br />
                      <label>ग्रामीण</label>
                    </Col>

                    <Col>
                      <input type="radio" value="S" name="yy" />
                      <br />
                      <label>शहरीय</label>
                    </Col>

                    <Col>
                      विधानसभा क्षेत्र: <span style={{ color: "red" }}>*</span>
                      <select
                        value={currentVidhansabhaArea}
                        onChange={(e) =>
                          setCurrentVidhansabhaArea(e.target.value)
                        }
                      >
                        <option>--चुनिये--</option>
                        <option>1</option>
                        <option>2</option>
                      </select>{" "}
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      विकासखण्ड/नगर निकाय :
                      <span style={{ color: "red" }}>*</span>
                      <select
                        value={currentVikasKhand}
                        onChange={(e) => setCurrentVikasKhand(e.target.value)}
                      >
                        <option value="0">--चुनिये--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>{" "}
                    </Col>
                    &nbsp;
                    <Col>
                      पंचायत : <span style={{ color: "red" }}>*</span>
                      <select
                        value={currentPanchayat}
                        onChange={(e) => setCurrentPanchayat(e.target.value)}
                      >
                        <option value="0">--चुनिये--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>{" "}
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      ग्राम/वार्ड : <span style={{ color: "red" }}>*</span>
                      <select
                        value={currentWard}
                        onChange={(e) => setCurrentWard(e.target.value)}
                      >
                        <option value="0">--चुनिये--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>{" "}
                    </Col>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Col>
                      वर्तमान पता :<span style={{ color: "red" }}>*</span>
                      <textarea
                        value={currentAdd}
                        rows="2"
                        cols="20"
                        onChange={(e) => setCurrentAdd(e.target.value)}
                      />
                    </Col>{" "}
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      मकान न. <span style={{ color: "red" }}>*</span>
                      <textarea
                        value={currentHouseNo}
                        rows="2"
                        cols="20"
                        onChange={(e) => setCurrentHouseNo(e.target.value)}
                      />{" "}
                    </Col>{" "}
                    &nbsp;&nbsp;
                    <Col>
                      {" "}
                      <input type="checkbox" />
                      (वर्तमान ही स्थायी पता है)
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      मो. न. 1 :{" "}
                      <input
                        value={currentMob1}
                        type="number"
                        onChange={(e) => setCurrentMob1(e.target.value)}
                      />
                    </Col>
                    <Col>
                      मो. न. 2 :{" "}
                      <input
                        value={currentMob2}
                        type="number"
                        onChange={(e) => setCurrentMob2(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <br />
                </Col>
                &nbsp;&nbsp; &nbsp;
                <Col className="border border-dark">
                  <Row>
                    <Col>
                      <p
                        style={{
                          marginTop: "-12px",
                          backgroundColor: "lightgray",
                          width: " 13%",
                        }}
                      >
                        स्थाई पता
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      जिला{" "}
                      <select
                        value={permanentDist}
                        onChange={(e) => setPermanentDist(e.target.value)}
                      >
                        <option selected="selected" value="0">
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
                    </Col>

                    <Col>
                      <input type="radio" value="G" name="yy" />
                      <br />
                      <label>ग्रामीण</label>
                    </Col>

                    <Col>
                      <input type="radio" value="S" name="yy" />
                      <br />
                      <label>शहरीय</label>
                    </Col>

                    <Col>
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
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      विकासखण्ड/नगर निकाय : &nbsp;
                      <select
                        value={permanentVikasKhand}
                        onChange={(e) => setPermanentVikasKhand(e.target.value)}
                      >
                        <option value="0">--चुनिये--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>{" "}
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                    &nbsp;
                    <Col>
                      पंचायत :
                      <select
                        value={permanentPanchayat}
                        onChange={(e) => setPermanentPanchayat(e.target.value)}
                      >
                        <option value="0">--चुनिये--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>{" "}
                      <span style={{ color: "red" }}>*</span>
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      ग्राम/वार्ड :
                      <select
                        value={permanentWard}
                        onChange={(e) => setPermanentWard(e.target.value)}
                      >
                        <option value="0">--चुनिये--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>{" "}
                      <span style={{ color: "red" }}>*</span>
                    </Col>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Col>
                      वर्तमान पता : &nbsp;&nbsp;&nbsp;
                      <textarea
                        value={permanentAdd}
                        rows="2"
                        cols="20"
                        onChange={(e) => setPermanentAdd(e.target.value)}
                      />
                    </Col>{" "}
                    <span style={{ color: "red" }}>*</span>
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      मकान न. : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <textarea
                        value={permanentHouseNo}
                        rows="2"
                        cols="20"
                        onChange={(e) => setPermanentHouseNo(e.target.value)}
                      />{" "}
                      <span style={{ color: "red" }}>*</span>
                    </Col>{" "}
                    &nbsp;&nbsp;
                  </Row>
                  <br />

                  <Row>
                    <Col>
                      मो. न. 1 :{" "}
                      <input
                        value={permanentMob1}
                        type="number"
                        onChange={(e) => setPermanentMob1(e.target.value)}
                      />
                    </Col>
                    <Col>
                      मो. न. 2 :{" "}
                      <input
                        value={permanentMob2}
                        type="number"
                        onChange={(e) => setPermanentMob2(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <br />
                </Col>
              </Row>

              {/* Master Row Closed */}
            </Row>
            <br />
            <Row style={{ padding: "14px" }}>
              <Col align="center">
                <button
                  variant="dark"
                  type="submit"
                  onClick={(e) => handlesubmit()}
                >
                  सुरक्षित करें{" "}
                </button>

                <button
                  onClick={Updateval}
                  style={{ backgroundColor: "lightblue" }}
                >
                  update
                </button>
              </Col>
            </Row>
            <br /> <br />
          </Row>
          {/* * 2 nd Biggest  Row Closed* */}
        </Form>
      </Container>
      <br />

      {/* ===================================================================================================== */}

      <Container className="border border-dark">
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>कार्य का स्वरूप</th>
                <th>कार्य की प्रकृति 1</th>
                <th>कार्य की प्रकृति 2</th>
                <th>कार्य की प्रकृति 3</th>
                <th>नाम</th>
                <th>पिता / पति का नाम</th>
                <th>लिंग</th>
                <th>वेवाहिक इस्तिथि</th>
                <th>जन्म तिथि</th>
                <th>आयु</th>
                <th>जाति</th>
                <th>मनरेगा</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{n++}</td>
                  <td>{user.karyaSwaroop}</td>
                  <td>{user.karyaPrakriti1}</td>
                  <td>{user.karyaPrakriti2}</td>
                  <td>{user.karyaPrakriti3}</td>
                  <td>{user.name}</td>
                  <td>{user.fatherName}</td>
                  <td>{user.gender}</td>
                  <td>{user.marriage}</td>
                  <td>{user.dob}</td>
                  <td>{user.age}</td>
                  <td>{user.caste}</td>
                  <td>{user.manrega}</td>
                  <td>
                    <Button
                      onClick={() => handledelete(user.id)}
                      variant="danger"
                    >
                      {" "}
                      DELETE
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => selecttoupdate(index)}
                      variant="primary"
                    >
                      {" "}
                      EDIT
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table responsive="md">
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
