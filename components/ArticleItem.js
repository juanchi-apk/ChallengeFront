import Image from "next/image";
import React, { useEffect } from "react";
import {Grid} from "@mui/material"


export default function ArticleItem({articleData}){

  console.log(articleData)
    return(
    
      <article className="card">
      <Grid container direction="column" >
      
      <Grid item xs={6}>
      <div className="face">
              <div className="imagecontainer">
              <Image layout="fill"  src={articleData.promo_items.basic.url}/>
              </div>
          
      </div>
      </Grid>
      <Grid item xs={6}>
      <Grid container columns={12} direction="column">
        <Grid item xs={2}>
        <div className="tagList">
          {
            (articleData.taxonomy.tags.length>0)&&(articleData.taxonomy.tags.map((tag,index)=>{
              return (
                <div key={index} className="tagButton">
                  <p>{tag.text}   //</p>
                    
                </div>
              )
            }))
            
            
          }
        </div>
        </Grid>
        <Grid xs="auto">
        <h1 >{articleData.headlines.basic}</h1>
        </Grid>
        <Grid item xs={1}>
        <p>{articleData.display_date}</p>
        </Grid>
      
      </Grid>
      </Grid>
      <style jsx>
      {`
           .card{
              cursor: pointer;
            }
              
              .face{
              position: relative;
              min-height:220px;               
           }            
          .tagList{
            display:flex;
            flex-flow: row wrap;
            
          }
          .tagButton{
            font-size:10px;
            font-weight:600;
            padding-left:3px;
            padding-right:3px;
          }
          .tagButton p{
            color:rgb(41, 113, 246)
          }
            .articleDescription{
              min-height:200px;               
              display:flex;
              flex-direction:column;
              
              justify-content: space-between;
            }  
            .articleDescription>h1{

             
              }
              

      `}    
      </style>
      </Grid>
      </article>

    )


}

