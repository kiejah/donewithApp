import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight
} from 'react-native';
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  const handlePress= ()=>{ console.log("Text pressed")}
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text onPress={handlePress}>Hello React Native!</Text>
      <TouchableHighlight onPress={()=>console.log('Image tapped')}>
        <Image 
          fadeDuration={1000}
          source={{
              uri:"https://picsum.photos/id/1/200/300",
              width:200,
              height:300
            }}/>
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View style={{width:200,height:70,backgroundColor:'dodgerblue'}}>

        </View>
      </TouchableNativeFeedback>
      <Button color='orange' title='Click Me' onPress={()=> Alert.alert("My Title","My Message",[
       {text:"Yes",onPress:()=>console.log('Yess pressed')},
       {text:"No",onPress:()=>console.log('No pressed')}
     ])}/>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
