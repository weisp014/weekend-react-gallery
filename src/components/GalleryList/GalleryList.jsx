import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({allImages}) {


    return(
        <div>
            {allImages.map((image) => (
                
                    <GalleryItem key={image.id}
                    id={image.id} 
                    path={image.path} 
                    description={image.description}
                    likes={image.likes}
                    />
            ))}
        </div>
        // <GalleryItem />
    )
}

export default GalleryList;