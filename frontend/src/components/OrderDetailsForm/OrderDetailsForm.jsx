import { Button } from "../Button/Button";
import styles from "./OrderDetailsForm.module.css";
import { Form } from "react-router-dom";

const countries = [
    "Polska",
    "Niemcy",
    "Francja",
    "Włochy",
    "Hiszpania",
    "Portugalia",
    "Holandia",
    "Belgia",
    "Szwecja",
    "Dania",
];

export async function createOrder(args) {
    const formData = await args.request.formData();
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    return fetch("http://localhost:4000/order", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export function OrderDetailsForm() {
    return (
        <Form className={styles.container} method="POST" action="/orderDetails">
            <label>
                Wybierz:
                <div className={styles.radio}>
                    <input
                        type="radio"
                        name="customerType"
                        value="Klient indywidualny"
                        required
                    />
                    Klient indywidualny
                </div>
                <div className={styles.radio}>
                    <input type="radio" name="customerType" value="Firma" />{" "}
                    Firma
                </div>
            </label>

            <label>
                Imię i Nazwisko:
                <input type="text" name="name" pattern="[A-Za-z]+" required />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                />
            </label>

            <label>
                Adres dostawy:
                <select name="country">
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Telefon:
                <input type="phone" name="phone" pattern="[0-9]{9}" required />
            </label>
            <label>
                Ulica:
                <input type="text" name="street" />
            </label>
            <label>
                Kod pocztowy:
                <input type="text" name="postalCode" />
            </label>
            <label>
                Miasto:
                <input type="text" name="city" />
            </label>
            <Button type="submit">Wyślij</Button>
        </Form>
    );
}
