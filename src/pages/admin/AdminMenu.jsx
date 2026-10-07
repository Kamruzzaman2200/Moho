import { useState } from "react";
import { useMenu } from "../../contexts/MenuContext";
import Swal from "sweetalert2";

const AdminMenu = () => {
  const { menuItems, categories, addCategory, addMenuItem, updateMenuItem, deleteMenuItem } = useMenu();
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Starters",
    price: "",
    description: "",
    image: "",
  });

  const filteredItems = menuItems.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === "All" || item.category === filterCategory;
    return matchSearch && matchCategory;
  });

  const openAddModal = () => {
    setEditItem(null);
    setFormData({ title: "", category: "Starters", price: "", description: "", image: "" });
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setEditItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      price: item.price,
      description: item.description || "",
      image: typeof item.image === "string" ? item.image : "",
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price) {
      alert("Please fill in required fields.");
      return;
    }
    const itemData = {
      title: formData.title,
      category: formData.category,
      price: formData.price.startsWith("৳") ? formData.price : `৳ ${formData.price}`,
      description: formData.description,
      image: formData.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    };
    if (editItem) {
      updateMenuItem(editItem.id, itemData);
    } else {
      addMenuItem(itemData);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    deleteMenuItem(id);
    setDeleteConfirm(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCategory = () => {
    Swal.fire({
      title: 'New Category',
      input: 'text',
      inputPlaceholder: 'Enter category name...',
      showCancelButton: true,
      confirmButtonText: 'Add Category',
      confirmButtonColor: '#2d3e2f',
      inputValidator: (value) => {
        if (!value) {
          return 'Category name cannot be empty!'
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        addCategory(result.value);
        Swal.fire({
          title: 'Added!',
          text: `Category "${result.value}" has been created.`,
          icon: 'success',
          confirmButtonColor: '#2d3e2f',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#2d3e2f]/5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
            Menu Management
          </h1>
          <p className="text-base-content/50 text-sm mt-1">{menuItems.length} items across {categories.length - 1} categories</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <button
            onClick={handleAddCategory}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#2d3e2f] text-[#2d3e2f] rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#2d3e2f] hover:text-white transition-all shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Add Category
          </button>
          <button
            onClick={openAddModal}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-[#d4a574] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#2d3e2f] transition-all shadow-md hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Add Item
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/30 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none bg-white text-sm"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-3 rounded-xl border border-[#2d3e2f]/10 bg-white text-sm font-medium text-[#2d3e2f] focus:border-[#d4a574] outline-none cursor-pointer"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#2d3e2f]/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-bold uppercase tracking-widest text-base-content/40 bg-[#f5f0eb]/50 border-b border-[#2d3e2f]/5">
                <th className="p-4">Item</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Description</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="border-b border-[#2d3e2f]/5 last:border-0 hover:bg-[#f5f0eb]/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-[#f5f0eb]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm font-semibold text-[#2d3e2f] max-w-[200px] truncate">{item.title}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="bg-[#f5f0eb] text-[#2d3e2f] px-3 py-1 rounded-lg text-xs font-medium">{item.category}</span>
                  </td>
                  <td className="p-4 text-sm font-bold text-[#d4a574]">{item.price}</td>
                  <td className="p-4 text-xs text-base-content/50 max-w-[200px] truncate">{item.description || "—"}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(item)}
                        className="p-2 hover:bg-blue-50 text-blue-500 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(item.id)}
                        className="p-2 hover:bg-red-50 text-red-400 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base-content/40 text-sm">No items found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1.5 hover:bg-red-50 text-base-content/40 hover:text-red-500 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold text-[#2d3e2f] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              {editItem ? "Edit Menu Item" : "Add New Item"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">Item Name *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Chicken Burger"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none bg-[#f5f0eb]/30 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 bg-[#f5f0eb]/30 text-sm focus:border-[#d4a574] outline-none cursor-pointer"
                  >
                    {categories.filter((c) => c !== "All").map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">Price *</label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="e.g., ৳ 250"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none bg-[#f5f0eb]/30 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe this dish..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none bg-[#f5f0eb]/30 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">Image</label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Paste image URL..."
                    className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none bg-[#f5f0eb]/30 text-sm"
                  />
                  <div className="text-center text-[10px] text-base-content/40 uppercase tracking-widest font-bold">or</div>
                  <label className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-[#2d3e2f]/10 hover:border-[#d4a574] cursor-pointer transition-colors bg-[#f5f0eb]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-base-content/50">Upload from device</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  {formData.image && (
                    <div className="w-full h-32 rounded-xl overflow-hidden bg-[#f5f0eb]">
                      <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border-2 border-[#2d3e2f]/10 text-[#2d3e2f] py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#f5f0eb] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#2d3e2f] text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#d4a574] transition-colors"
                >
                  {editItem ? "Save Changes" : "Add Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setDeleteConfirm(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 sm:p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2d3e2f] mb-2" style={{ fontFamily: "'Georgia', serif" }}>
              Delete Item?
            </h3>
            <p className="text-sm text-base-content/50 mb-6">This action cannot be undone. The item will be permanently removed from the menu.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 border-2 border-[#2d3e2f]/10 text-[#2d3e2f] py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#f5f0eb] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 bg-red-500 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
