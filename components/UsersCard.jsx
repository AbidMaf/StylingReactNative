import React, {useState, useEffect} from 'react';

import {
    View,
    StyleSheet,
    FlatList,
    Image,
    Text
} from 'react-native'

const UsersCard = () => {
    const [data, setData] = useState([]);

    const urlAPI = 'https://randomuser.me/api/?results=50';
    
    const renderItem = ({item}) => {
        // console.log('1')
        return (
            <View style={styles.cardContainer}>
                <Image 
                    style={{height: 60, aspectRatio: 1, flex: 1}}
                    source={{uri: item.picture.thumbnail}} 
                />
                <View style={{flex: 5}}>
                    <Text style={styles.textName}>{[item.name.first, '  ', item.name.last]}</Text>
                    <Text>{[item.location.street.number, ' ', item.location.street.name, ', ', item.location.state, ', ', item.location.city]}</Text>
                    <Text>{item.email}</Text>
                    {/* <Text>{ item.picture.thumbnail }</Text> */}
                </View>
            </View>
        )
    }

    
    useEffect(() => {
        fetch(urlAPI)
        .then(response => response.json())
        .then(resData => {
        setData(resData)
        })
    }, [])

    console.log('data1 ', data.results)
    return (
        <View>
            {data && (
                <FlatList 
                data={data.results}
                renderItem={renderItem}
                keyExtractor={item => item.email}
                onEndReachedThreshold='6'
                />
            )}
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 5,
    }, 
    textName: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default UsersCard;