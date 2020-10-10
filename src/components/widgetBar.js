import React from 'react';
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const widgetBar  = (props) => {
        
    const chartConfigs = {
        type: "bar2d",
        width: "100%",
        height: "125",
        
        dataFormat: "json",
        dataSource: {
       
        chart: {
            numberSuffix: "K",
            bgColor: "#2a2a2a", 
            theme: "fusion"               
        },
       
        data: props.data
        }
    };
    return ( 
        <div className="widgetwrap">
        <div className="widgetTitle">
            {props.title}
        </div>
        <div className="widgetValue">
            <ReactFC {...chartConfigs} />
        </div>
        </div>
     );
}
 
export default widgetBar ;