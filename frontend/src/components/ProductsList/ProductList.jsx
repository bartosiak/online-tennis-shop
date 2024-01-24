import styles from "./ProductList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

export function ProductList({ products }) {
    return (
        <CenteredContent>
            <h2 className={styles.productListHeader}>Szeroki wybór</h2>
            <div className={styles.productsWrapper}>
                {products.map((product) => {
                    return <Product key={product._id} product={product} />;
                })}
            </div>
        </CenteredContent>
    );
}
