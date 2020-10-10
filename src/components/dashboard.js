import React,{ Component } from 'react'
import './dashboard.css';
import WidgetBar from './widgetBar';
import WidgetText from './widgetText';

class Dashboard extends Component {
    
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
        </div> 
        );
    }
}
 
export default Dashboard;