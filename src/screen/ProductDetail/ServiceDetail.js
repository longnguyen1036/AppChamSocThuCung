import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DatePicker from 'react-native-date-picker'
import { Button } from 'react-native'

const ServiceDetail = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

  return (
    <View style ={{backgroundColor: '#dcdcdc', height: '100%', width: '100%'}}>
      <View style= {{alignItems: 'center'}}>
        <View style= {{flexDirection: 'row', width: '100%', justifyContent: 'space-between',
        paddingHorizontal: '3%', paddingVertical: '3%'}}>
                <TouchableOpacity>
                    <FontAwesome5 name='chevron-left' size={30} color={'black'} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome5 name='heart' size={30} color={'black'} />
                </TouchableOpacity>

        </View>

        <View>
            <Image source={require('../../assets/image/detail3.png')} style = {{borderRadius: 8}} ></Image>
        </View>

        <View style= {{marginTop: '3%'}}>
            <Text style={{fontSize: 24, fontWeight: '600'}}>Tỉa lông chó</Text>
        </View>

        <View style={{marginTop: '3%', flexDirection: 'row', width: '75%', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center',
    padding: 8, borderRadius: 8}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: '#18A2E1', padding: 5, borderRadius: 8, alignItems: 'center'}}>
                    <Image source={require('../../assets/image/iconimg.png')}></Image>
                </View>
                
                <View style={{marginLeft: '5%'}}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>matpetfamily</Text>
                    <Text>Store</Text>
                </View>
            </View>
            
            <TouchableOpacity style={{backgroundColor: '#18A2E1', borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 5, height: 40}}>
                <FontAwesome5 name='comments' size={20} color={'white'} />
            </TouchableOpacity>
        </View>

        <View style = {{width: '75%', flexDirection: 'row', marginTop: '3%'}}>
            <View>
                <Text style={{fontSize: 20, fontWeight:'700', color: 'black', textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>150000đ</Text>
            </View>
            <View style={{marginLeft: '3%'}}>
                <Text style={{fontSize: 20, fontWeight:'700', color: '#F80202'}}>100000đ</Text>
            </View>

        </View>

        <View style={{flexDirection: 'row', width: '75%', marginTop: '2%'}}>
            <TouchableOpacity>
                <Ionicons name='star' size={18} color={'#F80202'} />

            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: '2%'}}>
                <Ionicons name='star' size={18} color={'#F80202'} />

            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: '2%'}}>
                <Ionicons name='star' size={18} color={'#F80202'} />

            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: '2%'}}>
                <Ionicons name='star' size={18} color={'#F80202'} />

            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: '2%'}}>
                <Ionicons name='star-outline' size={18} color={'#F80202'} />

            </TouchableOpacity>
        </View>

        <View style={{width: '75%', alignContent: 'flex-start', marginTop: '2%'}}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Chọn lịch</Text>
        </View>

        <View style={{width: '75%', marginTop: '2%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View><Button title={date.getDay().toString()+'-'+date.getMonth().toString()+'-'+date.getFullYear().toString()} onPress={() => setOpen(true)} />
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
                <Text>Chọn ngày</Text>
            </View>

            <View>
                <Button title={date.getHours().toString()+'-'+date.getMinutes().toString()+'-'+date.getSeconds().toString()} onPress={() => setOpen(true)} />
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
                <Text>Chọn giờ</Text>

            </View>
            
            
            

        </View>

        <TouchableOpacity style={{ backgroundColor: '#18A2E1', borderRadius: 8, width: '40%', justifyContent: 'center', alignItems: 'center', padding: '2%'}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>Đặt lịch</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ServiceDetail

const styles = StyleSheet.create({})