import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet, TextInput, ScrollView,FlatList, Button, TouchableOpacity} from 'react-native'
import { Bismillah, IconBack } from '../../assets'
import { Ayat, Banner, Gap, Header } from '../../components'
import { AlquranUrl } from '../../util/URL/AlquranURL'


const Surat = () => {
    const [count,setCount]=useState(0)
    const [ayat, setAyat] = useState({
    //     "verses":[
    //         {

                "text": {
                    "arab": "",
                    "transliteration": {
                        "en": "",
                    }
                },
                    "translation": {
                        "en": "",
                        "id":""
                    }
    //         }
    //     ]


            //     "name":{
            //         "long":"",
            //         "short":""
            //     },
            //     "verses": [
            //         {
            //             "number": {
            //                 "inQuran": 1,
            //                 "inSurah": 1
            //             },
            //                             "text": {
            //         "arab": "",
            //         "transliteration": {
            //             "en": "",
            //         }
            //         }  
            //     }
            // ]

    })
       
    axios.get('https://api.quran.sutanlab.id/surah/1')
        .then(result=> {
            console.log('suksesnya2',result.data.data)
            // const Ayats = result.data.data.verses;
            const [item ]= result.data.data.verses
            setAyat(item)
            // document.title=`you click ${count} times`
         
            
        })
        .catch(err=> console.log('errrnya', err))
    
    

    useEffect(() => {

        // for (let i =1; i <= 7; i++) {
        //     console.log(` ${i}`);}
         
        axios.get('https://api.quran.sutanlab.id/surah/1')
        .then(result=> {
            console.log('suksesnya2',result.data.data)
            // const Ayats = result.data.data.verses;
            const [item ]= result.data.data.verses
            setAyat(item)
            // document.title=`you click ${count} times`
         
            
        })
        .catch(err=> console.log('errrnya', err))

    }, [])


  return (
      <View style={styles.container}>
        <Header title="Al-Fatiah"/>
        <ScrollView ShowVerticalScrollIndicator={false}>
        <Text>{ayat.verses}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}><Text style={styles.title}>Click</Text></TouchableOpacity>
        <Gap height={20}/>
            <Banner/>
            <Gap height={20}/>
      
            <Ayat 
                ayat={ayat.text.arab}
                translates={ayat.text.transliteration.en}
                translate={ayat.translation.id}
            />
            
        </ScrollView>
       
        
      </View>
       
      
  )
}

export default Surat;
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        backgroundColor:'#FFFFFF'
    },
    header:{
        flexDirection:'row',
        alignItems: 'center', 
        padding:10
    },
    title:{
        fontSize:20,
        fontFamily:'Mulish-ExtraBold',
        color:'#6326BA',
        maxWidth:250,
        textAlign: 'center'
    },
    titles:{
        fontSize:20,
        fontFamily:'Mulish-Regular',
        color:'#FFFFFF',
        maxWidth:250,
        textAlign: 'center'
    },
    desc:{
        fontSize:15,
        fontFamily:'Mulish-Regular',
        color:'#FFFFFF',
        maxWidth:250,
        textAlign: 'center'
    },
   
}) 
