import React, { useState } from 'react';
import "./middle.css";
import AddIcon from '@mui/icons-material/Add';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { newadd } from './features/users';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


const Middle = () => {
  const user = useSelector(state => state.user.currentTask)
  const dispatch = useDispatch()
  //console.log(user[0]===undefined)
  var mm=["manju","gopi","esai","varshini","jayam","swamy"]
  const [open,setopen]=useState(false)
  const [add,setadd]=useState(false)
  const [des,setdes]=useState("")
  const [date,setdate]=useState("")
  const [time,settime]=useState("")
  const [selection,setselect]=useState("")
  const [final,setfinal]=useState(false)
  const [ii,seti]=useState("")
  


  const save=async()=>{
    //console.log(des,date,time,selection)
     //await setfinal({des,date,time,selection})
    // console.log(final)
    if(!final){
     if(user[0]===undefined)
     {
      await dispatch(newadd([{des,date,time,selection}]))

     }
     else{
      await dispatch(newadd([...user,{des,date,time,selection}]))
     }}
     else{
      console.log(typeof(+ii))
      var edits=[...user]
      edits.splice([+ii],1,{des,date,time,selection});
      dispatch(newadd([...edits]))
      await setfinal(false)
      await seti("")
     }
    setdes("")
    setdate("")
    settime("")
    setselect("")
 
  }
  var openedit=(i)=>{
    seti(i)
    setadd(add? false :true)
    setfinal(i>=0 ? true :false)
    var mmm=user[i]
    setdes(mmm.des)
    setdate(mmm.date)
    settime(mmm.time)
    setselect(mmm.selection)

    //console.log(mmm)

  }
  var dell=async()=>{
     console.log(+ii)
     var arr=[...user]
     arr.splice(+ii,1)
     dispatch(newadd([...arr]))
     await setfinal(false)
     await seti("")

  }

  var select=(e)=>{
     setselect(e)
  }
  var canc=async()=>{
    await setfinal(false)
    await seti("")
    setdes("")
    setdate("")
    settime("")
    setselect("")

  }


  return (
    <div>
       <div className='search'>
           <input className='sear' type="text" placeholder='search here'/>
       </div>
       <div className='container'>
       <div className='mains'>
         <div className='head'>
           <div>TASKS {user.length}</div>
            <div className='addicon'><AddIcon onClick={()=>setadd(add? false :true)}/></div>
         </div>
         {add &&
          <div className='body'>
             <div>
               <div>Task Description</div>
                <div><input type="text" className='tex' value={des} onChange={(e)=>{setdes(e.target.value)}}/></div>
             </div>
            <div className='ds'>
              <div className='dat'>
                 <div>Date</div>
                 <div ><input className='da' type="date" value={date} onChange={(e)=>{setdate(e.target.value)}}/></div>
              </div>
              <div className='tim'>
                 <div>Time</div>
                 <div ><input className='ti' type="time" value={time} placeholder='Time' onChange={(e)=>{settime(e.target.value)}}/></div>
              </div>
            </div>
            <div>
                <div>Assing User</div>
                  <div onClick={()=>setopen(open ? false :true)} className='selection'>
                    <div className='se' >{selection}</div>
                    <UnfoldMoreIcon/>
                   </div>
                   {open && <div className='itrate'>{ 
                    mm.map((m,i)=>{return (
                   <div className='map' onClick={()=>select(m)}>{m}</div>
                     )})
                  }
                </div>
                }
            </div>
            
            <div className='cs'>
            <div>
                 { final && <div className='del'>
                <DeleteIcon onClick={dell}/>
                 </div>}
            </div>
            <div className='butt'>
                <button className='cancel' onClick={canc}>Cancel</button>
                <button className='save' onClick={save}>Save</button>
            </div>
            </div>
         </div>}
         {user.length>0 && 
           <div> 
            {
              user.map((m,i)=>{
                return ( 
                <div className='tasks'  > 
                  <div className='account'>
                      <AccountCircleIcon className='avatar'/>
                      <div className='follow'>
                         <spam className="spam">
                           {m.des}
                         </spam>
                         <spam className="spam red">
                          {m.date}
                         </spam>
                     </div>
                  </div>
                  <div className='icons'>
                    <ModeEditIcon className='i' onClick={()=>openedit(i)}/>
                    <NotificationsPausedIcon className='i'/>
                    <DoneIcon className='i'/>
                  </div>
                </div>)
                
              })
            }
          </div>
         }
        
       </div>


       </div>
       
    </div>
 

  )
}

export default Middle