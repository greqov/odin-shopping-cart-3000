import { Link } from 'react-router';

const Home = () => (
  <div className="text-center">
    <h1 className="mt-3 mb-5 text-3xl">Such shop</h1>
    <p className="mb-12">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure at minus
      obcaecati unde eius architecto repellendus, quaerat laboriosam ea tenetur
      officiis id eligendi fugiat dicta rerum mollitia ipsa recusandae omnis.
      Delectus nesciunt illum ab reprehenderit quidem atque, a natus fugiat
      aperiam, quae magni voluptate, enim eveniet mollitia sunt non. Molestias.
    </p>
    <Link
      to="/shop"
      className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Go shopping
    </Link>
  </div>
);

export default Home;
