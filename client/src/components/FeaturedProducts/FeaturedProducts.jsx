import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet voluptate nesciunt ad labore a quas odit, doloremque
                    asperiores perferendis sequi laboriosam adipisci possimus
                    et nobis modi ex ullam enim ea?
                </p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading:"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts