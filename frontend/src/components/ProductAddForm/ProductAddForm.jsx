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
    const [files, setFiles] = useState([]);
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

        Object.keys(data).map((key) => {
            formData.append(key, data[key]);
        });

        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i]);
            }
        }

        try {
            for (let pair of formData.entries()) {
                console.log(pair[0] + ", " + pair[1]);
            }

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
    console.log();

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
                name="files"
                multiple
                onChange={(e) => {
                    setFiles(e.target.files);
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
            {conrifmationMessage && (
                <p className={styles.confirmationMessage}>
                    {conrifmationMessage}
                </p>
            )}
        </form>
    );
}
