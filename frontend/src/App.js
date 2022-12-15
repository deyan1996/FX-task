import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import UserTable from "components/UserTable";
import users from "./instruments.json";

function fetchData() {
  // return users;
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8000/getAllPrices")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => console.log(err));
  });
}

function App() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const data = await fetchData();
      const newPrices = { ...currencies };
      data.forEach((element) => {
        newPrices[element.instrument] = element;
      });
      setCurrencies(newPrices);
      console.log("called");
    }, 2000);

    return () => {
      console.log("cleared");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Grid container spacing={2} margin={3}>
        <Grid item xs={12}>
          <UserTable data={currencies} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
