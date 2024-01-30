import styles from "./RegistrationForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Button } from "../Button/Button";
import axios from "axios";

export function RegistrationForm() {
    const schema = z.object({
        name: z.string().min(1),
        address: z.object({
            street: z.string().min(2),
            zipCode: z.string().min(5),
            city: z.string().min(2),
        }),
        email: z.string().email(),
        password: z.string().min(4),
        role: z.string().min(5),
    });

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "test@email.com",
        },
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:4000/user",
                data
            );

            console.log(response);
            console.log("registration successfully completed");
        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            });
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.header}>Rejestracja</h2>
            <input
                className={styles.input}
                {...register("name")}
                type="text"
                placeholder="Imię"
            />
            <ErrorMessage error={errors.name} />
            <input
                className={styles.input}
                {...register("address.street")}
                type="street"
                placeholder="ulica"
            />
            <ErrorMessage error={errors.address?.street} />
            <input
                className={styles.input}
                {...register("address.zipCode")}
                type="text"
                placeholder="Kod pocztowy"
            />
            <ErrorMessage error={errors.address?.zipCode} />
            <input
                className={styles.input}
                {...register("address.city")}
                type="text"
                placeholder="Miasto"
            />
            <ErrorMessage error={errors.address?.city} />
            <input
                className={styles.input}
                {...register("email")}
                type="text"
                placeholder="Email"
            />
            <ErrorMessage error={errors.email} />
            <input
                className={styles.input}
                {...register("password")}
                type="password"
                placeholder="Password"
            />
            <ErrorMessage error={errors.password} />
            <input
                className={styles.input}
                {...register("role")}
                type="role"
                placeholder="Admin lub Customer"
            />
            <ErrorMessage error={errors.role} />

            <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
            </Button>
            <ErrorMessage error={errors.root} />
        </form>
    );
}
