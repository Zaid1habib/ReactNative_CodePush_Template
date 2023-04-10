import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header:{
    flex:0.2,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:'2.5%',
  },
  logo:{
    width:'20%',
    height:'45%',
    objectFit:'contain',
},
  appName:{
    color:'black',
    fontSize:25,
    marginLeft:'5%',
  }
});

export default styles;
