import { CartProduct } from "../CartProduct/CartProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CartProductList.module.css";

export function CartProductList({ products }) {
    const deliveryCost = 49;
    const minSumForFreeDelivery = 500;

    let sum = 0;
    products.forEach((product) => {
        sum += product.price * product.quantity;
    });

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;
    return (
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
                                <td className={styles.totalCost}>
                                    {totalCost}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </CenteredContent>
    );
}
