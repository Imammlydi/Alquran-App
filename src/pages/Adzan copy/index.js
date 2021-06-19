import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Text, View,StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Place } from '../../assets'
import { Gap, SalatTimes } from '../../components'

const Adzan = ({navigation}) => {
    const [solat,setSolat] = useState({
        0:{
    
         
        
                "times": {
                    "Imsak": "",
                    "Sunrise": "",
                    "Fajr": "",
                    "Dhuhr": "",
                    "Asr": "",
                    "Sunset": "",
                    "Maghrib": "",
                    "Isha": "",
                    "Midnight": ""
                },
            
        }
    });
    
    const [today,SetToday] = useState({
        date:''
    });
    const [todays,setTodays]=useState({
        dates:''
    });
   


    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
      }
    
      return timeLeft;
    
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });


    useEffect(()=>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ];
        const a = new Date();
        const date = new Date().getDate(); //Current Date
        const year = new Date().getFullYear(); //Current Year
        const hours = new Date().getHours(); //Current Hours
        const min = new Date().getMinutes(); //Current Minutes
        const sec = new Date().getSeconds(); //Current Seconds
        const months = ("0" + (a.getMonth() + 1)).slice(-2);
    
        setTodays({
            dates:date+' '+monthNames[a.getMonth()]+' '+year
        })
        SetToday({
            date:  'day.json?city=jakarta&date='+year + '-' + months  + '-' + date 
        })
        
    },[])

const [current,setCurrent] =useState({
    "data": ""
})
    //curren time
    const curren_time ='http://api.aladhan.com/v1/currentTime?zone=Asia/Jakarta'
useEffect(() => {
    axios.get(curren_time)
    .then(result=> {
        console.log('sukses',result.data)
        setCurrent(result.data)
        
    })
    .catch(err=> console.log('errrnya', err))
    // setTimeout(() =>{
    //     navigation.replace('Adzan')
    //   },3000)
   
}, [])

    
    const API_WaktuSolat= 'https://api.pray.zone/v2/times/';
    useEffect(() =>{
        axios.get(API_WaktuSolat+today.date)
        .then(result=> {
            console.log('sukses',result.data.results.datetime)
            console.log(setSolat(result.data.results.datetime))
         
            setSolat(result.data.results.datetime)
            // setSolat(result)
            
        })
        .catch(err=> console.log('errrnya', err))
    },[])

 


    return (
        <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
            <View style={styles.header}>
                <Text style={styles.title}>SOLAT TIMES</Text>
                <Gap height={30} />
            </View>
            <View style={{justifyContent:"center", }}>
             <Text style={styles.title2}>1 hour 25 minutes</Text>
             <Text style={styles.title3}>left until Maghrib</Text>
             </View>
             <View>
             <TouchableOpacity style={styles.wrapPlace} >
                <View style={styles.back}/>
                <Place/>
                <Gap width={5}/>
                <Text style={styles.title4}>Jakarta</Text>
             </TouchableOpacity>
             </View>
             <View style={{justifyContent:"center", }}>
                <Text style={styles.title2}>{todays.dates}</Text>
                <Text style={styles.title3}>{current.data}</Text>
              </View>
            <View >
                <SalatTimes title="Fajr" times={solat[0].times.Fajr}/>
                <SalatTimes title="Dhuhr" times={solat[0].times.Dhuhr}/>
                <SalatTimes title="Asr" times={solat[0].times.Asr}/>
                <SalatTimes title="Maghrib" times={solat[0].times.Maghrib}/>
                <SalatTimes title="Isha" times={solat[0].times.Isha}/>
            </View>
        </View>
    )
}

export default Adzan;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    header:{
        backgroundColor:'#9627A8',
        paddingTop:50,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    title:{
        fontSize:17,
        fontFamily:'Mulish-Bold',
        color:'#FFFFFF',
        textAlign:'center'
    },
    title2:{
        fontSize:20,
        fontFamily:'Mulish-Regular',
        color:'#2C2045',
        textAlign:'center',
        
    },
    title4:{
        fontSize:17,
        fontFamily:'Mulish-Regular',
        color:'#FFFFFF',
        textAlign:'center', 
    },
    title3:{
        fontSize:15,
        fontFamily:'Mulish-Regular',
        color:'#2C2045',
        textAlign:'center'
    },
    wrapPlace:{
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    back:{
        width:120,
        height:32,
        borderRadius:35/2,
        backgroundColor:'#9627A8',
        position:'absolute',
    }
})
