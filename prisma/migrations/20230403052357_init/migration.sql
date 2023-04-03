-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movieRent" (
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "movieId"),
    CONSTRAINT "movieRent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movieRent_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_movieRent" ("movieId", "userId") SELECT "movieId", "userId" FROM "movieRent";
DROP TABLE "movieRent";
ALTER TABLE "new_movieRent" RENAME TO "movieRent";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
