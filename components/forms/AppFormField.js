import React from 'react';
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';


function AppFormField({name,width,...otherProps}) {
    const { handleChange,errors,setFieldTouched,touched}= useFormikContext();
    return (
        <>
        <AppTextInput
            onChangeText={handleChange(name)}
            onBlur={()=>setFieldTouched(name)}
            width={width}
            {...otherProps}
            
        />
        <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    );
}

export default AppFormField;