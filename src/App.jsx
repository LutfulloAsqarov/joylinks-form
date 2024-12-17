import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import img from "./assets/bg.webp";
import logo from "./assets/logo-white.svg";

const specialties = ["Developer", "Designer", "Manager", "Marketer"];
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        Ism: "",
        Familiya: "",
        Telefon: "",
        Mutaxasislik: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.Ism) newErrors.Ism = "Ismni kiriting";
        if (!formData.Familiya) newErrors.Familiya = "Familiyani kiriting";
        if (!formData.Telefon) newErrors.Telefon = "Telefon raqamni kiriting";
        if (!formData.Mutaxasislik)
            newErrors.Mutaxasislik = "Mutaxassislikni tanlang";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append("Ism", formData.Ism);
                formDataToSend.append("Familiya", formData.Familiya);
                formDataToSend.append("Telefon", formData.Telefon);
                formDataToSend.append("Mutaxasislik", formData.Mutaxasislik);

                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbypGg55lSXrHhv5Vdnki3FTh4zqfXhip9YknI2ew_G8BZ9iQ4jkECO9z1IoRa3QLvGa/exec",
                    {
                        method: "POST",
                        body: formDataToSend,
                    }
                );

                if (!response.ok) {
                    throw new Error("Server javob bermadi!");
                }

                const result = await response.json();
            } catch (error) {
                console.error("Xato yuz berdi:", error);
            }
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: 400,
                    mx: "auto",
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 5,
                    backdropFilter: "blur(10px)",
                    color: "#00d4c6",
                }}
            >
                {/* <Typography align="center"> */}
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {/* </Typography> */}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Ism"
                        fullWidth
                        margin="normal"
                        value={formData.Ism}
                        onChange={(e) => handleChange("Ism", e.target.value)}
                        error={!!errors.Ism}
                        helperText={errors.Ism}
                        sx={{
                            input: {
                                color: "#fff", // Input matnining rangi oq
                            },
                            label: {
                                color: "#fff", // Label (yorliq) rangi oq
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#fff", // Chekka chiziqning odatdagi rangi oq
                                },
                                "&:hover fieldset": {
                                    borderColor: "#fff", // Hover paytidagi chiziqning rangi oq
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff", // Fokuslangan chiziqning rangi oq
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff", // Fokuslangan label rangi oq
                            },
                        }}
                    />
                    <TextField
                        label="Familiya"
                        fullWidth
                        margin="normal"
                        value={formData.Familiya}
                        onChange={(e) =>
                            handleChange("Familiya", e.target.value)
                        }
                        error={!!errors.Familiya}
                        helperText={errors.Familiya}
                        sx={{
                            input: {
                                color: "#fff", // Input matnining rangi oq
                            },
                            label: {
                                color: "#fff", // Label (yorliq) rangi oq
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#fff", // Chekka chiziqning odatdagi rangi oq
                                },
                                "&:hover fieldset": {
                                    borderColor: "#fff", // Hover paytidagi chiziqning rangi oq
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff", // Fokuslangan chiziqning rangi oq
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff", // Fokuslangan label rangi oq
                            },
                        }}
                    />
                    <TextField
                        label="Telefon raqami"
                        fullWidth
                        margin="normal"
                        value={formData.Telefon}
                        onChange={(e) =>
                            handleChange(
                                "Telefon",
                                e.target.value.replace(/\D/g, "").slice(0, 12)
                            )
                        }
                        error={!!errors.Telefon}
                        helperText={errors.Telefon}
                        sx={{
                            input: {
                                color: "#fff", // Input matnining rangi oq
                            },
                            label: {
                                color: "#fff", // Label (yorliq) rangi oq
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#fff", // Chekka chiziqning odatdagi rangi oq
                                },
                                "&:hover fieldset": {
                                    borderColor: "#fff", // Hover paytidagi chiziqning rangi oq
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff", // Fokuslangan chiziqning rangi oq
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff", // Fokuslangan label rangi oq
                            },
                        }}
                    />
                    <TextField
                        label="Mutaxassislik"
                        fullWidth
                        margin="normal"
                        value={formData.Mutaxasislik}
                        onChange={(e) =>
                            handleChange("Mutaxasislik", e.target.value)
                        }
                        error={!!errors.Mutaxasislik}
                        helperText={errors.Mutaxasislik}
                        sx={{
                            input: {
                                color: "#fff", // Input matnining rangi oq
                            },
                            label: {
                                color: "#fff", // Label (yorliq) rangi oq
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#fff", // Chekka chiziqning odatdagi rangi oq
                                },
                                "&:hover fieldset": {
                                    borderColor: "#fff", // Hover paytidagi chiziqning rangi oq
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff", // Fokuslangan chiziqning rangi oq
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff", // Fokuslangan label rangi oq
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, bgcolor: "#00d4c6", color: "#fff" }}
                    >
                        Yuborish
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default App;
