import Item from "../Item";

export default function ItemList({ librosList }) {
    const showLibrosDetails = (id) => {
        console.log(`Pepe`)
    }
    return (
        <div className="libros-list" style={{display:'grid',justifyContent:'center'}}>
            
            {librosList.map((libro) => {
                return (
                    <Item
                        key={libro.id}
                        id={libro.id}
                        pictureUrl={libro.pictureUrl}
                        title={libro.title}
                        price={libro.price}
                        description={libro.description}
                        Callback={showLibrosDetails}
                     />
                );
            })}
        </div>
    );
}