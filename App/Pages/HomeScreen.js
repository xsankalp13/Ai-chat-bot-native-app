import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatFaceData from '../Services/ChatFaceData';

export default function HomeScreen() {


    const [chatFaceData, setChatFaceData] = useState([]);
    const [selectedChatFace, setSelectedChatFace] = useState(null);
    useEffect(() => {
        setChatFaceData(ChatFaceData);
        setSelectedChatFace(ChatFaceData[0]);
        console.log(ChatFaceData[0]);
    }, [])


  return (
    <View style={{alignItems:'center', paddingTop:90}}>
      <Text style={[{color:selectedChatFace?.primary}, {fontSize:30}]}>Hello</Text>
      <Text style={[{color:selectedChatFace?.primary}, {fontSize:30, fontWeight:'bold'}]}>I'm {selectedChatFace?.name}</Text>
      <Image source={{uri:selectedChatFace?.image}} style={{width:150,height:150,marginTop:20}}/>
      <Text style={{marginTop:30, fontSize:25}}>How Can I Help You?</Text>

      <View style={{marginTop:20, backgroundColor:'#f5f5f5',alignItems:'center',height:110,padding:10,borderRadius:10}}>
        <FlatList
            horizontal={true}
            data={chatFaceData}
            renderItem={({item}) =>selectedChatFace.id != item.id &&  (
                <TouchableOpacity style={{margin:15}} onPress={()=> setSelectedChatFace(item)}>
                    <Image source={{uri:item.image}} style={{width:40,height:40}}/>
                </TouchableOpacity>
            )}
        />
        <Text style={{marginTop:5, fontSize:17, color:'#b0b0b0'}}> Choose Your ChatBuddy</Text>
      </View>
      <TouchableOpacity style={[{backgroundColor:selectedChatFace.primary}, {alignItems:'center', padding:17,marginTop:30, borderRadius:20 , width:Dimensions.get('screen').width*0.6}]}>
        <Text style={{fontSize:16,color:'#fff',}}>Let's Chat</Text>
      </TouchableOpacity>
    </View>
  )
}