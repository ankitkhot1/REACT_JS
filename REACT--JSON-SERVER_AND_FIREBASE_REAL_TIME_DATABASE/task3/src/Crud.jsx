// src/CRUD.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const CRUD = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'items'));
        setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addItem = async () => {
    try {
      await addDoc(collection(db, 'items'), { text: newItem });
      setNewItem('');
    } catch (err) {
      setError(err.message);
    }
  };

  const updateItem = async (id, newText) => {
    try {
      const itemRef = doc(db, 'items', id);
      await updateDoc(itemRef, { text: newText });
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      const itemRef = doc(db, 'items', id);
      await deleteDoc(itemRef);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add Item</button>

      {loading && <p>Loading...</p>} {/* Display loading spinner */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => updateItem(item.id, prompt('New text', item.text))}>Update</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;
