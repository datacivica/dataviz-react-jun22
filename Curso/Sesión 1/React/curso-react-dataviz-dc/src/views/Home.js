// MVC -> Model - View - Controller
import { useEffect } from "react";
import { ResponsiveStream } from "@nivo/stream";
import migra from "../assets/csv/API_SM.POP.NETM_DS2_es_csv_v2_4169069.csv";
import fondo from "../assets/img/6E164A4F-9138-4222-841E-BDC7ED815A5C.JPG";

import * as d3 from "d3";

const MyResponsiveStream = () => {
  const data = [
    {
      Raoul: 38,
      Josiane: 122,
      Marcel: 69,
      René: 113,
      Paul: 196,
      Jacques: 126,
    },
    {
      Raoul: 56,
      Josiane: 81,
      Marcel: 10,
      René: 157,
      Paul: 10,
      Jacques: 23,
    },
    {
      Raoul: 84,
      Josiane: 24,
      Marcel: 119,
      René: 195,
      Paul: 107,
      Jacques: 59,
    },
    {
      Raoul: 164,
      Josiane: 20,
      Marcel: 123,
      René: 60,
      Paul: 99,
      Jacques: 103,
    },
    {
      Raoul: 86,
      Josiane: 33,
      Marcel: 50,
      René: 91,
      Paul: 69,
      Jacques: 76,
    },
    {
      Raoul: 199,
      Josiane: 180,
      Marcel: 176,
      René: 198,
      Paul: 84,
      Jacques: 76,
    },
    {
      Raoul: 34,
      Josiane: 114,
      Marcel: 160,
      René: 178,
      Paul: 46,
      Jacques: 162,
    },
    {
      Raoul: 188,
      Josiane: 62,
      Marcel: 195,
      René: 177,
      Paul: 96,
      Jacques: 43,
    },
    {
      Raoul: 48,
      Josiane: 181,
      Marcel: 118,
      René: 113,
      Paul: 18,
      Jacques: 108,
    },
  ];

  return (
    <ResponsiveStream
      data={data}
      keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
      }}
      enableGridX={true}
      enableGridY={false}
      offsetType="silhouette"
      colors={{ scheme: "nivo" }}
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#2c998f",
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: "squares",
          type: "patternSquares",
          background: "inherit",
          color: "#e4c912",
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: {
            id: "Paul",
          },
          id: "dots",
        },
        {
          match: {
            id: "Marcel",
          },
          id: "squares",
        },
      ]}
      dotSize={8}
      dotColor={{ from: "color" }}
      dotBorderWidth={2}
      dotBorderColor={{
        from: "color",
        modifiers: [["darker", 0.7]],
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
              },
            },
          ],
        },
      ]}
    />
  );
};

const Home = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await d3.csv(migra);

      console.log({ data });

      // filter
      // datamx = data['Country Code' == "MEX"]

      const datamx = data.filter(d => d["Country Code"] === "MEX");

      console.log({ datamx });

      console.log(Object.keys(datamx));
      console.log(Object.keys(datamx[0]));

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
  });

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
      <div className="max-w-4xl">
        <div className="w-full h-[600px]">
          <MyResponsiveStream />
        </div>
      </div>
    </div>
  );
};

export default Home;
