import styles from "./LoginForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Button } from "../Button/Button";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
    const navigate = useNavigate();
    const schema = z.object({
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
            email: "admin@gmail.com",
        },
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:4000/user/login",
                data
            );
            Cookies.set("token", response.data.jwt, { expires: 1 / 24 });

            navigate("/");
        } catch (error) {
            console.log(error);
            setError("root", {
                message: "This email is already taken",
            });
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.header}>Login</h2>
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

            <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
            </Button>
            <ErrorMessage error={errors.root} />
        </form>
    );
}
