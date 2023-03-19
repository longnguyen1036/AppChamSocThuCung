import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Button} from 'react-native';

const ServiceDetail = ({navigation}) => {
  // const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setOpen(true);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDay(date.getUTCDate().toString());
    setMonth(date.getUTCMonth().toString());
    setYear(date.getUTCFullYear().toString());
    hideDatePicker();
  };

  // const [pickerMode, setPickerMode] = useState(null);
  // const [inline, setInline] = useState(false);

  // const showDatePicker = () => {
  //     setPickerMode("date");
  // };

  // const showTimePicker = () => {
  //     setPickerMode("time");
  // };

  // const showDateTimePicker = () => {
  //     setPickerMode("datetime");
  // };

  // const hidePicker = () => {
  //     setPickerMode(null);
  // };

  // const handleConfirm = (date) => {
  //     // In order to prevent the double-shown popup bug on Android, picker has to be hidden first (https://github.com/react-native-datetimepicker/datetimepicker/issues/54#issuecomment-618776550)
  //     hidePicker();
  //     console.warn("A date has been picked: ", date);
  // };

  return (
    <ScrollView
      style={{backgroundColor: '#dcdcdc', height: '100%', width: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '3%',
            paddingVertical: '3%',
          }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={30} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5 name="heart" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={require('../../assets/image/detail3.png')}
            style={{borderRadius: 8}}></Image>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontSize: 24, fontWeight: '600'}}>Tỉa lông chó</Text>
        </View>

        <View
          style={{
            marginTop: '3%',
            flexDirection: 'row',
            width: '85%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 8,
            borderRadius: 8,
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#18A2E1',
                padding: 5,
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/image/iconimg.png')}></Image>
            </View>

            <View style={{marginLeft: '5%'}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                matpetfamily
              </Text>
              <Text>Store</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#18A2E1',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              height: 40,
            }}>
            <FontAwesome5 name="comments" size={20} color={'white'} />
          </TouchableOpacity>
        </View>

        <View style={{width: '75%', flexDirection: 'row', marginTop: '3%'}}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              150000đ
            </Text>
          </View>
          <View style={{marginLeft: '3%'}}>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#F80202'}}>
              100000đ
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '75%', marginTop: '2%'}}>
          <TouchableOpacity>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star-outline" size={18} color={'#F80202'} />
          </TouchableOpacity>
        </View>

        <View
          style={{width: '75%', alignContent: 'flex-start', marginTop: '2%'}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Chọn lịch</Text>
        </View>

        <View
          style={{
            width: '75%',
            marginTop: '2%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            {/* <Button title={date.getDay().toString()+'-'+date.getMonth().toString()+'-'+date.getFullYear().toString()} onPress={() => setOpen(true)} />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                /> */}

            <TouchableOpacity
              style={{backgroundColor: '#ffffff', padding: 10, borderRadius: 8}}
              onPress={showDatePicker}>
              <Text>{open ? day + '-' + month + '-' + year : 'chon ngay'}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          {/* <View style={styles.root}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <Button title="Show Time Picker" onPress={showTimePicker} />
      <Button title="Show DateTime Picker" onPress={showDateTimePicker} />
      {Platform.OS === "ios" && (
        <View style={styles.inlineSwitchContainer}>
          <Text style={styles.inlineSwitchText}>Display inline?</Text>
          <Switch value={inline} onValueChange={setInline} />
        </View>
      )}
      <DateTimePickerModal
        isVisible={pickerMode !== null}
        mode={pickerMode}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        display={inline ? "inline" : undefined}
      />
    </View> */}

          <View>
            {/* <Button title={date.getHours().toString()+'-'+date.getMinutes().toString()+'-'+date.getSeconds().toString()} onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />
                <Text>Chọn giờ</Text> */}
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#18A2E1',
            borderRadius: 8,
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2%',
            marginTop: '10%'
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>
            Đặt lịch
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ServiceDetail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  },
});
