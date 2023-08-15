import {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { products } from '../db/productList'


function Search(props) {
const [search, setSearch] = useState('')

  return (
    <div className="con-4">
                {products.map(p => {
                  if (props.search !== ''  && p.name?.toLowerCase().includes(props.search.toLowerCase()) )
                    return (
                        <div className="img-box-a1">
                            <a href=""><img loading="lazy" src={`/images/` + p.images[0].name} alt="" width="100%" height="100%" /></a>
                            <h4>ASIAN <br />
                                {p.name}</h4>
                            <h2>₹{p.price}</h2>
                            <h5>M.R.P: <s>₹{p.price + 200}</s></h5>
                            <Link to={`/product/${p.id}`}>
                                <button>View Product</button>
                            </Link>


                        </div>
                    )
                })

                }
                </div> 
  )
}

export default Search