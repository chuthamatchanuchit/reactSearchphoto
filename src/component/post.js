import React from 'react';


function Post ({results}) {
    let image = [];
    if(results.data) {
        image = results.data.results;
    }

    return (
        <div className="container">
        {image.map((item)=> (

            <img className="photo" src={item.urls.small}/>
        ))}
        </div>
    )
}

export default Post