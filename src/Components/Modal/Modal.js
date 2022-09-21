import React from 'react';

const Modal = ({ data, setData }) => {
	return (
		<>
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
                    <h3 className="text-lg font-bold">{data.name}
                    <div className="badge badge-secondary ">{data.action}</div>
                    </h3>
					<figure>
						<img src={data.img} alt="guns" className="w-[200px] h-[200px]" />
					</figure>
					<h2 className="text-2xl">Bullet: {data.bullet}</h2>
					<h2 className="text-2xl">Action: {data.action}</h2>
				</div>
			</div>
		</>
	);
};

export default Modal;
