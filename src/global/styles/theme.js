import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const colorsLight = {
    primary: '#46D0D9',
    secondary: '#13497B',
    background: '#F8FBFF',
    
    heading: '#143656',
    
    text: '#000000',
    text2: '#D3DBE2',
    text3: '#B2B2B2',

    red: '#E83F67',
    green: '#6CC775',
    white: '#ffffff',
    dark: '#000000',
    yellow: '#ffd300',
    red: '#E83F67',


    lightGray: '#F0F0F0'
}

export const colorsDark = {
    primary: '#5088D9',
    secondary: '#E2E8F0',
    background: '#171923',
    
    heading: '#eceded',
    
    text: '#eceded',
    text2: '#A0AEC0',
    text3: '#878a91',

    green: '#6CC775',
    white: '#2d3748',
    dark: '#878a91',
    yellow: '#ffd300',
    red: '#B53150',

    lightGray: '#eceded',
}

export const theme = {
    colors: {
        ...colorsDark
    },
    metrics: {
        radius: 4,
        border: 1,
        padding: 8,
        margin: 15,
        screenWidth: windowWidth < windowHeight ? windowWidth : windowHeight,
        screenHeight: windowWidth < windowHeight ? windowHeight : windowWidth,
    },
    fonts: {
        text500: 'Rubik_500Medium',
        text400: 'Rubik_400Regular',
        text300: 'Rubik_300Light',
    }
}