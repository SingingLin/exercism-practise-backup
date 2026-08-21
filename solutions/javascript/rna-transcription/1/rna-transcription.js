//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  if(!dna) return '';
  let rna = ''
  for (let name of dna) {
    rna += RNAMAP[name]
  }
  return rna
};

const RNAMAP = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}