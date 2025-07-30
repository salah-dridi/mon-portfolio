import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import informatiqueData from '../Data/InformatiqueData';
function CourbeInformatique() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2 style={{ color: '#66cee5ff', textAlign: 'center' }}>Évolution de l'utilisation de l'informatique dans le monde</h2>
      <ResponsiveContainer>
        <LineChart data={informatiqueData}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="année" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="utilisateurs" stroke="#66cee5ff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CourbeInformatique;
