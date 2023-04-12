import React from 'react';

const Booking = () => {
    return (
        <div>
            <h1>This is booking page</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Number of pizza</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Razu</td>
        <td>Banani</td>
        <td>2</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Karim</td>
        <td>Uttara</td>
        <td>3</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Imran</td>
        <td>Gulshan</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Booking;