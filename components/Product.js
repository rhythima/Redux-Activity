import { View, Text,Image,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/action'

const Product = ({item}) => {

    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.reducer)

    const[isAdded, setIsAdded]=useState(false)

    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }
    
    const handleRemoveFromCart=(item)=>{
        dispatch(removeFromCart(item.name))
    }

    useEffect(()=>{
      let result=cartItems.filter((elem)=>{
        return elem.name===item.name
      })
      if(result.length){
        setIsAdded(true)
      }
      else{
        setIsAdded(false)
      }
    },[cartItems])

  return (

    <View style={{alignItems:'center', borderBottomWidth:2, borderBottomColor:'teal', padding:10}}>
            <Text style={{fontSize:25}}>{item.name}</Text>
            <Text style={{fontSize:25}}>{item.color}</Text>
            <Text style={{fontSize:25}}>{item.price}</Text>
            <Image style={{width:200, height:200}} source={{uri:item.image}}/>
            {
              isAdded?
              <Button title='Remove To Cart' onPress={()=>handleRemoveFromCart(item)}/>
              :
              <Button title='Add To Cart' onPress={()=>handleAddToCart(item)}/>
            }
            
            </View>
  )
}

export default Product