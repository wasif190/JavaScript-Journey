let role = 'admin';

switch (role) {
  case 'admin':
    console.log('You have full access.');
    // Intentional fall-through to the next case
  case 'editor':
    console.log('You can edit content.');
    break;
  case 'viewer':
    console.log('You can view content.');
    break;
  default:
    console.log('Unknown role. Restricted access.');
}
