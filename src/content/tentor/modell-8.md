---
datum: Modell
uppgift: 8
del: III
poang: 4
modul: 11
delvis: [19]
amne: Fibonacciliknande rekursion i Z₁₁
losning: officiell
kalla: Tentor/SF1681 Losningar modell.pdf, s. 10. Uppgiftstexten är kontrollerad mot PDF-bilden. Svaret är kontrollerat genom att räkna ut följden med SymPy.
---

Följden $\{x_i\}_{i \ge 0}$ definieras genom den linjära rekursionen $x_{i+2} = x_{i+1} + x_i$, för $i \ge 0$ och $x_0 = x_1 = 1$. Bestäm $x_{2017}$ om räkningarna sker i $\Z_{11}$. (4 p)

<!-- losning -->

Rekursionen kan skrivas

$$
\begin{aligned}
\begin{bmatrix} x_{i+2} \\ x_{i+1} \end{bmatrix}
&= \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} x_{i+1} \\ x_i \end{bmatrix} \\
&= \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}^{i+1} \begin{bmatrix} x_1 \\ x_0 \end{bmatrix}.
\end{aligned}
$$

Den karakteristiska ekvationen är $x^2 - x - 1 = 0$, eftersom

$$
\det \begin{bmatrix} x - 1 & -1 \\ -1 & x \end{bmatrix} = x^2 - x - 1 .
$$

I $\Z_{11}$ är $1/2 = 6$, eftersom $2 \cdot 6 = 12 = 1$. Lösningsformeln ger

$$
\begin{aligned}
x &= \tfrac12 \pm \sqrt{(\tfrac12)^2 + 1} = 6 \pm \sqrt{6^2 + 1} \\
&= 6 \pm \sqrt{4} = 6 \pm 2 .
\end{aligned}
$$

Egenvärdena är alltså $4$ och $8$, vilket också kan kontrolleras genom att pröva de elva möjliga rötterna. De är olika, så matrisen är diagonaliserbar och

$$
x_i = \alpha\, 4^i + \beta\, 8^i .
$$

Begynnelsevärdena ger $\alpha + \beta = 1$ och $4\alpha + 8\beta = 1$. Eftersom $1/4 = 3$ i $\Z_{11}$ blir $\beta = -3/4 = -9 = 2$ och $\alpha = 1 - \beta = 10$. Därmed är

$$
x_i = 2 \cdot 8^i - 4^i \qquad (i \ge 0).
$$

Den multiplikativa gruppen i $\Z_{11}$ är cyklisk av ordning $10$, så $4^{10} = 8^{10} = 1$ och $x_{2017} = x_7$. Följden börjar $1, 1, 2, 3, 5, 8, 2, 10$, så $x_7 = 10$. Formeln ger samma värde: $2 \cdot 8^7 - 4^7 = 2 \cdot 2 - 5 = -1 = 10$.

**Svar:** $x_{2017} = 10$.
