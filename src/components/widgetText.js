import React, { Component } from 'react';

const WidgetText = (props) => {
    return (  
        <div className="widgetwrap">
            <div className="widgetTitle">
                {props.title}
            </div>
            <div className="widgetValue">
                <div className="value">{props.value}</div>
                <div className="descr">{props.descr}</div>
            </div>
         </div>
    );
}
 
export default WidgetText ;