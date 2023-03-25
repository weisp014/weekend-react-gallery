-- create table
CREATE TABLE "gallery" (
	"id" serial primary key,
	"path" varchar(80) not null,
	"description" varchar(80),
	"likes" integer);

-- insert rows
INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/image1.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
		('images/image2.jpg', 'The sound of music.', 0),
		('images/image3.jpg', 'Mmm coffee.', 0),
		('images/image4.jpg', 'That looks dangerous.', 0),
		('images/image5.jpg', 'The streets are empty.', 0);