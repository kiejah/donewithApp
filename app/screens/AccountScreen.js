import React from 'react';
import { StyleSheet,View,FlatList } from 'react-native'
import Icon from '../../components/Icon';

import ListItem from '../../components/ListItem';
import ListItemSeparator from '../../components/ListItemSeparator';
import Screen from '../../components/Screen';
import colors from '../config/colors';

const menuItems=[
    {
        title:"My Listings",
        icon:{
            name:'format-list-bulleted',
            backgroundColor: colors.primary,

        },
        targetScreen:"Listings"
    },
    {
        title:"My Messages",
        icon:{
            name:'email',
            backgroundColor: colors.secondary,
            
        },
        targetScreen:"Messages"
    }
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen} >
            <View style={styles.container}>
                <ListItem 
                    title="John K"
                    subTitle="kiejah.dev@gmail.com"
                    image={require('../assets/jk.jpg')}
                />
            </View>
            <View>
                <FlatList 
                data={menuItems}
                keyExtractor={menuItem=>menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item})=>
                <ListItem 
                title={item.title}
                ImageComponent={
                <Icon
                    name={item.icon.name} 
                    backgroundColor={item.icon.backgroundColor}
                />}
                onPress={()=> navigation.navigate(item.targetScreen)}
                />}
                />
            </View> 
            <View style={styles.container}>
                <ListItem 
                        title="Logout"
                        ImageComponent={
                            <Icon
                                name="logout" 
                                backgroundColor="#ffe66d"
                            />}
                    />
            </View> 
                      

        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
      backgroundColor: colors.grayish
    },
})

export default AccountScreen;