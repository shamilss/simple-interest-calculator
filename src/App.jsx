import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [isPrinciple,setIsPrinciple] =useState(true)
  const [isRate,setIsRate] =useState(true)
  const [isYear,setIsYear] =useState(true)
  const [interest,setInterest]=useState(0)




  const validate=(e)=>{
    const {name,value}=e.target
    console.log(name);
    console.log(value);
    if(!!value.match('^[0-9]*$')){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rateofinterest'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name=='rateofinterest'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }

  }

  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const calculate=()=>{
    setInterest((principle*rate*year)/100)
  }
 

  return (
    <>
    <div id='main' className='d-flex justify-content-center align-items-center'>
      <div className='bg-light rounded shadow p-5'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning rounded p-3 mt-4 flex-column' style={{height:'150px'}}>
          <h1 className='text-light'>₹{interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <div className='my-3'>
        <TextField id="outlined-basic" label="₹ Principle Amount" name='principle' variant="outlined" className='w-100' onChange={(e)=>validate(e)} value={principle} />
         {isPrinciple==false && <p className='text-danger pt-2'>*Invalid Input</p>}
        </div>
        <div className='my-3'>
        <TextField id="outlined-basic" label="Rate of Interest (%)" name='rateofinterest' variant="outlined" className='w-100' onChange={(e)=>validate(e)}  value={rate} />
        {isRate==false && 
          <p className='text-danger pt-2'>*Invalid Input</p>}
        </div>
        <div className='my-3'>
        <TextField id="outlined-basic" label="Year (Yr)" name='year' variant="outlined" className='w-100' onChange={(e)=>validate(e)} value={year}  />
        {isYear==false && 
          <p className='text-danger pt-2'>*Invalid Input</p>}
        </div>
        <div className='mb-3 d-flex justify-content-between'>
        <Button disabled={isPrinciple && isRate && isYear ? false:true}  variant="contained" color='success' style={{width:'190px'}}className='p-3' onClick={calculate} >Calculate</Button>
        <Button variant="outlined"style={{width:'190px'}} className='p-3' onClick={handleReset}  >Reset</Button>
        </div>

      </div>
    </div>   
    </>
  )
}

export default App
