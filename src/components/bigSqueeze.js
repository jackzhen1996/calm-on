import React, {useState} from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from '../stylesheets/techniques.styles'

export default BigSqueeze =() => {
    const screens = [
        {
            image: require('./images/BigSqueeze/bigSq1.png')
        },
        {
            image:require('./images/BigSqueeze/bigSq2.png')
        }
    ]

    const [current,setCurrent] = useState(0)
        
    return (
        <View style = {styles.container}>
        <Text style = {styles.text} >The Big Squeeze</Text>
        <Image  source = {require('./images/BigSqueeze/background.png')}/>
        <Image style = {styles.image} source = {screens[current].image}/>
         
        {current !== 1? 
            <TouchableOpacity onPress = {()=>setCurrent(current+1)} style = {styles.rightArrow} >
                <Image source = {require('./images/misc/rightArrow.png')}/>
            </TouchableOpacity>
         :
            <View style = {styles.rightArrow}>
                <Image source = {require('./images/misc/disabledRight.png')}/>
            </View>
         }

         {current !==0?
            <TouchableOpacity onPress = {()=>setCurrent(current-1)} style = {styles.leftArrow}>
                <Image  source = {require('./images/misc/leftArrow.png')}/>
            </TouchableOpacity>
         :
            <View style = {styles.leftArrow} >
                <Image  source = {require('./images/misc/disabledLeft.png')}/>
            </View>
         }

     </View>

    )
        
}