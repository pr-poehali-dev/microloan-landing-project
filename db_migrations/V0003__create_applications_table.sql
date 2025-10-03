CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    amount INTEGER,
    days INTEGER,
    form_type VARCHAR(100),
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_applications_created_at ON applications(created_at DESC);