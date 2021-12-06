import { FilterRowMain } from "./FilterRowMain";
import { FilterRowExpansion } from "./FilterRowExpansion";

export const FilterRow = () => {
    return (
        <div className="filter-row">
                <FilterRowMain/>
                <FilterRowExpansion/>
            </div>
    );
};