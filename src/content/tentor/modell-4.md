---
datum: Modell
uppgift: 4
del: II
poang: 4
modul: 15
delvis: [13]
amne: Unitära matriser och pseudoinversen via singulärvärdesuppdelning
losning: officiell
kalla: Tentor/SF1681 Losningar modell.pdf, s. 4–5. Uppgiftstexten är kontrollerad mot PDF-bilden. Matrisen i (b) och pseudoinversen i (d) är kontrollerade med SymPy.
---

För singulärvärdesuppdelning av matriser används begreppet *unitära* matriser.

(a) Vad betyder det att en matris är *unitär*? (1 p)

(b) Ge ett belysande exempel på en unitär $2 \times 2$-matris. (1 p)

(c) Hur används singulärvärdesuppdelning för definition av pseudoinvers? (1 p)

(d) Ge ett belysande exempel på pseudoinversen av en $3 \times 4$-matris. (1 p)

<!-- losning -->

(a) En matris $A$ är unitär om den är kvadratisk och $AA^\dagger = I$, det vill säga $A^\dagger = A^{-1}$. Här är $A^\dagger$ det konjugerade transponatet.

(b) Kolonnerna (eller raderna) i en unitär $2 \times 2$-matris ska vara två ortogonala vektorer i $\C^2$ med längd $1$. Vi börjar med

$$
u = \begin{bmatrix} \frac{1+i}{2} \\[2pt] \frac{1-i}{2} \end{bmatrix}, \qquad |u|^2 = \tfrac{2}{4} + \tfrac{2}{4} = 1 .
$$

En vektor $v = (v_1, v_2)$ är ortogonal mot $u$ om $\tfrac{1+i}{2}\,\overline{v_1} + \tfrac{1-i}{2}\,\overline{v_2} = 0$, det vill säga $\overline{v_1} = i\,\overline{v_2}$. Med $v_2 = a$ blir $v_1 = -ia$, och $|v| = 1$ kräver $|a|^2 = \tfrac12$. Vi väljer $a = 1/\sqrt 2$ och får den unitära matrisen

$$
A = \begin{bmatrix} \frac{1+i}{2} & \frac{1-i}{2} \\[4pt] \frac{-i}{\sqrt 2} & \frac{1}{\sqrt 2} \end{bmatrix}
$$

med raderna $u^T$ och $v^T$.

(c) Vid singulärvärdesuppdelningen av en $m \times n$-matris $A$ skrivs $A = U\Sigma V^\dagger$, där $U$ och $V$ är unitära av storlek $m \times m$ respektive $n \times n$ och $\Sigma$ är en $m \times n$-diagonalmatris med icke-negativa reella diagonalelement. Pseudoinversen definieras som

$$
A^+ = V \Sigma^+ U^\dagger ,
$$

där $\Sigma^+$ är den $n \times m$-matris som fås genom att transponera $\Sigma$ och invertera alla nollskilda diagonalelement. Då är $U^\dagger AA^+ U$ en $m \times m$-diagonalmatris med ettor och nollor på diagonalen, och detsamma gäller $V^\dagger A^+ A V$.

(d) Vi tar matrisen med bara ettor:

$$
\begin{aligned}
A &= \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 1 & 1 \end{bmatrix} \\
&= 2\sqrt 3 \begin{bmatrix} 1/\sqrt 3 \\ 1/\sqrt 3 \\ 1/\sqrt 3 \end{bmatrix} \begin{bmatrix} \tfrac12 & \tfrac12 & \tfrac12 & \tfrac12 \end{bmatrix} .
\end{aligned}
$$

Det finns bara ett nollskilt singulärvärde, $2\sqrt 3$, och pseudoinversen blir

$$
\begin{aligned}
A^+ &= (2\sqrt 3)^{-1} \begin{bmatrix} 1/2 \\ 1/2 \\ 1/2 \\ 1/2 \end{bmatrix} \begin{bmatrix} \tfrac{1}{\sqrt 3} & \tfrac{1}{\sqrt 3} & \tfrac{1}{\sqrt 3} \end{bmatrix} \\
&= \frac{1}{12} \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix} .
\end{aligned}
$$

**Svar:** (a) $A$ är kvadratisk och $A^\dagger = A^{-1}$. (b) Till exempel matrisen $A$ ovan. (c) $A^+ = V\Sigma^+U^\dagger$ när $A = U\Sigma V^\dagger$. (d) Pseudoinversen av $3 \times 4$-matrisen med bara ettor är $\frac{1}{12}$ gånger $4 \times 3$-matrisen med bara ettor.

*Anmärkning (egen).* I (b) räknar lösningsförslaget med den inre produkten $u_1\overline{v_1} + u_2\overline{v_2}$, som konjugerar det andra argumentet. Med kursens konvention lyder villkoret $\tfrac{1-i}{2} v_1 + \tfrac{1+i}{2} v_2 = 0$. Det är samma villkor, eftersom det ena uttrycket är konjugatet av det andra. I (d) gäller allmänt att $A^+ = \frac{1}{|u|^2|w|^2}\, w u^\dagger$ när $A = uw^\dagger$ har rang 1, se modul 15.
