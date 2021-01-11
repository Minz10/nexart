import React from 'react'

const Profile = ()=>{
    return(
        <> 
        <div style={{maxWidth:"600px",margin:"20px auto"}}>
             <div style={{borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width:"180px",height:"180px", borderRadius:"90px", margin:"20px 200px"}}
                    src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div  style={{margin:"5px 220px"}}>
                    <h2> Beard Nation </h2>
                </div>  
                <div style={{display:"flex",justifyContent:"space-around",margin:"5px 12px"}}>
                        <h4>1 Posts</h4>
                        <h4>1 Followers</h4>
                        <h4>1 Following</h4>
                </div>
            </div>

            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                <img style={{width: "30%"}} src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img style={{width: "30%"}} src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img style={{width: "30%"}} src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img style={{width: "30%"}} src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img style={{width: "30%"}} src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

            </div>
        </div>
        </>
    )
}

export default Profile