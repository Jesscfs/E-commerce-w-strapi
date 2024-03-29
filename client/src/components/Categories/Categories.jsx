import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/products/1">Men</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/1827548/pexels-photo-1827548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link className='link' to="/products/2">Sale</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg" alt="" />
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/2902599/pexels-photo-2902599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link className='link' to="/products/1">Stickers</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/869517/pexels-photo-869517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link className='link' to="/products/1">Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className='link' to="/products/1">Clothes</Link>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Categories