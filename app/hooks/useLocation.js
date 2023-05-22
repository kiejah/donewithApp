import React,{useEffect,useState} from "react";
import * as Location from 'expo-location'
export default useLocation=()=>{
    const [location,setLocation]=useState(null)

  
  useEffect(()=>{ 
    (async () => {
    try {
        const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({});
      
      setLocation({latitude,longitude});
        
    } catch (error) {
       console.log("Error", error) 
    }
      
    })();
  },[]);
  return location
}
