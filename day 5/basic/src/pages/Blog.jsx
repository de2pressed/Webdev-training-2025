import { useState } from "react";

function Blog(){
    let[Data1, setData1] = useState({
        name: "Rahul", 
        rollno: 4672,
        result:"Pass",
    })
    return(
        <>
        <article className="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {Data1.name}
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
      {Data1.result}
    </p>
  </div>
</article>
        </>
    );

}

export default Blog;