

describe 'index' do
  it 'displays project list' do
    expect(page).to have_css '.projects'
    within '.projects' do
      expect(page).should have_content 'ATM Challenge'
      expect(page).should have_content 'Library Challenge'
    end
  end
end
