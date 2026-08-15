import {useEffect, useState} from 'react'

export default function ProductsHome() {


    const [posts, setPosts] = useState([]);
    const [fetchBool, setFetchBool] = useState(false);


    async function getPosts () {
        const request = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await request.json();
        setPosts(data);
    } 

    useEffect(() => { // useEffect
        getPosts();

    }, [fetchBool]) // dependancy
    


    console.log(posts);

    type product = {
        name: string,
        imgLink: string,
    }

    const productsArr : product[] = [
            {
            name: "product 1",
            imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ralphlaurenfragrances.com%2Fon%2Fdemandware.static%2F-%2FSites-ralphlauren-master-catalog%2Fdefault%2Fdw01d7cec6%2Fimages%2Fpdp%2FRLFE003%2F100ml%2Fralph-lauren-fragrances-polo-blue-eau-de-parfum-pdp-product-carousel.jpg&f=1&nofb=1&ipt=43af0f92f5078a7742750120493ca8d77b25cfc964dcbc59382ac5155b66aed1"
        },
        {
            name: "product 2",
            imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ralphlaurenfragrances.com%2Fon%2Fdemandware.static%2F-%2FSites-ralphlauren-master-catalog%2Fdefault%2Fdw01d7cec6%2Fimages%2Fpdp%2FRLFE003%2F100ml%2Fralph-lauren-fragrances-polo-blue-eau-de-parfum-pdp-product-carousel.jpg&f=1&nofb=1&ipt=43af0f92f5078a7742750120493ca8d77b25cfc964dcbc59382ac5155b66aed1"
        },
        {
            name: "product 3",
             imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ralphlaurenfragrances.com%2Fon%2Fdemandware.static%2F-%2FSites-ralphlauren-master-catalog%2Fdefault%2Fdw01d7cec6%2Fimages%2Fpdp%2FRLFE003%2F100ml%2Fralph-lauren-fragrances-polo-blue-eau-de-parfum-pdp-product-carousel.jpg&f=1&nofb=1&ipt=43af0f92f5078a7742750120493ca8d77b25cfc964dcbc59382ac5155b66aed1"
        }
        
    ]

    return (
        <div className="flex flex-col">
        {productsArr.length > 0 ? <p className="self-center text-4xl">Number of Products: <span >{productsArr.length}</span></p> : <p>No products Available</p>}
        <div className="flex gap-8 items-center justify-center bg-green-500">
                {/* && and gate  1 1   conditions: true & true */}
            {productsArr.map((product) => (
                <div>
                <h2>
                    {product.name}
                </h2>
                <img className="w-lg" src={product.imgLink}></img>
            </div>
            ))

            }
        </div>
        </div>
    )
}