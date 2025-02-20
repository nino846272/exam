import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [degree, setDegree] = useState('');
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('fahrenheit');
  const [result, setResult] = useState(null);

  const convertTemperature = (value, fromUnit, toUnit) => {
    if (fromUnit === toUnit) return value;

    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') return (value * 9 / 5) + 32;
      if (toUnit === 'kelvin') return value + 273.15;
    }
    if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') return (value - 32) * 5 / 9;
      if (toUnit === 'kelvin') return (value - 32) * 5 / 9 + 273.15;
    }
    if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') return value - 273.15;
      if (toUnit === 'fahrenheit') return (value - 273.15) * 9 / 5 + 32;
    }
    throw new Error('Invalid conversion units');
  };

  const handleConvert = () => {
    const degreeValue = parseFloat(degree);
    if (isNaN(degreeValue)) {
      setResult('Please enter a valid number');
      return;
    }

    try {
      const conversionResult = convertTemperature(degreeValue, fromUnit, toUnit);
      setResult(`Result: ${conversionResult.toFixed(2)} °${toUnit === 'celsius' ? 'C' : toUnit === 'fahrenheit' ? 'F' : 'K'}`);
    } catch (error) {
      setResult(error.message);
    }
  };

  const resetForm = () => {
    setDegree('');
    setFromUnit('celsius');
    setToUnit('fahrenheit');
    setResult(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Temperature Converter</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="degree" className="form-label">Enter Temperature</label>
                  <input
                    type="number"
                    id="degree"
                    className="form-control"
                    placeholder="Enter value"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="unit" className="form-label">Convert From</label>
                  <select
                    id="unit"
                    className="form-select"
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                  >
                    <option value="celsius">Celsius (°C)</option>
                    <option value="fahrenheit">Fahrenheit (°F)</option>
                    <option value="kelvin">Kelvin (K)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="convertTo" className="form-label">Convert To</label>
                  <select
                    id="convertTo"
                    className="form-select"
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                  >
                    <option value="fahrenheit">Fahrenheit (°F)</option>
                    <option value="celsius">Celsius (°C)</option>
                    <option value="kelvin">Kelvin (K)</option>
                  </select>
                </div>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-primary w-100" onClick={handleConvert}>Convert</button>
                </div>
              </form>
              <h3 className="text-center mt-4">{result || 'Result: -'}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
