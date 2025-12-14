from datetime import date
from pathlib import Path
import re
import unicodedata


# ---------- helpers ----------

def slugify(s: str) -> str:
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode("ascii")
    s = s.lower()
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"\s+", "-", s)
    return s


def yymmdd(d: date) -> str:
    return d.strftime("%y%m%d")


# ---------- talks data ----------

talks = [
    dict(
        layout="talk",
        type="Invited talk",
        title="2026 Total Energy Mini Workshop",
        dates="12 Jan 2026",
        date="2026-01-12",
        city="Berkeley",
        location="University of California, Berkeley, USA",
        description="Total Energy Mini Workshop ",
        website="https://sites.google.com/berkeley.edu/totalenergyberkeley/home?authuser=0",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="MolSimEng 2025",
        dates="17 Oct 2025",
        date="2025-10-17",
        city="Milan",
        location="Polytechnic of Milan, Milan, IT",
        description="Molecular Simulation and Engineering workshop",
        website="https://sites.google.com/site/molsimeng/home/molsimeng-2025",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Conference on Molecular Modeling for Energy and the Environment",
        dates="8–9 Oct 2025",
        date="2025-10-08",
        city="Lugano",
        location=" University of Applied Sciences and Arts of Southern Switzerland (SUPSI), Lugano, CH",
        description="Conference on Molecular Modeling for Energy and the Environment",
        website="https://www.supsi.ch/en/convegno-sulla-modellazione-molecolare-per-l-energia-e-l-ambiente",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Conference on Frontiers in Atomistic Simulations: from Physics to Chemistry and Biology",
        dates="8–12 Sep 2025",
        date="2025-09-08",
        city="Trieste",
        location="ICTP, Trieste, IT",
        description="Conference on Frontiers in Atomistic Simulations",
        website="https://indico.ictp.it/event/10863/",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Inferring Kinetics, Thermodynamics, and Mechanisms from Enhanced Sampling Simulations",
        dates="22–27 Mar 2025",
        date="2025-03-22",
        city="San Diego",
        location="ACS Spring Meeting, San Diego, USA",
        description="Symposium at the ACS Spring Meeting",
        website="https://acs.digitellinc.com/p/s/inferring-kinetics-thermodynamics-and-mechanisms-from-enhanced-sampling-simulations-thermodynamics-625401",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Combining AI and physical modeling for contemporary simulations",
        dates="11–12 Dec 2024",
        date="2024-12-11",
        city="Lausanne",
        location="CECAM HQ, EPFL Lausanne, Lausanne, CH",
        description="CECAM and EPFL AI Workshop",
        website="https://www.cecam.org/workshop-details/combining-ai-and-physical-modeling-for-contemporary-simulations-1364",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited seminar",
        title="Seminar @ IMPMC, Sorbonne University",
        dates="14 Nov 2024",
        date="2024-11-14",
        city="Paris",
        location="Sorbonne University, Paris, FR",
        description="Seminar at the Institute of Mineralogy, Materials Physics and Cosmochemistry, Sorbonne University",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited seminar",
        title="ICTP Atomistic Simulations Seminar Series",
        dates="3 Jul 2024",
        date="2024-07-03",
        city="Trieste",
        location="ICTP, Trieste, IT",
        description="Atomistic Simulations Seminar Series",
        website="https://indico.ictp.it/event/10740",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="1st Virapid workshop",
        dates="26–29 Feb 2024",
        date="2024-02-26",
        city="Vienna",
        location="University of Vienna, Vienna, AT",
        description="Virapid (Vienna Research Platform on Accelerating Photoreaction Discovery) workshop on accelerating photoreaction discovery",
        website="https://vds-physics.univie.ac.at/activities/networking/schools-academies/summer-school-2022/",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Initiative for Computational Catalysis Inaugural Workshop",
        dates="19–21 Feb 2024",
        date="2024-02-19",
        city="New York",
        location="Flatiron Institute, New York, USA",
        description="Inaugural workshop of the Initiative for Computational Catalysis",
        website="https://www.simonsfoundation.org/event/inaugural-workshop-of-the-initiative-for-computational-catalysis/",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Quantum² on machine learning enhanced sampling",
        dates="29 Nov – 2 Dec 2023",
        date="2023-11-29",
        city="Lausanne",
        location="CECAM HQ, EPFL Lausanne, Lausanne, CH",
        description="CECAM Workshop on machine learning enhanced sampling",
        website="https://www.cecam.org/workshop-details/quantum2-on-machine-learning-enhanced-sampling-1255",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Enhanced sampling methods with PLUMED",
        dates="5–6 Jul 2023",
        date="2023-07-05",
        city="Lausanne",
        location="CECAM HQ, EPFL Lausanne, Lausanne, CH",
        description="CECAM Flagship School on enhanced sampling with PLUMED",
        website="https://www.cecam.org/workshop-details/enhanced-sampling-methods-with-plumed-1200",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited seminar",
        title="Seminar @ Biomolecular & Pharmaceutical Modelling Group, UNIGE",
        dates="30 Jun 2023",
        date="2023-06-30",
        city="Geneva",
        location="University of Geneva, Geneva, CH",
        description="Seminar at the Biomolecular & Pharmaceutical Modelling Group",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Machine Learning and Chemistry: Are We There Yet?",
        dates="31 May – 2 Jun 2023",
        date="2023-05-31",
        city="College Park",
        location="MolSSI workshop, University of Maryland, College Park, USA",
        description="MolSSI workshop on machine learning and chemistry",
        website="https://molssi.org/machine-learning-and-chemistry-are-we-there-yet/",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Doctoral School: Machine Learning for Materials Hard and Soft",
        dates="11–22 Jul 2022",
        date="2022-07-11",
        city="Vienna",
        location="University of Vienna, Vienna, AT",
        description="Lectures on free energies and enhanced sampling at the ESI-DCAFM-TACO-VDSP Summer School",
        website="https://physik.univie.ac.at/events/events-detailansicht/news/machine-learning-for-materials-hard-and-soft-esi-dcafm-taco-vdsp-summer-school-2022/",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Chasing CVs using Machine Learning: from methods development to biophysical applications",
        dates="28–30 Jun 2022",
        date="2022-06-28",
        city="Paris",
        location="INRIA Paris, Paris, FR",
        description="CECAM Workshop on machine-learning-based collective variables",
        website="https://www.cecam.org/workshop-details/chasing-cvs-using-machine-learning-from-methods-development-to-biophysical-applications-1134",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Invited talk",
        title="Machine Learning Augmented Sampling for the Molecular Sciences",
        dates="11–13 May 2022",
        date="2022-05-11",
        city="Lausanne",
        location="CECAM HQ, EPFL Lausanne, Lausanne, CH",
        description="CECAM Workshop on machine learning augmented sampling",
        website="https://www.cecam.org/workshop-details/machine-learning-augmented-sampling-for-the-molecular-sciences-1124",
        inline=False,
    ),
    dict(
        layout="talk",
        type="Online lectures",
        title="PLUMED Masterclass: Machine learning collective variables with PyTorch",
        dates="28 Mar & 4 Apr 2022",
        date="2022-03-28",
        city="Online",
        location="Online",
        description="Online lectures and hands-on on machine-learning collective variables with PLUMED",
        website="https://www.plumed-tutorials.org/lessons/22/005/data/NAVIGATION.html",
        inline=False,
    ),
]

def render_markdown(t: dict) -> str:
    order = [
        "layout",
        "title",
        "type",
        "date",
        "dates",
        "description",
        "website",
        "location",
        "inline",
    ]

    lines = ["---"]
    for key in order:
        if key in t and t[key] not in (None, "", []):
            if key == "inline":
                lines.append(f"{key}: {'true' if t[key] else 'false'}" )
            elif key == "title" or key == "description" or key == "location":
                lines.append(f'{key}: \"{t[key]}\"')
            else:
                lines.append(f"{key}: {t[key]}")
    lines.append("---")

    # Optional body text
    body = t.get("text", "")
    if body:
        lines.append("")          # blank line after front matter
        lines.append(body.rstrip())
        lines.append("")

    return "\n".join(lines)


# ---------- write markdown files ----------

out_dir = Path("./")
#out_dir = Path("_talks")
#out_dir.mkdir(parents=True, exist_ok=True)

for t in talks:
    d = date.fromisoformat(t["date"])
    filename = f"{yymmdd(d)}-{slugify(t['city'])}.md"
    path = out_dir / filename

    with path.open("w", encoding="utf-8") as f:
        f.write(render_markdown(t))

print(f"Wrote {len(talks)} Markdown files to {out_dir.resolve()}")