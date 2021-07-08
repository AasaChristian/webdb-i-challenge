const express = require('express');
const db = require('./accountsDb');
const router = express.Router();


router.get('/', (req, res) => {
 db.get()
 .then(accounts => {
  res.status(200).json(accounts)
 }).catch(err => {
  res.status(500).json(err)
 })
})

router.get('/:id', (req, res) => {
 const {id} = req.params;
 db.getById(id)
 .then(accounts => {
  res.status(200).json(accounts)
 }).catch(err => {
  res.status(500).json(err)
 })
})

router.post('/', (req, res) => {
 const {body} = req;
 db.insert(body)
 .then(accounts => {
  res.status(201).json(accounts)
 }).catch(err => {
  res.status(500).json(err)
 })
})

router.put('/:id', (req, res)=> {
 const {id} = req.params;
 const {body} = req;
 db.update(id, body)
 .then(accounts => {
  res.status(201).json(accounts)
 }).catch(err => {
  res.status(500).json(err)
 })
})
router.delete('/:id', (req, res)=> {
 const {id} = req.params;
 db.remove(id)
 .then(accounts => {
  res.status(204).json(accounts)
 }).catch(err => {
  res.status(500).json(err)
 })
})
module.exports = router;