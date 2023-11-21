import { Box, Stack,TextField,Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react';
import { auth } from '../config/FirebaseConfig/Firebaseconfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




const Signup = () => {
  const [error,setError] =useState('')

  const navigate = useNavigate();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate('/')
      const uid = user.uid;
    } else {
      console.log("nouser")
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const setIsLoadingHandler=()=>{
        setIsLoading(prev=>!prev);
    }


    const signInHandler = () => {
      setIsLoadingHandler();
      signInWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        // Signed in 
      setIsLoadingHandler();

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setIsLoadingHandler();

        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode)
      });}

    const [input, setInput] = useState({});
    const inputHandler = (e) => {
        setInput(prev=>({
            ...prev,
            [e.target.id]:e.target.value
        })
        )
    }

    const submitHander = async( ) =>{
      setIsLoadingHandler();
        try{
          setIsLoadingHandler();
          const response = await createUserWithEmailAndPassword(auth, input.email,input.password);
    console.log(response.user);
        }catch(e){
            console.log(e)
        }
    }


  return (
    <Stack sx={{
        height: '100vh',
        background: 'rgb(91,152,217)',
        background: 'linear-gradient(180deg, rgba(91,152,217,1) 27%, rgba(155,212,134,1) 100%)'
    }} 
    justifyContent={'center'} 
    alignItems={'center'}>

        <Stack sx={{
            bgcolor: '#FFF',
            borderRadius: '10px',
            boxShadow: '0px 0px 20px #555'
        }}
        p={5}
        gap={2}
        >
            <Box>SignUp</Box>
            
            <Stack>
                <TextField label={'E-mail'} id='email' onChange={inputHandler} />
            </Stack>
            <Stack>
                <TextField label={'Password'} id='password' type='password' onChange={inputHandler}/>
            </Stack>
            <Stack>

            {error ? <div style={{color:'red'}}>{error.slice(5,-1)}</div>:<></>}

                <Button variant='contained'  sx={{
        background: 'rgb(91,152,217,0.7)',
        background: 'linear-gradient(124deg, rgba(91,152,217,0.7) 27%, rgba(155,212,134,0.7) 100%)',
        my:2
                }}
                onClick={signInHandler}>
                    {isLoading?<CircularProgress sx={{color:'white'}}/>:'Login'}
                </Button>
                

                <Button variant='contained'  sx={{
                  background: 'rgb(91,152,217,0.7)',
                  background: 'linear-gradient(124deg, rgba(91,152,217,0.7) 27%, rgba(155,212,134,0.7) 100%)'
                }}
                onClick={submitHander}>
                  
                  {isLoading?<CircularProgress sx={{color:'white'}}/>:'signup'}
                </Button>
            </Stack>


        </Stack>

    </Stack>
  )
}

export default Signup
