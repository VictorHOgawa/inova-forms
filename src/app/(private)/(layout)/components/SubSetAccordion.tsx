"use client";
import {
  EquipmentsProps,
  SectorProps,
  SetProps,
  SubSetProps,
} from "@/@types/LayoutTypes";
import { CustomPagination } from "@/components/global/CustomPagination";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/global/ui/accordion";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "@/components/global/ui/popover";
import { ScrollArea } from "@/components/global/ui/scroll-area";
import { useLayoutContext } from "@/context/LayoutContext";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, Search, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

interface SubSetAccordionProps {
  selectedLayoutStep: number;
  setSelectedLayoutStep: React.Dispatch<React.SetStateAction<number>>;
}

export function SubSetAccordion({
  selectedLayoutStep,
  setSelectedLayoutStep,
}: SubSetAccordionProps) {
  const { layoutData, setLayoutData } = useLayoutContext();
  const [isImportHovered, setIsImportHovered] = useState(false);
  const [selectedSector, setSelectedSector] = useState<SectorProps | null>(
    null,
  );
  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentsProps | null>(null);
  const [selectedSet, setSelectedSet] = useState<SetProps | null>(null);
  const [equipmentPages, setEquipmentPages] = useState<number>(1);
  const [currentEquipmentPage, setCurrentEquipmentPage] = useState(1);
  const [isSectorNameHovered, setIsSectorNameHovered] = useState(false);
  const [isEquipmentNameHovered, setIsEquipmentNameHovered] = useState(false);
  const [isSetNameHovered, setIsSetNameHovered] = useState(false);
  const [subSetsArrayLength, setSubSetsArrayLength] = useState(3);
  const [inputSubSetsValues, setInputSubSetsValues] = useState<SubSetProps[]>(
    Array(subSetsArrayLength).fill({
      name: "",
      code: "",
      id: "",
      localId: "",
      cip: null,
    }),
  );

  const handleSelectSet = (set: SetProps) => {
    setSelectedSet(set);
    setSubSetsArrayLength(3); // Reset array length
    setSelectedLayoutStep(6);

    if (set.subSets && set.subSets.length > 0) {
      // Keep full subSet objects instead of replacing them with strings
      const updatedSubSetValues = set.subSets.map((subSet) => ({
        ...subSet, // Copy all properties of the existing subSet
      }));

      setInputSubSetsValues(updatedSubSetValues);
      setSubSetsArrayLength(set.subSets.length);
    } else {
      // Initialize with default subSet structure instead of strings
      setInputSubSetsValues(
        Array(5).fill({
          name: "",
          code: "",
          id: "",
          localId: "",
          cip: null,
        }),
      );
      setSubSetsArrayLength(3);
    }
  };

  const handleInputChange = (
    index: number,
    field: keyof SubSetProps, // Now handling SubSetProps
    value: string,
  ) => {
    if (!selectedSector || !selectedEquipment || !selectedSet) return;

    const fullLocalId = `${selectedSet.localId}.${index + 1}`;

    setInputSubSetsValues((prev) => {
      const updatedInputs = [...prev];
      updatedInputs[index] = {
        ...updatedInputs[index],
        [field]: value,
      };
      return updatedInputs;
    });

    setLayoutData((prevLayout) => {
      if (!prevLayout.areas) return prevLayout; // Ensure areas exist

      const updatedAreas = prevLayout.areas.map((area) => {
        if (!area.sectors) return area; // Skip areas without sectors

        const updatedSectors = area.sectors.map((sector) => {
          if (sector.localId !== selectedSector.localId) return sector; // Skip unrelated sectors

          // Ensure equipments exist in sector
          const updatedEquipments = sector.equipments
            ? [...sector.equipments]
            : [];

          const existingEquipmentIndex = updatedEquipments.findIndex(
            (equipment) => equipment.localId === selectedEquipment.localId,
          );

          if (existingEquipmentIndex !== -1) {
            // Find the correct equipment
            const equipment = updatedEquipments[existingEquipmentIndex];

            // Ensure sets exist in equipment
            const updatedSets = equipment.sets ? [...equipment.sets] : [];

            const existingSetIndex = updatedSets.findIndex(
              (set) => set.localId === selectedSet.localId,
            );

            if (existingSetIndex !== -1) {
              // Find the correct set and modify its subSets array
              const set = updatedSets[existingSetIndex];

              // Ensure subSets exist or create an empty array
              const updatedSubSets = set.subSets ? [...set.subSets] : [];

              // Find the existing subSet by localId
              const existingSubSetIndex = updatedSubSets.findIndex(
                (subSet) => subSet.localId === fullLocalId,
              );

              if (existingSubSetIndex !== -1) {
                // If the subSet exists, update the specified field
                updatedSubSets[existingSubSetIndex] = {
                  ...updatedSubSets[existingSubSetIndex],
                  [field]: value,
                };
              } else {
                // If the subSet doesn't exist, add a new one
                updatedSubSets.push({
                  name: "",
                  code: "",
                  id: v4(), // Unique ID
                  localId: fullLocalId,
                  cip: null,
                  [field]: value,
                });
              }

              // Assign updated subSets back to the set
              updatedSets[existingSetIndex] = {
                ...set,
                subSets: updatedSubSets, // Update subSets array in this set
              };
            }

            // Assign updated sets back to equipment
            updatedEquipments[existingEquipmentIndex] = {
              ...equipment,
              sets: updatedSets, // Update sets array in this equipment
            };
          }

          return {
            ...sector,
            equipments: updatedEquipments.length > 0 ? updatedEquipments : null, // Ensure correct type
          };
        });

        return {
          ...area,
          sectors: updatedSectors.length > 0 ? updatedSectors : [], // Ensure correct type
        };
      });

      return {
        ...prevLayout,
        areas: updatedAreas.length > 0 ? updatedAreas : [],
      };
    });
  };

  const isSubSetFullyFilled = (subSet: SubSetProps) => {
    return subSet.name && subSet.code;
  };

  const handleAddSubSet = () => {
    setSubSetsArrayLength((prevLength) => prevLength + 1);
    setInputSubSetsValues((prev) => [
      ...prev,
      {
        name: "",
        code: "",
        id: "",
        localId: "",
        cip: null,
      },
    ]);
  };

  useEffect(() => {
    if (!layoutData) return;

    if (selectedEquipment) {
      // If an equipment is selected, pagination should depend on the number of sets
      setEquipmentPages(
        Math.ceil((selectedEquipment.sets?.length || 0) / 12) || 1,
      );
    } else {
      // If no equipment is selected, pagination should depend on the number of equipments in the sector
      const totalEquipments =
        layoutData?.areas
          ?.flatMap((area) => area.sectors || [])
          ?.flatMap((sector) => sector.equipments || []).length || 0;

      setEquipmentPages(Math.ceil(totalEquipments / 12) || 1);
    }
  }, [layoutData, selectedEquipment]);

  return (
    <AccordionItem value="5" onClick={() => setSelectedLayoutStep(5)}>
      <AccordionTrigger arrow>
        <div className="flex w-full items-center justify-between">
          <div className="text-primary flex items-center gap-4 text-2xl font-bold">
            <span>1.5</span>
            <div className="flex flex-col">
              <span className="leading-6">Cadastramento de Subconjunto?</span>
              <span
                className={cn(
                  "w-max text-sm font-normal text-neutral-500",
                  selectedLayoutStep !== 5 && "hidden",
                )}
              >
                O que é um Subconjunto? Explicitar
              </span>
            </div>
          </div>
          {selectedLayoutStep === 5 && (
            <div className="flex items-center gap-4">
              <Popover open={isImportHovered} onOpenChange={setIsImportHovered}>
                <PopoverTrigger
                  asChild
                  onMouseEnter={() => setIsImportHovered(true)}
                  onMouseLeave={() => setIsImportHovered(false)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsImportHovered(false);
                  }}
                  onBlur={() => setIsImportHovered(false)}
                >
                  <div className="bg-primary flex h-10 items-center gap-2 rounded-full p-2 text-sm font-semibold text-white">
                    <Upload />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-max p-1 text-sm">
                  <PopoverArrow className="fill-neutral-300" />
                  <span>Importar Planilhas</span>
                </PopoverContent>
              </Popover>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLayoutStep(6);
                }}
                className={cn(
                  "bg-primary flex h-10 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white",
                  layoutData &&
                    layoutData.areas &&
                    layoutData.areas.find((area) =>
                      area.sectors?.find((sector) =>
                        sector.equipments?.find((eq) =>
                          eq.sets?.find((set) => !set.subSets),
                        ),
                      ),
                    ) &&
                    "pointer-events-none cursor-not-allowed opacity-50",
                )}
              >
                <span>Avançar 1.6</span>
                <ArrowRight />
              </div>
            </div>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div
          className={cn(
            "grid grid-cols-4 gap-4 border-t border-neutral-300 p-4",
            selectedEquipment && "grid-cols-3",
            selectedSet && "px-0",
          )}
        >
          {selectedSet ? (
            <>
              <div className="col-span-3 flex flex-col justify-between gap-2">
                <div className="flex items-center gap-2 px-4">
                  <button
                    onClick={() => setSelectedSet(null)}
                    className="text-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]"
                  >
                    <ChevronLeft />
                  </button>
                  <Popover
                    open={isSectorNameHovered}
                    onOpenChange={setIsSectorNameHovered}
                  >
                    <PopoverTrigger
                      asChild
                      onMouseEnter={() => setIsSectorNameHovered(true)}
                      onMouseLeave={() => setIsSectorNameHovered(false)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSectorNameHovered(false);
                      }}
                      onBlur={() => setIsSectorNameHovered(false)}
                    >
                      <label
                        className={cn(
                          "relative flex h-12 w-40 items-center justify-start overflow-hidden rounded-2xl pr-1",
                          "bg-primary",
                        )}
                      >
                        <span
                          className={cn(
                            "bg-primary/20 text-primary flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl p-1 font-bold",
                            "bg-white/20 text-white",
                          )}
                        >
                          {selectedSector?.localId}
                        </span>
                        <input
                          className={cn(
                            "peer transparent h-full px-4 placeholder:text-neutral-300 focus:outline-none",
                            "text-white",
                          )}
                          placeholder="Nome da Área"
                          value={selectedSector?.name}
                          disabled
                        />

                        <div
                          className={cn(
                            "absolute left-0 z-10 h-full w-full rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.15)] transition duration-200 peer-focus:shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                            "shadow-[0px_2px_7px_rgba(0,0,0,0.35)]",
                          )}
                        />
                      </label>
                    </PopoverTrigger>
                    <PopoverContent className="w-max max-w-40 bg-white p-1 text-sm break-words">
                      <PopoverArrow className="fill-neutral-300" />
                      <span>
                        {layoutData.areas
                          ?.flatMap((area) => area.sectors || []) // Flatten the sectors into an array
                          ?.find(
                            (sector) =>
                              sector.localId ===
                              selectedEquipment?.localId.slice(0, 3),
                          )?.name || ""}
                      </span>
                    </PopoverContent>
                  </Popover>
                  <Popover
                    open={isEquipmentNameHovered}
                    onOpenChange={setIsEquipmentNameHovered}
                  >
                    <PopoverTrigger
                      asChild
                      onMouseEnter={() => setIsEquipmentNameHovered(true)}
                      onMouseLeave={() => setIsEquipmentNameHovered(false)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEquipmentNameHovered(false);
                      }}
                      onBlur={() => setIsEquipmentNameHovered(false)}
                    >
                      <label
                        className={cn(
                          "relative flex h-12 w-40 items-center justify-start overflow-hidden rounded-2xl pr-1",
                          "bg-primary",
                        )}
                      >
                        <span
                          className={cn(
                            "bg-primary/20 text-primary flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl p-1 font-bold",
                            "bg-white/20 text-white",
                          )}
                        >
                          {selectedEquipment?.localId}
                        </span>
                        <input
                          className={cn(
                            "peer transparent h-full px-4 placeholder:text-neutral-300 focus:outline-none",
                            "text-white",
                          )}
                          placeholder="Nome da Área"
                          value={selectedEquipment?.name}
                          disabled
                        />

                        <div
                          className={cn(
                            "absolute left-0 z-10 h-full w-full rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.15)] transition duration-200 peer-focus:shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                            "shadow-[0px_2px_7px_rgba(0,0,0,0.35)]",
                          )}
                        />
                      </label>
                    </PopoverTrigger>
                    <PopoverContent className="w-max max-w-40 bg-white p-1 text-sm break-words">
                      <PopoverArrow className="fill-neutral-300" />
                      <span>{selectedEquipment?.name}</span>
                    </PopoverContent>
                  </Popover>
                  <Popover
                    open={isSetNameHovered}
                    onOpenChange={setIsSetNameHovered}
                  >
                    <PopoverTrigger
                      asChild
                      onMouseEnter={() => setIsSetNameHovered(true)}
                      onMouseLeave={() => setIsSetNameHovered(false)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSetNameHovered(false);
                      }}
                      onBlur={() => setIsSetNameHovered(false)}
                    >
                      <label
                        className={cn(
                          "relative flex h-12 w-40 items-center justify-start overflow-hidden rounded-2xl pr-1",
                          "bg-primary",
                        )}
                      >
                        <span
                          className={cn(
                            "bg-primary/20 text-primary flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl p-1 font-bold",
                            "bg-white/20 text-white",
                          )}
                        >
                          {selectedSet?.localId}
                        </span>
                        <input
                          className={cn(
                            "peer transparent h-full px-4 placeholder:text-neutral-300 focus:outline-none",
                            "text-white",
                          )}
                          placeholder="Nome da Área"
                          value={selectedSet?.name}
                          disabled
                        />

                        <div
                          className={cn(
                            "absolute left-0 z-10 h-full w-full rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.15)] transition duration-200 peer-focus:shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                            "shadow-[0px_2px_7px_rgba(0,0,0,0.35)]",
                          )}
                        />
                      </label>
                    </PopoverTrigger>
                    <PopoverContent className="w-max max-w-40 bg-white p-1 text-sm break-words">
                      <PopoverArrow className="fill-neutral-300" />
                      <span>{selectedSet?.name}</span>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex h-60 w-full flex-col">
                  <ScrollArea className="h-full">
                    {[...Array(subSetsArrayLength)].map((_, index) => (
                      <div
                        key={index}
                        className="col-span-3 mb-1 flex items-end justify-between gap-4 px-4"
                      >
                        <div
                          className={cn(
                            "text-primary flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl bg-white font-bold shadow-[0px_2px_7px_rgba(0,0,0,0.15)]",
                            isSubSetFullyFilled(inputSubSetsValues[index]) &&
                              "bg-primary text-white",
                          )}
                        >
                          <span>{index + 1}.</span>
                        </div>
                        <div className="flex w-full flex-col">
                          <span className="text-primary text-sm">
                            Nome do Subconjunto
                          </span>
                          <input
                            type="text"
                            className="h-12 w-full rounded-2xl bg-white p-2 px-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-neutral-300 focus:outline-none"
                            placeholder="Identificação do Subconjunto"
                            onChange={(e) =>
                              handleInputChange(index, "name", e.target.value)
                            }
                            value={inputSubSetsValues[index].name}
                          />
                        </div>
                        <div className="flex w-full flex-col">
                          <span className="text-primary text-sm">
                            Código do Subconjunto
                          </span>
                          <input
                            type="text"
                            className="h-12 w-full rounded-2xl bg-white p-2 px-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] placeholder:text-neutral-300 focus:outline-none"
                            placeholder="Código do Subconjunto"
                            onChange={(e) =>
                              handleInputChange(index, "code", e.target.value)
                            }
                            value={inputSubSetsValues[index].code}
                          />
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddSubSet();
                    }}
                    className={cn(
                      "bg-primary h-12 w-max self-end rounded-full px-4 font-bold text-white",
                    )}
                  >
                    + Cadastrar outro Subconjunto
                  </button>
                  <button
                    onClick={() => setSelectedSet(null)}
                    className="h-10 w-40 rounded-xl bg-green-500 p-2 text-sm text-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </>
          ) : selectedEquipment ? (
            <>
              <div className="col-span-3 flex items-center gap-2">
                <button
                  onClick={() => setSelectedEquipment(null)}
                  className="text-primary flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.35)]"
                >
                  <ChevronLeft />
                </button>
                <Popover
                  open={isSectorNameHovered}
                  onOpenChange={setIsSectorNameHovered}
                >
                  <PopoverTrigger
                    asChild
                    onMouseEnter={() => setIsSectorNameHovered(true)}
                    onMouseLeave={() => setIsSectorNameHovered(false)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSectorNameHovered(false);
                    }}
                    onBlur={() => setIsSectorNameHovered(false)}
                  >
                    <label
                      className={cn(
                        "relative flex h-12 w-40 items-center justify-start overflow-hidden rounded-2xl pr-1",
                        "bg-primary",
                      )}
                    >
                      <span
                        className={cn(
                          "bg-primary/20 text-primary flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl p-1 font-bold",
                          "bg-white/20 text-white",
                        )}
                      >
                        {selectedSector?.localId}
                      </span>
                      <input
                        className={cn(
                          "peer transparent h-full px-4 placeholder:text-neutral-300 focus:outline-none",
                          "text-white",
                        )}
                        placeholder="Nome da Área"
                        value={selectedSector?.name}
                        disabled
                      />

                      <div
                        className={cn(
                          "absolute left-0 z-10 h-full w-full rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.15)] transition duration-200 peer-focus:shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                          "shadow-[0px_2px_7px_rgba(0,0,0,0.35)]",
                        )}
                      />
                    </label>
                  </PopoverTrigger>
                  <PopoverContent className="w-max max-w-40 bg-white p-1 text-sm break-words">
                    <PopoverArrow className="fill-neutral-300" />
                    <span>
                      {layoutData.areas
                        ?.flatMap((area) => area.sectors || []) // Flatten the sectors into an array
                        ?.find(
                          (sector) =>
                            sector.localId ===
                            selectedEquipment?.localId.slice(0, 3),
                        )?.name || ""}
                    </span>
                  </PopoverContent>
                </Popover>
                <Popover
                  open={isEquipmentNameHovered}
                  onOpenChange={setIsEquipmentNameHovered}
                >
                  <PopoverTrigger
                    asChild
                    onMouseEnter={() => setIsEquipmentNameHovered(true)}
                    onMouseLeave={() => setIsEquipmentNameHovered(false)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEquipmentNameHovered(false);
                    }}
                    onBlur={() => setIsEquipmentNameHovered(false)}
                  >
                    <label
                      className={cn(
                        "relative flex h-12 w-40 items-center justify-start overflow-hidden rounded-2xl pr-1",
                        "bg-primary",
                      )}
                    >
                      <span
                        className={cn(
                          "bg-primary/20 text-primary flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl p-1 font-bold",
                          "bg-white/20 text-white",
                        )}
                      >
                        {selectedEquipment.localId}
                      </span>
                      <input
                        className={cn(
                          "peer transparent h-full px-4 placeholder:text-neutral-300 focus:outline-none",
                          "text-white",
                        )}
                        placeholder="Nome da Área"
                        value={selectedEquipment.name}
                        disabled
                      />

                      <div
                        className={cn(
                          "absolute left-0 z-10 h-full w-full rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.15)] transition duration-200 peer-focus:shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                          "shadow-[0px_2px_7px_rgba(0,0,0,0.35)]",
                        )}
                      />
                    </label>
                  </PopoverTrigger>
                  <PopoverContent className="w-max max-w-40 bg-white p-1 text-sm break-words">
                    <PopoverArrow className="fill-neutral-300" />
                    <span>{selectedEquipment.name}</span>
                  </PopoverContent>
                </Popover>
              </div>
              {layoutData.areas
                ?.flatMap((area) => area.sectors || [])
                .flatMap((sector) => sector.equipments || [])
                .find((eq) => eq.localId === selectedEquipment.localId)
                ?.sets?.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="text-primary text-sm">{item.name}</span>
                    <label
                      onClick={() => handleSelectSet(item)}
                      className={cn(
                        "relative flex h-12 items-center justify-end rounded-2xl px-4",
                        item.subSets ? "bg-primary" : "",
                      )}
                    >
                      <input
                        className={cn(
                          "peer transparent absolute left-0 h-full w-[calc(100%-2rem)] px-4 placeholder:text-neutral-300 focus:outline-none",
                          item.subSets ? "text-white" : "",
                        )}
                        placeholder="TAG do Equipamento"
                        value={item.name}
                        readOnly
                      />
                      <Image
                        src="/icons/equipment.png"
                        alt=""
                        width={200}
                        height={200}
                        className={cn(
                          "absolute h-max w-5 object-contain transition duration-200 peer-focus:translate-x-2 peer-focus:opacity-0",
                          item.subSets
                            ? "opacity-0"
                            : "peer-focus:translate-x-2 peer-focus:opacity-0",
                        )}
                      />
                      <Image
                        src={
                          item.subSets
                            ? "/icons/checkCheckWhite.png"
                            : "/icons/checkCheck.png"
                        }
                        alt=""
                        width={200}
                        height={200}
                        className={cn(
                          "absolute h-max w-5 -translate-x-2 object-contain opacity-0 transition duration-200 peer-focus:translate-x-0 peer-focus:opacity-100",
                          item.subSets
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-2 opacity-0",
                        )}
                      />
                      <div
                        className={cn(
                          "absolute left-0 z-10 h-full w-full rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.15)] transition duration-200 peer-focus:shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                          item.subSets
                            ? "shadow-[0px_2px_7px_rgba(0,0,0,0.5)]"
                            : "",
                        )}
                      />
                    </label>
                  </div>
                ))}
            </>
          ) : (
            <>
              <div className="col-span-4 flex flex-col gap-2">
                <span>
                  Texto para Explicar que deverá selecionar um Setor antes do
                  Equipamento:
                </span>
                <label className="border-primary relative flex h-8 w-60 items-center rounded-md border">
                  <input
                    className="transparent placeholder:neutral-300 absolute left-0 h-full w-[calc(100%-2rem)] rounded-md px-4 focus:outline-none"
                    placeholder="Buscar Setor"
                  />
                  <div className="bg-primary absolute right-0 flex h-full w-8 items-center justify-center">
                    <Search size={12} />
                  </div>
                </label>
              </div>
              {layoutData.areas &&
                layoutData.areas
                  .flatMap((area) => area.sectors || [])
                  .flatMap((sector) => sector.equipments || [])
                  .slice(
                    (currentEquipmentPage - 1) * 12,
                    currentEquipmentPage * 12,
                  )
                  .map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <label
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSector(
                            layoutData.areas
                              ?.flatMap((area) => area.sectors || []) // Flatten the sectors into an array
                              ?.find(
                                (sector) =>
                                  sector.localId === item.localId.slice(0, 3),
                              ) as SectorProps,
                          );
                          setSelectedEquipment(item);
                        }}
                        className={cn(
                          "relative flex h-12 cursor-pointer items-center justify-start rounded-2xl pr-1",
                          item.sets?.find((set) => set.subSets) && "bg-primary",
                        )}
                      >
                        <span
                          className={cn(
                            "bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-2xl p-1 font-bold",
                            item.sets?.find((set) => set.subSets) &&
                              "bg-white/20 text-white",
                          )}
                        >
                          {item.localId}
                        </span>
                        <input
                          className={cn(
                            "peer transparent absolute right-0 h-full w-[calc(100%-3rem)] px-4 placeholder:text-neutral-300 focus:outline-none",
                            item.sets?.find((set) => set.subSets) &&
                              "text-white",
                          )}
                          placeholder="Nome da Área"
                          value={item.name}
                          disabled
                        />

                        <div
                          className={cn(
                            "absolute left-0 z-10 h-full w-full rounded-2xl shadow-[0px_2px_7px_rgba(0,0,0,0.15)] transition duration-200 peer-focus:shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                            item.sets?.find((set) => set.subSets) &&
                              "shadow-[0px_2px_7px_rgba(0,0,0,0.5)]",
                          )}
                        />
                      </label>
                    </div>
                  ))}
            </>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (!selectedEquipment) {
                setSelectedLayoutStep(3);
              } else if (selectedEquipment && !selectedSet) {
                setSelectedLayoutStep(4);
              }
            }}
            className={cn(
              "bg-primary h-12 w-full self-end rounded-full px-4 font-bold text-white",
              selectedSet && "hidden",
            )}
          >
            + Cadastrar{" "}
            {selectedEquipment ? "outro Conjunto" : "outro Equipamento"}
          </button>
        </div>
        <div
          className={cn(
            "flex w-full items-center justify-end",
            selectedSet && "hidden",
          )}
        >
          <CustomPagination
            currentPage={currentEquipmentPage}
            setCurrentPage={setCurrentEquipmentPage}
            pages={equipmentPages}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
