# 🎬 Movie Ticket Price Checker

A beginner-friendly JavaScript project that calculates the final movie ticket price based on the customer's age and student status using conditional statements.

## 🚀 Features

- ✅ Free ticket for children under 5 years old
- 🎓 20% discount for students
- 👴 30% discount for senior citizens (60 years and above)
- 🎟️ Full ticket price for all other customers
- ⚠️ Validates age input

---

## 📂 Project Structure

```
02-movie-ticket-price-checker/
│
├── index.js
└── README.md
```

---

## 🛠️ Technologies Used

- JavaScript (ES6)
- Node.js
- VS Code

---

## 📖 Concepts Practiced

- Variables
- Data Types
- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Conditional Statements (`if`, `else if`, `else`)
- Boolean Values

---

## 📋 Business Rules

| Condition | Result |
|-----------|--------|
| Age < 5 | Free Ticket |
| Student | 20% Discount |
| Age ≥ 60 | 30% Discount |
| Otherwise | Full Ticket Price |
| Age ≤ 0 | Invalid Age |

---

## 💻 Example Outputs

### Example 1

**Input**

```text
Age: 70
Student: false
```

**Output**

```text
Your final ticket price = 350
```

---

### Example 2

**Input**

```text
Age: 20
Student: true
```

**Output**

```text
Your final ticket price = 400
```

---

### Example 3

**Input**

```text
Age: 3
Student: false
```

**Output**

```text
Your ticket is free.
```

---

### Example 4

**Input**

```text
Age: -5
Student: false
```

**Output**

```text
Please enter a valid age.
```

---

## ▶️ How to Run

1. Open the project folder.

2. Open a terminal.

3. Run the program:

```bash
node index.js
```

---

## 📌 Current Limitations

- Ticket price is hardcoded (`500`).
- Age and student status are hardcoded.
- User input is not implemented.

---

## 🚀 Future Improvements

- Accept age from user input.
- Ask whether the customer is a student.
- Allow users to enter the ticket price.
- Handle multiple discounts more intelligently.
- Improve output formatting.

---

## 👨‍💻 Author

**Naharul Islam Nadim**

Aspiring MERN Stack Developer

Learning JavaScript through hands-on projects and problem-solving challenges.

---

⭐ If you found this project helpful, consider giving the repository a star!