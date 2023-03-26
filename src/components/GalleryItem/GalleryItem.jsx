import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import ImageListItem from '@mui/material/ImageListItem';

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

    // DELETE
    const deleteImage = (id) => {
        console.log('in delete');
        axios.delete(`/gallery/${id}`)
            .then((response) => {
                getGallery();
            })
            .catch((err) => {
                alert('error during delete request', err);
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
        <ImageListItem>
            {/* Show description if toggle true */}
            <div>
                {
                toggle ?
                <p className='description' onClick={toggleDescription}>{description}</p>:
                <p><img onClick={toggleDescription} src={path}></img></p>       
                }
            </div>
            <div className='buttons'>
            <Button variant='contained' onClick={() => likedImage(id)}>love it!</Button>
            <Tooltip title="Delete">
            <DeleteIcon fontSize='medium' variant="contained" color="error" onClick={() => deleteImage(id)}>DELETE</DeleteIcon>
            </Tooltip>
            </div>
            { checkIfLikes() }
        </ImageListItem>
    )
}

export default GalleryItem;