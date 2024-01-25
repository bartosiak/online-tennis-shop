import styles from "./Product.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

export function Products({ products }) {
    return (
        <CenteredContent>
            <h2 className={styles.productHeader}>Szeroki wybór</h2>
            <div className={styles.productsWrapper}>
                {products.map((product) => {
                    return <Product key={product._id} product={product} />;
                })}
            </div>
        </CenteredContent>
    );
}
