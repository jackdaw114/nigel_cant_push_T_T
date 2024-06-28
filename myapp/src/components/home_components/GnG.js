import React from 'react'
import Table from '../reusable/Table'

const GnG = () => {
    // TODO: API call to fetch racks
    // sample racks
    const racks = {
        server: [
            "DELL R730 SERVER", "DELL R730 SERVER", "DELL R740 SERVER", "KVM CONSOLE",
            "DELL R740 SERVER", "DELL R940 SERVER", "DELL R940 SERVER", "DELL R940 SERVER"
        ],
        network_1: [
            "CISCO SAN SWITCH MDS9148S", "WOBSP01 : S5232F", "WOBLF01 : S5232F", "PATCH PANEL",
            "WOBLF03 : S4148T", "PATCH PANEL", "LIU", "WOBLF06 : S4148T"
        ],
        network_2: [
            "LIU", "WOBSP02 : S5232F", "WOBLF02 : S5248F", "PATCH PANEL",
            "WOBLF04 : S4148T", "PATCH PANEL", "LIU - INFOCOM", "LIU - SPIC"
        ],
        storage:[
            "DELL STORAGE SAN SW1", "DELL STORAGE SAN SW1", "KVM CONSOLE", "DELL EMC F600 NODE 08",
            "DELL EMC F600 NODE 07", "DELL EMC F600 NODE 06", "DELL EMC F600 NODE 05",
            "DELL EMC F600 NODE 04", "DELL EMC F600 NODE 03", "DELL EMC F600 NODE 02",
            "DELL EMC F600 NODE 01", "DELL EMC B100 NODE 15", "DELL EMC A300 NODE 1",
            "DELL EMC A300 NODE 2", "DELL EMC A300 NODE 3", "DELL EMC A300 NODE 4",
            "DELL EMC A300 NODE 5", "DELL EMC A300 NODE 6"
        ],
        peripheral: [
            "IBM 3590 TAPE DRIVE TS1140", "IBM 3590 TAPE DRIVE TS1140", "IBM 3590 TAPE DRIVE TS1140",
            "IBM 3590 TAPE DRIVE TS1150", "NEOSERIES LTO 6 TAPE LIBRARY (2D-140 SLOTS)",
            "IBM LTO 8 TAPE LIBRARY (1D-40 SLOTS)", "IBM LTO 8 TAPE LIBRARY (1D-80 SLOTS)",
            "IBM LTO 8 TAPE LIBRARY (1D-80 SLOTS)"
        ]
    };
    

    // Function to Normalize array lengths.
    function normalizeArrayLengths(data, fillValue = "") {
        const maxLength = Math.max(...Object.values(data).map((arr) => arr.length));
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, value.concat(Array(maxLength - value.length).fill(fillValue))])
        );
    }

    const normalizedRacks = normalizeArrayLengths(racks);
    // console.log(normalizedRacks);

    

    return (
        <div className='flex mx-2 border-r border-black'>

            <Table rack={normalizedRacks.server} name="Server" />
            <Table rack={normalizedRacks.network_1} name="Network-I" />
            <Table rack={normalizedRacks.network_2} name="Network-II" />
            <Table rack={normalizedRacks.storage} name="Storage" />
            <Table rack={normalizedRacks.peripheral} name="Peripheral" />

        </div>

    )
}

export default GnG