export default function cleanFunction(npc) {
  if (npc.health > 50) return 'healthy';
  if (npc.health >= 15) return 'wounded';
  return 'critical';
}
