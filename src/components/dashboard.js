import React,{ Component } from 'react'
import './dashboard.css';
import WidgetBar from './widgetBar';
import WidgetDoughnut from './widgetDoughnut';
import WidgetText from './widgetText';


const config = {
    apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
    spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId
    }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;


class Dashboard extends Component {
    
    constructor(){
        super();
    }

    componentDidMount(){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    render() { 
        // Preparing the chart data
        const chartData = [
            {
            label: "Venezuela",
            value: "290"
            },
            {
            label: "Saudi",
            value: "260"
            },
            {
            label: "Canada",
            value: "180"
            },
            {
            label: "Iran",
            value: "140"
            },
            {
            label: "Russia",
            value: "115"
            }
            
        ];
        return (
         <div>
             <WidgetText title="Title" value="190" descr="Very good" />
             <WidgetBar title="WidgetBar" data={chartData}/>
             <WidgetDoughnut title="widgetDoughnut" data={chartData}/>
        </div> 
        );
    }
}
 
export default Dashboard;