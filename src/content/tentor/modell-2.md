---
datum: Modell
uppgift: 2
del: I
poang: 4
modul: 12
delvis: [8]
amne: Integraloperator på sinusfunktioner
losning: officiell
kalla: Tentor/SF1681 Losningar modell.pdf, s. 2. Uppgiftstexten är kontrollerad mot PDF-bilden. Integralerna är kontrollerade med SymPy.
---

Låt $V \subseteq L^2(S^1_{2\pi}) = L^2([0, 2\pi], \C)$ vara inre-produktrummet med bas som ges av funktionerna $\sin nx$, för $n = 1, 2, 3$ med den inre produkten

$$
\langle f | g \rangle = \int_0^{2\pi} \overline{f(x)}\, g(x)\, dx.
$$

Bestäm matrisen för operatorn $L \colon V \longrightarrow V$ som ges av

$$
L(f)(x) = \int_0^{2\pi} f(t) \cos(x - t)\, dt
$$

med avseende på den givna basen och avgör om operatorn är självadjungerad. (4 p)

<!-- losning -->

Basen $\{\sin x, \sin 2x, \sin 3x\}$ är ortogonal. Med $\cos(x - t) = \cos x \cos t + \sin x \sin t$ blir

$$
\begin{aligned}
L(\sin nt)(x) &= \cos x \int_0^{2\pi} \sin nt \cos t\, dt \\
&\quad + \sin x \int_0^{2\pi} \sin nt \sin t\, dt .
\end{aligned}
$$

Den första integralen är $0$ för alla $n$. Den andra är $\pi$ för $n = 1$ och $0$ för $n = 2, 3$, eftersom sinusfunktionerna är ortogonala. Alltså är $L(\sin x) = \pi \sin x$ och $L(\sin 2x) = L(\sin 3x) = 0$, och matrisen är

$$
\begin{bmatrix} \pi & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}.
$$

Basen består alltså av egenvektorer med reella egenvärden, och den är ortogonal. Efter normering är den en ortonormal bas där matrisen är reell och diagonal, alltså Hermitesk. Därför är $L$ självadjungerad.

**Svar:** Matrisen är $\operatorname{diag}(\pi, 0, 0)$, och $L$ är självadjungerad.
