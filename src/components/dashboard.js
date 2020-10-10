import React,{ Component } from 'react'
import './dashboard.css';
import WidgetBar from './widgetBar';
import WidgetDoughnut from './widgetDoughnut';
import WidgetText from './widgetText';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const config = {
    apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
    spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId
    }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;


class Dashboard extends Component {
    
    constructor(){
        super();
        this.state ={
            items: [],
            dropdownOptions: [],
            selectedValue: null,
        }
    }

    getData = arg =>{

    }

    updateDashboard(){

    }
    componentDidMount(){
        fetch(url)
        .then(response => response.json())
        .then(data => {
           let batchRowValue = data.valueRanges[0].values;
           const rows = [];
           for(let i=1; i < batchRowValue.length; i++){
                let rowObject = {};
                for(let j=0; j<batchRowValue[i].length; j++){
                   rowObject[batchRowValue[0][j]] = batchRowValue[i][j];
                   rows.push(rowObject);
                }

                let dropdownOptions = [];
                for(let i=0; i<rows.length; i++){
                   dropdownOptions.push(rows[i].month);
                }

                dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
                this.setState({
                    items: rows,
                    dropdownOptions: dropdownOptions,
                    selectedValue: "Jan 2018"
                }, () => this.getData("Jan 2018"));

           } 
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

        const options = [
            'one', 'two', 'three'
          ];

        const defaultOption = options[0];

        return (
         <div>
             <Dropdown options={this.state.dropdownOptions} onChange={this.updateDashboard} value={this.state.selectedValue} placeholder="Select an option" />;
             <WidgetText title="Title" value="190" descr="Very good" />
             <WidgetBar title="WidgetBar" data={chartData}/>
             <WidgetDoughnut title="widgetDoughnut" data={chartData}/>
        </div> 
        );
    }
}
 
export default Dashboard;