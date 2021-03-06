import {Router} from "express";
import {createDoctor} from '../controllers/doctor.controllers';
import {getDoctor} from '../controllers/doctor.controllers';
import {getOneDoctor} from '../controllers/doctor.controllers';
import {updateDoctor} from '../controllers/doctor.controllers';
import {deleteDoctor} from '../controllers/doctor.controllers';

const router = Router();

router.post('/',createDoctor);
router.get('/', getDoctor);
router.get('/:id',getOneDoctor);
router.put('/:id',updateDoctor);
router.delete('/:id',deleteDoctor);

export default router;