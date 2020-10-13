import React from 'react'
import {View, Image, Text } from 'react-native'

export type AlbumProps = {
    id: string;
    imageUri: string;
    artistsHeadline: string;
}


const Album = (props) => {
    <View>
        <Image source={{{uri: props.imageUri }} />
            <Text>{props}
        {/* Image of the Album */}
        {/* Artists headlines */}

    </View>
}
