import React from 'react';

const Item1 = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-6">
                <figure><img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Best Pizza in the City</h2>
                    <p>The first franchise pizzeria in Cambodia, The Pizza Company opened its store on July 25.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Pizza</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item1;