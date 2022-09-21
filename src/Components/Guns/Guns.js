import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = () => {
	const [guns, setGuns] = useState([]);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
			.then((res) => res.json())
			.then((data) => setGuns(data));
    }, []);
    
    
	return (
       
		<div>
            <h1 className='text-5xl mt-4'>Welcome To Jonh Wick's World</h1>
            
            <div className='grid grid-cols-3 gap-5 mt-10 max-w-[1300px] mx-auto'>
                {
                    guns.map(gun => <Gun key={gun.id} gun={ gun } />)
                }
           </div>
		</div>
	);
};

export default Guns;
