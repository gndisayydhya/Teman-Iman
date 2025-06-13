document.addEventListener("DOMContentLoaded", () => {
  const checklistItems = document.querySelectorAll(".checklist-item input");

  checklistItems.forEach(item => {
    item.addEventListener("change", () => {
      console.log(item.id + " changed to", item.checked);
    });
  });
});
