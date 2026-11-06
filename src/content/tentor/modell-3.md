---
datum: Modell
uppgift: 3
del: I
poang: 4
modul: 5
delvis: [4, 19]
amne: Minimalpolynom över Z₂
losning: officiell
kalla: Tentor/SF1681 Losningar modell.pdf, s. 3. Uppgiftstexten är kontrollerad mot PDF-bilden.
---

Låt $A$ vara $3 \times 3$-matrisen med element i $\Z_2$ – heltalen modulo 2 – som ges av

$$
A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}.
$$

Bestäm *minimalpolynomet* till $A$ och använd detta för att avgöra om $A$ är diagonaliserbar. (4 p)

<!-- losning -->

Potenserna modulo 2 är

$$
A^2 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}, \qquad
A^3 = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{bmatrix}.
$$

Varje matris skrivs som en rad med nio element, för $A^0, A^1, A^2, A^3$:

$$
\begin{bmatrix}
1 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \\
1 & 1 & 1 & 1 & 0 & 1 & 1 & 1 & 0 \\
1 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & 0 \\
1 & 1 & 1 & 1 & 1 & 0 & 1 & 0 & 1
\end{bmatrix}
$$

De tre översta raderna är linjärt oberoende, så minimalpolynomet har grad 3. Gausselimination visar att summan av alla fyra raderna är noll, alltså $A^3 + A^2 + A + I = 0$. Därför är

$$
q_A(x) = x^3 + x^2 + x + 1.
$$

Eftersom $q_A(0) = 1$ och $q_A(1) = 0$ är $1$ det enda egenvärdet. Om $A$ vore diagonaliserbar skulle $A = I$, men det är den inte.

**Svar.** $q_A(x) = x^3 + x^2 + x + 1$ och $A$ är inte diagonaliserbar.
