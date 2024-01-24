import { CardProduct } from "../CardProduct/CardProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CartProductList.module.css";

export function CartProductList({ products }) {
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
                                <CardProduct
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </CenteredContent>
    );
}
