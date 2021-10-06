import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	const expenseFormDataHandler = (expenseFormData) => {
		const expenseData = {
			id: Math.random(),
			...expenseFormData,
		};
		props.onNewExpense(expenseData);
	};

	const onEdit = () => {
		setIsEditing(true);
	};

	const onCancel = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button type="button" onClick={onEdit}>
					Add new Expense
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					onExpenseFormData={expenseFormDataHandler}
					onCancel={onCancel}
				/>
			)}
		</div>
	);
}

export default NewExpense;
