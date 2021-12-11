import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [postsList, setPostsList] = useState([]);

  const [title, setTitle] = useState("");

  const [titleEditMode, setTitleEditMode] = useState("");

  const [body, setBody] = useState("");

  const [bodyEditMode, setBodyEditMode] = useState("");

  const [postId, setPostId] = useState(0);

  const [postObject, setPostObject] = useState({
    title: "",
    body: "",
  });
 
  const [isEditMode, setIsEditMode] = useState(false);

  const [editObject, setEditObject] = useState({});

  const [selectedPostId, setSelectedPostId] = useState(-1);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    //code to fetch data from server
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setPostsList(response.data);
      }
    });
  };

  // const onTitleChange = (event) => {
  // setTitle(event.target.value);
  // };

  // const onTitleEditModeChange = (event) => {
  //     setTitleEditMode(event.target.value);
  //     };

  // const onBodyChange = (event) => {
  // setBody(event.target.value);
  // };

  // const onBodyEditModeChange = (event) => {
  //     setBodyEditMode(event.target.value);
  //     };

  const onPostObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setPostObject({
        ...postObject,
        [name]: value,
      });
    }
  };

  const onEditObjectChangeHandler = (event) => {
    // const titleOld ={
    //     title:"a",
    //     body:"b",
    // };
    // const titleNew ={
    //     title:titleOld.title,
    //     body:titleOld.body,
    //     ...titleOld,
    //     title:"c",
    // };
    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...onEditObjectChangeHandler,
        [name]: value,
      });
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(title, body);
    if (!isEditMode) {
      //code to add new records
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          ...postObject,
          postId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added.....!");
          //fetch the data again
          fetchData("");
          setPostObject({
            title: "",
            body: "",
          });
          //reset from
          // setTitle("");
          // setBody("");
        });
    } else {
      //code to edit the records
      if (postId > 0) {
        axios
          .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
            id: postId,
            title,
            body,
            postId: 1,
          })
          .then((response) => {
            if (response) {
              fetchData();
              alert("Updated....!");
              onResetClickHandler();
            }
          });
      }
    }
  };

  const onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        alert("Deleted.....!");
        fetchData("");
      });
  };

  const onRestEditRow =()=>{
    setSelectedPostId(-1);
    setEditObject({title:"",body:""});
  };

const onUpadteClickHandler =()=>{
  if (postId > 0) {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
        id: postId,
        ...editObject,
        postId: 1,
      })
      .then((response) => {
        if (response) {
          fetchData();
          alert("Updated....!");
          // onResetClickHandler();
          onRestEditRow()
        }
      });
  }
}

  const onEdit = (postObject) => {
    console.log(postObject);
    // setIsEditMode(true);
    // setTitle(postObject.title);
    // setTitleEditMode(postObject.title);

    // setBody(postObject.body);
    // setBodyEditMode(postObject.body);

    setEditObject({
      // title:postObject.title,
      // body:postObject.body,
      ...postObject,
    });

    setPostId(postObject.id);
    setSelectedPostId(postObject.id);
  };

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    // setTitle("");
    // setBody("");
  };
  return (
    <>
      <h1>From HooksSample</h1>
      <h2>Post Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title:</label>
        <input
          name="title"
          value={postObject.title}
          onChange={onPostObjectChangeHandler}
        />
        <br />
        <br />
        <label>Body:</label>
        <input
          name="body"
          value={postObject.body}
          onChange={onPostObjectChangeHandler}
        />
        <br />
        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onResetClickHandler}>Reset</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post, index) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>
                  {selectedPostId === post.id ? (
                    <input
                      name="title"
                      value={editObject.title}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    post.title
                  )}
                </td>
                <td>
                  {selectedPostId === post.id ? (
                    <input
                      name="body"
                      value={editObject.body}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    post.body
                  )}
                </td>
                <td>
           
                  {selectedPostId === post.id ? <>
                  <button
                    onClick={
                      onUpadteClickHandler()
                    }
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      onRestEditRow()
                    }}
                  >
                    Reset
                  </button >
                  </> : <><button
                    onClick={() => {
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      onEdit(post);
                    }}
                  >
                    Edit
                  </button></>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
