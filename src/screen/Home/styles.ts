import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window')
const Styles=StyleSheet.create({
container:{
   flex:1
},
header:{
   width:'100%',
   height:45,
   flexDirection:'row' ,
   alignItems:'center',
   paddingHorizontal:10,
   justifyContent:'space-between'
},
logo:{
    fontWeight:'bold',
    fontSize:20
},
storyScroll:{
    width:'100%'
},
storyContainer:{
    width:85,
    height:140,
    marginLeft:10,
    borderRadius:10,
    
},
storyUserAvatarContainer:{
    position:'absolute',
    width:85,
    height:40,
    bottom:0,
    alignItems:'center',
    justifyContent:'center'
},
storyAvatarImage:{
    width:30,
    height:30,
    borderRadius:15,
    borderColor:'#fff',
    borderWidth:2
},
storyImage:{
    height:140,
    width:85,
    borderRadius:10,
    borderColor:'#607D8B',
    borderWidth:3
},
postContainer:{
    width:width,
    height:50,
    backgroundColor:'black',
    marginTop:10
}
})

export default Styles;