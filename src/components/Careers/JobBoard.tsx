"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";

interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  url: string;
}

const JOBS: Job[] = [
  { id: "1", title: "Senior AI Engineer", location: "Bangalore, India", department: "Engineering", url: "#" },
  { id: "2", title: "Frontend Architect", location: "Remote", department: "Engineering", url: "#" },
  { id: "5", title: "Data Scientist", location: "Bangalore, India", department: "Engineering", url: "#" },
  { id: "7", title: "QA Automation Engineer", location: "Thane, India", department: "Engineering", url: "#" },
  { id: "3", title: "Product Designer", location: "Thane, India", department: "Product", url: "#" },
  { id: "4", title: "Enterprise Account Executive", location: "Mumbai, India", department: "Sales", url: "#" },
  { id: "6", title: "Customer Success Manager", location: "Remote", department: "Sales", url: "#" },
  { id: "8", title: "Solutions Architect", location: "Mumbai, India", department: "Sales", url: "#" },
];

const DEPARTMENTS = ["All Departments", "Engineering", "Sales", "Product"];
const LOCATIONS = ["All Locations", "Bangalore, India", "Mumbai, India", "Thane, India", "Remote"];

export const JobBoard = () => {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All Departments");
  const [locFilter, setLocFilter] = useState("All Locations");

  const isFiltered = search !== "" || deptFilter !== "All Departments" || locFilter !== "All Locations";

  const filteredJobs = useMemo(
    () =>
      JOBS.filter((job) => {
        const searchMatch = job.title.toLowerCase().includes(search.toLowerCase());
        const deptMatch = deptFilter === "All Departments" || job.department === deptFilter;
        const locMatch = locFilter === "All Locations" || job.location === locFilter;
        return searchMatch && deptMatch && locMatch;
      }),
    [search, deptFilter, locFilter]
  );

  const groupedJobs = useMemo(() => {
    const groups: Record<string, Job[]> = {};
    filteredJobs.forEach((job) => {
      if (!groups[job.department]) groups[job.department] = [];
      groups[job.department].push(job);
    });
    return groups;
  }, [filteredJobs]);

  const resetFilters = () => {
    setSearch("");
    setDeptFilter("All Departments");
    setLocFilter("All Locations");
  };

  return (
    <section 
      id="open-positions" 
      className="py-32 bg-transparent"
    >
      <div className="container-page">
        {/* Heading */}
        <h1 className="text-4xl md:text-[44px] font-bold text-gray-900 mb-16 tracking-tight">
          All openings
        </h1>

        {/* 🔍 Search + Filters */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 mb-24">
          <div className="relative flex-1">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search job roles.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-8 py-5 rounded-full border border-purple-100 outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-base bg-white shadow-sm"
            />
          </div>

          <div className="flex gap-4">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="px-8 py-4 rounded-full border border-purple-100 outline-none bg-white text-[15px] font-medium cursor-pointer hover:border-purple-200 transition-colors h-[60px] min-w-[200px] shadow-sm"
            >
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select
              value={locFilter}
              onChange={(e) => setLocFilter(e.target.value)}
              className="px-8 py-4 rounded-full border border-purple-100 outline-none bg-white text-[15px] font-medium cursor-pointer hover:border-purple-200 transition-colors h-[60px] min-w-[200px] shadow-sm"
            >
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-600 text-base font-bold hover:bg-purple-50 transition-colors whitespace-nowrap h-[60px]"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* 📂 Job List */}
        <div className="space-y-32">
          {Object.entries(groupedJobs).length > 0 ? (
            Object.entries(groupedJobs).map(([dept, jobs]) => (
              <div key={dept}>
                {/* Department heading */}
                <h2 className="text-[22px] font-bold text-purple-600 mb-12 uppercase tracking-[0.2em]">
                  {dept}
                </h2>

                <div className="space-y-10">
                  {jobs.map((job) => (
                    <a
                      key={job.id}
                      href={job.url}
                      className="block py-10 px-10 rounded-[24px] border border-purple-100 bg-white hover:bg-white hover:border-purple-300 transition-all group/job shadow-sm hover:shadow-xl"
                    >
                      <div className="flex flex-row items-center justify-between gap-8">
                        <h3 className="text-[22px] font-bold text-gray-900 group-hover/job:text-purple-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-500 font-bold text-[16px] tracking-tight">
                          {job.location}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="py-32 text-center bg-white rounded-[40px] border border-dashed border-purple-200 shadow-sm">
              <p className="text-gray-500 font-medium text-xl mb-8">
                No openings found matching your criteria.
              </p>
              <button
                onClick={resetFilters}
                className="text-purple-600 font-bold hover:underline px-10 py-4 rounded-full border-2 border-purple-100 hover:bg-purple-50 transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
