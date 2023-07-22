import React from 'react'
const one ="Moses"
const two1=50;
const two2=30;
const two3=59;
const two4=70;
const two5=55;
const twott=two1+two2+two3+two4+two5;


function Table() {
  return (
    <div>
        <table border="1px" width="33%">
            <tr>
                <th>{one}</th>
                <td id='one'>{two1}</td>
                <td id='tw'>{two2}</td>
                <td id='th'>{two3}</td>
                <td id='fo'>{two4}</td>
                <td id='fv'>{twott}</td>
            </tr>
        </table>
    </div>
  )
}

export default Table