import { Button } from "../Button/Button";
import { CartProduct } from "../CartProduct/CartProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CartProductList.module.css";

export function CartProductList({ products, handleDelete, updateQuantity }) {
    console.log(handleDelete);
    let sum = 0;
    products.forEach((product) => {
        sum += product.price * product.quantity;
    });

    return (
        <div className={styles.container}>
            <CenteredContent>
                <div className={styles.wrapper}>
                    <div className={styles.holder}>
                        <table className={styles.tableCardProduct}>
                            <caption className={styles.caption}>Koszyk</caption>
                            <thead>
                                <tr className={styles.tableHead}>
                                    <th className={styles.empty}></th>
                                    <th className={styles.brand}>Marka</th>
                                    <th className={styles.quantity}>Ilość</th>
                                    <th className={styles.price}>
                                        Cena za szt.
                                    </th>
                                    <th className={styles.totalPrice}>Suma</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <CartProduct
                                        key={product._id}
                                        product={product}
                                        handleDelete={handleDelete}
                                        updateQuantity={updateQuantity}
                                    />
                                ))}
                                <tr>
                                    <td className={styles.td}></td>
                                    <td className={styles.td}></td>
                                    <td className={styles.td}></td>
                                    <td className={styles.summary}>Suma:</td>
                                    <td className={styles.totalCost}>
                                        {sum} zł
                                    </td>
                                    <td className={styles.td}></td>
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
