import React from 'react';
import { Text,StyleSheet} from 'react-native'
function AppText({children, morestyles}) {
    return (
        <Text style={[styles.text,morestyles]} > {children }</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Roboto',
        fontSize:18

         }
})

export default AppText;