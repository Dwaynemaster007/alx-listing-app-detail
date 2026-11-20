import { useState } from "react";

const DAY = 24 * 60 * 60 * 1000;

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [reserved, setReserved] = useState(false);

  const nights = checkIn && checkOut ? Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / DAY) : 0;

  return (
    <div className="sticky top-4 bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price.toLocaleString()}/night</h3>
      <div className="mt-4">
        <label htmlFor="check-in">Check-in</label>
        <input id="check-in" type="date" value={checkIn} onChange={(e) => { setCheckIn(e.target.value); setReserved(false); }} className="border p-2 w-full mt-2" />
      </div>
      <div className="mt-4">
        <label htmlFor="check-out">Check-out</label>
        <input id="check-out" type="date" value={checkOut} min={checkIn || undefined} onChange={(e) => { setCheckOut(e.target.value); setReserved(false); }} className="border p-2 w-full mt-2" />
      </div>

      <div className="mt-4">
        {nights > 0 ? (
          <p>Total payment for {nights} night{nights > 1 ? "s" : ""}: <strong>${(price * nights).toLocaleString()}</strong></p>
        ) : (
          <p className="text-gray-500">Choose your dates to see the total.</p>
        )}
      </div>

      <button
        disabled={nights <= 0}
        onClick={() => setReserved(true)}
        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Reserve now
      </button>
      {reserved && <p role="status" className="mt-3 text-green-700">Reserved! (This is a demo, so no booking was made.)</p>}
    </div>
  );
};

export default BookingSection;
