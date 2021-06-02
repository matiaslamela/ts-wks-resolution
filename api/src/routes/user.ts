import {NextFunction, Response, Request, Router} from 'express';
import {User} from '../models/User';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	User.findAll()
		.then((users) => {
			res.send(users);
		})
		.catch((error) => next({message: error, status: 500}));
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
	const user = req.body;
	User.create(user)
		.then((userCreated) => {
			res.send(userCreated);
		})
		.catch((error) => next({message: error, status: 500}));
});

export default router;
