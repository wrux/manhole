import blockText from './blockText'

export const blockTypes = [blockText]

const blocks = blockTypes.map(({ name }) => ({
  type: name,
}))

export default blocks
