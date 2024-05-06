CREATE TABLE `suburbs` (
	`id` integer PRIMARY KEY NOT NULL,
	`suburb` text,
	`price_median` integer,
	`bathrooms_median` integer,
	`bedrooms_median` integer,
	`garage_median` integer,
	`latitude` integer,
	`longitude` integer
);
--> statement-breakpoint
CREATE INDEX `suburb_idx` ON `suburbs` (`suburb`);