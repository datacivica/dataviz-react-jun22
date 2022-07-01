// MVC -> Model - View - Controller
import { useState, useEffect } from "react";
import { ResponsiveStream } from "@nivo/stream";
import { ResponsiveLine } from "@nivo/line";
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

const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
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
    pointSize={10}
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

      const _datamx = await Object.keys(mx[0]).map(column => {
        const obj = {};

        obj[column] = mx[0][column];

        return obj;
      });

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
      <div className="max-w-4xl">
        <div className="w-full h-[600px]">
          {/* <MyResponsiveLine data={datamx ? datamx : []} /> */}
        </div>
        <div className="w-full h-[600px]">
          <MyResponsiveStream />
        </div>
      </div>
    </div>
  );
};

export default Home;
