import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="w-1/3 mt-6">
            <div className="text-center bg-[#6047EC1A] border border-[#6047EC] rounded-lg py-5">
                <h1 className="text-[#6047EC] font-bold text-xl">Spent time on read : </h1>
            </div>
            {/* bookmark list is here  */}
            <div className="bg-[#1111110D] mt-6 p-6 rounded-lg">
                <h1 className=" font-bold text-xl">Bookmarked Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark
                        bookmark={bookmark}
                    ></Bookmark>)
                }        
            </div>
        </div>
    );
};

export default Bookmarks;