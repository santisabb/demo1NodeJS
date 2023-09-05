const z = require('zod')

const albumSchema = z.object({
  name: z.string({
    invalid_type_error: 'Album name must be a string'
  }),
  artist: z.array(z.string()),
  yearOut: z.number().int().positive().min(1900).max(2023),
  numberSongs: z.number().int().positive(),
  timePlay: z.number().positive()
})

function validateAlbum (input) {
  return albumSchema.safeParse(input)
}

function validatePartialAlbum (input) {
  return albumSchema.partial().safeParse(input)
}

module.exports = {
  validateAlbum,
  validatePartialAlbum
}
