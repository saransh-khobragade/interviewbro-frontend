import React,{ useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../app'

export default function BlogList(props) {
  
  const blogList = useContext(Context);
  
  return (
    <table>
      <tbody>
        {
          blogList.map(x=>{
            return <tr key={x.blogId}>
            <td><Link to={x.blogId}>{x.blogTitle}</Link></td>
          </tr>
          })
        }
      </tbody>
    </table>
  );
}