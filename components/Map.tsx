import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import mapboxgl, { FeatureIdentifier, MapboxOptions } from "mapbox-gl";
import { Route } from "@/pages/route";

type MapProps = {
  currentRoute: Route;
};

function Map(props: MapProps) {
  const { currentRoute } = props;

  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoicGFhbHNhIiwiYSI6ImNsZHN6ZHcxczB6Zmszb3A5M3lxMGQ3cnAifQ.fiTw7yyYByjiDYocSWDpBQ";

    const center = currentRoute.positions[Math.round(currentRoute.positions.length/2)];

    const options: MapboxOptions = {
      container: "mapboxgl",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [center.long, center.lat],
      zoom: 7
    };

    const geojson: any = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: currentRoute.positions.map(p => [p.long, p.lat]),
      },
    };

    map.current = new mapboxgl.Map(options);
    map.current.on("load", (e) => {
      console.log("layer", e);
      const layer = e.target.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
      console.log('layer', layer);
    });
  }, []);

  return <div className="flex-grow w-[100%]" id="mapboxgl"></div>;
}

export default Map;
