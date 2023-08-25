import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=60")
      .then(response => {
        setData(response.data.cases);
      })
      .catch(error => console.log(error));
  }, []);

  const lineChart =
    data.length > 0 ? (
      <Line
        data={{
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              label: "Cases",
              borderColor: "#3333ff",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return (
    <div>
      Covid 19 Cases  {lineChart}
    </div>
  );
};

export default LineGraph;
