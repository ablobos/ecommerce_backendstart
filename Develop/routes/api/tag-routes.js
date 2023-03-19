const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: Product }).then(function name(tags) {
    res.status(200).json(tags);
  }).catch((err) => {
    //console.log(err);
    res.status(400).json(err);
  });;
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(re.params.id,null,{ include: Product }).then(function name(tag) {
    res.status(200).json(tag);
  }).catch((err) => {
    //console.log(err);
    res.status(400).json(err);
  });;
});
router.post('/', (req, res) => {
    // create a new tag
    /*
      {
        tag_name: "MyTag"
      }
    */
   Tag.create(req.body).then((tag) => {
    res.status(200).json(tag);
   }).catch((err) => {
    //console.log(err);
    res.status(400).json(err);
   });;
});

router.put('/', (req, res) => {
  // create a new tag
  /*
  { 
    tag_name: "MyTag"
  }
  */
 Tag.update(req.body, {
  where: {
    id: req.params.id 
  }
 }).then((tag) => {
    res.status(200).json(tag);
 }).catch((err) => {
  // console.log(err);
  res.status(400).json(err);
 });
});

router.delete('/:id', (req, res) => {
  //delete one tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id     
    }
  }).then(function name(result) {
    res.status(200).json(result);
  }).catch((err) => {
    //console.log(err);
    res.status(400).json(err);
  });;
});

module.exports = router;
