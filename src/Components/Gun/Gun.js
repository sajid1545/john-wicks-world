import React from 'react';

const Gun = (props) => {

    const { img,name,bullet,action } = props.gun;

	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-2xl shadow-slate-600">
				<figure>
                    <img src={ img } alt="Shoes" className='w-[200px] h-[200px]' />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{name}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<div className="card-actions">
                        <div className="badge badge-outline">{ bullet }</div>
                        <div className="badge badge-outline">{ action }</div>
                    </div>
                    <div className='flex justify-between mt-5'>
                    <button className="btn btn-outline btn-primary">Details</button>
                    <button onClick={props.count} className="btn btn-outline btn-secondary">Add to Cart</button>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Gun;
