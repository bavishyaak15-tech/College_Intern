
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        id: "",
        title: "",
        status: "Pending"
    });

    const [editingId, setEditingId] = useState(null);

    // GET: Fetch all tasks
    const fetchTasks = async () => {
        try {
            setLoading(true);

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Unable to fetch tasks");
            }

            const data = await response.json();
            setTasks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Handle form input
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // POST: Create a task
    // PUT: Update a task
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        try {
            const isEditing = editingId !== null;

            const url = isEditing
                ? `${API_URL}/${editingId}`
                : API_URL;

            const method = isEditing ? "PUT" : "POST";

            const body = isEditing
                ? {
                    title: form.title,
                    status: form.status
                }
                : {
                    id: Number(form.id),
                    title: form.title,
                    status: form.status
                };

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Request failed");
            }

            setMessage(data.message);

            setForm({
                id: "",
                title: "",
                status: "Pending"
            });

            setEditingId(null);

            await fetchTasks();
        } catch (err) {
            setError(err.message);
        }
    };

    // Load task details into the form
    const handleEdit = (task) => {
        setEditingId(task.id);

        setForm({
            id: task.id,
            title: task.title,
            status: task.status
        });

        setMessage("");
        setError("");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // DELETE: Delete task by title
    const handleDelete = async (title) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${title}"?`
        );

        if (!confirmed) return;

        setMessage("");
        setError("");

        try {
            const url =
                `${API_URL}/title/${encodeURIComponent(title)}`;

            const response = await fetch(url, {
                method: "DELETE"
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Delete failed");
            }

            setMessage(data.message);

            await fetchTasks();
        } catch (err) {
            setError(err.message);
        }
    };

    // Cancel editing
    const handleCancel = () => {
        setEditingId(null);

        setForm({
            id: "",
            title: "",
            status: "Pending"
        });

        setMessage("");
        setError("");
    };

    return (
        <div className="app">
            <header className="header">
                <h1>Task Manager</h1>
                <p>Manage your tasks with Express and React</p>
            </header>

            <main className="container">

                {/* Task Form */}
                <section className="form-card">
                    <h2>
                        {editingId !== null
                            ? "Update Task"
                            : "Create New Task"}
                    </h2>

                    <form onSubmit={handleSubmit}>
                        {!editingId && (
                            <div className="form-group">
                                <label htmlFor="id">
                                    Task ID
                                </label>

                                <input
                                    id="id"
                                    name="id"
                                    type="number"
                                    min="1"
                                    value={form.id}
                                    onChange={handleChange}
                                    placeholder="Enter task ID"
                                    required
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="title">
                                Task Title
                            </label>

                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="Enter task title"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="status">
                                Status
                            </label>

                            <select
                                id="status"
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                            >
                                <option value="Pending">
                                    Pending
                                </option>

                                <option value="Completed">
                                    Completed
                                </option>
                            </select>
                        </div>

                        <div className="form-actions">
                            <button
                                type="submit"
                                className="primary-btn"
                            >
                                {editingId !== null
                                    ? "Update Task"
                                    : "Create Task"}
                            </button>

                            {editingId !== null && (
                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>

                    {message && (
                        <p className="success-message">
                            {message}
                        </p>
                    )}

                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}
                </section>

                {/* Task List */}
                <section className="tasks-section">
                    <div className="tasks-heading">
                        <h2>All Tasks</h2>

                        <button
                            className="refresh-btn"
                            onClick={fetchTasks}
                        >
                            Refresh
                        </button>
                    </div>

                    {loading ? (
                        <p className="empty-message">
                            Loading tasks...
                        </p>
                    ) : tasks.length === 0 ? (
                        <p className="empty-message">
                            No tasks available.
                        </p>
                    ) : (
                        <div className="task-grid">
                            {tasks.map((task) => (
                                <div
                                    className="task-card"
                                    key={task.id}
                                >
                                    <div className="task-top">
                                        <span className="task-id">
                                            ID: {task.id}
                                        </span>

                                        <span
                                            className={
                                                task.status === "Completed"
                                                    ? "status completed"
                                                    : "status pending"
                                            }
                                        >
                                            {task.status}
                                        </span>
                                    </div>

                                    <h3>{task.title}</h3>

                                    {task.college && (
                                        <p className="college">
                                            College: {task.college}
                                        </p>
                                    )}

                                    <div className="task-actions">
                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                handleEdit(task)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDelete(task.title)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
