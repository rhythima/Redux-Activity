import { View, Text,Image,Button,ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Product from './Product'

const ProductWrapper = ({navigation}) => {

  const products=[
    {
      name:'Samsung Mobile',
      color:'grey',
      price:30000,
      image:'https://static.toiimg.com/thumb/resizemode-4,msid-54102237,imgsize-200,width-200/54102237.jpg'
    },
    {
      name:'RealMe Mobile',
      color:'blue',
      price:40000,
      image:'https://www.91-img.com/pictures/148314-v8-realme-c35-mobile-phone-large-1.jpg'
    },
    {
      name:'Apple iPhone',
      color:'purple',
      price:90000,
      image:'https://media.bite.lt/@bite-lt/sites/default/files/products/2021-04/iphone_12_purple-3_1.png'
    }
  ]

  return (
    <View style={{flex:1}}>
    <Button title='Go To Userlist' onPress={()=>navigation.navigate('User')}/>
      <Header/>
      <ScrollView>
      {
        products.map((item)=><Product item={item}/>)
      }
      </ScrollView>
      
    </View>
  )
}

export default ProductWrapper