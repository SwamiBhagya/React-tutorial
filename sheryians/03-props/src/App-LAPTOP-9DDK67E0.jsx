import React from "react";
import Card from "./components/card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://imgs.search.brave.com/jkbMhUzFlfiqzmU4cnbqA5ScYzzLfJqTT1pJXORG2CM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Senior UX/UI Designer",
      tag: "Full Time",
      level: "Senior Level",
      pay: "$120/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/b62ojQhAB5vnTdXfvasUjCK-lmxJxqnxG5bjjUnv_K0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1sb2dvLW5pZ2h0/LWdsb3dzLW91dHNp/ZGUtZmFjYWRlLXRo/ZWlyLXNoYW5naGFp/LWZsYWdzaGlwLXN0/b3JlLTE2MDc4MDcx/NS5qcGc",
      companyName: "Apple",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag: "Full Time",
      level: "Mid–Senior Level",
      pay: "$110/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/JFNV7V9BWIDmVMNJXWmSekPtKxAM8eQTVujqJhYQiyA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BbWF6/b24tTG9nby01LTEy/MDB4NzUwLnBuZw",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "UX Researcher",
      tag: "Full Time",
      level: "Senior Level",
      pay: "$105/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/UNVwCOvgQ9rRwNN54A5d7-ypyBY7ErKU_-5gHc2UhcA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jcnlz/dGFscG5nLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/Mi9tZXRhLWxvZ28t/cG5nLnBuZw",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "Senior Product Designer",
      tag: "Full Time",
      level: "Senior Level",
      pay: "$130/hr",
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/m_t7dkPGW7zx4FUS2JMgC8PytnsS5KlNiDUZJKiAr0o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L05ldGZsaXgtTG9n/by0yMDA2LTUwMHgz/MzMucG5n",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "UI Designer",
      tag: "Contract",
      level: "Mid Level",
      pay: "$115/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/hFiXXfJD_twoqyiJAg5v21TQINvKLM_GCgGQVlqwypw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDkvTWljcm9zb2Z0/LVN5bWJvbC03MDB4/Mzk0LnBuZw",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Design Systems Lead",
      tag: "Full Time",
      level: "Senior Level",
      pay: "$125/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/wEJ1jq23mir_C7Y0y7AOSuT2kKqVqD5iWing7JhpqME/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MDg5NWYzMWQ1OThh/NTAwMDQ0OGVhOWEu/cG5n",
      companyName: "NVIDIA",
      datePosted: "2 weeks ago",
      post: "UX Engineer",
      tag: "Full Time",
      level: "Senior Level",
      pay: "$140/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/F5OTIiXQsj1Oyc_QZ1Pcf1XFN1HfraeROF6QZqwmMHw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
      companyName: "Tesla",
      datePosted: "5 days ago",
      post: "Product UX Designer",
      tag: "Full Time",
      level: "Mid Level",
      pay: "$118/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/7rlTivOD8JcM_OuHsz_Bg4opxqM2e-Q6CumyDAJhO_o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDkvSUJNLUxvZ28t/NzAweDM5NC5wbmc",
      companyName: "IBM",
      datePosted: "1 day ago",
      post: "Experience Designer",
      tag: "Part Time",
      level: "Senior Level",
      pay: "$95/hr",
      location: "Kolkata, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/F53Tmn8Xcjk7YB41bfyUsEq-cPy6TAVcRdyjItzg4tE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9PcmFj/bGUtTG9nby1IaXN0/b3J5LTEtMTE1NXg3/NzAucG5n",
      companyName: "Oracle",
      datePosted: "3 days ago",
      post: "UX Architect",
      tag: "Full Time",
      level: "Lead Level",
      pay: "$135/hr",
      location: "Chennai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((elem, idx) => {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              logo={elem.brandLogo}
              date={elem.datePosted}
              post={elem.post}
              tag={elem.tag}
              level={elem.level}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
