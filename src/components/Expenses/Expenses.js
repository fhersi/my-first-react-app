import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2022");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.item.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	return (
		<div>
			<ExpensesFilter
				selected={filteredYear}
				onFilterChange={filterChangeHandler}
			/>
			<ExpenseChart expenses={filteredExpenses} />
			<div className="expenses">
				<ExpenseList item={filteredExpenses} />
			</div>
		</div>
	);
}

export default Expenses;
