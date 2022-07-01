// MVC -> Model - View - Controller
import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import migra from "../assets/csv/API_SM.POP.NETM_DS2_es_csv_v2_4169069.csv";
import fondo from "../assets/img/6E164A4F-9138-4222-841E-BDC7ED815A5C.JPG";

import * as d3 from "d3";

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    colors={data.map(d => d.color)}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    lineWidth={3}
    pointSize={0}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

const Home = () => {
  const [datamx, setDatamx] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // lectura

      const data = await d3.csv(migra);

      // console.log({ data });

      // filtrar
      // mx = data['Country Code' == "MEX"]
      // mx -> data %>% filter(`COUNTRY CODE` = "MEX")

      const mx = data.filter(d => d["Country Code"] === "MEX");

      //console.log({ mx });

      // colnames(mx)
      // console.log(Object.keys(mx));
      // console.log(Object.keys(mx[0]));

      // data %>% mutate(total = total*100)

      const years = await Object.keys(mx[0])
        .filter(column => !isNaN(Number(column)))
        .map(column => ({
          x: column,
          y: Number(mx[0][column] ? mx[0][column] : 0),
        }));

      const _datamx = [
        {
          id: mx[0]["Country Code"],
          color: "#ff0000",
          data: years,
        },
      ];

      console.log(_datamx);

      setDatamx(_datamx);
      /*

        1. Obtengo columnas de la observación
        2. Ciclo sobre las columnas
        3. Con el nombre de cada columna leo y selecciono de la base de datos
        4. Creo un nuevo objecto con cada una de las columnas

        {1960: 23},
        {1961: 50},
      */
    }
    fetchData();
  }, []);

  return (
    <div data-theme="cupcake">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">México, ¿cómo vamos?</h1>
            <p className="mb-5">Con datos abiertos del banco mundial</p>
            <button className="btn bg-primary">Comenzar</button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[600px]">
          <MyResponsiveLine data={datamx ? datamx : []} />
        </div>
      </div>
    </div>
  );
};

export default Home;
