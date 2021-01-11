import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const CreatePost = ()=>{
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(()=>{
        if(url){
            fetch("/createpost ", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title,
                    pic:url
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    //M.toast({html: 'Please Enter all the fields'})
                    console.log("Enter all the fields!!!!");
                }
                else{
                    
                // M.toast({html:"Signed in successfully"});
                    console.log("Post created");
                    history.push('/');
                }
            }).catch(err=>{
                    console.log(err)
            })
        }
    },[url])

    const postDetails = ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset","nexart")
        data.append("cloud_name","albertminz")
        fetch("https://api.cloudinary.com/v1_1/albertminz/image/upload", {
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            //console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })

        
    }


    return(
        <div className="card input-field"
        style={{
            margin:"10px auto",
            maxwidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >
            
            <div className="file-field input-field">
                <div >
                  <input 
                    type="file"
                    onChange={(e)=>setImage(e.target.files[0])}
                  />
                </div>
                <div>
                    <h3>Enter your caption</h3>
                    <input 
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
              
                <div style={{margin:"20px"}}>
                    <button onClick={()=>postDetails()}>
                        <b>Upload</b>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CreatePost