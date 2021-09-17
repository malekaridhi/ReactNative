
import React,{useState} from 'react';
import { KeyboardAvoidingView,Platform,StyleSheet, Text, TextInput, View,TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/tasks.jsx'
export default function App() {
  const[task,setTask]=useState()
  const[taskItem,setTaskItem]=useState([])
  const handelTask=()=>{
    Keyboard.dismiss()
setTaskItem([...taskItem,task])
setTask (null)
  }
  const completeTask=(index)=>{
    const itemCopy =[...taskItem]
    itemCopy.splice(index,1)
    setTaskItem(itemCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
      <Text style={styles.textSection}>Today's task </Text>
      <View style={styles.items}>
        {taskItem.map((item,index)=>{
          return  <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
            <Task  text={item}/>

          </TouchableOpacity>

        })}
      </View>
      </View>
     
      <KeyboardAvoidingView 
         behavior={Platform.OS === "ios"? "padding":"height"}
         style={styles.writeTaskWrapper}>
           <TextInput style={styles.input} placeholder={"write a task"}value={task} onChangeText={text=>setTask(text)}/>
           <TouchableOpacity onPress={()=>handelTask()}>
             <View style={styles.addWrapper}>
               <Text style={styles.addText}>+</Text>
             </View>
           </TouchableOpacity>
         </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  textSection:{
    fontSize: 24,
    fontWeight: 'bold'
  },items:{

  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
addWrapper:{
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1
},
addText:{

}


});
