import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../components/Item";
import { dummyCars } from "../assets/data";
import { useTranslation } from "react-i18next";

const Listing = () => {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState({
    bodyType: [],
    priceRange: [],
  });
  const [selectedSort, setSelectedSort] = useState("Relevant");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 6;

  const heroDestination = (searchParams.get("destination") || "")
    .toLowerCase()
    .trim();

  const currency = "$";

  // Translatable data
  const sortOptions = [
    { value: "Relevant", label: t("sort.relevant") },
    { value: "Low to High", label: t("sort.lowToHigh") },
    { value: "High to Low", label: t("sort.highToLow") },
  ];

  const bodyType = [
    { value: "Coupe", label: t("bodyType.coupe") },
    { value: "SUV", label: t("bodyType.suv") },
    { value: "Hatchback", label: t("bodyType.hatchback") },
    { value: "Sedan", label: t("bodyType.sedan") },
    { value: "Convertible", label: t("bodyType.convertible") },
    { value: "Van", label: t("bodyType.van") },
    { value: "Grand Tourer", label: t("bodyType.grandTourer") },
  ];

  const priceRange = [
    { value: "0 to 20000", label: "0 - 20,000" },
    { value: "20000 to 30000", label: "20,000 - 30,000" },
    { value: "30000 to 50000", label: "30,000 - 50,000" },
    { value: "50000 to 99000", label: "50,000 - 99,000" },
  ];

  // ✅ Handle filters
  const handleFilterChange = (type, value, checked) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[type] = [...updated[type], value];
      } else {
        updated[type] = updated[type].filter((v) => v !== value);
      }
      return updated;
    });
  };

  // ✅ Sorting function
  const sortCars = (a, b) => {
    if (selectedSort === "Low to High") return a.price.sale - b.price.sale;
    if (selectedSort === "High to Low") return b.price.sale - a.price.sale;
    return 0;
  };

  // ✅ Price match
  const matchPrice = (car) => {
    if (selectedFilters.priceRange.length === 0) return true;
    return selectedFilters.priceRange.some((range) => {
      const [min, max] = range.split(" to ").map(Number);
      return car.price.sale >= min && car.price.sale <= max;
    });
  };

  // ✅ Type match
  const matchesType = (car) => {
    if (selectedFilters.bodyType.length === 0) return true;
    return selectedFilters.bodyType.includes(car.bodyType);
  };

  // ✅ Search match
  const matchesSearch = (car) => {
    if (!searchQuery) return true;
    return (
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // ✅ Destination match
  const matchesHeroDestination = (car) => {
    if (!heroDestination) return true;
    return (car.city || "").toLowerCase().includes(heroDestination);
  };

  // ✅ Filter & sort cars
  const filteredCars = useMemo(() => {
    return dummyCars
      .filter(
        (c) =>
          matchesType(c) &&
          matchPrice(c) &&
          matchesSearch(c) &&
          matchesHeroDestination(c)
      )
      .sort(sortCars);
  }, [dummyCars, selectedFilters, selectedSort, searchQuery, heroDestination]);

  const getPagination = () => {
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCars.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  return (
    <div className="bg-primary">
      <div className="max-padd-container !px-0 mt-20 pb-16">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="min-w-72 bg-white p-4 pl-6 lg:pl-12 rounded-r-xl my-4">
            {/* Sort */}
            <div className="py-3">
              <h5 className="mb-3">{t("filters.sortBy")}</h5>
              <select
                className="bg-primary ring-1 ring-slate-900/10 outline-none
                text-gray-500 text-sm font-semibold h-8 w-full rounded px-2"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                {sortOptions.map((sort, index) => (
                  <option key={index} value={sort.value}>
                    {sort.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Car Type */}
            <div className="p-5 mt-5 bg-primary rounded-xl">
              <h5 className="mb-4">{t("filters.carType")}</h5>
              {bodyType.map((type) => (
                <label
                  key={type.value}
                  className="flex gap-2 text-sm font-semibold text-gray-600 mb-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.bodyType.includes(type.value)}
                    onChange={(e) =>
                      handleFilterChange("bodyType", type.value, e.target.checked)
                    }
                  />
                  {type.label}
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="p-5 mt-5 bg-primary rounded-xl">
              <h5 className="mb-4">{t("filters.priceRange")}</h5>
              {priceRange.map((range) => (
                <label
                  key={range.value}
                  className="flex gap-2 text-sm font-semibold text-gray-600 mb-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.priceRange.includes(range.value)}
                    onChange={(e) =>
                      handleFilterChange("priceRange", range.value, e.target.checked)
                    }
                  />
                  {currency}
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          {/* Cars Listing */}
          <div className="max-sm:px-10 sm:pr-10 bg-white p-4 rounded-l-xl my-4 flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {getPagination().length > 0 ? (
                getPagination().map((car, index) => (
                  <Item key={index} car={car} />
                ))
              ) : (
                <p className="capitalize">
                  {t("filters.noCarsFound")}
                </p>
              )}
            </div>

            <div className="flexCenter flex flex-wrap mt-14 mb-10 gap-3">
              <button
                disabled={currPage === 1}
                onClick={() => setCurrPage((prev) => prev - 1)}
                className={`btn-solid !py-1 !px-3 ${
                  currPage === 1 && "opacity-50 cursor-not-allowed"
                }`}
              >
                {t("pagination.previous")}
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrPage(index + 1)}
                  className={`btn-outline h-8 w-8 p-0 flexCenter ${
                    currPage === index + 1 && "btn-light"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currPage === totalPages}
                onClick={() => setCurrPage((prev) => prev + 1)}
                className={`btn-solid !py-1 !px-3 ${
                  currPage === totalPages && "opacity-50 cursor-not-allowed"
                }`}
              >
                {t("pagination.next")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;