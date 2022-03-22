import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
   Grid, Drawer, Link, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.module.scss';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


export default function Navbar(){
  
  
  const [width, setWidth] = useState(0);
  const [drawerActivate, setDrawerActivate] =useState(false);
  const [drawer, setDrawer] = useState(false);
  const [focus,setFocus] = useState(false)
  
  
  const StyledNavBar =styled(AppBar)`
  background-color:transparent;
  position:absolute;
  ` 

  const StyledButton = styled(Button)`
  border: 1px solid #1976d2;
  
  `
  const StyledLink = styled(Link)`
      root:{color: #2c2c2c;
      transform:1s background-color;

      :hover{  
          color: #42f934,
          text-decoration:none, 
        } 
      }    
      `;


  
    return(
      <div>
        
        <div>
        <StyledNavBar className= "navbarcolor">
          <Toolbar>
     
            <Grid container  direction = "row" justifyContent="space-between" alignItems="center">
              <Grid  item lg={2} md={0} >
              <div className='drawerButton'>
              <MenuIcon
                className = "sideBarIcon"
                onClick={()=>setDrawer(true)}
                color="primary"
              />
              <Typography color="#1976d2">MENU</Typography>
                </div>
              </Grid>
            
              <Grid item lg={2} md={0}>
              <form className="com-search" >
                
                <input type="text"  
                onFocus={()=>setFocus(true)}
                onBlur={()=>setFocus(false)} 
                className="com-search__input" placeholder="Buscar"/>
                <SearchIcon color="primary"/>
              </form>             
     </Grid>
              
              <Grid item lg={3} sm={3}>
                  <div className="logoContainer">
                     <div>
                     <Image src="/logolaNacion.png" layout="fill" alt="logo" ></Image>
                     </div>
                  </div>
              </Grid>
              
              <Grid item lg={4} sm={4}>
                 <div className="navButton" >
                   <Grid container direction="row">

                <Grid item md={12} lg={6}><StyledButton className="suscribeButton">SUSCRIBITE</StyledButton></Grid>
                <Grid item md={0} lg={6}><StyledButton className="signButton">INGRESAR</StyledButton></Grid>
                  </Grid>
                </div>
              </Grid>
              
            </Grid>
          </Toolbar>
        </StyledNavBar>

        <Drawer
         open={drawer}
         onClose={()=>setDrawer(false)}
         onOpen={()=>setDrawer(true)}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>setDrawer(false)}
             onKeyDown={()=>setDrawer(true)}>

            <List className = "list">
               <ListItem key = {1} button divider> <StyledLink href="/">HOME</StyledLink  ></ListItem>
            </List>

         </div>
       </Drawer>

      </div>
        
         <style jsx>
      {`
      
      .logoContainer{
        position: relative;
        height:40px;       
      }
      .com-search{
        display:flex;
        flex-direction:row;
        height:36px;
      }
      .com-search__input{
        border-radius:3px;
        width:200px;
        transition: width 0.5s;
        

      }
      .com-search__input:focus{
        width:500px;
        transition:width 0.5s;
      }
      .drawerButton{
        display:flex;
        flex-direction:row;
      }
      .list{
      width : 200;
      color: red;
      height:auto;
    }
    .listItem{
      color:red;
    }
    .padding{
      padding-right :8;
      cursor : pointer;
    }
    .navButton{
      display: flex;
      flex-direction:row;
      justify-content:space-around;
    }
    .sideBarIcon{
      padding : 0px;
      color : red;
      cursor : pointer;
      z-index:20;
    }

    @media (max-width: 1200px) {
                        
        .signButton{
          display:none;
        }
        .com-search{
          display:none;
        }
        .drawerButton{
          display:none
        }
    }
  
      `}    
        </style>


      </div>
    );
  
}
