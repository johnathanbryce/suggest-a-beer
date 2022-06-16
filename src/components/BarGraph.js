import React, { useState, useEffect } from "react";
import classes from "./BarGraph.module.css";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  LabelList,
  XAxis,
  Label,
} from "recharts";

function BarGraph({ graphData }) {
  // dynamic abv & ibu numbers
  let abv = graphData.abv;
  let ibu = graphData.ibu;

  // display the abv and ibu names + number amount passed from BeerCard.js
  let beerData = [
    {
      name: "ABV",
      uv: abv,
    },
    {
      name: "IBU",
      pv: ibu,
    },
  ];

  return (
    <div className={classes.graph_container}>
      <ResponsiveContainer width={200} height="100%">
        <BarChart
          width={700}
          height={300}
          data={beerData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />

          <Bar dataKey="uv" fill="#8884d8">
            <LabelList dataKey="uv" position="insideTop" offset={15} />
          </Bar>

          <Bar dataKey="pv" fill="#FFA500">
            <LabelList dataKey="pv" position="insideTop" offset={15} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarGraph;
