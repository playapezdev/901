import React from "react";
import styled from "styled-components";
import Logo from "./Img/Logo.svg"
import cart from "./Img/cart.svg"
import profile from "./Img/profile.svg"
import { Link } from "react-router-dom"

function BProd (){
    return(
        <div>
            <Table>
                <tr>
                    <th>
                        <img src={Logo} alt=""/>
                    </th>
                    <th>
                        <Button>Conocenos</Button>
                    </th>
                    <th>
                        <Button>Productos</Button>
                    </th>
                    <th>
                        <Button>Contactanos</Button>
                    </th>
                    <th>
                        <Link to="/MisProduccion"><Button>Mis Producciones</Button></Link>
                    </th>
                    <th>
                        <img src={profile} alt=""/>
                    </th>
                    <th>
                        <Img src={cart} alt=""/>
                    </th>
                </tr>
            </Table>
        </div>
    )
}
export default BProd;

const Table = styled.table `
margin-left:-16px;
margin-top:-5px;
`;

const Button = styled.button `
    padding: 1em 4.5em;
    margin-left:35px;
    margin-right:35px;
    margin-top:5px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color:  #fff;
    background-color: #E34E31;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    &:hover{
    background-color:  #CE472D;
    box-shadow: 0px 15px 20px rgba(423, 114, 78, 0.8);
    color: #F3F2F2;
    transform: translateY(-7px);
    }
    &:active{
        transform: translateY(-1px);
    }
`;
const Img = styled.img `
margin-left:15px;
`;
