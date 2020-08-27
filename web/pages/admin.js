import Head from "next/head";

import Table from "react-bootstrap/Table";

//make this a protected route and force to login

const Admin = () => {
  return (
    <div>
      <Head>
        <title>OJOS | Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Admin</h1>
      <div id="admin">
        <div className="inventory">
          <h1 className="admin-title">Products</h1>
          <Table>
            <thead>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th></th>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tbody>
          </Table>
        </div>
        <div className="inventory">
          <h1 className="admin-title">Add Products</h1>
          <form className="product-form" type="submit">
            <input
              type="text"
              placeholder="Product Name"
              className="product-form-input"
            />
            <input
              type="number"
              placeholder="Price"
              className="product-form-input"
            />
            <input type="file" className="product-form-input" />
            <textarea
              rows="6"
              type="text"
              placeholder="Description"
              className="product-form-input"
            />
            <button type="submit" className="product-form-input-button">
              Add
            </button>
          </form>
        </div>
      </div>
      {/* <h1 className="page-title">Homepage Images</h1>

      <h1 className="page-title">Edit Homepage</h1>
      <h1 className="page-title">Image One</h1>
      <form className="product-form" type="submit">
        <input type="file" className="product-form-input" />
        <input type="text" placeholder="Text" className="product-form-input" />
        <input
          type="url"
          placeholder="Redirect URL"
          className="product-form-input"
        />
        <button type="submit" className="product-form-input-button">
          Add
        </button>
      </form>
      <h1 className="page-title">Image Two</h1>
      <form className="product-form" type="submit">
        <input type="file" className="product-form-input" />
        <input type="text" placeholder="Text" className="product-form-input" />
        <input
          type="url"
          placeholder="Redirect URL"
          className="product-form-input"
        />
        <button type="submit" className="product-form-input-button">
          Add
        </button>
      </form>
      <h1 className="page-title">Image Three</h1>
      <form className="product-form" type="submit">
        <input type="file" className="product-form-input" />
        <input type="text" placeholder="Text" className="product-form-input" />
        <input
          type="url"
          placeholder="Redirect URL"
          className="product-form-input"
        />
        <button type="submit" className="product-form-input-button">
          Add
        </button>
      </form>
      <h1 className="page-title">Image Four</h1>
      <form className="product-form" type="submit">
        <input type="file" className="product-form-input" />
        <input type="text" placeholder="Text" className="product-form-input" />
        <input
          type="url"
          placeholder="Redirect URL"
          className="product-form-input"
        />
        <button type="submit" className="product-form-input-button">
          Add
        </button>
      </form> */}
    </div>
  );
};

export default Admin;
