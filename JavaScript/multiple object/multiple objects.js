let hotel = new object();
hotel.TotalRooms = 20;
hotel.BookedRooms = 10;
hotel.checkAvailability = function() {
	return this.TotalRooms-this.BookedRooms;
};
let Trooms = document.getElementById('TotalRoomsno');
Trooms.textContent = hotel.TotalRooms;
let Brooms = document.getElementById('BookedRoomsno');
Brooms.textContent = hotel.BookedRooms;
let Arooms = document.getElementById('AvailabelRoomsno');
Arooms.textContent = hotel.checkavailability();