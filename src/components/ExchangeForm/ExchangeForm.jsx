import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

const ExchangeForm = () => {
  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();

        const [amount, from, , to] =
          e.target.elements.exchange.value.split(' ');
        console.log({ amount, from, to });
        e.target.reset();
      }}
    >
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        name="exchange"
        className={styles.input}
        placeholder="15 USD in UAH"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
      />
    </form>
  );
};

export default ExchangeForm;
