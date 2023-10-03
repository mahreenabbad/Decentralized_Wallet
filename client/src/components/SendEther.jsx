import './Main.css'
import { useState,useEffect } from 'react'
const SendEther = ({web3,account})=>{
    const [receipt,setReceipt] =useState({})
    const [toggle,setToggle] =useState(false)
    useEffect(()=>{
        
    })
    const sendEth =async(e)=>{
      e.preventDefault()//at the time of submit form page reload protection
      const _to = document.querySelector("#to").value;
      const  _value = document.querySelector("#value").value;
      const weivalue= web3.utils.toWei(_value,"ether");
      web3.eth.sendTransaction({
        from:account,
        to:_to,
        value:weivalue,
      }).then(
        function(receipt){
            setReceipt(receipt)
            setToggle(true)
            //  console.log(receipt)
        } );
    };
    return(<>
        <form className='box' onSubmit={sendEth}>
            <p className='label'>
                <label htmlFor=''>Enter Receiver's Address</label>
                <input className='receiver' type="text" id='to' />

            </p>

            <p className='label'>
                <label htmlFor="">Enter Amount to Send</label>
                <input className='receiver' type="text" id='value'/>
            </p>
            <button className='btn' type='submit'>Send</button>
        </form>
        
        <div className="box">
        <div className="json">
          <h3>(Json Response)</h3>
          <pre> 
            <code >
            {toggle && JSON.stringify(receipt,
              ["transactionHash", "blockHash", "blockNumber", "gasUsed"] ,
              11
            )}
         </code> 
         </pre>
      </div>
      </div>
     </>
    )
}
export default SendEther