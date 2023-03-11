import React,{ useContext } from 'react';
import { Link,useParams } from "react-router-dom";
import { Context } from '../app'

export default function BlogList(props) {
  
  let blogList = useContext(Context);
  const { category } = useParams();

  blogList = blogList.filter(x=>{
    if(x.blogCategory===category){
      return true
    }else{
      return false
    }
  })
  
  return (
    <table>
      <tbody>
        {
          blogList.map((x,i)=>{
            return <tr key={i}>
            <td><Link to={`../../blog/${x.blogId}`} relative="path">{x.blogTitle}</Link></td>
          </tr>
          })
        }
      </tbody>
    </table>
  );
}