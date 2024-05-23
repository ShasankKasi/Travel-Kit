import React from 'react'

export default function Item({ item, del, handleCheck }) {
    return (
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handleCheck(item.id)}
        />
        <span
          style={
            item.packed ? { color: "white", textDecoration: "line-through", textDecorationColor:"black" } : {}
          }
        >
          {item.quantity} {item.description}
        </span>
        <button onClick={() => del(item.id)}> 🗑️</button>
      </li>
    );
  }
