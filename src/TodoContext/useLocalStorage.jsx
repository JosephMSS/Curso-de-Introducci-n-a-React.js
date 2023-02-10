import { useState, useEffect } from "react";

export function useLocalStorage({ itemName, initialValue }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);
  let parsedItem;

  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    setTimeout(() => {
      try {
        if (!localStorageItem) {
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        // throw new Error("c murio");
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 1000);
  }, []);
  /**
   *
   * @param {Array} newItemList
   */
  const saveItem = (newItemList) => {
    try {
      const stringifiedItem = JSON.stringify(newItemList);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItemList);
    } catch (error) {
      setError(true);
    }
  };
  /**
   * Cuando un hook retorna mas de dos elementos, esto se retornan en un objeto y no un array
   */
  return { item, saveItem, loading, error };
}
