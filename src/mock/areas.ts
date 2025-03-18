import { v4 } from "uuid";

export const LayoutStaticData = [
  {
    name: "Área 1",
    id: v4(),
    localId: "1",
    sectors: [
      {
        name: "Setor 1",
        id: v4(),
        localId: "1.1",
        equipments: [
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.1.1.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 2",
                code: "C2",
                id: v4(),
                localId: "1.1.1.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.1.1.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 2",
            id: v4(),
            localId: "1.1.2",
            tag: "Tag 2",
            type: "Tipo 2",
            maker: "Fabricante 2",
            model: "Modelo 2",
            year: "2023",
            description: "Descrição 2",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.2.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.2.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.1.2.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 2",
                code: "C2",
                id: v4(),
                localId: "1.1.2.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.2.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.1.2.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Setor 2",
        id: v4(),
        localId: "1.2",
        equipments: [
          {
            name: "Equipamento 3",
            id: v4(),
            localId: "1.2.1",
            tag: "Tag 3",
            type: "Tipo 3",
            maker: "Fabricante 3",
            model: "Modelo 3",
            year: "2022",
            description: "Descrição 3",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.2.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.2.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.2.1.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 2",
                code: "C2",
                id: v4(),
                localId: "1.2.1.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.2.1.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.2.1.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 4",
            id: v4(),
            localId: "1.2.2",
            tag: "Tag 4",
            type: "Tipo 4",
            maker: "Fabricante 4",
            model: "Modelo 4",
            year: "2023",
            description: "Descrição 4",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.2.2.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.2.2.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.2.2.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 2",
                code: "C2",
                id: v4(),
                localId: "1.2.2.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.2.2.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "1.2.2.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Área 2",
    id: v4(),
    localId: "2",
    sectors: [
      {
        name: "Setor 1",
        id: v4(),
        localId: "2.1",
        equipments: [
          {
            name: "Equipamento 5",
            id: v4(),
            localId: "2.1.1",
            tag: "Tag 5",
            type: "Tipo 5",
            maker: "Fabricante 5",
            model: "Modelo 5",
            year: "2022",
            description: "Descrição 5",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "2.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S1",
                    id: v4(),
                    localId: "2.1.1.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "2.1.1.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.1.1.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "2.1.1.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 6",
            id: v4(),
            localId: "2.1.2",
            tag: "Tag 6",
            type: "Tipo 6",
            maker: "Fabricante 6",
            model: "Modelo 6",
            year: "2023",
            description: "Descrição 6",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "2.1.2.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.1.2.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "2.1.2.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 2",
                code: "C2",
                id: v4(),
                localId: "2.1.2.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.1.2.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "2.1.2.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Setor 2",
        id: v4(),
        localId: "2.2",
        equipments: [
          {
            name: "Equipamento 7",
            id: v4(),
            localId: "2.2.1",
            tag: "Tag 7",
            type: "Tipo 7",
            maker: "Fabricante 7",
            model: "Modelo 7",
            year: "2022",
            description: "Descrição 7",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "2.2.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.2.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "2.2.1.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 2",
                code: "C2",
                id: v4(),
                localId: "2.2.1.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.2.1.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "2.2.1.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 8",
            id: v4(),
            localId: "2.2.2",
            tag: "Tag 8",
            type: "Tipo 8",
            maker: "Fabricante 8",
            model: "Modelo 8",
            year: "2023",
            description: "Descrição 8",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "2.2.2.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.2.2.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "2.2.2.1.2",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 2",
                code: "C2",
                id: v4(),
                localId: "2.2.2.2",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "2.2.2.2.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 2",
                    code: "S2",
                    id: v4(),
                    localId: "2.2.2.2.2",
                    cip: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const LayoutStaticData1 = [
  {
    name: "Área 1",
    id: v4(),
    localId: "1",
    sectors: [
      {
        name: "Setor 1",
        id: v4(),
        localId: "1.1",
        equipments: [
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
          {
            name: "Equipamento 1",
            id: v4(),
            localId: "1.1.1",
            tag: "Tag 1",
            type: "Tipo 1",
            maker: "Fabricante 1",
            model: "Modelo 1",
            year: "2022",
            description: "Descrição 1",
            photos: null,
            sets: [
              {
                name: "Conjunto 1",
                code: "C1",
                id: v4(),
                localId: "1.1.1.1",
                subSets: [
                  {
                    name: "Subconjunto 1",
                    code: "S1",
                    id: v4(),
                    localId: "1.1.1.1.1",
                    cip: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
