CREATE TABLE IF NOT EXISTS blog_completions (
    id SERIAL PRIMARY KEY,
    post_slug VARCHAR(255) NOT NULL,
    completed_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_completions_post_slug ON blog_completions(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_completions_completed_at ON blog_completions(completed_at);
