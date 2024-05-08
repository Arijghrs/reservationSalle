
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function RoomPages() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [startTime, setstartTime] = useState('');
  const [endTime, setendTime] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  async function reserve() {
    if (!room) {
      // Room data is not yet available
      return;
    }
  
    const data = { roomNumber, startTime, endTime, room: room.id };
  
    try {
      await axios.post('/api/res/createres', data);
      // Reservation created successfully, you may want to show a success message
    } catch (error) {
      // Reservation creation failed, handle the error (e.g., display error message)
      console.error('Reservation creation failed:', error);
    }
  }
  

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/room/${id}`).then(Response => {
      setRoom(Response.data);
    });

  }, [id]);

  if (!room) return '';

  const formatDate = (date) => {
    return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
  };




  return (
    <div className='mt-4 bg-gray-100 -mx-8 px-8 py-8'>
      <h1 className='text-2xl mb-4 font-semibold '>Meeting room available</h1>
      {/*<h1>{room.roomNumber}</h1> */}
      <div className='grid gap-2 grid-cols-[2fr_1fr]'>
        <div >
          <img
            className='aspect-square object-cover rounded-xl'
            src='https://www.concept-bureau.fr/img/cms/blog/salle-de-reunion.jpg' />
        </div>
        <div className='grid gap-1 '>
          <img
            className='aspect-square object-cover rounded-xl'
            src='https://www.laradiodesentreprises.com/wp-content/uploads/2022/02/_x_amenagement-salle-de-reunion.jpeg' />
          <img
            className='aspect-square object-cover rounded-xl'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaQwLfoNG4X019F6JQGl-bfdroj7Agg1H5g&s' />
        </div>
      </div>



      <div className="mt-8 mb-8 grid  grid-cols-1 ">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae massa in lorem posuere condimentum. Vestibulum nec fringilla nulla. Mauris ultrices nisi non metus consequat, vel consequat nulla porta. Donec at malesuada lorem.</h3>
          </div>
          <div className='grid grid-cols-[2fr_1fr]'>
            <div className='mb-12'>
              <h2 className="font-semibold text-2xl">About this room</h2>
              roomNumber: {room.roomNumber}<br />
              capacity: {room.capacity}<br />
              equipment: {room.equipment}<br />
              unavailableDates :{room.unavailableDates.map(date => formatDate(date)).join(', ')}
            </div>
            {/*form */}
            <div >
              <div className='bg-white shadow p-4 rounded-2xl mb-4   '>
                <input
                  type='text'
                  placeholder='RoomNumber'
                  value={ room.id}
                  onChange={ev => setRoomNumber(ev.target.value)} />
                <div className='my-4 border py-3 px-4 rounded-2xl'>
                  <label>check in :  </label>
                  <input
                    type='datetime-local'
                    value={startTime}
                    onChange={ev => setstartTime(ev.target.value)}></input>
                </div>
                <div className='my-4 border py-3 px-4 rounded-2xl'>
                  <label>checkout :</label>
                  <input
                    type='datetime-local'
                    value={endTime}
                    onChange={ev => setendTime(ev.target.value)}></input>
                </div>
                <button onClick={reserve} className='primary mt-4'>
                  Reseve
                </button>

              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">extraInfo</div>
      </div>
    </div>
  );
}
