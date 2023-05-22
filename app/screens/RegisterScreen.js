import React from 'react';
import {StyleSheet} from 'react-native'
import * as Yup from 'yup'

import Screen from '../../components/Screen'
import {AppFormField,AppForm,SubmitButton} from '../../components/forms'

const validationSchema =Yup.object().shape({
    fullname:Yup.string().required().label("Name"),
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(3).label("Password")
})
function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <AppForm 
            initialValues={{fullname:"",email:"",password:""}}
            onSubmit={(values)=>console.log(values)}
            validationSchema={validationSchema}
            >

                <AppFormField
                autoCorrect={false}
                autoCapitalize="none"
                icon="account"
                keyboardType="text"
                name ="fullname"
                placeholder="Name"
/>
                <AppFormField
                autoCorrect={false}
                autoCapitalize="none"
                icon="email"
                //keyboardType="email-address"
                name ="email"
                placeholder="Email"
                textContentType="emailAddress"
                />
                <AppFormField

                icon="lock"
                autoCorrect={false}
                autoCapitalize="none"
                // keyboardType="email-address"
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
                name="password"
                />
                <SubmitButton title="Register" />     
            </AppForm>

            
        </Screen>
        
        
    );
}
const styles = StyleSheet.create({
    container:{
        padding:20
    },
    
})
export default LoginScreen;