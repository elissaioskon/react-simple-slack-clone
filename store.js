// Db simulation
const initialRooms = [
    {name: 'General',messages: []},
    {name: 'Random room 1',messages: []},
    {name:'Football',messages: []}
  ];
export let rooms = initialRooms;

export const clearRooms = () => {
  rooms = initialRooms;
  console.log('Data cleared successfully')
};
