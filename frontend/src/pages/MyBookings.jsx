import React, { useState, useEffect } from "react";
import { assets, dummyBookingsData } from "../assets/data";
import { useUser } from "@clerk/clerk-react";
import Title from "../components/Title";
import { useTranslation } from "react-i18next";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const currency = "$";
  const { user } = useUser();
  const { t } = useTranslation();

  const getUserBooking = async () => {
    setBookings(dummyBookingsData);
  };

  useEffect(() => {
    if (user) {
      getUserBooking();
    }
  }, [user]);

  return (
    <div className="bg-primary py-16 pt-24">
      <div className="max-padd-container">
        <Title title2={t("title")} paraStyles={""} />
        {/* Bookings List */}
        {bookings?.map((booking) => (
          <div
            key={booking._id}
            className="bg-white ring-1 mt-2 ring-slate-900/5 rounded-xl overflow-hidden mb-4 shadow-sm"
          >
            <div className="p-4 md:p-6">
              {/* Top Section */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-4">
                <div className="bg-primary rounded-xl overflow-hidden flexCenter w-full md:w-48 h-40 md:h-32 flex-shrink-0">
                  <img
                    src={booking.car.images[0]}
                    alt={booking.car.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 md:mb-2">{booking.car.title}</h3>

                  <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-3 md:mb-2">
                    <div className="flexStart gap-2">
                      <h5>{t("seats")}</h5>
                      <p>{booking.car.specs.seats}</p>
                    </div>
                    <div className="flexStart gap-2">
                      <h5>{t("total")}</h5>
                      <p>
                        {currency}
                        {booking.totalPrice}
                      </p>
                    </div>
                  </div>

                  <div className="flexStart gap-2">
                    <img
                      src={assets.pin}
                      alt=""
                      width={13}
                      className="opacity-60 flex-shrink-0"
                    />
                    <p className="line-clamp-2">{booking.car.address}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 border-t border-gray-100 pt-4 md:pt-2">
                <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                  <div className="flex flex-col md:block">
                    <h5 className="inline mr-2">{t("bookingId")}:</h5>
                    <p className="inline font-mono text-xs md:text-sm break-all">
                      {booking._id}
                    </p>
                  </div>

                  <div className="flex gap-4 md:gap-8">
                    <div className="flex-1 md:flex-none">
                      <h5 className="block md:inline mr-0 md:mr-2 mb-1 md:mb-0">
                        {t("pickUp")}:
                      </h5>
                      <p className="block md:inline text-xs md:text-sm">
                        {new Date(booking.pickUpDate).toDateString()}
                      </p>
                    </div>
                    <div className="flex-1 md:flex-none">
                      <h5 className="block md:inline mr-0 md:mr-2 mb-1 md:mb-0">
                        {t("dropOff")}:
                      </h5>
                      <p className="block md:inline text-xs md:text-sm">
                        {new Date(booking.dropOffDate).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <div className="flexStart gap-2">
                    <h5>{t("payment")}:</h5>
                    <div className="flexStart gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          booking.isPaid ? "bg-green-500" : "bg-orange-400"
                        }`}
                      ></div>
                      <p>
                        {booking.isPaid
                          ? t("paid")
                          : t("unpaid")}
                      </p>
                    </div>
                  </div>

                  {!booking.isPaid && (
                    <button className="btn-solid whitespace-nowrap">
                      {t("payNow")}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
