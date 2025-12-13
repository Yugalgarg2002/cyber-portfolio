import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

const data = [
    { subject: "Frontend", A: 120, fullMark: 150 },
    { subject: "Backend", A: 98, fullMark: 150 },
    { subject: "DevOps", A: 50, fullMark: 150 },
    { subject: "Design", A: 90, fullMark: 150 },
    { subject: "System Design", A: 65, fullMark: 150 },
    { subject: "Database", A: 85, fullMark: 150 },
];

export function SkillRadar() {
    return (
        <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
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
