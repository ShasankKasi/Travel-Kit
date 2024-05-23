import React, { useState } from 'react'
import Item from './Item';

export default function PackingList({ items, del, handleCheck ,handleClear}) {

    const [sortBy,setSortBy]=useState("input");
  
    let sortItems;
    if(sortBy==='input')
      sortItems=items;
    if(sortBy==="description")
      sortItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
    if(sortBy==='packed')
      sortItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed)); 
    if(sortBy==='quantity')
      sortItems=items.slice().sort((a,b)=>Number(a.quantity)-Number(b.quantity)); 
    return (
      <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Item  item={item} del={del} key={item.id} handleCheck={handleCheck}/>
          ))}
        </ul>
       
        <div className="actions">
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
            <option value="quantity">Sort by quantity</option>
          </select>
              <button onClick={handleClear}>Clear List</button>
        </div>
         <p className="text">Click on the ✅ to the left of an item to mark it as packed .
Click on  🗑️ to the right of an item to delete it</p>
      </div>
    );
  }
