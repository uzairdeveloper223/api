const elements = [
    {
        "name": "Hydrogen",
        "symbol": "H",
        "atomicNumber": 1,
        "atomicMass": 1.008,
        "groupBlock": "Nonmetal",
        "period": 1,
        "electronicConfiguration": "1s1",
        "yearDiscovered": 1766,
        "purposes": [
            "Fuel in rockets",
            "Production of ammonia for fertilizers",
            "Hydrogenation of fats and oils"
        ]
    },
    {
        "name": "Helium",
        "symbol": "He",
        "atomicNumber": 2,
        "atomicMass": 4.0026,
        "groupBlock": "Noble Gas",
        "period": 1,
        "electronicConfiguration": "1s2",
        "yearDiscovered": 1895,
        "purposes": [
            "Coolant for superconducting magnets",
            "Inflation of balloons",
            "Controlled atmosphere for welding"
        ]
    },
    {
        "name": "Lithium",
        "symbol": "Li",
        "atomicNumber": 3,
        "atomicMass": 6.94,
        "groupBlock": "Alkali Metal",
        "period": 2,
        "electronicConfiguration": "[He] 2s1",
        "yearDiscovered": 1817,
        "purposes": [
            "Rechargeable batteries for electronics",
            "Treatment for bipolar disorder",
            "Alloying agent for aircraft parts"
        ]
    },
    {
        "name": "Beryllium",
        "symbol": "Be",
        "atomicNumber": 4,
        "atomicMass": 9.0122,
        "groupBlock": "Alkaline Earth Metal",
        "period": 2,
        "electronicConfiguration": "[He] 2s2",
        "yearDiscovered": 1798,
        "purposes": [
            "Material in aerospace components",
            "Reflector in nuclear reactors",
            "Windows for X-ray equipment"
        ]
    },
    {
        "name": "Boron",
        "symbol": "B",
        "atomicNumber": 5,
        "atomicMass": 10.81,
        "groupBlock": "Metalloid",
        "period": 2,
        "electronicConfiguration": "[He] 2s2 2p1",
        "yearDiscovered": 1808,
        "purposes": [
            "Component in glass and ceramics",
            "Dopant in semiconductor industry",
            "Insecticide and herbicide production"
        ]
    },
    {
        "name": "Carbon",
        "symbol": "C",
        "atomicNumber": 6,
        "atomicMass": 12.011,
        "groupBlock": "Nonmetal",
        "period": 2,
        "electronicConfiguration": "[He] 2s2 2p2",
        "yearDiscovered": "Ancient",
        "purposes": [
            "Structural material in organic compounds",
            "Fuel in the form of coal",
            "Production of steel"
        ]
    },
    {
        "name": "Nitrogen",
        "symbol": "N",
        "atomicNumber": 7,
        "atomicMass": 14.007,
        "groupBlock": "Nonmetal",
        "period": 2,
        "electronicConfiguration": "[He] 2s2 2p3",
        "yearDiscovered": 1772,
        "purposes": [
            "Production of ammonia for fertilizers",
            "Cryogenic preservation",
            "Inert atmosphere for electronics manufacturing"
        ]
    },
    {
        "name": "Oxygen",
        "symbol": "O",
        "atomicNumber": 8,
        "atomicMass": 15.999,
        "groupBlock": "Nonmetal",
        "period": 2,
        "electronicConfiguration": "[He] 2s2 2p4",
        "yearDiscovered": 1774,
        "purposes": [
            "Respiration in living organisms",
            "Steel production",
            "Rocket propellant oxidizer"
        ]
    },
    {
        "name": "Fluorine",
        "symbol": "F",
        "atomicNumber": 9,
        "atomicMass": 18.998,
        "groupBlock": "Halogen",
        "period": 2,
        "electronicConfiguration": "[He] 2s2 2p5",
        "yearDiscovered": 1886,
        "purposes": [
            "Production of Teflon",
            "Fluoridation of drinking water",
            "Etching glass and metals"
        ]
    },
    {
        "name": "Neon",
        "symbol": "Ne",
        "atomicNumber": 10,
        "atomicMass": 20.18,
        "groupBlock": "Noble Gas",
        "period": 2,
        "electronicConfiguration": "[He] 2s2 2p6",
        "yearDiscovered": 1898,
        "purposes": [
            "Illumination in neon signs",
            "Cryogenics",
            "High-voltage indicators"
        ]
    },
    {
        "name": "Sodium",
        "symbol": "Na",
        "atomicNumber": 11,
        "atomicMass": 22.99,
        "groupBlock": "Alkali Metal",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s1",
        "yearDiscovered": 1807,
        "purposes": [
            "Table salt (sodium chloride)",
            "Street lighting",
            "Coolant in nuclear reactors"
        ]
    },
    {
        "name": "Magnesium",
        "symbol": "Mg",
        "atomicNumber": 12,
        "atomicMass": 24.305,
        "groupBlock": "Alkaline Earth Metal",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s2",
        "yearDiscovered": 1755,
        "purposes": [
            "Lightweight alloy in aerospace",
            "Fireworks and flares",
            "Nutritional supplements"
        ]
    },
    {
        "name": "Aluminum",
        "symbol": "Al",
        "atomicNumber": 13,
        "atomicMass": 26.982,
        "groupBlock": "Post-transition Metal",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s2 3p1",
        "yearDiscovered": 1825,
        "purposes": [
            "Packaging (foil and cans)",
            "Aerospace components",
            "Electrical transmission lines"
        ]
    },
    {
        "name": "Silicon",
        "symbol": "Si",
        "atomicNumber": 14,
        "atomicMass": 28.085,
        "groupBlock": "Metalloid",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s2 3p2",
        "yearDiscovered": 1824,
        "purposes": [
            "Semiconductors in electronics",
            "Solar cells",
            "Glass and ceramics manufacturing"
        ]
    },
    {
        "name": "Phosphorus",
        "symbol": "P",
        "atomicNumber": 15,
        "atomicMass": 30.974,
        "groupBlock": "Nonmetal",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s2 3p3",
        "yearDiscovered": 1669,
        "purposes": [
            "Fertilizers",
            "Match production",
            "Steel production as a deoxidizer"
        ]
    },
    {
        "name": "Sulfur",
        "symbol": "S",
        "atomicNumber": 16,
        "atomicMass": 32.06,
        "groupBlock": "Nonmetal",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s2 3p4",
        "yearDiscovered": "Ancient",
        "purposes": [
            "Vulcanization of rubber",
            "Fungicide and pesticide production",
            "Sulfuric acid production"
        ]
    },
    {
        "name": "Chlorine",
        "symbol": "Cl",
        "atomicNumber": 17,
        "atomicMass": 35.45,
        "groupBlock": "Halogen",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s2 3p5",
        "yearDiscovered": 1774,
        "purposes": [
            "Water purification",
            "Disinfectants and bleach",
            "PVC plastic production"
        ]
    },
    {
        "name": "Argon",
        "symbol": "Ar",
        "atomicNumber": 18,
        "atomicMass": 39.95,
        "groupBlock": "Noble Gas",
        "period": 3,
        "electronicConfiguration": "[Ne] 3s2 3p6",
        "yearDiscovered": 1894,
        "purposes": [
            "Inert gas for welding",
            "Filling incandescent and fluorescent light bulbs",
            "Preservation of historical documents"
        ]
    },
    {
        "name": "Potassium",
        "symbol": "K",
        "atomicNumber": 19,
        "atomicMass": 39.098,
        "groupBlock": "Alkali Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 4s1",
        "yearDiscovered": 1807,
        "purposes": [
            "Fertilizers",
            "Potassium hydroxide in soap production",
            "Electrolyte in sports drinks"
        ]
    },
    {
        "name": "Calcium",
        "symbol": "Ca",
        "atomicNumber": 20,
        "atomicMass": 40.078,
        "groupBlock": "Alkaline Earth Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 4s2",
        "yearDiscovered": 1808,
        "purposes": [
            "Construction materials (cement, concrete)",
            "Essential for biological organisms (bone health)",
            "Reducing agent in the extraction of other metals"
        ]
    },
    {
        "name": "Scandium",
        "symbol": "Sc",
        "atomicNumber": 21,
        "atomicMass": 44.955908,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d1 4s2",
        "yearDiscovered": 1879,
        "purposes": [
            "Aerospace components",
            "Sports equipment (bicycles, baseball bats)",
            "High-intensity discharge lamps"
        ]
    },
    {
        "name": "Titanium",
        "symbol": "Ti",
        "atomicNumber": 22,
        "atomicMass": 47.867,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d2 4s2",
        "yearDiscovered": 1791,
        "purposes": [
            "Aircraft and spacecraft structures",
            "Medical implants (bone screws, hip replacements)",
            "White pigment in paints (titanium dioxide)"
        ]
    },
    {
        "name": "Vanadium",
        "symbol": "V",
        "atomicNumber": 23,
        "atomicMass": 50.9415,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d3 4s2",
        "yearDiscovered": 1801,
        "purposes": [
            "Steel alloys for tools and construction",
            "Catalysts in chemical reactions",
            "Lithium-ion batteries"
        ]
    },
    {
        "name": "Chromium",
        "symbol": "Cr",
        "atomicNumber": 24,
        "atomicMass": 51.9961,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d5 4s1",
        "yearDiscovered": 1797,
        "purposes": [
            "Stainless steel production",
            "Chrome plating for corrosion resistance",
            "Dyes and pigments"
        ]
    },
    {
        "name": "Manganese",
        "symbol": "Mn",
        "atomicNumber": 25,
        "atomicMass": 54.938044,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d5 4s2",
        "yearDiscovered": 1774,
        "purposes": [
            "Steel and aluminum alloys",
            "Batteries (alkaline and lithium-ion)",
            "Essential trace element for living organisms"
        ]
    },
    {
        "name": "Iron",
        "symbol": "Fe",
        "atomicNumber": 26,
        "atomicMass": 55.845,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d6 4s2",
        "yearDiscovered": "Ancient (Prehistoric)",
        "purposes": [
            "Construction and manufacturing",
            "Biological importance (hemoglobin)",
            "Magnets and electronics"
        ]
    },
    {
        "name": "Cobalt",
        "symbol": "Co",
        "atomicNumber": 27,
        "atomicMass": 58.933194,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d7 4s2",
        "yearDiscovered": 1735,
        "purposes": [
            "Batteries (lithium-ion)",
            "Superalloys for jet engines",
            "Catalysts in chemical reactions"
        ]
    },
    {
        "name": "Nickel",
        "symbol": "Ni",
        "atomicNumber": 28,
        "atomicMass": 58.6934,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d8 4s2",
        "yearDiscovered": 1751,
        "purposes": [
            "Stainless steel",
            "Coins",
            "Rechargeable batteries"
        ]
    },
    {
        "name": "Copper",
        "symbol": "Cu",
        "atomicNumber": 29,
        "atomicMass": 63.546,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s1",
        "yearDiscovered": "Ancient (Prehistoric)",
        "purposes": [
            "Electrical wiring",
            "Plumbing",
            "Coins"
        ]
    },
    {
        "name": "Zinc",
        "symbol": "Zn",
        "atomicNumber": 30,
        "atomicMass": 65.38,
        "groupBlock": "Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s2",
        "yearDiscovered": "Ancient(Prehistoric)",
        "purposes": [
            "Galvanization",
            "Alloys (brass)",
            "Dietary supplements"
        ]
    },
    {
        "name": "Gallium",
        "symbol": "Ga",
        "atomicNumber": 31,
        "atomicMass": 69.723,
        "groupBlock": "Post-Transition Metal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s2 4p1",
        "yearDiscovered": 1875,
        "purposes": [
            "Semiconductors",
            "Thermometers",
            "Alloys with low melting points"
        ]
    },
    {
        "name": "Germanium",
        "symbol": "Ge",
        "atomicNumber": 32,
        "atomicMass": 72.63,
        "groupBlock": "Metalloid",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s2 4p2",
        "yearDiscovered": 1886,
        "purposes": [
            "Semiconductors",
            "Fiber optics",
            "Infrared optics"
        ]
    },
    {
        "name": "Arsenic",
        "symbol": "As",
        "atomicNumber": 33,
        "atomicMass": 74.921595,
        "groupBlock": "Metalloid",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s2 4p3",
        "yearDiscovered": "Ancient (Prehistoric)",
        "purposes": [
            "Pesticides",
            "Semiconductors",
            "Wood preservatives"
        ]
    },
    {
        "name": "Selenium",
        "symbol": "Se",
        "atomicNumber": 34,
        "atomicMass": 78.971,
        "groupBlock": "Nonmetal",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s2 4p4",
        "yearDiscovered": 1817,
        "purposes": [
            "Glass production",
            "Photovoltaic cells",
            "Dietary supplements"
        ]
    },
    {
        "name": "Bromine",
        "symbol": "Br",
        "atomicNumber": 35,
        "atomicMass": 79.904,
        "groupBlock": "Halogen",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s2 4p5",
        "yearDiscovered": 1826,
        "purposes": [
            "Flame retardants",
            "Photography chemicals",
            "Water treatment"
        ]
    },
    {
        "name": "Krypton",
        "symbol": "Kr",
        "atomicNumber": 36,
        "atomicMass": 83.798,
        "groupBlock": "Noble Gas",
        "period": 4,
        "electronicConfiguration": "[Ar] 3d10 4s2 4p6",
        "yearDiscovered": 1898,
        "purposes": [
            "Lighting (fluorescent lamps)",
            "Photography",
            "High-performance light bulbs"
        ]
    },
    {
        "name": "Rubidium",
        "symbol": "Rb",
        "atomicNumber": 37,
        "atomicMass": 85.4678,
        "groupBlock": "Alkali Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 5s1",
        "yearDiscovered": 1861,
        "purposes": [
            "Atomic clocks",
            "Research in physics",
            "Specialty glasses"
        ]
    },
    {
        "name": "Strontium",
        "symbol": "Sr",
        "atomicNumber": 38,
        "atomicMass": 87.62,
        "groupBlock": "Alkaline Earth Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 5s2",
        "yearDiscovered": 1790,
        "purposes": [
            "Fireworks and flares (red color)",
            "Alloys for aerospace applications",
            "Medical imaging"
        ]
    },
    {
        "name": "Yttrium",
        "symbol": "Y",
        "atomicNumber": 39,
        "atomicMass": 88.90584,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d1 5s2",
        "yearDiscovered": 1794,
        "purposes": [
            "LEDs and phosphors",
            "Superconductors",
            "Alloys"
        ]
    },
    {
        "name": "Zirconium",
        "symbol": "Zr",
        "atomicNumber": 40,
        "atomicMass": 91.224,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d2 5s2",
        "yearDiscovered": 1789,
        "purposes": [
            "Nuclear reactors",
            "Ceramics",
            "Alloys for corrosion resistance"
        ]
    },
    {
        "name": "Niobium",
        "symbol": "Nb",
        "atomicNumber": 41,
        "atomicMass": 92.90637,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d4 5s1",
        "yearDiscovered": 1801,
        "purposes": [
            "Steel alloys",
            "Superconductors",
            "Medical implants"
        ]
    },
    {
        "name": "Molybdenum",
        "symbol": "Mo",
        "atomicNumber": 42,
        "atomicMass": 95.95,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d5 5s1",
        "yearDiscovered": 1781,
        "purposes": [
            "Steel alloys",
            "Catalysts in petroleum refining",
            "Electronics"
        ]
    },
    {
        "name": "Technetium",
        "symbol": "Tc",
        "atomicNumber": 43,
        "atomicMass": 98,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d5 5s2",
        "yearDiscovered": 1937,
        "purposes": [
            "Medical imaging (radioisotopes)",
            "Corrosion resistance",
            "Research"
        ]
    },
    {
        "name": "Ruthenium",
        "symbol": "Ru",
        "atomicNumber": 44,
        "atomicMass": 101.07,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d7 5s1",
        "yearDiscovered": 1844,
        "purposes": [
            "Electronics (chip resistors)",
            "Catalysts",
            "Alloys"
        ]
    },
    {
        "name": "Rhodium",
        "symbol": "Rh",
        "atomicNumber": 45,
        "atomicMass": 102.9055,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d8 5s1",
        "yearDiscovered": 1803,
        "purposes": [
            "Catalytic converters",
            "Electroplating",
            "Jewelry"
        ]
    },
    {
        "name": "Palladium",
        "symbol": "Pd",
        "atomicNumber": 46,
        "atomicMass": 106.42,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10",
        "yearDiscovered": 1803,
        "purposes": [
            "Catalytic converters",
            "Jewelry",
            "Electronics"
        ]
    },
    {
        "name": "Silver",
        "symbol": "Ag",
        "atomicNumber": 47,
        "atomicMass": 107.8682,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s1",
        "yearDiscovered": "Ancient (Prehistoric)",
        "purposes": [
            "Jewelry",
            "Electronics",
            "Photographic film"
        ]
    },
    {
        "name": "Cadmium",
        "symbol": "Cd",
        "atomicNumber": 48,
        "atomicMass": 112.414,
        "groupBlock": "Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s2",
        "yearDiscovered": 1817,
        "purposes": [
            "Batteries (nickel-cadmium)",
            "Pigments",
            "Electroplating"
        ]
    },
    {
        "name": "Indium",
        "symbol": "In",
        "atomicNumber": 49,
        "atomicMass": 114.818,
        "groupBlock": "Post-Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s2 5p1",
        "yearDiscovered": 1863,
        "purposes": [
            "Semiconductors",
            "LCD screens",
            "Alloys"
        ]
    },
    {
        "name": "Tin",
        "symbol": "Sn",
        "atomicNumber": 50,
        "atomicMass": 118.71,
        "groupBlock": "Post-Transition Metal",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s2 5p2",
        "yearDiscovered": "Ancient (Prehistoric)",
        "purposes": [
            "Solder",
            "Coating for steel cans",
            "Alloys (bronze, pewter)"
        ]
    },
    {
        "name": "Antimony",
        "symbol": "Sb",
        "atomicNumber": 51,
        "atomicMass": 121.76,
        "groupBlock": "Metalloid",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s2 5p3",
        "yearDiscovered": "Ancient (Prehistoric)",
        "purposes": [
            "Flame retardants",
            "Alloys",
            "Semiconductors"
        ]
    },
    {
        "name": "Tellurium",
        "symbol": "Te",
        "atomicNumber": 52,
        "atomicMass": 127.6,
        "groupBlock": "Metalloid",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s2 5p4",
        "yearDiscovered": 1782,
        "purposes": [
            "Semiconductors",
            "Alloys",
            "Thermoelectric devices"
        ]
    },
    {
        "name": "Iodine",
        "symbol": "I",
        "atomicNumber": 53,
        "atomicMass": 126.90447,
        "groupBlock": "Halogen",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s2 5p5",
        "yearDiscovered": 1811,
        "purposes": [
            "Disinfectants",
            "Photography",
            "Essential nutrient (thyroid health)"
        ]
    },
    {
        "name": "Xenon",
        "symbol": "Xe",
        "atomicNumber": 54,
        "atomicMass": 131.293,
        "groupBlock": "Noble Gas",
        "period": 5,
        "electronicConfiguration": "[Kr] 4d10 5s2 5p6",
        "yearDiscovered": 1898,
        "purposes": [
            "Lighting (high-intensity lamps)",
            "Medical imaging (anesthetic)",
            "Research in physics"
        ]
    },
    {
        "name": "Cesium",
        "symbol": "Cs",
        "atomicNumber": 55,
        "atomicMass": 132.90545196,
        "groupBlock": "Alkali Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 6s1",
        "yearDiscovered": 1860,
        "purposes": [
            "Atomic clocks",
            "Ion propulsion systems",
            "Drilling fluids in oil industry"
        ]
    },
    {
        "name": "Barium",
        "symbol": "Ba",
        "atomicNumber": 56,
        "atomicMass": 137.327,
        "groupBlock": "Alkaline Earth Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 6s2",
        "yearDiscovered": 1808,
        "purposes": [
            "Radiology (barium meals)",
            "Fireworks (green color)",
            "Glassmaking"
        ]
    },
    {
        "name": "Lanthanum",
        "symbol": "La",
        "atomicNumber": 57,
        "atomicMass": 138.90547,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 5d1 6s2",
        "yearDiscovered": 1839,
        "purposes": [
            "Optical glasses",
            "Camera lenses",
            "Catalysts in petroleum refining"
        ]
    },
    {
        "name": "Cerium",
        "symbol": "Ce",
        "atomicNumber": 58,
        "atomicMass": 140.116,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f1 5d1 6s2",
        "yearDiscovered": 1803,
        "purposes": [
            "Glass polishing",
            "Catalysts",
            "Alloys"
        ]
    },
    {
        "name": "Praseodymium",
        "symbol": "Pr",
        "atomicNumber": 59,
        "atomicMass": 140.90766,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f3 6s2",
        "yearDiscovered": 1885,
        "purposes": [
            "Magnets",
            "Aircraft engines",
            "Glass coloring"
        ]
    },
    {
        "name": "Neodymium",
        "symbol": "Nd",
        "atomicNumber": 60,
        "atomicMass": 144.242,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f4 6s2",
        "yearDiscovered": 1885,
        "purposes": [
            "Magnets",
            "Lasers",
            "Glass and ceramic coloring"
        ]
    },
    {
        "name": "Promethium",
        "symbol": "Pm",
        "atomicNumber": 61,
        "atomicMass": 145,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f5 6s2",
        "yearDiscovered": 1945,
        "purposes": [
            "Nuclear batteries",
            "Phosphorescent paint",
            "Research"
        ]
    },
    {
        "name": "Samarium",
        "symbol": "Sm",
        "atomicNumber": 62,
        "atomicMass": 150.36,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f6 6s2",
        "yearDiscovered": 1879,
        "purposes": [
            "Magnets",
            "Nuclear reactors",
            "Optical glass"
        ]
    },
    {
        "name": "Europium",
        "symbol": "Eu",
        "atomicNumber": 63,
        "atomicMass": 151.964,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f7 6s2",
        "yearDiscovered": 1901,
        "purposes": [
            "Phosphorescent paint",
            "TV screens and fluorescent lamps",
            "Control rods in nuclear reactors"
        ]
    },
    {
        "name": "Gadolinium",
        "symbol": "Gd",
        "atomicNumber": 64,
        "atomicMass": 157.25,
        "groupBlock": "Lanthanide",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f7 5d1 6s2",
        "yearDiscovered": 1880,
        "purposes": [
            "MRI contrast agents",
            "Neutron capture",
            "Phosphors"
        ]
    },
    {
        "name": "Tungsten",
        "symbol": "W",
        "atomicNumber": 74,
        "atomicMass": 183.84,
        "groupBlock": "Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d4 6s2",
        "yearDiscovered": 1783,
        "purposes": [
            "Light bulb filaments",
            "X-ray tubes",
            "Cutting tools"
        ]
    },
    {
        "name": "Rhenium",
        "symbol": "Re",
        "atomicNumber": 75,
        "atomicMass": 186.207,
        "groupBlock": "Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d5 6s2",
        "yearDiscovered": 1925,
        "purposes": [
            "Jet engines",
            "Catalysts",
            "Thermocouples"
        ]
    },
    {
        "name": "Osmium",
        "symbol": "Os",
        "atomicNumber": 76,
        "atomicMass": 190.23,
        "groupBlock": "Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d6 6s2",
        "yearDiscovered": 1803,
        "purposes": [
            "Electrical contacts",
            "Fountain pen tips",
            "Alloys"
        ]
    },
    {
        "name": "Iridium",
        "symbol": "Ir",
        "atomicNumber": 77,
        "atomicMass": 192.217,
        "groupBlock": "Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d7 6s2",
        "yearDiscovered": 1803,
        "purposes": [
            "Spark plugs",
            "Crucibles",
            "Electrodes"
        ]
    },
    {
        "name": "Platinum",
        "symbol": "Pt",
        "atomicNumber": 78,
        "atomicMass": 195.084,
        "groupBlock": "Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d9 6s1",
        "yearDiscovered": 1735,
        "purposes": [
            "Jewelry",
            "Catalytic converters",
            "Laboratory equipment"
        ]
    },
    {
        "name": "Gold",
        "symbol": "Au",
        "atomicNumber": 79,
        "atomicMass": 196.966569,
        "groupBlock": "Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s1",
        "yearDiscovered": "Ancient",
        "purposes": [
            "Jewelry",
            "Electronics",
            "Currency"
        ]
    },
    {
        "name": "Mercury",
        "symbol": "Hg",
        "atomicNumber": 80,
        "atomicMass": 200.592,
        "groupBlock": "Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s2",
        "yearDiscovered": "Ancient",
        "purposes": [
            "Thermometers",
            "Barometers",
            "Fluorescent lamps"
        ]
    },
    {
        "name": "Thallium",
        "symbol": "Tl",
        "atomicNumber": 81,
        "atomicMass": 204.38,
        "groupBlock": "Post-Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s2 6p1",
        "yearDiscovered": 1861,
        "purposes": [
            "Electronics",
            "Glass manufacturing",
            "Rat poisons"
        ]
    },
    {
        "name": "Lead",
        "symbol": "Pb",
        "atomicNumber": 82,
        "atomicMass": 207.2,
        "groupBlock": "Post-Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s2 6p2",
        "yearDiscovered": "Ancient",
        "purposes": [
            "Batteries",
            "Radiation shielding",
            "Ammunition"
        ]
    },
    {
        "name": "Bismuth",
        "symbol": "Bi",
        "atomicNumber": 83,
        "atomicMass": 208.9804,
        "groupBlock": "Post-Transition Metal",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s2 6p3",
        "yearDiscovered": "Ancient",
        "purposes": [
            "Pharmaceuticals",
            "Cosmetics",
            "Alloys"
        ]
    },
    {
        "name": "Polonium",
        "symbol": "Po",
        "atomicNumber": 84,
        "atomicMass": 209,
        "groupBlock": "Metalloid",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s2 6p4",
        "yearDiscovered": 1898,
        "purposes": [
            "Antistatic devices",
            "Neutron sources",
            "Research"
        ]
    },
    {
        "name": "Astatine",
        "symbol": "At",
        "atomicNumber": 85,
        "atomicMass": 210,
        "groupBlock": "Metalloid",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s2 6p5",
        "yearDiscovered": 1940,
        "purposes": [
            "Cancer treatment",
            "Research",
            "Radiation sources"
        ]
    },
    {
        "name": "Radon",
        "symbol": "Rn",
        "atomicNumber": 86,
        "atomicMass": 222,
        "groupBlock": "Noble Gas",
        "period": 6,
        "electronicConfiguration": "[Xe] 4f14 5d10 6s2 6p6",
        "yearDiscovered": 1899,
        "purposes": [
            "Cancer treatment",
            "Earthquake prediction",
            "Research"
        ]
    },
    {
        "name": "Francium",
        "symbol": "Fr",
        "atomicNumber": 87,
        "atomicMass": 223,
        "groupBlock": "Alkali Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 7s1",
        "yearDiscovered": 1939,
        "purposes": [
            "Research",
            "Cancer treatment",
            "Atomic structure studies"
        ]
    },
    {
        "name": "Radium",
        "symbol": "Ra",
        "atomicNumber": 88,
        "atomicMass": 226,
        "groupBlock": "Alkaline Earth Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 7s2",
        "yearDiscovered": 1898,
        "purposes": [
            "Cancer treatment",
            "Luminous paints",
            "Radiography"
        ]
    },
    {
        "name": "Actinium",
        "symbol": "Ac",
        "atomicNumber": 89,
        "atomicMass": 227,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 6d1 7s2",
        "yearDiscovered": 1899,
        "purposes": [
            "Cancer treatment",
            "Neutron sources",
            "Research"
        ]
    },
    {
        "name": "Thorium",
        "symbol": "Th",
        "atomicNumber": 90,
        "atomicMass": 232.0377,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 6d2 7s2",
        "yearDiscovered": 1829,
        "purposes": [
            "Nuclear reactors",
            "Gas mantles",
            "Alloys"
        ]
    },
    {
        "name": "Protactinium",
        "symbol": "Pa",
        "atomicNumber": 91,
        "atomicMass": 231.03588,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f2 6d1 7s2",
        "yearDiscovered": 1913,
        "purposes": [
            "Study of actinide series",
            "Nuclear reactors",
            "Scientific studies"
        ]
    },
    {
        "name": "Uranium",
        "symbol": "U",
        "atomicNumber": 92,
        "atomicMass": 238.02891,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f3 6d1 7s2",
        "yearDiscovered": 1789,
        "purposes": [
            "Nuclear reactors",
            "Nuclear weapons",
            "Radiometric dating"
        ]
    },
    {
        "name": "Neptunium",
        "symbol": "Np",
        "atomicNumber": 93,
        "atomicMass": 237,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f4 6d1 7s2",
        "yearDiscovered": 1940,
        "purposes": [
            "Development of nuclear technology",
            "Nuclear reactors",
            "Neutron detectors"
        ]
    },
    {
        "name": "Plutonium",
        "symbol": "Pu",
        "atomicNumber": 94,
        "atomicMass": 244,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f6 7s2",
        "yearDiscovered": 1940,
        "purposes": [
            "Nuclear reactors",
            "Nuclear weapons",
            "Radioisotope thermoelectric generators"
        ]
    },
    {
        "name": "Americium",
        "symbol": "Am",
        "atomicNumber": 95,
        "atomicMass": 243,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f7 7s2",
        "yearDiscovered": 1944,
        "purposes": [
            "Smoke detectors",
            "Neutron sources",
            "Study of radioactive decay"
        ]
    },
    {
        "name": "Curium",
        "symbol": "Cm",
        "atomicNumber": 96,
        "atomicMass": 247,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f7 6d1 7s2",
        "yearDiscovered": 1944,
        "purposes": [
            "Production of heavier elements",
            "Radioisotope thermoelectric generators",
            "Neutron sources"
        ]
    },
    {
        "name": "Berkelium",
        "symbol": "Bk",
        "atomicNumber": 97,
        "atomicMass": 247,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f9 7s2",
        "yearDiscovered": 1949,
        "purposes": [
            "Development of new materials",
            "Synthesis of heavier elements",
            "Neutron sources"
        ]
    },
    {
        "name": "Californium",
        "symbol": "Cf",
        "atomicNumber": 98,
        "atomicMass": 251,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f10 7s2",
        "yearDiscovered": 1950,
        "purposes": [
            "Neutron sources",
            "Cancer treatment",
            "Study of nuclear properties"
        ]
    },
    {
        "name": "Einsteinium",
        "symbol": "Es",
        "atomicNumber": 99,
        "atomicMass": 252,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f11 7s2",
        "yearDiscovered": 1952,
        "purposes": [
            "Creation of new elements",
            "Synthesis of heavier elements",
            "Radiation studies"
        ]
    },
    {
        "name": "Fermium",
        "symbol": "Fm",
        "atomicNumber": 100,
        "atomicMass": 257,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f12 7s2",
        "yearDiscovered": 1952,
        "purposes": [
            "Nuclear physics experiments",
            "Synthesis of heavier elements"
        ]
    },
    {
        "name": "Mendelevium",
        "symbol": "Md",
        "atomicNumber": 101,
        "atomicMass": 258,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f13 7s2",
        "yearDiscovered": 1955,
        "purposes": [
            "Nuclear research",
            "Synthesis of heavier elements"
        ]
    },
    {
        "name": "Nobelium",
        "symbol": "No",
        "atomicNumber": 102,
        "atomicMass": 259,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 7s2",
        "yearDiscovered": 1966,
        "purposes": [
            "Atomic structure research",
            "Chemical studies"
        ]
    },
    {
        "name": "Lawrencium",
        "symbol": "Lr",
        "atomicNumber": 103,
        "atomicMass": 262,
        "groupBlock": "Actinide",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 7s2 7p1",
        "yearDiscovered": 1961,
        "purposes": [
            "Study of chemical properties",
            "Nuclear physics"
        ]
    },
    {
        "name": "Rutherfordium",
        "symbol": "Rf",
        "atomicNumber": 104,
        "atomicMass": 267,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d2 7s2",
        "yearDiscovered": 1969,
        "purposes": [
            "Investigation of atomic behavior",
            "Study of chemical properties"
        ]
    },
    {
        "name": "Dubnium",
        "symbol": "Db",
        "atomicNumber": 105,
        "atomicMass": 270,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d3 7s2",
        "yearDiscovered": 1967,
        "purposes": [
            "Examination of nuclear characteristics",
            "Chemical research"
        ]
    },
    {
        "name": "Seaborgium",
        "symbol": "Sg",
        "atomicNumber": 106,
        "atomicMass": 271,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d4 7s2",
        "yearDiscovered": 1974,
        "purposes": [
            "Study of heavy elements",
            "Chemical properties analysis"
        ]
    },
    {
        "name": "Bohrium",
        "symbol": "Bh",
        "atomicNumber": 107,
        "atomicMass": 270,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d5 7s2",
        "yearDiscovered": 1981,
        "purposes": [
            "Nuclear research",
            "Chemical analysis"
        ]
    },
    {
        "name": "Hassium",
        "symbol": "Hs",
        "atomicNumber": 108,
        "atomicMass": 277,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d6 7s2",
        "yearDiscovered": 1984,
        "purposes": [
            "Study of synthetic elements",
            "Chemical behavior analysis"
        ]
    },
    {
        "name": "Meitnerium",
        "symbol": "Mt",
        "atomicNumber": 109,
        "atomicMass": 278,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d7 7s2",
        "yearDiscovered": 1982,
        "purposes": [
            "Investigation of atomic properties",
            "Nuclear studies"
        ]
    },
    {
        "name": "Darmstadtium",
        "symbol": "Ds",
        "atomicNumber": 110,
        "atomicMass": 281,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d9 7s1",
        "yearDiscovered": 1994,
        "purposes": [
            "Nuclear properties research",
            "Chemical studies"
        ]
    },
    {
        "name": "Roentgenium",
        "symbol": "Rg",
        "atomicNumber": 111,
        "atomicMass": 282,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s1",
        "yearDiscovered": 1994,
        "purposes": [
            "Study of atomic structure",
            "Nuclear research"
        ]
    },
    {
        "name": "Copernicium",
        "symbol": "Cn",
        "atomicNumber": 112,
        "atomicMass": 285,
        "groupBlock": "Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s2",
        "yearDiscovered": 1996,
        "purposes": [
            "Atomic behavior studies",
            "Chemical analysis"
        ]
    },
    {
        "name": "Nihonium",
        "symbol": "Nh",
        "atomicNumber": 113,
        "atomicMass": 286,
        "groupBlock": "Post-Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s2 7p1",
        "yearDiscovered": 2003,
        "purposes": [
            "Atomic behavior studies",
            "Chemical analysis"
        ]
    },
    {
        "name": "Flerovium",
        "symbol": "Fl",
        "atomicNumber": 114,
        "atomicMass": 289,
        "groupBlock": "Post-Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s2 7p2",
        "yearDiscovered": 1998,
        "purposes": [
            "Study of chemical properties",
            "Nuclear research"
        ]
    },
    {
        "name": "Moscovium",
        "symbol": "Mc",
        "atomicNumber": 115,
        "atomicMass": 290,
        "groupBlock": "Post-Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s2 7p3",
        "yearDiscovered": 2003,
        "purposes": [
            "Investigation of atomic structure",
            "Chemical research"
        ]
    },
    {
        "name": "Livermorium",
        "symbol": "Lv",
        "atomicNumber": 116,
        "atomicMass": 293,
        "groupBlock": "Post-Transition Metal",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s2 7p4",
        "yearDiscovered": 2000,
        "purposes": [
            "Study of superheavy elements",
            "Nuclear research"
        ]
    },
    {
        "name": "Tennessine",
        "symbol": "Ts",
        "atomicNumber": 117,
        "atomicMass": 294,
        "groupBlock": "Halogen",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s2 7p5",
        "yearDiscovered": 2010,
        "purposes": [
            "Study of chemical properties",
            "Nuclear properties research"
        ]
    },
    {
        "name": "Oganesson",
        "symbol": "Og",
        "atomicNumber": 118,
        "atomicMass": 294,
        "groupBlock": "Noble Gas",
        "period": 7,
        "electronicConfiguration": "[Rn] 5f14 6d10 7s2 7p6",
        "yearDiscovered": 2002,
        "purposes": [
            "Investigation of noble gas properties",
            "Nuclear research"
        ]
    }
];

// Worker fetch event
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const params = url.searchParams;

    // Check for the query parameter (name, symbol, or number)
    const name = params.get("name");
    const symbol = params.get("symbol");
    const number = params.get("number");

    // Search logic
    let result = null;
    if (name) {
      result = elements.find(
        (element) => element.name.toLowerCase() === name.toLowerCase()
      );
    } else if (symbol) {
      result = elements.find(
        (element) => element.symbol.toLowerCase() === symbol.toLowerCase()
      );
    } else if (number) {
      result = elements.find(
        (element) => element.atomicNumber === parseInt(number, 10)
      );
    }

    // Return the result
    if (result) {
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(
        JSON.stringify({ error: "Element not found" }),
        { headers: { "Content-Type": "application/json" }, status: 404 }
      );
    }
  },
};