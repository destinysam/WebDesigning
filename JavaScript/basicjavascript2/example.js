let hotel = {
	hotelName: 'sunshine',
	totalRooms: 20,
	bookedRooms: 15,
	checkavailbilty:function() {
		// body...
		return this.totalRooms - this.bookedRooms;
	}
};
let honame = document.getElementById('hotelN');
honame.textContent = hotel.hotelName;
let alrooms = document.getElementById('hotelResturant');
alrooms.textContent = hotel.checkavailbilty();
