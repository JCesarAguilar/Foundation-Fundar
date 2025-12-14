import { P1 } from "../common/Typography";

interface CountryFilterProps {
  countries: string[];
  selectedCountry: string;
  onChange: (country: string) => void;
}

export default function CountryFilter({
  countries,
  selectedCountry,
  onChange,
}: CountryFilterProps) {
  return (
    <div className="flex items-center gap-5 px-5 lg:px-0">
      <P1>Filter by country:</P1>
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-1 lg:py-2 bg-white-smoke text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-bluesky-strong cursor-pointer text-[14px] lg:text-[16px]"
      >
        <option value="">🌍 All countries</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
