describe('custom mathers', () => {
  it('discover how to write one, by fixing the errors the assertion tells you', () => {
    // from  ... assertThat(0, {});
    // to ... assertThat(0, {matches: () => {}});
    // and so on
  });
});
