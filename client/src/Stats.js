import React from 'react'

export default function Stats({ items }) {
    if (!items.length)
      return <em className="stats"> Start adding items to your kit</em>;
    const len = items.length;
    const pack = items.filter((item) => item.packed).length;
    const per = Math.round((pack * 100) / len);
    return (
      <footer className="stats">
        {per !== 100 ? (
          <em>
            You have packed {pack} items out of your {len} items.
            <div>
              <input type="range" min="0" max="100" value={per} readOnly></input>
            </div>
          </em>
        ) : (
          <em>Hurrah !!! You are done packing. Get Set GO</em>
        )}
      </footer>
    );
  }
