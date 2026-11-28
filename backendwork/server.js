
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware must come after app initialization
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Good Morning to everyone");
});

// Student route
app.get("/student", (req, res) => {
    res.json({
        id: 101,
        name: "Asma",
        department: "CSE"
    });
});

// Temporary task data
let tasks = [
    {
        id: 1,
        title: "Learn React",
        status: "Pending",
        college: "Sri Eshwar"
    },
    {
        id: 2,
        title: "Learn Express",
        status: "Completed",
        college: "Kongu College"
    }
];

// GET all tasks
app.get("/api/tasks", (req, res) => {
    res.status(200).json(tasks);
});

// GET one task by ID
app.get("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);
});

// POST: Create a new task
app.post("/api/tasks", (req, res) => {
    const { id, title, status, college } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Valid task ID is required"
        });
    }

    if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            message: "Valid task title is required"
        });
    }

    if (typeof college !== "string" || !college.trim()) {
        return res.status(400).json({
            message: "Valid college name is required"
        });
    }

    if (tasks.some(task => task.id === id)) {
        return res.status(409).json({
            message: "Task ID already exists"
        });
    }

    const newTask = {
        id,
        title: title.trim(),
        status: status || "Pending",
        college: college.trim()
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task created successfully",
        task: newTask
    });
});

// PUT: Update an existing task
app.put("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, status, college } = req.body;

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    if (
        typeof title !== "string" ||
        !title.trim() ||
        !["Pending", "Completed"].includes(status) ||
        typeof college !== "string" ||
        !college.trim()
    ) {
        return res.status(400).json({
            message: "Valid title, status and college are required"
        });
    }

    task.title = title.trim();
    task.status = status;
    task.college = college.trim();

    res.status(200).json({
        message: "Task updated successfully",
        task
    });
});

// DELETE: Delete task by ID
app.delete("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const existingTask = tasks.find(task => task.id === id);

    if (!existingTask) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks = tasks.filter(task => task.id !== id);

    res.status(200).json({
        message: "Task deleted successfully",
        task: existingTask
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
