
    const params = new URLSearchParams(window.location.search);

    const heading = params.get("heading");
    const fullname = params.get("fullname");
    const description = params.get("description");

    if (heading) {
        const el = document.querySelectorAll(".heading");
        el.forEach(e => e.textContent = heading);
    }

    if (fullname) {
        const el = document.querySelector(".fullname");
        if (el) el.textContent = fullname;
    }

    if (description) {
        const el = document.querySelector(".description");
        if (el) el.textContent = description;
    }
