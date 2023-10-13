'use client'
import { Dialog } from "@headlessui/react";
import styles from "./Preloader.module.css";
import React, { useEffect } from "react";

export default function Preloader({ loaded }) {
    useEffect(() => {
        console.log(loaded);
    }, [loaded])
  return (
    <Dialog as="div" open={!loaded} onClose={() => console.log('close')} className="fixed inset-0 flex items-center justify-center">
      <Dialog.Overlay className={styles.loader_container} />
      <div className={styles.loader}></div>
    </Dialog>
  );
}