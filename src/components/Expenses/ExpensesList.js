import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	let expenseContent = <p>No Expenses Found</p>;

	if (props.item.length <= 0) {
		return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
	}

	return (
		<ul className="expense-list">
			{props.item.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
