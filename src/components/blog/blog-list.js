import React from 'react';
import { Link } from "react-router-dom";

export default function BlogList(props) {

  return (
    <table>
      
      <tbody>
        <tr>
          <td><Link to={`what-is-javascript`}>what is javascript</Link></td>
        </tr>
        <tr>
        <td><Link to={`what-is-javascript`}>what is javascript</Link></td>
        </tr>
        <tr>
        <td><Link to={`what-is-javascript`}>what is javascript</Link></td>
        </tr>
        <tr>
        <td><Link to={`what-is-javascript`}>what is javascript</Link></td>
        </tr>
        <tr>
        <td><Link to={`what-is-javascript`}>what is javascript</Link></td>
        </tr>
      </tbody>
    </table>
  );
}