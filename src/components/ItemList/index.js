import Item from "../Item";
import "./itemList.css"

export default function ItemList({ librosList }) {
    return (
        // <div className="libros-list">
        <div className="parent">
            {librosList.map((libro) => {
                return (
                    <div key={libro.id}>
                    <Item
                        key={libro.id}
                        id={libro.id}
                        pictureUrl={libro.pictureUrl}
                        title={libro.title}
                        price={libro.price}
                        description={libro.description}
                     />
                     </div>
                );
            })}
        </div>
    );
}