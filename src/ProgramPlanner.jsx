import React from "react";
import './ProgramPlanner.css'

export default class ProgramPlanner extends React.Component {
    render(){
        return(
            <div className="table-container">
                <h1>Program Planner</h1>
                <table>
                    <tr>
                        <th colSpan="4">Semester 1</th>
                        <th colSpan="4">Semester 2</th>
                    </tr>

                    <tr>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <td className="blank"></td>
                        <td className="blank"></td>

                        <td>SENG1120</td>
                        <td>SENG1110</td>
                        <td>SENG1050</td>
                        <td>MNGT1002</td>
                    
                    </tr>
                    
                    <tr>
                        <td>SENG2200</td>
                        <td>SENG2130</td>
                        <td>MATH1002</td>
                        <td>COMP1010</td>

                        <td>COMP1140</td>
                        <td>MATH1110</td>
                        <td>MATH1510</td>
                        <td>COMP2240</td>
                    </tr>

                    <tr>
                        <td>COMP2270</td>
                        <td>SENG2050</td>
                        <td>SENG3320</td>
                        <td>INFT3100</td>

                        <td>COMP2230</td>
                        <td>SENG2250</td>
                        <td>SENG2260</td>
                        <td>INFT3960</td>
                    </tr>

                    <tr>
                        <td className="double" colSpan="2">COMP3851a</td>
                        <td>INFT3800</td>
                        <td>COMP3260</td>

                        <td className="double" colSpan="2">COMP3851b</td>
                        <td>SENG4500</td>
                    </tr>
                </table>
            </div>
        );
    }
};
