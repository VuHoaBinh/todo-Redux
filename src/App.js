import { useDispatch, useSelector } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import { confirm } from './store/ticketSlice'
import backgroundImageUrl from './bgmovie.png';


function App() {
  const { danhSachGhe, total } = useSelector((state) => state.tickets)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value } = e.target
    dispatch(confirm(value))
  }
  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
   
  };
  return (
    <>
      <div style={divStyle}>
        <div className="transparent-background">
          <div className="bookingMovie">
            <div className="content">
              <h1> ĐẶT VÉ XEM PHIM CYBERLEARN.VN </h1>
              <h5>Màn Hình</h5>
            </div>
          </div>
          <div className="row">
            <div className="screen col-8"></div>
            <div className="gridSeat form-group col-8">
              {danhSachGhe.map((ticket, index) => (
                <div className="rowSeat" style={{ gridRow: '1' }}>
                  <div className="rowNumber">{ticket.hang}</div>
                  {ticket.danhSachGhe.map((ghe, index) => (
                    <>
                      <span className="spanNumberSeat">{ghe.soGhe}</span>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={ghe.soGhe}
                        onChange={handleChange}
                        // checked={ghe.daDat}
                        disabled= {ghe.daDat}
                      />
                      <br></br>          
                    </>
                  ))}
                </div>
              ))}
            </div>
            <div className="col-1"></div>
            <div className="listChoice form-group col-3">
              <h1>Dách sách bạn chọn</h1>
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>

              <li className="smallBox redBox">Reserved Seat</li>

              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th>Hủy</th>
                  </tr>
                </thead>
                <tbody>
                  {danhSachGhe.map((ticket, index) =>
                    ticket.danhSachGhe.map(
                      (ghe, index) =>
                        ghe.daDat && (
                          <tr>
                            <td>{ghe.soGhe}</td>
                            <td>{ghe.gia}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => dispatch(confirm(ghe.soGhe))}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        )
                    )
                  )}
                </tbody>
              </table>
              <div>Total: {total}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
