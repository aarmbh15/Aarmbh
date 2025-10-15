CREATE TABLE contact_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    service VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    submission_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bot_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45),
    honeypot_value TEXT,
    attempted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);