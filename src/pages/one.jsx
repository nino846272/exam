import { useState } from "react";
function One() {
    document.getElementById('convertBtn').addEventListener('click', function () {
        const degree = parseFloat(document.getElementById('degree').value);
        const fromUnit = document.getElementById('unit').value;
        const toUnit = document.getElementById('convertTo').value;
        let result = 0;

        if (fromUnit === toUnit) {
            result = degree;
        } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            result = (degree * 9 / 5) + 32; 
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            result = (degree - 32) * 5 / 9; 
        }

        document.getElementById('result').textContent = `Result: ${result.toFixed(2)} °${toUnit === 'celsius' ? 'C' : 'F'}`;
    });
    return (
        <div>
            <div className="row">
                <div className="col-8 box">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-6">
                                <h2>Enter Temperature</h2>
                                <h5>Degree</h5>
                                <form onSubmit={(e) => e.preventDefault()}></form>
                                <div className="col-12 header">
                                    <div className="row">
                                        <div className="col-8">
                                            <input type="number" id="degree" className="form-control" placeholder="Enter value" requiredss />
                                        </div>
                                        <div className="col-4">
                                            <select class="form-select" id="unit" aria-label="Default select example">
                                                <option selected>C</option>
                                                <option value="1">F</option>
                                                <option value="2">K</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h3 class="text-center mt-4 result" id="result">Result: -</h3>
                                </div>

                            </div>
                            <div className="col-6 legs">
                                <h5>Convert in</h5>
                                <select class="form-select" id="convertTo" aria-label="Default select example">
                                    <option selected>C</option>
                                    <option value="1">F</option>
                                    <option value="2">K</option>
                                </select>
                                <button href="#" className="myButton">Convert</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default One;