import express, { Express } from "express";
import cors from "cors";
import { connectDb } from "./services/db/index.db";


class App {
	private server: Express;
	port: number;

	constructor(pPort: number = 3000) {
		this.server = express();
		this.port = pPort;
		this.server.use(cors());
		this.middlewares();
		//this.server.use(router);
        this.dbConfig();
	}

	dbConfig() {
		connectDb();
	}

	middlewares() {
		//this.server.use(urlencoded({ extended: false }));
	}

	listen(callback: () => void): void {
		this.server.listen(this.port, callback);
	}
}

export { App };