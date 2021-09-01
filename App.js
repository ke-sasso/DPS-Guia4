/**
* @format* 
 @flow strict-local
*/
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

import FormSalario from './src/components/FormSalario';
import ResultSueldo from './src/components/ResultSueldo';


export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [nombre, setNombre] = useState(null);
  const [sueldo, setSueldo] = useState(null);
  const [totalSueldo, setTotalSueldo] = useState(null);
  const [errorMessage2, setErrorMessage2] = useState('');


  useEffect(() => {
    calculate();

  }, [capital, interest,months]);
  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMessage('Añade el interes del prestamos');
    } else if (!months) {
      setErrorMessage('Seleccióna los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  };

  const sueldocalculate = () => {
    reset2();
    if (!nombre) {
      setErrorMessage2('Requerido el nombre del empleado');
    } else if (!sueldo) {
      setErrorMessage2('Requerido el sueldo base del empleado');
    }  else {

      const isss = sueldo * 0.03;
      const afp = sueldo * 0.04;
      const renta = sueldo * 0.05;
      const sueldofinal = sueldo - isss - afp - renta;
      setTotalSueldo({
        isss: isss.toFixed(2).replace('.', ','),
        afp: afp.toFixed(2).replace('.', ','),
        renta: renta.toFixed(2).replace('.', ','),
        sueldofinal: sueldofinal.toFixed(2).replace('.', ','),
      });
      console.log(setTotalSueldo);
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }
  const reset2 = () => {
    setErrorMessage2('');
    setTotalSueldo(null);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <Result
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calculo sueldo neto</Text>
        <FormSalario 
        setNombre={setNombre}
        setSueldo={setSueldo}
        />
      </SafeAreaView>
      <ResultSueldo
        nombre={nombre}
        sueldo={sueldo}
        totalSueldo={totalSueldo}
        errorMessage2={errorMessage2}
      />
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={sueldocalculate} >
                <Text style={styles.text}>CALCULAR</Text>
            </TouchableOpacity>

        </View>
    </>
  );
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  },
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },

  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: '75%',
},
text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
},
})
