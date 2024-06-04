/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Main from './components/Main';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';



function App(){
  const [changeScreen,setChangeScreen] = useState(false);
  const [url,setUrl] = useState("https://www.google.com/");

  if(!changeScreen){
    return(
      <SafeAreaView>
      <View className="h-full  flex justify-center items-center " >
          <TextInput className=" m-5 border-2 border-black p-3 text-xl rounded-2xl  " placeholder='Enter link' onChangeText={setUrl} value={url} />
          <TouchableOpacity className="m-5 bg-purple-500 p-2 rounded-3xl shadow-xl " onPress={()=>{
            setChangeScreen(!changeScreen)
          }} >
            <Text className="text-3xl" >Open</Text>
          </TouchableOpacity>

      </View>
  </SafeAreaView>
    )
  }else{
    return (
      <Main url={url} />
      
      
    );
  }
  
}



export default App;
