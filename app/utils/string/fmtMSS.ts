export const fmtMSS = (s: number) =>
	(s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s

export const fmtMSSNamed = (s: number) =>
	`${Math.floor(s / 60)} min. ${s % 60} sec.`
