import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */
//GET - localhost:300/skills
router.get('/', skillsCtrl.index)

//GET - localhost:300/skills/new
router.get('/new', skillsCtrl.new)

//GET - localhost:3000/skills/:id (catch all)
router.get('/:id', skillsCtrl.show)

router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)


export {
  router
}
