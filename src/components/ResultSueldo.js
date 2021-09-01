import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
    const { nombre, sueldo,totalSueldo, errorMessage2 } = props;
    return (
        <View style={styles.content}>
            {totalSueldo && (<View style={styles.boxResult}>
                <Text style={styles.title}>RESUMEN</Text>
                <DataResult title="Nombre empleado:" value={`${nombre}`} />
                <DataResult title="Sueldo base" value={`$${sueldo}`} />
                <DataResult title="ISSS 3%:" value={`$${totalSueldo.isss}`} />
                <DataResult title="AFP 4%:" value={`$${totalSueldo.afp}`} />
                <DataResult title="RENTA 5%:" value={`$${totalSueldo.renta}`} />
                <DataResult
                    title="Total a pagar:"
                    value={`$${totalSueldo.sueldofinal}`}
                />
            </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage2}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 666,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});