---
datum: Modell
uppgift: 1
del: I
poang: 4
modul: 7
delvis: [2]
amne: Jordanform för derivering på polynom
losning: officiell
kalla: Tentor/SF1681 Losningar modell.pdf, s. 1. Uppgiftstexten är kontrollerad mot PDF-bilden. Ett indexfel i lösningen är rättat.
---

Beräkna den Jordankanoniska formen för den linjära operatorn $D : P_4 \to P_4$ som ges av $D(f) = f'(x)$ där $P_4$ är vektorrummet av polynom av grad högst fyra med komplexa koefficienter. (4 p)

<!-- losning -->

Välj basen $e_n = x^n / n!$ för $n = 0, 1, \dots, 4$. Då är $D(e_n) = e_{n-1}$ för $n = 1, 2, 3, 4$ och $D(e_0) = 0$. Matrisen för $D$ är därmed

$$
\begin{bmatrix} 0 & 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix},
$$

vilket är den Jordankanoniska formen, med ett enda Jordanblock.
