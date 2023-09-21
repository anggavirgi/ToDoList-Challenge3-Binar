import React, { useState } from 'react'
import data from './utils/data.json'
import logo from './assets/img/logo.png'
import { Button } from './components/Button';
import { Card } from './components/Card';

function App() {

  const [dataList, setDataList] = useState(data)

  // CEK ID TERAKHIR
  const lastId = dataList.length > 0 ? dataList[dataList.length - 1].id : null;

  // ADD TODO
  const [newTodo, setNewTodo] = useState('') 

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!newTodo){
      return;
    }

    let resultId = lastId + 1
    const newItem = {id: resultId, task: newTodo, complete: false}
    
    setDataList([...dataList, newItem])
    
    setNewTodo('')
  }

  //EDIT TODO

  //DELETE TODO

  // BUTTON FUNCTION
  const rawData = data
  
  const showAll = () => {
  }

  const showDone = () => {
    const doneList = dataList.filter((value) => value.complete === true)
    setDataList(doneList)
  }

  const showTodo = () => {
    
  }

  const deleteDone = () => {
    
  }

  const deleteAll = () => {
    
  }

  return (
    <div className='w-3/5 2xl:w-1/2 mt-8 mx-auto border shadow-xl px-10 py-5'>
      <div className='my-2 font-bold text-center text-lg mb-4'>ToDo List App -  Angga</div>
      <form className='w-3/5 mx-auto' onSubmit={handleSubmit}>
        <div className='flex justify-center items-center relative mb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-5 h-5 absolute stroke-purple-500 left-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <input type='text' value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} className='w-full py-2 px-8 text-center text-purple-600 border-b-2 border-purple-300 rounded placeholder-purple-400 outline-none shadow' placeholder='Enter new task' />
        </div>
        <Button name="Save" bgColor="bg-[#F79700]" bgHover="hover:bg-[#ED8200]" />
      </form>

      <hr className='my-7'/>

      <div className='flex justify-between gap-10 mb-10'>
        <div className='flex items-center relative w-1/4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 h-4 absolute stroke-purple-500 left-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type='text' className='w-full py-2 ps-8 pe-2 text-sm text-purple-600 border-b-2 border-purple-300 rounded placeholder-purple-400 outline-none shadow' placeholder='find your ToDo' />
        </div>
        <div className='w-3/5 flex items-center gap-8 text-sm'>
          <div className='font-semibold text-base text-[#16A3B5]'>Filter</div>
          <Button name="All" onClick={showAll} bgColor="bg-[#16A3B5]" bgHover="hover:bg-[#2f8d9c]"/>
          <Button name="Done" onClick={showDone} bgColor="bg-[#16A3B5]" bgHover="hover:bg-[#2f8d9c]"/>
          <Button name="ToDo" onClick={showTodo} bgColor="bg-[#16A3B5]" bgHover="hover:bg-[#2f8d9c]"/>
        </div>
      </div>

      <div>
        {dataList.map((value) => <Card key={value.id} title={value.task} status={value.complete} />)}
      </div>

      <div className='flex gap-6 mt-4'>
        <Button name="Delete done tasks" onClick={deleteDone} bgColor="bg-red-500" bgHover="hover:bg-red-600"/>
        <Button name="Delete all tasks" onClick={deleteAll} bgColor="bg-red-500" bgHover="hover:bg-red-600"/>
      </div>
    </div>
  );
}

export default App;
