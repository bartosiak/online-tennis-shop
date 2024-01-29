import styles from "./Registration.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Button } from "../Button/Button";

export function RegistrationForm() {
    const schema = z.object({
        name: z.string().min(1),
        street: z.string().min(2),
        zipCode: z.string().min(5),
        city: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(4),
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
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            });
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.header}>Rejestracja</h2>
            <input {...register("name")} type="text" placeholder="Imię" />
            <ErrorMessage error={errors.name} />
            <input {...register("street")} type="street" placeholder="ulica" />
            <ErrorMessage error={errors.street} />
            <input
                {...register("zipCode")}
                type="text"
                placeholder="Kod pocztowy"
            />
            <ErrorMessage error={errors.zipCode} />
            <input {...register("city")} type="text" placeholder="Miasto" />
            <ErrorMessage error={errors.city} />
            <input {...register("email")} type="text" placeholder="Email" />
            <ErrorMessage error={errors.email} />
            <input
                {...register("password")}
                type="password"
                placeholder="Password"
            />
            <ErrorMessage error={errors.password} />

            <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
            </Button>
            <ErrorMessage error={errors.root} />
        </form>
    );
}
