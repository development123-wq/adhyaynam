"use state";
import { sendHomeForm } from "@/lib/api";
import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    course: "CUET", // Default course
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    const { name, email, number, location, course } = formData;
    if (!name || !email || !number) {
      setErrorMessage("* Please fill in all fields.");
    }

    try {
      setLoading(true);
      const res = await sendHomeForm({
        name,
        email,
        number,
        location,
        course,
        subject: "Demo Class Form",
      });
      console.log(res, " thsi si res");
      if (res.success === true) {
        alert(
          "We have received your query. You will receive a response from us soon."
        );
        setFormData({
          name: "",
          email: "",
          number: "",
          location: "",
          course: "CUET",
        });
        onClose();
        setLoading(false);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
    }

    // onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center sm:justify-end justify-center z-50 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: "10000" }}
    >
      <div
        className="fixed inset-0 bg-gray opacity-50 "
        onClick={() => onClose()}
      ></div>
      <div
        className="w-90 sm:w-96 border-gray border bg-white p-4 rounded-lg shadow-lg "
        style={{ zIndex: "10000" }}
      >
        <button
          onClick={() => onClose()}
          className="ml-auto block text-red font-bold"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4  text-dark">
          Join A Free Demo Class!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="block font-medium">
              Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              required
              value={formData.number}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="block font-medium">
              Choose a Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded uppercase"
            >
              <option value="CA">cuet</option>
              <option value="CS">ca</option>
              <option value="CET">cs</option>
              <option value="CLT">IX & X all subjects</option>
              <option value="CS">xi & xii commerce</option>
              <option value="CET">clat</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="block font-medium">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex justify-end">
            {!loading ? (
              <>
                <button
                  type="submit"
                  className="bg-red text-white px-4 py-2 rounded hover:bg-dark"
                >
                  Submit
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
