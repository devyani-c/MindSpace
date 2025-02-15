/*
  # Create mood entries table

  1. New Tables
    - `mood_entries`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `mood` (text)
      - `note` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `mood_entries` table
    - Add policies for authenticated users to:
      - Create their own entries
      - Read their own entries
*/

CREATE TABLE IF NOT EXISTS mood_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  mood text NOT NULL,
  note text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE mood_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can create their own mood entries"
  ON mood_entries
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own mood entries"
  ON mood_entries
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);