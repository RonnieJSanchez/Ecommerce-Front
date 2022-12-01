import { Badge } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function ProductCard({ p }) {
const navigate = useNavigate()

    return (
        <div className="card mb-3 hoverable">
            <Badge.Ribbon text={`$${p?.price}`} color="pink">
                <Badge.Ribbon 
                    text={`${
                        p?.quantity >= 1 
                            ? 'In Stock' 
                            : 'Out of stock'
                    }`}
                    placement="start"
                    color="green"
                >
                <img 
                    className="card-img-top"
                    src={`${process.env.REACT_APP_API}/product/photo/${p._id}`} 
                    alt={p.name} 
                    style={{height: "300px", objectFit: "contain"}}
                />
                </Badge.Ribbon>
            </Badge.Ribbon>
            <div className="card-body">
                <h5>{p?.name}</h5>
                <p className="card-text">{p?.description?.substring(0, 60)}...</p>
            </div>

            <div className="d-flex justify-content-between">
                <button 
                    className="btn btn-primary col card-button" 
                    style={{borderBottomLeftRadius: "5px"}}
                    onClick={() => navigate(`/product/${p.slug}`)}
                >
                    View Product
                </button>

                <button 
                className="btn btn-outline-info col card-button"
                style={{borderBottomRightRadius: "5px"}}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

