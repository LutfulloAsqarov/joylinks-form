import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    MenuItem,
    Typography,
    Dialog,
    DialogContent,
} from "@mui/material";
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
    const [success, setSuccess] = useState("Yuborish");
    const [openModal, setOpenModal] = useState(false); // State for modal visibility

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
            } finally {
                setFormData({
                    Ism: "",
                    Familiya: "",
                    Telefon: "",
                    Mutaxasislik: "",
                });
                setSuccess("Yuborildi");
                setOpenModal(true); // Show the modal
            }
        }
    };

    const handleClose = () => {
        setOpenModal(false); // Close the modal
        setSuccess("Yuborish");
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
                    m: 1,
                    borderRadius: 2,
                    boxShadow: 5,
                    backdropFilter: "blur(10px)",
                    color: "#00d4c6",
                }}
            >
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
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
                            input: { color: "#fff" },
                            label: { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#fff" },
                                "&:hover fieldset": { borderColor: "#fff" },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff",
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff",
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
                            input: { color: "#fff" },
                            label: { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#fff" },
                                "&:hover fieldset": { borderColor: "#fff" },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff",
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff",
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
                            input: { color: "#fff" },
                            label: { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#fff" },
                                "&:hover fieldset": { borderColor: "#fff" },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff",
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff",
                            },
                        }}
                    />
                    <TextField
                        label="Mutaxasislik"
                        fullWidth
                        margin="normal"
                        value={formData.Mutaxasislik}
                        onChange={(e) =>
                            handleChange("Mutaxasislik", e.target.value)
                        }
                        error={!!errors.Mutaxasislik}
                        helperText={errors.Mutaxasislik}
                        sx={{
                            input: { color: "#fff" },
                            label: { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#fff" },
                                "&:hover fieldset": { borderColor: "#fff" },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff",
                                },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff",
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, bgcolor: "#00d4c6", color: "#fff" }}
                    >
                        {success}
                    </Button>
                </form>
            </Box>

            {/* Modal */}
            <Dialog
                open={openModal}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-paper": {
                        borderRadius: "16px", // Rounded corners
                        padding: "20px", // Spacing inside the modal
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
                        backgroundColor: "#121212", // Dark background for modern feel
                        width: "100%",
                        maxWidth: "300px",
                    },
                }}
            >
                <DialogContent>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            color: "#00d4c6", // Highlighted text color
                            fontWeight: "bold", // Bold text
                            marginBottom: "20px", // Spacing below the text
                        }}
                    >
                        Yuborildi!
                    </Typography>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        sx={{
                            bgcolor: "#00d4c6", // Primary button color
                            color: "#fff", // Button text color
                            fontWeight: "bold",
                            textTransform: "none", // Remove uppercase transformation
                            padding: "10px 20px", // More padding for a spacious look
                            borderRadius: "8px", // Rounded button corners
                            "&:hover": {
                                bgcolor: "#00c2b5", // Slightly darker on hover
                            },
                        }}
                        fullWidth
                    >
                        Yopish
                    </Button>
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default App;
