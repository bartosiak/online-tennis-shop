import { Button } from "../Button/Button";
import { CartProduct } from "../CartProduct/CartProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CartProductList.module.css";

export function CartProductList({ products }) {
    let sum = 0;
    products.forEach((product) => {
        sum += product.price * product.quantity;
    });

    return (
        <div className={styles.container}>
            <CenteredContent>
                <div className={styles.wrapper}>
                    <div className={styles.holder}>
                        <table className={styles.table}>
                            <caption>Koszyk</caption>
                            <thead>
                                <tr className={styles.tableHead}>
                                    <th></th>
                                    <th>Marka</th>
                                    <th>Ilość</th>
                                    <th>Cena za jednostkę</th>
                                    <th>Suma</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <CartProduct
                                        key={product._id}
                                        product={product}
                                    />
                                ))}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Suma:</td>
                                    <td className={styles.totalCost}>{sum}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Button>Przejdź dalej</Button>
            </CenteredContent>
        </div>
    );
}
