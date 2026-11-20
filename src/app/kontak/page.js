"use client";

import FormKontak from "@/components/FormKontak";
import Link from "next/link";
import{Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card";

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">

            <h1 className="mb-8 text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
                Hubungi saya
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-3 w-full">

                <Card className="md:col-span-2">
                    <CardContent>
                    <FormKontak/>
                    </CardContent>
                </Card>
                
                <Card>
                <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Temukan Saya Di</CardTitle>
                </CardHeader>
                <CardContent>                
                       <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-utama dark:text-sky-200">
                                    GitHub
                                </h3>
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    className="mt-1.5 inline-block text-sm text-aksen dark:text-red-300 hover:underline"
                                    rel="noopener noreferrer"
                                >
                                    @github saya
                                </Link>
                            </div>

                            <div>
                                <h3 className="font-semibold text-utama dark:text-sky-200">
                                    Email
                                </h3>
                                <a
                                    href="mailto:alifanailrplkanesa@gmail.com"
                                    className="mt-1.5 inline-block w-full break-all text-sm text-aksen dark:text-red-300 hover:underline"
                                >
                                    alifanailrplkanesa@gmail.com
                                </a>
                            </div>
                        </div>
                </CardContent>
                </Card>
            </div>

        </main>
    );
}
