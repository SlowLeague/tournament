document.getElementById('tour-tabs').addEventListener('click', (e) => {
  const is_playoff_btn = e.target.id.split('-')[0] === 'btn';
  if (is_playoff_btn) {
    const playoff_bracket = e.target.id.split('-')[1];
    document.getElementsByClassName('tour-active')[0].className = 'tour-button';
    e.target.className += ' tour-active';

    switch (playoff_bracket) {
      case 'upper_bracket':
        document.getElementsByClassName(playoff_bracket)[0].className = 'tournament-brackets upper_bracket';
        document.getElementsByClassName('lower_bracket')[0].className = 'tournament-brackets lower_bracket disabled';
        document.getElementsByClassName('final')[0].className = 'tournament-brackets final disabled';
        break;
      case 'lower_bracket':
        document.getElementsByClassName('upper_bracket')[0].className = 'tournament-brackets upper_bracket disabled';
        document.getElementsByClassName(playoff_bracket)[0].className = 'tournament-brackets lower_bracket';
        document.getElementsByClassName('final')[0].className = 'tournament-brackets final disabled';
        break;
      case 'final':
        document.getElementsByClassName('upper_bracket')[0].className = 'tournament-brackets upper_bracket disabled';
        document.getElementsByClassName('lower_bracket')[0].className = 'tournament-brackets lower_bracket disabled';
        document.getElementsByClassName(playoff_bracket)[0].className = 'tournament-brackets final';
        break;

      default:
        break;
    }
  }
});
