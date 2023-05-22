import React, { useState } from 'react';
import {FlatList,View,Text} from 'react-native';



import ListItem from '../../components/ListItem';
import Screen from '../../components/Screen';
import ListItemSeparator from '../../components/ListItemSeparator';

const initialMessages=[
    {
        id:1,
        title:"Title 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:require('../assets/jk.jpg')
    },
    {
        id:2,
        title:"Title 2",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:require('../assets/jk.jpg')
    },
    {
        id:3,
        title:"Title 3",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image:require('../assets/jk.jpg')
    }
]

function MessageScreen(props) {
    const [messages,setMessages] =useState(initialMessages);
    const handleDelete= message=>{
        setMessages(messages.filter(m => m.id !== message.id));
    }
   

    return (
        

        <Screen>
        <FlatList 
            data={messages}
            keyExtractor={message=>message.id.toString()}
            renderItem ={
            ({item})=>(
                <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={()=>console.log("Message Selected",item)}
                onDoubleTap={()=>handleDelete(item)}
                />
            )}
            ItemSeparatorComponent={()=><ListItemSeparator />
            }
         />
        </Screen>

        

    );
}




export default MessageScreen;