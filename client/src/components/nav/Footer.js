export default function Footer() {
  return (
<div className="text-center p-4 bg-dark text-lightweight mt-4" style={{ color: "#ffffff", bottom: "0", left: "0", width: "100%" }}>
      <h4 className="mt-4">NestFinder</h4>
      <p className="mt-3">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
