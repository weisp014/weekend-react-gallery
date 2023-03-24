

function GalleryItem({id, path, description, likes}) {
    return(
        <div>
            <img src={path}></img>
            {description}
            {likes}
        </div>
    )
}

export default GalleryItem;