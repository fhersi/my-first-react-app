import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

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
			<div className="expenses">
				<ExpenseList item={filteredExpenses} />
				{/* <ExpenseItem
					date={props.item[0].date}
					amount={props.item[0].amount}
					title={props.item[0].title}
				/>
				<ExpenseItem
					date={props.item[1].date}
					amount={props.item[1].amount}
					title={props.item[1].title}
				/>
				<ExpenseItem
					date={props.item[2].date}
					amount={props.item[2].amount}
					title={props.item[2].title}
				/>
				<ExpenseItem
					date={props.item[3].date}
					amount={props.item[3].amount}
					title={props.item[3].title}
				/> */}
			</div>
		</div>
	);
}

export default Expenses;
