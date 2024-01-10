import { useState } from "react";
import { RotateCcw } from "lucide-react";

function App() {
  const [monthRessources, setMonthRessources] = useState(0);
  const [couple, setCouple] = useState(false);
  const [children, setChildren] = useState(0);
  const [otherPersons, setOtherPersons] = useState(0);
  const getTotalPointsCharge = () => {
    if (
      Number.isInteger(children) &&
      children >= 0 &&
      Number.isInteger(otherPersons) &&
      otherPersons >= 0
    ) {
      return 1.5 + (otherPersons + children) * 0.5 + (couple ? 0.5 : 0);
    }
  };
  let totalPointsCharge = getTotalPointsCharge();
  const getMEM = () => {
    if (totalPointsCharge && Number.isInteger(monthRessources)) {
      return monthRessources / totalPointsCharge;
    }
  };
  let mem = getMEM();
  return (
    <div className="max-w-[400px] sm:mt-6 bg-slate-100 rounded mx-auto text-slate-900 shadow-md">
      <header className="bg-slate-800 text-slate-100 rounded-t">
        <h1 className="py-4 text-2xl font-semibold pl-4 border-b border-[orangered]">
          Calcul de la MEJ
        </h1>
      </header>
      <main className="p-4">
        <label className="flex justify-between">
          <span>Total des ressources mensuelles</span>
          <input
            type="number"
            min={0}
            max={10000}
            className="bg-slate-50 border border-slate-400 h-6 w-20 rounded text-center focus:ring-1 focus:ring-indigo-500 outline-none "
            value={monthRessources}
            onChange={(e) => setMonthRessources(Number(e.target.value))}
          />
        </label>
        <hr className="border-slate-400 my-4" />
        <h2 className="py-2 font-semibold">Nombre de personnes au foyer</h2>
        <label className="flex justify-between mb-2">
          <span>Couple</span>
          <input
            type="checkbox"
            className="bg-slate-50 border  border-slate-400 h-6  rounded-full mr-8 pl-2 focus:ring-1 focus:ring-indigo-500 outline-none "
            onChange={(e) => setCouple(e.target.checked)}
            checked={couple}
          />
        </label>
        <label className="flex justify-between mb-2">
          <span>Enfant(s)</span>
          <input
            type="number"
            min={0}
            max={20}
            className="bg-slate-50 text-center border border-slate-400 h-6 w-20 rounded pl-2 focus:ring-1 focus:ring-indigo-500 outline-none "
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
          />
        </label>
        <label className="flex justify-between mb-2">
          <span>Personne(s) supplémentaire(s) au foyer</span>
          <input
            type="number"
            min={0}
            max={20}
            className="bg-slate-50 text-center border border-slate-400 h-6 w-20 rounded pl-2 focus:ring-1 focus:ring-indigo-500 outline-none "
            value={otherPersons}
            onChange={(e) => setOtherPersons(Number(e.target.value))}
          />
        </label>

        <div className="flex justify-between pb-4">
          <p>Total des points de charge</p>
          <p className="bg-slate-300 border border-slate-400 h-6 w-20 rounded font-bold text-center">
            {totalPointsCharge}
          </p>
        </div>
        <hr className="border-slate-400 mb-6" />
        <div className="bg-orange-200 rounded border border-[orangered] mb-6">
          <div className="flex justify-around py-2  items-center">
            <p className="font-bold">MEM</p>
            <p className="bg-slate-100 border border-slate-400 h-6 w-20 rounded font-bold text-center">
              {mem === 0 ? "" : mem.toFixed(0)}
            </p>
          </div>
          <div className="flex justify-around py-2 ">
            <p className="font-bold ">MEJ</p>
            <p className="bg-slate-100 border border-slate-400 h-6 w-20 rounded font-bold text-center">
              {mem === 0 ? "" : (mem / 30).toFixed(1)}
            </p>
          </div>
        </div>
        <button
          className="block bg-[orangered] py-2 px-8 mr-2 ring-1 ring-[orangered] mb-2 rounded ml-auto text-slate-100 font-semibold cursor-pointer hover:bg-orange-600"
          onClick={() => {
            setMonthRessources(0),
              setChildren(0),
              setCouple(false),
              setOtherPersons(0);
          }}
        >
          <RotateCcw color="white" size={20} strokeWidth={2} />
        </button>
      </main>
    </div>
  );
}

export default App;
