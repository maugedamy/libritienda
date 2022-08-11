import Item from "../Item";

export default function ItemList({ librosList }) {
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
                     />
                );
            })}
        </div>
    );
}