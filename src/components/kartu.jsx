import {Card, CardContent, CardHeader, CardTitle} from "@/Component/ui/card";

export default function kartu ({judul,children}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{judul}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    )
}