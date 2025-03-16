
import { useEffect, useState } from "react"

// import "./Main.css"
const Accounts = ({web3,setAddress})=>{
    const[provider,setProvider]= useState("None")
    const[balance, setBalance]=useState("None")
    const[account,setAccount]=useState("None")


    useEffect(()=>{
        const allAccounts =async()=>{
  const select = document.querySelector("#selectNumber")
  try{
      
    const options = await web3.eth.getAccounts()
    setProvider("Ganache")
    for(let i=0;i<options.length;i++){
    let opt =options[i];
    let element= document.createElement('option');
    element.textContent =opt;
    element.value=opt;
    select.appendChild(element);
  }
  
  }catch(error){
    setProvider("not connected")
  }
 }
 web3 && allAccounts()
    },[web3])

    
    const selectAccount=async()=>{
        let selectedAccount = document.querySelector("#selectNumber").value;
        if(selectedAccount){
            setAddress(selectedAccount)
         const accountBalance= await web3.eth.getBalance(selectedAccount)
         const etherBalance =web3.utils.fromWei(accountBalance,"ether")
         setBalance(etherBalance)
         setAccount(selectedAccount)
        }
    }
 
    return(
        <> <label htmlFor="">Select an Account</label>
        <form className="label1" id="myForm">
           
            <select className="innerBox" id="selectNumber" onChange={selectAccount}>
            <option value="">select</option>
            </select>
        </form>
        <br />
        <span className="conAc">Connected Account: {account}</span>
        <br />
        <span className="acBal">Account Balance:{balance} ether</span>
        <br />
        <span className="provider">Provider: {provider}</span>
        </>
    )
}
export default Accounts
