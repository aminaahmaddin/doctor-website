import React from 'react'

function Home() {
  return (
    <div>
      <h1>THIS IS MENU PAGE</h1>
    </div>
  )
}

export default Home
















// import React from 'react'
// import { Button, Modal} from '@material-ui/core'
// import { makeStyles } from '@material-ui/core';
// // import { Input } from '@material-ui/core';

// import {useState} from 'react'
// // import { ArchiveBoxArrowDownIcon } from '@heroicons/react/16/solid'

// function getModalStyle(){
//   return{
    
//      top:'50%',
//      left:'50%',
//      transform:'translate(-50%, -50%)'
//     }
  
// }
// const useStyle = makeStyles((theme)=>({
//   paper:{
//     position:"absolute",
//     width :400,
//     backgroundColor :theme.palette.background.paper,
//     border:"2px solid #000"
//     // boxShadow: theme.shadows[5],
//     // padding: theme,spacing(2 , 4 ,3),
//   },

// }))
// function Home() {
//   const classes = useStyle()
//   const[modalStyle]=useStyle(getModalStyle)
//   const [openSignup, setOpenSignup]=useState(false)
//   // const [openSignin, setOpenSignin] = useState(false);
//   const [userName, setUserName]=useState('')
//   const [email, setEmail]=useState('')
//   const [password, setPassword]=useState('')
//     return (
//     <div>
//       <Modal open={openSignup} onClose={()=>{
//         setOpenSignup(false)
//       }}>
//         <div style={modalStyle} className={classes.paper}>
//           <form className='app_signin'>
//             <center>
//                <img className='app_headerImage'
//          src={'https://1000logos.net/wp-content/uploads/2017/02/Instagram-app-logo.jpg'}
//          alt='instagram'
//          height={150}
//          width={50}
//          />
//             </center>
//             <input type="text" placeholder="Name"
//             value={userName}
//             onChange={(e)=>{
//               setUserName(e.target.value)
//             }} />
//             <input type="email" placeholder="Email"
//               value={email}
//             onChange={(e)=>{
//               setEmail(e.target.value)
//             }} />
//             <input type="password" placeholder="Password"
//               value={password}
//             onChange={(e)=>{
//               setPassword(e.target.value)
//             }} />
//           </form>
//         </div>
//       </Modal>
//       <div className='app_header'>
//         <img className='app_headerImage'
//          src={'https://1000logos.net/wp-content/uploads/2017/02/Instagram-app-logo.jpg'}
//          alt='instagram'
//          height={180}
//          width={80}/>
//          <div>
//           <Button varient='contained' style={{backgroundColor:'lightblue'}} 
//           >sign in</Button>
//           <span> &nbsp;&nbsp;</span>
//           <Button varient='contained' style={{backgroundColor:'lightblue'}}>sign out</Button>
//          </div>
//       </div>
//     </div>
//   )
// }

// export default Home
