import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    
    const { id, title, cover_photo, author, author_img, posted_date, reading_time, hashTags } = blog;
    
    return (
        <div className="border-b border-[#1111111A] py-6">
            <div>
                <img className="w-full rounded-lg" src={cover_photo} alt="" />
            </div>
            <div className="mt-7 flex items-center justify-between">
                <div className="flex gap-5 "> 
                    <div className="w-14 ">
                        <img src={author_img} alt={`Cover Picture of the: ${title}`} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{author}</h3>
                        <p className="font-semibold text-base text-[#11111199]">{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center text-[#11111199]'>
                    <p className='mr-3'>{reading_time} min read</p>
                    <button onClick={() =>
                        handleAddToBookmark(blog)}
                        className='cursor-pointer'
                    ><FaBookmark /></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold my-3"> {title}</h1>
            <div className=" my-4 flex gap-4">
                {
                    hashTags.map((hash, idx) => <a key={idx} href="">
                        <span className="text-[#11111199] text-base font-medium ">#{hash}</span>
                </a>)
                }
            </div>

             <p href=""><span onClick={() => handleMarkAsRead(reading_time, id)} className="text-[#6047EC] font-semibold underline text-base ">Mark As Read</span></p>
                
        </div>
    );
};

export default Blog;