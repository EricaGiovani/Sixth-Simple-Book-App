/* ============================================================================
 * 3 — Implementasikan fungsi-fungsi manajemen buku
 * File: src/functions/bookManager.ts
 * ============================================================================
 *
 * Di sinilah logika aplikasi berada. Ada tiga fungsi yang harus dibuat.
 * Kerjakan SATU PER SATU dan uji lewat `src/main.ts` setiap kali satu fungsi
 * selesai. Jangan tulis ketiganya sekaligus lalu baru dijalankan — kalau ada
 * error, kamu akan sulit menebak fungsi mana penyebabnya.
 *
 * Sebelum mulai, import apa yang kamu butuhkan dari file sebelumnya:
 * - Tipe `Book` ada di `../types`
 * - Array `books` ada di `../data/books`
 * ========================================================================== */

// Tulis import kamu di bawah ini:
import {type Book} from "../types/index";
import { books } from "../data/books"


/* ----------------------------------------------------------------------------
 * FUNGSI 1 — addBook
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Menambahkan satu buku baru ke dalam koleksi.
 * -------------------------------------------------------------------------- */

// Tulis fungsi addBook di bawah ini:
export function addBook(book: Book): void{
  books.push(book)
  console.log(`"${book.title}" Book has been successfully added!`)
}


/* ----------------------------------------------------------------------------
 * FUNGSI 2 — listBooks
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Menampilkan seluruh buku yang tersimpan.
 *
 * CONTOH OUTPUT YANG DIHARAPKAN
 *   Daftar Buku:
 *   1. Clean Code - Robert C. Martin (2008)
 *   2. The Pragmatic Programmer - Andrew Hunt (1999)
 * -------------------------------------------------------------------------- */

// Tulis fungsi listBooks di bawah ini:
export function listBooks(): void {
  if (books.length === 0) {
    console.log("There is no book yet");
    return;
  }
  console.log("Book List:");
  books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
  });
}

/* ----------------------------------------------------------------------------
 * FUNGSI 3 — searchBook
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Mencari buku berdasarkan judul. Ini bagian paling menantang di assignment ini,
 * karena parameternya OPSIONAL.
 *
 * CONTOH OUTPUT YANG DIHARAPKAN
 *   searchBook("clean") -> Hasil pencarian "clean": Clean Code - Robert C. Martin (2008)
 *   searchBook("xyz")   -> Buku dengan judul "xyz" tidak ditemukan.
 *   searchBook()        -> (menampilkan seluruh daftar buku)
 * -------------------------------------------------------------------------- */

// Tulis fungsi searchBook di bawah ini:


/* ----------------------------------------------------------------------------
 * Jangan lupa
 * Ketiga fungsi di atas dipakai dari `src/main.ts`, jadi semuanya harus
 * di-`export`.
 * -------------------------------------------------------------------------- */
