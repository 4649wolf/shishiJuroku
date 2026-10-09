(function (root) {
  'use strict';
  let database;
  async function open() { if (database) return database; database = await new Promise((resolve, reject) => { const request = indexedDB.open('shishijuroku-v1', 1); request.onupgradeneeded = () => request.result.createObjectStore('workspace'); request.onsuccess = () => { const db = request.result; db.onversionchange = () => { db.close(); database = null; }; resolve(db); }; request.onerror = () => reject(request.error); request.onblocked = () => reject(new Error('別のタブを閉じてからお試しください。')); }); return database; }
  async function read() { const db = await open(); return new Promise((resolve, reject) => { const tx = db.transaction('workspace', 'readonly'); const request = tx.objectStore('workspace').get('state'); request.onsuccess = () => resolve(request.result || null); request.onerror = () => reject(request.error); }); }
  async function write(state) { const db = await open(); const snapshot = structuredClone(state); return new Promise((resolve, reject) => { const tx = db.transaction('workspace', 'readwrite'); tx.objectStore('workspace').put(snapshot, 'state'); tx.oncomplete = () => resolve(); tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error || new Error('保存を中断しました。')); }); }
  root.SJRStorage = { read, write };
})(window);
