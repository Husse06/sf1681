---
datum: Modell
uppgift: 6
del: III
poang: 4
modul: 6
delvis: [4]
amne: Vågekvationen som produkt av kommuterande operatorer
losning: officiell
kalla: Tentor/SF1681 Losningar modell.pdf, s. 7. Uppgiftstexten är kontrollerad mot PDF-bilden. Lösningen är uppdelad efter uppgiftens delar, och en förväxling i slutet är rättad.
---

Den linjära partiella differentialekvationen

$$
\frac{\partial^2 f}{\partial x^2} - k^2 \frac{\partial^2 f}{\partial y^2} = 0
$$

där $k$ är en nollskild konstant kan analyseras med hjälp av linjära operatorer och deras egenvärden och egenvektorer på vektorrummet $C^\infty(\R^2)$.

(a) Skriv differentialoperatorn $\frac{\partial^2}{\partial x^2} - k^2 \frac{\partial^2}{\partial y^2}$ som en produkt av två kommuterande operatorer, $L_1$ och $L_2$ och bestäm egenvektorerna till var och en av dessa operatorer. (2 p)

(b) Visa att egenvektorerna med egenvärde 0 till $L_1 \circ L_2$ kan skrivas som summor av egenvektorer med egenvärde 0 för $L_1$ respektive $L_2$ och använd det för att skriva upp den allmänna lösningen till differentialekvationen. (2 p)

<!-- losning -->

(a) Sätt

$$
L_1 = \frac{\partial}{\partial x} + k\frac{\partial}{\partial y}, \qquad L_2 = \frac{\partial}{\partial x} - k\frac{\partial}{\partial y}.
$$

Då är $L_1 \circ L_2$ den givna operatorn. Operatorerna kommuterar eftersom $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}$ för $f \in C^\infty(\R^2)$.

Inför nya variabler $u$ och $v$ genom $x = u + v$ och $y = k(u - v)$. Kedjeregeln ger

$$
\begin{aligned}
\frac{\partial}{\partial u} &= \frac{\partial}{\partial x} + k\frac{\partial}{\partial y} = L_1, \\
\frac{\partial}{\partial v} &= \frac{\partial}{\partial x} - k\frac{\partial}{\partial y} = L_2.
\end{aligned}
$$

Omvänt är $u = \frac{x}{2} + \frac{y}{2k}$ och $v = \frac{x}{2} - \frac{y}{2k}$. Ekvationen $\partial f / \partial u = \lambda f$ har lösningarna $g(v)e^{\lambda u}$. Egenvärdena till $L_1$ är alltså alla reella tal $\lambda$, med egenvektorerna

$$
g(v)e^{\lambda u} = g\!\left(\tfrac{x}{2} - \tfrac{y}{2k}\right) \exp\!\left(\lambda\left(\tfrac{x}{2} + \tfrac{y}{2k}\right)\right).
$$

På samma sätt har $L_2$ alla reella tal som egenvärden, med egenvektorerna

$$
h(u)e^{\lambda v} = h\!\left(\tfrac{x}{2} + \tfrac{y}{2k}\right) \exp\!\left(\lambda\left(\tfrac{x}{2} - \tfrac{y}{2k}\right)\right).
$$

Här är $g, h \in C^\infty(\R)$ godtyckliga och nollskilda. För $\lambda = 0$ får $L_1$ egenvektorerna $g(v)$ och $L_2$ egenvektorerna $h(u)$.

(b) Funktioner $f(u, v) = h(u) + g(v)$ uppfyller $L_1 \circ L_2(f) = 0$, eftersom $L_2(h) = 0$ och $L_1(g) = 0$.

Antag omvänt att $L_1 \circ L_2(f) = 0$. Då ligger $L_2(f)$ i $\ker L_1$, så $L_2(f)(u, v) = g(v)$ för någon funktion $g$. Integration med avseende på $v$ ger $f(u, v) = G(v) + h(u)$, där $G'(v) = g(v)$. Alltså är $f$ en summa av en egenvektor med egenvärde 0 till $L_1$ och en egenvektor med egenvärde 0 till $L_2$.

**Svar.** Den allmänna lösningen är

$$
f(x, y) = h\!\left(\tfrac{x}{2} + \tfrac{y}{2k}\right) + G\!\left(\tfrac{x}{2} - \tfrac{y}{2k}\right)
$$

med godtyckliga funktioner $h, G \in C^\infty(\R)$.
