import { object, string, array, number } from 'zod'

const albumSchema = object({
  name: string({
    invalid_type_error: 'Album name must be a string'
  }),
  artist: array(string()),
  yearOut: number().int().positive().min(1900).max(2023),
  numberSongs: number().int().positive(),
  timePlay: number().positive()
})

export function validateAlbum (input) {
  return albumSchema.safeParse(input)
}

export function validatePartialAlbum (input) {
  return albumSchema.partial().safeParse(input)
}
