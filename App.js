import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {result: "0", value1: "", value2: "", status: "", xymbol: "", autoac: "AC"};
  }
  
  btn0(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = value + "0";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn1(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = value + "1";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn2(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = value + "2";
  this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn3(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = "";  
   value = value + "3";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn4(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = value + "4";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn5(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = "";  
   value = value + "5";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn6(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = value + "6";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn7(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = value + "7";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn8(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = value + "8";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btn9(){
   var value = this.state.result
   if (this.state.xymbol == "waiting") value = "";
   if (this.state.result == "0") value = ""; 
   value = value + "9";
   this.setState({result:value, autoac: "C", xymbol:""});
  }
  btndot(){
   var value = this.state.result
   if (this.state.xymbol == "waiting") value = "";
   if (this.state.result == "0") value = ""; 
   if (value.indexOf(".") == -1){
     value = value + ".";
   }
   this.setState({result:value});
   this.setState({xymbol:""});
  }
  setAC(){
   var value = this.state.result;
   if (this.state.xymbol == "waiting") value = ""; 
   if (this.state.result == "0") value = ""; 
   value = "0";
   this.setState({result:value, xymbol:"", autoac:"AC"});
  }
  //----------------------------------
  btnPlus(){
   this.setState({value1: this.state.result});
   this.setState({status: "plus"})
   this.setState({xymbol: "waiting"})
  }
  btnMinus(){
   this.setState({value1: this.state.result});
   this.setState({status: "minute"})
   this.setState({xymbol: "waiting"})
  }
  btnMulti(){
   this.setState({value1: this.state.result});
   this.setState({status: "multiple"})
   this.setState({xymbol: "waiting"})
  }
  btndivide(){
   this.setState({value1: this.state.result});
   this.setState({status: "divide"})
   this.setState({xymbol: "waiting"})
  }
  btnEqual(){
   var value = this.state.result;
   if(this.state.status == "plus"){
     value = Number(value) + Number(this.state.value1);
   }
   if(this.state.status == "minute"){
     value = Number(this.state.value1)- Number(value);
   }
   if(this.state.status == "multiple"){
     value = Number(value) * Number(this.state.value1);
   }
   if(this.state.status == "divide"){
     value = Number(this.state.value1) / Number(value);
   }
   this.setState({result:value});
   this.setState({xymbol: "waiting"})
  }
  render() {
    return (
      <LinearGradient
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />
          <View style={{flex: 0.5}} />
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1}} >
                <Text style={styles.result}>{(this.state.result)}</Text>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn4} onPress = {()=>this.setAC()}><Text style= {styles.titleText}>{this.state.autoac}</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn4}><Text style= {styles.titleText}>+/-</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn4}><Text style= {styles.titleText}>%</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn2} onPress = {()=>this.btndivide()}><Text style= {styles.titleText1}>÷</Text></TouchableOpacity>
              </View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn7()}><Text style= {styles.titleText1}>7</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn8()}><Text style= {styles.titleText1}>8</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn9()}><Text style= {styles.titleText1}>9</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn2} onPress = {()=>this.btnMulti()}><Text style= {styles.titleText1}>x</Text></TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn4()}><Text style= {styles.titleText1}>4</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn5()}><Text style= {styles.titleText1}>5</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn6()}><Text style= {styles.titleText1}>6</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn2} onPress = {()=>this.btnMinus()}><Text style= {styles.titleText1}>-</Text></TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn1()}><Text style= {styles.titleText1}>1</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn2()}><Text style= {styles.titleText1}>2</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btn3()}><Text style= {styles.titleText1}>3</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn2} onPress = {()=>this.btnPlus()}><Text style= {styles.titleText1}>+</Text></TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
              
              <View style={{flex: 2,alignItems: 'left',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn3} onPress = {()=>this.btn0()}><Text style= {styles.titleText1}>0</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn} onPress = {()=>this.btndot()}><Text style= {styles.titleText1}>.</Text></TouchableOpacity>
              </View>
              <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
                  <TouchableOpacity style={styles.btn2} onPress = {()=>this.btnEqual()}><Text style= {styles.titleText1}>=</Text></TouchableOpacity>
              </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'right',
    color : "black"
  },

  titleText1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'right',
    color : "white"
  },

  btn4:{
    alignItems: 'center',
    padding: 5,
    height: 85,
    width: 85,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'rgb(192, 192, 192)',
    justifyContent: 'center', 
  },

  btn3:{
    marginLeft: 10,
    alignItems: 'center',
    paddingRight: 100,
    height: 80,
    width: 190,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'rgb(64, 64, 64)',
    justifyContent: 'center', 
  },

  btn2:{
    alignItems: 'center',
    padding: 5,
    height: 85,
    width: 85,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'rgb(255, 128, 0)',
    justifyContent: 'center', 
  },

  result:{
    paddingRight: 25,
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'right',
    color : "white"
  },
  
  btn:{
    alignItems: 'center',
    padding: 5,
    height: 85,
    width: 85,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'rgb(64, 64, 64)',
    justifyContent: 'center', 
  }

});