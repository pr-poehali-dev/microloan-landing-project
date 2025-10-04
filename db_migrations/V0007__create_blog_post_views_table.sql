CREATE TABLE IF NOT EXISTS blog_post_views (
    id SERIAL PRIMARY KEY,
    post_slug VARCHAR(255) NOT NULL,
    view_count INTEGER DEFAULT 0,
    last_viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(post_slug)
);

CREATE INDEX idx_blog_post_slug ON blog_post_views(post_slug);

INSERT INTO blog_post_views (post_slug, view_count) 
VALUES ('chto-takoe-mikrozajmy', 0)
ON CONFLICT (post_slug) DO NOTHING;