import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostEdit from "./PostEdit";

export default function PostsList(){
    const [posts, setPosts] = useState([])
    const [current_post, setCurrentPost] = useState(false)
    const [open_post, setOpenPost] = useState(false)
        useEffect(() => {
          // get list of posts
          fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(data => {
           setPosts(data);
          })
        }, []);

        function handleSubmit(title){
          
          if(current_post){
            // Edit post
            fetch(`https://jsonplaceholder.typicode.com/posts/${current_post.id}`, {
              method: 'PUT',
              body: JSON.stringify({
                id: current_post.id,
                title: title,
                body: 'bar',
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then((response) => response.json())
              .then((res_post) => {
                setPosts(posts.map(p => {
                  if(p.id == res_post.id)
                    return res_post;
                  return p
                }))
              });
          }
          else{
            // New post 
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                title: title,
                body: 'bar',
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
            .then((response) => response.json())
            .then(res_post => {
              setPosts([res_post, ...posts])
            });
          }
            
          setOpenPost(false)
        }
      return <div style={{display: 'flex'}}>
          <div style={{paddingRight: 20}}>
            <div style={{textAlign: 'right'}}>
              <button onClick={() => {
                  setCurrentPost(false)
                  setOpenPost(true)
                }}>Add post</button>
            </div>
              
            <div 
              style={{display: 'flex', flexWrap: 'wrap'}}>
                {posts
                    .map((post, idx) => {
                  return <PostItem 
                        key={post.id} 
                        post={post}
                        index={idx}
                        handleEditPost={() => {
                          setCurrentPost(post)
                          setOpenPost(true)
                        }}
                        />
                  })}

            </div>
          </div>
          {open_post &&
            <PostEdit post={current_post} 
              handleSubmit={title => handleSubmit(title)}
            />
          }
        </div>;
     }