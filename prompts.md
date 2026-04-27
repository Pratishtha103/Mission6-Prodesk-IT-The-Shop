"<div>
            <div className="flex-col g-2 text-amber-700  justify-items-center p-10 h-screen bg-[url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHwwfDB8fHww)] bg-center bg-cover bg-no-repeat "> 
                <h2 className="text-7xl mt-50">Welcome to 'The Shop Zone'</h2>
                <p className="text-2xl">A shopper's new highlight</p>
            </div>
        </div>
how can I do the background a little dark, so the text appears"

"is z index necessary for sticky header"

"is there a difference between target and target element"

"how i do i implemet this?
Dynamic Routing: Clicking on a product in the Shop should take me to /product/:id."

"what does this error mean 
um 
react-router-dom.js?v=ff077798:163 No routes matched location "/product/1" 
warning @ react-router-dom.js?v=ff077798:163Understand this warning
react-router-dom.js?v=ff077798:163 No routes matched location "/product/1""

"how to use useParams"

"is this alright? 

```javascriptreact

        <Route path="/product/:id" element={<ProductDetail/>}></Route>
```"

"what's wrong here, why doesn't it render

```javascriptreact
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) =>{ 
                setProduct(data);
                setLoading(false);
            })
            .catch((e) => console.error(e));
    }, [id]);
    return(
        <div className="flex gap-10 p-10">
            <Header/>
            {loading?(
                    <p className="p-6">Loading Product...</p>
            ):(
            <img src={product.thumbnail} alt={product.title} className="w-80 h-80 object-cover rounded-lg" />
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl">{product.title}</h2>
                <p className="text-gray-400">{product.description}</p>
                <p className="text-amber-400 text-2xl font-bold">${product.price}</p>
                <p className="text-green-400">{product.discountPercentage}% OFF</p>
                <p>{product.rating} &#9733;</p>
            </div>
        )}
        </div>
    );
}
export default ProductDetail;
```"
