import css from './TransactionHistory.module.css';

export const TransactionElem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.element}>{type}</td>
      <td className={css.element}>{amount}</td>
      <td className={css.element}>{currency}</td>
    </tr>
  );
};
