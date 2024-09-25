import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h2 align="center">Student Profile</h2>
      <p align="center">Buat <b><u>Student Profile Information</u></b> menggunakan ReactJS</p>

      <table border="1">
        <tr>
          <th><b>Nama</b></th>
          <td>Kevin Wijaya Tjiu</td>
        </tr>

        <tr>
          <th><b>Fakultas</b></th>
          <td>Fakultas Ilmu Komputer</td>
        </tr>

        <tr>
          <th><b>Jurusan</b></th>
          <td>Informatika</td>
        </tr>

        <tr>
          <th><b>Alamat</b></th>
          <td>Jl. Pahlawan no 54</td>
        </tr>

        <tr>
          <th><b>Nim</b></th>
          <td>105075324578</td>
        </tr>

        <tr>
          <th><b>Email</b></th>
          <td>Guest@gmail.com</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
