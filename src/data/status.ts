// Rotina inicial por horário local; não representa presença em tempo real.
export const dailyStatuses = [
  { startHour: 0, label: 'Dormindo', emoji: '💤' },
  { startHour: 7, label: 'Fazendo um café', emoji: '☕' },
  { startHour: 8, label: 'Trabalhando', emoji: '🧑🏻‍💻' },
  { startHour: 12, label: 'Almoço', emoji: '🍽️' },
  { startHour: 13, label: 'Trabalhando', emoji: '🧑🏻‍💻' },
  { startHour: 18, label: 'Descansando', emoji: '💤' },
  { startHour: 23, label: 'Dormindo', emoji: '💤' },
] as const

export function getLocalStatus(hour: number) {
  return (
    dailyStatuses.findLast((status) => hour >= status.startHour) ??
    dailyStatuses[0]
  )
}
