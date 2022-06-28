import React from 'react'

const Home = () => {
  return (
    <div className="container">
    <h1>DAILY ROUTINE</h1>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Title" value={title} 
        onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
    </form>
    {tasks.map((item,index) => (
     <Task key={index} title={item.title} description={item.description}
     deleteTask={deleteTask}
     index={index}
     />    
   )) }
</div>
)
  )
}

export default Home