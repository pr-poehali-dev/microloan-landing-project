CREATE TABLE IF NOT EXISTS t_p19837706_microloan_landing_pr.mfo_clicks (
    id SERIAL PRIMARY KEY,
    mfo_name VARCHAR(255) NOT NULL,
    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    ip_address VARCHAR(45)
);

CREATE INDEX idx_mfo_clicks_name ON t_p19837706_microloan_landing_pr.mfo_clicks(mfo_name);
CREATE INDEX idx_mfo_clicks_date ON t_p19837706_microloan_landing_pr.mfo_clicks(clicked_at);