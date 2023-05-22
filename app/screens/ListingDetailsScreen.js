import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';

import Apptext from '../../components/AppText'
import ListItem from '../../components/ListItem';
import colors from '../config/colors'
function ListingDetailsScreen({route,navigation}) {
    const listing = route.params;
    console.log(listing)
    return (
        <View>
            <Image style={styles.image} source={{uri:listing.images[0].url}}></Image>
            <View style={styles.detailsContainer}>
                <Apptext morestyles={styles.title}>{listing.title}</Apptext>
                <Apptext morestyles={styles.price}>${listing.price}</Apptext>
                <View style={styles.userContainer}>
                <ListItem 
                    image={require('../assets/jk.jpg')}
                    title= "John K"
                    subTitle="5 listings"
                />
                </View>
               
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    image:{
        width:'100%',
        height:300
    },
    price:{
        color:colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10

    },
    userContainer:{
        marginVertical:30
    }
    
})

export default ListingDetailsScreen;