-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "name" VARCHAR(80) not null,
  "brewery" VARCHAR(80) not null,
  "style" VARCHAR(80) not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
);

-- Sample feedback item
INSERT INTO "feedback" ("name", "brewery", "style", "comments")
VALUES ('Furious', 'Surly', 'IPA', 'I love it!');
