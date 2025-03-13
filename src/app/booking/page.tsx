import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center">
            <h1 className="mt-8 text-2xl font-medium">Booking Venue</h1>
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" className="h-[2em] w-[200px] mt-4"/>
            <TextField variant="standard" name="Contact-number" label="Contact-number" className="h-[2em] w-[200px] mt-4"/>
            <Select variant="standard" id="venue" className="h-[2em] w-[200px] mt-8">
                <MenuItem value='Bloom'>The Bloom Pavilion</MenuItem>
                <MenuItem value='Spark'>Spark Space</MenuItem>
                <MenuItem value='GrandTable'>The Grand Table</MenuItem>
            </Select>
            <DateReserve/>
            <Button variant="outlined" name="Book Venue" className="mt-8">Book Venue</Button>
        </main>
    );
}