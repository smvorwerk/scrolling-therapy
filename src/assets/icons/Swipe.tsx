import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  const { fill = "#45EC9F" } = props;
  return (
    <Svg
      id="icon_swipe_no_face"
      data-name="icon_swipe_no face"
      width="47.178"
      height="49"
      viewBox="0 0 47.178 49"
      {...props}>
      <Path
        id="Path_261"
        data-name="Path 261"
        d="M4.157,18.585.449,14.911A1.265,1.265,0,0,1,0,14.021a1.316,1.316,0,0,1,.464-.912L1.62,11.961Q2.81,10.776,4.01,9.6a7.113,7.113,0,0,1,.6-.5l.3-.238h.611l.167.127a1.3,1.3,0,0,1,.606.874,1.469,1.469,0,0,1-.568,1.109L3.777,12.9l.076,0c.145.009.253.016.358.016l8.728,0a4.016,4.016,0,0,1,.652.043,1.059,1.059,0,0,1,.076,2.074,3.166,3.166,0,0,1-.7.07l-9.216.014.545.535q.7.682,1.394,1.368c.862.852.63,1.454.282,1.807a.984.984,0,0,1-.714.323,1.639,1.639,0,0,1-1.107-.572M47.034,36.522a12.612,12.612,0,0,1-6.112,10.283A13.452,13.452,0,0,1,33.315,49c-1.837-.007-3.519-.01-5.249,0h-.084a11.245,11.245,0,0,1-8.294-3.445l-3.441-3.427c-4.2-4.181-8.953-8.92-13.593-13.479a4.128,4.128,0,0,1-1.32-3.432,4.128,4.128,0,0,1,2.209-3.029,6.467,6.467,0,0,1,7.471.4c.807.573,1.614,1.181,2.395,1.769l1.145.86c.1.075.206.147.338.238l.119.083V5.423a5.726,5.726,0,0,1,.713-2.984A5.054,5.054,0,0,1,20.046,0a4.732,4.732,0,0,1,1.066.121,4.854,4.854,0,0,1,3.835,4.391C25,6.343,25,8.243,25,9.92c0,.777,0,1.552,0,2.329v.5a11.152,11.152,0,0,1,2.807-.469c1.9,0,2.936,1.042,4.282,3.093a9.342,9.342,0,0,1,3.07-.633c1.84,0,3.153.933,4.251,3.025.211-.063.416-.133.618-.2a6.82,6.82,0,0,1,1.586-.41,4.848,4.848,0,0,1,5.517,5l.014,1.446c.04,4.25.081,8.631-.11,12.929M29.78,19.544c0-.614,0-1.178,0-2.234a2.389,2.389,0,1,0-4.769.065c-.012,1.092-.01,1.594-.008,2.217,0,.446,0,.9,0,1.592a4.216,4.216,0,0,1-.045.722,1.222,1.222,0,0,1-1.138,1.007l-.114,0a1.2,1.2,0,0,1-1.2-.854,3.223,3.223,0,0,1-.1-.884c0-4.532,0-8.065,0-12.163V5.339c0-.191,0-.385-.012-.585a2.377,2.377,0,0,0-4.737.419q-.006,3.955,0,7.911V18.5l0,9.17a3.794,3.794,0,0,1-.042.668,1.294,1.294,0,0,1-1.955.9,5.11,5.11,0,0,1-.515-.357l-2.061-1.539q-1.788-1.335-3.582-2.665a4.311,4.311,0,0,0-2.556-.9,3.775,3.775,0,0,0-2.4.874,1.46,1.46,0,0,0-.635,1,1.474,1.474,0,0,0,.541,1.07L21.658,43.837a8.675,8.675,0,0,0,6.3,2.578c1.8.006,3.609.013,5.412,0A11.034,11.034,0,0,0,44.527,35.147c.012-3.12.008-6.292.006-9.359l0-3.315a6.265,6.265,0,0,0-.032-.65,2.343,2.343,0,0,0-2.364-2.129h-.081A2.192,2.192,0,0,0,39.81,21.4l-.036.121a.357.357,0,0,0-.018.1A1.282,1.282,0,0,1,38.277,22.9a1.257,1.257,0,0,1-1.106-1.343c-.009-.576-.008-.735-.006-.9s0-.326,0-.881A2.409,2.409,0,0,0,35.6,17.4a2.49,2.49,0,0,0-.853-.154,2.421,2.421,0,0,0-2.365,2.44c-.017.6-.013.776-.01.958s.006.365-.005.93a1.294,1.294,0,0,1-1.593,1.317,1.333,1.333,0,0,1-1-1.44c0-.864,0-1.4,0-1.9"
        fill={fill}
      />
    </Svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
