export function ola (req,res,next) {
  return res.status(200).send({
    message : "Ola"
  })
}