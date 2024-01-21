import React from 'react'
import { useState, useContext} from 'react'
import { set, useForm } from 'react-hook-form'
import { TestContext } from '../../context/TestContext'
import { collection, addDoc, getFirestore, doc } from 'firebase/firestore'

const ItemCartVisibility = ({calculateTotalPrice}) => {
    const { count, setCount, newCountLength, setNewCountLength,ordenDeCompra, setOrdenDeCompra } = useContext(
      TestContext
    );
    const [debit, setDebit]= useState(false)
    const [credit, setCredit]= useState(false)
    const {register, handleSubmit}= useForm()
    const handleTransfer= ()=>{
        setTransfer(!transfer)
    }
    const handleDebit= ()=>{
        setDebit(!debit)
    }
    const onSubmit= (data)=>{
        const compraCliente= {
            cliente: data,
            productos: count,
            total: calculateTotalPrice
        }
        console.log(compraCliente)
        const db= getFirestore();
        const descripcionCompraCliente= collection(db,"pedidos");
        addDoc(descripcionCompraCliente, compraCliente)
        .then((doc)=>{
            setOrdenDeCompra(doc.id)
            setCount([])
            calculateTotalPrice= 0;
        })
    }
    const handlePayDebit= ()=>{
        if(debit){
            return(
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="mail" placeholder='correo electronico' />
                            <input type="date" placeholder='fecha de vencimiento' {...register('date')}/>
                            <input type="text" placeholder='numero de tarjeta'{...register('myNumberCard')} />\
                            <input type="text" placeholder='numero de seguro de tarjeta'{...register('mySecurityNumberCard')} />
                            <input type="submit" value={'comprar'} />
                  </form>
                </div>
            )
        }
    }
  return (
    
        <div className='cartVisibility'>
            <p>Metodo de pago</p>
            <div className='inputsDivs'>
                <button onClick={handleDebit}>  tarjeta  </button>
                {handlePayDebit()}
            </div>
            <div>
            </div>
        </div>
    
  )
}

export default ItemCartVisibility