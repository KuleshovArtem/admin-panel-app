import { FilterRowMain } from "../FilterRowMain/FilterRowMain";
import { FilterRowExpansion } from "../FilterRowExpansion/FilterRowExpansion";

export const FilterRow = () => {
    return (
        <div className="filter-row">
                <FilterRowMain/>
                <FilterRowExpansion/>
            </div>
    );
};