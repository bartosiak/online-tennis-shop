import styles from "./ProductAddForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Button } from "../Button/Button";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

export function ProductAddForm() {
    const [file, setFile] = useState(null);
    const [conrifmationMessage, setConfirmationMessage] = useState("");
    const schema = z.object({
        name: z.string().min(1),
        price: z.string().min(1),
        description: z.string(),
        category: z.string().min(1),
        brand: z.string(),
        stockQuantity: z.string().min(1),
    });

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        const token = Cookies.get("token");
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        if (file) {
            formData.append("file", file);
        }

        try {
            await axios.post("http://localhost:4000/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: token,
                },
            });
            setConfirmationMessage("Product successfully added");
        } catch (error) {
            setError("root", {
                message: "There was an error adding the product",
            });
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.header}>Dodaj Produkt</h2>
            <input
                className={styles.input}
                {...register("name")}
                type="text"
                placeholder="Nazwa produktu"
            />
            <ErrorMessage error={errors.name} />
            <input
                className={styles.input}
                {...register("price")}
                type="number"
                placeholder="Cena"
            />
            <ErrorMessage error={errors.price} />
            <input
                className={styles.input}
                {...register("category")}
                type="text"
                placeholder="Kategoria"
            />
            <ErrorMessage error={errors.category} />
            <input
                className={styles.input}
                {...register("brand")}
                type="text"
                placeholder="Marka"
            />
            <ErrorMessage error={errors.brand} />
            <input
                className={styles.input}
                {...register("stockQuantity")}
                type="number"
                placeholder="Ilość w magazynie"
            />
            <ErrorMessage error={errors.stockQuantity} />
            <input
                {...register("imagesUrl")}
                type="file"
                onChange={(e) => {
                    setFile(e.target.files[0]);
                }}
            />

            <ErrorMessage error={errors.imagesUrl} />
            <textarea
                className={`${styles.input} ${styles.textarea}`}
                {...register("description")}
                type="text"
                placeholder="Opis"
            />
            <ErrorMessage error={errors.description} />

            <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
            </Button>
            <ErrorMessage error={errors.root} />
            {conrifmationMessage && <h4>{conrifmationMessage}</h4>}
        </form>
    );
}
