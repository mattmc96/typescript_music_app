import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {Album} from '../../types'
import styles from './styles'
import AlbumComponent from "../Album";


export type AlbumCategoryProps = {
    title: string,
    album: [Album],
}
const AlbumCategory = (props: AlbumCategoryProps) => (
    <View>
        {/* Title of category */}
        <Text styles={styles.title}>{props.title}</Text>
        <FlatList data={props.albums} renderItem={({item})} => <AlbumComponent album={item}/>}
            keyExtractor={({item }) => item.id}
            horizontal={}
            />
    </View>
)

export default AlbumCategory;
