import { useEffect, useState } from "react"

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [company, setCompany] = useState("")
  const [category, setCategory] = useState("")

  const fetchJobs = (url) => {
    setLoading(true)
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella risposta del server")
        }
      })
      .then((data) => {
        setJobs(data.data.slice(0, 15)) // Solo i primi 15 risultati
        setLoading(false)
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err)
        setJobs([])
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchJobs("https://strive-benchmark.herokuapp.com/api/jobs")
  }, [])

  const handleSearch = () => {
    let url = "https://strive-benchmark.herokuapp.com/api/jobs"
    if (query) {
      url += `?search=${query}`
    } else if (company) {
      url += `?company=${company}`
    } else if (category) {
      url += `?category=${category}&limit=15`
    }
    fetchJobs(url)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Offerte di lavoro</h1>
      <div className="mb-6 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Cerca per parola chiave"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded mb-3 me-2"
        />
        <input
          type="text"
          placeholder="Filtra per azienda"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="p-2 border rounded mb-3 me-2"
        />
        <input
          type="text"
          placeholder="Filtra per categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded mb-3 me-2"
        />
        <button
          onClick={handleSearch}
          className="bg-success text-dark px-4 py-2 rounded mb-3"
        >
          Cerca
        </button>
      </div>
      {loading ? (
        <p>Caricamento...</p>
      ) : jobs.length === 0 ? (
        <p>Nessun risultato trovato.</p>
      ) : (
        <ul className="space-y-4 list-unstyled">
          {jobs.map((job) => (
            <li key={job._id} className="border p-4 rounded shadow mb-3">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-700">{job.company_name}</p>
              <p className="text-sm text-gray-500">{job.category}</p>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Visualizza annuncio
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Jobs
