import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";




export default function Home() {

    const {documents: books} = useCollection('books')
  



  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}

// import { db } from "../config/firebase";
// import { collection, doc, getDocs } from "firebase/firestore";

  // useEffect(() => {
  //   const ref = collection(db, "books");
  //   getDocs(ref).then((snapshot) => {
  //     let results = []
  //     snapshot.docs.forEach(doc => {
  //       results.push({id: doc.id, ...doc.data()})
  //     });
  //     setBooks(results)
  //   })
  // }, [books]);
