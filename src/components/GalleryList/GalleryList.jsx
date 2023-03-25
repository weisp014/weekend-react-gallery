import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({allImages, getGallery}) {


    return(
        <div className="images">
            {allImages.map((image) => (
                
                    <GalleryItem key={image.id}
                    id={image.id} 
                    path={image.path} 
                    description={image.description}
                    likes={image.likes}
                    getGallery={getGallery}
                    />
            ))}
        </div>
    )
}

export default GalleryList;