CREATE TABLE IF NOT EXISTS t_p19837706_microloan_landing_pr.blog_post_likes (
    id SERIAL PRIMARY KEY,
    post_slug VARCHAR(255) NOT NULL,
    like_count INTEGER DEFAULT 0,
    last_liked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(post_slug)
);