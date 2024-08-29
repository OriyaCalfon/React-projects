
import { useState } from 'react';
import Form from './components/Form'
import './index.css'
import Logo from './components/Logo'
import PackingList from './components/PackingList'
import Stats from './components/Stats'



function App() {
  const [items, setItems] = useState([]);


  //add new item
  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  //delete an item (filter)
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  //update an item (map)
  function handleToggleItems(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function clearList() {
    const confirmed=window.confirm("Are you sure you want to delete all items?")
    if(confirmed) setItems([])
  }



  return (
    <>
      <div className='app'>
        <Logo></Logo>
        <Form onAddItems={handleAddItems}></Form>
        <PackingList items={items}
          onDeleteItems={handleDeleteItems}
          onToggleItems={handleToggleItems}
          clearList={clearList}>
        </PackingList>
        <Stats items={items}></Stats>
      </div>
    </>
  )
}

export default App
