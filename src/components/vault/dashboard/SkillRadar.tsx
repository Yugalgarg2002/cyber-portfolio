import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

const data = [
    { subject: "Frontend", A: 100, fullMark: 100 },
    { subject: "Backend", A: 150, fullMark: 100 },
    { subject: "DevOps", A: 120, fullMark: 100 },
    { subject: "Design", A: 130, fullMark: 100 },
    { subject: "Database", A: 120, fullMark: 100 },
];

export function SkillRadar() {
    return (
        <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data}>
                    <PolarGrid stroke="#2a2a35" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#9090a0", fontSize: 10, fontFamily: "monospace" }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar
                        name="Skills"
                        dataKey="A"
                        stroke="#00f3ff"
                        strokeWidth={2}
                        fill="#00f3ff"
                        fillOpacity={0.2}
                    />
                </RadarChart>
            </ResponsiveContainer>
            <div className="absolute top-0 left-0 text-[10px] text-vault-text-dim">
                SKILL_MATRIX_V1.0
            </div>
        </div>
    );
}
