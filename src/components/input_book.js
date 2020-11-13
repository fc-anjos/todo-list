const inputBook = () => `
<form id="form">
  <div>
    <label for="title">Title</label>
    <input type="text" id="title" name="title">
  </div>


  <div>
    <label for="description">Description</label>
    <input type="text" id="description" name="description">
  </div>

  <div>
    <label for="priority">Priority</label>
    <input type="number" id="number" name="priority">
  </div>

  <input type="submit" value="Submit">
</form>`;
export default inputBook;
