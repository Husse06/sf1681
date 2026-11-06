---
datum: Modell
uppgift: 9
del: III
poang: 4
modul: 6
delvis: [7]
amne: Exponentialavbildningen och SL₂
losning: officiell
kalla: Tentor/SF1681 Losningar modell.pdf, s. 11–12. Uppgiftstexten är kontrollerad mot PDF-bilden.
---

Exponentialavbildningen för reella eller komplexa matriser ges av $\exp(A) = \sum_{i=0}^\infty A^i / i!$, för $A$ i $M_n(k)$ där $k = \R$ eller $k = \C$.

(a) Visa att $\exp(A) \in \mathrm{SL}_n(\R)$ om och endast om $\operatorname{Tr}(A) = 0$ för $A$ i $M_n(\R)$. (2 p)

(b) Låt $V \subseteq M_2(k)$ ges av $V = \{A \in M_2(k) : \operatorname{Tr}(A) = 0\}$. Avgör om exponentialavbildningen $\exp : V \to \mathrm{SL}_2(k)$ är surjektiv för $k = \R$ respektive $k = \C$. (2 p)

Här är $\mathrm{SL}_n(k)$ mängden av $n \times n$-matriser med determinant 1.

<!-- losning -->

(a) Utvidga koefficienterna till $\C$. Enligt Jordans normalform finns en bas där matrisen är övertriangulär med egenvärdena $\lambda_1, \dots, \lambda_n$ på diagonalen. Då är $\exp(A)$ också övertriangulär, med $\exp(\lambda_1), \dots, \exp(\lambda_n)$ på diagonalen. Därmed är $\det \exp(A) = \exp(\operatorname{Tr}(A))$, och $\det \exp(A) = 1$ om och endast om $\operatorname{Tr}(A) \in 2\pi i\Z$. För en reell matris är spåret reellt, så villkoret betyder att spåret är noll.

(b) Fallet $k = \R$. Eftersom spåret är noll är egenvärdena $\pm\lambda$ eller $\pm i\lambda$ för något reellt tal $\lambda$. Om $\lambda \ne 0$ är matrisen diagonaliserbar över $\C$, och $\exp(A)$ har egenvärdena $e^{\lambda}$ och $e^{-\lambda}$, som är positiva, eller $e^{i\lambda}$ och $e^{-i\lambda}$, som har belopp 1. Negativa reella egenvärden förutom $-1$ kan alltså inte uppstå. Om båda egenvärdena är 0 och matrisen inte är diagonaliserbar har $\exp(A)$ bara egenvärdet 1. Avbildningen är därför inte surjektiv för $k = \R$.

Fallet $k = \C$. Om matrisen inte är diagonaliserbar kan den enligt Jordans normalform skrivas

$$
A = \begin{bmatrix} \lambda & 1 \\ 0 & \lambda \end{bmatrix}
$$

i någon bas. Om $A \in V$ måste $\lambda = 0$, och

$$
\exp\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} + \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}.
$$

Bilden har då egenvärdet 1. Om $A \in V$ är diagonaliserbar är $\exp(A)$ också diagonaliserbar. Matrisen

$$
\begin{bmatrix} -1 & 1 \\ 0 & -1 \end{bmatrix}
$$

har determinant 1, men den är inte diagonaliserbar och har egenvärdet $-1$. Den ligger därför inte i bilden av $V$. Den går att nå från en matris utanför $V$:

$$
\exp\begin{bmatrix} i\pi & -1 \\ 0 & i\pi \end{bmatrix} = \begin{bmatrix} -1 & 1 \\ 0 & -1 \end{bmatrix},
$$

men den matrisen har spår $2\pi i \ne 0$.

**Svar.** Avbildningen är inte surjektiv i något av fallen. Det reella fallet följer också av det komplexa, eftersom matrisen ovan är reell.
