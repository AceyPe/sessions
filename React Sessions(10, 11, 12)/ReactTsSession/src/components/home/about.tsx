import {  Link } from "react-router-dom";
import { Button } from "../ui/button";


export default function AboutHome () {




    return (
        <div className="bg-purple-950 h-30 justify-around items-center flex flex-col text-white">
        <h2> Interested? </h2>
        <div className="flex">
          <Link to={"/about"} >
            <Button size={"lg"}>
              Learn More
            </Button>
          </Link>
          <Button size={"lg"}>
            Shop
          </Button>
        </div>
      </div>
    )
}