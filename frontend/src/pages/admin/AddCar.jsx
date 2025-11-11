import React, { useState } from "react";
import { assets } from "../../assets/data";
import { useUser} from "@clerk/clerk-react";

const AddCar = () => {
  const bodyType = [
    "Coupe",
    "SUV",
    "Hatchback",
    "Sedan",
    "Convertible",
    "Van",
    "Grand Tourer",
  ];
  const transmissions = ["Automatic", "Manual", "CVT", "Dual-clutch"];
  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const { user } = useUser();
  const currency ="$";
  

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [features, setFeatures] = useState({
    rearCamera: false,
    appleCarPlay: false,
    keylessEntry: false,
    adaptiveCruise: false,
    heatedSeats: false,
    sunroof: false,
    parkingAssist: false,
    cruiseControl: false,
  });

  const handleImageUpload = (slot, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prev) => ({ ...prev, [slot]: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeatureChange = (feature) => {
    setFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 min-h-screen bg-white shadow rounded-xl">
      <div>
        <div className="w-full mb-5">
          <h5 className="text-gray-700 font-medium mb-2">Car Name</h5>
          <input
            placeholder="Type here..."
            className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>{" "}
        <div className="w-full mb-5">
          <h5 className="text-gray-700 font-medium mb-2">Car Description</h5>
          <textarea
            rows={4}
            placeholder="Type here..."
            className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>
        {/* City, Country, Car Type Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full mb-5">
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">City</h5>
            <input
              type="text"
              placeholder="Type here..."
              className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Country</h5>
            <input
              type="text"
              placeholder="Type here..."
              className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Car Type</h5>
            <select className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Type</option>
              {bodyType.map((bt) => (
                <option key={bt} value={bt}>
                  {bt}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Address and Odometer Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full mb-5">
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Address</h5>
            <input
              type="text"
              placeholder="Type here..."
              className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Odometer</h5>
            <input
              type="text"
              placeholder="e.g. 2,500(km)"
              className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        {/* Rent Price, Sale Price, Transmission, Seats, Fuel Type Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full mb-5">
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Rent Price /day</h5>
            <input
              type="number"
              placeholder="99"
              className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Sale Price</h5>
            <input
              type="number"
              placeholder="9999"
              className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Transmission</h5>
            <select className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Type</option>
              {transmissions.map((trans) => (
                <option key={trans} value={trans}>
                  {trans}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Seats</h5>
            <input
              type="number"
              placeholder="1"
              className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-700 font-medium mb-2">Fuel Type</h5>
            <select className="px-3 py-2 ring-1 ring-slate-300 rounded-lg bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Type</option>
              {fuelTypes.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Features */}
        <div className="mb-5">
          <h5 className="text-gray-700 font-medium mb-3">Features</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.rearCamera}
                onChange={() => handleFeatureChange("rearCamera")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Rear Camera</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.appleCarPlay}
                onChange={() => handleFeatureChange("appleCarPlay")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Apple CarPlay</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.keylessEntry}
                onChange={() => handleFeatureChange("keylessEntry")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Keyless Entry</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.adaptiveCruise}
                onChange={() => handleFeatureChange("adaptiveCruise")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Adaptive Cruise</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.heatedSeats}
                onChange={() => handleFeatureChange("heatedSeats")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Heated Seats</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.sunroof}
                onChange={() => handleFeatureChange("sunroof")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Sunroof</span>
            </label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.parkingAssist}
                onChange={() => handleFeatureChange("parkingAssist")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Parking Assist</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={features.cruiseControl}
                onChange={() => handleFeatureChange("cruiseControl")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Cruise Control</span>
            </label>
          </div>
        </div>
        {/* Image Upload */}
        <div className="mb-6">
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((slot) => (
              <div key={slot} className="relative">
                <input
                  type="file"
                  id={`image-${slot}`}
                  accept="image/*"
                  onChange={(e) => handleImageUpload(slot, e)}
                  className="hidden"
                />
                <label
                  htmlFor={`image-${slot}`}
                  className="flex items-center justify-center w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  {images[slot] ? (
                    <img
                      src={images[slot]}
                      alt={`Preview ${slot}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={assets.uploadIcon}
                      className="w-8 h-8 text-gray-400"
                    />
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-full transition-colors"
        >
          Add Car
        </button>
      </div>
    </div>
  );
};

export default AddCar;
