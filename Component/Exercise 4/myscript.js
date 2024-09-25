const Header = () => {
    return (
    <header className ="header">
        <h1>Informasi Mahasiswa UNKLAB</h1>
        <p>Tutorial JSX Sederhana</p>
    </header>

    )
}

const Table = () => {
    return (
        <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
        <thead>
            <tr>
                <th>Nama</th>
                <th>Gender</th>
                <th>Jurusan</th>
                <th>Whatsapp</th>
                <th>Alamat</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Kevin Wijaya Tjiu</td>
                <td>Laki - Laki</td>
                <td>Informatika</td>
                <td>08xx-xxxx-xxxx</td>
                <td>Jl. Arnold Mononutu, Airmadidi Bawah</td>
            </tr>

            <tr>
                <td>David Tjia</td>
                <td>Laki - Laki</td>
                <td>Informatika</td>
                <td>08xx-xxxx-xxxx</td>
                <td>Jl. Arnold Mononutu, Airmadidi Bawah</td>
            </tr>

            <tr>
                <td>Daniel Mozard Jacob</td>
                <td>Laki - Laki</td>
                <td>Sistem Informasi</td>
                <td>08xx-xxxx-xxxx</td>
                <td>Jl. Arnold Mononutu, Airmadidi Bawah</td>
            </tr>

            <tr>
                <td>Andy Daniel</td>
                <td>Laki - Laki</td>
                <td>Informatika</td>
                <td>08xx-xxxx-xxxx</td>
                <td>Jl. Arnold Mononutu, Airmadidi Bawah</td>
            </tr>

            <tr>
                <td>Joshua Tulangi Leader</td>
                <td>Laki - Laki</td>
                <td>Informatika</td>
                <td>08xx-xxxx-xxxx</td>
                <td>Jl. Arnold Mononutu, Airmadidi Bawah</td>
            </tr>

        </tbody>
    </table>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <Table />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("app"))