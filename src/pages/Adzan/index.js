import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Text, View,StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Place } from '../../assets';
import { Gap, SalatTimes } from '../../components';
import adhan from 'adhan';
import 'moment-timezone';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
// import RNMomentCountDown from 'react-moment-countdown';

const Adzan = ({navigation}) => {
    const [nextPrays,setNextPrays] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [salahFajr, setSalahFajr] = useState('');
    const [salahDuhur, setSalahDuhur] = useState('');
    const [salahAsr, setSalahAsr] = useState('');
    const [salahMagrib, setSalahMagrib] = useState('');
    const [salahIsy, setSalahIsy] = useState('');
    const [salahNext, setSalahNext] = useState('');
    const [salahCurrent, setSalahCurrent] = useState('');
    const [todayer,SetTodayer] = useState('');
    const [todays,setTodays]=useState({
        dates:''
    });

    const date = new Date();
    const coordinates = new adhan.Coordinates(1.352083,103.819839);
    const params = adhan.CalculationMethod.MuslimWorldLeague();
    params.madhab = adhan.Madhab.Shafi;
    const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
    const fajrTime = moment(prayerTimes.fajr).tz('Asia/Jakarta').format('HH:MM');
    const dhuhrTime = moment(prayerTimes.dhuhr).tz('Asia/Jakarta').format('HH:MM');
    const asrTime = moment(prayerTimes.asr).tz('Asia/Jakarta').format('HH:mm');
    const maghribTime = moment(prayerTimes.maghrib).tz('Asia/Jakarta').format('HH:MM');
    const ishaTime = moment(prayerTimes.isha).tz('Asia/Jakarta').format('HH:MM');

    //nex Prayer
    const current = prayerTimes.currentPrayer();
    const next = prayerTimes.nextPrayer();
    const nextPrayerTime = prayerTimes.timeForPrayer(next);
   const nextPrayFormat = moment(nextPrayerTime).format('HH :MM');

    //current time calc
    const c = new Date()
    const millis = c.getTime();
    const millisToday = millis % 86400000;
   

   const air = new Date(nextPrayerTime)
   const nextHours = air.getTime();
   const calNext = nextHours % 86400000;
   var d = new Date(nextPray)
 
console.log("az nya", nextPrayerTime);
console.log('ms',millisToday )
const nextPray=calNext-millisToday



    

   

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
        // const c = new Date().getMilliseconds(hours,min,sec)
        
        SetTodayer(millisToday)
        setTodays({
            dates:date+' '+monthNames[a.getMonth()]+' '+year
        })

        
    },[])

    useEffect(()=>{
        var currentNow = moment()
                        .utcOffset('+7')
                        .format('HH:MM');
                        setCurrentTime(currentNow)
      },[])

    useEffect(() => {
        console.log("nextPray",nextPrayFormat)
       setSalahFajr(fajrTime)
       setSalahDuhur(dhuhrTime)
       setSalahAsr(asrTime)
       setSalahMagrib(maghribTime)
       setSalahIsy(ishaTime)
       setNextPrays(nextPrayFormat)
      
       
      }, []);


  

    
    
 
      const magrib = 5000;

    return (
        <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
            <View style={styles.header}>
                <Text style={styles.title}>SOLAT TIMES</Text>
                <Gap height={30} />
            </View>
            <View style={{justifyContent:"center", }}>
                <View style={styles.nextPray}>
                    <Text style={styles.title3}>next Pray</Text>
                    <Text style={styles.nextPraystatus}>{next}</Text>
                    {/* <Text style={styles.title3}>{nextPrays}</Text> */}
                </View>
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
                <Text style={styles.title2}>{currentTime}</Text>
                <Text style={styles.title2}>{current} time</Text>
              </View>
            <View >
                <SalatTimes title="Fajr" times={salahFajr}/>
                <SalatTimes title="Dhuhr" times={salahDuhur}/>
                <SalatTimes title="Asr" times={salahAsr}/>
                <SalatTimes title="Maghrib" times={salahMagrib}/>
                <SalatTimes title="Isha" times={salahIsy}/>
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
        fontSize:17,
        fontFamily:'Mulish-Regular',
        color:'#9627A8',
        textAlign:'center',
        textTransform:'capitalize',
        
    },
    title4:{
        fontSize:17,
        fontFamily:'Mulish-Regular',
        color:'#9627A8',
        textAlign:'center', 
    },
    title3:{
        fontSize:18,
        fontFamily:'Mulish-Regular',
        color:'#9627A8',
        textAlign:'center',
        
    },
    wrapPlace:{
        flexDirection:'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    back:{
        width:120,
        height:32,
        borderRadius:5,
        // backgroundColor:'#9627A8',
        position:'absolute',
        borderColor:'#9627A8',
        borderWidth:0.3
    },
    nextPray:{
        flexDirection:'row', 
        justifyContent:'center',
        borderColor:'#9627A8',
        borderWidth:0.5,
        alignItems:'center',
        borderRadius:5,
        justifyContent:'space-between',
        paddingLeft:10
    },
    nextPraystatus:{
        fontSize:18,
        fontFamily:'Mulish-Bold',
        color:'#ffffff',
        textAlign:'center',
        textTransform:'capitalize',
        backgroundColor:'#9011FF',
        paddingVertical:10,
        paddingHorizontal:70,
        borderRadius:4,
        textAlign:'center'
        
    }
})
