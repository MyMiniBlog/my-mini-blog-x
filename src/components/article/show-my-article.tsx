import React from 'react';
import { myArticleProps } from './model';

function ShowMyArticle(props:myArticleProps) {
    return (
      <div id="showMyArticle" style={
        {
          display:"block"
        }
      }>
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
      </div>
    );
   }
   
   export default ShowMyArticle;
   