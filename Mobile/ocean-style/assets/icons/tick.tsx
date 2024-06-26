import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function Tick(props: {
  color: string;
  width: number;
  height: number;
}) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24">
      <G
        id="Iconly/Light-Outline/Tick-Square"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="Tick-Square"
          transform="translate(2.000000, 2.000000)"
          fill={props.color}
        >
          <Path
            d="M14.334,0 C17.723,0 20,2.378 20,5.916 L20,14.084 C20,17.622 17.723,20 14.333,20 L5.665,20 C2.276,20 0,17.622 0,14.084 L0,5.916 C0,2.378 2.276,0 5.665,0 L14.334,0 Z M14.334,1.5 L5.665,1.5 C3.135,1.5 1.5,3.233 1.5,5.916 L1.5,14.084 C1.5,16.767 3.135,18.5 5.665,18.5 L14.333,18.5 C16.864,18.5 18.5,16.767 18.5,14.084 L18.5,5.916 C18.5,3.233 16.864,1.5 14.334,1.5 Z M14.0895,7.097 C14.3825,7.39 14.3825,7.864 14.0895,8.157 L9.3435,12.903 C9.1975,13.05 9.0055,13.123 8.8135,13.123 C8.6225,13.123 8.4295,13.05 8.2835,12.903 L5.9095,10.53 C5.6165,10.237 5.6165,9.763 5.9095,9.47 C6.2025,9.177 6.6765,9.177 6.9695,9.47 L8.8135,11.312 L13.0295,7.097 C13.3225,6.804 13.7965,6.804 14.0895,7.097 Z"
            id="Combined-Shape"
          ></Path>
        </G>
      </G>
    </Svg>
  );
}
