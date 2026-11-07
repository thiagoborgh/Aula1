import type { Accent } from '../types';
import { mineiro } from './mineiro';
import { carioca } from './carioca';
import { paulistano } from './paulistano';
import { caipira } from './caipira';
import { gaucho } from './gaucho';
import { goiano } from './goiano';
import { baiano } from './baiano';
import { pernambucano } from './pernambucano';
import { cearense } from './cearense';
import { paraense } from './paraense';
import { nordestino } from './nordestino';

/** Para adicionar um sotaque: crie o arquivo e inclua aqui. */
export const accents: Accent[] = [
  mineiro, carioca, paulistano, caipira, gaucho, goiano,
  baiano, pernambucano, cearense, paraense, nordestino,
];

export const accentById = (id: string) => accents.find((a) => a.id === id);
