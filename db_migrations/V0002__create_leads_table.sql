CREATE TABLE IF NOT EXISTS t_p19837706_microloan_landing_pr.leads (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(500) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);

CREATE INDEX idx_leads_created_at ON t_p19837706_microloan_landing_pr.leads(created_at);
CREATE INDEX idx_leads_phone ON t_p19837706_microloan_landing_pr.leads(phone);