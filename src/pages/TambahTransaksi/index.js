import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import FormInput from '../../component/atoms/FormInput';
import {BtnBlue} from '../../component/atoms';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';
import {ArrowRight, Anggaran, Pengingat, Selamat} from '../../assets/img';
import Modal from 'react-native-modal';

const TambahTransaksi = ({navigation}) => {
  const [isAnggaranVisible, setAnggaranVisible] = useState(false);
  const [isPengingatVisible, setPengingatVisible] = useState(false);
  const [isSelamatVisible, setSelamatVisible] = useState(false);

  const [showColorKategori, setShowColorKategori] = useState('#adadad');

  const handleGo = () => {
    navigation.navigate('Kategori');
  };

  const multipleKategori = () => {
    handleGo();
    setShowColorKategori('#333');
  };

  const toggleAnggaran = () => {
    setAnggaranVisible(!isAnggaranVisible);
  };

  const togglePengingat = () => {
    setAnggaranVisible(!isAnggaranVisible);
    setPengingatVisible(!isPengingatVisible);
  };

  const toggleSelamat = () => {
    setPengingatVisible(!isPengingatVisible);
    setSelamatVisible(!isSelamatVisible);
  };

  return (
    <ScrollView style={styles.layout}>
      <FormInput title="Jumlah" />
      <View>
        <Text style={styles.titleInput}>Kategori</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={() => multipleKategori()}>
          <Text style={{color: showColorKategori, fontWeight: 'bold'}}>
            Pakaian
          </Text>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <FormInput title="Catatan" />
      <FormInput title="Tanggal" value="Hari ini 26 Juni 2020" />
      <View style={styles.BtnBlue}>
        <BtnBlue value="SIMPAN" onPress={toggleAnggaran} />
      </View>

      <Modal isVisible={isAnggaranVisible}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: '5%',
              marginTop: '5%',
              paddingHorizontal: '5%',
            }}>
            <Anggaran />
            <TextInput
              style={{
                padding: 16,
                paddingVertical: 9,
                borderColor: '#d6d6d6',
                borderWidth: 1,
                borderRadius: 5,
                width: '100%',
                marginTop: '5%',
              }}
              placeholder="Tulis anggaran anda saat ini"
            />
          </View>

          <TouchableOpacity
            style={{
              paddingVertical: '3%',
              backgroundColor: '#5782FC',
              borderBottomEndRadius: 5,
            }}>
            <Button
              title="SELANJUTNYA"
              color="#5782FC"
              onPress={togglePengingat}
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isPengingatVisible}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: '5%',
              marginTop: '5%',
              paddingHorizontal: '5%',
            }}>
            <Pengingat />
          </View>

          <TouchableOpacity
            style={{
              paddingVertical: '3%',
              backgroundColor: '#5782FC',
              borderBottomEndRadius: 5,
            }}>
            <Button
              title="SELANJUTNYA"
              color="#5782FC"
              onPress={toggleSelamat}
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isSelamatVisible}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: '5%',
              marginTop: '5%',
              paddingHorizontal: '5%',
            }}>
            <Selamat />
          </View>

          <TouchableOpacity
            style={{
              paddingVertical: '3%',
              backgroundColor: '#5782FC',
              borderBottomEndRadius: 5,
            }}>
            <Button
              title="SELANJUTNYA"
              color="#5782FC"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: '#FAFAFA',
    padding: '6%',
  },

  BtnBlue: {
    marginTop: '10%',
  },

  titleInput: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '3%',
  },

  textInput: {
    padding: 16,
    borderColor: '#d6d6d6',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  text: {
    color: '#9A9A9A',
  },
});

export default TambahTransaksi;
