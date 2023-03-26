import GalleryItem from "../GalleryItem/GalleryItem";
import ImageList from '@mui/material/ImageList';


function GalleryList({allImages, getGallery}) {


    return(
        <div id="images">
        <ImageList sx={{ width: 700, height: 500 }} cols={4} rowHeight={200}>
            {allImages.map((image) => (
                
                    <GalleryItem key={image.id}
                    id={image.id} 
                    path={image.path} 
                    description={image.description}
                    likes={image.likes}
                    getGallery={getGallery}
                    />
            ))}
        </ImageList>
        </div>
    )
}

export default GalleryList;