import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
   flex:1,
   width:'100%',
   marginTop: 20,
   backgroundColor:'#fff',
  },
  header: {
    width:'100%',
    flexDirection:'row',

    marginBottom:20,
  },
  headerMenu: {
    flex:1,
    paddingVertical:15,
    borderBottomWidth:1,
    borderBottomColor: '#eee'
  },
  detailsImage: {
    height: 180,
    width: 150,
    borderRadius:12,
    marginTop:20,
  },
  menuTitle: {
    fontSize:18,
    fontWeight:'600',
  }
});

export default styles
