import React from 'react';
import { Text,StyleSheet} from 'react-native'
function AppText({children,morestyles,...otherProps}) {
    return (
        <Text style={[styles.text,morestyles]} {...otherProps} > {children }</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        color:'#000',
        fontSize:20,
        fontFamily:'Avenir',
    }
})

export default AppText;