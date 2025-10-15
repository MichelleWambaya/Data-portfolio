"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
	open: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
};

export function Modal({ open, onClose, title, children }: ModalProps) {
	useEffect(() => {
		const onEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onEsc);
		return () => window.removeEventListener("keydown", onEsc);
	}, [onClose]);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-[60] bg-black/70 overflow-y-auto"
					onClick={onClose}
				>
					<motion.div
						initial={{ y: 32, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 32, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="absolute left-1/2 top-8 -translate-x-1/2 w-full max-w-4xl bg-midnight text-white border border-neutral-800 max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						{title && <div className="border-b border-neutral-800 p-4 font-bold sticky top-0 bg-midnight">{title}</div>}
						<div className="p-6 text-sm leading-relaxed">{children}</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
