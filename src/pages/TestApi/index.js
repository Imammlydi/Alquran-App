import React,{useState,useEffect}  from 'react';
import { Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { Gap } from '../../components';
import adhan from 'adhan'
import 'moment-timezone';

const TesApi = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [salahFajr, setSalahFajr] = useState('');
  const [salahDuhur, setSalahDuhur] = useState('');
  const [salahAsr, setSalahAsr] = useState('');
  const [salahMagrib, setSalahMagrib] = useState('');
  const [salahIsy, setSalahIsy] = useState('');
  const [salahNext, setSalahNext] = useState('');
  const [salahCurrent, setSalahCurrent] = useState('');
  

useEffect(()=>{
  var datesNow = moment()
                  .utcOffset('+7')
                  .format('HH:MM');
                  setCurrentDate(datesNow)
},[])
useEffect(()=>{
 
},[])

const date = new Date();
    const coordinates = new adhan.Coordinates(-6.175110, 106.865036);
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

    

    
  useEffect(() => {
    console.log(nextPrayerTime)
   setSalahFajr(fajrTime)
   setSalahDuhur(dhuhrTime)
   setSalahAsr(asrTime)
   setSalahMagrib(maghribTime)
   setSalahIsy(ishaTime)
   //next
   setSalahCurrent(current)
   setSalahNext(next)
   alert(nextPrayerTime)

  }, []);
  
  const magrib = 5000;
  
  return (
    <View style={{backgroundColor:'#ffffff', flex:1}}>
      
      <Gap height={50}/>
      <CountDown
          until={magrib}
          size={20}
          onFinish={() => alert('Finished')}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: '#1CC625'}}
          timeToShow={['H','M', 'S']}
          timeLabels={{h:'HH',m: 'MM', s: 'SS'}}
        />
        <Gap height={50}/>
        <Text>{currentDate}</Text>
        <Text>{salahCurrent}</Text>
        <Text>{salahNext}</Text>
        <Gap height={50}/>
        <View style={{padding:20}}>
          <Text>{salahFajr}</Text>
          <Text>{salahDuhur}</Text>
          <Text>{salahAsr}</Text>
          <Text>{salahMagrib}</Text>
          <Text>{salahIsy}</Text>
        </View>
       
    </View>
  )
}

export default TesApi
