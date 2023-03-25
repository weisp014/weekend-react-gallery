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

    // toggle between image and description when clicked
    const toggleDescription = () => {
        setToggle(!toggle);
    }

    const checkIfLikes = () => {
        if(likes === 0) {
            return <p>No people love this :(</p>
        }
        else {
            return <p>{likes} people love this!</p>
        }
    }

    return(
        <div>
            {/* Show description if toggle true */}
            <div>
                {
                toggle ?
                <p className='description' onClick={toggleDescription}>{description}</p>:
                <p><img onClick={toggleDescription} src={path}></img></p>       
                }
            </div>
            <button onClick={() => likedImage(id)}>love it!</button> 
            { checkIfLikes() }
        </div>
    )
}

export default GalleryItem;