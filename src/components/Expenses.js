import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
	return (
		<div className="expenses">
			<ExpenseItem
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
			/>
		</div>
	);
}

export default Expenses;
