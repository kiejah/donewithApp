import React, {useState,useEffect} from 'react';
import { FlatList, StyleSheet,ActivityIndicator} from 'react-native';
import Card from '../../components/Card';


import MyActivityIndicator from '../../components/MyActivityIndicator'
import listingApi from '../../api/listings'
import Screen from '../../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
function Listings({navigation}) {
    const [listings,setListings]= useState([])
    const [error,setError]= useState(false)
    const [loading,setLoading]= useState(false)


    useEffect(()=>{
        loadListings();
    },[])

    const loadListings= async ()=>{
        setLoading(true)
        const response = await listingApi.getListings()
        setLoading(false)

        if(!response.ok) return setError(true);

        setError(false);
        setListings(response.data);
    }

    return (
        <Screen style={styles.screen}>
           {error && <>
           <AppText>Couldn't retrieve the listings </AppText>
           <AppButton title="Retry" onPress={loadListings} />
           </>}
           <MyActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={listing=>listing.id.toString()}
                renderItem={({item})=>
                                <Card 
                                    onpress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
                                    title={item.title}
                                    subTitle={"$ " + item.price}
                                    imageUrl={item.images[0].url}
                                />    
            }
            />
        </Screen>
        
    );
}
const styles = StyleSheet.create({
    screen:{
       backgroundColor:colors.grayish,
       padding:10,
    }
})
export default Listings;