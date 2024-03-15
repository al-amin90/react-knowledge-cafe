import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);


  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    const sumOfTime = readTime + time;
    setReadTime(sumOfTime)
    // remove the bookmark 

    const remainingBookmarks = bookmarks.filter(bMark => bMark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    < >
      <Header></Header>
      <div className='md:flex mx-4 lg:mx-11 gap-5'>
        <Blogs
          handleAddToBookmark = {handleAddToBookmark}
          handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readTime = {readTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
