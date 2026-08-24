import { useParams } from "react-router-dom"

export default function Product() {

    const {id} = useParams()
    return (
        <div>
            <h1>
                Product #{id}
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus error beatae repellat necessitatibus sed deserunt impedit assumenda. Laborum nisi corporis debitis obcaecati vitae unde quibusdam quod cupiditate modi rerum!
            </p>
        </div>
    )
}