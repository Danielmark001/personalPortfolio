const os = `
# CS2106 Introduction to OS 

## 9 Virtual Memory Management
#### Issues with virtual memory
1. **Discrepancy in Access Time** : Secondary storage access time is significantly longer than physical memory access time
2. **Page Faults**: When memory access results in a page fault, non-resident pages need to be loaded into memory, causing significant system slowdown.
3. **Thrashing**: If memory access results in a lot of page faults then this caises frequent loading of non-resident pages into the memory hence the system can slow down significantly

#### Locality principle

Temporal locality:  if a memory address is accessed now, it's likely to be accessed again in the near future.

Spatial Locality:  tendency where memory addresses that are close to the currently accessed address are likely to be accessed soon.

#### Demand paging
In demand paging, when a process starts running, it doesn't have all its needed pages loaded into memory. Instead, it only loads pages from disk into memory as they are accessed. When the process tries to access a page that is not in memory, a page fault occurs. Then, the operating system loads that page from disk into memory

- Processes start with no memory-resident pages.
- Pages are allocated only on page faults.

| Pros | Cons |
|------|-----|
|Efficient memory utilization with a minimal footprint. | Initial performance may suffer due to numerous page faults.|
| Swift initialization for new processes.| System can get stuck in a cycle of constant page faults hence thrashing |


#### Page Table Structure
 - Takes up physical memory space
 - Some systems have each page with a page table entry hence might result in huge page tables
 - High overhead
 - Page table can occupy several frames.
 
 #### Direct Paging
 Direct Paging is a page table structure where all entries are stored in a single table. In this method, each entry in the page table corresponds to a unique page in the logical memory space.

- Structure : All page table entries are kept in a **single table**
- Content of PTE: Each PTE typically contains the physical frame number of the corresponding page along with additional information bits (e.g., valid, read-only).
> **Example**:
> If we have a virtual address of 32 bits and a page size of 4KiB (2^12 bits)
> Number of pages : (2^32)/(2^12) = 2^20 pages
> If each PTE is 2 bytes in size, then for all pages, we can have 2^20 * 2 bytes = 2MiB

With 2^p pages in the logical memory space, we need p bits to represent one unique page and with 2^p PTEs (contains physical frame number and additional information bits)
> Example
- **Page Size**: 4 KiB (12 bits for offset)
- **Virtual Address**: 64-bit (16 ExaBytes of virtual address space)
- **Physical Memory**: 16 GiB (PA 34 bits)
- **Number of Virtual Pages**: 2^52
  - 2^52 PTE entries required.
- **Number of Physical Pages**: 2^22
- **Bytes per PTE**: In reality, PTE size = 8B (with other flags)
- **Page Table Size**: 2^55 B per process
- **Physical Memory Size**: 2^34 B

#### 2-level paging : Paging the page table
Concept:
- Instead of having a full page table for the entire memory space, we split it into smaller regions.
- Only the regions actively used by the process are allocated, saving memory.
- As the process requires more memory, new regions can be allocated dynamically.

Implementation:
- This approach resembles how we divide the logical memory into pages.
- To manage these regions, we use a "directory" to keep track of them, similar to how page tables track data pages.

> Example
- Virtual Address : 7 bits
- Page table size : 4 bytes (2 bits to represent)
- Number of pages : 7 - 2 => 5 bits left so can represent 2^5 = 32 pages
- Each chunk will have 4 entries since each page table size (2 bits required)
- Left number of bits : 5 - 2 = 3 bits 
- With 3 bits left, we can represent 2^3 chunks so there are 8 chunks in total

> In the scenario where the original page table has 2P entries, the following summarization can be made:

- To split the large page table into smaller ones, M bits are needed to uniquely identify each smaller page table.
- Each smaller page table consists of 2^(P-M) entries, reflecting the reduced size compared to the original.
- A single page directory is required to manage the smaller page tables.
- The page directory contains 2^M indices to locate each of the smaller page tables, facilitating efficient access and management of the memory structure.


## 10 File Abstraction
- File: Smallest amount of information that can be written to te secondary memory. A named collection of data, used for organizing secondary memory.
- File type: A description of the information contained in the file. 
- File extension: A part of the file name that follows a dot and identifies the type of the file.
- OS keeps a table of currently open files. The open operation enters the file into the table and places the file pointer at the beginning of the file. 
- Closing of a file - removes the file from the table of open files.
- Truncating a file - erasing all the information except the administrative entries. It removes the information from the file pointer to the end.

![](me.png)




---
Credit: CS2106 materials

`


export default os