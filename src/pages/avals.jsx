import { useState } from "react";

function Avals() {
    return (
        <div>
            <div className="row header">
                <h2 className='headerz'><button className='hbutton' ><a href="/" className='ha'>About Us</a></button></h2>
            </div>
            <hr />
            <div className="row all">
                <div className="col-12">
                    <a href="/about" className='abo'>About Us</a>
                    <a href="/avals" className='ariv'>New arriavals</a>
                </div>
            </div>
            <div className="row all">
                <h1 className="asdf">New Arrivals</h1>
            </div>
            <div className="row all">
                <div className="col-5 bodytf">
                    <div className="row">
                        <div className="col-6">
                            <p>Winter</p>
                            <h2>Mittens for kids</h2>
                            <p>A cute pair mittens to combat <br />the winter is cold.</p>
                            <br />
                            <br />
                            <p>See details</p>
                        </div>
                        <div className="col-6">
                            <img className='imgf' src="https://avatars.mds.yandex.net/i?id=56ff7e7de85ad7f536303efb5f702ede6cbe365c-5210592-images-thumbs&n=13" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="col-5 bodyts">
                    <div className="row">
                        <div className="col-6">
                            <p>Summer</p>
                            <h2>Kids Sunglasses</h2>
                            <p>Look stylish with these Disney <br />sunglasses</p>
                            <br />
                            <br />
                            <p>See details</p>
                        </div>
                        <div className="col-6">
                            <img src="https://avatars.mds.yandex.net/i?id=d7898f895b0f965b4249a4416a088b50081ef6b4-11512952-images-thumbs&n=13" className='imgs' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row all foot">
                <div className="col-12 footf">
                    <p>Sample project build with Bootstrap</p>
                </div>
            </div>
        </div>
    )
}
export default Avals;