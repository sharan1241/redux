import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setemail,setusername } from "../store/authslice";
import { useSelector } from 'react-redux'
import '../styles/note.css'

import '../styles/mainbar.css'
function Auth(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emaill,setEmaill] = useState("")
    const [usernamee,setusernamee] = useState("")
    const email = useSelector((state)=>state.email)
    const username = useSelector((state)=>state.username)
  

    const Handleclick = ()=>{
        dispatch(setemail(emaill))
        dispatch(setusername(usernamee))
        navigate("/redux/")
    }
    return(
        <div id="main">
            <input id="title" type="text" placeholder="title" onChange={(e)=>setusernamee(e.target.value)}/>
            <input id="take" type="text" placeholder="take a note" onChange={(e)=>setEmaill(e.target.value)}/>
            <button onClick={Handleclick}>add</button>
            <div id='note'>
                <div id='one'>
                <div id='state1'>{username}</div>
                <div id='state2'>{email}</div>
            </div>
    </div>
        </div>
    )
}
export default Auth