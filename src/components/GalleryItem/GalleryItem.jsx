import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryItem({id, path, description, likes, getGallery}) {

    let [toggle, setToggle] = useState(false);

    // PUT
    const likedImage = (id) => {
        axios.put(`/gallery/like/${id}`)
            .then((response) => {
                console.log(response);
                getGallery();
            })
            .catch((err) => {
                alert('error during put request', err);
            });
    }

    return(
        <div>
            {/* Show description if toggle true */}
            <div>
                {
                toggle ?
                <p>{description}</p>:
                <img src={path}></img>        
                }
            </div>
            <button onClick={() => likedImage(id)}>love it!</button>  
            <p>{likes} people love this!</p>
        </div>
    )
}

export default GalleryItem;