import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "./Cards.css";
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Cardsss() {
  const [shampaingQue, setRec1] = React.useState(0);
  const [flowersQue, setRec2] = React.useState(0);
  const [beerQue, setRec3] = React.useState(0);
  const[flowerAccprice,setAccprce] = React.useState(0)
  const [vippassQue, setRec4] = React.useState(0);
  const [shamprice, setPrice1] = React.useState(0);
  const [floweprice, setPrice2] = React.useState(0);
  const [beerprice, setPrice3] = React.useState(0);
  const [vippassprice, setPrice4] = React.useState(0);
  const classes = useStyles();

  const [shampOptions, setOptionForShamp] = React.useState("");

  const handleChangeForshamp = (event) => {
    setOptionForShamp(event.target.value);
  };
  const [floweOptions,setOptionForFlowers] = React.useState("");

  const [vipAirport,setvipAirport] = React.useState()
  const [vipPassangers,setvippassangers] = React.useState()
  const [vipDes,setvipdes] = React.useState()


  const setvipAirportFunc = (e)=>{
    setvipAirport(e.target.value)
  }
  const setvippassangersFunc = (e)=>{
    setvippassangers(e.target.value)
  }
  const setvipdesFunc = (e)=>{
    setvipdes(e.target.value)
  }
  

  const handleChangeForflower = (event) => {
    setOptionForFlowers(event.target.value);
    if ( event.target.value  === "small"){
        setAccprce(30)
    }
    if (event.target.value === "medium"){
        setAccprce(45)
    }
    if (event.target.value === "large"){
        setAccprce(60)
    }
    if (event.target.value === ""){
        setAccprce(0)
    }
  };
  const [beerOptions, setOptionForbeer] = React.useState("");

  const handleChangeForbeer = (event) => {
    setOptionForbeer(event.target.value);
  };
  const [vipOptions, setOptionForvip] = React.useState("");

  const handleChangeForvip = (event) => {
    setOptionForvip(event.target.value);
  };

  const increase1 = () => {
    setRec1(shampaingQue + 1);
    setPrice1(shampaingQue * 60)
  };
  const increase2 = () => {
    setRec2(flowersQue + 1);
    setPrice1(flowerAccprice * flowersQue)
  };
  const increase3 = () => {
    setRec3(beerQue + 1);
    setPrice2(beerQue * 16)
  };
  const increase4 = () => {
    setRec4(vippassQue + 1);
    // setPrice4(vip * 60)
  };
  const decrese1 = () => {
    if (shampaingQue !== 0) {
      setRec1(shampaingQue - 1);
    }
  };
  const decrese2 = () => {
    if (flowersQue !== 0) {
      setRec2(flowersQue - 1);
    }
  };
  const decrese3 = () => {
    if (beerQue !== 0) {
      setRec3(beerQue - 1);
    }
  };
  const decrese4 = () => {
    if (vippassQue !== 0) {
      setRec4(vippassQue - 1);
    }
  };

  return (
    <div className= " main-div">
      <Grid
        container
        spacing={0}
        alignItems="center"
        style={{
          marginRight: "auto",
          marginTop: "30px",
          marginLeft: "auto",
          paddingBottom: "30px",
          width: "80%",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        <Grid item md={6} xs={12}>
          <div className=" Outer-div">
            <div className="title-li">
              <div className="title">
                <p>Champagne </p>
                <p className = "blue">$60</p>

              </div>
              <div className="info">
                <ui>
                  <li>750 ml bottle of champagne</li>
                  <li>Includes 2 champagne flutes per bottle</li>
                  <li>Presented privately inside the vehicle</li>
                  <li>Served on arrival or departure – your choice</li>
                </ui>
              </div>

              <div className="counter">
                <div className="inner-counter-div">
                  {shampaingQue === 0 ? null : (
                    <div className="counterbtn">
                      <button onClick={decrese1}>-</button>
                    </div>
                  )}

                  <div className="countertext">
                    <p>{shampaingQue}</p>
                  </div>

                  <div className="counterbtn">
                    <button onClick={increase1}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <img
                alt="hlo"
                src="https://blog.haskells.com/hubfs/AdobeStock_59821582-1.jpeg"
              ></img>
              <div className=" select">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Serve
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={shampOptions}
                    onChange={handleChangeForshamp}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"on arival"}>On Arival</MenuItem>
                    <MenuItem value={"on diapture"}>On Dipature</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className=" Outer-div">
            <div className="title-li">
              <div className="title">
                <p>Flower Bouquet</p>
                <p className = "blue">{flowerAccprice === 0?"$30-$60":`$${flowerAccprice}`}</p>
              </div>
              <div className="info">
                <ui>
                  <li>Beautiful hand prepared flower bouquet</li>

                  <li>Presented privately inside the vehicle</li>
                  <li>Available in 3 sizes (Small, Medium & Large)</li>
                  <li>Email us if you need to add a special note</li>
                </ui>
              </div>

              <div className="counter">
                <div className="inner-counter-div">
                  {flowersQue === 0 ? null : (
                    <div className="counterbtn">
                      <button onClick={decrese2}>-</button>
                    </div>
                  )}

                  <div className="countertext">
                    <p>{flowersQue}</p>
                  </div>

                  <div className="counterbtn">
                    <button onClick={increase2}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <img
                alt="hlo"
                src="https://lh3.googleusercontent.com/proxy/swkPGdLPyUVD8Yjc9gNfQMepyLNuHBNlpjyeNYcbkW1KQoMKzhc0O4VvEP6IzFst0CWeVuieiTIO5kfPe6W0F6aMy5LqFiO_Mo2XwVJk=s0-d"
              ></img>
              <div className=" select">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Serve
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={floweOptions}
                    onChange={handleChangeForflower}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"small"}>small</MenuItem>
                    <MenuItem value={"medium"}>medium</MenuItem>
                    <MenuItem value={"large"}>large</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className=" Outer-div">
            <div className="title-li">
              <div className="title">
                <p>Red Stripe Beer – 4pk</p>
                <p className = "blue">$16</p>
              </div>
              <div className="info">
                <ui>
                  <li>Ice cold Red Stripe beers (4pk)</li>

                  <li>Glass bottled original Jamaican Red Stripe</li>
                  <li>Presented privately inside the vehicle</li>
                  <li>Served on arrival or departure (your choice)</li>
                </ui>
              </div>

              <div className="counter">
                <div className="inner-counter-div">
                  {beerQue === 0 ? null : (
                    <div className="counterbtn">
                      <button onClick={decrese3}>-</button>
                    </div>
                  )}

                  <div className="countertext">
                    <p>{beerQue}</p>
                  </div>

                  <div className="counterbtn">
                    <button onClick={increase3}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <img
                alt="hlo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ-q6WiCSa2pVnoyhhjNWdK7FIUkqJWhhqA&usqp=CAU"
              ></img>
              <div className=" select">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Serve
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={beerOptions}
                    onChange={handleChangeForbeer}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"On arival"}>on arival</MenuItem>
                    <MenuItem value={"On Dipature"}>On Dipature</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className=" Outer-div">
            <div className="title-li">
              <div className="title">
                <p>VIP Pass – Club & Airport</p>
                <p className = "blue">$25-$86</p>
              </div>
              <div className="info">
                <ui>
                  <li>You are greet in the VIP area by airport staff</li>

                  <li>Fast-track through Immigration & Customs</li>
                  <li>Assistance with retrieving your luggage</li>
                  <li>Assistance with your airport transfer</li>
                  <li>Access to VIP lounge</li>
                  <li>Complimentary snacks and beverages</li>
                  <li>Access to VIP lounge</li>
                </ui>
              </div>

              <div className="counter">
                <div className="inner-counter-div">
                  {vippassQue === 0 ? null : (
                    <div className="counterbtn">
                      <button onClick={decrese4}>-</button>
                    </div>
                  )}

                  <div className="countertext">
                    <p>{vippassQue}</p>
                  </div>

                  <div className="counterbtn">
                    <button onClick={increase4}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <img
                alt="hlo"
                src="data:image/jpeg;base64,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"
              ></img>
              <div className=" select vipotios">
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Person
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={vipOptions}
                    onChange={setvippassangersFunc}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Adult"}>Adult</MenuItem>
                    <MenuItem value={"Child"}>Child</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Airport
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={vipOptions}
                    onChange={setvipAirportFunc}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Kingston"}>Kingston Airport</MenuItem>
                    <MenuItem value={"Montego bay airport"}>Montego bay airport</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Ticket
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    //   open={open}

                    value={vipOptions}
                    onChange={setvipdesFunc}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"arival"}>Arival</MenuItem>
                    <MenuItem value={"diapture"}>Dipature</MenuItem>
                    <MenuItem value={"arival and diapture"}>Arival and Dipature</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cardsss;
