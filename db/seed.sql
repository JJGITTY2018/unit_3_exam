DROP DATABASE IF EXISTS marine; 

CREATE DATABASE marine;

\c marine 

CREATE TABLE researchers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  job_title VARCHAR
);


CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  is_mammal boolean NOT NULL
);

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  species_id INT REFERENCES species(id),
  nickname VARCHAR
);

CREATE TABLE habitats
(
  id SERIAL PRIMARY KEY,
  category VARCHAR
);

CREATE TABLE taggings
(
  id SERIAL PRIMARY KEY,
  animal_id INT REFERENCES animals(id) ON DELETE CASCADE,
  researcher_id INT REFERENCES researchers(id) ON DELETE SET NULL
);

CREATE TABLE sightings (
  id SERIAL PRIMARY KEY,
  researcher_id INT REFERENCES researchers(id) ON DELETE SET NULL,
  species_id INT REFERENCES species(id) ON DELETE CASCADE,
  habitat_id INT REFERENCES habitats(id)
);


INSERT INTO researchers (name, job_title) VALUES 
('Mariana Aleta', 'Project Lead'),
('Javed Patrick', 'Senior Field Researcher'),
('Carolina Itai', 'Field Researcher'),
('Jazmyn Gottfried', 'Field Researcher'),
('Ezra Flip', 'Research Intern')
;


INSERT INTO species
  (name, is_mammal)
VALUES
('Dolphin', true),
('Moray Eel',false),
('Tiger Shark',false),
('Orca Whale',true),
('Moon Jelly',false)
;

INSERT INTO animals
  (species_id, nickname)
VALUES
  (1, 'Flip'),
  (1, 'Skip'),
  (2, 'Jenkins'),
  (3, 'Sally'),
  (5, 'Flapjacky'),
  (5, 'Gibbous'),
  (5, 'Nox')
;

INSERT INTO habitats
  (category)
VALUES
('Shallows'), ('Coral Reef'),
('Tide Pools'),
('Deeps')
;

INSERT INTO taggings
  (researcher_id, animal_id)
VALUES
(4, 1),
(5, 1),
(3, 2),
(1, 3),
(2, 4),
(4, 5),
(4, 6),
(2, 7)
;

INSERT INTO sightings
  (species_id, researcher_id, habitat_id)
VALUES
(4,4,4),
(3,1,4),
(5,3,3),
(2,5,2)
;
