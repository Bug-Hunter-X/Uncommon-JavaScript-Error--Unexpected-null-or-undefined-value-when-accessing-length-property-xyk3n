function foo(x) {
  if (x === null || x === undefined || typeof x.length !== 'number') {
    return 0; // Handle null, undefined, or non-objects gracefully
  }
  return x.length; 
}
// Additional check to handle cases where x might not have a length property.