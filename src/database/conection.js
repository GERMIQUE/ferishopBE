import pgPromise from 'pg-promise';

const pgp = pgPromise({
  schema: 'catalogosis'
});

const db = pgp(process.env.CONN_DB);

export { db as getConnection, pgp as sql };